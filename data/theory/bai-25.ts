import type { LessonTheory } from "@/lib/types";

const bai25: LessonTheory = {
  intro: "Nội dung Bài 25 trình bày các kiến thức cốt lõi về môn Tin học lớp 10, giúp các em học sinh nắm vững lý thuyết và vận dụng vào thực tế.",
  minutes: 15,
  sections: [
    {
      id: "kien-thuc-trong-tam",
      emoji: "📚",
      heading: "1. Kiến thức trọng tâm",
      blocks: [
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "🎯",
              title: "Khái niệm cơ bản",
              text: "Nắm rõ các định nghĩa, khái niệm và tính chất quan trọng được đề cập trong bài học."
            },
            {
              emoji: "⚙️",
              title: "Nguyên lý hoạt động",
              text: "Hiểu được cách thức hoạt động, quy trình xử lý hoặc các bước thực hiện cơ bản."
            }
          ]
        },
        {
          kind: "note",
          text: "Ghi nhớ: Học thuộc các khái niệm và áp dụng linh hoạt vào việc giải quyết vấn đề. Chú ý đến các từ khóa quan trọng và ví dụ minh họa trong sách giáo khoa."
        }
      ]
    },
    {
      id: "van-dung",
      emoji: "🚀",
      heading: "2. Vận dụng thực tiễn",
      blocks: [
        {
          kind: "text",
          text: "Vận dụng kiến thức vào các bài toán thực tế, sử dụng phần mềm, ngôn ngữ lập trình hoặc kỹ năng sử dụng máy tính hiệu quả để tạo ra sản phẩm thực."
        }
      ]
    }
  ],
  summary: [
    "Hiểu rõ định nghĩa và khái niệm trọng tâm của bài.",
    "Biết cách phân tích và áp dụng kiến thức vào thực tế.",
    "Sử dụng thành thạo các công cụ hoặc ngôn ngữ lập trình tương ứng."
  ]
};

export default bai25;
