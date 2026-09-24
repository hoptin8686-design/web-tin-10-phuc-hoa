import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-09: An toàn trên không gian mạng
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b09-q01",
    "q": "Mã độc (Malware - Malicious Software) được định nghĩa là gì?",
    "options": [
      "Phần mềm được viết ra với mục đích gây hại cho máy tính, đánh cắp dữ liệu hoặc phá hoại hệ thống.",
      "Ứng dụng học tập trực tuyến giúp học sinh làm bài kiểm tra trắc nghiệm nhanh hơn.",
      "Trình điều khiển phần cứng của máy in giúp tăng tốc độ in ấn tài liệu trong văn phòng.",
      "Một tệp tin văn bản thuần túy không chứa bất kì đoạn mã thực thi hay câu lệnh nào."
    ],
    "answer": 0,
    "explain": "Mã độc là tên gọi chung cho phần mềm độc hại (virus, sâu, trojan, spyware, ransomware) được tạo ra nhằm phá hoại hoặc trục lợi bất chính."
  },
  {
    "id": "b09-q02",
    "q": "Điểm khác biệt cốt lõi giữa Virus máy tính và Sâu máy tính (Worm) là gì?",
    "options": [
      "Virus cần gắn vào tệp vật chủ để lây lan, còn Sâu máy tính có thể tự nhân bản độc lập qua mạng.",
      "Virus chỉ tấn công máy tính dùng Windows, còn Sâu máy tính chỉ tấn công điện thoại di động.",
      "Virus là phần cứng vi mạch hỏng hóc, còn Sâu máy tính là một tệp hình ảnh đồ họa động.",
      "Virus chỉ hoạt động vào ban ngày, còn Sâu máy tính chỉ phát tán vào ban đêm khi tắt máy."
    ],
    "answer": 0,
    "explain": "Virus cần tệp chủ (như tệp .exe, tài liệu macro) và người dùng kích hoạt để lây lan; Worm tự quét lỗ hổng mạng và tự nhân bản độc lập không cần tệp chủ."
  },
  {
    "id": "b09-q03",
    "q": "Ngựa thành Troy (Trojan Horse) trong an ninh mạng là loại mã độc như thế nào?",
    "options": [
      "Đội lốt dưới vỏ bọc một phần mềm hữu ích hoặc trò chơi hấp dẫn để lừa người dùng cài đặt.",
      "Một chương trình diệt virus uy tín do các tập đoàn an ninh mạng quốc tế phát hành.",
      "Phần mềm bản quyền chính hãng đi kèm theo máy tính xách tay khi mới mua về.",
      "Hệ điều hành mã nguồn mở chuyên dụng cho các máy tính trong trường học."
    ],
    "answer": 0,
    "explain": "Trojan giả dạng phần mềm hợp pháp (game, crack, tiện ích) đánh lừa người dùng tải về, bên trong ngầm cài cửa sau (backdoor) cho tin tặc."
  },
  {
    "id": "b09-q04",
    "q": "Mã độc tống tiền (Ransomware) gây nguy hại cho nạn nhân bằng cách nào?",
    "options": [
      "Mã hóa toàn bộ dữ liệu quan trọng của nạn nhân và đòi tiền chuộc để lấy khóa giải mã.",
      "Tự động tăng gấp đôi tốc độ tải trang web của trình duyệt Internet trên máy tính.",
      "Gửi thư khen thưởng học sinh giỏi đến hòm thư điện tử của gia đình nạn nhân.",
      "Tự động xóa sạch bụi bẩn bám trên quạt tản nhiệt của bộ vi xử lí CPU máy tính."
    ],
    "answer": 0,
    "explain": "Ransomware mã hóa tệp dữ liệu cá nhân bằng thuật toán mã hóa mạnh và hiển thị thông báo đòi tiền chuộc (thường bằng tiền ảo)."
  },
  {
    "id": "b09-q05",
    "q": "Hình thức tấn công lừa đảo 'Phishing' trên Internet thường diễn ra như thế nào?",
    "options": [
      "Giả mạo email hoặc trang web của ngân hàng, trường học để dụ nạn nhân nhập mật khẩu và mã OTP.",
      "Cắt đứt toàn bộ hệ thống dây cáp mạng ngầm dưới đáy biển bằng máy móc công nghiệp.",
      "Tấn công từ chối dịch vụ làm sập hệ thống máy chủ điện lực quốc gia bằng virus điện từ.",
      "Đến tận nhà nạn nhân để mượn chiếc máy tính cá nhân mang về phòng thí nghiệm nghiên cứu."
    ],
    "answer": 0,
    "explain": "Phishing (tấn công giả mạo) gửi email mạo danh tổ chức uy tín hoặc dựng website giả hệt trang thật để đánh cắp tên đăng nhập, mật khẩu, số thẻ."
  },
  {
    "id": "b09-q06",
    "q": "Công nghệ Deepfake được những kẻ lừa đảo sử dụng với thủ đoạn nào dưới đây?",
    "options": [
      "Sử dụng AI để làm giả khuôn mặt và giọng nói của người thân trong cuộc gọi video nhằm vay tiền.",
      "Tự động gửi tin nhắn văn bản chúc mừng sinh nhật từ tổng đài viễn thông chính thống.",
      "Thiết kế các biểu ngữ cổ động phong trào thanh niên tình nguyện tại địa phương.",
      "Chuyển đổi các bài hát dân ca truyền thống thành các giai điệu nhạc không lời du dương."
    ],
    "answer": 0,
    "explain": "Deepfake dùng trí tuệ nhân tạo ghép mặt và nhái giọng nói người thân trong cuộc gọi video giả mạo để lừa đảo chiếm đoạt tài sản."
  },
  {
    "id": "b09-q07",
    "q": "Mật khẩu nào sau đây được coi là mật khẩu mạnh và an toàn nhất?",
    "options": [
      "H@pTin#2026!PhucHoa (dài trên 12 kí tự, có chữ hoa, chữ thường, chữ số và kí tự đặc biệt).",
      "12345678 (dãy số liên tiếp rất dễ bị các phần mềm dò quét bẻ khóa).",
      "admin123 (mật khẩu mặc định phổ biến của các thiết bị mạng gia đình).",
      "nguyenvana (chỉ chứa các chữ cái in thường trùng với tên người dùng)."
    ],
    "answer": 0,
    "explain": "Mật khẩu mạnh: tối thiểu 8-12 ký tự, phối hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt, không liên quan thông tin cá nhân dễ đoán."
  },
  {
    "id": "b09-q08",
    "q": "Cơ chế 'Xác thực hai yếu tố' (2FA - Two-Factor Authentication) bảo vệ tài khoản bằng cách nào?",
    "options": [
      "Yêu cầu nhập mật khẩu kết hợp thêm một mã xác thực thứ hai gửi về số điện thoại hoặc ứng dụng xác thực.",
      "Bắt buộc người dùng phải gõ mật khẩu đúng hai lần liên tiếp thật nhanh trong vòng 5 giây.",
      "Yêu cầu hai người dùng khác nhau phải cùng ngồi trước màn hình máy tính thì mới mở được tài khoản.",
      "Khóa tài khoản vĩnh viễn ngay sau khi người dùng đăng nhập thành công vào hệ thống."
    ],
    "answer": 0,
    "explain": "2FA đòi hỏi 2 yếu tố độc lập: điều bạn biết (mật khẩu) + điều bạn có (mã OTP trên điện thoại hoặc khóa bảo mật), chống bị cướp tài khoản."
  },
  {
    "id": "b09-q09",
    "q": "Hành động nào dưới đây là NGUY HIỂM và có nguy cơ cao bị lây nhiễm mã độc vào máy tính?",
    "options": [
      "Tải và mở các tệp đính kèm có đuôi .exe, .scr gửi từ địa chỉ email người lạ mặt.",
      "Thường xuyên cập nhật phần mềm diệt virus Windows Defender lên phiên bản mới nhất.",
      "Bật tường lửa (Firewall) của hệ điều hành máy tính khi duyệt web qua mạng Internet.",
      "Sử dụng trình duyệt web phiên bản mới có tính năng cảnh báo trang web giả mạo."
    ],
    "answer": 0,
    "explain": "Mở tệp thực thi (.exe, .bat, .scr, .vbs) đính kèm từ thư rác lạ mặt là con đường phổ biến nhất để mã độc xâm nhập máy tính."
  },
  {
    "id": "b09-q10",
    "q": "Khi nhận được tin nhắn qua mạng xã hội từ một người bạn thân nhờ 'chuyển gấp 5 triệu đồng vì đang cấp cứu', em nên xử lí thế nào?",
    "options": [
      "Gọi điện thoại trực tiếp hoặc gọi qua số thuê bao di động chính thức của bạn để xác minh trước khi hành động.",
      "Lập tức chuyển tiền ngay vào số tài khoản lạ do người đó cung cấp mà không cần hỏi thêm.",
      "Chụp ảnh thẻ căn cước công dân của mình gửi cho người đó để làm tin rồi mới chuyển tiền.",
      "Xóa vĩnh viễn tài khoản mạng xã hội của mình ngay lập tức vì sợ bị lây nhiễm virus."
    ],
    "answer": 0,
    "explain": "Tài khoản mạng xã hội rất dễ bị hack hoặc mạo danh; bắt buộc phải gọi điện thoại trực tiếp để xác thực giọng nói người thân trước khi giao dịch tiền."
  },
  {
    "id": "b09-q11",
    "q": "Phần mềm gián điệp (Spyware) thường thực hiện hành vi xấu nào đối với người dùng?",
    "options": [
      "Âm thầm theo dõi thao tác bàn phím (Keylogger), chụp màn hình và gửi mật khẩu của nạn nhân về cho tin tặc.",
      "Tự động tăng dung lượng bộ nhớ RAM và làm sạch quạt tản nhiệt của máy tính từ xa.",
      "Tự động biên tập lại các bức ảnh gia đình của nạn nhân thành các tác phẩm nghệ thuật.",
      "Thay đổi ngôn ngữ hiển thị của hệ điều hành sang tiếng La-tinh cổ điển."
    ],
    "answer": 0,
    "explain": "Spyware (đặc biệt là Keylogger) ghi lại mọi thao tác gõ phím để đánh cắp mật khẩu, số thẻ tín dụng, tin nhắn riêng tư."
  },
  {
    "id": "b09-q12",
    "q": "Mạng Wi-Fi công cộng miễn phí (tại quán cà phê, công viên, nhà ga) tiềm ẩn nguy cơ an ninh nào?",
    "options": [
      "Dễ bị tin tặc dựng điểm phát Wi-Fi giả mạo (Evil Twin) để đánh chặn và nghe lén dữ liệu truyền tải.",
      "Làm cho pin của chiếc điện thoại di động bị phóng điện gây cháy nổ ngay lập tức.",
      "Khiến cho toàn bộ danh bạ trong máy tự động biến đổi thành số điện thoại quốc tế.",
      "Làm cho camera điện thoại không thể chụp ảnh được nữa trong vòng một tuần."
    ],
    "answer": 0,
    "explain": "Wi-Fi công cộng không có mật khẩu mã hóa dễ bị kẻ xấu tạo bẫy Wi-Fi giả mạo bắt trọn dữ liệu đăng nhập nhạy cảm (Man-in-the-Middle)."
  },
  {
    "id": "b09-q13",
    "q": "Tường lửa (Firewall) trong hệ thống máy tính có chức năng cơ bản là gì?",
    "options": [
      "Giám sát và kiểm soát lưu lượng mạng ra vào hệ thống dựa trên các quy tắc an toàn được thiết lập.",
      "Bảo vệ máy tính không bị cháy khi có hỏa hoạn xảy ra trong phòng làm việc.",
      "Tăng nhiệt độ của vỏ máy tính để tiêu diệt các loại vi khuẩn bám trên bàn phím.",
      "Tự động chuyển đổi các tệp tin văn bản thành các đoạn mã lập trình Python."
    ],
    "answer": 0,
    "explain": "Firewall là rào chắn an ninh mạng, ngăn chặn các kết nối trái phép từ Internet vào máy tính và chặn mã độc gửi dữ liệu ra ngoài."
  },
  {
    "id": "b09-q14",
    "q": "Một học sinh đăng tải công khai ảnh chụp Giấy báo trúng tuyển đại học (kèm đầy đủ họ tên, ngày sinh, số CCCD, mã số học sinh) lên Facebook. Nguy cơ nào có thể xảy ra?",
    "options": [
      "Kẻ xấu có thể lợi dụng thông tin định danh đó để mở tài khoản ngân hàng lừa đảo hoặc vay tiền trực tuyến.",
      "Nhà trường sẽ lập tức hủy bỏ kết quả trúng tuyển của học sinh đó ngay sau khi bài đăng xuất hiện.",
      "Tài khoản Facebook của học sinh đó sẽ tự động bị khóa vĩnh viễn trong vòng một tiếng đồng hồ.",
      "Toàn bộ bạn bè trên mạng xã hội sẽ bị mất quyền truy cập vào mạng Internet."
    ],
    "answer": 0,
    "explain": "Lộ lọt thông tin định danh cá nhân (CCCD, ngày sinh, địa chỉ) là nguồn dữ liệu vàng cho tội phạm mạng mở tài khoản ảo lừa đảo hoặc vay nợ tín dụng đen."
  },
  {
    "id": "b09-q15",
    "q": "Khi phát hiện máy tính cá nhân bị nhiễm mã độc tống tiền (Ransomware), hành động khẩn cấp đầu tiên là gì?",
    "options": [
      "Ngắt ngay kết nối mạng (rút cáp mạng LAN, tắt Wi-Fi) để ngăn mã độc lây lan sang các máy tính khác trong mạng.",
      "Lập tức chuyển tiền chuộc theo yêu cầu của tin tặc để lấy lại tệp dữ liệu nguyên vẹn.",
      "Cắm thêm thật nhiều USB và ổ cứng ngoài vào máy tính để sao lưu dữ liệu sang đó.",
      "Bật loa máy tính lên mức âm lượng to nhất để cảnh báo cho người xung quanh biết."
    ],
    "answer": 0,
    "explain": "Lập tức cô lập thiết bị khỏi mạng (ngắt LAN/Wi-Fi), tuyệt đối không cắm thêm ổ cứng ngoài (sẽ bị mã hóa tiếp) và nhờ chuyên gia hỗ trợ."
  },
  {
    "id": "b09-q16",
    "q": "Để bảo vệ dữ liệu khi sử dụng mạng Wi-Fi công cộng, người dùng nên cài đặt và kích hoạt phần mềm nào?",
    "options": [
      "Mạng riêng ảo (VPN - Virtual Private Network) để mã hóa toàn bộ lưu lượng dữ liệu truyền đi.",
      "Phần mềm chỉnh sửa video đa phương tiện Adobe Premiere Pro trên điện thoại.",
      "Trò chơi điện tử trực tuyến có đồ họa 3D chuyển động tốc độ cao.",
      "Ứng dụng từ điển dịch tự động ngoại ngữ sang tiếng Việt không cần mạng."
    ],
    "answer": 0,
    "explain": "VPN tạo ra một đường hầm mã hóa (encrypted tunnel) bảo vệ dữ liệu khỏi bị nghe lén khi dùng Wi-Fi nơi công cộng."
  }
];
