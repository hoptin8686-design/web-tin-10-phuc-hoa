import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-03: Một số kiểu dữ liệu và dữ liệu văn bản

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b03-tf01",
      "context": "Bạn Minh gõ một bài thơ chúc mừng ngày 20/11 gồm 20 dòng trên máy tính phòng thực hành trường THPT Phục Hòa. Minh sử dụng phông chữ Times New Roman và bảng mã Unicode chuẩn:",
      "statements": [
        {
          "text": "Bảng mã Unicode cho phép Minh hiển thị chuẩn xác toàn bộ các nguyên âm tiếng Việt có dấu như 'ơ', 'ư', 'ê'.",
          "answer": true,
          "explain": "Đúng. Unicode chứa đầy đủ toàn bộ kí tự có dấu của tiếng Việt."
        },
        {
          "text": "Nếu Minh gửi tệp văn bản này sang điện thoại thông minh, điện thoại vẫn đọc được nội dung bình thường nhờ tính chuẩn hóa toàn cầu của Unicode.",
          "answer": true,
          "explain": "Đúng. Mọi hệ điều hành hiện đại (Android, iOS, Windows) đều hỗ trợ Unicode chuẩn."
        },
        {
          "text": "Mỗi kí tự trong bài thơ của Minh luôn luôn chỉ chiếm đúng 1 bit trong bộ nhớ máy tính.",
          "answer": false,
          "explain": "Sai. Mỗi kí tự chiếm ít nhất 1 Byte (8 bit), kí tự tiếng Việt có dấu có thể chiếm 2-3 Byte trong UTF-8."
        },
        {
          "text": "Các dấu câu (chấm, phẩy) và dấu cách xuống dòng cũng là các kí tự được mã hóa số nhị phân trong tệp văn bản.",
          "answer": true,
          "explain": "Đúng. Dấu câu, dấu cách và kí tự xuống dòng (LF/CR) đều có mã số riêng trong bảng mã."
        }
      ]
    },
    {
      "id": "b03-tf02",
      "context": "Trong giờ học về bảng mã, giáo viên chiếu lên bảng mã ASCII của một số kí tự: 'A' (65), 'B' (66), 'C' (67) và 'a' (97), 'b' (98):",
      "statements": [
        {
          "text": "Kí tự chữ in hoa 'D' sẽ có mã thập phân trong bảng mã ASCII là 68.",
          "answer": true,
          "explain": "Đúng. Các chữ cái in hoa liên tiếp: 65 (A), 66 (B), 67 (C), 68 (D)."
        },
        {
          "text": "Mã thập phân của chữ cái 'c' thường là 99.",
          "answer": true,
          "explain": "Đúng. 'a'=97, 'b'=98, 'c'=99."
        },
        {
          "text": "Khoảng cách mã giữa bất kì chữ cái in thường nào và chữ cái in hoa tương ứng trong ASCII luôn là 32 đơn vị.",
          "answer": true,
          "explain": "Đúng. Mã in thường trừ mã in hoa tương ứng luôn bằng 32 (ví dụ: 97 - 65 = 32, 98 - 66 = 32)."
        },
        {
          "text": "Trong bảng mã ASCII, kí tự chữ số '0' có mã thập phân đúng bằng giá trị số học 0.",
          "answer": false,
          "explain": "Sai. Trong ASCII, kí tự '0' có mã là 48 (kí tự '1' là 49, '9' là 57)."
        }
      ]
    },
    {
      "id": "b03-tf03",
      "context": "Một trang web tin tức của tỉnh Cao Bằng lưu trữ bài viết giới thiệu về Lễ hội thác Bản Giốc dưới định dạng UTF-8. Bài viết gồm 1 500 từ tiếng Việt:",
      "statements": [
        {
          "text": "Định dạng UTF-8 giúp tối ưu hóa dung lượng lưu trữ trên máy chủ so với định dạng cố định 4 byte UTF-32.",
          "answer": true,
          "explain": "Đúng. UTF-8 dùng độ dài biến đổi 1-4 byte, tiết kiệm bộ nhớ đáng kể."
        },
        {
          "text": "Toàn bộ các kí tự trong bài viết này đều chiếm đúng 1 byte duy nhất trong bộ nhớ máy tính.",
          "answer": false,
          "explain": "Sai. Các kí tự tiếng Việt có dấu (như á, à, ơ, ư) trong UTF-8 cần 2 hoặc 3 byte để mã hóa."
        },
        {
          "text": "Trình duyệt web giải mã dãy bit nhị phân thành chữ cái tiếng Việt dựa trên bảng mã Unicode được quy định ở phần đầu trang web.",
          "answer": true,
          "explain": "Đúng. Trình duyệt đọc thẻ charset='utf-8' để biên dịch đúng bảng mã."
        },
        {
          "text": "Nếu máy chủ web bị đổi bảng mã sang ASCII chuẩn 7-bit, người dùng vẫn đọc được nguyên vẹn tiếng Việt có dấu.",
          "answer": false,
          "explain": "Sai. ASCII 7-bit chỉ có 128 kí tự tiếng Anh, toàn bộ tiếng Việt có dấu sẽ bị lỗi thành kí tự lạ."
        }
      ]
    },
    {
      "id": "b03-tf04",
      "context": "Khi học lập trình, bạn Tuấn làm quen với các biến lưu trữ dữ liệu khác nhau:",
      "statements": [
        {
          "text": "Biến lưu họ tên học sinh 'Nông Văn Dũng' thuộc kiểu dữ liệu văn bản (xâu kí tự).",
          "answer": true,
          "explain": "Đúng. Tên người là chuỗi kí tự chữ cái."
        },
        {
          "text": "Biến lưu điểm trung bình môn học '8.75' thuộc kiểu dữ liệu số thực.",
          "answer": true,
          "explain": "Đúng. Điểm số có phần thập phân được biểu diễn bằng kiểu số thực (float)."
        },
        {
          "text": "Biến lưu trạng thái 'Đã nộp bài tập' (chỉ nhận giá trị Đúng hoặc Sai) thuộc kiểu dữ liệu lôgic (Boolean).",
          "answer": true,
          "explain": "Đúng. Kiểu logic chỉ mang 1 trong 2 giá trị True hoặc False."
        },
        {
          "text": "Máy tính xử lí kiểu dữ liệu văn bản và kiểu dữ liệu số theo cùng một cách tính toán số học cộng trừ nhân chia như nhau.",
          "answer": false,
          "explain": "Sai. Máy tính thực hiện số học trên dữ liệu số, còn trên văn bản thì ghép nối xâu và tìm kiếm kí tự."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b03-es01",
      "q": "Tại sao bảng mã ASCII lại cần được mở rộng và thay thế bằng bảng mã Unicode? Phân tích ưu điểm vượt trội của chuẩn mã hóa UTF-8 trong thời đại Internet ngày nay.",
      "answer": "1. Lí do bảng mã ASCII cần được thay thế bằng Unicode:\n- Hạn chế của ASCII: Bảng mã ASCII chuẩn (7 bit) chỉ mã hóa được 128 kí tự, bản mở rộng (8 bit) mã hóa được 256 kí tự. Số lượng này chỉ đủ cho tiếng Anh và một vài ngôn ngữ Tây Âu, hoàn toàn bất lực trước hàng nghìn ngôn ngữ khác trên thế giới (tiếng Việt có dấu, tiếng Trung, tiếng Nhật, tiếng Ả Rập...).\n- Hệ quả trước đây: Mỗi quốc gia phải tạo ra bảng mã riêng (như TCVN3, VNI ở Việt Nam), dẫn đến tình trạng tài liệu gửi cho nhau bị lỗi phông chữ không thể đọc được.\n\n2. Ưu điểm vượt trội của UTF-8:\n- Mã hóa toàn cầu: Unicode UTF-8 đại diện cho hơn 140 000 kí tự của mọi ngôn ngữ và biểu tượng emoji trên hành tinh.\n- Tương thích ngược với ASCII: 128 kí tự tiếng Anh đầu tiên trong UTF-8 có mã số và độ dài (1 byte) hoàn toàn trùng khớp với ASCII.\n- Tiết kiệm dung lượng: Sử dụng độ dài linh hoạt (1 đến 4 byte thay vì 4 byte cố định như UTF-32), giúp giảm kích thước trang web và tiết kiệm băng thông truyền tải Internet."
    },
    {
      "id": "b03-es02",
      "q": "Một đoạn văn bản tiếng Anh thuần túy gồm 5 000 từ, mỗi từ có độ dài trung bình là 6 kí tự (kể cả dấu cách và dấu câu). Hãy tính dung lượng tệp tin (theo Byte và Kilobyte) khi lưu trữ văn bản này dưới chuẩn ASCII. Nếu chuyển sang lưu trữ một bài báo có 1 000 kí tự tiếng Việt có dấu (mỗi kí tự tiếng Việt trung bình tốn 2 byte trong UTF-8), dung lượng tệp là bao nhiêu Byte?",
      "answer": "1. Tính dung lượng đoạn văn bản tiếng Anh:\n- Tổng số kí tự văn bản tiếng Anh:\n  5 000 từ × 6 kí tự/từ = 30 000 kí tự.\n- Trong chuẩn ASCII, mỗi kí tự chiếm đúng 1 Byte:\n  Dung lượng = 30 000 Byte.\n- Đổi sang Kilobyte (KB):\n  30 000 / 1024 ≈ 29.3 KB.\n\n2. Tính dung lượng bài báo tiếng Việt (UTF-8):\n- Mỗi kí tự tiếng Việt tốn trung bình 2 Byte.\n- Tổng dung lượng của 1 000 kí tự tiếng Việt:\n  1 000 × 2 Byte = 2 000 Byte (xấp xỉ 1.95 KB)."
    }
  ]
};
