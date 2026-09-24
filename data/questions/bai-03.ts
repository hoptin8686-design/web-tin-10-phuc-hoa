import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-03: Một số kiểu dữ liệu và dữ liệu văn bản
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b03-q01",
    "q": "Bảng mã ASCII chuẩn ban đầu sử dụng bao nhiêu bit để mã hóa một kí tự?",
    "options": [
      "7 bit (mã hóa được 128 kí tự khác nhau từ 0 đến 127).",
      "8 bit (mã hóa được 256 kí tự khác nhau từ 0 đến 255).",
      "16 bit (mã hóa được 65536 kí tự khác nhau trên thế giới).",
      "32 bit (mã hóa được hàng tỉ kí tự của mọi ngôn ngữ)."
    ],
    "answer": 0,
    "explain": "Bảng mã ASCII chuẩn ban đầu dùng 7 bit, mã hóa được 2^7 = 128 kí tự gồm chữ cái tiếng Anh, chữ số và kí hiệu điều khiển."
  },
  {
    "id": "b03-q02",
    "q": "Lí do chính dẫn đến sự ra đời của bộ mã quốc tế Unicode là gì?",
    "options": [
      "Bộ mã ASCII không đủ số lượng bit để biểu diễn các ngôn ngữ có dấu như tiếng Việt.",
      "Bộ mã ASCII tiêu tốn quá nhiều dung lượng bộ nhớ khi lưu trữ văn bản trên máy tính.",
      "Các máy tính sản xuất sau năm 2000 không còn tương thích với các kí tự số và chữ cái.",
      "Các lập trình viên muốn loại bỏ hoàn toàn các chữ cái tiếng Anh khỏi khoa học máy tính."
    ],
    "answer": 0,
    "explain": "ASCII chỉ có 128 (hoặc 256 mã mở rộng) nên không thể biểu diễn đồng thời ngôn ngữ của mọi quốc gia trên thế giới như tiếng Việt, tiếng Trung, tiếng Nhật."
  },
  {
    "id": "b03-q03",
    "q": "Trong bảng mã ASCII, kí tự chữ cái in hoa 'A' có mã thập phân là 65. Mã thập phân của chữ cái 'B' là bao nhiêu?",
    "options": [
      "66 (kế tiếp ngay sau mã của chữ cái 'A').",
      "64 (đứng ngay trước mã của chữ cái 'A').",
      "97 (đây là mã thập phân của chữ 'a' thường).",
      "67 (đây là mã thập phân của chữ 'C' hoa)."
    ],
    "answer": 0,
    "explain": "Trong bảng mã ASCII, các chữ cái in hoa được sắp xếp liên tiếp theo thứ tự bảng chữ cái: 'A'=65, 'B'=66, 'C'=67..."
  },
  {
    "id": "b03-q04",
    "q": "Mã nhị phân biểu diễn kí tự 'A' (mã thập phân 65) trong hệ thống máy tính 8-bit là gì?",
    "options": [
      "01000001 (tương ứng 64 + 1 trong hệ thập phân).",
      "01000010 (tương ứng 64 + 2, là mã của chữ 'B').",
      "01100001 (tương ứng 97, là mã của chữ 'a' thường).",
      "10000001 (tương ứng 128 + 1, là số âm hoặc kí tự mở rộng)."
    ],
    "answer": 0,
    "explain": "65 = 64 + 1 = 2^6 + 2^0, dạng nhị phân 8 bit là 01000001."
  },
  {
    "id": "b03-q05",
    "q": "Định dạng mã hóa UTF-8 của bảng mã Unicode có đặc điểm nổi bật nào dưới đây?",
    "options": [
      "Sử dụng độ dài biến đổi từ 1 đến 4 byte cho mỗi kí tự và tương thích ngược với ASCII.",
      "Bắt buộc mọi kí tự trên thế giới đều phải chiếm đúng 4 byte cố định trong bộ nhớ.",
      "Chỉ mã hóa được tối đa 256 kí tự giống như bảng mã ASCII mở rộng ngày trước.",
      "Không thể hiển thị được tiếng Việt có dấu trên các trình duyệt web hiện đại."
    ],
    "answer": 0,
    "explain": "UTF-8 dùng từ 1 đến 4 byte: các kí tự tiếng Anh (ASCII) chỉ tốn 1 byte, tiếng Việt có dấu tốn 2-3 byte, rất tiết kiệm bộ nhớ và tương thích ngược hoàn hảo."
  },
  {
    "id": "b03-q06",
    "q": "Một đoạn văn bản thuần túy tiếng Anh không dấu dài 1 000 kí tự lưu dưới dạng mã ASCII sẽ chiếm dung lượng khoảng bao nhiêu?",
    "options": [
      "Khoảng 1 000 Byte (mỗi kí tự ASCII chiếm đúng 1 Byte).",
      "Khoảng 2 000 Byte (mỗi kí tự chiếm đúng 2 Byte).",
      "Khoảng 125 Byte (mỗi kí tự chiếm 1 bit bộ nhớ).",
      "Khoảng 8 000 Byte (mỗi kí tự chiếm 8 Byte)."
    ],
    "answer": 0,
    "explain": "Trong ASCII mở rộng và UTF-8, mỗi kí tự tiếng Anh chuẩn chiếm 1 Byte = 8 bit. Do đó 1000 kí tự chiếm 1000 Byte."
  },
  {
    "id": "b03-q07",
    "q": "Các kiểu dữ liệu cơ bản trong xử lí thông tin bằng máy tính bao gồm những kiểu nào?",
    "options": [
      "Kiểu văn bản (xâu kí tự), kiểu số (số nguyên, số thực) và kiểu lôgic (đúng/sai).",
      "Kiểu mực in, kiểu giấy viết, kiểu bảng phấn và kiểu âm thanh truyền miệng.",
      "Kiểu ổ đĩa cứng, kiểu thanh nhớ RAM và kiểu bộ vi xử lí CPU của máy.",
      "Kiểu phần mềm thương mại, kiểu phần mềm tự do và kiểu phần mềm chia sẻ."
    ],
    "answer": 0,
    "explain": "Các kiểu dữ liệu cơ bản thường gặp: Kiểu số (Integer, Float), kiểu văn bản/kí tự (String, Character), kiểu logic (Boolean)."
  },
  {
    "id": "b03-q08",
    "q": "Tại sao máy tính điện tử lại phải mã hóa văn bản thành các dãy bit số nhị phân?",
    "options": [
      "Vì mạch điện tử của máy tính chỉ có thể lưu trữ và xử lí hai trạng thái đóng/mở (0 và 1).",
      "Vì các nhà khoa học muốn bảo mật không để con người đọc được nội dung tài liệu.",
      "Vì văn bản chữ viết chiếm nhiều diện tích trên màn hình hơn là các con số nhị phân.",
      "Vì bàn phím máy tính chỉ có hai phím bấm duy nhất là phím số 0 và phím số 1."
    ],
    "answer": 0,
    "explain": "Phần cứng máy tính cấu tạo từ các transistor hoạt động ở 2 mức điện áp (có điện = 1, ngắt điện = 0), do đó mọi dữ liệu đều phải quy về nhị phân."
  },
  {
    "id": "b03-q09",
    "q": "Trong Tin học, khái niệm 'xâu kí tự' (String) được định nghĩa là gì?",
    "options": [
      "Dãy các kí tự được đặt liên tiếp nhau trong bộ nhớ (bao gồm chữ, số, dấu cách, dấu câu).",
      "Tập hợp các phép toán cộng trừ nhân chia được thực hiện trên số thực dấu phẩy động.",
      "Một tệp tin hình ảnh động được lưu dưới định dạng GIF hoặc video MP4 ngắn.",
      "Hệ thống dây cáp nối truyền tín hiệu mạng Internet giữa hai máy tính để bàn."
    ],
    "answer": 0,
    "explain": "Xâu kí tự là một dãy liên tiếp các kí tự thuộc bảng mã, ví dụ 'Trường THPT Phục Hòa'."
  },
  {
    "id": "b03-q10",
    "q": "Kí tự dấu cách (khoảng trắng - Space) có được gán một mã số trong bảng mã ASCII hay không?",
    "options": [
      "Có, dấu cách có mã thập phân là 32 và cũng chiếm dung lượng 1 byte như chữ cái bình thường.",
      "Không, dấu cách chỉ là khoảng trống vô hình nên không tốn bất kì dung lượng bộ nhớ nào.",
      "Chỉ có trên máy tính bàn dùng hệ điều hành Windows, còn trên điện thoại thì không có.",
      "Có, nhưng mã của dấu cách luôn luôn là số âm để phân biệt với các chữ cái có nghĩa."
    ],
    "answer": 0,
    "explain": "Dấu cách (Space) là một kí tự thực thụ trong ASCII với mã 32 (nhị phân 00100000) và chiếm 1 byte như mọi kí tự khác."
  },
  {
    "id": "b03-q11",
    "q": "Khi lưu trữ một bài báo dài 10 trang bằng định dạng văn bản thuần túy (.txt), dung lượng tệp thường là bao nhiêu?",
    "options": [
      "Khoảng vài chục Kilobyte (KB), rất nhỏ gọn vì chỉ lưu các mã kí tự.",
      "Khoảng vài Gigabyte (GB), tương đương với dung lượng của một bộ phim HD.",
      "Khoảng vài trăm Megabyte (MB), vì mỗi chữ cái chiếm hàng triệu bit nhị phân.",
      "Không tốn dung lượng bộ nhớ nào vì tệp tin văn bản không có hình ảnh minh họa."
    ],
    "answer": 0,
    "explain": "Văn bản thuần túy (.txt) rất nhẹ, 10 trang văn bản khoảng 30 000 kí tự chỉ chiếm khoảng 30 - 60 KB."
  },
  {
    "id": "b03-q12",
    "q": "Sự khác biệt giữa văn bản thuần túy (.txt) và văn bản có định dạng (.docx, .pdf) là gì?",
    "options": [
      "Văn bản có định dạng lưu thêm thông tin về màu sắc, phông chữ, cỡ chữ và hình ảnh chèn vào.",
      "Văn bản thuần túy không thể mở được trên máy tính nếu không có kết nối mạng Internet.",
      "Văn bản có định dạng chỉ chứa các con số 0 và 1 mà không thể hiển thị chữ cái cho người đọc.",
      "Văn bản thuần túy luôn có dung lượng tệp lớn gấp hàng trăm lần văn bản có định dạng."
    ],
    "answer": 0,
    "explain": "Tệp .docx lưu cả nội dung văn bản kèm mã XML định dạng phông, cỡ chữ, bảng biểu, lề trang nên dung lượng lớn hơn tệp .txt."
  },
  {
    "id": "b03-q13",
    "q": "Chuẩn gõ tiếng Việt phổ biến nhất hiện nay trên máy tính và điện thoại là chuẩn nào?",
    "options": [
      "Bộ mã Unicode kết hợp kiểu gõ Telex hoặc Vni.",
      "Bộ mã TCVN3 (ABC) kết hợp kiểu gõ tự do không theo quy tắc.",
      "Bộ mã VNI-Windows kết hợp kiểu gõ phím cơ học đơn sắc.",
      "Bộ mã ASCII 7-bit kết hợp kiểu gõ chữ Hán Nôm cổ truyền."
    ],
    "answer": 0,
    "explain": "Hiện nay toàn quốc và thế giới thống nhất sử dụng chuẩn Unicode dựng sẵn cùng kiểu gõ Telex hoặc VNI."
  },
  {
    "id": "b03-q14",
    "q": "Nếu ta mở một văn bản tiếng Việt Unicode bằng một phần mềm chỉ hỗ trợ bảng mã TCVN3 cũ thì hiện tượng gì sẽ xảy ra?",
    "options": [
      "Văn bản bị lỗi phông chữ (hiển thị thành các kí tự lạ không đọc được).",
      "Máy tính sẽ lập tức tự động tắt nguồn và hỏng hoàn toàn ổ đĩa cứng.",
      "Nội dung văn bản tự động biến mất vĩnh viễn không thể khôi phục lại.",
      "Toàn bộ chữ cái tiếng Việt sẽ tự động được dịch sang tiếng Anh chuẩn."
    ],
    "answer": 0,
    "explain": "Hiện tượng 'lỗi phông' (Font conflict) xảy ra khi phần mềm diễn giải mã nhị phân theo bảng mã khác với bảng mã dùng để tạo tệp."
  },
  {
    "id": "b03-q15",
    "q": "Hai chữ cái 'a' và 'A' trong bảng mã ASCII có quan hệ mã số như thế nào?",
    "options": [
      "Chữ 'a' thường có mã là 97, hơn chữ 'A' hoa (mã 65) đúng 32 đơn vị.",
      "Hai chữ cái này dùng chung hoàn toàn một mã số duy nhất là 65.",
      "Chữ 'A' hoa có mã số lớn hơn chữ 'a' thường đúng 100 đơn vị.",
      "Chữ 'a' thường có mã số là số âm, còn chữ 'A' hoa có mã số dương."
    ],
    "answer": 0,
    "explain": "Mã chữ thường = Mã chữ hoa + 32 ('A' = 65 -> 'a' = 65 + 32 = 97). Sự chênh lệch 32 (bit thứ 5) giúp máy tính chuyển đổi hoa/thường cực nhanh."
  },
  {
    "id": "b03-q16",
    "q": "Để chuyển một kí tự chữ in hoa sang in thường trong mã ASCII, ta thực hiện thao tác nào trên mã nhị phân?",
    "options": [
      "Bật bit thứ 5 (tính từ phải sang trái bắt đầu từ 0) từ giá trị 0 thành 1.",
      "Đảo ngược toàn bộ tất cả 8 bit từ 0 thành 1 và từ 1 thành 0.",
      "Cộng thêm đúng 1 đơn vị vào số nhị phân của kí tự ban đầu.",
      "Xóa bỏ hoàn toàn 4 bit đầu tiên bên trái của kí tự đó."
    ],
    "answer": 0,
    "explain": "Vì 32 = 2^5, việc cộng thêm 32 tương đương với việc bật bit có trọng số 2^5 (bit vị trí 5) thành 1."
  }
];
