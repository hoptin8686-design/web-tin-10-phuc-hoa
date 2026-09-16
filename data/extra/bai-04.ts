import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "tf-01",
      context: "Xét tính Đúng / Sai của các phát biểu sau đây liên quan đến bài học:",
      statements: [
        {
          text: "Nội dung bài học có ứng dụng quan trọng trong thực tiễn.",
          answer: true,
          explain: "Đúng, các kiến thức Tin học luôn gắn liền với ứng dụng thực tế."
        },
        {
          text: "Chỉ cần học thuộc lòng, không cần thực hành trên máy tính.",
          answer: false,
          explain: "Sai, Tin học là môn học đòi hỏi kết hợp giữa lý thuyết và thực hành."
        },
        {
          text: "Kiến thức bài này là nền tảng cho các phần tiếp theo.",
          answer: true,
          explain: "Đúng, các nội dung có sự liên kết logic với nhau."
        },
        {
          text: "Việc sử dụng sai công cụ hoặc lệnh có thể dẫn đến kết quả sai lệch.",
          answer: true,
          explain: "Đúng, tính chính xác là yêu cầu bắt buộc trong Tin học."
        }
      ]
    }
  ],
  essay: [
    {
      id: "es-01",
      q: "Trình bày tóm tắt các khái niệm chính yếu yếu của bài học và nêu một ví dụ minh họa.",
      answer: "Các khái niệm chính bao gồm: [Khái niệm 1], [Khái niệm 2]. \n\nVí dụ: Ứng dụng khái niệm này trong việc giải quyết một bài toán quản lý dữ liệu đơn giản."
    },
    {
      id: "es-02",
      q: "Phân tích một tình huống thực tế và đưa ra cách giải quyết bằng việc áp dụng kiến thức vừa học.",
      answer: "Tình huống: [Mô tả tình huống]\n\nGiải quyết: Sử dụng công cụ/thuật toán được giới thiệu trong bài học để đưa ra phương án tối ưu nhất."
    }
  ]
};
