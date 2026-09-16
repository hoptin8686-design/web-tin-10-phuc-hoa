import fs from "fs";
import path from "path";

const BASE = "d:/Du-an-web/web-tin-10-phuc-hoa/data";

// List of all remaining lessons for Tin 10 (from bai-02 to bai-34)
const lessons = Array.from({ length: 33 }, (_, i) => {
  const num = i + 2;
  return {
    id: `bai-${String(num).padStart(2, "0")}`,
    varName: `bai${String(num).padStart(2, "0")}`,
    title: `Bài ${num}`,
  };
});

function mkTheory(l) {
  const intro = `Nội dung ${l.title} trình bày các kiến thức cốt lõi về môn Tin học lớp 10, giúp các em học sinh nắm vững lý thuyết và vận dụng vào thực tế.`;
  return `import type { LessonTheory } from "@/lib/types";

const ${l.varName}: LessonTheory = {
  intro: "${intro}",
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

export default ${l.varName};
`;
}

function mkQuestions(l) {
  const qs = Array.from({ length: 15 }, (_, i) => {
    return `  {
    id: "q${l.id.replace("bai-", "")}-${String(i + 1).padStart(2, "0")}",
    q: "Câu ${i + 1} — Chọn phát biểu đúng nhất về kiến thức của bài học:",
    options: [
      "Phát biểu A (Chính xác)",
      "Phát biểu B (Sai một phần)",
      "Phát biểu C (Hoàn toàn sai)",
      "Phát biểu D (Không liên quan)"
    ],
    answer: 0,
    explain: "Phát biểu A là chính xác vì nó phản ánh đúng định nghĩa và tính chất cơ bản đã học."
  }`;
  }).join(",\n");

  return `import type { Question } from "@/lib/types";

export const questions: Question[] = [
${qs}
];
`;
}

function mkExtra(l) {
  return `import type { LessonExtra } from "@/lib/types";

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
      answer: "Các khái niệm chính bao gồm: [Khái niệm 1], [Khái niệm 2]. \\n\\nVí dụ: Ứng dụng khái niệm này trong việc giải quyết một bài toán quản lý dữ liệu đơn giản."
    },
    {
      id: "es-02",
      q: "Phân tích một tình huống thực tế và đưa ra cách giải quyết bằng việc áp dụng kiến thức vừa học.",
      answer: "Tình huống: [Mô tả tình huống]\\n\\nGiải quyết: Sử dụng công cụ/thuật toán được giới thiệu trong bài học để đưa ra phương án tối ưu nhất."
    }
  ]
};
`;
}

let count = 0;

for (const l of lessons) {
  // Theory
  const tDir = path.join(BASE, "theory");
  if (!fs.existsSync(tDir)) fs.mkdirSync(tDir, { recursive: true });
  fs.writeFileSync(path.join(tDir, `${l.id}.ts`), mkTheory(l));

  // Questions
  const qDir = path.join(BASE, "questions");
  if (!fs.existsSync(qDir)) fs.mkdirSync(qDir, { recursive: true });
  fs.writeFileSync(path.join(qDir, `${l.id}.ts`), mkQuestions(l));

  // Extra
  const eDir = path.join(BASE, "extra");
  if (!fs.existsSync(eDir)) fs.mkdirSync(eDir, { recursive: true });
  fs.writeFileSync(path.join(eDir, `${l.id}.ts`), mkExtra(l));

  count += 3;
}

console.log(`✅ Đã tạo xong ${count} file nội dung cho Tin 10.`);
