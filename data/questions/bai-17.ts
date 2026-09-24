import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-17: Biến và lệnh gán
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b17-q01",
    "q": "Khái niệm biến (variable) trong ngôn ngữ lập trình Python được định nghĩa chính xác nhất là gì?",
    "options": [
      "Là tên của một vùng nhớ trong bộ nhớ máy tính dùng để lưu trữ dữ liệu và giá trị có thể thay đổi.",
      "Là một đại lượng không đổi có giá trị cố định suốt quá trình biên dịch và thực thi chương trình.",
      "Là một từ khóa dành riêng của hệ điều hành dùng để ra lệnh cho các linh kiện phần cứng máy tính.",
      "Là định dạng tệp tin văn bản đặc biệt dùng để lưu trữ các đoạn mã nguồn phức tạp trên ổ cứng."
    ],
    "answer": 0,
    "explain": "Biến là tên định danh gán cho một vùng nhớ dùng để lưu giá trị dữ liệu và giá trị đó có thể thay đổi khi chạy."
  },
  {
    "id": "b17-q02",
    "q": "Quy tắc đặt tên biến nào sau đây trong Python là hoàn toàn hợp lệ theo chuẩn ngữ pháp?",
    "options": [
      "Tên biến chỉ chứa chữ cái, chữ số và dấu gạch dưới _, đồng thời không bắt đầu bằng chữ số.",
      "Tên biến có thể chứa khoảng trắng ở giữa và bắt đầu bằng bất kỳ kí tự số nào từ 0 đến 9.",
      "Tên biến được phép sử dụng các kí tự toán học đặc biệt như dấu cộng +, trừ -, nhân * và chia /.",
      "Tên biến được phép trùng hoàn toàn với các từ khóa đã dành riêng của ngôn ngữ lập trình Python."
    ],
    "answer": 0,
    "explain": "Tên biến hợp lệ chỉ gồm chữ cái, chữ số, gạch dưới và không được bắt đầu bằng chữ số, không trùng từ khóa."
  },
  {
    "id": "b17-q03",
    "q": "Trong các tên biến sau đây, tên biến nào KHÔNG hợp lệ trong ngôn ngữ lập trình Python?",
    "options": [
      "2nd_score vì tên biến bắt đầu bằng một chữ số vi phạm trực tiếp quy tắc định danh.",
      "total_score vì tên biến kết hợp chữ cái với dấu gạch dưới hoàn toàn đúng quy định.",
      "_temp vì tên biến được phép bắt đầu bằng dấu gạch dưới theo chuẩn ngôn ngữ.",
      "diemTrungBinh vì tên biến tuân thủ đúng quy tắc viết hoa chữ cái theo phong cách lạc đà."
    ],
    "answer": 0,
    "explain": "2nd_score không hợp lệ vì bắt đầu bằng chữ số 2."
  },
  {
    "id": "b17-q04",
    "q": "Cú pháp của lệnh gán đơn giản trong Python được thực hiện thông qua toán tử nào sau đây?",
    "options": [
      "Toán tử một dấu bằng = dùng để gán giá trị của biểu thức vế phải cho biến ở vế trái.",
      "Toán tử hai dấu bằng == dùng để gán giá trị của biểu thức vế phải cho biến ở vế trái.",
      "Toán tử dấu hai chấm kèm dấu bằng := dùng để gán giá trị thông thường cho biến số.",
      "Toán tử mũi tên sang trái <- dùng để chuyển dữ liệu trực tiếp vào bộ nhớ của biến số."
    ],
    "answer": 0,
    "explain": "Trong Python, lệnh gán dùng dấu bằng =, còn == là phép so sánh bằng."
  },
  {
    "id": "b17-q05",
    "q": "Đặc điểm nổi bật nào về việc xác định kiểu dữ liệu của biến trong Python khác biệt với C++ và Pascal?",
    "options": [
      "Không cần khai báo trước kiểu dữ liệu, kiểu của biến được tự động xác định qua giá trị gán.",
      "Bắt buộc người lập trình phải khai báo kiểu tường minh ở phần đầu trước khi gán dữ liệu.",
      "Một biến khi đã mang giá trị số nguyên thì vĩnh viễn không bao giờ nhận được giá trị xâu.",
      "Tất cả các biến trong Python khi tạo ra đều mặc định nhận kiểu dữ liệu xâu kí tự tĩnh."
    ],
    "answer": 0,
    "explain": "Python có kiểu động (dynamic typing): biến tự động nhận kiểu từ giá trị được gán."
  },
  {
    "id": "b17-q06",
    "q": "Để kiểm tra kiểu dữ liệu thực tế của một biến x trong chương trình, ta sử dụng hàm có sẵn nào?",
    "options": [
      "Hàm type(x) trả về kiểu dữ liệu cụ thể của đối tượng mà biến x đang tham chiếu tới.",
      "Hàm typeof(x) trả về kiểu dữ liệu cụ thể của đối tượng mà biến x đang tham chiếu tới.",
      "Hàm check(x) trả về kiểu dữ liệu cụ thể của đối tượng mà biến x đang tham chiếu tới.",
      "Hàm sizeof(x) trả về kiểu dữ liệu cụ thể của đối tượng mà biến x đang tham chiếu tới."
    ],
    "answer": 0,
    "explain": "Hàm type() trả về kiểu dữ liệu của biến hoặc đối tượng trong Python."
  },
  {
    "id": "b17-q07",
    "q": "Sau khi thực hiện lệnh gán x = 3.14, kết quả của lệnh type(x) hiển thị trên màn hình là gì?",
    "options": [
      "Hiển thị lớp dữ liệu <class 'float'> biểu thị số thực dấu phẩy động trong bộ nhớ.",
      "Hiển thị lớp dữ liệu <class 'int'> biểu thị số nguyên có dấu trong bộ nhớ máy tính.",
      "Hiển thị lớp dữ liệu <class 'str'> biểu thị xâu kí tự văn bản lưu trữ trên màn hình.",
      "Hiển thị lớp dữ liệu <class 'bool'> biểu thị giá trị chân lý đúng sai trong toán học."
    ],
    "answer": 0,
    "explain": "3.14 là số thực dấu phẩy động, có kiểu là float."
  },
  {
    "id": "b17-q08",
    "q": "Lệnh gán đồng thời nào sau đây trong Python là hoàn toàn đúng ngữ pháp và ngữ nghĩa?",
    "options": [
      "a, b = 5, 10 giúp gán đồng thời giá trị 5 cho biến a và giá trị 10 cho biến b tiện lợi.",
      "a, b = 5 giúp gán đồng thời giá trị 5 cho cả hai biến a và biến b trong một câu lệnh.",
      "a = 5, 10 giúp gán cả hai giá trị 5 và 10 liên tiếp vào vùng nhớ của một biến a duy nhất.",
      "a; b = 5; 10 giúp gán các giá trị phân cách bởi dấu chấm phẩy theo chuẩn Pascal cổ điển."
    ],
    "answer": 0,
    "explain": "Cú pháp gán đồng thời: a, b = 5, 10 gán 5 cho a và 10 cho b."
  },
  {
    "id": "b17-q09",
    "q": "Để hoán đổi giá trị của hai biến x và y trong Python mà không cần dùng biến trung gian, ta viết lệnh nào?",
    "options": [
      "Lệnh x, y = y, x giúp tráo đổi trực tiếp giá trị của hai biến trong một thao tác cực ngắn gọn.",
      "Lệnh x = y = x giúp tráo đổi trực tiếp giá trị của hai biến trong một thao tác cực ngắn gọn.",
      "Lệnh swap(x, y) giúp tráo đổi trực tiếp giá trị của hai biến thông qua hàm hệ thống có sẵn.",
      "Lệnh x == y and y == x giúp tráo đổi trực tiếp giá trị của hai biến qua phép so sánh logic."
    ],
    "answer": 0,
    "explain": "Python hỗ trợ hoán đổi giá trị biến cực kỳ ngắn gọn bằng cú pháp: x, y = y, x."
  },
  {
    "id": "b17-q10",
    "q": "Từ khóa (keywords) trong ngôn ngữ Python có tính chất nào sau đây mà người lập trình cần tuân thủ?",
    "options": [
      "Là các từ dành riêng cho mục đích xác định của ngôn ngữ và tuyệt đối không được dùng làm tên biến.",
      "Là các từ được tự do đặt làm tên biến hoặc tên hàm tùy theo thói quen của người viết mã.",
      "Chỉ có tác dụng chú thích nội dung cho đoạn chương trình chứ không ảnh hưởng đến ngữ pháp.",
      "Là những từ khóa viết bằng tiếng Việt có dấu giúp hệ điều hành dễ dàng phân tích ngữ cảnh."
    ],
    "answer": 0,
    "explain": "Từ khóa là các từ dành riêng của ngôn ngữ (if, else, for, def...), không được dùng làm tên biến/hàm."
  },
  {
    "id": "b17-q11",
    "q": "Trong các từ sau đây, từ nào là từ khóa dành riêng trong ngôn ngữ lập trình Python?",
    "options": [
      "Từ khóa 'while' dùng để khởi tạo cấu trúc vòng lặp với điều kiện chưa biết trước số lần.",
      "Từ khóa 'integer' dùng để khai báo kiểu dữ liệu số nguyên cho các biến trong chương trình.",
      "Từ khóa 'program' dùng để đặt tên tiêu đề cho tệp chương trình nguồn ở dòng đầu tiên.",
      "Từ khóa 'string' dùng để khởi tạo kiểu dữ liệu xâu kí tự văn bản cho các đại lượng."
    ],
    "answer": 0,
    "explain": "while là từ khóa trong Python. Các từ integer, program, string không phải từ khóa Python."
  },
  {
    "id": "b17-q12",
    "q": "Xem xét đoạn mã sau: a = 10; a = a + 5. Giá trị cuối cùng của biến a trong bộ nhớ là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 15 do giá trị cũ của biến a được lấy ra cộng thêm 5 rồi ghi đè lại vào a.",
      "Giá trị số nguyên 10 do biến một khi đã nhận giá trị ban đầu thì không thể bị ghi đè lên.",
      "Giá trị số nguyên 5 do phép cộng thứ hai đã hủy bỏ hoàn toàn giá trị khởi tạo ban đầu của a.",
      "Chương trình báo lỗi vì không được phép sử dụng cùng một tên biến ở cả hai vế phép gán."
    ],
    "answer": 0,
    "explain": "a = 10, sau đó a = 10 + 5 = 15. Biến a được cập nhật giá trị mới."
  },
  {
    "id": "b17-q13",
    "q": "Khi thực hiện chuỗi lệnh: s = '123'; x = int(s), kiểu dữ liệu và giá trị của biến x là gì?",
    "options": [
      "Biến x có kiểu số nguyên int và mang giá trị bằng số 123 sau khi được chuyển đổi từ xâu.",
      "Biến x có kiểu xâu kí tự str và mang giá trị chuỗi '123' giữ nguyên bản chất ban đầu.",
      "Biến x có kiểu số thực float và mang giá trị 123.0 sau khi được ép kiểu qua hàm int.",
      "Chương trình báo lỗi cú pháp do hàm int() không thể nhận đầu vào là một chuỗi kí tự."
    ],
    "answer": 0,
    "explain": "int('123') chuyển đổi chuỗi chữ số thành số nguyên 123."
  },
  {
    "id": "b17-q14",
    "q": "Phát biểu nào sau đây đúng về sự phân biệt chữ hoa và chữ thường (case-sensitive) trong Python?",
    "options": [
      "Các biến Diem, diem và DIEM là ba biến hoàn toàn khác nhau cùng tồn tại trong bộ nhớ.",
      "Python tự động quy tất cả tên biến về chữ thường nên Diem và diem là một biến duy nhất.",
      "Người lập trình chỉ được phép dùng toàn chữ hoa hoặc toàn chữ thường để đặt tên cho biến.",
      "Quy tắc phân biệt chữ hoa chỉ áp dụng cho từ khóa hệ thống chứ không áp dụng cho biến."
    ],
    "answer": 0,
    "explain": "Python phân biệt chữ hoa và chữ thường, do đó Diem, diem, DIEM là 3 biến phân biệt."
  },
  {
    "id": "b17-q15",
    "q": "Thực hiện đoạn mã: x = 5; y = '5'; print(x * 2, y * 2). Kết quả xuất hiện trên màn hình là gì?",
    "options": [
      "Kết quả in ra là 10 55 do số được nhân gấp đôi còn chuỗi được nhân bản lặp lại hai lần.",
      "Kết quả in ra là 10 10 do chuỗi y tự động được chuyển đổi sang số nguyên khi gặp phép nhân.",
      "Kết quả in ra là 55 55 do số x tự động chuyển đổi sang chuỗi kí tự để đồng bộ kiểu dữ liệu.",
      "Chương trình xuất hiện thông báo lỗi TypeError vì không thể thực hiện phép nhân xâu với số."
    ],
    "answer": 0,
    "explain": "x * 2 = 10 (phép nhân số học); y * 2 = '55' (phép nhân bản chuỗi kí tự trong Python)."
  },
  {
    "id": "b17-q16",
    "q": "Trong một chương trình quản lý thư viện trường học, để đếm tổng số cuốn sách đã mượn, tên biến nào chuẩn quy tắc và gợi nhớ ý nghĩa tốt nhất?",
    "options": [
      "tong_sach_muon vì viết bằng chữ cái thường rõ nghĩa, có gạch dưới và gợi nhớ mục đích lưu trữ.",
      "1_tong_sach vì tên biến này ngắn gọn và thể hiện ngay số thứ tự cuốn sách đầu tiên.",
      "tong sach vi sử dụng dấu cách ở giữa giúp người xem đọc hiểu câu văn tự nhiên nhất.",
      "total-books vì dấu gạch ngang nối từ giúp phân biệt các thành phần rõ ràng hơn gạch dưới."
    ],
    "answer": 0,
    "explain": "tong_sach_muon hợp lệ, đúng phong cách snake_case và mang tính gợi nhớ cao."
  }
];
