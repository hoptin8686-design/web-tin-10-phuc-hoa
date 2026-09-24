import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-08: Mạng máy tính trong cuộc sống hiện đại
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b08-q01",
    "q": "Mạng máy tính (Computer Network) được hiểu chính xác nhất là gì?",
    "options": [
      "Tập hợp các máy tính và thiết bị được kết nối với nhau để truyền thông tin và chia sẻ tài nguyên.",
      "Một máy tính để bàn duy nhất được cắm nối trực tiếp với nhiều chiếc bàn phím cơ.",
      "Hệ thống các dây điện cao thế truyền tải điện năng quốc gia từ nhà máy về địa phương.",
      "Một phần mềm chuyên dụng cài đặt trên điện thoại để chỉnh sửa ảnh nghệ thuật."
    ],
    "answer": 0,
    "explain": "Mạng máy tính là tập hợp các máy tính và thiết bị ngoại vi kết nối với nhau qua phương tiện truyền thông để trao đổi dữ liệu và chia sẻ tài nguyên."
  },
  {
    "id": "b08-q02",
    "q": "Mạng cục bộ (LAN - Local Area Network) có phạm vi địa lí như thế nào?",
    "options": [
      "Phạm vi hẹp trong một phòng học, một tòa nhà hoặc một khuôn viên trường học.",
      "Phạm vi toàn cầu kết nối hàng trăm quốc gia trên khắp thế giới lại với nhau.",
      "Phạm vi trải rộng trên toàn bộ một tỉnh hoặc một vùng lãnh thổ rộng lớn.",
      "Phạm vi không gian vũ trụ kết nối giữa trạm không gian và các vệ tinh nhân tạo."
    ],
    "answer": 0,
    "explain": "Mạng LAN kết nối trong phạm vi địa lí hẹp như phòng học, cơ quan, gia đình với tốc độ truyền cao."
  },
  {
    "id": "b08-q03",
    "q": "Mạng diện rộng (WAN - Wide Area Network) có đặc điểm nào dưới đây?",
    "options": [
      "Kết nối các mạng máy tính ở khoảng cách địa lí lớn giữa các thành phố hoặc quốc gia.",
      "Chỉ cho phép kết nối tối đa không quá 10 chiếc máy tính cá nhân trong một phòng.",
      "Bắt buộc toàn bộ các thiết bị phải dùng chung một sợi dây cáp mạng dài duy nhất.",
      "Hoàn toàn không cần sử dụng bất kì bộ định tuyến hay thiết bị chuyển mạch nào."
    ],
    "answer": 0,
    "explain": "Mạng WAN kết nối quy mô rộng lớn (quốc gia, lục địa); Internet là mạng diện rộng lớn nhất toàn cầu."
  },
  {
    "id": "b08-q04",
    "q": "Điện toán đám mây (Cloud Computing) đem lại lợi ích cơ bản nào cho người dùng?",
    "options": [
      "Truy cập dữ liệu và phần mềm qua Internet mọi lúc mọi nơi mà không cần đầu tư máy chủ đắt tiền.",
      "Làm cho thời tiết ngoài trời luôn luôn mát mẻ và nhiều mây râm mát quanh năm.",
      "Tự động biến chiếc máy tính để bàn đời cũ thành một chiếc siêu máy tính nguyên tử.",
      "Xóa bỏ hoàn toàn nhu cầu sử dụng điện năng khi vận hành các thiết bị số."
    ],
    "answer": 0,
    "explain": "Điện toán đám mây cung cấp tài nguyên tính toán (máy chủ, lưu trữ, phần mềm) qua Internet theo nhu cầu, tiết kiệm chi phí đầu tư."
  },
  {
    "id": "b08-q05",
    "q": "Mô hình dịch vụ 'Phần mềm như một dịch vụ' (SaaS - Software as a Service) có ví dụ tiêu biểu là:",
    "options": [
      "Google Docs, Gmail, Microsoft Office 365 trực tuyến.",
      "Dây cáp mạng đồng xoắn đôi và đầu bấm mạng RJ45.",
      "Chiếc vỏ thùng máy tính (Case) và bộ nguồn máy tính (PSU).",
      "Thanh nhớ RAM và quạt làm mát bộ vi xử lí CPU của máy tính."
    ],
    "answer": 0,
    "explain": "SaaS là mô hình người dùng sử dụng trực tiếp phần mềm ứng dụng chạy trên đám mây qua trình duyệt, ví dụ: Google Docs, Gmail, Zoom."
  },
  {
    "id": "b08-q06",
    "q": "Mô hình dịch vụ 'Hạ tầng như một dịch vụ' (IaaS - Infrastructure as a Service) cung cấp những gì cho khách hàng?",
    "options": [
      "Thuê máy chủ ảo, không gian lưu trữ và mạng lưới phần cứng trên đám mây.",
      "Cung cấp các kỹ sư phần mềm đến tận nhà để gõ bài tập cho học sinh.",
      "Miễn phí hoàn toàn tiền điện thắp sáng cho doanh nghiệp sử dụng máy chủ.",
      "Cung cấp các cuốn sách giáo khoa in trên giấy chuyển phát nhanh qua bưu điện."
    ],
    "answer": 0,
    "explain": "IaaS cho phép thuê hạ tầng thô (máy chủ ảo VM, lưu trữ, tường lửa) như Amazon Web Services (AWS), Google Cloud Compute."
  },
  {
    "id": "b08-q07",
    "q": "Thiết bị nào sau đây làm nhiệm vụ kết nối mạng LAN của gia đình với mạng Internet của nhà cung cấp dịch vụ?",
    "options": [
      "Bộ định tuyến (Router / Modem Wi-Fi).",
      "Ổ đĩa quang đọc đĩa CD/DVD máy tính.",
      "Bàn di chuột bằng da có đèn LED trang trí.",
      "Bút chỉ laze dùng để thuyết trình trên lớp."
    ],
    "answer": 0,
    "explain": "Modem/Router chuyển đổi tín hiệu và định tuyến gói tin giữa mạng nội bộ gia đình với nhà mạng Internet (ISP)."
  },
  {
    "id": "b08-q08",
    "q": "Địa chỉ IP (Internet Protocol) của một máy tính trong mạng có vai trò tương đương với cái gì trong đời sống?",
    "options": [
      "Địa chỉ số nhà giúp bưu tá chuyển thư từ đến đúng người nhận.",
      "Số chứng minh thư nhân dân của người sản xuất ra chiếc máy tính đó.",
      "Màu sơn trang trí bên ngoài của vỏ thùng máy tính để bàn.",
      "Tên của người bạn thân nhất của chủ sở hữu chiếc máy tính."
    ],
    "answer": 0,
    "explain": "Địa chỉ IP là địa chỉ số duy nhất định danh một thiết bị trên mạng, giúp dữ liệu gửi đến đúng đích."
  },
  {
    "id": "b08-q09",
    "q": "Hệ thống phân giải tên miền (DNS - Domain Name System) có chức năng chính là gì?",
    "options": [
      "Chuyển đổi tên miền dễ nhớ (như google.com) thành địa chỉ IP số học tương ứng.",
      "Quét và tiêu diệt toàn bộ các loại virus có mặt trên ổ đĩa cứng máy tính.",
      "Đo lường tốc độ gió và nhiệt độ không khí tại các trung tâm máy chủ dữ liệu.",
      "Tự động tắt nguồn máy tính khi học sinh đã sử dụng quá 2 giờ liên tục."
    ],
    "answer": 0,
    "explain": "DNS đóng vai trò như 'danh bạ Internet', dịch tên miền bằng chữ (dễ nhớ với con người) sang địa chỉ IP (dễ xử lí cho máy tính)."
  },
  {
    "id": "b08-q10",
    "q": "Trong mạng không dây Wi-Fi, tên mạng mà người dùng nhìn thấy trên điện thoại được gọi là gì?",
    "options": [
      "SSID (Service Set Identifier).",
      "Mã địa chỉ MAC phần cứng mạng.",
      "Tần số quét dòng ngang của màn hình.",
      "Mã vạch định danh của sản phẩm."
    ],
    "answer": 0,
    "explain": "SSID là tên nhận dạng của một mạng không dây (ví dụ: 'Wi-Fi THPT Phuc Hoa')."
  },
  {
    "id": "b08-q11",
    "q": "Công nghệ mạng di động 5G có ưu điểm vượt trội nào so với thế hệ 4G trước đó?",
    "options": [
      "Tốc độ truyền dữ liệu nhanh gấp hàng chục lần và độ trễ (latency) cực kì thấp.",
      "Cho phép điện thoại sử dụng không cần sạc pin trong suốt mười năm liên tục.",
      "Làm cho toàn bộ các thiết bị thu phát sóng 5G không phát ra bất kì bức xạ nào.",
      "Chỉ phục vụ riêng cho các cuộc gọi thoại ngắn dưới một phút miễn phí."
    ],
    "answer": 0,
    "explain": "Mạng 5G đạt tốc độ hàng Gbps và độ trễ siêu thấp (dưới 1ms), lí tưởng cho xe tự hành, phẫu thuật từ xa và IoT thông minh."
  },
  {
    "id": "b08-q12",
    "q": "Một hệ thống camera giao thông giám sát xe vi phạm trên quốc lộ gửi dữ liệu về máy chủ là ví dụ về ứng dụng của:",
    "options": [
      "Mạng máy tính và Internet Vạn Vật (IoT).",
      "Phần mềm soạn thảo văn bản Microsoft Word.",
      "Trò chơi điện tử chiến thuật trên điện thoại.",
      "Mạng nội bộ độc lập không kết nối với bất kì ai."
    ],
    "answer": 0,
    "explain": "Camera thông minh tích hợp IoT truyền tải hình ảnh và dữ liệu vi phạm về trung tâm chỉ huy qua mạng viễn thông."
  },
  {
    "id": "b08-q13",
    "q": "Giao thức truyền thông mạng (Network Protocol) được định nghĩa là gì?",
    "options": [
      "Tập hợp các quy tắc và chuẩn mực quy định cách thức trao đổi thông tin giữa các thiết bị mạng.",
      "Chi phí cước thuê bao hàng tháng mà người dùng phải đóng cho nhà mạng viễn thông.",
      "Hợp đồng kinh tế giữa người mua máy tính và cửa hàng phân phối linh kiện điện tử.",
      "Thời gian bảo hành chính hãng của thiết bị phát sóng Wi-Fi trong gia đình."
    ],
    "answer": 0,
    "explain": "Giao thức mạng là tập hợp quy tắc chuẩn xác định cú pháp, ngữ nghĩa và đồng bộ hóa truyền thông (như TCP/IP, HTTP, FTP)."
  },
  {
    "id": "b08-q14",
    "q": "Khi duyệt web an toàn, giao thức nào thường xuất hiện trên thanh địa chỉ có biểu tượng ổ khóa bảo mật?",
    "options": [
      "HTTPS (Hypertext Transfer Protocol Secure).",
      "HTTP (Hypertext Transfer Protocol không mã hóa).",
      "FTP (File Transfer Protocol truyền tệp).",
      "SMTP (Simple Mail Transfer Protocol gửi thư)."
    ],
    "answer": 0,
    "explain": "HTTPS mã hóa dữ liệu truyền tải giữa trình duyệt và máy chủ bằng chứng chỉ số SSL/TLS, ngăn chặn kẻ xấu nghe lén."
  },
  {
    "id": "b08-q15",
    "q": "Trong mô hình mạng máy tính, 'Băng thông' (Bandwidth) biểu thị điều gì?",
    "options": [
      "Lượng dữ liệu tối đa có thể truyền qua một kết nối mạng trong một đơn vị thời gian (như Mbps, Gbps).",
      "Độ rộng của sợi dây cáp mạng tính bằng đơn vị milimet đo bằng thước kẹp.",
      "Khoảng cách địa lí thực tế tính bằng kilômét giữa hai máy tính kết nối nhau.",
      "Số lượng người dùng tối đa được phép đăng kí tài khoản mạng xã hội."
    ],
    "answer": 0,
    "explain": "Băng thông là tốc độ truyền dữ liệu tối đa của kênh truyền, đo bằng bps (bit per second), Mbps hoặc Gbps."
  },
  {
    "id": "b08-q16",
    "q": "Thiết bị Switch (Bộ chuyển mạch) trong mạng LAN có vai trò gì?",
    "options": [
      "Kết nối nhiều thiết bị với nhau và chuyển tiếp dữ liệu chính xác đến đúng cổng của thiết bị đích.",
      "Phát sóng truyền hình vệ tinh phục vụ công tác thông tin văn hóa của nhà trường.",
      "Chống sét đánh trực tiếp vào hệ thống đường dây điện của tòa nhà cao tầng.",
      "Tự động dịch các tệp tài liệu tiếng nước ngoài sang tiếng Việt miễn phí."
    ],
    "answer": 0,
    "explain": "Switch kết nối các máy tính trong mạng LAN và chuyển khung dữ liệu (frame) tới đúng địa chỉ MAC của cổng đích."
  }
];
