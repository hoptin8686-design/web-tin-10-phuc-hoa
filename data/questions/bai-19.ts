import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-19: Câu lệnh điều kiện if
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b19-q01",
    "q": "Cấu trúc rẽ nhánh trong ngôn ngữ lập trình được sử dụng nhằm mục đích chính nào sau đây?",
    "options": [
      "Cho phép chương trình lựa chọn thực hiện các khối lệnh khác nhau tùy thuộc vào điều kiện kiểm tra.",
      "Lặp đi lặp lại một đoạn chương trình với số lần xác định trước cho đến khi thỏa mãn yêu cầu.",
      "Định nghĩa các hàm xử lý dữ liệu phức tạp nhằm tối ưu hóa việc phân bổ bộ nhớ của máy tính.",
      "Khai báo danh sách các biến toàn cục cần sử dụng trong suốt quá trình chạy của chương trình."
    ],
    "answer": 0,
    "explain": "Cấu trúc rẽ nhánh dùng để lựa chọn khối lệnh thực thi căn cứ vào điều kiện đúng hay sai."
  },
  {
    "id": "b19-q02",
    "q": "Cú pháp của câu lệnh rẽ nhánh dạng thiếu trong ngôn ngữ lập trình Python được viết như thế nào?",
    "options": [
      "if <điều kiện>: theo sau là khối lệnh được thụt lề vào trong so với dòng chứa từ khóa if.",
      "if <điều kiện> then theo sau là khối lệnh bắt đầu bằng từ khóa begin và kết thúc bằng end.",
      "if (<điều kiện>) { khối lệnh thực thi đặt trọn vẹn trong cặp dấu ngoặc nhọn theo chuẩn C }.",
      "case <điều kiện> of theo sau là danh sách các trường hợp được đánh số thứ tự từ trên xuống."
    ],
    "answer": 0,
    "explain": "Cú pháp rẽ nhánh dạng thiếu: if <điều kiện>:\n    <khối lệnh>"
  },
  {
    "id": "b19-q03",
    "q": "Dấu kí tự nào bắt buộc phải có ở cuối dòng chứa mệnh đề if hoặc else trong câu lệnh điều kiện Python?",
    "options": [
      "Dấu hai chấm : báo hiệu chuẩn bị bắt đầu một khối lệnh con thụt lề kế tiếp trong chương trình.",
      "Dấu chấm phẩy ; báo hiệu kết thúc một câu lệnh đơn lẻ theo quy ước của các ngôn ngữ biên dịch.",
      "Dấu chấm cảm ! biểu thị tính khẳng định bắt buộc của điều kiện logic được kiểm tra ở vế trước.",
      "Dấu mũi tên -> chỉ hướng rẽ nhánh luồng điều khiển của bộ vi xử lý sang dòng mã tương ứng."
    ],
    "answer": 0,
    "explain": "Dấu hai chấm : là bắt buộc sau mệnh đề if, elif, else trong Python."
  },
  {
    "id": "b19-q04",
    "q": "Quy tắc thụt lề (indentation) trong Python đóng vai trò quan trọng như thế nào đối với các khối lệnh?",
    "options": [
      "Là quy định ngữ pháp bắt buộc dùng để xác định phạm vi các câu lệnh thuộc về một khối lệnh.",
      "Chỉ nhằm mục đích trang trí cho mã nguồn đẹp mắt chứ hoàn toàn không ảnh hưởng đến việc thực thi.",
      "Người lập trình có thể tùy tiện thụt dòng tự do mà trình thông dịch vẫn tự hiểu đúng cấu trúc.",
      "Chỉ bắt buộc áp dụng khi viết mã trên hệ điều hành Linux còn trên máy Windows thì tùy ý."
    ],
    "answer": 0,
    "explain": "Thụt lề (thường là 4 dấu cách) là bắt buộc trong Python để xác định khối lệnh (block)."
  },
  {
    "id": "b19-q05",
    "q": "Nếu người lập trình quên không thụt lề khối lệnh bên dưới mệnh đề if trong Python, trình thông dịch sẽ báo lỗi gì?",
    "options": [
      "Báo lỗi IndentationError: expected an indented block chỉ rõ vi phạm quy tắc thụt lề khối mã.",
      "Báo lỗi SyntaxError: invalid syntax chỉ rõ thiếu dấu đóng mở ngoặc nhọn bao bọc khối lệnh.",
      "Báo lỗi NameError: name is not defined chỉ rõ biến điều kiện chưa được khởi tạo giá trị ban đầu.",
      "Báo lỗi TypeError: unsupported operand type chỉ rõ sai lệch kiểu dữ liệu trong phép so sánh."
    ],
    "answer": 0,
    "explain": "Quên thụt lề khối lệnh sau if sẽ sinh lỗi IndentationError."
  },
  {
    "id": "b19-q06",
    "q": "Trong câu lệnh rẽ nhánh dạng đủ if - else, khối lệnh bên dưới else sẽ được thực thi khi nào?",
    "options": [
      "Khi điều kiện logic sau mệnh đề if nhận giá trị False (tức là điều kiện kiểm tra không thỏa mãn).",
      "Khi điều kiện logic sau mệnh đề if nhận giá trị True (tức là điều kiện kiểm tra thỏa mãn tốt).",
      "Được thực thi đồng thời cùng với khối lệnh của if bất kể điều kiện đúng hay sai trong thực tế.",
      "Chỉ được thực thi khi hệ thống xảy ra sự cố tràn bộ nhớ hoặc lỗi chia cho số 0 đột ngột."
    ],
    "answer": 0,
    "explain": "Khối lệnh else được thực thi khi điều kiện của if là False."
  },
  {
    "id": "b19-q07",
    "q": "Để kiểm tra nhiều trường hợp điều kiện loại trừ liên tiếp nhau, Python cung cấp từ khóa nào sau đây?",
    "options": [
      "Từ khóa 'elif' là cách viết tắt kết hợp giữa else và if giúp cấu trúc rẽ nhánh gọn gàng sáng sủa.",
      "Từ khóa 'elseif' viết liền theo quy ước ngữ pháp quen thuộc của ngôn ngữ Visual Basic.",
      "Từ khóa 'then' dùng để chuyển tiếp giữa điều kiện kiểm tra và khối lệnh cần được thực thi.",
      "Từ khóa 'switch' dùng để mở bảng chọn đa nhánh dựa trên giá trị của một biến định danh số."
    ],
    "answer": 0,
    "explain": "elif (viết tắt của else if) dùng cho cấu trúc rẽ nhánh nhiều trường hợp trong Python."
  },
  {
    "id": "b19-q08",
    "q": "Xem xét đoạn mã sau:\nx = 10\nif x % 2 == 0:\n    print('Chẵn')\nelse:\n    print('Lẻ')\nKết quả in ra là gì?",
    "options": [
      "In ra màn hình thông báo 'Chẵn' vì biểu thức 10 % 2 == 0 cho kết quả là True.",
      "In ra màn hình thông báo 'Lẻ' vì phép chia 10 cho 2 có số dư khác không theo logic.",
      "In ra cả hai dòng 'Chẵn' và 'Lẻ' liên tiếp trên hai dòng màn hình dòng lệnh Shell.",
      "Chương trình báo lỗi vì không được sử dụng toán tử phần trăm % bên trong mệnh đề if."
    ],
    "answer": 0,
    "explain": "10 % 2 = 0, điều kiện 0 == 0 là True nên in ra 'Chẵn'."
  },
  {
    "id": "b19-q09",
    "q": "Xem xét đoạn chương trình sau:\ndiem = 7.5\nif diem >= 8.0:\n    print('Giỏi')\nelif diem >= 6.5:\n    print('Khá')\nelse:\n    print('Đạt')\nKết quả in ra là:",
    "options": [
      "In ra màn hình chữ 'Khá' vì điều kiện đầu tiên sai nhưng điều kiện thứ hai diem >= 6.5 đúng.",
      "In ra màn hình chữ 'Giỏi' vì điểm 7.5 đã vượt ngưỡng yêu cầu tối thiểu của học lực khá.",
      "In ra màn hình chữ 'Đạt' vì điểm 7.5 không đạt mức 8.0 theo đánh giá chung của hệ thống.",
      "In ra cả hai chữ 'Khá' và 'Đạt' do các khối lệnh bên dưới đều thỏa mãn điều kiện lớn hơn."
    ],
    "answer": 0,
    "explain": "diem >= 8.0 là False; elif diem >= 6.5 (7.5 >= 6.5) là True -> in 'Khá'."
  },
  {
    "id": "b19-q10",
    "q": "Câu lệnh điều kiện lồng nhau (nested if) trong Python được hiểu chính xác nhất là gì?",
    "options": [
      "Là câu lệnh điều kiện if được đặt bên trong khối lệnh của một câu lệnh điều kiện if khác.",
      "Là việc viết nhiều câu lệnh if nối tiếp nhau độc lập trên cùng một dòng lệnh cách nhau bởi phẩy.",
      "Là câu lệnh if có chứa nhiều biểu thức quan hệ kết hợp bởi các toán tử logic and và or.",
      "Là cấu trúc lặp đi lặp lại câu lệnh if cho đến khi người dùng thỏa mãn điều kiện đầu vào."
    ],
    "answer": 0,
    "explain": "Câu lệnh điều kiện lồng nhau là câu lệnh if nằm trong thân của một câu lệnh if khác."
  },
  {
    "id": "b19-q11",
    "q": "Điều kiện nào sau đây trong Python kiểm tra chính xác số nguyên n là số dương và chia hết cho 3?",
    "options": [
      "Biểu thức (n > 0) and (n % 3 == 0) kết hợp phép so sánh dương và phép chia lấy dư bằng 0.",
      "Biểu thức (n > 0) or (n % 3 == 0) chỉ cần một trong hai điều kiện đúng là chấp nhận số đó.",
      "Biểu thức (n > 0) and (n // 3 == 0) kiểm tra thương nguyên của phép chia có bằng 0 hay không.",
      "Biểu thức not (n <= 0) or (n % 3 != 0) phủ định số âm kết hợp với điều kiện chia không hết."
    ],
    "answer": 0,
    "explain": "n > 0 kiểm tra số dương, n % 3 == 0 kiểm tra chia hết cho 3, kết hợp bằng and."
  },
  {
    "id": "b19-q12",
    "q": "Cho đoạn mã: a = 5; b = 8. Câu lệnh if a > b: max = a; else: max = b khi chạy sẽ xuất hiện hiện tượng gì?",
    "options": [
      "Báo lỗi cú pháp SyntaxError vì Python không cho phép đặt mệnh đề else ngay sau dấu chấm phẩy.",
      "Chương trình chạy bình thường và gán giá trị 8 cho biến max theo đúng thuật toán so sánh.",
      "Chương trình tự động bỏ qua nhánh else và gán giá trị 5 cho biến max một cách mặc định.",
      "Hệ thống cảnh báo lỗi logic và yêu cầu chuyển sang sử dụng hàm max(a, b) có sẵn trong thư viện."
    ],
    "answer": 0,
    "explain": "Trong Python, mệnh đề else phải xuống dòng và có dấu hai chấm :, không viết sau dấu chấm phẩy."
  },
  {
    "id": "b19-q13",
    "q": "Đoạn mã sau thực hiện công việc gì?\nif a > b:\n    t = a\n    a = b\n    b = t",
    "options": [
      "Sắp xếp hai biến a và b theo thứ tự không giảm (tăng dần) bằng cách hoán đổi nếu a lớn hơn b.",
      "Tìm giá trị lớn nhất trong hai số a và b rồi lưu trữ giá trị đó vào biến trung gian t tạm thời.",
      "Kiểm tra xem hai biến a và b có bằng nhau hay không rồi đưa ra thông báo phù hợp cho người dùng.",
      "Gán giá trị của biến a cho biến b và xóa bỏ hoàn toàn giá trị cũ của biến a khỏi bộ nhớ máy tính."
    ],
    "answer": 0,
    "explain": "Nếu a > b thì đổi chỗ a và b, đưa số nhỏ hơn về a, số lớn hơn về b (sắp xếp tăng dần)."
  },
  {
    "id": "b19-q14",
    "q": "Xem xét đoạn chương trình sau:\nx = -5\nif x > 0:\n    print('Dương')\nprint('Kết thúc')\nKết quả in ra màn hình là gì?",
    "options": [
      "Chỉ in ra một dòng duy nhất là 'Kết thúc' vì khối lệnh print('Dương') bị bỏ qua do điều kiện sai.",
      "In ra cả hai dòng 'Dương' và 'Kết thúc' trên hai hàng màn hình Shell hiển thị liên tiếp.",
      "Không in ra bất kỳ thông điệp nào do điều kiện của câu lệnh if kiểm tra không thỏa mãn.",
      "Chương trình báo lỗi vì câu lệnh if dạng thiếu bắt buộc phải có nhánh else đi kèm phía sau."
    ],
    "answer": 0,
    "explain": "x = -5 > 0 là False, bỏ qua dòng if. Dòng print('Kết thúc') không bị thụt lề nên luôn chạy."
  },
  {
    "id": "b19-q15",
    "q": "Một năm dương lịch N được gọi là năm nhuận nếu thỏa mãn điều kiện nào sau đây trong Python?",
    "options": [
      "(N % 400 == 0) or ((N % 4 == 0) and (N % 100 != 0)) chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết 100.",
      "(N % 4 == 0) or (N % 100 == 0) chỉ cần chia hết cho 4 hoặc chia hết cho 100 là năm nhuận.",
      "(N % 4 == 0) and (N % 400 == 0) đồng thời chia hết cho cả 4 và 400 trong mọi trường hợp kiểm tra.",
      "(N % 4 == 0) and (N % 100 == 0) chia hết cho 4 và bắt buộc phải chia hết cho cả 100 theo lịch."
    ],
    "answer": 0,
    "explain": "Quy tắc năm nhuận: chia hết cho 400 HOẶC (chia hết cho 4 và không chia hết cho 100)."
  },
  {
    "id": "b19-q16",
    "q": "Bạn Lan muốn viết chương trình tính cước phí xe taxi: Giá mở cửa cho km đầu tiên là 12000đ, mỗi km tiếp theo giá 10000đ. Với quãng đường s (km), câu lệnh tính cước phi nào sau đây đúng?",
    "options": [
      "phi = 12000 if s <= 1 else 12000 + (s - 1) * 10000 sử dụng biểu thức điều kiện ngắn gọn của Python.",
      "phi = 12000 + s * 10000 áp dụng chung cho mọi quãng đường s mà không cần xét trường hợp km đầu.",
      "phi = s * 12000 if s > 1 else 10000 nhân trực tiếp toàn bộ quãng đường với giá mở cửa của xe.",
      "phi = (s - 1) * 12000 + 10000 tính giảm trừ một km ở giá mở cửa và cộng thêm phí phát sinh sau."
    ],
    "answer": 0,
    "explain": "Nếu s <= 1 cước là 12000; nếu s > 1 cước là 12000 + (s - 1) * 10000."
  }
];
