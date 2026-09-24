import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-23: Một số lệnh làm việc với dữ liệu danh sách
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b23-q01",
    "q": "Phương thức nào sau đây được sử dụng để thêm một phần tử mới vào vị trí cuối cùng của danh sách trong Python?",
    "options": [
      "Phương thức append(x) bổ sung phần tử x vào vị trí cuối cùng của danh sách hiện tại.",
      "Phương thức add(x) bổ sung phần tử x vào vị trí cuối cùng của danh sách hiện tại.",
      "Phương thức push(x) bổ sung phần tử x vào vị trí cuối cùng của danh sách hiện tại.",
      "Phương thức insert_last(x) bổ sung phần tử x vào vị trí cuối của danh sách hiện tại."
    ],
    "answer": 0,
    "explain": "Phương thức append(x) thêm phần tử x vào cuối danh sách."
  },
  {
    "id": "b23-q02",
    "q": "Để chèn một phần tử x vào vị trí có chỉ số i trong danh sách a, ta sử dụng phương thức chuẩn nào?",
    "options": [
      "a.insert(i, x) chèn phần tử x vào vị trí chỉ số i và đẩy các phần tử phía sau lùi lại.",
      "a.add(i, x) chèn phần tử x vào vị trí chỉ số i và đẩy các phần tử phía sau lùi lại.",
      "a.append(i, x) chèn phần tử x vào vị trí chỉ số i và ghi đè giá trị của phần tử cũ.",
      "a.push(i, x) chèn phần tử x vào vị trí chỉ số i theo cơ chế ngăn xếp của hệ điều hành."
    ],
    "answer": 0,
    "explain": "a.insert(i, x) chèn phần tử x vào vị trí i."
  },
  {
    "id": "b23-q03",
    "q": "Phương thức a.remove(x) trong Python thực hiện chức năng xóa phần tử nào ra khỏi danh sách a?",
    "options": [
      "Xóa phần tử đầu tiên trong danh sách a có giá trị đúng bằng x (báo ValueError nếu không có).",
      "Xóa tất cả các phần tử trong danh sách a có giá trị đúng bằng x mà không báo bất kỳ lỗi nào.",
      "Xóa phần tử tại vị trí chỉ số x trong danh sách bất kể phần tử đó mang giá trị là bao nhiêu.",
      "Xóa phần tử cuối cùng của danh sách nếu giá trị của nó nhỏ hơn hoặc bằng tham số x."
    ],
    "answer": 0,
    "explain": "remove(x) xóa phần tử đầu tiên có giá trị bằng x. Nếu x không tồn tại, báo lỗi ValueError."
  },
  {
    "id": "b23-q04",
    "q": "Để xóa phần tử tại chỉ số i ra khỏi danh sách a và đồng thời trả về giá trị của phần tử đó, ta dùng phương thức nào?",
    "options": [
      "Phương thức a.pop(i) xóa phần tử tại vị trí chỉ số i và trả về chính giá trị vừa được xóa.",
      "Phương thức a.remove(i) xóa phần tử tại vị trí chỉ số i và trả về chính giá trị vừa được xóa.",
      "Phương thức a.delete(i) xóa phần tử tại vị trí chỉ số i và trả về chính giá trị vừa được xóa.",
      "Phương thức a.drop(i) xóa phần tử tại vị trí chỉ số i và trả về chính giá trị vừa được xóa."
    ],
    "answer": 0,
    "explain": "a.pop(i) xóa và trả về phần tử tại vị trí i. Nếu không truyền i, mặc định xóa phần tử cuối cùng (pop())."
  },
  {
    "id": "b23-q05",
    "q": "Câu lệnh del a[i] trong Python có tác dụng nào sau đây đối với danh sách a?",
    "options": [
      "Xóa bỏ hoàn toàn phần tử tại vị trí chỉ số i ra khỏi danh sách a theo lệnh từ khóa del.",
      "Đổi giá trị của phần tử tại chỉ số i về giá trị rỗng None mà không làm giảm độ dài danh sách.",
      "Xóa toàn bộ các phần tử có giá trị bằng i ra khỏi vùng nhớ tạm thời của máy tính.",
      "Báo lỗi cú pháp vì Python không hỗ trợ việc xóa phần tử thông qua từ khóa del."
    ],
    "answer": 0,
    "explain": "del a[i] là câu lệnh xóa phần tử tại chỉ số i khỏi danh sách a."
  },
  {
    "id": "b23-q06",
    "q": "Để xóa sạch toàn bộ tất cả các phần tử trong danh sách a để đưa a trở thành danh sách rỗng, ta dùng lệnh nào?",
    "options": [
      "Phương thức a.clear() xóa toàn bộ các phần tử hiện có trong danh sách đưa về danh sách rỗng [].",
      "Phương thức a.empty() xóa toàn bộ các phần tử hiện có trong danh sách đưa về danh sách rỗng [].",
      "Phương thức a.reset() xóa toàn bộ các phần tử hiện có trong danh sách đưa về danh sách rỗng [].",
      "Phương thức a.remove_all() xóa toàn bộ các phần tử đưa về danh sách rỗng trong bộ nhớ."
    ],
    "answer": 0,
    "explain": "a.clear() làm rỗng danh sách a."
  },
  {
    "id": "b23-q07",
    "q": "Toán tử nào sau đây dùng để kiểm tra xem một giá trị x có xuất hiện trong danh sách a hay không?",
    "options": [
      "Toán tử 'in' trả về True nếu x là một phần tử có mặt trong danh sách a, ngược lại trả về False.",
      "Toán tử 'has' trả về True nếu x là một phần tử có mặt trong danh sách a, ngược lại trả về False.",
      "Toán tử 'contains' kiểm tra sự tồn tại của phần tử x theo quy chuẩn các ngôn ngữ hướng đối tượng.",
      "Toán tử 'exists' kiểm tra sự tồn tại của phần tử x theo cấu trúc truy vấn ngôn ngữ cơ sở dữ liệu."
    ],
    "answer": 0,
    "explain": "Toán tử `in` kiểm tra phần tử có nằm trong danh sách hay không: `x in a`."
  },
  {
    "id": "b23-q08",
    "q": "Cho danh sách a = [1, 2, 3] và b = [4, 5]. Kết quả của biểu thức a + b trong Python là gì?",
    "options": [
      "Danh sách mới [1, 2, 3, 4, 5] thu được từ phép ghép nối hai danh sách lại với nhau.",
      "Danh sách mới [5, 7, 3] thu được từ phép cộng số học từng cặp phần tử tương ứng.",
      "Chương trình báo lỗi TypeError vì toán tử cộng + không áp dụng được cho dữ liệu danh sách.",
      "Một danh sách lồng nhau gồm hai phần tử con là [[1, 2, 3], [4, 5]] trong bộ nhớ."
    ],
    "answer": 0,
    "explain": "Toán tử + thực hiện ghép hai danh sách thành một danh sách mới."
  },
  {
    "id": "b23-q09",
    "q": "Khi thực hiện phép nhân danh sách a = [0] * 4, kết quả trả về của biến a là gì?",
    "options": [
      "Danh sách gồm 4 phần tử [0, 0, 0, 0] thu được từ phép nhân bản danh sách ban đầu.",
      "Danh sách gồm 1 phần tử duy nhất mang giá trị số nguyên 0 do 0 nhân 4 bằng 0.",
      "Chương trình xuất hiện lỗi vì không thể nhân một tập hợp danh sách với một số nguyên.",
      "Một số nguyên bằng 0 biểu thị kết quả của phép nhân đại số giữa mảng và số nguyên."
    ],
    "answer": 0,
    "explain": "[0] * 4 nhân bản phần tử [0] bốn lần, tạo ra [0, 0, 0, 0]."
  },
  {
    "id": "b23-q10",
    "q": "Xem xét đoạn chương trình sau:\na = [10, 20, 30]\na.insert(1, 99)\nprint(a)\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "Danh sách [10, 99, 20, 30] do số 99 được chèn vào chỉ số 1 đẩy các số sau lùi lại.",
      "Danh sách [99, 10, 20, 30] do số 99 được ưu tiên chèn vào vị trí đầu tiên của mảng.",
      "Danh sách [10, 99, 30] do phần tử 20 tại vị trí chỉ số 1 bị ghi đè hoàn toàn bởi số 99.",
      "Chương trình báo lỗi vì hàm insert() chỉ nhận duy nhất một tham số là giá trị cần chèn."
    ],
    "answer": 0,
    "explain": "insert(1, 99) chèn 99 vào vị trí index 1, dịch 20, 30 sang phải: [10, 99, 20, 30]."
  },
  {
    "id": "b23-q11",
    "q": "Xem xét đoạn mã sau:\na = [1, 2, 3, 2, 4]\na.remove(2)\nprint(a)\nKết quả in ra là:",
    "options": [
      "Danh sách [1, 3, 2, 4] do phương thức remove chỉ xóa phần tử có giá trị 2 xuất hiện đầu tiên.",
      "Danh sách [1, 3, 4] do phương thức remove xóa tất cả các phần tử có giá trị bằng 2.",
      "Danh sách [1, 2, 2, 4] do phương thức remove xóa phần tử tại vị trí chỉ số 2 (số 3).",
      "Chương trình báo lỗi vì danh sách có nhiều hơn một phần tử mang giá trị cần xóa."
    ],
    "answer": 0,
    "explain": "remove(2) chỉ xóa số 2 đầu tiên tìm thấy, kết quả là [1, 3, 2, 4]."
  },
  {
    "id": "b23-q12",
    "q": "Để đếm số lần xuất hiện của phần tử x trong danh sách a, phương thức nào sau đây được sử dụng?",
    "options": [
      "Phương thức a.count(x) trả về số nguyên là số lần phần tử x có mặt trong danh sách a.",
      "Phương thức a.frequency(x) trả về số nguyên là tần suất xuất hiện của x trong danh sách a.",
      "Hàm len(a, x) truyền thêm tham số x vào hàm độ dài để lọc số lượng phần tử cần đếm.",
      "Phương thức a.find_all(x) trả về danh sách các vị trí mà phần tử x xuất hiện trong a."
    ],
    "answer": 0,
    "explain": "a.count(x) trả về số lần xuất hiện của x trong a."
  },
  {
    "id": "b23-q13",
    "q": "Để sao chép toàn bộ các phần tử của danh sách a sang một danh sách mới b hoàn toàn độc lập trong bộ nhớ, ta dùng cách nào?",
    "options": [
      "b = a.copy() hoặc sử dụng cú pháp cắt lát b = a[:] để tạo ra một bản sao nông độc lập.",
      "b = a thực hiện phép gán thông thường để tự động tạo một vùng nhớ riêng biệt mới cho b.",
      "b = clone(a) gọi hàm sao chép đối tượng trong thư viện hệ thống của hệ điều hành.",
      "b = list.new(a) gọi hàm khởi tạo tĩnh của lớp danh sách trong môi trường dòng lệnh."
    ],
    "answer": 0,
    "explain": "b = a.copy() hoặc b = a[:] tạo ra bản sao nông (shallow copy) độc lập vùng nhớ với a."
  },
  {
    "id": "b23-q14",
    "q": "Cho danh sách a = [5, 2, 9, 1]. Phương thức a.sort() sẽ thực hiện công việc gì đối với danh sách a?",
    "options": [
      "Sắp xếp trực tiếp các phần tử trong danh sách a theo thứ tự tăng dần ngay tại chỗ.",
      "Sắp xếp trực tiếp các phần tử trong danh sách a theo thứ tự giảm dần ngay tại chỗ.",
      "Tạo ra một danh sách mới đã sắp xếp mà không làm thay đổi thứ tự ban đầu của a.",
      "Đảo ngược thứ tự các phần tử của danh sách a theo chiều từ cuối về đầu danh sách."
    ],
    "answer": 0,
    "explain": "a.sort() sắp xếp các phần tử của a theo thứ tự tăng dần tại chỗ (in-place)."
  },
  {
    "id": "b23-q15",
    "q": "Xem xét đoạn chương trình sau:\na = [10, 20, 30]\nx = a.pop()\nprint(x, a)\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "Hiển thị: 30 [10, 20] vì pop() không tham số sẽ xóa và trả về phần tử cuối cùng của danh sách.",
      "Hiển thị: 10 [20, 30] vì pop() mặc định xóa phần tử đầu tiên ở vị trí chỉ số 0 của mảng.",
      "Hiển thị: None [10, 20, 30] vì pop() không trả về giá trị mà chỉ làm nhiệm vụ xóa phần tử.",
      "Chương trình báo lỗi TypeError vì phương thức pop() bắt buộc phải truyền vào chỉ số cần xóa."
    ],
    "answer": 0,
    "explain": "pop() mặc định xóa và trả về phần tử cuối cùng: x = 30 và a còn [10, 20]."
  },
  {
    "id": "b23-q16",
    "q": "Cho danh sách số nguyên a = [4, 7, 2, 9, 5]. Biểu thức nào sau đây trả về giá trị nhỏ nhất trong danh sách?",
    "options": [
      "Hàm min(a) trả về giá trị của phần tử có giá trị nhỏ nhất trong danh sách a là số 2.",
      "Hàm a.min() gọi phương thức tích hợp sẵn của đối tượng danh sách trong bộ nhớ.",
      "Hàm minimum(a) gọi hàm chuẩn của thư viện toán học math trong ngôn ngữ Python.",
      "Hàm a.smallest() gọi hàm trích xuất phần tử cực tiểu từ bảng dữ liệu mảng."
    ],
    "answer": 0,
    "explain": "min(a) là hàm có sẵn trả về phần tử nhỏ nhất trong danh sách."
  }
];
