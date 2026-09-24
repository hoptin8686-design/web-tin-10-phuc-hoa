import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-05: Dữ liệu lôgic

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b05-tf01",
      "context": "Để được xét khen thưởng học sinh giỏi môn Tin học học kì I, học sinh lớp 10 phải thỏa mãn đồng thời hai điều kiện: (Điểm trung bình môn Tin >= 8.0) VÀ (Không có bài kiểm tra nào dưới 6.5):",
      "statements": [
        {
          "text": "Quy chế khen thưởng trên áp dụng phép toán lôgic AND giữa hai điều kiện.",
          "answer": true,
          "explain": "Đúng. 'Thỏa mãn đồng thời cả hai' là bản chất của phép toán AND."
        },
        {
          "text": "Bạn Nam có điểm trung bình môn 8.5 nhưng có một bài kiểm tra 6.0 điểm thì vẫn đủ điều kiện khen thưởng.",
          "answer": false,
          "explain": "Sai. Vì điều kiện thứ hai bị False, True AND False = False nên Nam không đạt."
        },
        {
          "text": "Bạn Hoa có điểm trung bình môn 8.2 và điểm kiểm tra thấp nhất là 7.0 thì được khen thưởng.",
          "answer": true,
          "explain": "Đúng. Cả hai điều kiện đều True nên True AND True = True."
        },
        {
          "text": "Nếu nhà trường đổi quy chế thành: Đạt điểm trung bình >= 8.0 HOẶC đạt giải kì thi học sinh giỏi cấp trường thì đây là phép toán lôgic OR.",
          "answer": true,
          "explain": "Đúng. Từ khóa 'HOẶC' chỉ cần 1 trong 2 điều kiện đúng là đạt kết quả."
        }
      ]
    },
    {
      "id": "b05-tf02",
      "context": "Trong giờ thực hành mạch số, nhóm bạn Tuấn khảo sát bảng chân trị của các cổng logic cơ bản:",
      "statements": [
        {
          "text": "Cổng AND có hai đầu vào A, B sẽ cho đầu ra bằng 1 khi và chỉ khi A = 1 và B = 1.",
          "answer": true,
          "explain": "Đúng. Định nghĩa cổng AND chuẩn."
        },
        {
          "text": "Cổng OR có hai đầu vào A, B sẽ cho đầu ra bằng 0 khi cả A = 0 và B = 0.",
          "answer": true,
          "explain": "Đúng. Cổng OR chỉ cho ra 0 khi tất cả đầu vào bằng 0."
        },
        {
          "text": "Cổng NOT khi đưa đầu vào là mức điện áp 0V (tương ứng bit 0) sẽ cho đầu ra là mức điện áp 5V (tương ứng bit 1).",
          "answer": true,
          "explain": "Đúng. Cổng NOT đảo tín hiệu điện áp: thấp thành cao, cao thành thấp."
        },
        {
          "text": "Cổng XOR khi đưa vào hai tín hiệu giống hệt nhau (ví dụ cùng là 1) sẽ cho đầu ra bằng 1.",
          "answer": false,
          "explain": "Sai. XOR của hai giá trị giống nhau luôn cho ra 0 (1 XOR 1 = 0)."
        }
      ]
    },
    {
      "id": "b05-tf03",
      "context": "Cho biểu thức lôgic: F = (A OR B) AND (NOT C). Xét các trường hợp giá trị của các biến A, B, C:",
      "statements": [
        {
          "text": "Khi A = True, B = False, C = False thì biểu thức F nhận giá trị True.",
          "answer": true,
          "explain": "Đúng. A OR B = True, NOT C = True -> True AND True = True."
        },
        {
          "text": "Khi C = True thì biểu thức F luôn nhận giá trị False mà không cần quan tâm đến giá trị của A và B.",
          "answer": true,
          "explain": "Đúng. Vì C = True nên NOT C = False. Bất kì giá trị nào AND với False đều bằng False."
        },
        {
          "text": "Khi A = False và B = False thì biểu thức F nhận giá trị True nếu C = False.",
          "answer": false,
          "explain": "Sai. Khi A=False, B=False thì A OR B = False. False AND gì cũng bằng False."
        },
        {
          "text": "Có đúng 3 bộ giá trị của (A, B, C) làm cho biểu thức F nhận giá trị True.",
          "answer": true,
          "explain": "Đúng. F=True khi C=0 (NOT C=1) và (A,B) thuộc {(1,0), (0,1), (1,1)} -> có đúng 3 bộ giá trị."
        }
      ]
    },
    {
      "id": "b05-tf04",
      "context": "Một cửa tự động của thư viện thông minh được thiết lập điều kiện mở cửa: Cửa chỉ mở khi (Có thẻ học sinh quét hợp lệ) VÀ (Không vượt quá sĩ số tối đa trong phòng):",
      "statements": [
        {
          "text": "Nếu phòng thư viện đã đầy người (điều kiện thứ hai bị Sai), dù học sinh có thẻ hợp lệ thì cửa vẫn không mở.",
          "answer": true,
          "explain": "Đúng. Phép AND đòi hỏi cả 2 điều kiện cùng đúng; một điều kiện sai thì kết quả là không mở."
        },
        {
          "text": "Biểu thức điều khiển cửa thư viện là một ví dụ thực tế về ứng dụng của đại số Boole trong điều khiển tự động.",
          "answer": true,
          "explain": "Đúng. Các hệ thống nhúng tự động vận hành dựa trên các điều kiện logic Boole."
        },
        {
          "text": "Nếu người quản trị muốn ưu tiên cho giáo viên có thể vào phòng bất cứ lúc nào kể cả khi phòng đã đầy, ta có thể dùng phép OR: (Điều kiện mở thường) OR (Thẻ giáo viên).",
          "answer": true,
          "explain": "Đúng. Phép OR cho phép tạo luồng ưu tiên đặc biệt."
        },
        {
          "text": "Đại số Boole chỉ có thể áp dụng trong toán học thuần túy chứ không thể dùng để viết mã lệnh lập trình máy tính.",
          "answer": false,
          "explain": "Sai. Toàn bộ các cấu trúc điều khiển trong lập trình (if, while) đều dựa trên đại số Boole."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b05-es01",
      "q": "Lập bảng chân trị hoàn chỉnh cho biểu thức lôgic F = (A AND B) OR (NOT A). Từ bảng chân trị, hãy nhận xét biểu thức F có tương đương với biểu thức (B OR NOT A) hay không?",
      "answer": "1. Lập bảng chân trị cho các trường hợp của A và B (4 tổ hợp):\n| A | B | NOT A | A AND B | F = (A AND B) OR (NOT A) | B OR (NOT A) |\n|---|---|---|---|---|---|\n| 0 | 0 | 1 | 0 | 1 | 1 |\n| 0 | 1 | 1 | 0 | 1 | 1 |\n| 1 | 0 | 0 | 0 | 0 | 0 |\n| 1 | 1 | 0 | 1 | 1 | 1 |\n\n2. Nhận xét:\n- So sánh hai cột giá trị của 'F' và 'B OR (NOT A)' ta thấy với mọi giá trị của A và B, kết quả đều giống hệt nhau (1, 1, 0, 1).\n- Do đó, biểu thức F = (A AND B) OR (NOT A) tương đương lôgic hoàn toàn với biểu thức (B OR NOT A) theo luật phân phối của đại số Boole."
    },
    {
      "id": "b05-es02",
      "q": "Một hệ thống tưới cây tự động trong vườn trường THPT Phục Hòa hoạt động dựa trên 3 cảm biến: Cảm biến độ ẩm đất H (H=1 khi đất khô, H=0 khi đất ẩm), Cảm biến ánh sáng L (L=1 khi trời tối, L=0 khi trời nắng gắt), Cảm biến mưa R (R=1 khi trời mưa, R=0 khi trời không mưa). Máy bơm nước P sẽ bật (P=1) khi: Đất bị khô VÀ trời không mưa VÀ (trời tối HOẶC người làm vườn bật công tắc khẩn cấp M=1). Hãy viết biểu thức lôgic của máy bơm P theo các biến H, R, L, M.",
      "answer": "1. Phân tích các điều kiện logic:\n- 'Đất bị khô': H = 1.\n- 'Trời không mưa': NOT R = 1 (phủ định của biến R).\n- 'Trời tối HOẶC công tắc khẩn cấp M': (L OR M).\n- Các điều kiện trên liên kết bằng liên từ VÀ (AND).\n\n2. Biểu thức lôgic hoàn chỉnh của máy bơm P:\nP = H AND (NOT R) AND (L OR M).\n\n3. Ý nghĩa thực tiễn:\n- Nếu trời đang mưa (R=1) thì NOT R = 0, máy bơm chắc chắn tắt để tránh úng cây và tiết kiệm điện.\n- Máy bơm chỉ hoạt động khi đất thực sự cần nước (H=1) và vào thời điểm thích hợp (chiều tối L=1 hoặc có lệnh khẩn cấp M=1)."
    }
  ]
};
