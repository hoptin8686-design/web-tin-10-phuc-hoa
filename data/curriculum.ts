import type { Topic } from "@/lib/types";

// Cấu trúc SGK Tin học 10 — Kết nối tri thức với cuộc sống.
// 34 bài học chia làm 6 chủ đề chuẩn, bám sát Kế hoạch dạy học của Trường THPT Phục Hòa (Cao Bằng).

export const CURRICULUM: Topic[] = [
  {
    id: "chu-de-1",
    name: "Chủ đề 1. Máy tính và xã hội tri thức",
    emoji: "💻",
    lessons: [
      {
        id: "bai-01",
        title: "Bài 1. Thông tin và xử lí thông tin",
        bookPages: "Trang 6–10",
        available: true,
        highlight: "Bài mẫu đầy đủ 5 phân hệ SGK, Lý thuyết, Trắc nghiệm, Đúng/Sai, Tự luận",
      },
      {
        id: "bai-02",
        title: "Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội",
        bookPages: "Trang 11–15",
        available: true,
      },
      {
        id: "bai-03",
        title: "Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản",
        bookPages: "Trang 16–19",
        available: true,
      },
      {
        id: "bai-04",
        title: "Bài 4. Hệ nhị phân và dữ liệu số nguyên",
        bookPages: "Trang 20–23",
        available: true,
      },
      {
        id: "bai-05",
        title: "Bài 5. Dữ liệu lôgic",
        bookPages: "Trang 24–27",
        available: true,
      },
      {
        id: "bai-06",
        title: "Bài 6. Dữ liệu âm thanh và hình ảnh",
        bookPages: "Trang 28–32",
        available: true,
      },
      {
        id: "bai-07",
        title: "Bài 7. Thực hành sử dụng thiết bị số thông dụng",
        bookPages: "Trang 33–37",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-2",
    name: "Chủ đề 2. Mạng máy tính và Internet",
    emoji: "🌐",
    lessons: [
      {
        id: "bai-08",
        title: "Bài 8. Mạng máy tính trong cuộc sống hiện đại",
        bookPages: "Trang 38–43",
        available: true,
      },
      {
        id: "bai-09",
        title: "Bài 9. An toàn trên không gian mạng",
        bookPages: "Trang 44–49",
        available: true,
      },
      {
        id: "bai-10",
        title: "Bài 10. Thực hành khai thác tài nguyên trên Internet",
        bookPages: "Trang 50–54",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-3",
    name: "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số",
    emoji: "⚖️",
    lessons: [
      {
        id: "bai-11",
        title: "Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
        bookPages: "Trang 55–62",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-4",
    name: "Chủ đề 4. Ứng dụng tin học (Đồ họa Inkscape)",
    emoji: "🎨",
    lessons: [
      {
        id: "bai-12",
        title: "Bài 12. Phần mềm thiết kế đồ họa",
        bookPages: "Trang 63–68",
        available: true,
      },
      {
        id: "bai-13",
        title: "Bài 13. Bổ sung các đối tượng đồ họa",
        bookPages: "Trang 69–74",
        available: true,
      },
      {
        id: "bai-14",
        title: "Bài 14. Làm việc với đối tượng đường và văn bản",
        bookPages: "Trang 75–81",
        available: true,
      },
      {
        id: "bai-15",
        title: "Bài 15. Hoàn thiện hình ảnh đồ họa",
        bookPages: "Trang 82–85",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-5",
    name: "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình Python)",
    emoji: "🐍",
    lessons: [
      {
        id: "bai-16",
        title: "Bài 16. Ngôn ngữ lập trình bậc cao và Python",
        bookPages: "Trang 86–90",
        available: true,
      },
      {
        id: "bai-17",
        title: "Bài 17. Biến và lệnh gán",
        bookPages: "Trang 91–96",
        available: true,
      },
      {
        id: "bai-18",
        title: "Bài 18. Các lệnh vào ra đơn giản",
        bookPages: "Trang 97–100",
        available: true,
      },
      {
        id: "bai-19",
        title: "Bài 19. Câu lệnh điều kiện if",
        bookPages: "Trang 101–104",
        available: true,
      },
      {
        id: "bai-20",
        title: "Bài 20. Câu lệnh lặp for",
        bookPages: "Trang 105–107",
        available: true,
      },
      {
        id: "bai-21",
        title: "Bài 21. Câu lệnh lặp while",
        bookPages: "Trang 108–110",
        available: true,
      },
      {
        id: "bai-22",
        title: "Bài 22. Kiểu dữ liệu danh sách",
        bookPages: "Trang 111–114",
        available: true,
      },
      {
        id: "bai-23",
        title: "Bài 23. Một số lệnh làm việc với dữ liệu danh sách",
        bookPages: "Trang 115–118",
        available: true,
      },
      {
        id: "bai-24",
        title: "Bài 24. Xâu kí tự",
        bookPages: "Trang 119–122",
        available: true,
      },
      {
        id: "bai-25",
        title: "Bài 25. Một số lệnh làm việc với xâu kí tự",
        bookPages: "Trang 123–126",
        available: true,
      },
      {
        id: "bai-26",
        title: "Bài 26. Hàm trong Python",
        bookPages: "Trang 127–130",
        available: true,
      },
      {
        id: "bai-27",
        title: "Bài 27. Tham số của hàm",
        bookPages: "Trang 131–135",
        available: true,
      },
      {
        id: "bai-28",
        title: "Bài 28. Phạm vi của biến",
        bookPages: "Trang 136–140",
        available: true,
      },
      {
        id: "bai-29",
        title: "Bài 29. Nhận biết lỗi chương trình",
        bookPages: "Trang 141–144",
        available: true,
      },
      {
        id: "bai-30",
        title: "Bài 30. Kiểm thử và gỡ lỗi chương trình",
        bookPages: "Trang 145–148",
        available: true,
      },
      {
        id: "bai-31",
        title: "Bài 31. Thực hành viết chương trình đơn giản",
        bookPages: "Trang 149–152",
        available: true,
      },
      {
        id: "bai-32",
        title: "Bài 32. Ôn tập lập trình Python",
        bookPages: "Trang 153–155",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-6",
    name: "Chủ đề 6. Hướng nghiệp với tin học",
    emoji: "🧭",
    lessons: [
      {
        id: "bai-33",
        title: "Bài 33. Nghề thiết kế đồ hoạ máy tính",
        bookPages: "Trang 156–159",
        available: true,
      },
      {
        id: "bai-34",
        title: "Bài 34. Nghề phát triển phần mềm",
        bookPages: "Trang 160–164",
        available: true,
      },
    ],
  },
];

export function getLessonById(id: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === id);
    if (lesson) return { lesson, topic };
  }
  return null;
}
