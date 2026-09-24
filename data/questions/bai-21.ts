import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-21: Câu lệnh lặp while
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b21-q01",
    "q": "Câu lệnh lặp while trong ngôn ngữ lập trình Python được sử dụng trong trường hợp nào sau đây?",
    "options": [
      "Lặp với số lần chưa biết trước, khối lệnh tiếp tục được thực hiện chừng nào điều kiện còn đúng.",
      "Lặp với số lần đã biết trước một cách chính xác dựa trên độ dài của mảng phần tử.",
      "Chỉ dùng để rẽ nhánh chương trình thành hai ngã rẽ độc lập khi xuất hiện ngoại lệ.",
      "Chỉ dùng để định nghĩa các hằng số toán học không bao giờ thay đổi giá trị trong bộ nhớ."
    ],
    "answer": 0,
    "explain": "Vòng lặp while dùng cho cấu trúc lặp với số lần chưa biết trước, lặp khi điều kiện còn True."
  },
  {
    "id": "b21-q02",
    "q": "Cú pháp chuẩn của câu lệnh lặp while trong Python được biểu diễn như thế nào?",
    "options": [
      "while <điều kiện>: theo sau là khối lệnh con được thụt lề đồng nhất vào bên trong.",
      "do { khối lệnh thực thi } while (<điều kiện>); kết thúc bằng dấu chấm phẩy tĩnh.",
      "while (<điều kiện>) do khối lệnh bắt đầu bằng từ khóa begin và kết thúc bằng end.",
      "repeat khối lệnh thực thi until <điều kiện> đặt ở vị trí sau cùng của vòng lặp."
    ],
    "answer": 0,
    "explain": "Cú pháp while trong Python: while <điều kiện>:\n    <khối lệnh>"
  },
  {
    "id": "b21-q03",
    "q": "Trong quá trình thực thi của vòng lặp while, điều kiện lặp được kiểm tra vào thời điểm nào?",
    "options": [
      "Được kiểm tra trước khi thực hiện khối lệnh bên trong thân vòng lặp ở mỗi lần lặp.",
      "Chỉ được kiểm tra sau khi khối lệnh bên trong thân vòng lặp đã thực hiện xong ít nhất một lần.",
      "Chỉ được kiểm tra một lần duy nhất lúc khởi tạo chương trình trước khi biên dịch mã.",
      "Được kiểm tra ngẫu nhiên do hệ điều hành quyết định dựa trên mức sử dụng chip xử lý CPU."
    ],
    "answer": 0,
    "explain": "while kiểm tra điều kiện trước (tiền kiểm tra), nếu True mới chạy thân lặp, False thì dừng."
  },
  {
    "id": "b21-q04",
    "q": "Nếu ngay từ lần kiểm tra đầu tiên mà điều kiện của vòng lặp while đã nhận giá trị False, thì điều gì sẽ xảy ra?",
    "options": [
      "Khối lệnh bên trong thân vòng lặp while sẽ hoàn toàn không được thực hiện lần nào.",
      "Khối lệnh bên trong thân vòng lặp vẫn bắt buộc phải được thực hiện đúng một lần.",
      "Chương trình bị rơi vào trạng thái treo máy và dừng lại do lỗi không xác định.",
      "Hệ thống thông báo lỗi ngữ pháp SyntaxError và yêu cầu người dùng sửa lại điều kiện."
    ],
    "answer": 0,
    "explain": "Nếu điều kiện False ngay từ đầu, thân lặp while không được thực hiện lần nào (0 lần)."
  },
  {
    "id": "b21-q05",
    "q": "Hiện tượng vòng lặp vô hạn (vòng lặp vô tận) trong lập trình xảy ra do nguyên nhân chủ yếu nào sau đây?",
    "options": [
      "Điều kiện lặp luôn luôn nhận giá trị True và không bao giờ chuyển sang giá trị False.",
      "Người lập trình sử dụng quá nhiều biến toàn cục bên trong thân của vòng lặp while.",
      "Khối lệnh bên trong thân vòng lặp có chứa các phép toán chia cho số thực quá nhỏ.",
      "Hàm print() được gọi liên tục làm bộ đệm xuất ra màn hình của hệ điều hành bị quá tải."
    ],
    "answer": 0,
    "explain": "Vòng lặp vô hạn xảy ra khi điều kiện lặp luôn True (không có thao tác làm thay đổi điều kiện về False)."
  },
  {
    "id": "b21-q06",
    "q": "Xem xét đoạn chương trình sau:\ni = 1\nwhile i <= 5:\n    print(i, end=' ')\n    i = i + 2\nKết quả in ra trên màn hình là gì?",
    "options": [
      "Dãy số: 1 3 5 hiển thị trên cùng một dòng cách nhau bởi khoảng trắng.",
      "Dãy số: 1 2 3 4 5 hiển thị trên cùng một dòng cách nhau bởi khoảng trắng.",
      "Dãy số: 1 3 5 7 hiển thị trên cùng một dòng cách nhau bởi khoảng trắng.",
      "Chương trình bị lặp vô tận vì biến đếm i không bao giờ vượt qua được giá trị 5."
    ],
    "answer": 0,
    "explain": "i ban đầu = 1 in 1 -> i = 3 in 3 -> i = 5 in 5 -> i = 7 thoát vòng lặp. In '1 3 5 '."
  },
  {
    "id": "b21-q07",
    "q": "Nếu người lập trình vô tình quên dòng lệnh 'i = i + 1' trong một vòng lặp while i < 10, điều gì sẽ xảy ra?",
    "options": [
      "Chương trình sẽ rơi vào vòng lặp vô hạn vì giá trị của biến i không bao giờ thay đổi.",
      "Python sẽ tự động tăng giá trị của biến i lên 1 sau mỗi lần lặp như vòng lặp for.",
      "Chương trình sẽ báo lỗi biến chưa được tăng và dừng lại ngay ở lần lặp đầu tiên.",
      "Biến i sẽ tự động nhận giá trị ngẫu nhiên do hệ điều hành cấp phát trong bộ nhớ RAM."
    ],
    "answer": 0,
    "explain": "Nếu không cập nhật biến đếm i, i luôn nhỏ hơn 10 dẫn đến vòng lặp vô tận."
  },
  {
    "id": "b21-q08",
    "q": "Câu lệnh break khi được đặt bên trong thân vòng lặp while có chức năng gì?",
    "options": [
      "Thoát ngay lập tức khỏi vòng lặp while hiện tại bất kể điều kiện lặp còn đúng hay không.",
      "Bỏ qua các lệnh còn lại của lần lặp này và chuyển ngay sang lần lặp kế tiếp.",
      "Tạm dừng chương trình trong một khoảng thời gian được chỉ định bởi hệ điều hành.",
      "Khởi động lại giá trị của các biến trong vòng lặp về trạng thái ban đầu của chúng."
    ],
    "answer": 0,
    "explain": "break lập tức kết thúc và thoát khỏi vòng lặp while chứa nó."
  },
  {
    "id": "b21-q09",
    "q": "Câu lệnh continue trong cấu trúc lặp của Python có tác dụng nào sau đây?",
    "options": [
      "Bỏ qua phần còn lại của thân vòng lặp ở lần hiện tại và nhảy tới kiểm tra điều kiện lần kế tiếp.",
      "Chấm dứt hoàn toàn vòng lặp và chuyển xuống câu lệnh đầu tiên sau khối lệnh while.",
      "Thực hiện lặp lại toàn bộ các câu lệnh trong thân vòng lặp thêm một lần nữa ngay tức khắc.",
      "Tự động sửa chữa các lỗi ngoại lệ phát sinh trong quá trình tính toán của chương trình."
    ],
    "answer": 0,
    "explain": "continue bỏ qua các câu lệnh còn lại của lần lặp hiện tại, chuyển sang lần lặp tiếp theo."
  },
  {
    "id": "b21-q10",
    "q": "Xem xét đoạn mã sau:\nn = 10\nwhile n > 0:\n    n -= 3\nprint(n)\nGiá trị cuối cùng của biến n được in ra màn hình là bao nhiêu?",
    "options": [
      "Giá trị số nguyên -2 thu được khi n giảm từ 1 bớt đi 3 ở lần lặp cuối cùng.",
      "Giá trị số nguyên 1 thu được ở lần kiểm tra điều kiện hợp lệ cuối cùng của n.",
      "Giá trị số nguyên 0 thu được khi thuật toán kết thúc vòng lặp giảm dần đều.",
      "Giá trị số nguyên 4 thu được trước khi n giảm xuống dưới ngưỡng số 0."
    ],
    "answer": 0,
    "explain": "10 -> 7 -> 4 -> 1 (>0 đúng) -> 1 - 3 = -2. Lần sau -2 > 0 là False, dừng. In ra -2."
  },
  {
    "id": "b21-q11",
    "q": "Để viết một vòng lặp yêu cầu người dùng nhập lại mật khẩu liên tục cho đến khi đúng '123456', cấu trúc nào sau đây là chuẩn?",
    "options": [
      "mk = input('Nhập MK: '); while mk != '123456': mk = input('Nhập lại: ') lặp khi mật khẩu còn khác.",
      "mk = input('Nhập MK: '); while mk == '123456': mk = input('Nhập lại: ') lặp khi mật khẩu đã đúng.",
      "for i in range(123456): mk = input('Nhập MK: ') lặp cố định 123456 lần để bắt buộc nhập.",
      "while True: print('Mật khẩu đúng') lặp vô hạn thông báo mà không cần người dùng nhập."
    ],
    "answer": 0,
    "explain": "while mk != '123456' lặp khi người dùng còn nhập sai, dừng khi nhập đúng."
  },
  {
    "id": "b21-q12",
    "q": "Thuật toán Ơ-clit (Euclid) tìm ước chung lớn nhất (UCLN) của hai số nguyên dương a và b dùng vòng lặp while dựa trên phép toán nào?",
    "options": [
      "while b != 0: a, b = b, a % b thực hiện chia lấy dư liên tiếp cho đến khi số dư bằng 0.",
      "while a != b: a = a * b thực hiện nhân liên tiếp hai số cho đến khi tích đạt cực đại.",
      "while a > 0: a = a // b thực hiện chia lấy phần nguyên cho đến khi thương bằng 0.",
      "while b > 0: b = b ** 2 thực hiện bình phương liên tiếp số b cho đến khi tràn bộ nhớ."
    ],
    "answer": 0,
    "explain": "Thuật toán Euclid: trong khi b != 0 thì a, b = b, a % b; khi b = 0 thì UCLN là a."
  },
  {
    "id": "b21-q13",
    "q": "Đoạn mã sau thực hiện công việc gì đối với số nguyên dương n?\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10",
    "options": [
      "Tính tổng tất cả các chữ số của số nguyên dương n bằng cách bóc tách từng chữ số hàng đơn vị.",
      "Đếm số lượng chữ số của số nguyên dương n bằng cách chia liên tiếp cho cơ số 10.",
      "Đảo ngược thứ tự các chữ số của số nguyên dương n để tạo ra số đối xứng trong hệ thập phân.",
      "Tìm chữ số lớn nhất trong các chữ số cấu thành nên số nguyên dương n ban đầu."
    ],
    "answer": 0,
    "explain": "n % 10 lấy chữ số cuối, s += n % 10 cộng dồn, n //= 10 bỏ chữ số cuối. Đây là thuật toán tính tổng các chữ số của n."
  },
  {
    "id": "b21-q14",
    "q": "Xem xét đoạn chương trình sau:\ni = 0\ns = 0\nwhile i < 5:\n    i += 1\n    if i == 3:\n        continue\n    s += i\nprint(s)\nKết quả in ra là:",
    "options": [
      "Giá trị số nguyên 12 do đã bỏ qua việc cộng số 3 vào tổng s nhờ lệnh continue.",
      "Giá trị số nguyên 15 do tính tổng đầy đủ tất cả các số từ 1 đến 5 (1+2+3+4+5).",
      "Giá trị số nguyên 3 do vòng lặp bị dừng đột ngột ngay khi i đạt giá trị bằng 3.",
      "Giá trị số nguyên 6 do chỉ cộng được các số 1 và 2 trước khi gặp câu lệnh rẽ nhánh."
    ],
    "answer": 0,
    "explain": "Các số được cộng: 1 + 2 + 4 + 5 = 12 (khi i = 3 gặp continue nên bỏ qua dòng s += i)."
  },
  {
    "id": "b21-q15",
    "q": "Một tài khoản ngân hàng có số dư ban đầu 10 triệu đồng, lãi suất 7%/năm. Để tính sau bao nhiêu năm số tiền tăng gấp đôi, vòng lặp nào diễn đạt đúng điều kiện?",
    "options": [
      "while tien < 20000000: tien = tien * 1.07; nam += 1 chừng nào tiền chưa đủ gấp đôi thì tiếp tục gửi.",
      "while tien >= 20000000: tien = tien * 1.07; nam += 1 chừng nào tiền đã vượt gấp đôi thì mới gửi.",
      "for nam in range(1, 10): tien = tien * 0.07 cố định thời gian gửi là 10 năm không đổi.",
      "while nam < 7: tien = tien + 10000000 lặp theo số năm bằng đúng lãi suất tiền gửi."
    ],
    "answer": 0,
    "explain": "while tien < 20000000 mô tả chính xác quá trình tích lũy lãi cho đến khi đạt gấp đôi."
  },
  {
    "id": "b21-q16",
    "q": "Phát biểu nào sau đây so sánh chính xác giữa vòng lặp for và vòng lặp while trong Python?",
    "options": [
      "Vòng for thích hợp khi biết trước số lần lặp hoặc duyệt tập hợp; while thích hợp khi lặp theo điều kiện.",
      "Vòng while luôn có tốc độ thực thi nhanh gấp đôi so với vòng lặp for trong mọi bài toán.",
      "Vòng for không thể lồng ghép bên trong vòng while và ngược lại do xung đột cú pháp.",
      "Mọi vòng lặp while đều có thể chuyển thành vòng for với số lần lặp cố định 100 lần."
    ],
    "answer": 0,
    "explain": "for tối ưu cho lặp biết trước số lần/duyệt tập hợp; while tối ưu khi số lần lặp phụ thuộc điều kiện thực tế."
  }
];
