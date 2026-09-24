import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-22: Kiểu dữ liệu danh sách
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b22-q01",
    "q": "Kiểu dữ liệu danh sách (list) trong ngôn ngữ lập trình Python được định nghĩa chính xác nhất là gì?",
    "options": [
      "Tập hợp các phần tử có thứ tự, có thể thay đổi giá trị và được đặt trong cặp ngoặc vuông [].",
      "Tập hợp các phần tử không có thứ tự, không thể thay đổi giá trị và đặt trong cặp ngoặc nhọn {}.",
      "Cấu trúc dữ liệu cố định kích thước chỉ lưu trữ duy nhất các số nguyên trong cặp ngoặc tròn ().",
      "Bảng các giá trị logic chỉ cho phép nhận hai trạng thái chân lý True hoặc False tuần tự."
    ],
    "answer": 0,
    "explain": "List trong Python là tập hợp có thứ tự, có thể thay đổi (mutable), các phần tử đặt trong cặp ngoặc vuông []."
  },
  {
    "id": "b22-q02",
    "q": "Phát biểu nào sau đây đúng về các kiểu dữ liệu của các phần tử bên trong cùng một danh sách Python?",
    "options": [
      "Các phần tử trong danh sách có thể mang các kiểu dữ liệu hoàn toàn khác nhau cùng lúc.",
      "Tất cả các phần tử bắt buộc phải có cùng một kiểu dữ liệu duy nhất đồng nhất với nhau.",
      "Danh sách chỉ có thể chứa số nguyên hoặc số thực chứ không bao giờ chứa được chuỗi kí tự.",
      "Mỗi danh sách chỉ được phép lưu tối đa 10 phần tử dữ liệu để tránh tràn bộ nhớ tạm thời."
    ],
    "answer": 0,
    "explain": "List trong Python không đồng nhất kiểu (heterogeneous), có thể chứa int, float, str, bool, list khác..."
  },
  {
    "id": "b22-q03",
    "q": "Cú pháp nào sau đây dùng để khởi tạo một danh sách rỗng (không chứa phần tử nào) trong Python?",
    "options": [
      "a = [] hoặc sử dụng hàm khởi tạo a = list() để tạo một danh sách rỗng mới hoàn toàn.",
      "a = {} để tạo một danh sách rỗng mới hoàn toàn trong bộ nhớ của chương trình nguồn.",
      "a = () để tạo một danh sách rỗng mới hoàn toàn tương thích với các phép toán mảng.",
      "a = [None, 0] để tạo một danh sách rỗng chứa các phần tử mặc định ban đầu của máy."
    ],
    "answer": 0,
    "explain": "a = [] hoặc a = list() tạo danh sách rỗng. {} tạo dict rỗng, () tạo tuple rỗng."
  },
  {
    "id": "b22-q04",
    "q": "Quy tắc đánh chỉ số (index) dương cho các phần tử trong danh sách của Python bắt đầu từ số nào?",
    "options": [
      "Bắt đầu từ chỉ số 0 cho phần tử đầu tiên và tăng dần lên theo chiều từ trái qua phải.",
      "Bắt đầu từ chỉ số 1 cho phần tử đầu tiên tương ứng với số thứ tự tự nhiên của con người.",
      "Bắt đầu từ chỉ số -1 cho phần tử đầu tiên và giảm dần về phía cuối của danh sách.",
      "Bắt đầu từ địa chỉ ô nhớ nhị phân do vi xử lý máy tính cấp phát ngẫu nhiên khi chạy."
    ],
    "answer": 0,
    "explain": "Chỉ số dương trong Python bắt đầu từ 0 cho phần tử đầu tiên bên trái."
  },
  {
    "id": "b22-q05",
    "q": "Chỉ số âm trong danh sách Python có ý nghĩa truy cập các phần tử theo chiều nào?",
    "options": [
      "Truy cập ngược từ cuối danh sách về đầu, với chỉ số -1 là phần tử cuối cùng của danh sách.",
      "Báo hiệu phần tử đó mang giá trị số âm và không thể tham gia vào các phép tính toán.",
      "Tự động xóa phần tử có chỉ số âm ra khỏi danh sách ngay khi được gọi đến trong mã.",
      "Đảo ngược toàn bộ các phần tử trong danh sách thành thứ tự ngẫu nhiên của hệ thống."
    ],
    "answer": 0,
    "explain": "Chỉ số âm đếm ngược từ phải sang trái: a[-1] là phần tử cuối cùng, a[-2] là áp chót."
  },
  {
    "id": "b22-q06",
    "q": "Để xác định số lượng phần tử (độ dài) hiện có của một danh sách a, ta sử dụng hàm chuẩn nào?",
    "options": [
      "Hàm len(a) trả về một số nguyên biểu thị chính xác số phần tử có trong danh sách a.",
      "Hàm size(a) trả về một số nguyên biểu thị chính xác số phần tử có trong danh sách a.",
      "Hàm count(a) trả về một số nguyên biểu thị chính xác số phần tử có trong danh sách a.",
      "Hàm length(a) trả về một số nguyên biểu thị chính xác số phần tử có trong danh sách a."
    ],
    "answer": 0,
    "explain": "Hàm len(a) trả về số lượng phần tử của danh sách a."
  },
  {
    "id": "b22-q07",
    "q": "Cho danh sách a = [10, 20, 30, 40, 50]. Giá trị của biểu thức a[2] là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 30 vì phần tử mang chỉ số 2 là phần tử nằm ở vị trí thứ ba trong danh sách.",
      "Giá trị số nguyên 20 vì chỉ số 2 tương ứng với vị trí thứ hai tính từ đầu danh sách.",
      "Giá trị số nguyên 40 vì hệ thống tự động bù trừ chỉ số để bỏ qua phần tử đầu tiên.",
      "Chương trình báo lỗi IndexError vì danh sách chỉ có tối đa 4 chỉ số phần tử hợp lệ."
    ],
    "answer": 0,
    "explain": "a[0]=10, a[1]=20, a[2]=30."
  },
  {
    "id": "b22-q08",
    "q": "Cho danh sách a = ['Hà Nội', 'Đà Nẵng', 'Huế', 'TP HCM']. Biểu thức a[-1] trả về giá trị gì?",
    "options": [
      "Xâu 'TP HCM' vì -1 là chỉ số truy cập phần tử cuối cùng của danh sách từ phía bên phải.",
      "Xâu 'Hà Nội' vì -1 là chỉ số truy cập phần tử đầu tiên tính theo chiều kim đồng hồ.",
      "Xâu 'Huế' vì -1 tự động bỏ qua phần tử cuối cùng để lấy phần tử áp chót phía trước.",
      "Chương trình xuất hiện lỗi vì chỉ số của danh sách trong Python bắt buộc phải là số dương."
    ],
    "answer": 0,
    "explain": "a[-1] là phần tử cuối cùng của danh sách, tức 'TP HCM'."
  },
  {
    "id": "b22-q09",
    "q": "Khi cố tình truy cập vào một chỉ số vượt quá phạm vi của danh sách (ví dụ a[10] khi len(a) = 5), lỗi nào xuất hiện?",
    "options": [
      "Lỗi ngoại lệ IndexError: list index out of range thông báo chỉ số vượt ngoài phạm vi.",
      "Lỗi ngoại lệ ValueError: invalid value thông báo giá trị phần tử không hợp lệ trong mảng.",
      "Lỗi ngoại lệ TypeError: unsupported index type thông báo kiểu chỉ số không được hỗ trợ.",
      "Chương trình tự động mở rộng kích thước danh sách và chèn giá trị rỗng None vào vị trí 10."
    ],
    "answer": 0,
    "explain": "Truy cập chỉ số ngoài dải [-len, len-1] sẽ gây lỗi IndexError: list index out of range."
  },
  {
    "id": "b22-q10",
    "q": "Cho danh sách a = [1, 2, 3]. Sau khi thực hiện lệnh a[1] = 99, giá trị của danh sách a sẽ là:",
    "options": [
      "Danh sách [1, 99, 3] do phần tử tại chỉ số 1 đã bị ghi đè giá trị mới một cách trực tiếp.",
      "Danh sách [99, 2, 3] do hệ thống tự động gán giá trị mới vào vị trí đầu tiên của danh sách.",
      "Danh sách [1, 2, 99] do vị trí 1 tính theo chiều ngược lại từ cuối danh sách về đầu.",
      "Chương trình báo lỗi vì các phần tử trong danh sách Python có tính bất biến không sửa được."
    ],
    "answer": 0,
    "explain": "Danh sách là kiểu dữ liệu có thể thay đổi (mutable), a[1] = 99 cập nhật phần tử chỉ số 1 thành 99."
  },
  {
    "id": "b22-q11",
    "q": "Cách viết nào sau đây giúp duyệt qua từng phần tử của danh sách a = [5, 8, 2] mà không cần dùng chỉ số?",
    "options": [
      "for x in a: theo sau là lệnh xử lý trực tiếp giá trị của từng phần tử x trong danh sách.",
      "for i in range(len(a)): theo sau là lệnh truy cập phần tử thông qua cú pháp a[i].",
      "while a != []: theo sau là lệnh lấy phần tử ra khỏi danh sách để xử lý tuần tự.",
      "foreach (x of a): theo sau là khối lệnh xử lý các phần tử được bao trong ngoặc nhọn."
    ],
    "answer": 0,
    "explain": "Cú pháp `for x in a:` duyệt trực tiếp các giá trị phần tử trong danh sách a một cách tự nhiên nhất."
  },
  {
    "id": "b22-q12",
    "q": "Xem xét đoạn chương trình sau:\na = [2, 4, 6, 8]\ns = 0\nfor x in a:\n    s += x\nprint(s)\nKết quả in ra là:",
    "options": [
      "Giá trị số nguyên 20 tương ứng với tổng giá trị của tất cả các phần tử (2 + 4 + 6 + 8).",
      "Giá trị số nguyên 4 tương ứng với số lượng các phần tử hiện có trong danh sách a.",
      "Giá trị số nguyên 8 tương ứng với giá trị của phần tử lớn nhất trong danh sách số.",
      "Chương trình báo lỗi vì biến s không thể cộng dồn trực tiếp với phần tử danh sách."
    ],
    "answer": 0,
    "explain": "s = 2 + 4 + 6 + 8 = 20."
  },
  {
    "id": "b22-q13",
    "q": "Để duyệt danh sách a thông qua chỉ số vị trí i từ 0 đến len(a) - 1, câu lệnh for nào được viết đúng?",
    "options": [
      "for i in range(len(a)): giúp biến i lần lượt nhận các chỉ số từ 0 đến phần tử cuối cùng.",
      "for i in range(len(a) + 1): giúp biến i lần lượt nhận các chỉ số từ 0 đến phần tử cuối cùng.",
      "for i in range(1, len(a)): giúp biến i lần lượt nhận các chỉ số từ 0 đến phần tử cuối cùng.",
      "for i in len(a): giúp biến i tự động nhận các chỉ số của danh sách mà không cần hàm range."
    ],
    "answer": 0,
    "explain": "range(len(a)) sinh dãy chỉ số từ 0 đến len(a)-1, hoàn toàn khớp với chỉ số của danh sách."
  },
  {
    "id": "b22-q14",
    "q": "Cho danh sách lồng nhau (ma trận) M = [[1, 2], [3, 4], [5, 6]]. Biểu thức M[1][0] trả về giá trị gì?",
    "options": [
      "Giá trị số nguyên 3 là phần tử đầu tiên của danh sách con thứ hai nằm ở hàng có chỉ số 1.",
      "Giá trị số nguyên 1 là phần tử đầu tiên của danh sách con thứ nhất nằm ở hàng chỉ số 0.",
      "Giá trị số nguyên 4 là phần tử thứ hai của danh sách con thứ hai nằm ở hàng có chỉ số 1.",
      "Giá trị số nguyên 2 là phần tử thứ hai của danh sách con thứ nhất nằm ở hàng chỉ số 0."
    ],
    "answer": 0,
    "explain": "M[1] là [3, 4], do đó M[1][0] là 3."
  },
  {
    "id": "b22-q15",
    "q": "Một danh sách lưu điểm kiểm tra của 4 học sinh: diem = [7, 8, 9, 6]. Biểu thức nào tính điểm trung bình?",
    "options": [
      "sum(diem) / len(diem) sử dụng hàm tính tổng sum kết hợp chia cho số lượng phần tử len.",
      "sum(diem) // len(diem) sử dụng phép chia nguyên để lấy phần nguyên của điểm trung bình.",
      "average(diem) gọi hàm tính trung bình cộng có sẵn trong thư viện toán học cơ bản.",
      "len(diem) / sum(diem) lấy số lượng học sinh chia cho tổng số điểm đạt được của cả lớp."
    ],
    "answer": 0,
    "explain": "sum(diem) / len(diem) là cách chuẩn và ngắn gọn nhất để tính trung bình cộng của một danh sách số."
  },
  {
    "id": "b22-q16",
    "q": "Xem xét đoạn mã sau:\na = [1, 2, 3]\nb = a\nb[0] = 99\nprint(a[0])\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "Hiển thị số 99 vì biến b và biến a cùng trỏ tới một đối tượng danh sách duy nhất trong bộ nhớ.",
      "Hiển thị số 1 vì danh sách a hoàn toàn độc lập và không bị ảnh hưởng bởi các thay đổi trên b.",
      "Chương trình báo lỗi vì hai danh sách không thể gán trực tiếp cho nhau bằng toán tử =.",
      "Hiển thị giá trị None vì phép gán làm mất liên kết dữ liệu ban đầu của danh sách a."
    ],
    "answer": 0,
    "explain": "Trong Python, phép gán b = a tạo ra một bí danh (alias) cùng trỏ vào một vùng nhớ, nên b[0] = 99 sẽ đổi cả a[0]."
  }
];
