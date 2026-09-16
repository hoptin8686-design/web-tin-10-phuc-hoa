"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EssayQuestion, LessonTheory, Question, TFQuestion } from "@/lib/types";
import { getLessonProgress, theoryKey, tfKey } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";

type Mode = "menu" | "theory" | "mcq" | "tf" | "essay" | "sgk";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
  sgkUrl,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  sgkUrl?: string | null;
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [bestTf, setBestTf] = useState<number | null>(null);
  const [readTheory, setReadTheory] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setBestTf(getLessonProgress(tfKey(lessonId))?.best ?? null);
      setReadTheory(getLessonProgress(theoryKey(lessonId)) !== null);
    }
  }, [mode, lessonId]);

  const leaveTo = (next: Mode) => {
    window.scrollTo({ top: 0 });
    setMode(next);
  };

  // 1. Chế độ Đọc SGK số hóa HTML
  if (mode === "sgk" && sgkUrl) {
    return (
      <div className="fixed inset-0 z-50 bg-[#05070b]">
        <div className="fixed left-4 top-3 z-10 flex items-center gap-2.5">
          <button
            onClick={() => leaveTo("menu")}
            className="rounded-full border border-white/20 bg-black/80 px-4 py-2 font-mono text-xs font-semibold text-white backdrop-blur transition hover:border-white/50 hover:bg-black shadow-card"
          >
            ← Quay lại Bài học
          </button>
          <a
            href={sgkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sea/40 bg-sea/80 px-4 py-2 font-mono text-xs font-semibold text-white backdrop-blur transition hover:bg-sea shadow-card"
          >
            ↗ Mở toàn màn hình tab mới
          </a>
        </div>
        <iframe
          src={sgkUrl}
          title={`SGK · ${lessonTitle}`}
          className="h-full w-full border-0 pt-14"
        />
      </div>
    );
  }

  // 2. Chế độ Lý thuyết tương tác
  if (mode === "theory" && theory) {
    return (
      <main className="playground min-h-screen pb-16">
        <TheoryViewer
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          theory={theory}
          onBack={() => leaveTo("menu")}
          onGoQuiz={() => leaveTo("mcq")}
        />
      </main>
    );
  }

  // 3. Chế độ Trắc nghiệm 4 lựa chọn
  if (mode === "mcq") {
    return (
      <main className="playground min-h-screen pb-16">
        <QuizClient
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={mcq}
          onBack={() => leaveTo("menu")}
          onGoNext={tf.length > 0 ? () => leaveTo("tf") : undefined}
        />
      </main>
    );
  }

  // 4. Chế độ Đúng/Sai
  if (mode === "tf") {
    return (
      <main className="playground min-h-screen pb-16">
        <TrueFalseQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={tf}
          onBack={() => leaveTo("menu")}
          onGoNext={essay.length > 0 ? () => leaveTo("essay") : undefined}
        />
      </main>
    );
  }

  // 5. Chế độ Tự luận / Thực hành
  if (mode === "essay") {
    return (
      <main className="playground min-h-screen pb-16">
        <EssayViewer
          lessonTitle={lessonTitle}
          questions={essay}
          onBack={() => leaveTo("menu")}
        />
      </main>
    );
  }

  // Màn hình Menu bài học chính
  return (
    <main className="playground min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Điều hướng trên cùng */}
        <div className="flex items-center justify-between gap-3 border-b border-star/10 pb-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-star/20 bg-void-card px-4 py-1.5 font-mono text-xs font-medium text-star hover:border-sea/40 transition"
          >
            ← Về trang chủ Tin 10
          </Link>
          <span className="font-mono text-xs text-star-soft">
            THPT Phục Hòa
          </span>
        </div>

        {/* Tiêu đề bài học */}
        <div className="mt-8 text-center sm:text-left">
          <span className="rounded-full bg-sea/15 px-3.5 py-1 font-mono text-xs font-bold text-sea-deep">
            {topicName}
          </span>
          <h1 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-star">
            {lessonTitle}
          </h1>
          <p className="mt-2 text-sm text-star-soft">
            Chọn một trong các phân hệ học tập dưới đây để bắt đầu. Hoàn thành trắc nghiệm từ 80% trở lên sẽ nhận sao thưởng ⭐.
          </p>
        </div>

        {/* Lưới 5 phân hệ học tập */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Card 1: Đọc SGK HTML */}
          {sgkUrl && (
            <button
              onClick={() => leaveTo("sgk")}
              className="flex flex-col justify-between rounded-2xl border border-sea/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-sea hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">📖</span>
                  <span className="rounded-full bg-sea/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sea-deep">
                    SGK Số hóa
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Đọc Sách giáo khoa
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Bản sách điện tử HTML nguyên văn SGK Kết nối tri thức, có mục lục trượt thông minh và nút tăng giảm cỡ chữ.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-sea-deep">
                Mở sách đọc ngay →
              </span>
            </button>
          )}

          {/* Card 2: Lý thuyết tương tác */}
          {theory && (
            <button
              onClick={() => leaveTo("theory")}
              className="flex flex-col justify-between rounded-2xl border border-coral/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-coral hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">💡</span>
                  {readTheory && (
                    <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-leaf-deep">
                      ✓ Đã đọc
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Lý thuyết Tương tác
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Dẫn nhập đời sống, ẩn dụ trực quan, sơ đồ vector màu sắc và câu hỏi kiểm tra nhanh xen kẽ.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-coral">
                Học lý thuyết sinh động →
              </span>
            </button>
          )}

          {/* Card 3: Trắc nghiệm 4 lựa chọn */}
          {mcq.length > 0 && (
            <button
              onClick={() => leaveTo("mcq")}
              className="flex flex-col justify-between rounded-2xl border border-sea/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-sea hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🎯</span>
                  {bestMcq !== null ? (
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold ${
                        bestMcq >= 80
                          ? "bg-leaf/20 text-leaf-deep"
                          : "bg-gold/20 text-gold-deep"
                      }`}
                    >
                      {bestMcq >= 80 ? `⭐ ${bestMcq}%` : `${bestMcq}%`}
                    </span>
                  ) : (
                    <span className="rounded-full bg-star/10 px-2.5 py-0.5 font-mono text-[11px] text-star-soft">
                      {mcq.length} câu hỏi
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Trắc nghiệm 4 lựa chọn
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Tự động trộn đề và đáp án, nút bấm to chống trượt trên điện thoại, chấm điểm và giải thích chi tiết ngay.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-sea-deep">
                {bestMcq !== null ? "Luyện lại đề mới →" : "Bắt đầu làm bài →"}
              </span>
            </button>
          )}

          {/* Card 4: Đúng / Sai */}
          {tf.length > 0 && (
            <button
              onClick={() => leaveTo("tf")}
              className="flex flex-col justify-between rounded-2xl border border-gold/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-gold hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">⚖️</span>
                  {bestTf !== null && (
                    <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-gold-deep">
                      {bestTf >= 80 ? `⭐ ${bestTf}%` : `${bestTf}%`}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Tư duy Đúng / Sai
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Rèn luyện tư duy phản biện qua các bài toán ngữ cảnh thực tế với 4 nhận định độc lập có cài cắm bẫy nhận thức.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-gold-deep">
                Luyện phản biện Đúng/Sai →
              </span>
            </button>
          )}

          {/* Card 5: Tự luận & Thực hành */}
          {essay.length > 0 && (
            <button
              onClick={() => leaveTo("essay")}
              className="flex flex-col justify-between rounded-2xl border border-leaf/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-leaf hover:shadow-card-hover cursor-pointer sm:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">📝</span>
                  <span className="rounded-full bg-leaf/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-leaf-deep">
                    {essay.length} bài tập
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Tự luận & Bài tập Vận dụng thực tế
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Có khung gõ nháp suy nghĩ/thuật toán độc lập và nút mở xem hướng dẫn giải chi tiết để tự đối chiếu đánh giá.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-leaf-deep">
                Xem bài tập & gõ bài làm →
              </span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
