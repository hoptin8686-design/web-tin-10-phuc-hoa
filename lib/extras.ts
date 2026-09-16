import type { LessonExtra } from "./types";
import { extra as bai01 } from "@/data/extra/bai-01";

export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": bai01,
};

export function getExtra(lessonId: string): LessonExtra {
  return EXTRA_BANK[lessonId] ?? { tf: [], essay: [] };
}
