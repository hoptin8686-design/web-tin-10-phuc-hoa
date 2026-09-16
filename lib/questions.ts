import type { Question } from "./types";
import { questions as q_bai01 } from "@/data/questions/bai-01";
import { questions as q_bai02 } from "@/data/questions/bai-02";
import { questions as q_bai03 } from "@/data/questions/bai-03";
import { questions as q_bai04 } from "@/data/questions/bai-04";
import { questions as q_bai05 } from "@/data/questions/bai-05";
import { questions as q_bai06 } from "@/data/questions/bai-06";
import { questions as q_bai07 } from "@/data/questions/bai-07";
import { questions as q_bai08 } from "@/data/questions/bai-08";
import { questions as q_bai09 } from "@/data/questions/bai-09";
import { questions as q_bai10 } from "@/data/questions/bai-10";
import { questions as q_bai11 } from "@/data/questions/bai-11";
import { questions as q_bai12 } from "@/data/questions/bai-12";
import { questions as q_bai13 } from "@/data/questions/bai-13";
import { questions as q_bai14 } from "@/data/questions/bai-14";
import { questions as q_bai15 } from "@/data/questions/bai-15";
import { questions as q_bai16 } from "@/data/questions/bai-16";
import { questions as q_bai17 } from "@/data/questions/bai-17";
import { questions as q_bai18 } from "@/data/questions/bai-18";
import { questions as q_bai19 } from "@/data/questions/bai-19";
import { questions as q_bai20 } from "@/data/questions/bai-20";
import { questions as q_bai21 } from "@/data/questions/bai-21";
import { questions as q_bai22 } from "@/data/questions/bai-22";
import { questions as q_bai23 } from "@/data/questions/bai-23";
import { questions as q_bai24 } from "@/data/questions/bai-24";
import { questions as q_bai25 } from "@/data/questions/bai-25";
import { questions as q_bai26 } from "@/data/questions/bai-26";
import { questions as q_bai27 } from "@/data/questions/bai-27";
import { questions as q_bai28 } from "@/data/questions/bai-28";
import { questions as q_bai29 } from "@/data/questions/bai-29";
import { questions as q_bai30 } from "@/data/questions/bai-30";
import { questions as q_bai31 } from "@/data/questions/bai-31";
import { questions as q_bai32 } from "@/data/questions/bai-32";
import { questions as q_bai33 } from "@/data/questions/bai-33";
import { questions as q_bai34 } from "@/data/questions/bai-34";

export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": q_bai01,
  "bai-02": q_bai02,
  "bai-03": q_bai03,
  "bai-04": q_bai04,
  "bai-05": q_bai05,
  "bai-06": q_bai06,
  "bai-07": q_bai07,
  "bai-08": q_bai08,
  "bai-09": q_bai09,
  "bai-10": q_bai10,
  "bai-11": q_bai11,
  "bai-12": q_bai12,
  "bai-13": q_bai13,
  "bai-14": q_bai14,
  "bai-15": q_bai15,
  "bai-16": q_bai16,
  "bai-17": q_bai17,
  "bai-18": q_bai18,
  "bai-19": q_bai19,
  "bai-20": q_bai20,
  "bai-21": q_bai21,
  "bai-22": q_bai22,
  "bai-23": q_bai23,
  "bai-24": q_bai24,
  "bai-25": q_bai25,
  "bai-26": q_bai26,
  "bai-27": q_bai27,
  "bai-28": q_bai28,
  "bai-29": q_bai29,
  "bai-30": q_bai30,
  "bai-31": q_bai31,
  "bai-32": q_bai32,
  "bai-33": q_bai33,
  "bai-34": q_bai34,
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] || [];
}
