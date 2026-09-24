import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-16: Ngôn ngữ lập trình bậc cao và Python

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b16-tf01",
      "context": "Trong giờ thực hành làm quen với Python, bạn An mở môi trường IDLE trên máy tính của phòng thực hành và thử nghiệm cả hai chế độ làm việc:",
      "statements": [
        {
          "text": "Tại dấu nhắc >>> trong cửa sổ Shell, bạn An gõ 25 + 75 và nhấn Enter thì màn hình hiển thị ngay kết quả 100 mà không cần dùng lệnh print.",
          "answer": true,
          "explain": "Đúng. Trong chế độ tương tác, Python tự động in giá trị của biểu thức vừa tính toán."
        },
        {
          "text": "Để lưu một đoạn mã gồm nhiều lệnh phức tạp để sử dụng lâu dài, bạn An nên chọn chế độ soạn thảo (Script mode) rồi lưu tệp với đuôi .py.",
          "answer": true,
          "explain": "Đúng. Chế độ soạn thảo giúp lưu trữ và chỉnh sửa chương trình dưới dạng tệp văn bản mã nguồn."
        },
        {
          "text": "Khi chạy chương trình trong chế độ soạn thảo, nếu dòng đầu tiên có lỗi cú pháp thì Python vẫn thực hiện bình thường các dòng tiếp theo.",
          "answer": false,
          "explain": "Sai. Khi gặp lỗi cú pháp, Python sẽ dừng thực thi ngay lập tức và đưa ra thông báo lỗi."
        },
        {
          "text": "Phím tắt chuẩn trong IDLE để lưu và chạy nhanh tệp mã nguồn đang soạn thảo là phím F5.",
          "answer": true,
          "explain": "Đúng. Phím F5 (Run Module) được dùng để chạy chương trình Python từ cửa sổ soạn thảo."
        }
      ]
    },
    {
      "id": "b16-tf02",
      "context": "Một nhóm học sinh tìm hiểu về lịch sử và các đặc điểm kiến trúc của ngôn ngữ lập trình Python trong chương trình Tin học 10:",
      "statements": [
        {
          "text": "Python là ngôn ngữ lập trình bậc cao có tính độc lập phần cứng rất cao, chạy được trên nhiều hệ điều hành như Windows, macOS và Linux.",
          "answer": true,
          "explain": "Đúng. Python là ngôn ngữ đa nền tảng và không phụ thuộc vào kiến trúc phần cứng cụ thể."
        },
        {
          "text": "Python sử dụng trình biên dịch (compiler) để dịch toàn bộ tệp nguồn thành mã máy nhị phân tĩnh trước khi có thể chạy chương trình.",
          "answer": false,
          "explain": "Sai. Python là ngôn ngữ thông dịch (interpreter), dịch và thực hiện từng lệnh tuần tự."
        },
        {
          "text": "Cú pháp của Python rất trong sáng, dễ đọc và loại bỏ nhiều quy tắc rườm rà như khai báo biến ban đầu hay dấu chấm phẩy cuối lệnh.",
          "answer": true,
          "explain": "Đúng. Đây là một trong những ưu điểm lớn nhất giúp Python thân thiện với người mới bắt đầu."
        },
        {
          "text": "Python chỉ có thể ứng dụng trong giảng dạy lý thuyết chứ không thể dùng để phát triển các ứng dụng thương mại hay trí tuệ nhân tạo.",
          "answer": false,
          "explain": "Sai. Python là ngôn ngữ hàng đầu trong khoa học dữ liệu, AI, phát triển web và tự động hóa."
        }
      ]
    },
    {
      "id": "b16-tf03",
      "context": "Xem xét đoạn lệnh và biểu thức số học sau được thực hiện liên tiếp trong cửa sổ dòng lệnh Python:\nx = 17\ny = 5\nz = x % y + x // y",
      "statements": [
        {
          "text": "Giá trị của x % y sau khi thực hiện là 2 vì 17 chia 5 được 3 dư 2.",
          "answer": true,
          "explain": "Đúng. Toán tử % trả về phần dư: 17 % 5 = 2."
        },
        {
          "text": "Giá trị của x // y sau khi thực hiện là 3.4 do kết quả được giữ nguyên dạng số thập phân.",
          "answer": false,
          "explain": "Sai. Toán tử // lấy phần nguyên bỏ phần thập phân, do đó 17 // 5 = 3 (kiểu int)."
        },
        {
          "text": "Biến z sau khi tính toán sẽ lưu giá trị số nguyên bằng 5.",
          "answer": true,
          "explain": "Đúng. z = 2 + 3 = 5."
        },
        {
          "text": "Nếu thay phép gán biến z thành z = x / y thì biến z sẽ có kiểu số thực float với giá trị 3.4.",
          "answer": true,
          "explain": "Đúng. Phép chia / luôn trả về kiểu float: 17 / 5 = 3.4."
        }
      ]
    },
    {
      "id": "b16-tf04",
      "context": "Giáo viên yêu cầu học sinh viết các câu lệnh Python đơn giản để xuất thông tin ra màn hình và giải thích các quy tắc cú pháp cơ bản:",
      "statements": [
        {
          "text": "Lệnh print('Xin chào', 'Việt Nam') sẽ in hai từ cách nhau bởi một khoảng trắng mặc định trên cùng một dòng.",
          "answer": true,
          "explain": "Đúng. Hàm print() phân tách các đối số bằng dấu khoảng cách mặc định."
        },
        {
          "text": "Trong Python, tên hàm print có thể viết hoa thành Print() hoặc PRINT() mà trình thông dịch vẫn hiểu và chạy bình thường.",
          "answer": false,
          "explain": "Sai. Python là ngôn ngữ phân biệt chữ hoa chữ thường (case-sensitive), chỉ có print viết thường mới hợp lệ."
        },
        {
          "text": "Dòng chú thích bắt đầu bằng kí hiệu # không ảnh hưởng đến tốc độ thực thi hay kết quả tính toán của chương trình.",
          "answer": true,
          "explain": "Đúng. Trình thông dịch hoàn toàn bỏ qua các dòng chú thích khi thực thi."
        },
        {
          "text": "Chuỗi kí tự trong Python có thể được đặt trong cặp dấu nháy đơn '...' hoặc cặp dấu nháy kép \"...\" đều mang ý nghĩa tương đương.",
          "answer": true,
          "explain": "Đúng. Python cho phép sử dụng linh hoạt cả nháy đơn và nháy kép để bao quanh xâu kí tự."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b16-es01",
      "q": "Ngôn ngữ lập trình bậc cao là gì? Trình bày ít nhất ba ưu điểm nổi bật của ngôn ngữ Python so với các ngôn ngữ lập trình truyền thống như Hợp ngữ hay Pascal.",
      "answer": "1. Khái niệm ngôn ngữ lập trình bậc cao:\n- Là ngôn ngữ lập trình có cú pháp gần gũi với ngôn ngữ tự nhiên (tiếng Anh) và cách diễn đạt toán học của con người.\n- Có tính độc lập cao với phần cứng, một chương trình viết bằng ngôn ngữ bậc cao có thể chạy trên nhiều loại máy tính khác nhau mà không cần viết lại mã cho từng chip vi xử lý.\n\n2. Ba ưu điểm nổi bật của ngôn ngữ Python:\n- Cú pháp trong sáng, ngắn gọn và dễ học: Python loại bỏ các cú pháp rườm rà như dấu chấm phẩy, cặp từ khóa begin-end, giúp người lập trình tập trung vào tư duy giải thuật.\n- Ngôn ngữ mã nguồn mở và miễn phí: Bất kỳ ai cũng có thể tự do tải về, sử dụng và đóng góp phát triển hệ sinh thái Python.\n- Hệ thống thư viện khổng lồ và đa dạng: Hỗ trợ mạnh mẽ từ xử lý toán học, đồ họa, thiết kế web đến trí tuệ nhân tạo (AI), học máy (Machine Learning) và phân tích dữ liệu lớn."
    },
    {
      "id": "b16-es02",
      "q": "Phân biệt chế độ tương tác (Interactive Mode) và chế độ soạn thảo (Script Mode) trong môi trường Python IDLE. Trong trường hợp nào thì nên sử dụng mỗi chế độ?",
      "answer": "1. Chế độ tương tác (Interactive Mode):\n- Đặc điểm: Làm việc trực tiếp tại dấu nhắc >>> trong cửa sổ Python Shell. Người dùng gõ từng câu lệnh, nhấn Enter thì Python sẽ biên dịch và thực thi tức thì kết quả trên màn hình.\n- Ưu điểm: Phản hồi nhanh, trực quan, không cần tạo tệp.\n- Nhược điểm: Lệnh đã gõ không được lưu lại thành tệp độc lập, khó chỉnh sửa khối lệnh phức tạp.\n- Trường hợp áp dụng: Kiểm tra nhanh kết quả biểu thức, thử nghiệm các hàm mới, tính toán như máy tính cầm tay.\n\n2. Chế độ soạn thảo (Script Mode):\n- Đặc điểm: Viết toàn bộ chương trình trong một cửa sổ soạn thảo riêng biệt (New File), lưu lại thành tệp mã nguồn với phần mở rộng .py, sau đó nhấn F5 để chạy toàn bộ chương trình.\n- Ưu điểm: Lưu trữ vĩnh viễn trên đĩa, dễ dàng chỉnh sửa, mở rộng và chia sẻ mã nguồn.\n- Trường hợp áp dụng: Xây dựng các bài toán hoàn chỉnh, phần mềm nhiều chức năng và các dự án thực tế."
    }
  ]
};
