import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-28: Phạm vi của biến
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b28-q01",
    "q": "Khái niệm 'phạm vi của biến' (scope of variable) trong ngôn ngữ lập trình được hiểu là gì?",
    "options": [
      "Vùng mã nguồn trong chương trình mà tại đó biến có thể được truy cập và sử dụng hợp lệ.",
      "Dung lượng bộ nhớ RAM tối đa mà một biến được phép chiếm dụng khi lưu trữ dữ liệu.",
      "Số lượng các hàm con tối đa được phép gọi đến biến đó trong suốt vòng đời chương trình.",
      "Khoảng thời gian tính bằng giây từ lúc biến được khởi tạo đến khi máy tính tắt nguồn."
    ],
    "answer": 0,
    "explain": "Phạm vi của biến (scope) là vùng trong chương trình mà biến được nhận diện và truy cập được."
  },
  {
    "id": "b28-q02",
    "q": "Biến cục bộ (local variable) trong Python là biến có đặc điểm vị trí khai báo ở đâu?",
    "options": [
      "Được định nghĩa bên trong thân của một hàm và chỉ có hiệu lực bên trong hàm đó.",
      "Được định nghĩa ở ngoài tất cả các hàm và có hiệu lực trên toàn bộ chương trình nguồn.",
      "Được định nghĩa trong tệp cấu hình hệ thống của phần mềm thông dịch Python IDLE.",
      "Được khai báo trong thư viện toán học math và có thể gọi ra bất kỳ thời điểm nào."
    ],
    "answer": 0,
    "explain": "Biến cục bộ được tạo bên trong thân hàm và chỉ có tác dụng trong phạm vi hàm đó."
  },
  {
    "id": "b28-q03",
    "q": "Vòng đời (lifetime) của một biến cục bộ trong Python bắt đầu và kết thúc khi nào?",
    "options": [
      "Sinh ra khi hàm được gọi thực thi và bị hủy giải phóng khỏi bộ nhớ khi hàm kết thúc.",
      "Sinh ra ngay khi tệp chương trình được mở và tồn tại vĩnh viễn trên ổ cứng máy tính.",
      "Sinh ra khi máy tính khởi động và chỉ mất đi khi người dùng gỡ cài đặt phần mềm Python.",
      "Tồn tại suốt từ đầu đến cuối phiên chạy của chương trình bất kể hàm có chạy hay không."
    ],
    "answer": 0,
    "explain": "Biến cục bộ sinh ra khi gọi hàm và bị hủy khi hàm kết thúc."
  },
  {
    "id": "b28-q04",
    "q": "Biến toàn cục (global variable) trong Python là biến được định nghĩa ở đâu trong chương trình?",
    "options": [
      "Được định nghĩa bên ngoài tất cả các hàm và có thể được truy cập ở mọi nơi trong chương trình.",
      "Được định nghĩa bên trong thân của câu lệnh lặp while và chỉ tồn tại trong vòng lặp đó.",
      "Bắt buộc phải được định nghĩa trong hàm main theo chuẩn quy ước lập trình của ngôn ngữ C.",
      "Chỉ được khai báo trong cửa sổ Shell tương tác chứ không được viết vào tệp mã nguồn .py."
    ],
    "answer": 0,
    "explain": "Biến toàn cục được định nghĩa bên ngoài các hàm, có thể truy cập ở mọi vị trí trong tệp mã nguồn."
  },
  {
    "id": "b28-q05",
    "q": "Điều gì xảy ra khi cố gắng truy cập một biến cục bộ x từ bên ngoài hàm nơi biến đó được định nghĩa?",
    "options": [
      "Báo lỗi ngoại lệ NameError: name 'x' is not defined vì biến x không tồn tại ở phạm vi ngoài.",
      "Chương trình tự động tạo ra một biến x mới mang giá trị 0 ở phạm vi toàn cục của mã.",
      "Chương trình vẫn đọc được giá trị của x bình thường nhưng không cho phép thay đổi giá trị.",
      "Hệ điều hành tạm dừng chương trình và yêu cầu người dùng khai báo lại biến x trên màn hình."
    ],
    "answer": 0,
    "explain": "Biến cục bộ không thể truy cập từ bên ngoài hàm, cố truy cập sẽ sinh lỗi NameError: name is not defined."
  },
  {
    "id": "b28-q06",
    "q": "Xem xét đoạn chương trình sau:\ndef tinh():\n    val = 100\ntinh()\nprint(val)\nHiện tượng gì sẽ xảy ra khi chạy đoạn mã trên?",
    "options": [
      "Báo lỗi NameError vì biến val là biến cục bộ của hàm tinh, không tồn tại ở phạm vi ngoài hàm.",
      "In ra màn hình giá trị số nguyên 100 theo đúng giá trị đã được gán bên trong thân hàm.",
      "In ra giá trị None do biến val không có câu lệnh return chuyển tiếp ra bên ngoài.",
      "Chương trình chạy bình thường mà không in ra bất kỳ dòng thông báo nào trên màn hình."
    ],
    "answer": 0,
    "explain": "val là biến cục bộ của hàm tinh(), gọi print(val) ngoài hàm gây NameError."
  },
  {
    "id": "b28-q07",
    "q": "Từ khóa nào trong Python được sử dụng bên trong hàm để thông báo muốn sửa đổi giá trị của một biến toàn cục?",
    "options": [
      "Từ khóa 'global' đặt trước tên biến để liên kết biến trong hàm với biến toàn cục bên ngoài.",
      "Từ khóa 'extern' mượn cú pháp của ngôn ngữ C để liên kết các biến toàn cục ngoài tệp.",
      "Từ khóa 'public' dùng để công khai hóa phạm vi hoạt động của biến trong hướng đối tượng.",
      "Từ khóa 'var' dùng để mở rộng tầm vực tham chiếu của biến ra toàn bộ hệ điều hành."
    ],
    "answer": 0,
    "explain": "Từ khóa `global` dùng bên trong hàm để chỉ định biến đó là biến toàn cục và được phép gán lại."
  },
  {
    "id": "b28-q08",
    "q": "Xem xét đoạn mã sau:\nx = 10\ndef f():\n    global x\n    x = 20\nf()\nprint(x)\nKết quả hiển thị trên màn hình là:",
    "options": [
      "Giá trị số nguyên 20 vì từ khóa global đã cho phép hàm f thay đổi giá trị của biến toàn cục x.",
      "Giá trị số nguyên 10 vì biến toàn cục không bao giờ có thể bị thay đổi giá trị bởi các hàm con.",
      "Chương trình báo lỗi vì không được phép đặt tên biến trùng nhau ở trong và ngoài thân hàm.",
      "In ra cả hai số 10 và 20 trên hai dòng riêng biệt của màn hình giao diện người dùng."
    ],
    "answer": 0,
    "explain": "global x cho phép gán x = 20 ghi đè lên biến toàn cục x, print(x) in 20."
  },
  {
    "id": "b28-q09",
    "q": "Xem xét đoạn mã sau khi KHÔNG dùng từ khóa global:\nx = 5\ndef f():\n    x = 10\nf()\nprint(x)\nKết quả in ra trên màn hình là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 5 vì lệnh x = 10 trong hàm chỉ tạo ra một biến cục bộ x mới che khuất biến ngoài.",
      "Giá trị số nguyên 10 vì phép gán trong hàm tự động cập nhật đè lên biến x toàn cục ngoài hàm.",
      "Giá trị số nguyên 15 do Python tự động cộng dồn giá trị của biến trong và biến ngoài hàm.",
      "Chương trình báo lỗi cú pháp vì có sự xung đột tên biến giữa phạm vi cục bộ và toàn cục."
    ],
    "answer": 0,
    "explain": "x = 10 tạo biến cục bộ x độc lập. Biến toàn cục x bên ngoài vẫn giữ nguyên giá trị 5."
  },
  {
    "id": "b28-q10",
    "q": "Một hàm có thể ĐỌC (truy xuất) giá trị của một biến toàn cục mà không cần khai báo từ khóa global hay không?",
    "options": [
      "Hoàn toàn được phép; từ khóa global chỉ bắt buộc khi cần gán lại (thay đổi) giá trị biến toàn cục.",
      "Tuyệt đối không được phép; nếu không có từ khóa global thì hàm không thể nhìn thấy biến ngoài.",
      "Chỉ được đọc nếu biến toàn cục đó có kiểu dữ liệu là xâu kí tự chứ không áp dụng cho số.",
      "Chỉ được đọc một lần duy nhất, ở các lần đọc tiếp theo Python sẽ tự động xóa biến khỏi RAM."
    ],
    "answer": 0,
    "explain": "Đọc biến toàn cục không cần từ khóa `global`. Chỉ khi muốn gán lại (reassign) mới cần `global`."
  },
  {
    "id": "b28-q11",
    "q": "Hiện tượng một biến cục bộ bên trong hàm có cùng tên với một biến toàn cục được gọi là gì trong khoa học máy tính?",
    "options": [
      "Hiện tượng che khuất biến (variable shadowing), biến cục bộ sẽ được ưu tiên sử dụng trong thân hàm.",
      "Hiện tượng ghi đè vĩnh viễn (overwriting), biến toàn cục sẽ bị xóa bỏ hoàn toàn khỏi bộ nhớ.",
      "Hiện tượng rò rỉ bộ nhớ (memory leak), làm cho chương trình tiêu tốn gấp đôi dung lượng RAM.",
      "Hiện tượng đa hình (polymorphism), cho phép một biến thực hiện nhiều hành vi khác nhau."
    ],
    "answer": 0,
    "explain": "Variable shadowing: biến cục bộ che khuất biến toàn cục cùng tên bên trong phạm vi của hàm."
  },
  {
    "id": "b28-q12",
    "q": "Xem xét đoạn mã sau:\na = 1\ndef f():\n    print(a)\nf()\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "In ra số nguyên 1 vì hàm f có quyền đọc giá trị của biến toàn cục a bên ngoài.",
      "Báo lỗi UnboundLocalError vì biến a chưa được truyền vào qua danh sách tham số.",
      "In ra giá trị None vì biến a không thuộc sở hữu nội bộ của không gian tên hàm f.",
      "Chương trình dừng lại và yêu cầu nạp từ khóa global trước khi thực hiện câu lệnh in."
    ],
    "answer": 0,
    "explain": "Hàm có thể đọc biến toàn cục a tự do, nên in ra 1."
  },
  {
    "id": "b28-q13",
    "q": "Tại sao trong thực tế phát triển phần mềm, các lập trình viên chuyên nghiệp thường hạn chế việc lạm dụng biến toàn cục?",
    "options": [
      "Vì biến toàn cục khó kiểm soát nguồn thay đổi, dễ gây lỗi phụ thuộc ngầm và khó bảo trì phần mềm.",
      "Vì ngôn ngữ lập trình Python chỉ cho phép tạo tối đa 5 biến toàn cục trong toàn bộ chương trình.",
      "Vì biến toàn cục làm cho tốc độ tải tệp mã nguồn từ ổ cứng vào bộ nhớ RAM bị chậm lại đáng kể.",
      "Vì các công cụ biên dịch tự động sẽ từ chối dịch các tệp mã nguồn có chứa biến toàn cục."
    ],
    "answer": 0,
    "explain": "Lạm dụng biến toàn cục làm mã nguồn khó gỡ lỗi, khó kiểm soát tác dụng phụ (side effects), giảm tính module hóa."
  },
  {
    "id": "b28-q14",
    "q": "Xem xét đoạn mã sau:\ndef dem():\n    cnt = 0\n    cnt += 1\n    return cnt\nprint(dem(), dem())\nKết quả in ra màn hình là gì?",
    "options": [
      "In ra 1 1 vì ở mỗi lần gọi hàm, biến cục bộ cnt lại được khởi tạo lại từ đầu bằng 0 rồi tăng lên 1.",
      "In ra 1 2 vì biến cnt ghi nhớ giá trị của lần gọi trước đó để tiếp tục cộng dồn lên 2.",
      "In ra 0 1 vì ở lần gọi đầu tiên hàm chưa kịp tính toán phép cộng đã vội trả về giá trị.",
      "Chương trình báo lỗi vì một hàm không được phép gọi liên tiếp hai lần trong cùng một câu lệnh in."
    ],
    "answer": 0,
    "explain": "Mỗi lần gọi dem(), cnt được tạo mới = 0 rồi + 1 = 1. Kết quả cả 2 lần đều là 1."
  },
  {
    "id": "b28-q15",
    "q": "Quy tắc tìm kiếm tên biến LEGB trong Python thực hiện theo thứ tự ưu tiên các phạm vi nào sau đây?",
    "options": [
      "Local (Cục bộ) -> Enclosing (Hàm bao ngoài) -> Global (Toàn cục) -> Built-in (Có sẵn trong Python).",
      "Global (Toàn cục) -> Local (Cục bộ) -> Enclosing (Hàm bao) -> Built-in (Có sẵn trong Python).",
      "Built-in (Có sẵn) -> Global (Toàn cục) -> Local (Cục bộ) -> Enclosing (Hàm bao ngoài).",
      "Local (Cục bộ) -> Global (Toàn cục) -> Built-in (Có sẵn) -> Enclosing (Hàm bao ngoài)."
    ],
    "answer": 0,
    "explain": "Quy tắc LEGB: Local -> Enclosing -> Global -> Built-in."
  },
  {
    "id": "b28-q16",
    "q": "Để một hàm vừa cập nhật kết quả vừa tránh dùng biến toàn cục, giải pháp lập trình chuẩn mực nhất là gì?",
    "options": [
      "Truyền dữ liệu vào qua tham số của hàm và trả kết quả mới ra ngoài thông qua lệnh return.",
      "Ghi kết quả tạm thời vào một tệp văn bản tĩnh trên đĩa cứng rồi đọc lại ở cuối chương trình.",
      "Khai báo tất cả các biến thành hằng số toán học để ngăn chặn sự thay đổi dữ liệu ngầm.",
      "Sử dụng lệnh input() để yêu cầu người dùng xác nhận giá trị mới sau mỗi lần thực hiện tính toán."
    ],
    "answer": 0,
    "explain": "Chuẩn thiết kế hàm: nhận dữ liệu qua tham số và trả về dữ liệu qua lệnh return (hàm thuần khiết)."
  }
];
