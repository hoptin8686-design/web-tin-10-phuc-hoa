import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-27: Tham số của hàm
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b27-q01",
    "q": "Khái niệm 'tham số' (parameters) và 'đối số' (arguments) trong Python được phân biệt chính xác như thế nào?",
    "options": [
      "Tham số là biến khai báo trong định nghĩa hàm; đối số là giá trị thực tế truyền vào khi gọi hàm.",
      "Tham số là giá trị thực tế truyền vào khi gọi hàm; đối số là biến khai báo trong định nghĩa hàm.",
      "Cả hai khái niệm đều hoàn toàn đồng nhất và dùng để chỉ giá trị trả về của câu lệnh return.",
      "Tham số chỉ áp dụng cho số nguyên; đối số chỉ áp dụng cho các dữ liệu thuộc kiểu xâu kí tự."
    ],
    "answer": 0,
    "explain": "Tham số (parameter) định nghĩa ở chữ kí hàm (def); đối số (argument) là giá trị truyền vào khi gọi hàm."
  },
  {
    "id": "b27-q02",
    "q": "Cách truyền đối số theo vị trí (positional arguments) trong Python tuân theo quy tắc nào sau đây?",
    "options": [
      "Các đối số được gán tương ứng cho các tham số theo đúng thứ tự xuất hiện từ trái qua phải.",
      "Các đối số được gán dựa trên việc so sánh tên của biến đối số và tên của biến tham số.",
      "Đối số có giá trị lớn hơn luôn được gán cho tham số đứng ở vị trí đầu tiên của hàm.",
      "Thứ tự truyền vào không quan trọng vì Python tự động sắp xếp lại các đối số theo bảng chữ cái."
    ],
    "answer": 0,
    "explain": "Truyền theo vị trí: đối số thứ 1 vào tham số thứ 1, đối số thứ 2 vào tham số thứ 2 theo thứ tự."
  },
  {
    "id": "b27-q03",
    "q": "Cách truyền đối số theo từ khóa (keyword arguments) mang lại ưu điểm nổi bật nào sau đây?",
    "options": [
      "Cho phép truyền đối số không cần theo đúng thứ tự vị trí nhờ chỉ định rõ tên tham số gán giá trị.",
      "Giúp hàm thực thi với tốc độ nhanh gấp đôi so với cách truyền đối số theo vị trí truyền thống.",
      "Tự động ép kiểu dữ liệu của đối số về kiểu dữ liệu số nguyên int để tránh lỗi tràn bộ nhớ.",
      "Bắt buộc người lập trình phải định nghĩa lại toàn bộ cấu trúc thân hàm ở mỗi lần gọi."
    ],
    "answer": 0,
    "explain": "Truyền theo từ khóa (tên=giá_trị) cho phép không cần đúng thứ tự vị trí tham số."
  },
  {
    "id": "b27-q04",
    "q": "Xem xét hàm: def tinh(a, b): return a - b. Lệnh gọi tinh(b=5, a=12) cho kết quả trả về là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 7 vì a nhận giá trị 12 và b nhận giá trị 5 theo đúng tên từ khóa đã chỉ định.",
      "Giá trị số nguyên -7 vì đối số đầu tiên luôn tự động gán cho tham số a bất kể tên từ khóa.",
      "Chương trình báo lỗi SyntaxError vì thứ tự các từ khóa bị đảo lộn so với định nghĩa ban đầu.",
      "Giá trị None do tên từ khóa không được viết theo đúng thứ tự trong bảng chữ cái tiếng Anh."
    ],
    "answer": 0,
    "explain": "Với keyword argument, a=12 và b=5, do đó a - b = 12 - 5 = 7."
  },
  {
    "id": "b27-q05",
    "q": "Tham số mặc định (default parameters) trong định nghĩa hàm của Python có đặc điểm gì?",
    "options": [
      "Là tham số đã được gán sẵn một giá trị ban đầu, nếu khi gọi không truyền đối số thì dùng giá trị đó.",
      "Là tham số bắt buộc người dùng luôn phải cung cấp đối số thì chương trình mới thực hiện được.",
      "Chỉ có thể nhận các giá trị cố định bằng 0 và không thể thay thế bởi giá trị mới khi gọi hàm.",
      "Tự động xóa khỏi danh sách tham số nếu hàm được gọi nhiều hơn 3 lần liên tiếp trong tệp."
    ],
    "answer": 0,
    "explain": "Tham số mặc định có sẵn giá trị, nếu khi gọi không truyền giá trị thì sẽ dùng giá trị mặc định này."
  },
  {
    "id": "b27-q06",
    "q": "Quy tắc bắt buộc về vị trí khi khai báo tham số mặc định trong định nghĩa hàm Python là gì?",
    "options": [
      "Tất cả các tham số có giá trị mặc định bắt buộc phải nằm ở phía sau các tham số không có mặc định.",
      "Tất cả các tham số có giá trị mặc định bắt buộc phải nằm ở phía trước các tham số thông thường.",
      "Các tham số mặc định có thể đặt xen kẽ ở bất kỳ vị trí nào mà không có bất kỳ ràng buộc nào.",
      "Chỉ được phép có duy nhất một tham số mặc định được đặt ở vị trí chính giữa của danh sách."
    ],
    "answer": 0,
    "explain": "Tham số có giá trị mặc định phải nằm sau tất cả các tham số không có giá trị mặc định (non-default)."
  },
  {
    "id": "b27-q07",
    "q": "Định nghĩa hàm nào sau đây vi phạm quy tắc cú pháp của ngôn ngữ lập trình Python?",
    "options": [
      "def tinh(a = 10, b): return a + b vi phạm vì tham số mặc định đứng trước tham số không mặc định.",
      "def tinh(a, b = 10): return a + b hoàn toàn hợp lệ theo chuẩn ngữ pháp của ngôn ngữ Python.",
      "def tinh(a, b, c = 5): return a * b * c hoàn toàn hợp lệ với tham số mặc định ở vị trí cuối.",
      "def tinh(a = 1, b = 2): return a - b hoàn toàn hợp lệ khi tất cả các tham số đều có mặc định."
    ],
    "answer": 0,
    "explain": "def tinh(a=10, b): gây lỗi SyntaxError: non-default argument follows default argument."
  },
  {
    "id": "b27-q08",
    "q": "Xem xét hàm sau:\ndef chao(ten, loi_chao = 'Xin chao'):\n    return loi_chao + ' ' + ten\nLệnh gọi chao('Lan') sẽ trả về kết quả gì?",
    "options": [
      "Xâu kí tự 'Xin chao Lan' do tham số loi_chao tự động lấy giá trị mặc định là 'Xin chao'.",
      "Chương trình báo lỗi TypeError vì người dùng truyền thiếu một đối số so với khai báo hàm.",
      "Xâu kí tự 'Lan Xin chao' do đối số truyền vào bị đảo ngược vị trí gán với tham số mặc định.",
      "Giá trị None vì hàm không thể hoạt động khi thiếu đối số thứ hai trong lời gọi hàm."
    ],
    "answer": 0,
    "explain": "Vì loi_chao có giá trị mặc định 'Xin chao', nên chao('Lan') trả về 'Xin chao Lan'."
  },
  {
    "id": "b27-q09",
    "q": "Vẫn xét hàm chao ở câu trên, lệnh gọi chao('Lan', 'Hello') sẽ trả về kết quả nào sau đây?",
    "options": [
      "Xâu kí tự 'Hello Lan' do đối số 'Hello' đã ghi đè lên giá trị mặc định của tham số loi_chao.",
      "Xâu kí tự 'Xin chao Hello Lan' do Python tự động ghép cả hai giá trị lời chào lại với nhau.",
      "Chương trình báo lỗi vì tham số đã có giá trị mặc định thì không được phép nhận giá trị mới.",
      "Xâu kí tự 'Xin chao Lan' do giá trị mặc định luôn được ưu tiên cao hơn đối số truyền vào."
    ],
    "answer": 0,
    "explain": "Đối số 'Hello' ghi đè giá trị mặc định, nên kết quả là 'Hello Lan'."
  },
  {
    "id": "b27-q10",
    "q": "Trong một lời gọi hàm kết hợp cả đối số vị trí và đối số từ khóa, quy tắc sắp xếp nào là bắt buộc?",
    "options": [
      "Các đối số truyền theo vị trí bắt buộc phải đứng trước các đối số truyền theo từ khóa.",
      "Các đối số truyền theo từ khóa bắt buộc phải đứng trước các đối số truyền theo vị trí.",
      "Có thể đặt lẫn lộn đối số từ khóa và đối số vị trí mà không gây ra bất kỳ cảnh báo lỗi nào.",
      "Chỉ được phép dùng hoặc toàn bộ đối số vị trí hoặc toàn bộ đối số từ khóa trong một lần gọi."
    ],
    "answer": 0,
    "explain": "Quy tắc: Positional arguments must appear before keyword arguments. (Vị trí trước, từ khóa sau)."
  },
  {
    "id": "b27-q11",
    "q": "Khi truyền một danh sách (list) vào làm đối số của hàm và bên trong hàm ta thay đổi phần tử của danh sách đó, điều gì xảy ra?",
    "options": [
      "Danh sách gốc bên ngoài hàm cũng bị thay đổi theo vì danh sách được truyền theo cơ chế tham chiếu.",
      "Danh sách gốc bên ngoài hoàn toàn không thay đổi vì Python luôn tạo một bản sao độc lập.",
      "Chương trình báo lỗi TypeError vì danh sách không được phép truyền vào làm tham số của hàm.",
      "Hàm tự động chuyển danh sách thành xâu kí tự và không thể truy cập lại các phần tử ban đầu."
    ],
    "answer": 0,
    "explain": "List là mutable và được truyền qua tham chiếu đối tượng, sửa list trong hàm sẽ đổi list bên ngoài."
  },
  {
    "id": "b27-q12",
    "q": "Xem xét đoạn mã sau:\ndef tang(a):\n    a.append(100)\nds = [1, 2]\ntang(ds)\nprint(ds)\nKết quả in ra là:",
    "options": [
      "In ra danh sách [1, 2, 100] vì phương thức append đã làm thay đổi trực tiếp danh sách ds gốc.",
      "In ra danh sách [1, 2] vì mọi thay đổi bên trong hàm chỉ có tác dụng cục bộ trong thân hàm.",
      "Chương trình báo lỗi vì hàm tang không có câu lệnh return để trả danh sách mới ra ngoài.",
      "In ra giá trị None do danh sách bị hủy sau khi thực hiện xong các thao tác trong hàm."
    ],
    "answer": 0,
    "explain": "a và ds cùng trỏ vào 1 list, append(100) làm thay đổi ds thành [1, 2, 100]."
  },
  {
    "id": "b27-q13",
    "q": "Xem xét đoạn mã sau đối với số nguyên:\ndef doi(x):\n    x = x + 10\nn = 5\ndoi(n)\nprint(n)\nKết quả in ra là:",
    "options": [
      "In ra số nguyên 5 vì số nguyên là kiểu bất biến (immutable), biến n bên ngoài không bị thay đổi.",
      "In ra số nguyên 15 vì giá trị của biến n được cập nhật tăng thêm 10 sau khi gọi hàm doi.",
      "Chương trình báo lỗi vì không thể thực hiện phép gán cho biến x bên trong thân hàm.",
      "In ra số nguyên 10 vì biến n bị ghi đè bởi giá trị gia số được cộng thêm trong hàm."
    ],
    "answer": 0,
    "explain": "Số nguyên là immutable, x = x + 10 tạo biến cục bộ x mới, biến n bên ngoài vẫn là 5."
  },
  {
    "id": "b27-q14",
    "q": "Kí hiệu dấu sao *args trước một tham số trong định nghĩa hàm Python có ý nghĩa gì?",
    "options": [
      "Cho phép hàm nhận vào một số lượng tùy ý các đối số vị trí dưới dạng một bộ (tuple).",
      "Bắt buộc người dùng phải truyền vào đối số là một phép tính nhân giữa hai đại lượng số học.",
      "Chỉ định tham số đó là một con trỏ trực tiếp trỏ vào địa chỉ vật lý của bộ nhớ RAM.",
      "Tự động nhân đôi giá trị của đối số được truyền vào trước khi thực thi thân hàm."
    ],
    "answer": 0,
    "explain": "*args cho phép hàm nhận số lượng tùy ý các đối số vị trí (gom lại thành một tuple)."
  },
  {
    "id": "b27-q15",
    "q": "Hàm print() có sẵn trong Python có các tham số mặc định sep và end, chúng là ví dụ điển hình của loại tham số nào?",
    "options": [
      "Tham số có giá trị mặc định (sep=' ' và end='\\n') có thể tùy biến thông qua truyền từ khóa.",
      "Tham số bắt buộc vị trí mà người dùng bắt buộc phải gõ vào ở mỗi lần sử dụng hàm print.",
      "Tham số ẩn của hệ điều hành mà người lập trình tuyệt đối không được phép chỉnh sửa giá trị.",
      "Các biến toàn cục dùng để lưu trữ trạng thái hiển thị màu sắc trên màn hình thiết bị."
    ],
    "answer": 0,
    "explain": "sep=' ' và end='\\n' là các tham số mặc định (default/keyword parameters) của hàm print()."
  },
  {
    "id": "b27-q16",
    "q": "Để viết hàm tính tiền cước taxi với giá mỗi km mặc định là 10000đ nhưng có thể thay đổi tùy loại xe, định nghĩa hàm nào sau đây là chuẩn?",
    "options": [
      "def tinh_tien(so_km, gia_km = 10000): kết hợp tham số bắt buộc và tham số có giá trị mặc định.",
      "def tinh_tien(gia_km = 10000, so_km): đặt tham số mặc định lên đầu danh sách tham số.",
      "def tinh_tien(so_km = gia_km = 10000): gán đồng thời giá trị mặc định cho cả hai tham số.",
      "def tinh_tien(so_km; gia_km: 10000): dùng dấu chấm phẩy và hai chấm theo chuẩn Pascal."
    ],
    "answer": 0,
    "explain": "def tinh_tien(so_km, gia_km=10000): tham số mặc định gia_km đứng sau tham số bắt buộc so_km."
  }
];
