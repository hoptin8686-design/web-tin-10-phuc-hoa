"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MOCK_EXAMS, type MockExam } from "@/data/mockExams";

export default function OnTapClient() {
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(45 * 60);

  // Đếm ngược thời gian khi đang làm bài
  useEffect(() => {
    if (!selectedExam || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedExam, submitted]);

  const handleStartExam = (exam: MockExam) => {
    setSelectedExam(exam);
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(exam.durationMinutes * 60);
    window.scrollTo({ top: 0 });
  };

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Tính điểm
    if (!selectedExam) return;
    let correct = 0;
    selectedExam.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const percent = Math.round((correct / selectedExam.questions.length) * 100);

    if (percent >= 80) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0D7C86", "#F2683C", "#0E9F6E", "#EFA31D"],
        });
      } catch {}
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Màn hình chọn đề thi ôn tập
  if (!selectedExam) {
    return (
      <main className="playground min-h-screen px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-star/20 bg-void-card px-4 py-1.5 font-mono text-xs text-star hover:border-sea/40 transition"
            >
              ← Quay lại trang chủ
            </Link>
            <h1 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-star">
              🎯 Ôn tập Kiểm tra Định kì — Tin học 10
            </h1>
            <p className="mx-auto mt-2 max-w-lg text-sm text-star-soft">
              Hệ thống đề kiểm tra Giữa kì & Cuối kì bám sát phân phối chương trình
              Trường THPT Phục Hòa (Cao Bằng), giúp học sinh tự tin đạt điểm cao.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {MOCK_EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col gap-4 rounded-2xl border border-star/15 bg-void-card p-6 shadow-card transition hover:border-sea/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="rounded-full bg-sea/15 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                    {exam.badge}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-star">
                    {exam.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-star-soft">
                    {exam.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-coral-deep">
                    📝 {exam.questions.length} câu trắc nghiệm · ⏱️ {exam.durationMinutes} phút làm bài
                  </p>
                </div>
                <button
                  onClick={() => handleStartExam(exam)}
                  className="shrink-0 rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
                >
                  Bắt đầu làm bài →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Đang làm bài hoặc đã nộp bài
  const total = selectedExam.questions.length;
  let correctCount = 0;
  selectedExam.questions.forEach((q, i) => {
    if (answers[i] === q.answer) correctCount++;
  });
  const scorePercent = Math.round((correctCount / total) * 100);
  const mark10 = (correctCount / total * 10).toFixed(1);

  return (
    <main className="playground min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Thanh trạng thái cố định */}
        <div className="sticky top-4 z-20 flex items-center justify-between rounded-2xl border border-star/20 bg-void-card/95 p-4 backdrop-blur shadow-card">
          <div>
            <button
              onClick={() => setSelectedExam(null)}
              className="font-mono text-xs text-star-soft hover:text-star transition"
            >
              ← Chọn đề khác
            </button>
            <p className="font-display font-bold text-sm text-star truncate max-w-[200px] sm:max-w-md">
              {selectedExam.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {!submitted ? (
              <span className="flex items-center gap-1.5 rounded-full border border-coral/40 bg-coral/10 px-3.5 py-1 font-mono text-sm font-bold text-coral">
                ⏱️ {formatTime(timeLeft)}
              </span>
            ) : (
              <span className="rounded-full bg-leaf/15 px-3 py-1 font-mono text-sm font-bold text-leaf-deep">
                ⭐ {mark10} / 10 điểm
              </span>
            )}
          </div>
        </div>

        {/* Kết quả tổng kết sau khi nộp */}
        {submitted && (
          <div className="mt-6 animate-pop-in rounded-2xl border border-star/15 bg-void-card p-6 text-center shadow-card">
            <span className="text-5xl">{scorePercent >= 80 ? "🎉🏆⭐" : "💪"}</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-star">
              Kết quả: {mark10} / 10 điểm ({scorePercent}%)
            </h2>
            <p className="mt-1 text-sm text-star-soft">
              Đúng {correctCount} / {total} câu hỏi. Xem lại chi tiết đáp án bên dưới:
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => handleStartExam(selectedExam)}
                className="rounded-full bg-sea px-5 py-2 font-display text-xs font-bold text-white hover:bg-sea/80"
              >
                🔄 Làm lại đề này
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="rounded-full border border-star/20 bg-void px-5 py-2 font-display text-xs text-star"
              >
                Quay lại danh sách đề
              </button>
            </div>
          </div>
        )}

        {/* Danh sách câu hỏi */}
        <div className="mt-6 space-y-6">
          {selectedExam.questions.map((q, qIdx) => {
            const chosen = answers[qIdx];
            const isRight = chosen === q.answer;

            return (
              <div
                key={q.id || qIdx}
                className="rounded-2xl border border-star/10 bg-void-card p-5 sm:p-6 shadow-card"
              >
                <div className="flex items-center justify-between text-xs text-star-soft">
                  <span className="font-mono font-bold text-sea-deep">
                    Câu {qIdx + 1}
                  </span>
                  {submitted && (
                    <span
                      className={`font-mono font-bold ${
                        isRight ? "text-leaf-deep" : "text-berry"
                      }`}
                    >
                      {isRight ? "✓ Đúng" : "✕ Chưa đúng"}
                    </span>
                  )}
                </div>

                <p className="mt-2.5 font-display text-base sm:text-lg font-bold text-star">
                  {q.q}
                </p>

                <div className="mt-4 space-y-2.5">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = chosen === oIdx;
                    let style =
                      "border-star/15 bg-void/50 text-star hover:border-sea/40";

                    if (submitted) {
                      if (oIdx === q.answer) {
                        style = "border-leaf bg-leaf/20 text-leaf-deep font-semibold";
                      } else if (isSelected) {
                        style = "border-berry bg-berry/20 text-berry";
                      } else {
                        style = "border-star/5 bg-void/20 text-star-soft/60";
                      }
                    } else if (isSelected) {
                      style = "border-sea bg-sea/20 text-sea-deep font-semibold ring-1 ring-sea";
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelect(qIdx, oIdx)}
                        disabled={submitted}
                        className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition ${style} ${
                          !submitted ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 font-mono text-xs font-bold">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-3.5 rounded-xl border border-star/10 bg-[#07131b] p-3 text-xs leading-relaxed text-star-soft">
                    <span className="font-bold text-star">Giải thích:</span> {q.explain}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Nút nộp bài */}
        {!submitted && (
          <div className="mt-8 flex justify-center pb-12">
            <button
              onClick={handleSubmit}
              className="rounded-full bg-gradient-to-r from-sea to-coral px-8 py-3.5 font-display text-base font-bold text-white shadow-card hover:shadow-glow transition hover:-translate-y-0.5"
            >
              Hoàn thành & Nộp bài thi →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
