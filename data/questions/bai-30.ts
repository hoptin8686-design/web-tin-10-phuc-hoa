import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-30: Kiểm thử và gỡ lỗi chương trình
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b30-q01",
    "q": "Hoạt động 'kiểm thử chương trình' (software testing) trong khoa học máy tính nhằm mục đích chính nào sau đây?",
    "options": [
      "Chạy chương trình với các bộ dữ liệu thử nghiệm để phát hiện ra các sai sót và khiếm khuyết của phần mềm.",
      "Tự động viết thêm các tính năng đồ họa mới mà khách hàng chưa từng yêu cầu trong hợp đồng.",
      "Xóa bỏ hoàn toàn mã nguồn cũ và thay thế bằng các mẫu giao diện web có sẵn trên Internet.",
      "Kiểm tra tốc độ gõ bàn phím của lập trình viên trong quá trình hoàn thiện các dòng lệnh nguồn."
    ],
    "answer": 0,
    "explain": "Kiểm thử (testing) là quá trình chạy chương trình với các bộ dữ liệu thử để phát hiện lỗi."
  },
  {
    "id": "b30-q02",
    "q": "Một 'bộ dữ liệu kiểm thử' hay trường hợp thử nghiệm (test case) hoàn chỉnh bao gồm các thành phần nào?",
    "options": [
      "Dữ liệu đầu vào cụ thể được cung cấp và kết quả đầu ra kì vọng tương ứng cần đạt được.",
      "Chỉ bao gồm mã nguồn viết bằng ngôn ngữ máy nhị phân của tệp tin thực thi độc lập .exe.",
      "Danh sách các phần cứng máy tính mà phần mềm dự kiến sẽ được cài đặt và vận hành.",
      "Tên của người kiểm thử viên và số lượng dòng mã nguồn có trong tệp chương trình chính."
    ],
    "answer": 0,
    "explain": "Test case gồm: Dữ liệu đầu vào (Input) và Kết quả kì vọng (Expected Output)."
  },
  {
    "id": "b30-q03",
    "q": "Kiểm thử dữ liệu biên (boundary testing) là phương pháp kiểm thử tập trung vào vùng giá trị nào?",
    "options": [
      "Các giá trị nằm ngay sát ranh giới phân định các miền dữ liệu (giá trị nhỏ nhất, lớn nhất, cận ngưỡng).",
      "Các giá trị nằm ở chính giữa của miền dữ liệu thông thường mà người dùng hay nhập nhất.",
      "Chỉ kiểm tra các chuỗi văn bản ngẫu nhiên có độ dài vượt quá 1000 kí tự chữ cái.",
      "Các giá trị số nguyên tố có từ 5 chữ số trở lên được sinh ra từ các thuật toán mã hóa."
    ],
    "answer": 0,
    "explain": "Boundary testing tập trung kiểm tra các giá trị biên (nhỏ nhất, lớn nhất, ranh giới điều kiện: 0, 10, cận mút)."
  },
  {
    "id": "b30-q04",
    "q": "Để kiểm thử một chương trình xếp loại học sinh theo điểm trung bình (0.0 đến 10.0), giá trị nào sau đây là dữ liệu biên chuẩn?",
    "options": [
      "Các giá trị: 0.0, 10.0, 4.9, 5.0, 6.4, 6.5, 7.9, 8.0 tương ứng với các ngưỡng phân loại danh hiệu.",
      "Các giá trị: 5.5, 6.0, 7.0 nằm sâu bên trong khoảng của các mức học lực bình thường.",
      "Các giá trị: 100.0, -50.0 biểu thị các sai số vượt trội so với thang điểm chuẩn.",
      "Các giá trị dạng văn bản như 'Tám điểm' hoặc 'Chín điểm' nhập vào từ bàn phím."
    ],
    "answer": 0,
    "explain": "Các giá trị biên là các mốc ranh giới: 0.0, 5.0, 6.5, 8.0, 10.0 và các điểm liền kề (4.9, 6.4, 7.9)."
  },
  {
    "id": "b30-q05",
    "q": "Khái niệm 'gỡ lỗi' (debugging) trong lập trình được định nghĩa chính xác nhất là gì?",
    "options": [
      "Quá trình xác định nguyên nhân gây ra lỗi và tiến hành sửa đổi mã nguồn để khắc phục lỗi đó.",
      "Quá trình chạy phần mềm diệt virus để quét sạch mã độc ra khỏi bộ nhớ máy tính để bàn.",
      "Quá trình dịch mã nguồn ngôn ngữ bậc cao thành mã đối tượng thông qua chương trình dịch.",
      "Quá trình viết tài liệu hướng dẫn sử dụng phần mềm để bàn giao cho đối tác khách hàng."
    ],
    "answer": 0,
    "explain": "Gỡ lỗi (debugging) là quá trình tìm nguyên nhân gốc rễ và sửa chữa lỗi sau khi đã phát hiện ra lỗi."
  },
  {
    "id": "b30-q06",
    "q": "Phương pháp gỡ lỗi đơn giản và phổ biến nhất của các lập trình viên mới bắt đầu là phương pháp nào?",
    "options": [
      "Chèn thêm các câu lệnh print() vào các vị trí then chốt để theo dõi giá trị trung gian của biến.",
      "Đổi lại toàn bộ tên của tất cả các biến trong chương trình sang tiếng Anh không dấu.",
      "Cài đặt lại toàn bộ hệ điều hành Windows trước mỗi lần thực hiện chạy thử đoạn mã mới.",
      "Tắt nguồn máy tính và khởi động lại sau mỗi lần phát hiện thấy thông báo ngoại lệ."
    ],
    "answer": 0,
    "explain": "In vết bằng print() (Print Debugging) là phương pháp gỡ lỗi trực quan, phổ biến và đơn giản nhất."
  },
  {
    "id": "b30-q07",
    "q": "Công cụ gỡ lỗi chuyên nghiệp (Debugger) tích hợp trong các môi trường lập trình cung cấp tính năng nổi bật nào?",
    "options": [
      "Cho phép đặt điểm dừng (breakpoint), thực thi chương trình từng bước và theo dõi biến thời gian thực.",
      "Tự động viết toàn bộ thuật toán phức tạp mà người lập trình không cần tư duy giải quyết.",
      "Tăng gấp đôi tốc độ tải trang web khi người dùng truy cập vào máy chủ cơ sở dữ liệu.",
      "Tự động chuyển đổi các chương trình viết bằng Python sang ngôn ngữ lập trình Pascal cổ điển."
    ],
    "answer": 0,
    "explain": "Debugger cung cấp đặt điểm dừng (breakpoint), chạy từng bước (step over/into) và quan sát giá trị biến."
  },
  {
    "id": "b30-q08",
    "q": "Điểm dừng (Breakpoint) trong công cụ gỡ lỗi có chức năng nào sau đây?",
    "options": [
      "Làm cho chương trình tạm dừng thực thi ngay tại dòng mã đó để người dùng kiểm tra trạng thái bộ nhớ.",
      "Xóa vĩnh viễn dòng lệnh đó ra khỏi tệp mã nguồn để chương trình chạy nhanh hơn bình thường.",
      "Báo hiệu cho bộ vi xử lý máy tính biết rằng đoạn mã phía sau không có bất kỳ sai sót nào.",
      "Ngắt kết nối mạng của máy tính để ngăn chặn việc rò rỉ dữ liệu thông tin ra bên ngoài."
    ],
    "answer": 0,
    "explain": "Breakpoint tạm dừng chương trình tại dòng chỉ định để người lập trình soi chiếu trạng thái biến và bộ nhớ."
  },
  {
    "id": "b30-q09",
    "q": "Khi chạy từng bước một câu lệnh (Step-by-step execution), lập trình viên có thể quan sát điều gì?",
    "options": [
      "Sự thay đổi giá trị cụ thể của các biến số và luồng điều khiển sau mỗi câu lệnh được thực hiện.",
      "Nhiệt độ tỏa ra của thanh RAM và mức tiêu thụ điện năng của nguồn máy tính cá nhân.",
      "Sự biến động của tỉ giá ngoại tệ trên thị trường tài chính quốc tế trong ngày hôm đó.",
      "Số lượng dòng văn bản mà người dùng khác đang soạn thảo trên các máy tính lân cận."
    ],
    "answer": 0,
    "explain": "Chạy từng bước giúp quan sát luồng rẽ nhánh và sự biến đổi giá trị của từng biến sau mỗi lệnh."
  },
  {
    "id": "b30-q10",
    "q": "Khi kiểm thử một bài toán chia hai số x / y, trường hợp kiểm thử đặc biệt nào bắt buộc phải đưa vào bộ test?",
    "options": [
      "Trường hợp mẫu số y = 0 để kiểm tra chương trình có bẫy lỗi chia cho không hay bị sập nguồn.",
      "Trường hợp tử số x là một số nguyên dương có giá trị đúng bằng 100 trong hệ thập phân.",
      "Trường hợp cả hai số x và y đều là các số thực có đúng ba chữ số sau dấu chấm tĩnh.",
      "Trường hợp biến x được gán bằng một xâu kí tự chứa các kí tự chữ cái viết hoa toàn bộ."
    ],
    "answer": 0,
    "explain": "Mẫu số y = 0 là trường hợp đặc biệt bắt buộc để kiểm tra khả năng xử lý ngoại lệ ZeroDivisionError."
  },
  {
    "id": "b30-q11",
    "q": "Khi kiểm thử thuật toán tìm kiếm trên danh sách, hai trường hợp đặc biệt nào sau đây không thể bỏ qua?",
    "options": [
      "Danh sách rỗng [] và trường hợp phần tử cần tìm nằm ở vị trí đầu tiên hoặc cuối cùng danh sách.",
      "Danh sách chứa đúng 100 phần tử và tất cả các phần tử đều là các số nguyên dương lẻ.",
      "Danh sách chỉ lưu trữ tên của các loài động vật có vú sống dưới nước trong tự nhiên.",
      "Danh sách được tạo ra từ việc ghép ba danh sách số thực với nhau qua toán tử cộng."
    ],
    "answer": 0,
    "explain": "Danh sách rỗng và các vị trí biên (đầu danh sách, cuối danh sách, không có trong danh sách) là test case cốt lõi."
  },
  {
    "id": "b30-q12",
    "q": "Khẳng định nổi tiếng của nhà khoa học máy tính Edsger Dijkstra về kiểm thử phần mềm là gì?",
    "options": [
      "Kiểm thử chỉ có thể chứng minh sự hiện diện của lỗi, chứ không thể chứng minh phần mềm không có lỗi.",
      "Kiểm thử có thể chứng minh một cách tuyệt đối rằng phần mềm đã hoàn hảo và không còn bất kỳ lỗi nào.",
      "Chỉ cần chạy thử 3 trường hợp là đủ để khẳng định phần mềm an toàn 100% khi phát hành.",
      "Một chương trình viết bằng Python thì không cần kiểm thử vì trình thông dịch tự sửa lỗi."
    ],
    "answer": 0,
    "explain": "Dijkstra: 'Program testing can be used to show the presence of bugs, but never to show their absence!'"
  },
  {
    "id": "b30-q13",
    "q": "Sau khi đã chèn các lệnh print() để tìm ra nguyên nhân gây lỗi và sửa xong mã nguồn, người lập trình nên làm gì?",
    "options": [
      "Xóa bỏ hoặc chuyển các lệnh print() gỡ lỗi đó thành dòng chú thích (#) để trả lại mã nguồn sạch sẽ.",
      "Giữ nguyên các lệnh print() đó để phần mềm xuất thật nhiều dòng chữ trên màn hình người dùng.",
      "Nhân đôi số lượng các lệnh print() đó lên để chứng minh phần mềm đã qua nhiều lần gỡ lỗi.",
      "Gửi toàn bộ các dòng in vết đó lên diễn đàn công nghệ để nhờ cộng đồng sao lưu dữ liệu."
    ],
    "answer": 0,
    "explain": "Sau khi gỡ lỗi xong, cần xóa hoặc comment các lệnh print gỡ lỗi để mã nguồn gọn gàng, tránh rác đầu ra."
  },
  {
    "id": "b30-q14",
    "q": "Kiểm thử hộp đen (Black-box testing) là phương pháp kiểm thử có đặc trưng nào sau đây?",
    "options": [
      "Kiểm thử dựa trên yêu cầu chức năng đầu vào và đầu ra mà không cần biết cấu trúc mã bên trong.",
      "Kiểm thử yêu cầu người kiểm thử phải đọc và hiểu chi tiết từng dòng lệnh mã nguồn thuật toán.",
      "Kiểm thử màn hình máy tính chỉ hiển thị toàn màu đen để kiểm tra độ tương phản đồ họa.",
      "Kiểm thử phần mềm độc quyền của các cơ quan tình báo an ninh quốc gia trong bảo mật."
    ],
    "answer": 0,
    "explain": "Kiểm thử hộp đen (Black-box) kiểm tra chức năng dựa trên Input/Output mà không nhìn vào cấu trúc mã nguồn bên trong."
  },
  {
    "id": "b30-q15",
    "q": "Kiểm thử hộp trắng (White-box testing) khác kiểm thử hộp đen ở điểm mấu chốt nào?",
    "options": [
      "Người kiểm thử xem xét và phân tích cấu trúc mã nguồn, các nhánh rẽ và vòng lặp bên trong chương trình.",
      "Người kiểm thử chỉ được nhìn vào giao diện bên ngoài của ứng dụng mà không được mở mã nguồn.",
      "Chỉ áp dụng cho các phần mềm mã nguồn mở được phát hành miễn phí trên toàn thế giới.",
      "Bắt buộc phải in mã nguồn ra giấy trắng khổ A4 trước khi tiến hành chạy các phép thử."
    ],
    "answer": 0,
    "explain": "Kiểm thử hộp trắng (White-box) dựa trên việc nhìn rõ cấu trúc mã nguồn bên trong để thiết kế ca kiểm thử."
  },
  {
    "id": "b30-q16",
    "q": "Quy trình chuẩn khi phát triển phần mềm gồm các bước: Thiết kế -> Viết mã -> Kiểm thử -> Gỡ lỗi -> Đóng gói. Hoạt động kiểm thử và gỡ lỗi có mối liên hệ như thế nào?",
    "options": [
      "Kiểm thử giúp phát hiện ra có lỗi tồn tại; gỡ lỗi giúp xác định nguyên nhân và khắc phục lỗi đó.",
      "Kiểm thử và gỡ lỗi là hai tên gọi khác nhau của cùng một thao tác biên dịch chương trình nguồn.",
      "Gỡ lỗi luôn được thực hiện trước khi kiểm thử để ngăn chặn tất cả các lỗi có thể xảy ra.",
      "Nếu một chương trình đã được kiểm thử thì hoàn toàn không cần phải thực hiện gỡ lỗi nữa."
    ],
    "answer": 0,
    "explain": "Kiểm thử (Testing) phát hiện sự tồn tại của lỗi; Gỡ lỗi (Debugging) tìm nguyên nhân và khắc phục lỗi đó."
  }
];
