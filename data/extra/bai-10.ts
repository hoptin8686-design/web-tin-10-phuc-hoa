import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-10: Thực hành khai thác tài nguyên trên Internet

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b10-tf01",
      "context": "Bạn Thảo chuẩn bị bài thuyết trình môn Địa lí về 'Khu sinh quyển non nước Cao Bằng'. Thảo mở trình duyệt Google để tìm kiếm tài liệu:",
      "statements": [
        {
          "text": "Cú pháp tìm kiếm \"Non nước Cao Bằng\" filetype:pdf giúp Thảo lọc ra các tệp tài liệu PDF chứa chính xác cụm từ này.",
          "answer": true,
          "explain": "Đúng. Kết hợp dấu ngoặc kép và toán tử filetype:pdf cho kết quả tài liệu chuẩn xác."
        },
        {
          "text": "Nếu gõ từ khóa không có dấu ngoặc kép, Google sẽ tìm các trang có thể chỉ chứa từ 'Cao', từ 'Bằng' hoặc từ 'Nước' đứng rời rạc nhau.",
          "answer": true,
          "explain": "Đúng. Mặc định tìm kiếm từ khóa rời rạc nếu không dùng ngoặc kép."
        },
        {
          "text": "Mọi bài viết xuất hiện ở trang đầu tiên của kết quả Google đều chắc chắn 100% là tài liệu khoa học chính xác.",
          "answer": false,
          "explain": "Sai. Kết quả có thể bao gồm trang quảng cáo (Ad), bài viết blog cá nhân chưa qua thẩm định."
        },
        {
          "text": "Thảo có thể dùng công cụ Google Hình ảnh để tìm kiếm các bức ảnh phong cảnh chất lượng cao có độ phân giải lớn.",
          "answer": true,
          "explain": "Đúng. Bộ lọc kích thước của Google Images hỗ trợ tìm ảnh cỡ lớn (Large)."
        }
      ]
    },
    {
      "id": "b10-tf02",
      "context": "Nhóm bạn Nam làm việc nhóm hoàn thành dự án học tập. Nam tạo một thư mục trên Google Drive để cả nhóm cùng đóng góp bài viết:",
      "statements": [
        {
          "text": "Nam có thể tạo đường liên kết chia sẻ thư mục và đặt quyền 'Người chỉnh sửa' cho các bạn trong nhóm.",
          "answer": true,
          "explain": "Đúng. Quyền Editor giúp các thành viên cùng tải lên và biên tập tệp."
        },
        {
          "text": "Các bạn trong nhóm có thể đồng thời chỉnh sửa một tệp văn bản Google Docs và xem được con trỏ soạn thảo của nhau theo thời gian thực.",
          "answer": true,
          "explain": "Đúng. Tính năng cộng tác trực tuyến trực quan của Google Docs."
        },
        {
          "text": "Khi chia sẻ liên kết công khai cho cả lớp, Nam nên chọn quyền 'Người xem' để tránh việc người ngoài vô tình xóa tệp tin của nhóm.",
          "answer": true,
          "explain": "Đúng. Chia sẻ rộng rãi nên để Viewer để bảo toàn dữ liệu."
        },
        {
          "text": "Tệp tin đã xóa khỏi Google Drive sẽ biến mất vĩnh viễn ngay lập tức mà không thể phục hồi lại từ Thùng rác.",
          "answer": false,
          "explain": "Sai. Tệp nằm trong Thùng rác (Trash) 30 ngày trước khi bị xóa vĩnh viễn, có thể khôi phục được."
        }
      ]
    },
    {
      "id": "b10-tf03",
      "context": "Trong giờ học tiếng Anh, bạn Hùng dùng Google Translate để dịch một đoạn văn bản giới thiệu về di tích lịch sử Rừng Trần Hưng Đạo:",
      "statements": [
        {
          "text": "Google Translate có thể dịch tự động giữa hơn 100 ngôn ngữ khác nhau nhờ các mô hình dịch máy thông minh.",
          "answer": true,
          "explain": "Đúng. Nền tảng dịch máy hỗ trợ đa ngôn ngữ quy mô lớn."
        },
        {
          "text": "Hùng có thể dán nguyên văn bản dịch tiếng Anh của máy vào bài nộp cho cô giáo mà không cần đọc lại.",
          "answer": false,
          "explain": "Sai. Bản dịch máy có thể sai lệch ngữ pháp hoặc dùng từ ngô nghê, cần con người rà soát."
        },
        {
          "text": "Google Translate hỗ trợ dịch trực tiếp văn bản từ hình ảnh chụp qua camera điện thoại.",
          "answer": true,
          "explain": "Đúng. Tính năng dịch qua camera (Google Lens) rất tiện ích khi đi du lịch."
        },
        {
          "text": "Công cụ dịch máy hiểu được trọn vẹn ngữ cảnh văn hóa và cảm xúc ẩn dụ sâu sắc của các câu ca dao tục ngữ Việt Nam.",
          "answer": false,
          "explain": "Sai. Máy tính dịch theo thuật toán thống kê, rất khó nắm bắt trọn vẹn văn cảnh hàm ý nghệ thuật."
        }
      ]
    },
    {
      "id": "b10-tf04",
      "context": "Khi khai thác tài nguyên học liệu số trên cổng igiaoduc.vn:",
      "statements": [
        {
          "text": "Học sinh có thể xem các bài giảng điện tử và thí nghiệm ảo do các thầy cô giáo giỏi trên cả nước đóng góp.",
          "answer": true,
          "explain": "Đúng. igiaoduc.vn là kho học liệu số chính thống của ngành giáo dục."
        },
        {
          "text": "Học sinh được phép tải các bài giảng mở về máy tính cá nhân để tự học khi không có mạng Internet.",
          "answer": true,
          "explain": "Đúng. Tài nguyên mở cho phép tải về sử dụng phi thương mại."
        },
        {
          "text": "Cổng học liệu số này thu phí 50 000 đồng cho mỗi lượt tải một bài giảng điện tử của giáo viên.",
          "answer": false,
          "explain": "Sai. igiaoduc.vn là tài nguyên giáo dục mở phục vụ cộng đồng hoàn toàn miễn phí."
        },
        {
          "text": "Học tập qua kho học liệu số giúp học sinh rèn luyện năng lực tự học và mở rộng tri thức ngoài sách giáo khoa.",
          "answer": true,
          "explain": "Đúng. Học liệu số là công cụ đắc lực phát triển tự học suốt đời."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b10-es01",
      "q": "Trình bày 4 toán tử tìm kiếm nâng cao phổ biến trên Google (ngoặc kép, filetype, site, dấu trừ). Viết một câu truy vấn tìm kiếm cụ thể để tìm các tệp trình chiếu (.pptx) về chủ đề 'An toàn giao thông học đường' chỉ xuất hiện trên các trang web có tên miền '.edu.vn'.",
      "answer": "1. Bốn toán tử tìm kiếm nâng cao:\n- Cặp dấu ngoặc kép \"cụm từ\": Tìm kiếm chính xác tuyệt đối cụm từ theo đúng thứ tự (không tách rời từng từ).\n- Toán tử filetype:định_dạng: Giới hạn kết quả trả về chỉ gồm các tệp tin có phần mở rộng chỉ định (ví dụ: pdf, docx, pptx).\n- Toán tử site:tên_miền: Giới hạn phạm vi tìm kiếm chỉ nằm bên trong website hoặc nhóm tên miền cụ thể (như .gov.vn, .edu.vn).\n- Toán tử dấu trừ (-từ_khóa): Loại trừ các kết quả tìm kiếm có chứa từ khóa đứng ngay sau dấu trừ.\n\n2. Câu truy vấn tìm kiếm theo yêu cầu:\n\"An toàn giao thông học đường\" filetype:pptx site:edu.vn\n\nGiải thích: Câu truy vấn này yêu cầu Google tìm chính xác cụm từ 'An toàn giao thông học đường', chỉ lấy các tệp trình chiếu PowerPoint (.pptx) và chỉ nằm trên các cổng thông tin giáo dục có đuôi tên miền .edu.vn."
    },
    {
      "id": "b10-es02",
      "q": "Khi làm việc nhóm trực tuyến bằng Google Drive, việc phân quyền chia sẻ tệp có ý nghĩa quan trọng như thế nào? Phân biệt quyền hạn cụ thể của 3 chế độ: Người xem (Viewer), Người nhận xét (Commenter) và Người chỉnh sửa (Editor). Khi nào nên áp dụng từng chế độ này?",
      "answer": "1. Ý nghĩa của việc phân quyền chia sẻ:\n- Đảm bảo an toàn dữ liệu: Ngăn chặn việc người ngoài hoặc thành viên vô tình xóa nhầm hoặc sửa sai nội dung tài liệu quan trọng.\n- Nâng cao hiệu quả cộng tác: Phân định rõ vai trò của từng người (người viết bài, người duyệt góp ý, người đọc tham khảo).\n\n2. Phân biệt 3 chế độ phân quyền và trường hợp áp dụng:\n- Người xem (Viewer):\n  + Quyền hạn: Chỉ được đọc nội dung tệp và tải về (nếu không bị chặn tải), hoàn toàn không thể gõ thêm chữ hay xóa chữ.\n  + Trường hợp áp dụng: Khi công bố sản phẩm cuối cùng cho cả lớp đọc, gửi báo cáo cho giáo viên chấm hoặc chia sẻ tài liệu tham khảo.\n- Người nhận xét (Commenter):\n  + Quyền hạn: Không sửa trực tiếp vào văn bản gốc, nhưng có thể bôi đen một đoạn và để lại ghi chú nhận xét (comment), đề xuất sửa đổi (suggestion) bên lề.\n  + Trường hợp áp dụng: Khi gửi bài tập cho bạn trong nhóm phản biện, góp ý duyệt bài trước khi xuất bản.\n- Người chỉnh sửa (Editor):\n  + Quyền hạn: Toàn quyền thêm, bớt, sửa đổi nội dung văn bản và chia sẻ tiếp cho người khác.\n  + Trường hợp áp dụng: Dành riêng cho các thành viên trong nhóm trực tiếp cùng nhau gõ nội dung báo cáo."
    }
  ]
};
