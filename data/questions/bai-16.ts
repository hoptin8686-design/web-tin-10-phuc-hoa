import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-16: Ngôn ngữ lập trình bậc cao và Python
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b16-q01",
    "q": "Ngôn ngữ lập trình bậc cao là ngôn ngữ có đặc điểm nổi bật nào sau đây?",
    "options": [
      "Gần với ngôn ngữ tự nhiên của con người, có tính độc lập cao với phần cứng máy tính.",
      "Được cấu tạo hoàn toàn bởi các dãy bit nhị phân 0 và 1 mà máy tính hiểu ngay được.",
      "Sử dụng các từ viết tắt tiếng Anh gắn chặt với vi xử lý cụ thể để tối ưu phần cứng.",
      "Chỉ chạy trực tiếp trên bộ vi xử lý máy tính mà hoàn toàn không cần qua trình dịch."
    ],
    "answer": 0,
    "explain": "Ngôn ngữ bậc cao có cú pháp gần với tiếng Anh tự nhiên, độc lập phần cứng, cần trình dịch sang ngôn ngữ máy."
  },
  {
    "id": "b16-q02",
    "q": "Ngôn ngữ lập trình Python được phát triển ban đầu bởi ai và ra mắt lần đầu vào năm nào?",
    "options": [
      "Guido van Rossum phát triển và chính thức phát hành phiên bản đầu tiên vào năm 1991.",
      "Dennis Ritchie phát triển và chính thức phát hành phiên bản đầu tiên vào năm 1972.",
      "Bjarne Stroustrup phát triển và chính thức phát hành phiên bản đầu tiên vào năm 1983.",
      "James Gosling phát triển và chính thức phát hành phiên bản đầu tiên vào năm 1995."
    ],
    "answer": 0,
    "explain": "Python được tạo ra bởi Guido van Rossum tại Hà Lan và ra mắt công chúng năm 1991."
  },
  {
    "id": "b16-q03",
    "q": "Đặc trưng nổi bật nào giúp Python trở thành một ngôn ngữ lập trình phổ biến toàn cầu hiện nay?",
    "options": [
      "Cú pháp sáng sủa, dễ đọc, mã nguồn mở và sở hữu kho thư viện khổng lồ phong phú.",
      "Quy định chặt chẽ về dấu chấm phẩy cuối dòng và quản lý vùng nhớ trực tiếp bằng tay.",
      "Tốc độ thực thi trực tiếp trên thanh ghi CPU nhanh hơn tất cả các ngôn ngữ hợp ngữ.",
      "Chỉ chạy được độc quyền trên hệ điều hành Linux mà không tương thích với máy Windows."
    ],
    "answer": 0,
    "explain": "Python nổi tiếng bởi cú pháp ngắn gọn, dễ học, mã nguồn mở và hệ sinh thái thư viện phong phú."
  },
  {
    "id": "b16-q04",
    "q": "Trong môi trường IDLE của Python, dấu nhắc lệnh nào báo hiệu Python đang ở chế độ tương tác?",
    "options": [
      "Dấu nhắc gồm ba dấu lớn hơn xếp liền nhau >>> chờ người lập trình nhập từng dòng lệnh.",
      "Dấu nhắc gồm ba dấu gạch nối liên tiếp --- chờ người lập trình nhập các dòng chú thích.",
      "Dấu nhắc gồm ba dấu thăng liên tiếp ### chờ người lập trình định nghĩa các khối lệnh.",
      "Dấu nhắc gồm ba dấu hai chấm liên tiếp ::: chờ người lập trình khai báo các biến mới."
    ],
    "answer": 0,
    "explain": "Dấu nhắc >>> trong cửa sổ Shell của Python cho biết đang ở chế độ gõ lệnh tương tác trực tiếp."
  },
  {
    "id": "b16-q05",
    "q": "Tệp chương trình nguồn của Python được lưu trữ trên ổ đĩa với phần mở rộng định dạng nào?",
    "options": [
      "Phần mở rộng chuẩn là .py giúp hệ điều hành nhận diện tệp mã nguồn của trình thông dịch.",
      "Phần mở rộng chuẩn là .cpp giúp hệ điều hành nhận diện tệp mã nguồn của ngôn ngữ C++.",
      "Phần mở rộng chuẩn là .pas giúp hệ điều hành nhận diện tệp mã nguồn của ngôn ngữ Pascal.",
      "Phần mở rộng chuẩn là .exe giúp hệ thống thực thi trực tiếp tệp mã máy của ứng dụng."
    ],
    "answer": 0,
    "explain": "Tệp mã nguồn viết bằng Python luôn có đuôi mở rộng là .py."
  },
  {
    "id": "b16-q06",
    "q": "Phát biểu nào sau đây phân biệt chính xác giữa chế độ tương tác và chế độ soạn thảo trong Python?",
    "options": [
      "Chế độ tương tác chạy từng lệnh ngay lập tức, chế độ soạn thảo lưu toàn bộ mã vào tệp.",
      "Chế độ tương tác lưu mã vào tệp để chạy lại, chế độ soạn thảo thực hiện tức thì lệnh.",
      "Cả hai chế độ đều bắt buộc phải lưu mã vào đĩa cứng trước khi người dùng thực hiện chạy.",
      "Chế độ tương tác chỉ dùng để gỡ lỗi phức tạp, chế độ soạn thảo chỉ dùng để tính toán số."
    ],
    "answer": 0,
    "explain": "Chế độ tương tác (Interactive) gõ lệnh nào chạy lệnh đó; chế độ soạn thảo (Script) viết toàn bộ vào file .py rồi chạy."
  },
  {
    "id": "b16-q07",
    "q": "Trong Python, phép toán nào sau đây được sử dụng để tính phần nguyên của phép chia hai số thực?",
    "options": [
      "Toán tử hai dấu gạch chéo // trả về thương nguyên của phép chia giữa hai đại lượng.",
      "Toán tử một dấu gạch chéo / trả về thương nguyên của phép chia giữa hai đại lượng.",
      "Toán tử phần trăm % trả về thương nguyên của phép chia giữa hai đại lượng bất kì.",
      "Toán tử hai dấu sao ** trả về thương nguyên của phép chia giữa hai đại lượng cho trước."
    ],
    "answer": 0,
    "explain": "// là phép chia lấy phần nguyên, / là phép chia thực, % là lấy phần dư, ** là lũy thừa."
  },
  {
    "id": "b16-q08",
    "q": "Kết quả xuất ra màn hình của biểu thức số học 19 // 4 trong môi trường Python là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 4 thu được từ việc làm tròn xuống phần nguyên của phép chia 19 cho 4.",
      "Giá trị số thực 4.75 thu được từ phép chia số học thông thường giữa 19 và số 4.",
      "Giá trị số nguyên 3 thu được từ phần dư của phép chia giữa số 19 với số nguyên 4.",
      "Giá trị số nguyên 5 thu được từ việc làm tròn lên theo quy tắc làm tròn số nguyên."
    ],
    "answer": 0,
    "explain": "19 // 4 = 4 vì 4 * 4 = 16 (dư 3)."
  },
  {
    "id": "b16-q09",
    "q": "Toán tử phần trăm % trong ngôn ngữ lập trình Python có chức năng tính toán nào sau đây?",
    "options": [
      "Lấy phần dư của phép chia số nguyên hoặc số thực giữa hai toán hạng được chỉ định.",
      "Tính tỉ lệ phần trăm của một số so với tổng số các phần tử có trong danh sách số liệu.",
      "Lấy phần nguyên của phép chia số học bỏ qua phần thập phân phía sau dấu phẩy tĩnh.",
      "Nhân toán hạng với giá trị 100 rồi chia cho mẫu số trong các phép tính toán tài chính."
    ],
    "answer": 0,
    "explain": "% là toán tử modulo, trả về phần dư của phép chia."
  },
  {
    "id": "b16-q10",
    "q": "Kết quả của biểu thức tính toán lũy thừa 2 ** 4 trong cửa sổ dòng lệnh Python là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 16 tương ứng với phép tính nâng cơ số 2 lên lũy thừa bậc 4 trong toán.",
      "Giá trị số nguyên 8 tương ứng với kết quả của phép nhân trực tiếp số 2 với số 4.",
      "Giá trị số nguyên 6 tương ứng với phép cộng liên tiếp 2 với 4 trong số học thông thường.",
      "Giá trị số thực 16.0 tương ứng với phép nâng lũy thừa của các đại lượng số thực trong máy."
    ],
    "answer": 0,
    "explain": "2 ** 4 = 2 * 2 * 2 * 2 = 16."
  },
  {
    "id": "b16-q11",
    "q": "Để in dòng thông điệp 'Chào mừng bạn!' ra màn hình chuẩn, lệnh Python nào được viết đúng cú pháp?",
    "options": [
      "print('Chào mừng bạn!') với cặp ngoặc đơn và xâu thông điệp được bao bởi dấu nháy đơn.",
      "Echo('Chào mừng bạn!') với cặp ngoặc đơn và xâu thông điệp được bao bởi dấu nháy đơn.",
      "Write('Chào mừng bạn!') với cặp ngoặc đơn và xâu thông điệp được bao bởi dấu nháy kép.",
      "Console('Chào mừng bạn!') với cặp ngoặc đơn và xâu thông điệp đặt giữa dấu móc vuông."
    ],
    "answer": 0,
    "explain": "print() là hàm in chuẩn trong Python 3."
  },
  {
    "id": "b16-q12",
    "q": "Khi thực hiện phép tính 15 / 3 trong Python, kiểu dữ liệu và giá trị trả về của kết quả là gì?",
    "options": [
      "Kiểu số thực float với giá trị hiển thị trên màn hình kết quả là 5.0 chính xác.",
      "Kiểu số nguyên int với giá trị hiển thị trên màn hình kết quả là 5 nguyên vẹn.",
      "Kiểu xâu kí tự str với giá trị hiển thị là xâu '5' được bao bởi dấu nháy đơn.",
      "Kiểu logic bool với giá trị trả về là True biểu thị phép chia hết không có dư số."
    ],
    "answer": 0,
    "explain": "Trong Python 3, toán tử / luôn trả về kiểu số thực (float), do đó 15 / 3 = 5.0."
  },
  {
    "id": "b16-q13",
    "q": "Phát biểu nào sau đây về tính năng thông dịch của ngôn ngữ Python là hoàn toàn chính xác?",
    "options": [
      "Chương trình dịch đọc từng dòng lệnh, chuyển thành mã máy và thực thi ngay dòng lệnh đó.",
      "Chương trình dịch đọc toàn bộ mã nguồn một lần để tạo ra tệp thực thi độc lập .exe.",
      "Toàn bộ chương trình được nạp vào vi xử lý mà không cần bất kỳ bước dịch trung gian nào.",
      "Chương trình dịch chỉ kiểm tra lỗi chính tả chứ không thể thực thi các phép tính toán."
    ],
    "answer": 0,
    "explain": "Python là ngôn ngữ thông dịch (interpreter): dịch và thực hiện từng câu lệnh theo tuần tự."
  },
  {
    "id": "b16-q14",
    "q": "Quy tắc viết chú thích trên một dòng trong mã nguồn ngôn ngữ Python sử dụng kí tự nào?",
    "options": [
      "Dấu thăng # đặt ở đầu chú thích khiến trình thông dịch bỏ qua phần còn lại của dòng.",
      "Hai dấu gạch chéo // đặt ở đầu chú thích khiến trình thông dịch bỏ qua nội dung đó.",
      "Kí tự phần trăm % đặt ở đầu chú thích khiến trình thông dịch bỏ qua câu lệnh tiếp.",
      "Kí tự chấm phẩy ; đặt ở cuối dòng để ngăn chặn việc thực thi đoạn mã phía trước đó."
    ],
    "answer": 0,
    "explain": "Trong Python, dấu # dùng để bắt đầu một dòng chú thích (comment)."
  },
  {
    "id": "b16-q15",
    "q": "Biểu thức số học (10 + 2 * 3) ** 2 trong môi trường Python cho kết quả trả về là bao nhiêu?",
    "options": [
      "Giá trị số nguyên 256 do nhân chia trước cộng trừ sau rồi mới nâng lên lũy thừa bậc hai.",
      "Giá trị số nguyên 100 do thực hiện cộng 10 với 2 trước rồi nhân với 3 và bình phương.",
      "Giá trị số nguyên 136 do bình phương số 10 rồi cộng tích của 2 với 3 sau cùng.",
      "Giá trị số thực 256.0 do có sự xuất hiện của phép toán lũy thừa bậc hai trong biểu thức."
    ],
    "answer": 0,
    "explain": "Trong ngoặc: 2 * 3 = 6; 10 + 6 = 16. Sau đó 16 ** 2 = 256."
  },
  {
    "id": "b16-q16",
    "q": "Trong giờ học Tin học, bạn Nam muốn thực hiện tính căn bậc hai của 16 trong Python mà chưa nạp thư viện math, bạn có thể viết biểu thức nào?",
    "options": [
      "Biểu thức 16 ** 0.5 tận dụng tính chất lũy thừa số mũ 0.5 tương đương căn bậc hai trong toán.",
      "Biểu thức 16 // 0.5 tận dụng tính chất chia lấy nguyên với số thập phân để tìm căn số.",
      "Biểu thức 16 % 2 tận dụng tính chất chia lấy dư để tìm căn bậc hai của một số chẵn dương.",
      "Biểu thức 16 * 0.5 tận dụng phép nhân với một nửa giá trị để ước lượng căn bậc hai của số."
    ],
    "answer": 0,
    "explain": "Căn bậc hai của a tương đương a ** 0.5 trong biểu thức số học Python."
  }
];
