import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-08: Mạng máy tính trong cuộc sống hiện đại

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b08-tf01",
      "context": "Trường THPT Phục Hòa xây dựng hệ thống mạng phục vụ dạy và học: Phòng Tin học gồm 30 máy tính kết nối với Switch, văn phòng các tổ bộ môn kết nối Wi-Fi, toàn trường dùng chung đường truyền Internet cáp quang 300 Mbps:",
      "statements": [
        {
          "text": "Mạng máy tính trong phòng Tin học của trường là một mạng cục bộ (LAN).",
          "answer": true,
          "explain": "Đúng. Mạng trong một phòng học có phạm vi hẹp là mạng LAN."
        },
        {
          "text": "Mỗi máy tính trong phòng Tin học khi kết nối vào mạng đều được cấp phát một địa chỉ IP riêng biệt để phân biệt.",
          "answer": true,
          "explain": "Đúng. Địa chỉ IP là định danh duy nhất của mỗi nút mạng."
        },
        {
          "text": "Đường truyền Internet 300 Mbps biểu thị tốc độ băng thông tối đa của kênh truyền dữ liệu của nhà trường.",
          "answer": true,
          "explain": "Đúng. 300 Megabit trên giây là chỉ số băng thông kết nối."
        },
        {
          "text": "Nếu máy chủ của nhà mạng cung cấp dịch vụ Internet bị sự cố đứt cáp quang biển, học sinh trong phòng Tin học không thể chia sẻ tệp cho nhau qua mạng LAN nội bộ.",
          "answer": false,
          "explain": "Sai. Mạng LAN nội bộ vẫn hoạt động bình thường để chia sẻ tệp cục bộ mà không phụ thuộc vào đường truyền Internet ra bên ngoài."
        }
      ]
    },
    {
      "id": "b08-tf02",
      "context": "Nhà trường áp dụng hệ sinh thái Google Workspace for Education (Gmail, Google Drive, Google Classroom, Google Meet) vào công tác quản lí giảng dạy:",
      "statements": [
        {
          "text": "Dịch vụ Google Classroom và Google Drive thuộc mô hình Phần mềm như một dịch vụ (SaaS).",
          "answer": true,
          "explain": "Đúng. Giáo viên và học sinh dùng trực tiếp phần mềm qua nền tảng đám mây."
        },
        {
          "text": "Giáo viên và học sinh có thể cùng nhau soạn thảo một bài báo cáo trên Google Docs theo thời gian thực.",
          "answer": true,
          "explain": "Đúng. Khả năng cộng tác trực tuyến nhiều người cùng lúc là thế mạnh lớn của điện toán đám mây."
        },
        {
          "text": "Để sử dụng Google Drive, nhà trường bắt buộc phải bỏ tiền mua và vận hành hàng trăm chiếc máy chủ đắt tiền đặt tại trường.",
          "answer": false,
          "explain": "Sai. Hạ tầng máy chủ do Google quản lí và duy trì trên đám mây, trường chỉ việc sử dụng dịch vụ."
        },
        {
          "text": "Học sinh có thể xem lại bài giảng và nộp bài tập về nhà từ bất kì đâu chỉ cần thiết bị có kết nối Internet.",
          "answer": true,
          "explain": "Đúng. Tính linh hoạt không gian và thời gian là lợi ích cốt lõi của E-learning."
        }
      ]
    },
    {
      "id": "b08-tf03",
      "context": "Một công ty du lịch tại Cao Bằng triển khai hệ thống vòng đeo tay thông minh IoT cho khách tham quan tour mạo hiểm thám hiểm hang động:",
      "statements": [
        {
          "text": "Vòng đeo tay thông minh liên tục gửi dữ liệu nhịp tim và vị trí GPS của du khách về trung tâm cứu hộ.",
          "answer": true,
          "explain": "Đúng. IoT thu thập dữ liệu cảm biến và truyền về máy chủ phục vụ an toàn."
        },
        {
          "text": "Hệ thống IoT này giúp phát hiện kịp thời nếu có du khách bị lạc hoặc gặp sự cố sức khỏe trong hang.",
          "answer": true,
          "explain": "Đúng. Cảnh báo tự động theo thời gian thực giúp cứu hộ nhanh chóng."
        },
        {
          "text": "Dữ liệu định vị của du khách nếu không được bảo mật có thể bị kẻ xấu khai thác theo dõi quyền riêng tư cá nhân.",
          "answer": true,
          "explain": "Đúng. Rủi ro rò rỉ dữ liệu vị trí là vấn đề an ninh thông tin quan trọng của thiết bị IoT."
        },
        {
          "text": "Hệ thống vòng đeo tay IoT này hoạt động hoàn toàn không cần đến sóng vô tuyến hay cảm biến điện tử nào.",
          "answer": false,
          "explain": "Sai. Bản chất của IoT là sự kết hợp giữa cảm biến và kết nối truyền thông vô tuyến."
        }
      ]
    },
    {
      "id": "b08-tf04",
      "context": "Khi truy cập trang web Cổng Dịch vụ công quốc gia tại địa chỉ https://dichvucong.gov.vn:",
      "statements": [
        {
          "text": "Chữ 'https' cùng biểu tượng ổ khóa màu xám/xanh trên thanh địa chỉ xác nhận kết nối được mã hóa an toàn.",
          "answer": true,
          "explain": "Đúng. Giao thức HTTPS đảm bảo bảo mật đường truyền thông tin."
        },
        {
          "text": "Tên miền 'dichvucong.gov.vn' có phần mở rộng '.gov.vn' chứng tỏ đây là trang web chính thức của cơ quan nhà nước Việt Nam.",
          "answer": true,
          "explain": "Đúng. Đuôi tên miền '.gov.vn' dành riêng cho các cơ quan chính phủ."
        },
        {
          "text": "Máy tính người dùng tự động chuyển đổi tên miền 'dichvucong.gov.vn' thành địa chỉ IP mà không cần đến máy chủ DNS.",
          "answer": false,
          "explain": "Sai. Trình duyệt phải gửi truy vấn đến máy chủ DNS để lấy địa chỉ IP của trang web."
        },
        {
          "text": "Người dân có thể ngồi tại nhà nộp hồ sơ xin cấp đổi giấy phép lái xe trực tuyến qua trang web này.",
          "answer": true,
          "explain": "Đúng. Dịch vụ công trực tuyến mức độ toàn trình giúp giải quyết thủ tục hoàn toàn qua mạng."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b08-es01",
      "q": "Điện toán đám mây (Cloud Computing) là gì? Phân biệt 3 mô hình dịch vụ cơ bản của điện toán đám mây: IaaS, PaaS và SaaS. Nêu một ví dụ quen thuộc trong học tập của học sinh cho mỗi mô hình đó.",
      "answer": "1. Khái niệm Điện toán đám mây:\nĐiện toán đám mây là mô hình cung cấp các tài nguyên công nghệ thông tin (máy chủ, lưu trữ, cơ sở dữ liệu, mạng, phần mềm) qua mạng Internet theo nhu cầu, người dùng trả phí theo mức độ sử dụng mà không cần đầu tư và duy trì hạ tầng phần cứng tại chỗ.\n\n2. Phân biệt 3 mô hình dịch vụ cơ bản:\n- IaaS (Hạ tầng như một dịch vụ):\n  + Đặc điểm: Cung cấp tài nguyên phần cứng ảo hóa thô (máy chủ ảo, dung lượng ổ đĩa, đường truyền).\n  + Ví dụ: Doanh nghiệp thuê máy chủ ảo trên Amazon AWS hoặc Viettel Cloud để tự cài đặt hệ điều hành và chạy ứng dụng trường học.\n- PaaS (Nền tảng như một dịch vụ):\n  + Đặc điểm: Cung cấp sẵn môi trường nền tảng lập trình (hệ điều hành, trình thông dịch, hệ quản trị CSDL) để lập trình viên chỉ việc phát triển và triển khai ứng dụng.\n  + Ví dụ: Nền tảng Google App Engine, Firebase hoặc Heroku giúp học sinh tải mã nguồn web lên chạy mà không cần cấu hình máy chủ.\n- SaaS (Phần mềm như một dịch vụ):\n  + Đặc điểm: Cung cấp ứng dụng phần mềm hoàn chỉnh chạy trên đám mây, người dùng cuối chỉ việc truy cập qua trình duyệt web.\n  + Ví dụ: Google Docs, Gmail, Zoom, Microsoft Teams mà học sinh sử dụng học trực tuyến mỗi ngày."
    },
    {
      "id": "b08-es02",
      "q": "Internet Vạn Vật (IoT) là gì? Hãy phân tích một mô hình ứng dụng IoT trong nông nghiệp thông minh tại vùng trồng mía huyện Quảng Hòa (tỉnh Cao Bằng). Mô hình này đem lại những lợi ích thiết thực gì cho người nông dân?",
      "answer": "1. Khái niệm Internet Vạn Vật (IoT):\nIoT (Internet of Things) là mạng lưới liên kết các đồ vật, thiết bị thông minh được tích hợp cảm biến, phần mềm và khả năng kết nối mạng để tự động thu thập, trao đổi dữ liệu và vận hành mà không cần sự can thiệp trực tiếp của con người.\n\n2. Mô hình IoT ứng dụng trồng mía thông minh tại Quảng Hòa (Cao Bằng):\n- Cảm biến đầu vào: Lắp đặt các cảm biến đo độ ẩm đất, nhiệt độ và cảm biến đo dinh dưỡng cắm sâu dưới gốc các ruộng mía.\n- Thiết bị điều khiển tự động: Hệ thống van nước điện từ và máy bơm kết nối mạng không dây (LoRa hoặc 4G/5G).\n- Ứng dụng điều hành: Máy chủ thu nhận dữ liệu độ ẩm đất liên tục; khi độ ẩm đất vườn mía giảm dưới 50%, hệ thống tự động kích hoạt máy bơm nước tưới nhỏ giọt chính xác vào từng gốc cây; khi đất đủ ẩm (75%), van tự động ngắt.\n\n3. Lợi ích thiết thực cho người nông dân:\n- Tiết kiệm nguồn nước tưới và điện năng (tưới đúng lượng, đúng thời điểm, không thừa không thiếu).\n- Tăng năng suất và chữ đường trong cây mía nhờ duy trì độ ẩm tối ưu liên tục.\n- Giảm công lao động nặng nhọc: Người nông dân có thể theo dõi và điều khiển toàn bộ cánh đồng mía hàng chục hecta ngay trên chiếc điện thoại thông minh ở nhà."
    }
  ]
};
