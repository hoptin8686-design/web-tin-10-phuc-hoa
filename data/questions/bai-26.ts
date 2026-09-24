import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-26: Hàm trong Python
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b26-q01",
    "q": "Khái niệm hàm (function) trong ngôn ngữ lập trình được định nghĩa chính xác nhất là gì?",
    "options": [
      "Là một khối lệnh có tên, thực hiện một công việc cụ thể và có thể tái sử dụng nhiều lần.",
      "Là một đại lượng biến đổi lưu trữ các giá trị số thực trong bảng tính điện tử máy tính.",
      "Là tệp tin thực thi độc lập dùng để cài đặt hệ điều hành vào bộ nhớ thứ cấp của máy tính.",
      "Là câu lệnh điều kiện bắt buộc phải có mặt ở đầu tất cả các chương trình nguồn Python."
    ],
    "answer": 0,
    "explain": "Hàm là khối lệnh có tên, thực hiện một nhiệm vụ xác định, có thể tái sử dụng (reusable)."
  },
  {
    "id": "b26-q02",
    "q": "Từ khóa nào trong Python được sử dụng để bắt đầu định nghĩa một hàm mới?",
    "options": [
      "Từ khóa 'def' viết tắt của từ define dùng để khai báo và định nghĩa hàm trong chương trình.",
      "Từ khóa 'function' dùng theo quy ước ngữ pháp quen thuộc của ngôn ngữ JavaScript.",
      "Từ khóa 'procedure' dùng để khai báo các thủ tục chương trình con trong ngôn ngữ Pascal.",
      "Từ khóa 'method' dùng để định nghĩa các phương thức nghiệp vụ của lớp đối tượng."
    ],
    "answer": 0,
    "explain": "Từ khóa `def` được dùng để định nghĩa hàm trong Python."
  },
  {
    "id": "b26-q03",
    "q": "Cú pháp chuẩn để định nghĩa một hàm trong Python được viết theo mẫu nào sau đây?",
    "options": [
      "def <tên_hàm>(<danh_sách_tham_số>): theo sau là khối lệnh con được thụt lề đồng nhất.",
      "function <tên_hàm>(<tham_số>) { khối lệnh thực thi đặt trọn vẹn trong cặp ngoặc nhọn }.",
      "def <tên_hàm>(<tham_số>) begin khối lệnh thực thi kết thúc bằng từ khóa end;",
      "create func <tên_hàm> with <tham_số> return khối lệnh con tương ứng trong máy."
    ],
    "answer": 0,
    "explain": "Cú pháp: `def <tên_hàm>(<tham_số>):\n    <khối_lệnh>`"
  },
  {
    "id": "b26-q04",
    "q": "Lệnh nào sau đây được sử dụng để trả về kết quả từ hàm và chấm dứt ngay việc thực thi hàm?",
    "options": [
      "Lệnh 'return' trả về giá trị của biểu thức đi kèm và thoát ngay khỏi thân hàm hiện tại.",
      "Lệnh 'exit' đóng cửa sổ dòng lệnh và giải phóng toàn bộ tài nguyên của chương trình.",
      "Lệnh 'break' nhảy ra khỏi thân hàm và chuyển quyền điều khiển xuống vòng lặp ngoài cùng.",
      "Lệnh 'yield' chỉ dùng để tạm dừng chương trình và chờ tín hiệu tiếp tục từ bàn phím."
    ],
    "answer": 0,
    "explain": "Lệnh return dùng để trả về giá trị từ hàm và kết thúc việc thực thi hàm ngay lập tức."
  },
  {
    "id": "b26-q05",
    "q": "Nếu một hàm trong Python không chứa câu lệnh return hoặc chỉ viết return đơn thuần thì giá trị trả về mặc định của hàm là gì?",
    "options": [
      "Giá trị đặc biệt None biểu thị không có giá trị trả về cụ thể từ phía hàm đó.",
      "Giá trị số nguyên 0 theo quy ước mã lỗi trả về tiêu chuẩn của các hệ thống máy tính.",
      "Giá trị logic False biểu thị hàm đã chạy kết thúc nhưng không có kết quả hợp lệ.",
      "Chương trình báo lỗi ngữ pháp SyntaxError vì bắt buộc tất cả các hàm phải có return."
    ],
    "answer": 0,
    "explain": "Hàm không có return hoặc chỉ gọi return sẽ mặc định trả về giá trị None."
  },
  {
    "id": "b26-q06",
    "q": "Hàm có sẵn (built-in functions) trong Python là các hàm có đặc điểm nào sau đây?",
    "options": [
      "Được tích hợp sẵn trong nhân Python, người lập trình có thể gọi sử dụng ngay mà không cần định nghĩa.",
      "Do người lập trình tự viết mã nguồn trong từng dự án cụ thể để giải quyết bài toán riêng.",
      "Bắt buộc phải tải về từ các kho thư viện trực tuyến bên ngoài Internet trước khi dùng.",
      "Chỉ chạy được trên môi trường máy chủ đám mây mà không hỗ trợ máy tính cá nhân."
    ],
    "answer": 0,
    "explain": "Built-in functions là hàm có sẵn trong Python (print, input, len, sum, min, max...) dùng được ngay."
  },
  {
    "id": "b26-q07",
    "q": "Trong các hàm sau đây, hàm nào KHÔNG phải là hàm có sẵn (built-in) trực tiếp của Python?",
    "options": [
      "Hàm sqrt() tính căn bậc hai (hàm này nằm trong thư viện math và bắt buộc phải import trước).",
      "Hàm len() dùng để tính số lượng phần tử của danh sách hoặc độ dài xâu kí tự văn bản.",
      "Hàm print() dùng để xuất thông điệp và giá trị các biến ra màn hình thiết bị chuẩn.",
      "Hàm input() dùng để nhập thông tin và xâu văn bản trực tiếp từ bàn phím người dùng."
    ],
    "answer": 0,
    "explain": "sqrt() thuộc module math (cần `import math` hoặc `from math import sqrt`), không phải built-in trực tiếp."
  },
  {
    "id": "b26-q08",
    "q": "Lợi ích nổi bật nhất của việc chia chương trình lớn thành các hàm con nhỏ (thiết kế theo mô-đun) là gì?",
    "options": [
      "Giúp chương trình có cấu trúc rõ ràng, dễ hiểu, dễ gỡ lỗi và tái sử dụng mã nguồn hiệu quả.",
      "Làm tăng dung lượng tệp mã nguồn lên gấp nhiều lần để đáp ứng tiêu chuẩn lưu trữ dự án.",
      "Giúp chương trình tự động chạy nhanh hơn tốc độ xung nhịp phần cứng của vi xử lý CPU.",
      "Loại bỏ hoàn toàn sự cần thiết phải kiểm thử phần mềm trước khi phát hành cho khách hàng."
    ],
    "answer": 0,
    "explain": "Hàm giúp cấu trúc hóa chương trình, tránh trùng lặp mã, dễ đọc, dễ kiểm thử và tái sử dụng."
  },
  {
    "id": "b26-q09",
    "q": "Xem xét đoạn chương trình sau:\ndef chao(ten):\n    return 'Xin chao ' + ten\nmsg = chao('Nam')\nprint(msg)\nKết quả in ra là:",
    "options": [
      "In ra xâu thông báo 'Xin chao Nam' trên màn hình dòng lệnh sau khi gọi hàm chao.",
      "In ra xâu 'Xin chao ten' vì hàm không nhận biết được đối số truyền vào khi gọi.",
      "Chương trình báo lỗi vì hàm chao không có lệnh print trực tiếp bên trong thân hàm.",
      "In ra giá trị None do xâu trả về không được lưu trữ vào bộ nhớ đệm của hệ thống."
    ],
    "answer": 0,
    "explain": "chao('Nam') trả về 'Xin chao Nam', gán vào msg và in ra 'Xin chao Nam'."
  },
  {
    "id": "b26-q10",
    "q": "Xem xét đoạn mã sau:\ndef tinh_tong(a, b):\n    s = a + b\nket_qua = tinh_tong(3, 4)\nprint(ket_qua)\nKết quả in ra màn hình là gì?",
    "options": [
      "Giá trị None vì hàm tinh_tong không có câu lệnh return để trả giá trị ra bên ngoài.",
      "Giá trị số nguyên 7 vì Python tự động trả về giá trị của biểu thức cuối cùng trong hàm.",
      "Báo lỗi biến ket_qua chưa được định nghĩa do hàm không thực hiện phép tính toán.",
      "In ra xâu '3 + 4' biểu diễn công thức tính toán số học chưa được lượng giá."
    ],
    "answer": 0,
    "explain": "Hàm tính s = a + b nhưng không có lệnh return s, do đó hàm trả về None mặc định."
  },
  {
    "id": "b26-q11",
    "q": "Một hàm trong Python có thể chứa bao nhiêu câu lệnh return bên trong thân hàm?",
    "options": [
      "Có thể có nhiều câu lệnh return ở các nhánh điều kiện khác nhau, nhưng chỉ có một lệnh được thực thi.",
      "Bắt buộc phải có duy nhất một câu lệnh return đặt ở dòng cuối cùng của thân hàm.",
      "Tối đa là hai câu lệnh return tương ứng với hai nhánh đúng sai của câu lệnh điều kiện.",
      "Không được phép dùng câu lệnh return nếu hàm đã có các tham số truyền vào từ ngoài."
    ],
    "answer": 0,
    "explain": "Hàm có thể có nhiều return (ví dụ trong if-else), khi gặp return nào thỏa mãn thì hàm kết thúc ngay."
  },
  {
    "id": "b26-q12",
    "q": "Đoạn hàm sau thực hiện chức năng tính toán nào?\ndef f(a, b):\n    if a > b:\n        return a\n    return b",
    "options": [
      "Tìm và trả về giá trị lớn nhất (GTLN) trong hai số a và b được truyền vào hàm.",
      "Tìm và trả về giá trị nhỏ nhất (GTNN) trong hai số a và b được truyền vào hàm.",
      "Tính hiệu số giữa số lớn và số bé trong hai tham số được người dùng cung cấp.",
      "Kiểm tra xem hai số a và b có bằng nhau hay không rồi trả về kết quả đúng sai."
    ],
    "answer": 0,
    "explain": "Nếu a > b trả về a, ngược lại trả về b. Đây là hàm tìm max của hai số."
  },
  {
    "id": "b26-q13",
    "q": "Điều gì xảy ra với các câu lệnh được viết bên dưới lệnh return trong cùng một khối lệnh của thân hàm?",
    "options": [
      "Các câu lệnh đó sẽ không bao giờ được thực thi vì lệnh return đã kết thúc hàm ngay lập tức.",
      "Các câu lệnh đó vẫn được thực thi bình thường trước khi hàm đóng vùng nhớ trả lời.",
      "Chương trình tự động báo lỗi SyntaxError vì không cho phép viết lệnh sau từ khóa return.",
      "Các câu lệnh đó sẽ được lưu trữ vào bộ nhớ tạm để thực thi trong lần gọi hàm tiếp theo."
    ],
    "answer": 0,
    "explain": "Lệnh return lập tức kết thúc hàm, các câu lệnh phía sau nó trong cùng luồng sẽ không được chạy."
  },
  {
    "id": "b26-q14",
    "q": "Để tính giá trị tuyệt đối của một số x trong Python mà không cần tự viết hàm, ta dùng hàm built-in nào?",
    "options": [
      "Hàm abs(x) trả về giá trị tuyệt đối không âm của đại lượng số thực hoặc số nguyên x.",
      "Hàm fabs(x) nằm sẵn trong nhân Python mà không cần phải gọi qua thư viện chuyên biệt.",
      "Hàm absolute(x) gọi từ lớp số học cơ bản của môi trường dòng lệnh tương tác IDLE.",
      "Hàm val_pos(x) chuyển đổi số âm thành số dương theo chuẩn bù hai trong vi mạch."
    ],
    "answer": 0,
    "explain": "abs(x) là hàm built-in trả về giá trị tuyệt đối của x."
  },
  {
    "id": "b26-q15",
    "q": "Một hàm tự định nghĩa có thể gọi đến một hàm khác hoặc gọi lại chính nó hay không?",
    "options": [
      "Hoàn toàn được phép; việc gọi lại chính nó được gọi là kĩ thuật đệ quy (recursion).",
      "Không được phép vì trình thông dịch Python sẽ bị xung đột địa chỉ vùng nhớ ngăn xếp.",
      "Chỉ được gọi các hàm có sẵn chứ tuyệt đối không được gọi các hàm do người dùng tự tạo.",
      "Chỉ được gọi tối đa 2 lần lồng nhau để đảm bảo an toàn bộ nhớ RAM của thiết bị."
    ],
    "answer": 0,
    "explain": "Hàm có thể gọi hàm khác hoặc gọi chính nó (đệ quy - recursion)."
  },
  {
    "id": "b26-q16",
    "q": "Khi gọi một hàm mà truyền thiếu hoặc thừa số lượng đối số so với định nghĩa gốc (không có giá trị mặc định), lỗi nào xuất hiện?",
    "options": [
      "Lỗi ngoại lệ TypeError: missing required positional argument (hoặc takes X positional arguments).",
      "Lỗi ngoại lệ ValueError: invalid arguments count thông báo số lượng tham số không hợp lệ.",
      "Lỗi ngoại lệ NameError: argument name is not defined thông báo tên đối số chưa được định nghĩa.",
      "Chương trình tự động điền các giá trị 0 hoặc None vào các đối số bị thiếu mà không báo lỗi."
    ],
    "answer": 0,
    "explain": "Truyền sai số lượng đối số vị trí gây lỗi TypeError."
  }
];
