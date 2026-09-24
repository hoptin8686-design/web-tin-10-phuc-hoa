import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-32: Ôn tập lập trình Python
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b32-q01",
    "q": "Bốn kiểu dữ liệu cơ sở nguyên thủy phổ biến nhất trong Python bao gồm những kiểu nào sau đây?",
    "options": [
      "int (số nguyên), float (số thực), str (xâu kí tự) và bool (logic đúng sai).",
      "integer, real, string và boolean viết đầy đủ theo chuẩn ngữ pháp ngôn ngữ Pascal.",
      "char (kí tự đơn), double (số thực dài), short (nguyên ngắn) và void (rỗng).",
      "table (bảng dữ liệu), number (con số), text (văn bản) và logic (chân lý)."
    ],
    "answer": 0,
    "explain": "Bốn kiểu dữ liệu cơ bản trong Python: int, float, str, bool."
  },
  {
    "id": "b32-q02",
    "q": "Cặp cấu trúc điều khiển nào là xương sống cơ bản trong việc điều khiển luồng thực thi của chương trình Python?",
    "options": [
      "Cấu trúc rẽ nhánh (lệnh if-elif-else) và cấu trúc lặp (vòng lặp for và vòng lặp while).",
      "Cấu trúc bảng chọn switch-case và cấu trúc nhảy nhãn goto không điều kiện.",
      "Cấu trúc lặp vô hạn repeat-until và cấu trúc lặp theo khối do-while có điều kiện.",
      "Cấu trúc gọi lệnh ngắt cứng vi xử lý và cấu trúc kiểm tra địa chỉ thanh ghi CPU."
    ],
    "answer": 0,
    "explain": "Hai cấu trúc điều khiển cơ bản: Cấu trúc rẽ nhánh (if) và Cấu trúc lặp (for, while)."
  },
  {
    "id": "b32-q03",
    "q": "Sự khác biệt căn bản nhất giữa kiểu dữ liệu danh sách (list) và kiểu dữ liệu xâu kí tự (str) trong Python là gì?",
    "options": [
      "Danh sách có tính khả biến (mutable - sửa được phần tử); xâu có tính bất biến (immutable - không sửa được).",
      "Danh sách không có thứ tự và không dùng chỉ số; xâu có thứ tự và dùng chỉ số bắt đầu từ 0.",
      "Danh sách chỉ có thể chứa số nguyên; xâu kí tự có thể chứa tất cả các loại dữ liệu hỗn hợp.",
      "Độ dài của xâu kí tự là cố định 255 kí tự; độ dài của danh sách là không giới hạn dung lượng."
    ],
    "answer": 0,
    "explain": "List là mutable (thay đổi được phần tử), str là immutable (bất biến, không thể sửa từng kí tự)."
  },
  {
    "id": "b32-q04",
    "q": "Để lấy một phần của danh sách hoặc xâu kí tự từ vị trí bắt đầu start đến trước vị trí stop, ta dùng cú pháp nào?",
    "options": [
      "Cú pháp cắt lát đối tượng obj[start:stop] trả về một danh sách con hoặc xâu con mới độc lập.",
      "Cú pháp gọi hàm con slice(obj, start, stop) trong thư viện toán học mở rộng của Python.",
      "Cú pháp lặp obj.substring(start, stop) mượn từ chuẩn ngôn ngữ hướng đối tượng Java.",
      "Cú pháp tách mảng obj.split(start, stop) dùng các tham số chỉ số làm mốc phân tách."
    ],
    "answer": 0,
    "explain": "Cú pháp cắt lát (slicing): obj[start:stop]."
  },
  {
    "id": "b32-q05",
    "q": "Toán tử in và not in có thể áp dụng cho những kiểu dữ liệu tuần tự nào sau đây trong Python?",
    "options": [
      "Áp dụng được cho cả kiểu danh sách (list) và kiểu xâu kí tự (str) để kiểm tra thành viên.",
      "Chỉ áp dụng được duy nhất cho kiểu danh sách số nguyên chứ không dùng được cho xâu kí tự.",
      "Chỉ áp dụng được duy nhất cho kiểu xâu kí tự văn bản chứ không dùng được cho danh sách.",
      "Chỉ dùng được trong các biểu thức toán học đại số chứ không dùng được trong câu lệnh if."
    ],
    "answer": 0,
    "explain": "Toán tử `in` và `not in` kiểm tra phần tử trong list và chuỗi con trong string."
  },
  {
    "id": "b32-q06",
    "q": "Một hàm tự định nghĩa trong Python có thể trả về bao nhiêu giá trị cùng một lúc qua lệnh return?",
    "options": [
      "Có thể trả về nhiều giá trị cách nhau bởi dấu phẩy, Python sẽ tự động đóng gói chúng thành một bộ (tuple).",
      "Bắt buộc chỉ được trả về duy nhất một giá trị đơn lẻ số nguyên hoặc số thực trong mọi tình huống.",
      "Tối đa là hai giá trị tương ứng với hai biến truyền vào làm tham số đầu vào của hàm.",
      "Không được trả về bất kỳ giá trị nào nếu hàm đó đã sử dụng câu lệnh in print ra màn hình."
    ],
    "answer": 0,
    "explain": "return a, b trả về đồng thời nhiều giá trị (dưới dạng một tuple: (a, b))."
  },
  {
    "id": "b32-q07",
    "q": "Xem xét đoạn chương trình sau:\na = [1, 2, 3]\nb = [x * 2 for x in a]\nprint(b)\nKết quả in ra là:",
    "options": [
      "Danh sách [2, 4, 6] thu được từ cú pháp tạo danh sách ngắn gọn (List Comprehension).",
      "Danh sách [1, 2, 3, 1, 2, 3] do nhân đôi số lượng các phần tử có trong danh sách a.",
      "Giá trị số nguyên 12 là tổng của các phần tử sau khi được nhân đôi trong bộ nhớ RAM.",
      "Chương trình báo lỗi vì không được viết vòng lặp for bên trong cặp ngoặc vuông danh sách."
    ],
    "answer": 0,
    "explain": "List comprehension [x * 2 for x in a] nhân đôi từng phần tử của a -> [2, 4, 6]."
  },
  {
    "id": "b32-q08",
    "q": "Phát biểu nào sau đây đúng về hàm thuần khiết (pure function) trong lập trình?",
    "options": [
      "Chỉ phụ thuộc vào các tham số đầu vào và trả kết quả qua return, không gây tác dụng phụ lên biến ngoài.",
      "Là hàm bắt buộc phải có ít nhất 100 dòng lệnh và không được phép sử dụng bất kỳ thư viện nào.",
      "Là hàm chỉ thực hiện các phép toán chia số thực mà không bao giờ dùng phép toán cộng trừ.",
      "Là hàm do chính tác giả Guido van Rossum tự tay viết và đóng gói sẵn trong nhân hệ điều hành."
    ],
    "answer": 0,
    "explain": "Pure function chỉ phụ thuộc tham số truyền vào, trả về giá trị qua return và không làm thay đổi biến ngoài (không tác dụng phụ)."
  },
  {
    "id": "b32-q09",
    "q": "Xem xét đoạn mã sau:\ns = 'python'\nprint(s[1:4])\nKết quả xuất hiện trên màn hình là gì?",
    "options": [
      "Xâu kí tự 'yth' gồm các kí tự tại các vị trí chỉ số 1, 2 và 3 trong chuỗi ban đầu.",
      "Xâu kí tự 'pyth' gồm 4 kí tự đầu tiên tính từ vị trí đầu xâu bên trái.",
      "Xâu kí tự 'ytho' gồm các kí tự từ vị trí thứ nhất đến vị trí thứ tư trong từ.",
      "Xâu kí tự 'tho' gồm các kí tự nằm ở nửa sau của từ tiếng Anh được chỉ định."
    ],
    "answer": 0,
    "explain": "s[1]='y', s[2]='t', s[3]='h'. s[1:4] lấy 'yth'."
  },
  {
    "id": "b32-q10",
    "q": "Khi cần duyệt đồng thời cả chỉ số i và giá trị x của từng phần tử trong danh sách a, hàm nào sau đây tối ưu nhất?",
    "options": [
      "for i, x in enumerate(a): sử dụng hàm enumerate có sẵn để trả về cặp chỉ số và giá trị.",
      "for i in range(len(a)): for x in a: lồng hai vòng lặp duyệt độc lập với nhau.",
      "while i < len(a) and x in a: kết hợp điều kiện lặp của cả hai biến trên cùng một dòng.",
      "for i in index(a): gọi hàm trích xuất chỉ số của danh sách trong thư viện toán học cơ bản."
    ],
    "answer": 0,
    "explain": "enumerate(a) là cú pháp chuẩn và thanh lịch nhất trong Python để lấy đồng thời chỉ số và giá trị."
  },
  {
    "id": "b32-q11",
    "q": "Đoạn mã sau thực hiện công việc gì đối với danh sách a?\na.sort(reverse=True)",
    "options": [
      "Sắp xếp trực tiếp các phần tử trong danh sách a theo thứ tự giảm dần ngay tại chỗ.",
      "Sắp xếp trực tiếp các phần tử trong danh sách a theo thứ tự tăng dần ngay tại chỗ.",
      "Đảo ngược thứ tự các phần tử trong danh sách mà hoàn toàn không quan tâm đến giá trị lớn bé.",
      "Xóa bỏ các phần tử trùng lặp trong danh sách a và giữ lại các phần tử duy nhất xuất hiện đầu."
    ],
    "answer": 0,
    "explain": "a.sort(reverse=True) sắp xếp danh sách a giảm dần tại chỗ."
  },
  {
    "id": "b32-q12",
    "q": "Biểu thức logic nào sau đây kiểm tra chính xác số nguyên k có 2 chữ số và là số lẻ?",
    "options": [
      "(10 <= k <= 99) and (k % 2 != 0) kết hợp kiểm tra miền hai chữ số và tính chất số lẻ.",
      "(k >= 10) or (k % 2 != 0) chỉ cần lớn hơn hoặc bằng 10 hoặc là một số nguyên lẻ bất kỳ.",
      "(10 < k < 99) and (k % 2 == 1) bỏ sót hai số biên quan trọng là số 10 và số 99.",
      "(len(str(k)) == 2) or (k % 2 == 1) kiểm tra độ dài xâu kết hợp điều kiện số lẻ qua toán tử or."
    ],
    "answer": 0,
    "explain": "10 <= k <= 99 kiểm tra số có 2 chữ số dương, k % 2 != 0 kiểm tra số lẻ."
  },
  {
    "id": "b32-q13",
    "q": "Xem xét đoạn chương trình sau:\ndef f(lst):\n    return [x for x in lst if x > 0]\nprint(f([-2, 5, 0, -1, 8]))\nKết quả in ra là:",
    "options": [
      "Danh sách [5, 8] chứa toàn bộ các số dương được lọc ra từ danh sách ban đầu.",
      "Danh sách [-2, -1] chứa toàn bộ các số âm được lọc ra từ danh sách ban đầu.",
      "Danh sách [0, 5, 8] chứa các số không âm bao gồm cả số không và các số dương.",
      "Giá trị số nguyên 13 là tổng của hai số dương có trong danh sách được truyền vào."
    ],
    "answer": 0,
    "explain": "Lọc các phần tử x > 0 từ [-2, 5, 0, -1, 8] được [5, 8]."
  },
  {
    "id": "b32-q14",
    "q": "Một học sinh muốn nhập một dãy các số nguyên trên cùng một dòng cách nhau bởi khoảng trắng vào danh sách a, câu lệnh chuẩn nhất là gì?",
    "options": [
      "a = list(map(int, input().split())) kết hợp hàm split tách từ và hàm map ép kiểu số nguyên.",
      "a = int(input().split()) ép kiểu trực tiếp cả danh sách các từ thành số nguyên trong bộ nhớ.",
      "a = input().split(int) truyền kiểu dữ liệu vào làm tham số phân cách của phương thức split.",
      "a = [input()] đưa toàn bộ chuỗi nhập từ bàn phím vào làm phần tử duy nhất của danh sách."
    ],
    "answer": 0,
    "explain": "a = list(map(int, input().split())) là câu lệnh kinh điển nhập dãy số trên 1 dòng trong Python."
  },
  {
    "id": "b32-q15",
    "q": "Phương pháp nào sau đây giúp loại bỏ các phần tử trùng lặp trong một danh sách a một cách nhanh nhất trong Python?",
    "options": [
      "Chuyển danh sách sang kiểu tập hợp bằng a = list(set(a)) để tận dụng tính chất không trùng lặp.",
      "Duyệt hai vòng for lồng nhau và xóa thủ công từng phần tử xuất hiện lần thứ hai bằng lệnh remove.",
      "Sắp xếp danh sách giảm dần rồi xóa phần tử đầu tiên và phần tử cuối cùng của mảng.",
      "Ghép danh sách a với chính nó rồi chia đôi độ dài để giữ lại một nửa số phần tử ban đầu."
    ],
    "answer": 0,
    "explain": "list(set(a)) loại bỏ trùng lặp nhanh nhất nhờ cấu trúc dữ liệu set (tập hợp các phần tử phân biệt)."
  },
  {
    "id": "b32-q16",
    "q": "Kĩ năng quan trọng nhất mà học sinh THPT cần đạt được sau khi hoàn thành chương trình lập trình Python lớp 10 là gì?",
    "options": [
      "Tư duy giải quyết vấn đề, khả năng chuyển đổi thuật toán thành chương trình và kiểm thử gỡ lỗi bài toán.",
      "Ghi nhớ thuộc lòng tất cả các mã nhị phân tương ứng của từng câu lệnh trong bảng mã máy tính.",
      "Khả năng gõ bàn phím bằng mười ngón tay với tốc độ trên 120 từ một phút mà không cần nhìn màn hình.",
      "Có thể tự tay lắp ráp và sửa chữa phần cứng các bo mạch chủ và card màn hình máy tính để bàn."
    ],
    "answer": 0,
    "explain": "Mục tiêu trọng tâm của Tin học 10 là tư duy giải quyết vấn đề, thuật toán, viết mã và kiểm thử/gỡ lỗi."
  }
];
