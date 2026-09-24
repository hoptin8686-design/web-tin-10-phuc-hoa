"use client";

import { useState, useEffect, useCallback, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import {
  Clock,
  Award,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  FileText,
  Table,
  Check,
  X,
  Printer,
  ChevronRight,
  ShieldCheck,
  BookOpen,
  Sparkles,
  School,
  ExternalLink,
  Download,
} from "lucide-react";
import {
  MIDTERM_MATRIX,
  MIDTERM_SPECIFICATION,
  OFFICIAL_MIDTERM_EXAM,
  type MidtermExamQuestionMCQ,
  type MidtermExamTFItem,
  type MidtermExamEssayItem,
} from "@/data/exam-midterm-1";

export default function ExamMidtermClient() {
  const [activeTab, setActiveTab] = useState<"exam" | "matrix" | "spec">("exam");

  // Thông tin học sinh
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("10A1");
  const [hasStarted, setHasStarted] = useState(false);

  // Timer: 45 phút
  const EXAM_DURATION = 45 * 60;
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);

  // Bài làm của học sinh
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<string, Record<string, boolean>>>({});
  const [essayDrafts, setEssayDrafts] = useState<Record<string, string>>({});
  const [essayScores, setEssayScores] = useState<Record<string, number>>({
    "gk1-essay-01": 1.0,
    "gk1-essay-02": 1.0,
    "gk1-essay-03": 1.0,
  });

  // Trạng thái nộp bài
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMatrixModal, setShowMatrixModal] = useState(false);

  // Scroll to top helper
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Bắt đầu làm bài
  const handleStartExam = () => {
    if (!studentName.trim()) {
      alert("Em vui lòng nhập Họ và tên để vào phòng thi!");
      return;
    }
    setHasStarted(true);
    setIsSubmitted(false);
    setTimeLeft(EXAM_DURATION);
    setMcqAnswers({});
    setTfAnswers({});
    setEssayDrafts({});
    scrollToTop();
  };

  // Làm lại bài
  const handleResetExam = () => {
    if (confirm("Em có chắc chắn muốn làm lại bài thi từ đầu không?")) {
      setHasStarted(false);
      setIsSubmitted(false);
      setTimeLeft(EXAM_DURATION);
      setMcqAnswers({});
      setTfAnswers({});
      setEssayDrafts({});
      scrollToTop();
    }
  };

  // Nộp bài
  const handleSubmitExam = useCallback(() => {
    setIsSubmitted(true);
    scrollToTop();

    // Tính điểm tổng trắc nghiệm
    let p1 = 0;
    OFFICIAL_MIDTERM_EXAM.part1_mcq.forEach((q) => {
      if (mcqAnswers[q.id] === q.answer) p1 += 0.25;
    });

    let p2 = 0;
    OFFICIAL_MIDTERM_EXAM.part2_tf.forEach((tf) => {
      const userSt = tfAnswers[tf.id] || {};
      let correctCount = 0;
      tf.statements.forEach((st) => {
        if (userSt[st.id] === st.answer) correctCount++;
      });
      if (correctCount === 1) p2 += 0.1;
      else if (correctCount === 2) p2 += 0.25;
      else if (correctCount === 3) p2 += 0.5;
      else if (correctCount === 4) p2 += 1.0;
    });

    const totalObjective = Math.round((p1 + p2) * 100) / 100;
    if (totalObjective >= 5.5) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#0D7C86", "#F2683C", "#0E9F6E", "#EFA31D", "#5EEAD4"],
        });
      } catch {}
    }
  }, [mcqAnswers, tfAnswers]);

  // Đếm ngược thời gian
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    if (timeLeft <= 0) {
      handleSubmitExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [hasStarted, isSubmitted, timeLeft, handleSubmitExam]);

  // Format thời gian MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Tính điểm Phần I (12 câu x 0.25đ = 3.0 điểm)
  let part1Score = 0;
  OFFICIAL_MIDTERM_EXAM.part1_mcq.forEach((q) => {
    if (mcqAnswers[q.id] === q.answer) part1Score += 0.25;
  });
  part1Score = Math.round(part1Score * 100) / 100;

  // Tính điểm Phần II (4 câu x 1.0đ = 4.0 điểm, thang Bộ GD&ĐT)
  let part2Score = 0;
  const part2Details: Record<string, { correctCount: number; score: number }> = {};
  OFFICIAL_MIDTERM_EXAM.part2_tf.forEach((tf) => {
    const userSt = tfAnswers[tf.id] || {};
    let correctCount = 0;
    tf.statements.forEach((st) => {
      if (userSt[st.id] === st.answer) correctCount++;
    });
    let itemScore = 0;
    if (correctCount === 1) itemScore = 0.1;
    else if (correctCount === 2) itemScore = 0.25;
    else if (correctCount === 3) itemScore = 0.5;
    else if (correctCount === 4) itemScore = 1.0;

    part2Details[tf.id] = { correctCount, score: itemScore };
    part2Score += itemScore;
  });
  part2Score = Math.round(part2Score * 100) / 100;

  // Điểm trắc nghiệm khách quan (Phần I + II = 7.0 điểm)
  const objectiveScore = Math.round((part1Score + part2Score) * 100) / 100;

  // Điểm tự luận học sinh tự chấm theo đáp án (Tối đa 3.0 điểm)
  const essayTotalScore = Object.values(essayScores).reduce((a, b) => a + b, 0);

  // Tổng điểm toàn bài thi (10.0)
  const totalScore = Math.min(10, Math.round((objectiveScore + essayTotalScore) * 100) / 100);

  // Đếm số câu trắc nghiệm đã làm
  const answeredMcqCount = Object.keys(mcqAnswers).length;
  let answeredTfCount = 0;
  OFFICIAL_MIDTERM_EXAM.part2_tf.forEach((tf) => {
    const userSt = tfAnswers[tf.id] || {};
    if (Object.keys(userSt).length === 4) answeredTfCount++;
  });
  const answeredEssayCount = Object.keys(essayDrafts).filter(
    (k) => essayDrafts[k]?.trim().length > 0
  ).length;

  return (
    <main className="playground min-h-screen pb-24 text-star">
      {/* HEADER ĐỀ THI */}
      <header className="border-b border-star/15 bg-void-card/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full border border-sea/30 bg-void px-3.5 py-1 text-xs font-medium text-sea-deep hover:border-sea transition"
              >
                ← Trang chủ
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full bg-sea/15 px-3 py-1 font-mono text-xs text-sea-deep">
                <School className="h-3.5 w-3.5" />
                <span>Trường THPT Phục Hòa — Tổ Tự Nhiên</span>
              </div>
            </div>

            {/* NÚT TẢI FILE WORD VỀ MÁY TÍNH */}
            <a
              href="/download/De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
              download="De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-gold px-4 py-1.5 font-display text-xs font-bold text-void shadow-glow hover:opacity-95 transition"
              title="Tải về máy tính file Word .docx gốc gồm Ma trận, Đặc tả, Đề thi và Đáp án"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Tải file Word (.docx) về máy</span>
            </a>
          </div>

          <div className="mt-4 text-center">
            <span className="rounded-full bg-coral/20 px-3.5 py-1 font-mono text-xs font-bold text-coral uppercase tracking-wide">
              Đề thi chính thức theo chuẩn tập huấn Sở GD&ĐT Cao Bằng
            </span>
            <h1 className="mt-2 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-star">
              Đề Kiểm Tra Giữa Học Kỳ I — Tin Học 10
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-star-soft max-w-2xl mx-auto">
              Sách <strong>Kết nối tri thức với cuộc sống</strong> • Thời gian làm bài: <strong>45 phút</strong> • Ma trận 3 phần: Trắc nghiệm (3.0đ) + Đúng/Sai (4.0đ) + Tự luận (3.0đ)
            </p>
          </div>

          {/* 3 TABS ĐIỀU HƯỚNG */}
          <div className="mt-6 flex justify-center">
            <nav className="inline-flex rounded-2xl bg-void p-1.5 border border-star/15 shadow-card">
              <button
                onClick={() => setActiveTab("exam")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition ${
                  activeTab === "exam"
                    ? "bg-gradient-to-r from-sea to-coral text-white shadow-card"
                    : "text-star-soft hover:text-star"
                }`}
              >
                <FileText className="h-4 w-4" />
                <span>Làm bài kiểm tra</span>
              </button>

              <button
                onClick={() => setActiveTab("matrix")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition ${
                  activeTab === "matrix"
                    ? "bg-gradient-to-r from-sea to-coral text-white shadow-card"
                    : "text-star-soft hover:text-star"
                }`}
              >
                <Table className="h-4 w-4" />
                <span>Khung ma trận đề</span>
              </button>

              <button
                onClick={() => setActiveTab("spec")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 font-display text-xs sm:text-sm font-bold transition ${
                  activeTab === "spec"
                    ? "bg-gradient-to-r from-sea to-coral text-white shadow-card"
                    : "text-star-soft hover:text-star"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                <span>Bản đặc tả yêu cầu</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* NỘI DUNG TỪNG TAB */}
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        {/* ======================================================== */}
        {/* TAB 1: LÀM BÀI KIỂM TRA ONLINE                           */}
        {/* ======================================================== */}
        {activeTab === "exam" && (
          <div>
            {/* 1.1 MÀN HÌNH CHƯA BẮT ĐẦU */}
            {!hasStarted && !isSubmitted && (
              <div className="mx-auto max-w-2xl rounded-3xl border border-star/20 bg-void-card p-6 sm:p-10 shadow-card">
                <div className="text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sea to-coral text-3xl shadow-glow">
                    📝
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-star">
                    Phòng Thi Trực Tuyến — Giữa Học Kỳ I
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-star-soft">
                    Đề thi được biên soạn theo đúng ma trận tập huấn chuyên môn môn Tin học năm học 2024-2025 và 2026-2027.
                  </p>
                </div>

                {/* THÔNG TIN CẤU TRÚC ĐỀ */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-sea/30 bg-sea/10 p-3.5 text-center">
                    <span className="font-mono text-xs font-bold text-sea-deep uppercase">Phần I</span>
                    <p className="mt-1 font-display text-base font-bold text-star">12 Câu Trắc Nghiệm</p>
                    <p className="text-xs text-star-soft">4 lựa chọn • 3.0 điểm</p>
                  </div>
                  <div className="rounded-2xl border border-coral/30 bg-coral/10 p-3.5 text-center">
                    <span className="font-mono text-xs font-bold text-coral uppercase">Phần II</span>
                    <p className="mt-1 font-display text-base font-bold text-star">4 Câu Đúng / Sai</p>
                    <p className="text-xs text-star-soft">16 nhận định • 4.0 điểm</p>
                  </div>
                  <div className="rounded-2xl border border-gold/30 bg-gold/10 p-3.5 text-center">
                    <span className="font-mono text-xs font-bold text-gold-deep uppercase">Phần III</span>
                    <p className="mt-1 font-display text-base font-bold text-star">3 Câu Tự Luận</p>
                    <p className="text-xs text-star-soft">Vận dụng thực tế • 3.0 điểm</p>
                  </div>
                </div>

                {/* KHỐI TẢI VỀ MÁY TÍNH CHO GIÁO VIÊN & HỌC SINH */}
                <div className="mt-6 rounded-2xl border-2 border-gold/40 bg-gold/[0.08] p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-gold-deep">
                        💾 TÀI LIỆU DÀNH CHO THẦY CÔ & HỌC SINH
                      </span>
                      <h3 className="mt-1.5 font-display text-sm sm:text-base font-bold text-star">
                        Tải trọn bộ Đề thi + Ma trận + Bản đặc tả + Đáp án (.docx)
                      </h3>
                      <p className="mt-0.5 text-xs text-star-soft">
                        Định dạng Microsoft Word chuẩn Sở GD&ĐT Cao Bằng, sẵn sàng in ấn ra giấy hoặc chỉnh sửa.
                      </p>
                    </div>
                    <a
                      href="/download/De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                      download="De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-coral px-5 py-2.5 font-display text-xs sm:text-sm font-bold text-void shadow-card hover:shadow-glow transition"
                    >
                      <Download className="h-4 w-4" />
                      <span>Tải về máy (.docx)</span>
                    </a>
                  </div>
                </div>

                {/* FORM NHẬP THÔNG TIN THÍ SINH */}
                <div className="mt-8 space-y-4 rounded-2xl border border-star/15 bg-void p-5">
                  <div>
                    <label className="block font-display text-xs font-bold text-star uppercase tracking-wide">
                      Họ và tên học sinh <span className="text-coral">*</span>
                    </label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Ví dụ: Nông Văn Hoàng"
                      className="mt-1.5 w-full rounded-xl border border-star/20 bg-void-card px-4 py-2.5 text-sm text-star placeholder:text-star-soft/40 focus:border-sea focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-display text-xs font-bold text-star uppercase tracking-wide">
                        Lớp
                      </label>
                      <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        placeholder="10A1"
                        className="mt-1.5 w-full rounded-xl border border-star/20 bg-void-card px-4 py-2.5 text-sm text-star focus:border-sea focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs font-bold text-star uppercase tracking-wide">
                        Thời gian
                      </label>
                      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-star/15 bg-void-card/60 px-4 py-2.5 font-mono text-sm text-star-soft">
                        <Clock className="h-4 w-4 text-sea" />
                        <span>45 phút</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    onClick={handleStartExam}
                    className="w-full rounded-2xl bg-gradient-to-r from-sea via-[#14B8A6] to-coral py-3.5 font-display text-base font-bold text-white shadow-card hover:shadow-glow transition"
                  >
                    Bắt đầu làm bài thi →
                  </button>
                  <p className="text-center font-mono text-[11px] text-star-soft">
                    Hệ thống sẽ tự động tính giờ và chấm điểm theo chuẩn Thông tư Bộ GD&ĐT
                  </p>
                </div>
              </div>
            )}

            {/* 1.2 MÀN HÌNH ĐANG LÀM BÀI */}
            {hasStarted && !isSubmitted && (
              <div>
                {/* THANH TRẠNG THÁI STICKY */}
                <div className="sticky top-3 z-30 mb-8 rounded-2xl border border-star/20 bg-void-card/95 p-4 shadow-card backdrop-blur-md">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-sea/20 flex items-center justify-center font-display font-bold text-sea-deep">
                        10
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-star">
                          Thí sinh: <span className="text-sea-deep">{studentName}</span> • Lớp {className}
                        </p>
                        <p className="text-xs text-star-soft">
                          Tiến độ: {answeredMcqCount}/12 trắc nghiệm • {answeredTfCount}/4 đúng-sai • {answeredEssayCount}/3 tự luận
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* ĐỒNG HỒ ĐẾM NGƯỢC */}
                      <div
                        className={`flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-base font-bold shadow-sm transition ${
                          timeLeft <= 300
                            ? "border-berry bg-berry/20 text-berry animate-pulse"
                            : "border-sea/30 bg-sea/10 text-sea-deep"
                        }`}
                      >
                        <Clock className="h-5 w-5" />
                        <span>{formatTime(timeLeft)}</span>
                      </div>

                      <button
                        onClick={() => {
                          if (confirm("Em có chắc chắn muốn nộp bài thi ngay bây giờ?")) {
                            handleSubmitExam();
                          }
                        }}
                        className="rounded-xl bg-gradient-to-r from-coral to-berry px-5 py-2 font-display text-sm font-bold text-white shadow-card hover:opacity-95 transition"
                      >
                        Nộp bài thi ➔
                      </button>
                    </div>
                  </div>
                </div>

                {/* PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN */}
                <section className="mb-10 rounded-3xl border border-star/20 bg-void-card p-6 sm:p-8 shadow-card">
                  <div className="flex items-center justify-between border-b border-star/15 pb-4">
                    <div>
                      <span className="rounded-full bg-sea/20 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                        PHẦN I (3,0 ĐIỂM)
                      </span>
                      <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
                        Câu Trắc Nghiệm Nhiều Phương Án Lựa Chọn
                      </h2>
                      <p className="text-xs text-star-soft mt-1">
                        Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi chỉ chọn một phương án đúng nhất (Mỗi câu đúng được 0,25 điểm).
                      </p>
                    </div>
                    <span className="font-mono text-xs text-star-soft">12 Câu hỏi</span>
                  </div>

                  <div className="mt-6 space-y-6">
                    {OFFICIAL_MIDTERM_EXAM.part1_mcq.map((q, idx) => (
                      <div
                        key={q.id}
                        id={`q-${q.id}`}
                        className="rounded-2xl border border-star/15 bg-void p-5 transition hover:border-sea/40"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-display text-sm sm:text-base font-bold text-star">
                            <span className="text-sea-deep mr-2">Câu {idx + 1}:</span>
                            {q.q}
                          </p>
                          <span className="shrink-0 rounded-md bg-void-light px-2 py-0.5 font-mono text-[10px] text-star-soft">
                            {q.level}
                          </span>
                        </div>

                        {/* 4 PHƯƠNG ÁN A, B, C, D */}
                        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {q.options.map((opt, optIdx) => {
                            const optLetter = ["A", "B", "C", "D"][optIdx];
                            const isSelected = mcqAnswers[q.id] === optIdx;

                            return (
                              <button
                                key={optIdx}
                                type="button"
                                onClick={() =>
                                  setMcqAnswers((prev) => ({
                                    ...prev,
                                    [q.id]: optIdx,
                                  }))
                                }
                                className={`flex items-start gap-3 rounded-xl border p-3 text-left transition ${
                                  isSelected
                                    ? "border-sea bg-sea/20 text-star shadow-glow"
                                    : "border-star/10 bg-void-card/60 text-star-soft hover:border-star/30 hover:text-star"
                                }`}
                              >
                                <span
                                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                                    isSelected
                                      ? "bg-sea text-white"
                                      : "bg-void-light text-star-soft"
                                  }`}
                                >
                                  {optLetter}
                                </span>
                                <span className="text-xs sm:text-sm leading-relaxed">{opt}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PHẦN II: 4 CÂU ĐÚNG / SAI NGỮ CẢNH */}
                <section className="mb-10 rounded-3xl border border-star/20 bg-void-card p-6 sm:p-8 shadow-card">
                  <div className="border-b border-star/15 pb-4">
                    <span className="rounded-full bg-coral/20 px-3 py-1 font-mono text-xs font-bold text-coral">
                      PHẦN II (4,0 ĐIỂM)
                    </span>
                    <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
                      Câu Trắc Nghiệm Đúng / Sai
                    </h2>
                    <p className="text-xs text-star-soft mt-1">
                      Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.
                      <br />
                      <strong className="text-coral-deep">Thang điểm Bộ GD&ĐT:</strong> Đúng 1 ý: 0,1đ • Đúng 2 ý: 0,25đ • Đúng 3 ý: 0,5đ • Đúng cả 4 ý: 1,0đ.
                    </p>
                  </div>

                  <div className="mt-6 space-y-8">
                    {OFFICIAL_MIDTERM_EXAM.part2_tf.map((tf, tfIdx) => (
                      <div
                        key={tf.id}
                        id={`tf-${tf.id}`}
                        className="rounded-2xl border border-star/15 bg-void p-5"
                      >
                        <div className="border-b border-star/10 pb-3">
                          <span className="font-mono text-xs font-bold text-coral uppercase mr-2">
                            Câu {tfIdx + 1} (1,0 điểm):
                          </span>
                          <p className="mt-2 text-xs sm:text-sm font-medium text-star leading-relaxed bg-void-card p-3 rounded-xl border border-star/10">
                            {tf.scenario}
                          </p>
                        </div>

                        {/* 4 Ý a, b, c, d */}
                        <div className="mt-4 space-y-3">
                          {tf.statements.map((st, stIdx) => {
                            const stLetter = ["a", "b", "c", "d"][stIdx];
                            const currentVal = tfAnswers[tf.id]?.[st.id];

                            return (
                              <div
                                key={st.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-star/10 bg-void-card/60 p-3 transition hover:border-star/20"
                              >
                                <div className="flex items-start gap-2.5 pr-2">
                                  <span className="font-mono text-xs font-bold text-sea-deep">
                                    {stLetter})
                                  </span>
                                  <p className="text-xs sm:text-sm text-star leading-relaxed">
                                    {st.text}
                                  </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-2 self-end sm:self-center">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setTfAnswers((prev) => ({
                                        ...prev,
                                        [tf.id]: {
                                          ...(prev[tf.id] || {}),
                                          [st.id]: true,
                                        },
                                      }))
                                    }
                                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition ${
                                      currentVal === true
                                        ? "bg-leaf text-white shadow-glow"
                                        : "bg-void-light text-star-soft hover:bg-void-light/80 hover:text-star"
                                    }`}
                                  >
                                    <Check className="h-3.5 w-3.5" />
                                    <span>ĐÚNG</span>
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setTfAnswers((prev) => ({
                                        ...prev,
                                        [tf.id]: {
                                          ...(prev[tf.id] || {}),
                                          [st.id]: false,
                                        },
                                      }))
                                    }
                                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-bold transition ${
                                      currentVal === false
                                        ? "bg-berry text-white shadow-glow"
                                        : "bg-void-light text-star-soft hover:bg-void-light/80 hover:text-star"
                                    }`}
                                  >
                                    <X className="h-3.5 w-3.5" />
                                    <span>SAI</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* PHẦN III: 3 CÂU TỰ LUẬN */}
                <section className="mb-10 rounded-3xl border border-star/20 bg-void-card p-6 sm:p-8 shadow-card">
                  <div className="border-b border-star/15 pb-4">
                    <span className="rounded-full bg-gold/20 px-3 py-1 font-mono text-xs font-bold text-gold-deep">
                      PHẦN III (3,0 ĐIỂM)
                    </span>
                    <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
                      Câu Hỏi Tự Luận
                    </h2>
                    <p className="text-xs text-star-soft mt-1">
                      Thí sinh làm bài trực tiếp vào khung trả lời bên dưới. Sau khi nộp bài, hệ thống sẽ mở đáp án mẫu và biểu điểm chi tiết để đối chiếu.
                    </p>
                  </div>

                  <div className="mt-6 space-y-6">
                    {OFFICIAL_MIDTERM_EXAM.part3_essay.map((es, esIdx) => (
                      <div
                        key={es.id}
                        className="rounded-2xl border border-star/15 bg-void p-5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-display text-sm sm:text-base font-bold text-star">
                            <span className="text-gold-deep mr-2">Câu {esIdx + 1} ({es.points},0 điểm):</span>
                            {es.q}
                          </p>
                        </div>

                        <div className="mt-4">
                          <label className="block text-xs font-mono text-star-soft mb-1.5">
                            Bài làm của thí sinh:
                          </label>
                          <textarea
                            rows={5}
                            value={essayDrafts[es.id] || ""}
                            onChange={(e) =>
                              setEssayDrafts((prev) => ({
                                ...prev,
                                [es.id]: e.target.value,
                              }))
                            }
                            placeholder="Nhập câu trả lời hoặc các bước giải của em tại đây..."
                            className="w-full rounded-xl border border-star/20 bg-void-card p-3.5 text-xs sm:text-sm text-star placeholder:text-star-soft/40 focus:border-sea focus:outline-none"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* NÚT NỘP BÀI CUỐI TRANG */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      if (confirm("Em có chắc chắn muốn nộp bài thi?")) {
                        handleSubmitExam();
                      }
                    }}
                    className="rounded-2xl bg-gradient-to-r from-sea via-[#14B8A6] to-coral px-10 py-4 font-display text-lg font-bold text-white shadow-card hover:shadow-glow transition"
                  >
                    Nộp bài thi ngay ➔
                  </button>
                  <p className="mt-2 text-xs text-star-soft">
                    Sau khi nộp, hệ thống sẽ chấm tự động trắc nghiệm và hiển thị đáp án, hướng dẫn giải chi tiết.
                  </p>
                </div>
              </div>
            )}

            {/* 1.3 MÀN HÌNH KẾT QUẢ & XEM LẠI BÀI THI */}
            {isSubmitted && (
              <div>
                {/* BẢNG ĐIỂM TỔNG KẾT */}
                <div className="rounded-3xl border-2 border-sea/40 bg-gradient-to-br from-void-card via-void to-void-card p-6 sm:p-10 shadow-card">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-leaf/20 px-4 py-1.5 font-mono text-xs font-bold text-leaf-deep">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>ĐÃ HOÀN THÀNH BÀI KIỂM TRA</span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-star">
                      Kết Quả Bài Làm Của Em
                    </h2>
                    <p className="mt-1 font-display text-sm sm:text-base text-star-soft">
                      Thí sinh: <strong className="text-star">{studentName}</strong> • Lớp: <strong className="text-star">{className}</strong> • Trường THPT Phục Hòa
                    </p>

                    {/* VÒNG ĐIỂM CHÍNH */}
                    <div className="mt-6 flex flex-col items-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-sea bg-void shadow-glow">
                        <span className="font-display text-4xl sm:text-5xl font-extrabold text-sea-deep">
                          {totalScore}
                        </span>
                      </div>
                      <p className="mt-2 font-mono text-xs text-star-soft">
                        Thang điểm 10 chuẩn Bộ Giáo dục & Đào tạo
                      </p>
                    </div>

                    {/* CHI TIẾT ĐIỂM 3 PHẦN */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="rounded-2xl border border-sea/30 bg-sea/10 p-4">
                        <p className="font-mono text-xs text-sea-deep font-bold">PHẦN I (TRẮC NGHIỆM)</p>
                        <p className="mt-2 font-display text-2xl font-bold text-star">
                          {part1Score} <span className="text-xs text-star-soft">/ 3,0 đ</span>
                        </p>
                        <p className="mt-1 text-xs text-star-soft">
                          Đúng {Math.round(part1Score / 0.25)} / 12 câu
                        </p>
                      </div>

                      <div className="rounded-2xl border border-coral/30 bg-coral/10 p-4">
                        <p className="font-mono text-xs text-coral font-bold">PHẦN II (ĐÚNG / SAI)</p>
                        <p className="mt-2 font-display text-2xl font-bold text-star">
                          {part2Score} <span className="text-xs text-star-soft">/ 4,0 đ</span>
                        </p>
                        <p className="mt-1 text-xs text-star-soft">
                          Chấm theo thang lũy tiến Bộ GD
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4">
                        <p className="font-mono text-xs text-gold-deep font-bold">PHẦN III (TỰ LUẬN)</p>
                        <p className="mt-2 font-display text-2xl font-bold text-star">
                          {essayTotalScore} <span className="text-xs text-star-soft">/ 3,0 đ</span>
                        </p>
                        <p className="mt-1 text-xs text-star-soft">
                          3 câu vận dụng theo biểu điểm
                        </p>
                      </div>
                    </div>

                    {/* ĐÁNH GIÁ SƯ PHẠM */}
                    <div className="mt-6 rounded-2xl border border-star/15 bg-void p-4 text-left">
                      <p className="font-display text-xs font-bold uppercase tracking-wide text-star-soft">
                        Đánh giá kết quả:
                      </p>
                      <p className="mt-1 font-display text-sm text-star">
                        {totalScore >= 9.0 && "🌟 Xuất sắc! Em nắm rất vững kiến thức cả 3 chủ đề và kỹ năng vận dụng cao."}
                        {totalScore >= 8.0 && totalScore < 9.0 && "🎉 Rất tốt! Em đã hoàn thành xuất sắc đề thi định kì. Hãy rà soát lại một số câu nhỏ để đạt điểm tuyệt đối nhé!"}
                        {totalScore >= 6.5 && totalScore < 8.0 && "👍 Khá tốt! Em đã nắm được kiến thức trọng tâm. Hãy đọc kỹ phần giải thích chi tiết bên dưới để bổ sung các phần còn nhầm lẫn."}
                        {totalScore < 6.5 && "💪 Cần cố gắng hơn! Em hãy dành thời gian đọc lại lý thuyết SGK Tin 10 Kết nối tri thức và làm lại đề thi để cải thiện nhé!"}
                      </p>
                    </div>

                    {/* HÀNG NÚT THAO TÁC */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href="/download/De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                        download="De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                        className="flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 font-display text-xs sm:text-sm font-bold text-gold-deep hover:bg-gold/20 transition"
                      >
                        <Download className="h-4 w-4" />
                        <span>Tải file Word (.docx)</span>
                      </a>

                      <button
                        onClick={handleResetExam}
                        className="flex items-center gap-2 rounded-xl border border-star/20 bg-void px-4 py-2 font-display text-xs sm:text-sm font-bold text-star hover:border-sea transition"
                      >
                        <RotateCcw className="h-4 w-4" />
                        <span>Làm lại bài thi</span>
                      </button>

                      <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 rounded-xl border border-star/20 bg-void px-4 py-2 font-display text-xs sm:text-sm font-bold text-star hover:border-coral transition"
                      >
                        <Printer className="h-4 w-4" />
                        <span>In đề & Đáp án</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* HƯỚNG DẪN GIẢI CHI TIẾT TỪNG CÂU */}
                <div className="mt-12 space-y-8">
                  <div className="text-center">
                    <span className="rounded-full bg-sea/20 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                      ĐỐI CHIẾU SƯ PHẠM
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-star">
                      Đáp Án & Hướng Dẫn Giải Chi Tiết
                    </h3>
                    <p className="text-xs text-star-soft mt-1">
                      Giải thích cặn kẽ căn cứ SGK Kết nối tri thức và biểu điểm chi tiết từng phần.
                    </p>
                  </div>

                  {/* CHI TIẾT PHẦN I */}
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-sea-deep">
                      Phần I: Trắc nghiệm 12 câu (3,0 điểm)
                    </h4>

                    {OFFICIAL_MIDTERM_EXAM.part1_mcq.map((q, idx) => {
                      const userChoice = mcqAnswers[q.id];
                      const isCorrect = userChoice === q.answer;

                      return (
                        <div
                          key={q.id}
                          className={`rounded-2xl border p-5 ${
                            isCorrect
                              ? "border-leaf/40 bg-leaf/[0.04]"
                              : "border-berry/40 bg-berry/[0.04]"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="font-display text-sm font-bold text-star">
                              <span className="text-sea mr-2">Câu {idx + 1}:</span>
                              {q.q}
                            </p>
                            {isCorrect ? (
                              <span className="shrink-0 rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-xs font-bold text-leaf-deep flex items-center gap-1">
                                <Check className="h-3 w-3" /> Đúng (+0,25đ)
                              </span>
                            ) : (
                              <span className="shrink-0 rounded-full bg-berry/20 px-2.5 py-0.5 font-mono text-xs font-bold text-berry flex items-center gap-1">
                                <X className="h-3 w-3" /> Sai (0đ)
                              </span>
                            )}
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
                            {q.options.map((opt, optIdx) => {
                              const isThisChoice = userChoice === optIdx;
                              const isThisCorrect = q.answer === optIdx;

                              return (
                                <div
                                  key={optIdx}
                                  className={`rounded-xl border p-2.5 ${
                                    isThisCorrect
                                      ? "border-leaf bg-leaf/20 text-star font-semibold"
                                      : isThisChoice
                                      ? "border-berry bg-berry/20 text-star"
                                      : "border-star/10 bg-void text-star-soft"
                                  }`}
                                >
                                  <span className="font-mono font-bold mr-1.5">
                                    {["A", "B", "C", "D"][optIdx]}.
                                  </span>
                                  <span>{opt}</span>
                                  {isThisCorrect && (
                                    <span className="ml-1 text-leaf-deep font-bold">(Đáp án đúng)</span>
                                  )}
                                  {isThisChoice && !isThisCorrect && (
                                    <span className="ml-1 text-berry font-bold">(Em đã chọn)</span>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* GIẢI THÍCH CHI TIẾT */}
                          <div className="mt-3 rounded-xl border border-star/10 bg-void p-3 text-xs text-star-soft">
                            <strong className="text-sea-deep">💡 Giải thích SGK:</strong> {q.explain}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CHI TIẾT PHẦN II */}
                  <div className="space-y-6 pt-6">
                    <h4 className="font-display text-lg font-bold text-coral">
                      Phần II: Câu Đúng / Sai (4 câu - 4,0 điểm)
                    </h4>

                    {OFFICIAL_MIDTERM_EXAM.part2_tf.map((tf, tfIdx) => {
                      const details = part2Details[tf.id] || { correctCount: 0, score: 0 };
                      const userSt = tfAnswers[tf.id] || {};

                      return (
                        <div
                          key={tf.id}
                          className="rounded-2xl border border-star/15 bg-void-card p-5"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-star/10 pb-3">
                            <span className="font-mono text-xs font-bold text-coral uppercase">
                              Câu {tfIdx + 1}
                            </span>
                            <span className="rounded-full bg-void-light px-3 py-0.5 font-mono text-xs text-star-soft">
                              Đúng {details.correctCount}/4 ý ➔ <strong className="text-coral-deep">+{details.score} điểm</strong>
                            </span>
                          </div>

                          <p className="mt-3 text-xs sm:text-sm font-medium text-star bg-void p-3 rounded-xl border border-star/10">
                            {tf.scenario}
                          </p>

                          <div className="mt-4 space-y-3">
                            {tf.statements.map((st, stIdx) => {
                              const userAns = userSt[st.id];
                              const isStCorrect = userAns === st.answer;

                              return (
                                <div
                                  key={st.id}
                                  className={`rounded-xl border p-3 text-xs ${
                                    isStCorrect
                                      ? "border-leaf/30 bg-leaf/[0.03]"
                                      : "border-berry/30 bg-berry/[0.03]"
                                  }`}
                                >
                                  <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-start gap-2">
                                      <span className="font-mono font-bold text-sea-deep">
                                        {["a", "b", "c", "d"][stIdx]})
                                      </span>
                                      <span className="text-star font-medium">{st.text}</span>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="font-mono text-[11px] text-star-soft">
                                        Em chọn:{" "}
                                        <strong className={userAns === true ? "text-leaf-deep" : userAns === false ? "text-berry" : "text-star-soft"}>
                                          {userAns === true ? "Đúng" : userAns === false ? "Sai" : "Chưa chọn"}
                                        </strong>
                                      </span>
                                      <span
                                        className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold ${
                                          st.answer ? "bg-leaf/20 text-leaf-deep" : "bg-berry/20 text-berry"
                                        }`}
                                      >
                                        Chuẩn: {st.answer ? "ĐÚNG" : "SAI"}
                                      </span>
                                    </div>
                                  </div>

                                  <p className="mt-2 text-star-soft border-t border-star/5 pt-1.5">
                                    <strong className="text-sea-deep">💡 Cơ sở:</strong> {st.explain}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CHI TIẾT PHẦN III */}
                  <div className="space-y-6 pt-6">
                    <h4 className="font-display text-lg font-bold text-gold-deep">
                      Phần III: Câu Tự Luận (3 câu - 3,0 điểm)
                    </h4>

                    {OFFICIAL_MIDTERM_EXAM.part3_essay.map((es, esIdx) => (
                      <div
                        key={es.id}
                        className="rounded-2xl border border-star/15 bg-void-card p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-star/10 pb-3">
                          <span className="font-mono text-xs font-bold text-gold-deep">
                            Câu {esIdx + 1} ({es.points},0 điểm)
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-star-soft">Tự chấm điểm:</span>
                            <select
                              value={essayScores[es.id] ?? 1.0}
                              onChange={(e) =>
                                setEssayScores((prev) => ({
                                  ...prev,
                                  [es.id]: parseFloat(e.target.value),
                                }))
                              }
                              className="rounded-lg border border-gold/40 bg-void px-2 py-1 font-mono text-xs text-gold-deep focus:outline-none"
                            >
                              <option value={1.0}>1,0 điểm (Tối đa)</option>
                              <option value={0.75}>0,75 điểm</option>
                              <option value={0.5}>0,5 điểm</option>
                              <option value={0.25}>0,25 điểm</option>
                              <option value={0.0}>0 điểm</option>
                            </select>
                          </div>
                        </div>

                        <p className="mt-3 text-sm font-semibold text-star">{es.q}</p>

                        {/* BÀI LÀM CỦA HỌC SINH */}
                        <div className="mt-3 rounded-xl border border-star/10 bg-void p-3 text-xs">
                          <p className="font-mono text-star-soft font-bold mb-1">
                            Bài làm của em:
                          </p>
                          <p className="text-star whitespace-pre-wrap">
                            {essayDrafts[es.id]?.trim() || "(Em chưa nhập bài làm cho câu này)"}
                          </p>
                        </div>

                        {/* ĐÁP ÁN MẪU & BIỂU ĐIỂM */}
                        <div className="mt-3 rounded-xl border border-gold/20 bg-gold/[0.04] p-3 text-xs space-y-2">
                          <p className="font-bold text-gold-deep">
                            📋 Đáp án gợi ý & Hướng dẫn chấm:
                          </p>
                          <p className="text-star leading-relaxed whitespace-pre-wrap">
                            {es.sampleAnswer}
                          </p>

                          <div className="mt-2 border-t border-gold/20 pt-2">
                            <p className="font-mono text-[11px] font-bold text-gold-deep mb-1">
                              Biểu điểm thành phần:
                            </p>
                            <ul className="space-y-1 list-disc list-inside text-star-soft">
                              {es.criteria.map((c, cIdx) => (
                                <li key={cIdx}>
                                  {c.detail}: <strong className="text-star">{c.score} điểm</strong>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: KHUNG MA TRẬN ĐỀ THI                              */}
        {/* ======================================================== */}
        {activeTab === "matrix" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-star/20 bg-void-card p-6 sm:p-8 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-star/15 pb-4">
                <div>
                  <span className="rounded-full bg-sea/20 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                    CHUẨN BỘ GIÁO DỤC VÀ ĐÀO TẠO
                  </span>
                  <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
                    {MIDTERM_MATRIX.title}
                  </h2>
                  <p className="text-xs text-star-soft mt-1">
                    {MIDTERM_MATRIX.description} • Thời gian kiểm tra: {MIDTERM_MATRIX.timeMinutes} phút
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/download/De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                    download="De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                    className="flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 font-display text-xs sm:text-sm font-bold text-gold-deep hover:bg-gold/20 transition"
                  >
                    <Download className="h-4 w-4" />
                    <span>Tải ma trận (.docx)</span>
                  </a>

                  <button
                    onClick={() => setShowMatrixModal(true)}
                    className="flex items-center gap-2 rounded-xl border border-sea/40 bg-void px-4 py-2 font-display text-xs sm:text-sm font-bold text-sea-deep hover:bg-sea/10 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Xem ảnh ma trận gốc</span>
                  </button>
                </div>
              </div>

              {/* BẢNG MA TRẬN TỔNG QUÁT */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs text-star border-collapse">
                  <thead>
                    <tr className="border-b border-star/20 bg-void font-display text-star-soft">
                      <th className="p-3 text-center w-12" rowSpan={2}>STT</th>
                      <th className="p-3 w-56" rowSpan={2}>Chủ đề / Đơn vị kiến thức</th>
                      <th className="p-3 text-center border-l border-star/15" colSpan={3}>
                        Số câu hỏi trắc nghiệm (Phần I & II)
                      </th>
                      <th className="p-3 text-center border-l border-star/15" colSpan={3}>
                        Số câu tự luận (Phần III)
                      </th>
                      <th className="p-3 text-center border-l border-star/15" rowSpan={2}>
                        Tổng điểm
                      </th>
                      <th className="p-3 text-center" rowSpan={2}>Tỉ lệ %</th>
                    </tr>
                    <tr className="border-b border-star/20 bg-void/80 font-mono text-[11px] text-star-soft">
                      <th className="p-2 text-center border-l border-star/15 text-leaf-deep">Biết (TN)</th>
                      <th className="p-2 text-center text-sea-deep">Hiểu (TN)</th>
                      <th className="p-2 text-center text-coral">Vận dụng (Đ/S)</th>
                      <th className="p-2 text-center border-l border-star/15 text-leaf-deep">Biết</th>
                      <th className="p-2 text-center text-sea-deep">Hiểu</th>
                      <th className="p-2 text-center text-gold-deep">Vận dụng</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-star/10">
                    {MIDTERM_MATRIX.table.map((row) => (
                      <tr key={row.stt} className="hover:bg-void-light/30 transition">
                        <td className="p-3 text-center font-mono text-star-soft">{row.stt}</td>
                        <td className="p-3 font-medium">
                          <p className="text-star font-semibold">{row.topic}</p>
                          <p className="text-star-soft text-[11px] mt-0.5">{row.unit}</p>
                        </td>
                        <td className="p-3 text-center font-mono border-l border-star/15">
                          {row.mcqKnow > 0 ? (
                            <span className="rounded bg-leaf/20 px-2 py-0.5 font-bold text-leaf-deep">
                              {row.mcqKnow}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {row.mcqUnderstand > 0 ? (
                            <span className="rounded bg-sea/20 px-2 py-0.5 font-bold text-sea-deep">
                              {row.mcqUnderstand}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {row.tfApply > 0 ? (
                            <span className="rounded bg-coral/20 px-2 py-0.5 font-bold text-coral">
                              {row.tfApply}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="p-3 text-center font-mono border-l border-star/15">
                          {row.essayKnow > 0 ? row.essayKnow : "-"}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {row.essayUnderstand > 0 ? row.essayUnderstand : "-"}
                        </td>
                        <td className="p-3 text-center font-mono">
                          {row.essayApply > 0 ? (
                            <span className="rounded bg-gold/20 px-2 py-0.5 font-bold text-gold-deep">
                              {row.essayApply}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-sea-deep border-l border-star/15">
                          {row.totalPoints.toFixed(1)} đ
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-star">
                          {row.percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-sea bg-void font-display font-bold text-sm">
                      <td colSpan={2} className="p-3 text-right text-sea-deep">
                        TỔNG CỘNG:
                      </td>
                      <td className="p-3 text-center font-mono text-leaf-deep border-l border-star/15">
                        6 câu (1.5đ)
                      </td>
                      <td className="p-3 text-center font-mono text-sea-deep">
                        6 câu (1.5đ)
                      </td>
                      <td className="p-3 text-center font-mono text-coral">
                        4 câu (4.0đ)
                      </td>
                      <td className="p-3 text-center font-mono border-l border-star/15">-</td>
                      <td className="p-3 text-center font-mono">-</td>
                      <td className="p-3 text-center font-mono text-gold-deep">
                        3 câu (3.0đ)
                      </td>
                      <td className="p-3 text-center font-mono text-coral-deep border-l border-star/15">
                        10,0 đ
                      </td>
                      <td className="p-3 text-center font-mono text-sea-deep">
                        100%
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* TỈ LỆ ĐÁNH GIÁ NĂNG LỰC */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-leaf/30 bg-leaf/10 p-4 text-center">
                  <span className="font-mono text-xs font-bold text-leaf-deep uppercase">
                    Mức 1: Nhận biết
                  </span>
                  <p className="mt-1 font-display text-2xl font-bold text-star">40%</p>
                  <p className="text-xs text-star-soft mt-1">
                    4,0 điểm • Tái hiện khái niệm cốt lõi SGK
                  </p>
                </div>
                <div className="rounded-2xl border border-sea/30 bg-sea/10 p-4 text-center">
                  <span className="font-mono text-xs font-bold text-sea-deep uppercase">
                    Mức 2: Thông hiểu
                  </span>
                  <p className="mt-1 font-display text-2xl font-bold text-star">30%</p>
                  <p className="text-xs text-star-soft mt-1">
                    3,0 điểm • Giải thích và chuyển đổi đơn vị
                  </p>
                </div>
                <div className="rounded-2xl border border-coral/30 bg-coral/10 p-4 text-center">
                  <span className="font-mono text-xs font-bold text-coral uppercase">
                    Mức 3: Vận dụng
                  </span>
                  <p className="mt-1 font-display text-2xl font-bold text-star">30%</p>
                  <p className="text-xs text-star-soft mt-1">
                    3,0 điểm • Xử lý tình huống và tự luận thực tế
                  </p>
                </div>
              </div>
            </div>

            {/* MODAL ẢNH MA TRẬN GỐC */}
            {showMatrixModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={() => setShowMatrixModal(false)}
              >
                <div
                  className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-3xl border border-sea/40 bg-void-card p-4 shadow-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-star/15">
                    <h3 className="font-display text-base font-bold text-star">
                      Ảnh chụp Khung Ma Trận & Xây Dựng Đề Kiểm Tra Giữa Kì
                    </h3>
                    <button
                      onClick={() => setShowMatrixModal(false)}
                      className="rounded-full bg-void-light px-3 py-1 text-xs text-star-soft hover:text-star"
                    >
                      ✕ Đóng
                    </button>
                  </div>
                  <div className="mt-4">
                    <img
                      src="/ma_tran_de_kt_gk1.jpg"
                      alt="Khung ma trận đề kiểm tra giữa kì môn Tin học 10"
                      className="w-full rounded-2xl shadow-card"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: BẢN ĐẶC TẢ YÊU CẦU CẦN ĐẠT                        */}
        {/* ======================================================== */}
        {activeTab === "spec" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-star/20 bg-void-card p-6 sm:p-8 shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-star/15 pb-4">
                <div>
                  <span className="rounded-full bg-gold/20 px-3 py-1 font-mono text-xs font-bold text-gold-deep">
                    BẢNG ĐẶC TẢ KỸ THUẬT ĐỀ THI
                  </span>
                  <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-star">
                    Bản Đặc Tả Đề Kiểm Tra Giữa Học Kỳ I — Tin Học 10
                  </h2>
                  <p className="text-xs text-star-soft mt-1">
                    Quy định chi tiết các mức độ nhận thức (Nhận biết, Thông hiểu, Vận dụng) và ánh xạ từng câu hỏi cụ thể trong đề thi.
                  </p>
                </div>

                <a
                  href="/download/De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                  download="De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx"
                  className="flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 font-display text-xs sm:text-sm font-bold text-gold-deep hover:bg-gold/20 transition"
                >
                  <Download className="h-4 w-4" />
                  <span>Tải bản đặc tả (.docx)</span>
                </a>
              </div>

              <div className="mt-6 space-y-6">
                {MIDTERM_SPECIFICATION.map((spec) => (
                  <div
                    key={spec.stt}
                    className="rounded-2xl border border-star/15 bg-void p-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sea/20 font-mono text-xs font-bold text-sea-deep">
                        {spec.stt}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-star">
                          {spec.topic}
                        </h3>
                        <p className="text-xs text-star-soft">{spec.unit}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {spec.standards.map((st, stIdx) => {
                        const levelColor =
                          st.level === "Nhận biết"
                            ? "border-leaf/30 bg-leaf/10 text-leaf-deep"
                            : st.level === "Thông hiểu"
                            ? "border-sea/30 bg-sea/10 text-sea-deep"
                            : "border-coral/30 bg-coral/10 text-coral";

                        return (
                          <div
                            key={stIdx}
                            className="rounded-xl border border-star/10 bg-void-card/60 p-3.5"
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-bold ${levelColor}`}
                              >
                                {st.level}
                              </span>
                              <span className="font-mono text-xs font-bold text-star-soft bg-void px-2 py-0.5 rounded border border-star/10">
                                🎯 {st.questionRef}
                              </span>
                            </div>

                            <ul className="space-y-1 text-xs text-star leading-relaxed list-disc list-inside">
                              {st.content.map((c, cIdx) => (
                                <li key={cIdx}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
