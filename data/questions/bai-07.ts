import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-07: Thực hành sử dụng thiết bị số thông dụng
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b07-q01",
    "q": "Cổng kết nối USB Type-C hiện đại có ưu điểm nổi bật nào so với cổng Micro-USB truyền thống?",
    "options": [
      "Thiết kế đối xứng cắm được cả hai chiều, truyền dữ liệu tốc độ cao và hỗ trợ sạc nhanh.",
      "Chỉ cho phép truyền tải tín hiệu âm thanh analog chứ không thể truyền dữ liệu số.",
      "Bắt buộc người dùng phải cài đặt thêm trình điều khiển phức tạp mỗi lần cắm cáp kết nối.",
      "Làm cho thiết bị điện thoại không bao giờ bị nóng máy trong suốt quá trình sạc pin."
    ],
    "answer": 0,
    "explain": "USB Type-C cắm được 2 chiều, truyền dữ liệu cực nhanh (lên tới 40Gbps với Thunderbolt), truyền hình ảnh 4K và hỗ trợ sạc nhanh công suất lớn."
  },
  {
    "id": "b07-q02",
    "q": "Cổng kết nối HDMI trên máy tính và máy chiếu có chức năng chính là gì?",
    "options": [
      "Truyền tải đồng thời cả tín hiệu hình ảnh độ nét cao và âm thanh số qua một sợi cáp duy nhất.",
      "Chỉ làm nhiệm vụ cung cấp nguồn điện xoay chiều 220V cho các thiết bị ngoại vi hoạt động.",
      "Chuyển đổi các bài tập văn bản viết tay thành mã nguồn lập trình Python tự động.",
      "Làm mát cho bộ vi xử lí CPU của máy tính xách tay khi trình chiếu bài giảng trên lớp."
    ],
    "answer": 0,
    "explain": "HDMI (High-Definition Multimedia Interface) truyền đồng thời video chất lượng cao và âm thanh đa kênh số hóa trên một sợi cáp."
  },
  {
    "id": "b07-q03",
    "q": "Công nghệ kết nối không dây Bluetooth thường được dùng trong trường hợp nào dưới đây?",
    "options": [
      "Kết nối cự li ngắn giữa điện thoại với tai nghe không dây, chuột không dây hoặc loa di động.",
      "Truyền dữ liệu giữa hai máy tính đặt ở hai thành phố cách xa nhau hàng trăm cây số.",
      "Phát sóng truyền hình vệ tinh phục vụ cho hàng triệu hộ gia đình trên cả nước theo dõi.",
      "Cung cấp điện năng chiếu sáng cho các bóng đèn cao áp trên đường cao tốc ban đêm."
    ],
    "answer": 0,
    "explain": "Bluetooth là chuẩn kết nối vô tuyến tầm ngắn (khoảng dưới 10m - 15m), tiết kiệm năng lượng, lí tưởng cho tai nghe, loa, chuột, bàn phím."
  },
  {
    "id": "b07-q04",
    "q": "Phương pháp nào sau đây giúp sao lưu ảnh và video từ điện thoại an toàn mà không sợ mất khi điện thoại bị hỏng?",
    "options": [
      "Bật tính năng tự động đồng bộ và sao lưu lên dịch vụ đám mây (Google Drive, iCloud, OneDrive).",
      "Chỉ lưu trữ duy nhất trên bộ nhớ trong của điện thoại và tắt hoàn toàn kết nối Wi-Fi.",
      "Chụp ảnh màn hình lại các bức ảnh cũ rồi xóa các bức ảnh gốc đi để tiết kiệm bộ nhớ.",
      "Ghi chép lại tên các tệp ảnh và kích thước tệp vào một cuốn sổ tay học tập bằng bút bi."
    ],
    "answer": 0,
    "explain": "Lưu trữ đám mây tự động sao lưu dữ liệu lên máy chủ an toàn, giúp lấy lại ảnh nguyên vẹn kể cả khi điện thoại bị mất hoặc hỏng."
  },
  {
    "id": "b07-q05",
    "q": "Để kết nối điện thoại thông minh với máy tính thông qua cáp sạc USB nhằm truyền tệp, ta cần làm gì trên điện thoại?",
    "options": [
      "Mở khóa màn hình điện thoại và chọn chế độ kết nối 'Truyền tệp' (File Transfer / MTP).",
      "Tắt nguồn điện thoại ngay lập tức và tháo thẻ nhớ ngoài ra khỏi khe cắm sim.",
      "Bật chế độ máy bay và tắt toàn bộ các ứng dụng chạy ngầm trên hệ điều hành.",
      "Đặt lại toàn bộ cài đặt gốc của điện thoại về trạng thái xuất xưởng ban đầu."
    ],
    "answer": 0,
    "explain": "Khi cắm cáp, điện thoại mặc định ở chế độ 'Chỉ sạc'; người dùng phải chọn 'Truyền tệp / MTP' thì máy tính mới nhận diện ổ đĩa."
  },
  {
    "id": "b07-q06",
    "q": "Biện pháp bảo mật màn hình khóa điện thoại thông minh nào dưới đây tiện lợi và an toàn nhất hiện nay?",
    "options": [
      "Xác thực sinh trắc học bằng cảm biến vân tay hoặc nhận diện khuôn mặt 3D.",
      "Không cài đặt bất kì mật khẩu khóa màn hình nào để mở máy cho nhanh.",
      "Đặt mật khẩu số đơn giản dễ nhớ gồm 4 chữ số '0000' hoặc '1234'.",
      "Vẽ hình mở khóa đơn giản là một đường thẳng nối 3 điểm từ trái sang phải."
    ],
    "answer": 0,
    "explain": "Bảo mật sinh trắc học (vân tay, khuôn mặt) có tính duy nhất cao, khó sao chép và mở khóa cực nhanh."
  },
  {
    "id": "b07-q07",
    "q": "Để giải phóng dung lượng bộ nhớ khi điện thoại báo 'Bộ nhớ gần đầy', hành động nào sau đây là hợp lí nhất?",
    "options": [
      "Dọn dẹp bộ nhớ đệm (Cache), xóa bớt video trùng lặp và gỡ các ứng dụng lâu không dùng.",
      "Đập vỡ màn hình cảm ứng để lắp thêm một thanh nhớ RAM máy tính để bàn vào máy.",
      "Tải thêm hàng chục phần mềm dọn rác không rõ nguồn gốc từ các trang web quảng cáo.",
      "Ngừng sạc pin cho điện thoại vì cắm sạc pin sẽ làm bộ nhớ điện thoại bị đầy lên."
    ],
    "answer": 0,
    "explain": "Xóa bộ nhớ đệm cache, xóa video tệp tải về thừa và gỡ bỏ ứng dụng không dùng giúp giải phóng nhiều GB bộ nhớ an toàn."
  },
  {
    "id": "b07-q08",
    "q": "Khi tải và cài đặt ứng dụng mới cho điện thoại thông minh, người dùng nên cài từ nguồn nào để tránh mã độc?",
    "options": [
      "Kho ứng dụng chính thức của hệ điều hành (Google Play Store trên Android hoặc App Store trên iOS).",
      "Các liên kết lạ gửi qua tin nhắn Zalo, Facebook Messenger từ tài khoản người lạ mặt.",
      "Các trang web chia sẻ tệp bẻ khóa (crack) có nhiều biểu ngữ quảng cáo nhấp nháy.",
      "Tải từ các diễn đàn kín yêu cầu người dùng phải cung cấp mật khẩu tài khoản ngân hàng."
    ],
    "answer": 0,
    "explain": "Kho ứng dụng chính thức (Google Play, App Store) kiểm duyệt mã độc nghiêm ngặt trước khi cho phép người dùng tải về."
  },
  {
    "id": "b07-q09",
    "q": "Tính năng Wi-Fi Hotspot (Điểm phát sóng di động) trên điện thoại thông minh có tác dụng gì?",
    "options": [
      "Chia sẻ kết nối dữ liệu mạng 4G/5G của điện thoại thành sóng Wi-Fi cho các thiết bị khác sử dụng.",
      "Biến chiếc điện thoại thông minh thành một chiếc ti vi màn hình phẳng xem phim miễn phí.",
      "Tự động tăng tốc độ xử lí của chip đồ họa trên điện thoại lên gấp mười lần bình thường.",
      "Giúp điện thoại tự động kết nối được với các vệ tinh thám hiểm ngoài không gian."
    ],
    "answer": 0,
    "explain": "Hotspot cho phép điện thoại biến thành bộ phát Wi-Fi di động, chia sẻ Internet từ gói cước 4G/5G cho máy tính hoặc thiết bị khác."
  },
  {
    "id": "b07-q10",
    "q": "Khi muốn chiếu màn hình điện thoại thông minh lên màn hình máy tính hoặc Smart TV không dây, ta có thể dùng tính năng nào?",
    "options": [
      "Phản chiếu màn hình (Screen Mirroring / Smart View / AirPlay / Cast).",
      "Chế độ Không làm phiền (Do Not Disturb) trên thanh cài đặt nhanh của máy.",
      "Tính năng ghi âm cuộc gọi tự động tích hợp trong ứng dụng danh bạ điện thoại.",
      "Chế độ tiết kiệm pin tối đa (Ultra Power Saving Mode) của hệ điều hành."
    ],
    "answer": 0,
    "explain": "Screen Mirroring / Cast / AirPlay truyền hình ảnh và âm thanh qua mạng Wi-Fi nội bộ lên màn hình TV hoặc máy tính."
  },
  {
    "id": "b07-q11",
    "q": "Hành vi nào dưới đây có thể làm chai pin hoặc gây nguy cơ cháy nổ pin điện thoại?",
    "options": [
      "Vừa sạc pin vừa chơi game nặng trong thời gian dài dưới trời nóng bằng bộ sạc kém chất lượng.",
      "Rút phích cắm sạc ra khỏi ổ điện khi pin điện thoại đã nạp đầy 100% dung lượng.",
      "Sử dụng cáp sạc và củ sạc chính hãng đi kèm theo hộp máy của nhà sản xuất.",
      "Bật chế độ tiết kiệm pin khi điện thoại chỉ còn dưới 20% dung lượng pin khả dụng."
    ],
    "answer": 0,
    "explain": "Vừa sạc vừa dùng tác vụ nặng làm pin nóng quá mức, sạc trôi nổi không ngắt dòng dễ dẫn đến phồng pin và chập cháy."
  },
  {
    "id": "b07-q12",
    "q": "Tại sao một số ứng dụng đèn pin hoặc máy tính cầm tay lại đòi quyền truy cập 'Danh bạ' và 'Vị trí GPS' của điện thoại?",
    "options": [
      "Có thể là ứng dụng rác chứa mã độc nhằm thu thập lén dữ liệu cá nhân của người dùng.",
      "Vì ứng dụng đèn pin bắt buộc phải biết vị trí địa lí thì bóng đèn LED mới có thể phát sáng.",
      "Vì hệ điều hành bắt buộc mọi ứng dụng tải về đều phải truy cập vào danh bạ điện thoại.",
      "Để giúp người dùng có thể chiếu đèn pin tới đúng vị trí của bạn bè trong danh bạ."
    ],
    "answer": 0,
    "explain": "Cần cảnh giác với ứng dụng đòi hỏi quyền truy cập vô lí (đèn pin đòi danh bạ/GPS), đây là dấu hiệu phần mềm gián điệp thu thập dữ liệu."
  },
  {
    "id": "b07-q13",
    "q": "Để chuyển nhanh một tệp tài liệu dung lượng lớn giữa hai máy tính bảng ở gần nhau mà không cần kết nối Internet, ta nên dùng:",
    "options": [
      "Wi-Fi Direct hoặc tính năng chia sẻ lân cận (Quick Share / AirDrop).",
      "Gửi tệp đính kèm qua dịch vụ thư điện tử Gmail của hãng Google.",
      "Đăng tệp tin lên trang mạng xã hội Facebook dưới chế độ công khai.",
      "In tài liệu ra giấy rồi dùng điện thoại bên kia chụp ảnh lại từng trang."
    ],
    "answer": 0,
    "explain": "Quick Share (Android) và AirDrop (Apple) kết hợp Bluetooth để kết nối và Wi-Fi Direct để truyền tệp tốc độ rất cao không cần Internet."
  },
  {
    "id": "b07-q14",
    "q": "Thẻ nhớ MicroSD cắm vào điện thoại thông minh thường được định dạng theo hệ thống tệp nào để lưu trữ được các tệp video lớn hơn 4 GB?",
    "options": [
      "exFAT hoặc NTFS.",
      "FAT32 (bị giới hạn kích thước tệp tối đa đúng 4 GB).",
      "ASCII 7-bit.",
      "Unicode UTF-8."
    ],
    "answer": 0,
    "explain": "FAT32 chỉ chứa được tệp tối đa 4 GB; định dạng exFAT hỗ trợ tệp dung lượng cực lớn, tương thích tốt với thẻ nhớ hiện đại."
  },
  {
    "id": "b07-q15",
    "q": "Khi một thiết bị số bị rơi xuống nước ngọt, thao tác đầu tiên và khẩn cấp nhất cần làm là gì?",
    "options": [
      "Lập tức tắt nguồn thiết bị ngay, lau khô bên ngoài và tuyệt đối không cắm sạc pin.",
      "Cắm sạc pin ngay lập tức để kiểm tra xem màn hình thiết bị có còn sáng hay không.",
      "Dùng máy sấy tóc bật nấc nhiệt độ nóng tối đa sấy sát vào khe cắm sạc của máy.",
      "Bật các ứng dụng trò chơi nặng lên để máy tính tự sinh nhiệt làm khô nước bên trong."
    ],
    "answer": 0,
    "explain": "Ngay lập tức ngắt nguồn, không bật máy, không cắm sạc để tránh đoản mạch làm cháy chip mạch điện tử."
  },
  {
    "id": "b07-q16",
    "q": "Cơ chế sao lưu dữ liệu '3-2-1' được các chuyên gia công nghệ khuyên dùng nghĩa là gì?",
    "options": [
      "Có ít nhất 3 bản sao lưu, trên 2 loại phương tiện khác nhau, và 1 bản đặt ở nơi cách biệt (đám mây).",
      "Sao lưu 3 lần trong một ngày, mỗi lần cách nhau đúng 2 tiếng và lưu trữ trong vòng 1 năm.",
      "Chỉ sao lưu các tệp có dung lượng từ 3 GB đến 2 GB và xóa bỏ các tệp có dung lượng 1 GB.",
      "Sử dụng 3 chiếc điện thoại để điều khiển 2 chiếc máy tính và 1 chiếc máy chiếu tại phòng học."
    ],
    "answer": 0,
    "explain": "Quy tắc sao lưu vàng 3-2-1: 3 bản sao dữ liệu, lưu trên 2 loại phương tiện (ổ cứng + USB/NAS), 1 bản lưu ngoại vi (Cloud) phòng thiên tai/hỏa hoạn."
  }
];
