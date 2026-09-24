import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-29: Nhận biết lỗi chương trình
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b29-q01",
    "q": "Trong quá trình lập trình bằng Python, các lỗi chương trình thường được phân thành ba loại cơ bản nào sau đây?",
    "options": [
      "Lỗi cú pháp (SyntaxError), lỗi ngoại lệ khi chạy (RuntimeError) và lỗi ngữ nghĩa (LogicError).",
      "Lỗi phần cứng vi xử lý, lỗi hệ điều hành quá tải và lỗi đường truyền cáp quang mạng.",
      "Lỗi bộ nhớ RAM, lỗi trình điều khiển màn hình đồ họa và lỗi bàn phím nhập liệu.",
      "Lỗi bản quyền phần mềm, lỗi virus tấn công tệp nguồn và lỗi xung đột địa chỉ IP."
    ],
    "answer": 0,
    "explain": "Ba loại lỗi cơ bản trong lập trình: Lỗi cú pháp (Syntax), Lỗi khi chạy (Runtime/Exception) và Lỗi logic (Ngữ nghĩa)."
  },
  {
    "id": "b29-q02",
    "q": "Lỗi cú pháp (SyntaxError) trong Python là loại lỗi có đặc điểm phát hiện vào thời điểm nào?",
    "options": [
      "Được phát hiện ngay trước khi chạy, khi chương trình dịch phân tích ngữ pháp dòng lệnh.",
      "Chỉ phát hiện sau khi chương trình đã chạy hoàn thành và xuất kết quả ra màn hình.",
      "Chỉ phát hiện khi người dùng cố tình nhập số thực vào một biến kiểu số nguyên.",
      "Được phát hiện bởi bộ phận giám sát an ninh mạng khi tệp nguồn được gửi đi."
    ],
    "answer": 0,
    "explain": "Lỗi cú pháp vi phạm quy tắc ngữ pháp của Python và được phát hiện ngay ở giai đoạn phân tích cú pháp trước khi chạy."
  },
  {
    "id": "b29-q03",
    "q": "Trường hợp nào sau đây là một ví dụ điển hình của lỗi cú pháp (SyntaxError) trong Python?",
    "options": [
      "Quên dấu hai chấm : ở cuối câu lệnh if x > 0 hoặc viết sai chính tả từ khóa hệ thống.",
      "Thực hiện phép chia một số nguyên cho số 0 trong một biểu thức toán học khi đang chạy.",
      "Truy cập vào một phần tử có chỉ số a[10] khi danh sách a chỉ có 3 phần tử hợp lệ.",
      "Tính diện tích hình chữ nhật bằng công thức chu vi làm kết quả hiển thị bị sai lệch."
    ],
    "answer": 0,
    "explain": "Quên dấu hai chấm sau if là lỗi cú pháp SyntaxError kinh điển."
  },
  {
    "id": "b29-q04",
    "q": "Lỗi ngoại lệ khi chạy (Runtime Error / Exceptions) là loại lỗi phát sinh trong hoàn cảnh nào?",
    "options": [
      "Xảy ra khi câu lệnh đúng cú pháp nhưng trong quá trình chạy phát sinh thao tác không hợp lệ.",
      "Xảy ra ngay lúc mở tệp mã nguồn do người dùng quên không cài đặt môi trường Python.",
      "Xảy ra khi người lập trình cố tình đặt tên biến bằng tiếng Việt không có dấu gạch dưới.",
      "Chỉ xảy ra khi máy tính bị mất kết nối Internet trong lúc thực hiện các phép cộng số."
    ],
    "answer": 0,
    "explain": "Runtime error xảy ra khi chương trình đang chạy gặp tình huống bất hợp lệ (chia 0, sai kiểu, tràn chỉ số...)."
  },
  {
    "id": "b29-q05",
    "q": "Khi thực hiện phép tính 10 / 0 trong Python, chương trình sẽ ném ra ngoại lệ cụ thể nào sau đây?",
    "options": [
      "Ngoại lệ ZeroDivisionError: division by zero thông báo không thể chia cho số không.",
      "Ngoại lệ ValueError: invalid value thông báo giá trị của mẫu số không phải số dương.",
      "Ngoại lệ TypeError: unsupported operand thông báo kiểu dữ liệu không hỗ trợ phép chia.",
      "Ngoại lệ IndexError: index out of range thông báo chỉ số phép chia vượt giới hạn."
    ],
    "answer": 0,
    "explain": "Chia cho 0 sinh ngoại lệ ZeroDivisionError."
  },
  {
    "id": "b29-q06",
    "q": "Lỗi NameError: name 'x' is not defined trong Python xuất hiện do nguyên nhân chủ yếu nào?",
    "options": [
      "Sử dụng biến x trong một biểu thức nhưng biến x chưa từng được gán giá trị trước đó.",
      "Tên biến x quá ngắn không đáp ứng được tiêu chuẩn bảo mật dữ liệu của chương trình.",
      "Biến x được gán một xâu kí tự nhưng lại bị người dùng in ra màn hình quá nhiều lần.",
      "Biến x trùng tên với tên của một tệp hình ảnh có sẵn trên màn hình máy tính để bàn."
    ],
    "answer": 0,
    "explain": "NameError xảy ra khi sử dụng một biến/tên hàm chưa được định nghĩa hoặc gán giá trị."
  },
  {
    "id": "b29-q07",
    "q": "Khi chạy lệnh int('abc'), chương trình Python sẽ báo lỗi ngoại lệ nào sau đây?",
    "options": [
      "Lỗi ValueError: invalid literal for int() vì chuỗi 'abc' không thể chuyển đổi thành số.",
      "Lỗi TypeError: unsupported conversion vì hàm int không nhận đối số kiểu chuỗi văn bản.",
      "Lỗi SyntaxError: invalid syntax vì hàm int chỉ chấp nhận các xâu kí tự viết hoa.",
      "Lỗi IndexError: string index out of range vì độ dài của xâu quá ngắn so với số nguyên."
    ],
    "answer": 0,
    "explain": "int('abc') gây ValueError vì 'abc' không phải là biểu diễn số nguyên hợp lệ."
  },
  {
    "id": "b29-q08",
    "q": "Lỗi TypeError: can only concatenate str (not 'int') to str xuất hiện trong tình huống nào?",
    "options": [
      "Cố tình thực hiện phép cộng ghép xâu giữa một xâu kí tự và một số nguyên mà chưa ép kiểu.",
      "Cố tình chia một số nguyên cho một số thực trong biểu thức tính toán diện tích hình thang.",
      "Cố tình in một danh sách ra màn hình thông qua lời gọi hàm print với tham số sep mặc định.",
      "Cố tình nhập dữ liệu từ bàn phím bằng hàm input() mà không có dòng thông báo nhắc nhở."
    ],
    "answer": 0,
    "explain": "'Tuổi: ' + 16 gây lỗi TypeError vì không thể nối trực tiếp chuỗi với số nguyên."
  },
  {
    "id": "b29-q09",
    "q": "Lỗi ngữ nghĩa hay lỗi logic (Logic Error) trong lập trình có đặc điểm nguy hiểm nào sau đây?",
    "options": [
      "Chương trình chạy bình thường không báo lỗi nhưng kết quả đầu ra bị sai lệch so với yêu cầu.",
      "Làm cho máy tính bị sập nguồn đột ngột ngay sau khi chương trình bắt đầu khởi động.",
      "Làm cho tất cả các tệp tin trên đĩa cứng tự động bị khóa mã hóa dữ liệu hàng loạt.",
      "Chương trình dịch từ chối biên dịch và liên tục nhấp nháy đèn cảnh báo trên bàn phím."
    ],
    "answer": 0,
    "explain": "Lỗi logic không làm dừng chương trình, không báo lỗi ngoại lệ nhưng tính toán ra kết quả sai lệch so với thực tế."
  },
  {
    "id": "b29-q10",
    "q": "Tình huống nào sau đây là một ví dụ điển hình của lỗi logic trong chương trình Python?",
    "options": [
      "Yêu cầu tính diện tích hình chữ nhật nhưng viết công thức dt = dai + rong thay vì dai * rong.",
      "Viết lệnh if x > 5 thiếu dấu hai chấm ở cuối dòng khiến chương trình không thể dịch được.",
      "Truy cập vào phần tử a[5] của một danh sách chỉ có 3 phần tử gây ra lỗi IndexError.",
      "Gọi hàm int('12.3') để ép kiểu trực tiếp chuỗi số thực làm xuất hiện lỗi ValueError."
    ],
    "answer": 0,
    "explain": "Viết nhầm công thức toán học (dt = dai + rong) là lỗi logic: chương trình chạy xong nhưng kết quả sai."
  },
  {
    "id": "b29-q11",
    "q": "Lỗi IndentationError trong Python thuộc nhóm lỗi nào và thường xảy ra do nguyên nhân gì?",
    "options": [
      "Thuộc nhóm lỗi cú pháp, xảy ra do người lập trình thụt lề các dòng lệnh không đúng quy định.",
      "Thuộc nhóm lỗi ngoại lệ khi chạy, xảy ra khi bộ nhớ đệm bàn phím bị tràn kí tự nhập.",
      "Thuộc nhóm lỗi logic, xảy ra khi thuật toán sắp xếp mảng bị sai chiều tăng giảm.",
      "Thuộc nhóm lỗi phần cứng, xảy ra khi phím cách Spacebar hoặc phím Tab bị kẹt cơ học."
    ],
    "answer": 0,
    "explain": "IndentationError là lỗi thụt lề, một dạng đặc thù của lỗi cú pháp trong Python."
  },
  {
    "id": "b29-q12",
    "q": "Khi chạy đoạn mã sau, lỗi nào sẽ xuất hiện?\na = [10, 20, 30]\nprint(a[3])",
    "options": [
      "Lỗi IndexError: list index out of range vì danh sách chỉ có các chỉ số hợp lệ là 0, 1, 2.",
      "Lỗi KeyError: 3 not found vì số 3 không tồn tại trong tập hợp các khóa của từ điển.",
      "Lỗi ValueError: invalid element vì phần tử thứ tư chưa được khởi tạo giá trị ban đầu.",
      "Chương trình in ra giá trị None một cách tự động mà không phát sinh bất kỳ lỗi nào."
    ],
    "answer": 0,
    "explain": "Danh sách 3 phần tử có chỉ số 0, 1, 2. Truy cập a[3] gây IndexError."
  },
  {
    "id": "b29-q13",
    "q": "Thông báo lỗi (Traceback) hiển thị trên màn hình IDLE khi xảy ra lỗi ngoại lệ cung cấp thông tin quý giá nào?",
    "options": [
      "Tên tệp, số thứ tự dòng xảy ra lỗi, tên loại ngoại lệ và mô tả nguyên nhân gây lỗi chi tiết.",
      "Địa chỉ IP của người dùng và mật khẩu tài khoản quản trị hệ thống phòng thực hành.",
      "Số lần nhấn phím chuột của học sinh kể từ khi bắt đầu mở cửa sổ soạn thảo chương trình.",
      "Mã nhị phân tương ứng của toàn bộ các phần mềm đang chạy ngầm trong hệ điều hành."
    ],
    "answer": 0,
    "explain": "Traceback chỉ rõ đường dẫn file, số dòng gây lỗi, loại lỗi và thông điệp giải thích."
  },
  {
    "id": "b29-q14",
    "q": "Xem xét đoạn chương trình sau:\nfor i in range(1, 10)\n    print(i)\nLỗi xuất hiện khi thực hiện chạy chương trình là gì?",
    "options": [
      "Lỗi SyntaxError: expected ':' do quên dấu hai chấm ở cuối dòng khai báo vòng lặp for.",
      "Lỗi NameError: name 'i' is not defined do biến đếm i chưa được gán giá trị trước đó.",
      "Lỗi TypeError: range expected 1 argument do hàm range không nhận hai tham số.",
      "Lỗi IndentationError do lệnh print được thụt lề quá sâu so với quy định chuẩn."
    ],
    "answer": 0,
    "explain": "Thiếu dấu : ở cuối dòng for gây lỗi cú pháp SyntaxError."
  },
  {
    "id": "b29-q15",
    "q": "Loại lỗi nào trong ba loại lỗi lập trình thường khó phát hiện và khắc phục nhất đối với người lập trình?",
    "options": [
      "Lỗi logic, vì chương trình không có thông báo lỗi từ trình dịch mà phải kiểm tra kết quả tính toán.",
      "Lỗi cú pháp, vì trình thông dịch từ chối đưa ra vị trí dòng lệnh xảy ra sai sót ngữ pháp.",
      "Lỗi khi chạy, vì hệ thống luôn tự động đóng cửa sổ chương trình mà không lưu mã nguồn.",
      "Cả ba loại lỗi đều có mức độ khó tìm kiếm và sửa chữa hoàn toàn ngang nhau trong mọi tình huống."
    ],
    "answer": 0,
    "explain": "Lỗi logic khó phát hiện nhất vì máy tính không báo lỗi, đòi hỏi phải thiết kế bộ test để kiểm tra kết quả."
  },
  {
    "id": "b29-q16",
    "q": "Để giảm thiểu các lỗi ngoại lệ do người dùng nhập dữ liệu sai kiểu (ví dụ nhập chữ vào ô số), giải pháp lập trình là gì?",
    "options": [
      "Sử dụng khối cấu trúc xử lý ngoại lệ try - except để bắt lỗi và đưa ra thông báo hướng dẫn.",
      "Cấm hoàn toàn người dùng không được sử dụng bàn phím khi thao tác với chương trình.",
      "Chuyển đổi toàn bộ mã nguồn chương trình sang ngôn ngữ máy nhị phân trước khi chạy.",
      "Tự động ngắt nguồn điện của máy tính nếu phát hiện có kí tự chữ cái trong luồng nhập."
    ],
    "answer": 0,
    "explain": "Cấu trúc try - except dùng để bắt và xử lý ngoại lệ (Exception Handling) một cách êm ái."
  }
];
