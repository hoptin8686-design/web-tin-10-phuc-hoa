import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-09: An toàn trên không gian mạng

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b09-tf01",
      "context": "Bạn Hà nhận được một email có tiêu đề: 'Cảnh báo: Tài khoản Facebook của bạn sắp bị khóa. Nhấp vào đây để xác minh danh tính ngay trong vòng 24 giờ':",
      "statements": [
        {
          "text": "Đây là dấu hiệu điển hình của một cuộc tấn công lừa đảo giả mạo (Phishing).",
          "answer": true,
          "explain": "Đúng. Tạo tâm lý hoang mang, khẩn cấp để ép người dùng bấm vào liên kết độc hại là chiêu thức quen thuộc của Phishing."
        },
        {
          "text": "Hà nên nhấp ngay vào liên kết đó và nhập mật khẩu để tránh bị khóa tài khoản theo yêu cầu trong thư.",
          "answer": false,
          "explain": "Sai. Tuyệt đối không nhấp vào liên kết lạ trong email cảnh báo bất thường."
        },
        {
          "text": "Hà có thể kiểm tra địa chỉ người gửi (email header) để xem thư có thực sự được gửi từ tên miền chính thống của Facebook hay không.",
          "answer": true,
          "explain": "Đúng. Kẻ lừa đảo thường dùng địa chỉ email giả mạo gần giống (như security@faceb00k-support.com)."
        },
        {
          "text": "Nếu Hà đã lỡ nhập mật khẩu vào trang web đó, Hà cần lập tức vào ứng dụng Facebook chính thức đổi mật khẩu ngay và đăng xuất khỏi mọi thiết bị.",
          "answer": true,
          "explain": "Đúng. Đổi mật khẩu khẩn cấp và kích hoạt 2FA để khóa quyền truy cập của tin tặc."
        }
      ]
    },
    {
      "id": "b09-tf02",
      "context": "Gần đây trên địa bàn có vụ việc kẻ xấu gọi video mạo danh một người con đi làm ăn xa tại Hà Nội gọi về cho bố mẹ ở Phục Hòa nhờ chuyển tiền gấp:",
      "statements": [
        {
          "text": "Cuộc gọi video có hình ảnh và giọng nói cử động giật cục, thiếu tự nhiên là dấu hiệu của việc sử dụng công nghệ Deepfake.",
          "answer": true,
          "explain": "Đúng. Deepfake thường có các khiếm khuyết: cử động mắt không tự nhiên, khuôn mặt mờ nhòe khi nghiêng đầu, tiếng nói méo."
        },
        {
          "text": "Kẻ lừa đảo thường lấy cắp hình ảnh và giọng nói từ các video công khai mà người con đăng tải trên mạng xã hội TikTok, Facebook.",
          "answer": true,
          "explain": "Đúng. Dữ liệu huấn luyện AI nhái mặt và giọng được thu thập từ bài đăng công khai của nạn nhân."
        },
        {
          "text": "Khi nhận được cuộc gọi vay tiền khẩn cấp qua video, người thân nên đặt một câu hỏi bí mật chỉ có người trong nhà biết để kiểm chứng.",
          "answer": true,
          "explain": "Đúng. Hỏi câu hỏi riêng tư mà AI không thể biết là phương pháp kiểm chứng danh tính rất hiệu quả."
        },
        {
          "text": "Công nghệ Deepfake chỉ có thể tạo ra âm thanh tiếng nói chứ hoàn toàn không thể làm giả được khuôn mặt cử động.",
          "answer": false,
          "explain": "Sai. Deepfake có khả năng mô phỏng và tái tạo cả hình ảnh khuôn mặt động lẫn giọng nói rất tinh vi."
        }
      ]
    },
    {
      "id": "b09-tf03",
      "context": "Nhóm học sinh trao đổi về thói quen đặt mật khẩu và bảo vệ tài khoản cá nhân:",
      "statements": [
        {
          "text": "Đặt cùng một mật khẩu dễ nhớ cho tất cả các tài khoản (Facebook, Gmail, Zalo, Ngân hàng) là thói quen rất an toàn.",
          "answer": false,
          "explain": "Sai. Khi một tài khoản bị lộ, kẻ xấu sẽ dùng mật khẩu đó để chiếm đoạt toàn bộ các tài khoản còn lại (hiện tượng Credential Stuffing)."
        },
        {
          "text": "Kích hoạt tính năng bảo mật hai lớp (2FA) giúp tài khoản vẫn an toàn ngay cả khi mật khẩu bị lộ lọt.",
          "answer": true,
          "explain": "Đúng. Kẻ xấu dù có mật khẩu nhưng không có mã OTP trên điện thoại thì vẫn không thể đăng nhập."
        },
        {
          "text": "Phần mềm quản lí mật khẩu (Password Manager) giúp tạo và lưu trữ an toàn các mật khẩu dài, ngẫu nhiên cho từng dịch vụ.",
          "answer": true,
          "explain": "Đúng. Trình quản lí mật khẩu là giải pháp bảo mật chuyên nghiệp được khuyến nghị."
        },
        {
          "text": "Học sinh nên ghi mật khẩu tài khoản vào mảnh giấy rồi dán ngay lên góc màn hình máy tính phòng thực hành.",
          "answer": false,
          "explain": "Sai. Dán mật khẩu nơi công cộng làm mất hoàn toàn tính bảo mật."
        }
      ]
    },
    {
      "id": "b09-tf04",
      "context": "Trong công tác phòng chống mã độc trên máy tính cá nhân:",
      "statements": [
        {
          "text": "Windows Defender là phần mềm diệt virus miễn phí được tích hợp sẵn trên hệ điều hành Windows 10 và 11.",
          "answer": true,
          "explain": "Đúng. Windows Defender tích hợp sẵn, tự động cập nhật cơ sở dữ liệu mẫu mã độc định kì."
        },
        {
          "text": "Cài đặt đồng thời 5 phần mềm diệt virus khác nhau trên cùng một chiếc máy tính sẽ giúp máy tính an toàn gấp 5 lần.",
          "answer": false,
          "explain": "Sai. Cài nhiều trình diệt virus cùng lúc sẽ gây xung đột hệ thống, làm máy tính bị treo đơ nghiêm trọng."
        },
        {
          "text": "Sao lưu dữ liệu định kì ra ổ cứng ngoài và ngắt kết nối là biện pháp bảo vệ dữ liệu hữu hiệu nhất trước mã độc tống tiền Ransomware.",
          "answer": true,
          "explain": "Đúng. Bản sao lưu offline giúp khôi phục dữ liệu mà không cần phải trả tiền chuộc cho tin tặc."
        },
        {
          "text": "Máy tính hoàn toàn không kết nối Internet thì không bao giờ có nguy cơ bị nhiễm mã độc.",
          "answer": false,
          "explain": "Sai. Mã độc có thể lây nhiễm qua thiết bị ngoại vi như USB, thẻ nhớ cắm vào máy tính."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b09-es01",
      "q": "Phân biệt sự khác nhau giữa các loại mã độc nguy hiểm: Virus, Sâu máy tính (Worm), Phần mềm tống tiền (Ransomware) và Phần mềm gián điệp (Spyware). Để bảo vệ máy tính cá nhân trước các loại mã độc này, em cần tuân thủ những nguyên tắc an toàn nào?",
      "answer": "1. Phân biệt các loại mã độc:\n- Virus: Đoạn mã độc hại bắt buộc phải bám vào một tệp tin vật chủ (như tệp .exe, văn bản có macro); khi người dùng mở tệp thì virus mới kích hoạt và lây sang tệp khác.\n- Sâu máy tính (Worm): Phần mềm độc hại độc lập, có khả năng tự động quét lỗ hổng mạng và tự nhân bản phát tán từ máy này sang máy khác qua kết nối Internet mà không cần tệp chủ hay sự can thiệp của con người.\n- Ransomware (Mã độc tống tiền): Chiếm quyền điều khiển và mã hóa toàn bộ dữ liệu quan trọng trên máy tính bằng mật mã mạnh, sau đó hiển thị thông báo đòi tiền chuộc để đổi lấy chìa khóa giải mã.\n- Spyware (Phần mềm gián điệp): Âm thầm cài đặt vào hệ thống để theo dõi thói quen, chụp màn hình hoặc ghi lại thao tác bàn phím (Keylogger) nhằm đánh cắp mật khẩu và thông tin tài chính gửi cho tin tặc.\n\n2. Các nguyên tắc an toàn bảo vệ máy tính:\n- Cài đặt và luôn bật phần mềm diệt virus chính hãng (như Windows Defender), cập nhật cơ sở dữ liệu định kì.\n- Không mở tệp đính kèm hoặc nhấp vào liên kết lạ trong email/tin nhắn rác.\n- Tuyệt đối không cài đặt các phần mềm bẻ khóa (crack), không rõ nguồn gốc tải từ mạng.\n- Bật tường lửa (Firewall) và thường xuyên cập nhật bản vá lỗi hệ điều hành.\n- Thực hiện sao lưu dữ liệu quan trọng định kì ra thiết bị lưu trữ ngoài hoặc đám mây."
    },
    {
      "id": "b09-es02",
      "q": "Công nghệ Deepfake đang bị các đối tượng xấu lợi dụng để thực hiện những hành vi lừa đảo tài chính tinh vi như thế nào? Nêu 3 dấu hiệu nhận biết một cuộc gọi video Deepfake và các bước xử lí khẩn cấp khi người thân nhận được cuộc gọi nghi vấn.",
      "answer": "1. Thủ đoạn lừa đảo bằng Deepfake:\n- Đối tượng xấu thu thập hình ảnh khuôn mặt và các đoạn ghi âm giọng nói từ các video công khai của nạn nhân trên mạng xã hội (Facebook, TikTok).\n- Dùng thuật toán AI Deep Learning để cắt ghép khuôn mặt và sao chép ngữ điệu giọng nói, sau đó thực hiện cuộc gọi video mạo danh người thân (con cái, bạn bè) thông báo gặp tai nạn hoặc cần tiền gấp để lừa chuyển tiền vào tài khoản ngân hàng của kẻ lừa đảo.\n\n2. Ba dấu hiệu nhận biết cuộc gọi video Deepfake:\n- Thời lượng cuộc gọi rất ngắn: Kẻ xấu thường tắt máy nhanh với lí do 'sóng yếu', 'đang đi đường' để tránh bị lộ sơ hở.\n- Bất thường về hình ảnh: Khuôn mặt có dấu hiệu giật cục, ánh mắt nhìn vô hồn ít chớp, viền khuôn mặt bị nhòe mờ khi chuyển động đầu, ánh sáng trên mặt không khớp với bối cảnh xung quanh.\n- Bất thường về âm thanh: Giọng nói có vẻ đều đều, thiếu cảm xúc tự nhiên, phát âm có tạp âm máy tính hoặc ngắt quãng bất thường.\n\n3. Các bước xử lí khẩn cấp khi nhận cuộc gọi nghi vấn:\n- Bước 1: Giữ bình tĩnh, tuyệt đối không vội vàng chuyển tiền theo yêu cầu.\n- Bước 2: Tắt cuộc gọi và dùng điện thoại gọi trực tiếp vào số thuê bao di động cá nhân (cuộc gọi viễn thông thông thường) của người đó để xác minh.\n- Bước 3: Đặt câu hỏi thử thách về những kỉ niệm hoặc chi tiết riêng tư mà chỉ người thân trong gia đình mới biết.\n- Bước 4: Nếu xác định là lừa đảo, lập tức thông báo cho người thân trong gia đình cảnh giác và báo cáo sự việc cho cơ quan Công an."
    }
  ]
};
