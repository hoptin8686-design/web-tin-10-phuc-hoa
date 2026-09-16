export type Question = {
  id: string;
  q: string;
  code?: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explain: string;
};

export type TFStatement = {
  text: string;
  answer: boolean; // true = Đúng, false = Sai
  explain: string;
};

export type TFQuestion = {
  id: string;
  context: string;
  code?: string;
  statements: TFStatement[]; // 4 mệnh đề độc lập
};

export type EssayQuestion = {
  id: string;
  q: string;
  code?: string;
  answer: string; // Hướng dẫn giải / đáp án đối chiếu
};

export type LessonExtra = {
  tf: TFQuestion[];
  essay: EssayQuestion[];
};

export type Tone = "sea" | "coral" | "leaf" | "gold" | "berry";

export type TheoryCard = {
  emoji: string;
  title: string;
  text: string;
};

export type TheoryBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "cards"; tone?: Tone; items: TheoryCard[] }
  | {
      kind: "compare";
      left: { title: string; emoji: string; items: string[] };
      right: { title: string; emoji: string; items: string[] };
    }
  | { kind: "steps"; items: { label: string; title: string; text: string }[] }
  | { kind: "figure"; diagram: string; caption: string }
  | { kind: "code"; code: string; caption?: string; preview?: boolean; tall?: boolean }
  | { kind: "example"; title: string; text: string }
  | { kind: "note"; text: string }
  | { kind: "warn"; title: string; text: string }
  | {
      kind: "check";
      q: string;
      options: string[];
      answer: number;
      explain: string;
    };

export type TheorySection = {
  id: string;
  emoji: string;
  heading: string;
  blocks: TheoryBlock[];
};

export type LessonTheory = {
  intro: string;
  minutes: number;
  sections: TheorySection[];
  summary: string[];
};

export type LessonCounts = {
  mcq: number;
  tf: number;
  essay: number;
  theory: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  available: boolean;
  bookPages?: string;
  highlight?: string;
};

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  lessons: Lesson[];
};

export type LessonProgress = {
  best: number; // Điểm cao nhất (%)
  last: number; // Điểm lần gần nhất
  tries: number; // Số lần làm
  updatedAt: number;
};

export type ProgressMap = Record<string, LessonProgress>;

export type ErrorStat = {
  lessonId: string;
  wrongCount: number;
  totalAnswered: number;
};
