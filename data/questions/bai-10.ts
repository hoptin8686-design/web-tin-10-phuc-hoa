import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-10: Thực hành khai thác tài nguyên trên Internet
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b10-q01",
    "q": "Để tìm kiếm chính xác một cụm từ trên Google (không bị tách rời các từ), ta đặt cụm từ đó trong cặp dấu nào?",
    "options": [
      "Cặp dấu ngoặc kép \"...\" (ví dụ: \"Trường THPT Phục Hòa\").",
      "Cặp dấu ngoặc đơn (...) trong văn bản.",
      "Cặp dấu ngoặc vuông [...] trong công thức.",
      "Cặp dấu nháy đơn '...' trên bàn phím."
    ],
    "answer": 0,
    "explain": "Đặt cụm từ trong cặp dấu ngoặc kép \"...\" yêu cầu máy tìm kiếm trả về các trang chứa chính xác cụm từ nguyên vẹn theo đúng thứ tự."
  },
  {
    "id": "b10-q02",
    "q": "Cú pháp tìm kiếm nào sau đây giúp tìm kiếm các tệp tài liệu định dạng PDF trên Google?",
    "options": [
      "filetype:pdf (ví dụ: SGK Tin hoc 10 filetype:pdf).",
      "format:pdf trên thanh tìm kiếm.",
      "type=pdf trong dấu ngoặc kép.",
      "tailieu.pdf đặt ở đầu câu lệnh."
    ],
    "answer": 0,
    "explain": "Toán tử 'filetype:định_dạng' (như filetype:pdf, filetype:docx, filetype:pptx) lọc kết quả chỉ gồm các tệp tải về có định dạng tương ứng."
  },
  {
    "id": "b10-q03",
    "q": "Cú pháp tìm kiếm nào sau đây giới hạn phạm vi tìm kiếm chỉ xuất hiện trên một trang web cụ thể?",
    "options": [
      "site:dia_chi_web (ví dụ: tuyen sinh site:moet.gov.vn).",
      "web:dia_chi_web trên thanh địa chỉ.",
      "page:dia_chi_web trong dấu nháy kép.",
      "only:dia_chi_web đặt sau từ khóa."
    ],
    "answer": 0,
    "explain": "Toán tử 'site:tên_miền' giới hạn kết quả tìm kiếm chỉ nằm trong website hoặc tên miền chỉ định."
  },
  {
    "id": "b10-q04",
    "q": "Để loại trừ một từ khóa không mong muốn khỏi kết quả tìm kiếm trên Google, ta sử dụng kí hiệu nào?",
    "options": [
      "Dấu trừ (-) đặt sát liền trước từ khóa cần loại trừ (ví dụ: bóng đá -Chelsea).",
      "Dấu cộng (+) đặt sát trước từ khóa cần tìm kiếm.",
      "Dấu chấm than (!) đặt ở cuối câu truy vấn.",
      "Dấu sao (*) đại diện cho từ khóa cần thay thế."
    ],
    "answer": 0,
    "explain": "Toán tử dấu trừ (-từ_khóa) loại bỏ các trang chứa từ khóa đó khỏi kết quả tìm kiếm."
  },
  {
    "id": "b10-q05",
    "q": "Khái niệm 'Tài nguyên giáo dục mở' (OER - Open Educational Resources) được hiểu là gì?",
    "options": [
      "Tài liệu giảng dạy, học tập được phát hành tự do cho phép mọi người sử dụng, tái sử dụng và chia sẻ miễn phí.",
      "Các bộ phim chiếu rạp bom tấn có thu phí bản quyền rất cao của các hãng phim quốc tế.",
      "Phần mềm độc quyền thương mại bắt buộc học sinh phải mua chìa khóa kích hoạt bản quyền đắt tiền.",
      "Các trang web quảng cáo thương mại điện tử chuyên bán các sản phẩm gia dụng trực tuyến."
    ],
    "answer": 0,
    "explain": "OER là tài nguyên giáo dục được cấp phép mở, cho phép cộng đồng tiếp cận, chỉnh sửa và chia sẻ miễn phí phục vụ học tập."
  },
  {
    "id": "b10-q06",
    "q": "Kho học liệu số trực tuyến của Bộ Giáo dục và Đào tạo Việt Nam có địa chỉ truy cập là:",
    "options": [
      "igiaoduc.vn (Hệ tri thức Việt số hóa - Kho học liệu số).",
      "facebook.com trên trình duyệt web.",
      "youtube.com trên ứng dụng di động.",
      "shopee.vn trên sàn thương mại điện tử."
    ],
    "answer": 0,
    "explain": "Hệ thống igiaoduc.vn là cổng học liệu số mở quốc gia chứa hàng nghìn bài giảng điện tử và sách giáo khoa số hóa."
  },
  {
    "id": "b10-q07",
    "q": "Khi sử dụng công cụ dịch thuật tự động Google Translate, người dùng cần lưu ý điều gì?",
    "options": [
      "Cần đọc lại và biên tập lại bản dịch vì máy tính có thể dịch sai các thành ngữ, từ lóng hoặc thuật ngữ chuyên ngành.",
      "Bản dịch của Google Translate luôn luôn hoàn hảo 100% không bao giờ mắc bất kì lỗi ngữ pháp nào.",
      "Công cụ này chỉ có thể dịch được các câu ngắn dưới 3 từ ngữ đơn giản.",
      "Bắt buộc người dùng phải trả tiền phí dịch thuật cho từng từ ngữ được nhập vào."
    ],
    "answer": 0,
    "explain": "Dịch máy AI dựa trên mô hình xác suất; các câu phức tạp, thành ngữ, nghĩa bóng cần con người hiệu đính cho phù hợp ngữ cảnh."
  },
  {
    "id": "b10-q08",
    "q": "Khi chia sẻ một tệp tài liệu trên Google Drive cho bạn học, tùy chọn phân quyền nào cho phép bạn sửa đổi nội dung tệp?",
    "options": [
      "Quyền 'Người chỉnh sửa' (Editor).",
      "Quyền 'Người xem' (Viewer).",
      "Quyền 'Người nhận xét' (Commenter).",
      "Quyền 'Chặn truy cập' (Restricted)."
    ],
    "answer": 0,
    "explain": "Editor có quyền sửa, xóa nội dung; Viewer chỉ đọc; Commenter chỉ được viết nhận xét mà không sửa được nội dung gốc."
  },
  {
    "id": "b10-q09",
    "q": "Nếu em chỉ muốn thầy cô giáo xem bài tập làm văn của mình mà không vô tình chỉnh sửa mất nội dung gốc, em nên chọn quyền chia sẻ nào?",
    "options": [
      "Quyền 'Người xem' (Viewer) hoặc 'Người nhận xét' (Commenter).",
      "Quyền 'Chủ sở hữu' (Transfer Ownership).",
      "Quyền 'Quản trị viên toàn quyền' (Super Admin).",
      "Quyền 'Người chỉnh sửa' (Editor)."
    ],
    "answer": 0,
    "explain": "Phân quyền Viewer hoặc Commenter đảm bảo người xem có thể đọc và góp ý nhưng không làm thay đổi nội dung văn bản gốc."
  },
  {
    "id": "b10-q10",
    "q": "Hiện tượng 'Ảo giác của AI' (AI Hallucination) khi sử dụng các công cụ AI tra cứu thông tin nghĩa là gì?",
    "options": [
      "AI tự tạo ra các thông tin, sự kiện hoặc đường link trích dẫn hoàn toàn giả mạo nhưng nghe rất tự tin và thuyết phục.",
      "Màn hình máy tính bị nhấp nháy nhiều màu sắc khiến mắt người dùng bị mờ ảo khi nhìn vào.",
      "Phần mềm AI tự động xóa bỏ toàn bộ hệ điều hành Windows trên máy tính của người dùng.",
      "Máy tính tự động phát ra các bản nhạc giao hưởng du dương khi học sinh làm bài tập."
    ],
    "answer": 0,
    "explain": "Ảo giác AI (Hallucination) là hiện tượng mô hình ngôn ngữ lớn bịa đặt sự kiện, số liệu hoặc link nguồn không có thật một cách trôi chảy."
  },
  {
    "id": "b10-q11",
    "q": "Để tìm kiếm thông tin về lịch thi tuyển sinh vào lớp 10 tỉnh Cao Bằng trên trang web của Sở GD&ĐT Cao Bằng, câu lệnh tìm kiếm tối ưu là:",
    "options": [
      "tuyen sinh lop 10 site:caobang.edu.vn",
      "lich thi tuyen sinh lop 10 nam nay toan quoc",
      "cac truong cap 3 o tinh cao bang filetype:mp3",
      "tim kiem nhanh tat ca moi thu ve tinh cao bang"
    ],
    "answer": 0,
    "explain": "Kết hợp từ khóa chính 'tuyen sinh lop 10' và toán tử 'site:caobang.edu.vn' lọc chính xác tin từ nguồn chính thống của Sở."
  },
  {
    "id": "b10-q12",
    "q": "Khi tải một tệp tài liệu học tập từ Internet về máy tính, thao tác nào dưới đây đảm bảo an toàn phòng chống virus?",
    "options": [
      "Dùng phần mềm diệt virus quét tệp tin trước khi bấm mở tệp.",
      "Nhấp đúp chuột thật nhanh liên tục mười lần để mở tệp ngay lập tức.",
      "Tắt hoàn toàn tường lửa và phần mềm diệt virus trên máy tính.",
      "Đổi đuôi tệp tin đó thành tệp hình ảnh đuôi .jpg rồi mới bấm mở."
    ],
    "answer": 0,
    "explain": "Luôn quét virus tệp tải về trước khi mở là kĩ năng an toàn số cơ bản."
  },
  {
    "id": "b10-q13",
    "q": "Bách khoa toàn thư mở trực tuyến lớn nhất thế giới hiện nay cho phép cộng đồng cùng đóng góp nội dung là:",
    "options": [
      "Wikipedia (vi.wikipedia.org).",
      "TikTok (tiktok.com).",
      "Facebook (facebook.com).",
      "Shopee (shopee.vn)."
    ],
    "answer": 0,
    "explain": "Wikipedia là bách khoa toàn thư mở trực tuyến đa ngôn ngữ khổng lồ, hoạt động theo giấy phép Creative Commons."
  },
  {
    "id": "b10-q14",
    "q": "Khi sử dụng thông tin từ Wikipedia để viết báo cáo khoa học, học sinh cần làm gì để đảm bảo độ tin cậy?",
    "options": [
      "Kiểm tra chéo lại với các tài liệu tham khảo gốc được chú thích ở cuối bài viết.",
      "Tin tưởng tuyệt đối 100% mọi nội dung trên Wikipedia mà không cần kiểm chứng.",
      "Sao chép nguyên văn toàn bộ bài viết mà không cần ghi nguồn trích dẫn.",
      "Xóa bỏ bài viết đó khỏi Wikipedia để không ai có thể đọc được nữa."
    ],
    "answer": 0,
    "explain": "Wikipedia là nguồn mở có thể bị sửa đổi, do đó cần đối chiếu chéo với các tài liệu gốc và sách chuyên khảo uy tín."
  },
  {
    "id": "b10-q15",
    "q": "Dịch vụ lưu trữ trực tuyến nào sau đây được tích hợp sẵn mặc định trên hệ điều hành Windows 10 và 11?",
    "options": [
      "Microsoft OneDrive.",
      "Apple iCloud.",
      "Dropbox.",
      "Mega."
    ],
    "answer": 0,
    "explain": "OneDrive là dịch vụ đám mây tích hợp sâu vào File Explorer trên hệ điều hành Windows."
  },
  {
    "id": "b10-q16",
    "q": "Để tìm kiếm các trang web có tiêu đề chứa từ khóa 'Tin học 10', ta sử dụng toán tử tìm kiếm nâng cao nào trên Google?",
    "options": [
      "allintitle:Tin học 10",
      "allinurl:Tin học 10",
      "filetype:Tin học 10",
      "related:Tin học 10"
    ],
    "answer": 0,
    "explain": "'allintitle:từ_khóa' yêu cầu tiêu đề trang web (<title>) phải chứa các từ khóa chỉ định."
  }
];
