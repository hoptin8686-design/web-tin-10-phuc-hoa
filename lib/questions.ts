import type { Question } from "./types";
import { questions as bai01 } from "@/data/questions/bai-01";

export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": bai01,
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] ?? [];
}

export function hasQuestions(lessonId: string): boolean {
  return (QUESTION_BANK[lessonId]?.length ?? 0) > 0;
}
