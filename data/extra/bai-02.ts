import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-02: Vai trò của thiết bị thông minh và tin học đối với xã hội

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b02-tf01",
      "context": "Gia đình bạn Lan tại thị trấn Phục Hòa vừa lắp đặt hệ thống Nhà thông minh gồm: khóa cửa vân tay, camera an ninh kết nối Wi-Fi, bóng đèn tự động bật khi có người và điều hòa điều khiển qua ứng dụng điện thoại:",
      "statements": [
        {
          "text": "Bóng đèn có cảm biến chuyển động tự bật sáng là một ví dụ cụ thể về thiết bị thông minh IoT.",
          "answer": true,
          "explain": "Đúng. Thiết bị có cảm biến thu thập thông tin môi trường và tự động kích hoạt chức năng chiếu sáng."
        },
        {
          "text": "Lan có thể bật điều hòa ở nhà từ trường học thông qua mạng 4G trước khi về tới nhà 15 phút.",
          "answer": true,
          "explain": "Đúng. Các thiết bị IoT kết nối máy chủ đám mây cho phép điều khiển từ xa qua Internet."
        },
        {
          "text": "Khóa cửa vân tay chỉ nhận diện được dấu vân tay nếu gia đình Lan có kết nối với máy chủ đặt tại nước ngoài.",
          "answer": false,
          "explain": "Sai. Dữ liệu vân tay được lưu trữ và so khớp trực tiếp trên bộ nhớ cục bộ của khóa."
        },
        {
          "text": "Việc lắp đặt nhiều thiết bị thông minh kết nối Wi-Fi tiềm ẩn nguy cơ bị tin tặc tấn công nếu không đổi mật khẩu mặc định.",
          "answer": true,
          "explain": "Đúng. Thiết bị IoT không đổi mật khẩu mặc định rất dễ bị kẻ xấu xâm nhập theo dõi."
        }
      ]
    },
    {
      "id": "b02-tf02",
      "context": "Trong buổi sinh hoạt chuyên đề 'Công dân số và Tin học hóa', học sinh thảo luận về ứng dụng của trí tuệ nhân tạo (AI) và xe tự hành:",
      "statements": [
        {
          "text": "Xe ô tô tự hành lái hoàn toàn tự động dựa vào hệ thống camera, cảm biến rada và thuật toán AI xử lý hình ảnh.",
          "answer": true,
          "explain": "Đúng. Xe tự hành kết hợp cảm biến đa tầng và AI để nhận biết biển báo, vật cản và làn đường."
        },
        {
          "text": "Khi xe tự hành xảy ra va chạm trên đường, việc quy trách nhiệm pháp lý giữa nhà sản xuất, lập trình viên và người sở hữu là một vấn đề pháp lý mới đang được thảo luận.",
          "answer": true,
          "explain": "Đúng. Khía cạnh pháp lý và đạo đức của xe tự hành là chủ đề lớn của xã hội thông tin."
        },
        {
          "text": "Mọi hệ thống tự động đóng ngắt đơn giản trong gia đình đều được coi là trí tuệ nhân tạo (AI).",
          "answer": false,
          "explain": "Sai. Tự động hóa cơ học (như phao ngắt nước) không phải là AI vì không có quá trình học hay xử lí thông minh."
        },
        {
          "text": "Công nghệ số giúp giảm thiểu thời gian xử lý thủ tục hành chính công cho người dân thông qua Cổng Dịch vụ công quốc gia.",
          "answer": true,
          "explain": "Đúng. Dịch vụ công trực tuyến giúp người dân nộp hồ sơ, đóng phí mà không cần trực tiếp xếp hàng."
        }
      ]
    },
    {
      "id": "b02-tf03",
      "context": "Bác sĩ tại bệnh viện huyện sử dụng hệ thống y tế từ xa (Telemedicine) để hội chẩn ca bệnh nặng với các chuyên gia đầu ngành tại Bệnh viện Bạch Mai (Hà Nội):",
      "statements": [
        {
          "text": "Hệ thống Telemedicine truyền tải hình ảnh chụp CT-Scanner có độ phân giải cao qua đường truyền Internet chuyên dụng.",
          "answer": true,
          "explain": "Đúng. Dữ liệu ảnh y khoa số hóa (chuẩn DICOM) được truyền trực tuyến phục vụ chẩn đoán."
        },
        {
          "text": "Bác sĩ tuyến trên có thể hướng dẫn kíp mổ tuyến dưới xử lý các tình huống phức tạp theo thời gian thực.",
          "answer": true,
          "explain": "Đúng. Hội chẩn trực tuyến video độ nét cao cho phép tương tác trực tiếp trong phòng mổ."
        },
        {
          "text": "Ứng dụng Tin học trong y tế làm giảm vai trò y đức và trách nhiệm của người thầy thuốc đối với bệnh nhân.",
          "answer": false,
          "explain": "Sai. Công nghệ là công cụ hỗ trợ nâng cao hiệu quả điều trị, không làm suy giảm y đức."
        },
        {
          "text": "Hồ sơ bệnh án điện tử giúp người bệnh không cần mang theo nhiều giấy tờ xét nghiệm cồng kềnh khi đi khám lại.",
          "answer": true,
          "explain": "Đúng. Bệnh án điện tử liên thông giúp bác sĩ tra cứu lịch sử bệnh án tức thì."
        }
      ]
    },
    {
      "id": "b02-tf04",
      "context": "Nhóm bạn trẻ khởi nghiệp tại Cao Bằng xây dựng ứng dụng di động quảng bá du lịch và nông sản đặc sản (hạt dẻ Trùng Khánh, thạch đen Thạch An):",
      "statements": [
        {
          "text": "Ứng dụng giúp kết nối trực tiếp nhà vườn với người tiêu dùng trên toàn quốc mà không cần qua nhiều khâu trung gian.",
          "answer": true,
          "explain": "Đúng. Thương mại điện tử giúp tối ưu hóa chuỗi cung ứng nông sản."
        },
        {
          "text": "Khách du lịch có thể quét mã QR tại các điểm di tích để nghe thuyết minh tự động bằng nhiều ngôn ngữ.",
          "answer": true,
          "explain": "Đúng. Thuyết minh số hóa qua mã QR là ứng dụng du lịch thông minh rất phổ biến."
        },
        {
          "text": "Việc quảng bá qua ứng dụng di động sẽ triệt tiêu hoàn toàn nhu cầu đến trải nghiệm thực tế tại địa phương.",
          "answer": false,
          "explain": "Sai. Tiếp thị số kích thích nhu cầu trải nghiệm thực tế của du khách."
        },
        {
          "text": "Thanh toán bằng mã VietQR giúp giao dịch mua bán nông sản diễn ra an toàn, minh bạch và tức thì.",
          "answer": true,
          "explain": "Đúng. Thanh toán không tiền mặt qua QR chuẩn hóa đem lại tiện ích lớn cho kinh tế số."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b02-es01",
      "q": "Thiết bị thông minh là gì? Nêu 3 ví dụ về thiết bị thông minh em thường gặp trong đời sống và phân tích lợi ích cụ thể mà một trong ba thiết bị đó mang lại.",
      "answer": "1. Khái niệm:\nThiết bị thông minh là thiết bị điện tử có khả năng xử lí thông tin, có thể kết nối với các thiết bị khác hoặc mạng Internet để trao đổi dữ liệu, và có mức độ tự chủ nhất định trong vận hành.\n\n2. Ba ví dụ thường gặp:\n- Điện thoại thông minh (Smartphone).\n- Đồng hồ thông minh theo dõi sức khỏe (Smartwatch).\n- Robot hút bụi tự động trong gia đình.\n\n3. Phân tích lợi ích (Ví dụ Đồng hồ thông minh):\n- Tự động đo nhịp tim, nồng độ oxy trong máu và đếm số bước chân hàng ngày.\n- Cảnh báo người dùng khi nhịp tim tăng cao bất thường hoặc nhắc nhở đứng dậy vận động khi ngồi quá lâu.\n- Giúp người đeo chủ động theo dõi và nâng cao sức khỏe bản thân."
    },
    {
      "id": "b02-es02",
      "q": "Phân tích những tác động tích cực và mặt trái tiêu cực của Tin học và mạng xã hội đối với lứa tuổi học sinh THPT hiện nay. Học sinh cần rèn luyện những thói quen gì để trở thành người sử dụng công nghệ thông minh?",
      "answer": "1. Tác động tích cực:\n- Mở rộng kho tàng tri thức: Tra cứu bài học, học trực tuyến, giao lưu học thuật dễ dàng.\n- Nâng cao kĩ năng số: Rèn luyện khả năng sử dụng phần mềm, giao tiếp và làm việc nhóm từ xa.\n- Kết nối bạn bè, giải trí lành mạnh sau giờ học căng thẳng.\n\n2. Mặt trái tiêu cực:\n- Nguy cơ nghiện mạng xã hội, lười vận động dẫn đến các bệnh về mắt, cột sống, trầm cảm.\n- Dễ tiếp cận thông tin xấu độc, tin giả hoặc bị lừa đảo trên không gian mạng.\n- Sao nhãng việc học tập chính khóa trên lớp.\n\n3. Thói quen cần rèn luyện:\n- Đặt giới hạn thời gian sử dụng thiết bị số (không quá 2-3 giờ/ngày cho mục đích giải trí).\n- Kiểm chứng thông tin trước khi chia sẻ; bảo vệ mật khẩu và thông tin cá nhân.\n- Tận dụng công nghệ làm công cụ đắc lực phục vụ học tập và sáng tạo."
    }
  ]
};
