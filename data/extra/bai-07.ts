import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-07: Thực hành sử dụng thiết bị số thông dụng

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b07-tf01",
      "context": "Bạn Long dùng điện thoại thông minh Android để phục vụ học tập tại trường THPT Phục Hòa. Điện thoại có cổng USB Type-C và hỗ trợ thẻ nhớ ngoài MicroSD:",
      "statements": [
        {
          "text": "Cáp sạc USB Type-C của Long có thể cắm vào cổng sạc theo bất kì chiều nào mà không sợ bị ngược đầu cắm.",
          "answer": true,
          "explain": "Đúng. Thiết kế đối xứng là ưu điểm lớn của cổng USB Type-C."
        },
        {
          "text": "Khi cắm cáp kết nối điện thoại với máy tính xách tay, Long chỉ cần để ở chế độ 'Chỉ sạc' là máy tính đã tự động mở xem được toàn bộ ảnh trong máy.",
          "answer": false,
          "explain": "Sai. Long phải chọn chế độ 'Truyền tệp / MTP' trên điện thoại thì máy tính mới đọc được dữ liệu."
        },
        {
          "text": "Long có thể kết nối điện thoại với bàn phím và chuột máy tính thông qua đầu chuyển đổi OTG (On-The-Go).",
          "answer": true,
          "explain": "Đúng. Chuẩn OTG cho phép điện thoại đóng vai trò máy chủ (Host) nhận diện chuột, bàn phím, USB."
        },
        {
          "text": "Thẻ nhớ MicroSD giúp mở rộng bộ nhớ lưu trữ bài giảng và tài liệu học tập của Long.",
          "answer": true,
          "explain": "Đúng. Thẻ nhớ ngoài giúp tăng dung lượng lưu trữ tệp đa phương tiện."
        }
      ]
    },
    {
      "id": "b07-tf02",
      "context": "Trong buổi báo cáo dự án Tin học, thầy giáo yêu cầu nhóm học sinh kết nối máy tính xách tay với máy chiếu trong phòng học bộ môn:",
      "statements": [
        {
          "text": "Cáp HDMI truyền đồng thời cả tín hiệu hình ảnh trình chiếu và âm thanh bài thuyết trình từ máy tính sang máy chiếu.",
          "answer": true,
          "explain": "Đúng. Cáp HDMI tích hợp cả kênh hình ảnh và âm thanh kĩ thuật số."
        },
        {
          "text": "Trên hệ điều hành Windows, phím tắt Windows + P giúp người dùng lựa chọn các chế độ hiển thị màn hình phụ (Duplicate, Extend).",
          "answer": true,
          "explain": "Đúng. Phím tắt Windows + P mở menu Project đa màn hình."
        },
        {
          "text": "Cổng kết nối VGA màu xanh lam đời cũ có chất lượng hình ảnh sắc nét và truyền được âm thanh tốt hơn cổng HDMI.",
          "answer": false,
          "explain": "Sai. Cổng VGA chỉ truyền tín hiệu hình ảnh tương tự (Analog), không truyền được âm thanh và chất lượng kém hơn HDMI."
        },
        {
          "text": "Nếu máy tính xách tay chỉ có cổng USB Type-C mỏng nhẹ, học sinh có thể sử dụng đầu chuyển đổi Type-C sang HDMI để cắm máy chiếu.",
          "answer": true,
          "explain": "Đúng. Hub/Adapter chuyển đổi Type-C ra HDMI rất phổ biến hiện nay."
        }
      ]
    },
    {
      "id": "b07-tf03",
      "context": "Bạn Mai nhận được cảnh báo trên điện thoại: 'Dung lượng lưu trữ Google Drive đã sử dụng 14.5 GB / 15 GB':",
      "statements": [
        {
          "text": "Dịch vụ đám mây Google Drive cấp cho mỗi tài khoản học sinh miễn phí dung lượng lưu trữ là 15 GB.",
          "answer": true,
          "explain": "Đúng. Mức dung lượng miễn phí mặc định của tài khoản Google là 15 GB dùng chung cho Drive, Gmail, Photos."
        },
        {
          "text": "Nếu dung lượng Drive đầy 100%, Mai sẽ không thể nhận thêm email mới có tệp đính kèm gửi vào hòm thư Gmail của mình.",
          "answer": true,
          "explain": "Đúng. Khi bộ nhớ Google đầy, dịch vụ email sẽ tạm dừng nhận thư mới."
        },
        {
          "text": "Mai có thể dọn dẹp các video kích thước lớn hoặc tệp tin trong thùng rác Drive để lấy lại dung lượng trống.",
          "answer": true,
          "explain": "Đúng. Xóa tệp lớn và dọn sạch Thùng rác (Trash) giúp giải phóng dung lượng ngay."
        },
        {
          "text": "Dữ liệu lưu trên Google Drive sẽ tự động biến mất vĩnh viễn nếu Mai tắt nguồn điện thoại thông minh của mình.",
          "answer": false,
          "explain": "Sai. Dữ liệu đám mây nằm trên máy chủ của Google trên Internet, hoàn toàn độc lập với trạng thái bật/tắt của điện thoại."
        }
      ]
    },
    {
      "id": "b07-tf04",
      "context": "Để bảo vệ thiết bị số cá nhân khỏi rủi ro hư hỏng và đánh cắp thông tin:",
      "statements": [
        {
          "text": "Học sinh nên bật tính năng 'Tìm thiết bị' (Find My Device) để có thể định vị hoặc xóa dữ liệu từ xa khi làm rơi máy.",
          "answer": true,
          "explain": "Đúng. Tính năng tìm thiết bị giúp xác định vị trí GPS và khóa máy khẩn cấp."
        },
        {
          "text": "Cài đặt ứng dụng từ các tệp tin .apk tải từ các trang web lạ trên mạng tiềm ẩn nguy cơ bị cài cắm mã độc gián điệp.",
          "answer": true,
          "explain": "Đúng. Tệp APK ngoài luồng không qua kiểm duyệt rất dễ chứa trojan đánh cắp tài khoản ngân hàng."
        },
        {
          "text": "Việc thường xuyên cập nhật hệ điều hành lên phiên bản mới nhất giúp vá các lỗ hổng bảo mật nguy hiểm.",
          "answer": true,
          "explain": "Đúng. Bản cập nhật phần mềm chứa các bản vá lỗi an ninh mạng quan trọng."
        },
        {
          "text": "Học sinh có thể thoải mái chia sẻ mật khẩu mã PIN điện thoại của mình cho bạn bè trên các diễn đàn mạng công khai.",
          "answer": false,
          "explain": "Sai. Mật khẩu phải tuyệt đối giữ bí mật để bảo vệ thông tin riêng tư."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b07-es01",
      "q": "Trình bày quy trình 3 bước để sao chép một thư mục tài liệu học tập từ máy tính xách tay sang điện thoại thông minh Android bằng cáp kết nối USB Type-C. Nêu 2 lỗi phổ biến khiến máy tính không nhận diện được điện thoại và cách xử lí.",
      "answer": "1. Quy trình sao chép tài liệu qua cáp USB:\n- Bước 1: Dùng cáp USB nối một đầu vào máy tính và đầu Type-C vào điện thoại.\n- Bước 2: Mở khóa màn hình điện thoại, vuốt thanh thông báo xuống, chạm vào thông báo 'Hệ thống Android - Đang sạc qua USB' và chuyển sang chế độ 'Truyền tệp / MTP'.\n- Bước 3: Trên máy tính, mở This PC (File Explorer), nhấp đúp vào biểu tượng tên điện thoại, điều hướng tới thư mục Documents (hoặc Download) trên điện thoại rồi kéo thả (hoặc dán) thư mục tài liệu từ máy tính vào.\n\n2. Hai lỗi phổ biến và cách khắc phục:\n- Lỗi 1: Máy tính chỉ sạc pin mà không hiện ổ đĩa điện thoại.\n  + Nguyên nhân: Điện thoại đang ở chế độ 'Chỉ sạc' hoặc sợi cáp chỉ là cáp sạc 2 lõi (không có 2 lõi truyền dữ liệu).\n  + Xử lí: Chuyển chế độ sang 'Truyền tệp' hoặc thay bằng sợi cáp dữ liệu chuẩn.\n- Lỗi 2: Điện thoại chưa mở khóa màn hình.\n  + Nguyên nhân: Cơ chế bảo mật chặn máy tính đọc dữ liệu khi màn hình còn khóa vân tay/PIN.\n  + Xử lí: Mở khóa màn hình điện thoại và bấm 'Cho phép truy cập dữ liệu'."
    },
    {
      "id": "b07-es02",
      "q": "Nguyên tắc sao lưu dữ liệu '3-2-1' là gì? Em hãy xây dựng một kế hoạch sao lưu cụ thể cho toàn bộ tài liệu học tập lớp 10 của bản thân áp dụng đúng nguyên tắc này để không bao giờ bị mất bài tập và hình ảnh kỉ niệm.",
      "answer": "1. Định nghĩa nguyên tắc sao lưu 3-2-1:\n- '3': Có ít nhất 3 bản sao của dữ liệu (1 bản gốc đang dùng + 2 bản sao lưu dự phòng).\n- '2': Lưu trữ trên ít nhất 2 loại phương tiện/thiết bị khác nhau (ví dụ: ổ cứng máy tính và USB/ổ cứng ngoài).\n- '1': Có ít nhất 1 bản sao lưu được lưu trữ ở một vị trí địa lí bên ngoài (Off-site / Cloud Storage như Google Drive, OneDrive).\n\n2. Kế hoạch sao lưu thực tế cho học sinh lớp 10:\n- Bản 1 (Bản gốc): Lưu trực tiếp trong thư mục D:\\HocTap_Lop10 trên máy tính cá nhân ở nhà để học và làm bài hàng ngày.\n- Bản 2 (Dự phòng cục bộ): Cứ mỗi chiều Chủ nhật, cắm chiếc USB 32 GB vào máy tính và chép đè thư mục học tập vào USB để mang theo khi học nhóm hoặc đề phòng ổ cứng máy tính bị hỏng.\n- Bản 3 (Dự phòng đám mây): Cài đặt phần mềm Google Drive trên máy tính và bật tính năng tự động đồng bộ thư mục HocTap_Lop10 lên tài khoản Google Drive 15 GB của bản thân. Khi có sự cố mất máy tính hoặc cháy nổ, toàn bộ tài liệu vẫn an toàn trên đám mây."
    }
  ]
};
