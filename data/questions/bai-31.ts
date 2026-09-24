import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-31: Thực hành viết chương trình đơn giản
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b31-q01",
    "q": "Quy trình chuẩn gồm 5 bước để giải quyết một bài toán tin học bằng lập trình là gì?",
    "options": [
      "Xác định bài toán -> Thiết kế thuật toán -> Viết mã chương trình -> Kiểm thử và gỡ lỗi -> Hoàn thiện tài liệu.",
      "Viết mã chương trình ngay -> Đóng gói cài đặt -> Nhờ người dùng kiểm tra -> Sửa lỗi nếu có khiếu nại.",
      "Mua phần cứng mới -> Cài đặt hệ điều hành -> Tải mã nguồn trên mạng -> Đổi tên tác giả tệp nguồn.",
      "Xác định bài toán -> In mã nguồn ra giấy -> Nhập vào máy tính bảng -> Nộp cho giáo viên chấm điểm."
    ],
    "answer": 0,
    "explain": "Quy trình giải bài toán: Xác định bài toán -> Thiết kế thuật toán -> Viết mã -> Kiểm thử/gỡ lỗi -> Hoàn thiện tài liệu."
  },
  {
    "id": "b31-q02",
    "q": "Bước 'Xác định bài toán' (Problem Formulation) trong quy trình lập trình bao gồm các công việc chính nào?",
    "options": [
      "Xác định rõ dữ liệu đầu vào (Input), kết quả đầu ra cần đạt được (Output) và các điều kiện ràng buộc.",
      "Chọn ngôn ngữ lập trình cụ thể và quyết định mua máy tính của hãng công nghệ nào.",
      "Gõ ngay các dòng lệnh mở đầu chương trình và đặt tên tệp tin lưu trữ trên ổ đĩa máy tính.",
      "Vẽ giao diện đồ họa nút bấm và thiết lập các màu sắc hiển thị cho các bảng tính dữ liệu."
    ],
    "answer": 0,
    "explain": "Xác định bài toán là chỉ rõ Input, Output và các điều kiện/ràng buộc của bài toán."
  },
  {
    "id": "b31-q03",
    "q": "Trong bài toán tính tiền điện sinh hoạt theo bậc thang lũy tiến, dữ liệu Input và Output lần lượt là gì?",
    "options": [
      "Input: Lượng điện tiêu thụ tính bằng kWh; Output: Số tiền điện phải thanh toán tương ứng.",
      "Input: Số tiền điện trong ví; Output: Số lượng bóng đèn led có trong phòng khách.",
      "Input: Tên chủ hộ gia đình; Output: Số hiệu công tơ điện gắn trên cột điện ngoài đường.",
      "Input: Ngày lập hóa đơn tiền điện; Output: Tên công ty điện lực phụ trách địa bàn."
    ],
    "answer": 0,
    "explain": "Input: số kWh điện tiêu thụ. Output: số tiền điện phải trả."
  },
  {
    "id": "b31-q04",
    "q": "Phương pháp thiết kế thuật toán theo kĩ thuật 'tinh chế từng bước' (Stepwise Refinement) có đặc điểm gì?",
    "options": [
      "Chia nhỏ bài toán lớn thành các bài toán con đơn giản hơn rồi giải quyết chi tiết từng phần.",
      "Viết toàn bộ thuật toán trong một khối lệnh duy nhất dài hàng trăm dòng mà không chia nhỏ.",
      "Chỉ sử dụng duy nhất câu lệnh lặp for mà cấm hoàn toàn câu lệnh điều kiện rẽ nhánh if.",
      "Sử dụng trí tuệ nhân tạo để dịch trực tiếp ngôn ngữ tự nhiên sang mã máy mà không cần tư duy."
    ],
    "answer": 0,
    "explain": "Tinh chế từng bước (Stepwise Refinement): chia bài toán lớn thành các mô-đun/bài toán con nhỏ hơn để giải quyết."
  },
  {
    "id": "b31-q05",
    "q": "Một bài toán yêu cầu: Nhập vào số nguyên dương n, tính tổng S = 1^2 + 2^2 + ... + n^2. Cấu trúc lặp nào là phù hợp nhất?",
    "options": [
      "Vòng lặp for i in range(1, n + 1): kết hợp cộng dồn s += i ** 2 do số lần lặp đã biết trước là n lần.",
      "Vòng lặp while vô hạn không có điều kiện dừng và liên tục in ra các giá trị bình phương ngẫu nhiên.",
      "Cấu trúc rẽ nhánh if - else với 100 nhánh điều kiện liệt kê sẵn tất cả các trường hợp của n.",
      "Không thể lập trình giải quyết bài toán này trên máy tính vì công thức bình phương quá phức tạp."
    ],
    "answer": 0,
    "explain": "for i in range(1, n + 1) với s += i ** 2 là lựa chọn tối ưu và trực tiếp nhất."
  },
  {
    "id": "b31-q06",
    "q": "Để viết chương trình in bảng cửu chương từ 2 đến 9, ta nên sử dụng cấu trúc điều khiển nào?",
    "options": [
      "Hai vòng lặp for lồng nhau: vòng ngoài duyệt bảng cửu chương (2-9), vòng trong duyệt thừa số (1-10).",
      "Chỉ một câu lệnh print duy nhất có chứa xâu kí tự dài chứa tất cả các bảng cửu chương nối tiếp.",
      "Tám mươi câu lệnh if độc lập kiểm tra từng trường hợp kết quả phép nhân riêng lẻ trong toán.",
      "Vòng lặp while lặp theo số giây đồng hồ thời gian thực của máy tính phòng thực hành."
    ],
    "answer": 0,
    "explain": "Hai vòng lặp for lồng nhau là giải pháp kinh điển để in bảng cửu chương 2 đến 9."
  },
  {
    "id": "b31-q07",
    "q": "Trong bài toán kiểm tra tính nguyên tố của số n > 1, để tối ưu thời gian chạy ta chỉ cần cho biến đếm duyệt đến giá trị nào?",
    "options": [
      "Duyệt đến phần nguyên căn bậc hai của n (tức int(n ** 0.5)) thay vì duyệt đến n - 1.",
      "Duyệt đến n / 2 vì các ước số nguyên không bao giờ vượt quá một nửa của số n đó.",
      "Bắt buộc phải duyệt đủ đến n - 1 thì thuật toán mới đảm bảo tính đúng đắn toán học.",
      "Chỉ cần kiểm tra duy nhất một số là số 2 rồi kết luận ngay tính chất của số đó."
    ],
    "answer": 0,
    "explain": "Nếu n là hợp số thì chắc chắn có ít nhất 1 ước số nguyên trong khoảng [2, sqrt(n)], tối ưu lặp đến int(n**0.5)."
  },
  {
    "id": "b31-q08",
    "q": "Khi viết chương trình tính chu vi và diện tích tam giác theo công thức Hê-rông (Heron), ta cần tính đại lượng nửa chu vi p như thế nào?",
    "options": [
      "p = (a + b + c) / 2 sau đó diện tích S = (p * (p - a) * (p - b) * (p - c)) ** 0.5.",
      "p = a + b + c sau đó diện tích S = (p * (p - a) * (p - b) * (p - c)) / 2.",
      "p = (a + b + c) // 2 bằng phép chia nguyên để tránh sinh ra số thập phân trong căn thức.",
      "p = (a * b * c) / 2 nhân ba cạnh với nhau rồi chia đôi để lấy bán kính đường tròn ngoại tiếp."
    ],
    "answer": 0,
    "explain": "Công thức Heron: p = (a + b + c)/2; S = sqrt(p(p-a)(p-b)(p-c))."
  },
  {
    "id": "b31-q09",
    "q": "Một bài toán yêu cầu đếm số lần xuất hiện của mỗi chữ số từ 0 đến 9 trong một xâu văn bản s. Cấu trúc dữ liệu nào thích hợp để lưu bộ đếm?",
    "options": [
      "Một danh sách gồm 10 phần tử dem = [0] * 10 với chỉ số từ 0 đến 9 tương ứng từng chữ số.",
      "Mười biến đơn lẻ độc lập dem0, dem1, ..., dem9 viết rời rạc trong chương trình.",
      "Một biến xâu duy nhất liên tục ghi đè các kí tự chữ cái tìm thấy vào bộ nhớ tạm thời.",
      "Không thể đếm được vì xâu kí tự không hỗ trợ các phép toán đếm số học trong Python."
    ],
    "answer": 0,
    "explain": "Mảng đếm dem = [0] * 10 là mảng tần số tối ưu nhất để đếm các chữ số 0 đến 9."
  },
  {
    "id": "b31-q10",
    "q": "Tại sao việc đặt tên biến và hàm có tính gợi nhớ (mnemonic names) lại là một yêu cầu quan trọng trong thực hành viết mã?",
    "options": [
      "Giúp chương trình dễ đọc, dễ hiểu mục đích của đoạn mã, thuận lợi cho việc bảo trì và làm việc nhóm.",
      "Làm cho chương trình dịch biên dịch nhanh hơn gấp mười lần so với dùng tên biến ngắn.",
      "Là quy định bắt buộc của hệ điều hành, nếu đặt tên ngắn máy tính sẽ từ chối lưu tệp mã nguồn.",
      "Giúp giấu kín thuật toán để người khác không thể sao chép được bài làm trong phòng thi."
    ],
    "answer": 0,
    "explain": "Tên biến gợi nhớ (self-documenting) giúp mã nguồn sáng sủa, dễ đọc, dễ bảo trì và phối hợp nhóm."
  },
  {
    "id": "b31-q11",
    "q": "Đoạn chương trình sau thực hiện công việc gì?\ns = 0\nfor x in a:\n    if x > 0:\n        s += x",
    "options": [
      "Tính tổng tất cả các số dương có trong danh sách a.",
      "Đếm số lượng các số dương có trong danh sách a.",
      "Tìm giá trị của phần tử dương lớn nhất trong danh sách a.",
      "Tính trung bình cộng của tất cả các phần tử trong danh sách a."
    ],
    "answer": 0,
    "explain": "Cộng dồn s += x khi x > 0 chính là thuật toán tính tổng các số dương trong danh sách."
  },
  {
    "id": "b31-q12",
    "q": "Khi viết chương trình cho người khác sử dụng, việc hiển thị các dòng thông báo nhắc nhở (prompt) rõ ràng có ý nghĩa gì?",
    "options": [
      "Tạo giao diện tương tác thân thiện, giúp người dùng biết chính xác cần phải nhập loại dữ liệu gì.",
      "Làm tăng thời gian chờ của người dùng để giảm bớt áp lực xử lý cho phần cứng máy tính.",
      "Bắt buộc theo chuẩn ISO để phần mềm có thể bán thương mại trên thị trường quốc tế.",
      "Ngăn chặn hoàn toàn việc người dùng cố tình nhấn phím tắt tắt chương trình đột ngột."
    ],
    "answer": 0,
    "explain": "Dòng nhắc rõ ràng (UI/UX) giúp trải nghiệm người dùng thân thiện, hạn chế nhập sai dữ liệu."
  },
  {
    "id": "b31-q13",
    "q": "Để tính tiền cước Internet hàng tháng gồm cước thuê bao cố định 50000đ và cước dung lượng 100đ/MB, công thức nào biểu diễn đúng?",
    "options": [
      "tong_tien = 50000 + dung_luong_mb * 100 thể hiện đúng mô hình chi phí cố định cộng biến phí.",
      "tong_tien = (50000 + dung_luong_mb) * 100 nhân toàn bộ cước thuê bao với đơn giá dung lượng.",
      "tong_tien = 50000 * dung_luong_mb + 100 nhân cước thuê bao với số MB rồi cộng thêm 100đ phụ phí.",
      "tong_tien = (dung_luong_mb / 100) + 50000 chia dung lượng tiêu thụ cho đơn giá mỗi MB."
    ],
    "answer": 0,
    "explain": "Tiền = Cố định (50000) + biến phí (dung_luong * 100)."
  },
  {
    "id": "b31-q14",
    "q": "Trong bài toán vẽ tam giác vuông cân bằng các dấu sao '*' có chiều cao h, câu lệnh lặp nào in đúng?",
    "options": [
      "for i in range(1, h + 1): print('*' * i) tận dụng phép nhân bản kí tự '*' theo số dòng tăng dần.",
      "for i in range(h): print('*' * h) in ra các hàng có độ dài dấu sao bằng nhau tạo hình chữ nhật.",
      "for i in range(1, h + 1): print('*') chỉ in đúng một dấu sao duy nhất trên mỗi dòng màn hình.",
      "for i in range(h, 0, -1): print(i * i) in ra các con số bình phương lùi dần đều trên từng dòng."
    ],
    "answer": 0,
    "explain": "for i in range(1, h + 1): print('*' * i) in dòng 1 có 1 sao, dòng 2 có 2 sao... dòng h có h sao (tam giác vuông cân)."
  },
  {
    "id": "b31-q15",
    "q": "Để lưu danh sách điểm thi của cả lớp và tìm học sinh có điểm cao nhất, cấu trúc dữ liệu nào kết hợp tốt nhất trong Python cơ bản?",
    "options": [
      "Hai danh sách song song: một danh sách lưu tên (ds_ten) và một danh sách lưu điểm (ds_diem).",
      "Một biến số thực duy nhất liên tục ghi đè điểm số của học sinh sau cùng trong danh sách.",
      "Lưu tất cả tên và điểm vào một xâu kí tự duy nhất cách nhau bởi dấu chấm phẩy.",
      "Không thể quản lý dữ liệu nhiều học sinh nếu không sử dụng hệ quản trị cơ sở dữ liệu Oracle."
    ],
    "answer": 0,
    "explain": "Hai danh sách song song hoặc danh sách các cặp/tuple là phương án dễ học và trực quan nhất ở lớp 10."
  },
  {
    "id": "b31-q16",
    "q": "Hoạt động 'Hoàn thiện tài liệu' ở bước cuối cùng trong quy trình phát triển phần mềm mang lại lợi ích gì?",
    "options": [
      "Giúp người dùng dễ dàng cài đặt sử dụng, và giúp các lập trình viên khác dễ dàng nâng cấp bảo trì sau này.",
      "Giúp tăng dung lượng của phần mềm để bán được với giá thành cao hơn trên các kho ứng dụng.",
      "Bảo vệ phần mềm không bao giờ bị các sự cố về phần cứng máy tính làm hỏng dữ liệu nguồn.",
      "Thay thế hoàn toàn cho khâu kiểm thử và gỡ lỗi mà vẫn đảm bảo chương trình không bao giờ có lỗi."
    ],
    "answer": 0,
    "explain": "Tài liệu hóa (Documentation) giúp người dùng biết cách dùng, giúp lập trình viên bảo trì và nâng cấp dễ dàng."
  }
];
