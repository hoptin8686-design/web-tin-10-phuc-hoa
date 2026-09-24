import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-25: Một số lệnh làm việc với xâu kí tự
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b25-q01",
    "q": "Phương thức s.split() trong Python thực hiện chức năng nào sau đây đối với xâu kí tự s?",
    "options": [
      "Tách xâu s thành một danh sách các từ, phân cách mặc định bởi một hoặc nhiều khoảng trắng.",
      "Nối các phần tử của một danh sách lại thành một xâu duy nhất phân cách bởi dấu phẩy.",
      "Xóa bỏ tất cả các khoảng trắng thừa ở hai đầu của xâu kí tự s trong bộ nhớ máy tính.",
      "Tìm kiếm vị trí xuất hiện đầu tiên của một từ khóa xác định bên trong xâu kí tự s."
    ],
    "answer": 0,
    "explain": "s.split() tách xâu thành danh sách các từ, mặc định tách theo khoảng trắng."
  },
  {
    "id": "b25-q02",
    "q": "Xem xét đoạn mã: s = 'Ha Noi Viet Nam'; a = s.split(). Giá trị của biến a sau khi chạy là:",
    "options": [
      "Danh sách ['Ha', 'Noi', 'Viet', 'Nam'] gồm 4 phần tử từ ngữ được phân tách độc lập.",
      "Danh sách ['H', 'a', ' ', 'N', 'o', 'i', ' ', 'V', 'i', 'e', 't', ' ', 'N', 'a', 'm'].",
      "Xâu kí tự 'HaNoiVietNam' đã bị loại bỏ toàn bộ các dấu khoảng cách ở giữa.",
      "Chương trình báo lỗi vì phương thức split() bắt buộc phải truyền vào tham số phân cách."
    ],
    "answer": 0,
    "explain": "s.split() tách theo khoảng trắng thành list các từ: ['Ha', 'Noi', 'Viet', 'Nam']."
  },
  {
    "id": "b25-q03",
    "q": "Để tách một xâu ngày tháng năm s = '25/12/2026' thành ba thành phần riêng biệt, ta viết lệnh nào?",
    "options": [
      "s.split('/') truyền kí tự gạch chéo làm kí tự phân cách để thu được danh sách các phần tử.",
      "s.split() không truyền tham số để hệ thống tự động suy đoán định dạng ngày tháng.",
      "s.join('/') truyền kí tự gạch chéo làm tham số kết nối các thành phần chuỗi.",
      "s.strip('/') xóa bỏ kí tự gạch chéo ở đầu và cuối của chuỗi ngày tháng năm."
    ],
    "answer": 0,
    "explain": "s.split('/') chỉ định phân tách bằng kí tự '/' -> ['25', '12', '2026']."
  },
  {
    "id": "b25-q04",
    "q": "Phương thức 'sep'.join(ds) trong Python có chức năng nào sau đây?",
    "options": [
      "Nối tất cả các phần tử xâu trong danh sách ds thành một xâu duy nhất ngăn cách bởi 'sep'.",
      "Tách xâu 'sep' thành danh sách các phần tử con dựa trên các khóa có trong danh sách ds.",
      "Xóa bỏ các kí tự 'sep' xuất hiện liên tục trong toàn bộ các phần tử của danh sách ds.",
      "Sắp xếp các chuỗi trong danh sách ds theo thứ tự từ điển dựa trên kí tự phân tách sep."
    ],
    "answer": 0,
    "explain": "'sep'.join(ds) ghép các chuỗi trong danh sách ds thành 1 chuỗi, ngăn cách bởi 'sep'."
  },
  {
    "id": "b25-q05",
    "q": "Kết quả của lệnh '-'.join(['2026', '09', '24']) trong môi trường Python là gì?",
    "options": [
      "Xâu kí tự '2026-09-24' được tạo thành bằng cách nối các chuỗi với dấu gạch ngang ở giữa.",
      "Danh sách ['2026-', '09-', '24-'] có dấu gạch ngang gắn vào đuôi của từng phần tử.",
      "Xâu kí tự '-2026-09-24-' có dấu gạch ngang xuất hiện ở cả hai đầu mút của chuỗi.",
      "Chương trình báo lỗi TypeError vì phương thức join() chỉ gọi được từ đối tượng danh sách."
    ],
    "answer": 0,
    "explain": "'-'.join(...) nối các phần tử lại thành '2026-09-24'."
  },
  {
    "id": "b25-q06",
    "q": "Phương thức s.find(sub) trả về giá trị gì nếu xâu con sub KHÔNG xuất hiện bên trong xâu s?",
    "options": [
      "Giá trị số nguyên -1 báo hiệu không tìm thấy xâu con bên trong xâu mẹ được chỉ định.",
      "Giá trị logic False biểu thị mệnh đề tìm kiếm không thỏa mãn điều kiện thực tế.",
      "Báo lỗi ngoại lệ ValueError: substring not found và dừng ngay việc thực thi chương trình.",
      "Giá trị số nguyên 0 tương ứng với vị trí bắt đầu mặc định của xâu kí tự trong Python."
    ],
    "answer": 0,
    "explain": "s.find(sub) trả về chỉ số đầu tiên tìm thấy, hoặc -1 nếu không tìm thấy."
  },
  {
    "id": "b25-q07",
    "q": "Cho xâu s = 'Lap trinh Python'. Biểu thức s.find('trinh') trả về giá trị số nguyên nào?",
    "options": [
      "Giá trị số nguyên 4 là vị trí chỉ số bắt đầu của từ 'trinh' bên trong xâu s.",
      "Giá trị số nguyên 5 là vị trí thứ tự tự nhiên của kí tự 't' đầu tiên của từ cần tìm.",
      "Giá trị số nguyên 0 vì từ 'trinh' nằm ở nửa đầu tiên của xâu kí tự văn bản.",
      "Giá trị True biểu thị xâu con đã được tìm thấy thành công trong chuỗi mẹ."
    ],
    "answer": 0,
    "explain": "'L'(0), 'a'(1), 'p'(2), ' '(3), 't'(4). s.find('trinh') trả về 4."
  },
  {
    "id": "b25-q08",
    "q": "Phương thức s.replace(old, new) trong Python thực hiện công việc gì đối với xâu kí tự s?",
    "options": [
      "Tạo và trả về một xâu mới trong đó tất cả các xâu con old được thay thế bằng xâu new.",
      "Thay thế trực tiếp tại chỗ các kí tự old thành new làm thay đổi cấu trúc của xâu s gốc.",
      "Chỉ thay thế duy nhất lần xuất hiện cuối cùng của xâu con old thành xâu con new.",
      "Xóa bỏ hoàn toàn xâu con old ra khỏi chuỗi s và trả về số lượng các từ đã bị xóa."
    ],
    "answer": 0,
    "explain": "s.replace(old, new) trả về xâu mới thay thế tất cả chuỗi old thành new (xâu s gốc không đổi)."
  },
  {
    "id": "b25-q09",
    "q": "Xem xét đoạn chương trình sau:\ns = 'banana'\ns1 = s.replace('a', 'o')\nprint(s, s1)\nKết quả in ra là:",
    "options": [
      "In ra 'banana bonono' do xâu s ban đầu không đổi và s1 là xâu mới sau khi thay thế.",
      "In ra 'bonono bonono' do phương thức replace đã làm thay đổi trực tiếp cả xâu s gốc.",
      "In ra 'banana banana' do phương thức replace không tìm thấy kí tự phù hợp để đổi.",
      "Chương trình báo lỗi vì xâu là bất biến nên không thể gọi phương thức replace()."
    ],
    "answer": 0,
    "explain": "Xâu là immutable, nên s vẫn là 'banana', còn s1 nhận kết quả mới là 'bonono'."
  },
  {
    "id": "b25-q10",
    "q": "Để loại bỏ các khoảng trắng thừa ở cả hai đầu của một xâu kí tự s, ta dùng phương thức nào?",
    "options": [
      "Phương thức s.strip() cắt bỏ toàn bộ khoảng trắng ở đầu và cuối của xâu kí tự.",
      "Phương thức s.clean() làm sạch các kí tự thừa và chuẩn hóa định dạng văn bản.",
      "Phương thức s.trim() cắt tỉa các kí tự thừa theo chuẩn quen thuộc của ngôn ngữ Java.",
      "Phương thức s.delete_spaces() xóa tất cả các kí tự khoảng cách có trong xâu."
    ],
    "answer": 0,
    "explain": "s.strip() loại bỏ khoảng trắng ở hai đầu chuỗi (lstrip xóa đầu trái, rstrip xóa đầu phải)."
  },
  {
    "id": "b25-q11",
    "q": "Phương thức s.lower() và s.upper() trong Python lần lượt thực hiện chức năng nào sau đây?",
    "options": [
      "Chuyển toàn bộ xâu s thành chữ thường (lower) và chuyển toàn bộ thành chữ in hoa (upper).",
      "Đếm số lượng chữ cái viết thường và đếm số lượng chữ cái viết hoa hiện có trong xâu.",
      "Chỉ viết hoa chữ cái đầu tiên của xâu và viết thường tất cả các chữ cái còn lại.",
      "Xóa bỏ các chữ cái viết thường và xóa bỏ các chữ cái viết hoa ra khỏi văn bản."
    ],
    "answer": 0,
    "explain": "lower() chuyển toàn bộ thành chữ thường, upper() chuyển thành chữ in hoa."
  },
  {
    "id": "b25-q12",
    "q": "Để đếm số lần xuất hiện của xâu con 'an' trong xâu s = 'banana', ta dùng phương thức nào?",
    "options": [
      "s.count('an') trả về số nguyên 2 là số lần xuất hiện không chồng lấn của xâu con.",
      "s.find_all('an') trả về danh sách các chỉ số mà xâu con xuất hiện trong xâu mẹ.",
      "len(s, 'an') truyền thêm tham số xâu con vào hàm độ dài chuẩn của hệ thống.",
      "s.frequency('an') tính toán tần suất xuất hiện tương đối của cụm từ trong văn bản."
    ],
    "answer": 0,
    "explain": "s.count('an') trả về số lần xuất hiện của 'an' trong 'banana' (có 2 từ 'an')."
  },
  {
    "id": "b25-q13",
    "q": "Cho xâu s = '   Xin chao   '. Sau khi thực hiện lệnh s = s.strip(), độ dài len(s) bằng bao nhiêu?",
    "options": [
      "Độ dài bằng 8 kí tự tương ứng với số kí tự của cụm từ 'Xin chao' (tính cả khoảng trắng giữa).",
      "Độ dài bằng 7 kí tự do dấu khoảng trắng ở giữa hai từ cũng bị loại bỏ hoàn toàn.",
      "Độ dài bằng 14 kí tự giữ nguyên độ dài ban đầu vì xâu có tính bất biến không sửa được.",
      "Độ dài bằng 0 vì lệnh strip() xóa sạch toàn bộ nội dung của xâu có chứa khoảng trắng."
    ],
    "answer": 0,
    "explain": "'Xin chao' có 3 + 1 + 4 = 8 kí tự. strip() chỉ xóa khoảng trắng thừa ở 2 đầu."
  },
  {
    "id": "b25-q14",
    "q": "Phương thức s.startswith(prefix) và s.endswith(suffix) trả về kiểu dữ liệu gì?",
    "options": [
      "Kiểu logic bool (True hoặc False) cho biết xâu có bắt đầu hoặc kết thúc bằng tiền tố/hậu tố đó không.",
      "Kiểu số nguyên int biểu thị vị trí xuất hiện của phần đầu và phần đuôi của chuỗi.",
      "Kiểu xâu kí tự str trích xuất phần tiền tố hoặc hậu tố tìm được trong văn bản.",
      "Kiểu danh sách list chứa các từ ngữ nằm ở phần mở đầu và phần kết thúc của câu."
    ],
    "answer": 0,
    "explain": "startswith() và endswith() trả về True/False (kiểu bool)."
  },
  {
    "id": "b25-q15",
    "q": "Để đếm số lượng từ trong một câu văn bản s nhập vào từ bàn phím, câu lệnh nào sau đây chuẩn nhất?",
    "options": [
      "len(s.split()) tách câu thành danh sách các từ rồi dùng hàm len() để lấy số lượng từ.",
      "s.count(' ') đếm số lượng dấu khoảng trắng rồi tự động gán bằng số lượng từ trong câu.",
      "len(s) lấy độ dài toàn bộ các kí tự trong xâu rồi chia cho số kí tự trung bình của từ.",
      "s.words_count() gọi phương thức tích hợp sẵn trong lớp xử lý ngôn ngữ tự nhiên."
    ],
    "answer": 0,
    "explain": "len(s.split()) là cách chuẩn nhất vì split() tự động xử lý nhiều khoảng trắng liên tiếp và khoảng trắng ở hai đầu."
  },
  {
    "id": "b25-q16",
    "q": "Xem xét đoạn chương trình sau:\nds = ['Nguyen', 'Van', 'A']\nprint(' '.join(ds))\nKết quả hiển thị trên màn hình là gì?",
    "options": [
      "In ra xâu họ tên hoàn chỉnh 'Nguyen Van A' với các từ cách nhau đúng một khoảng trắng.",
      "In ra danh sách dạng mảng ['Nguyen', 'Van', 'A'] giữ nguyên cặp dấu ngoặc vuông.",
      "In ra xâu 'NguyenVanA' không có bất kỳ khoảng cách nào giữa các từ trong câu.",
      "Chương trình báo lỗi vì không thể gọi phương thức join trên một dấu khoảng trắng đơn lẻ."
    ],
    "answer": 0,
    "explain": "' '.join(ds) ghép các phần tử bằng khoảng trắng -> 'Nguyen Van A'."
  }
];
