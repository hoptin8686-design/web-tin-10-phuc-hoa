import { Metadata } from "next";
import ExamMidtermClient from "@/components/ExamMidtermClient";

export const metadata: Metadata = {
  title: "Đề Kiểm Tra Giữa Học Kỳ I — Tin Học 10 Kết Nối Tri Thức",
  description:
    "Phòng thi trực tuyến Đề kiểm tra Giữa học kỳ I môn Tin học 10, cấu trúc chuẩn Ma trận và Bản đặc tả tập huấn Sở GD&ĐT Cao Bằng - Trường THPT Phục Hòa.",
};

export default function MidtermExamPage() {
  return <ExamMidtermClient />;
}
