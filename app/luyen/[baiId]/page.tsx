import { notFound } from "next/navigation";
import { CURRICULUM, getLessonById } from "@/data/curriculum";
import { getTheory } from "@/lib/theory";
import { getQuestions } from "@/lib/questions";
import { getExtra } from "@/lib/extras";
import LessonClient from "@/components/LessonClient";

export async function generateStaticParams() {
  return CURRICULUM.flatMap((topic) =>
    topic.lessons.map((l) => ({ baiId: l.id }))
  );
}

export async function generateMetadata({ params }: { params: { baiId: string } }) {
  const info = getLessonById(params.baiId);
  if (!info) return { title: "Không tìm thấy bài học — Tin học 10" };
  return {
    title: `${info.lesson.title} — Chinh phục Tin học 10`,
    description: `Học và ôn tập ${info.lesson.title}, ${info.topic.name} — THPT Phục Hòa.`,
  };
}

export default function LessonPage({ params }: { params: { baiId: string } }) {
  const info = getLessonById(params.baiId);
  if (!info) notFound();

  const { lesson, topic } = info;
  const theory = getTheory(lesson.id);
  const mcq = getQuestions(lesson.id);
  const extra = getExtra(lesson.id);

  // Đường dẫn SGK số hóa HTML (mặc định Bài 1 đã có sẵn)
  const sgkUrl = lesson.id === "bai-01" ? `/sgk/${lesson.id}.html` : null;

  return (
    <LessonClient
      lessonId={lesson.id}
      lessonTitle={lesson.title}
      topicName={topic.name}
      theory={theory}
      mcq={mcq}
      tf={extra.tf}
      essay={extra.essay}
      sgkUrl={sgkUrl}
    />
  );
}
