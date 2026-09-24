import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-12: Phần mềm thiết kế đồ họa
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b12-q01",
    "q": "Phần mềm Inkscape là phần mềm chuyên dụng để thiết kế loại đồ họa nào?",
    "options": [
      "Đồ họa véc-tơ (Vector Graphics) miễn phí và mã nguồn mở.",
      "Đồ họa điểm (Bitmap) độc quyền thương mại có phí đắt tiền.",
      "Phần mềm chuyên dùng để tính toán bảng tính số liệu tài chính.",
      "Trình phát nhạc và video đa phương tiện không có tính năng vẽ hình."
    ],
    "answer": 0,
    "explain": "Inkscape là phần mềm thiết kế đồ họa vector mã nguồn mở mạnh mẽ, sử dụng định dạng chuẩn W3C SVG."
  },
  {
    "id": "b12-q02",
    "q": "Định dạng tệp tin lưu trữ mặc định của phần mềm Inkscape là gì?",
    "options": [
      ".svg (Scalable Vector Graphics).",
      ".docx (Microsoft Word Document).",
      ".xlsx (Microsoft Excel Spreadsheet).",
      ".mp3 (MPEG Audio Layer III)."
    ],
    "answer": 0,
    "explain": "Định dạng mặc định của Inkscape là SVG (Scalable Vector Graphics), định dạng đồ họa vector chuẩn mở trên web."
  },
  {
    "id": "b12-q03",
    "q": "Trong giao diện của Inkscape, khu vực nào chứa các công cụ vẽ hình học cơ bản như hình chữ nhật, hình tròn, hình sao?",
    "options": [
      "Hộp công cụ (Toolbox) nằm ở cạnh bên trái màn hình.",
      "Thanh thực đơn lệnh (Menu Bar) nằm ở trên cùng màn hình.",
      "Bảng màu (Color Palette) nằm trải dài ở đáy màn hình.",
      "Thanh trạng thái (Status Bar) hiển thị tọa độ chuột bên dưới."
    ],
    "answer": 0,
    "explain": "Toolbox ở cạnh trái chứa các công cụ: Chọn (Select), Hình chữ nhật (Rectangle), Hình elip (Circle), Bút vẽ Bezier, Văn bản (Text)..."
  },
  {
    "id": "b12-q04",
    "q": "Khi vẽ hình chữ nhật bằng công cụ Rectangle trong Inkscape, để vẽ được một hình vuông chuẩn, ta cần giữ phím nào?",
    "options": [
      "Giữ phím Ctrl trong khi kéo thả chuột.",
      "Giữ phím Alt trong khi kéo thả chuột.",
      "Giữ phím Tab trong khi kéo thả chuột.",
      "Giữ phím Enter trong khi kéo thả chuột."
    ],
    "answer": 0,
    "explain": "Giữ phím Ctrl khóa tỉ lệ khung hình 1:1, giúp vẽ hình vuông hoặc hình tròn hoàn hảo."
  },
  {
    "id": "b12-q05",
    "q": "Để chọn một đối tượng đồ họa trên trang vẽ của Inkscape, ta sử dụng công cụ nào?",
    "options": [
      "Công cụ Chọn (Select and Transform Objects - phím tắt S hoặc F1).",
      "Công cụ Tẩy xóa (Eraser Tool - phím tắt Shift + E).",
      "Công cụ Thu phóng kính lúp (Zoom Tool - phím tắt Z).",
      "Công cụ Bút vẽ tự do (Freehand Lines - phím tắt P)."
    ],
    "answer": 0,
    "explain": "Công cụ mũi tên Select (phím S) dùng để chọn, di chuyển, thay đổi kích thước và xoay đối tượng."
  },
  {
    "id": "b12-q06",
    "q": "Khi một đối tượng đang được chọn bằng công cụ Select, nhấp chuột thêm một lần nữa vào đối tượng đó sẽ chuyển sang chế độ gì?",
    "options": [
      "Chế độ xoay (Rotate) và làm nghiêng (Skew) đối tượng.",
      "Chế độ xóa vĩnh viễn đối tượng đó ra khỏi tệp tin đang vẽ.",
      "Chế độ đổi màu ngẫu nhiên toàn bộ đối tượng sang màu đen.",
      "Chế độ khóa đối tượng không cho phép di chuyển trên trang."
    ],
    "answer": 0,
    "explain": "Nhấp lần 1: hiện các mũi tên chỉnh kích thước. Nhấp lần 2: hiện các mũi tên cong xoay quanh tâm và làm nghiêng."
  },
  {
    "id": "b12-q07",
    "q": "Công cụ Draw Bezier Curves and Straight Lines (phím tắt B) trong Inkscape dùng để làm gì?",
    "options": [
      "Vẽ các đường cong Bézier mềm mại và các đoạn thẳng chính xác.",
      "Gõ các đoạn văn bản dài có nhiều phông chữ nghệ thuật khác nhau.",
      "Tự động tính toán chu vi và diện tích của thửa ruộng ngoài đời thực.",
      "Chèn thêm một đoạn nhạc bài hát vào phần đầu của trang vẽ đồ họa."
    ],
    "answer": 0,
    "explain": "Công cụ Pen (Bezier) là công cụ cốt lõi trong Inkscape để vẽ các đường nét uốn lượn và đồ lại hình vẽ phức tạp."
  },
  {
    "id": "b12-q08",
    "q": "Để đổi màu tô (Fill) của một hình đã chọn trong Inkscape, thao tác nhanh nhất là gì?",
    "options": [
      "Nhấp chuột trái trực tiếp vào một ô màu trên Bảng màu (Palette) ở đáy màn hình.",
      "Nhấn tổ hợp phím Ctrl + Alt + Delete trên bàn phím máy tính để bàn.",
      "Nhấp chuột phải vào thanh cuộn màn hình và chọn lệnh đổi màu ngẫu nhiên.",
      "Khởi động lại phần mềm Inkscape và chọn màu sắc trước khi vẽ hình mới."
    ],
    "answer": 0,
    "explain": "Nhấp chuột trái vào ô màu ở Bảng màu đáy màn hình sẽ đổi màu tô (Fill) của đối tượng đang chọn."
  },
  {
    "id": "b12-q09",
    "q": "Để đổi màu đường viền (Stroke) của một hình trong Inkscape bằng Bảng màu, ta thao tác như thế nào?",
    "options": [
      "Giữ phím Shift và nhấp chuột trái vào ô màu mong muốn trên Bảng màu.",
      "Giữ phím Ctrl và nhấp đúp chuột liên tục vào ô màu trên Bảng màu.",
      "Giữ phím Space (dấu cách) và lăn con lăn chuột máy tính về phía trước.",
      "Kéo thả ô màu từ đáy màn hình vào thùng rác của hệ điều hành máy tính."
    ],
    "answer": 0,
    "explain": "Quy tắc Inkscape: Nhấp chuột = Màu tô (Fill); Shift + Nhấp chuột = Màu viền (Stroke)."
  },
  {
    "id": "b12-q10",
    "q": "Ưu thế lớn nhất của Inkscape trong thiết kế ấn phẩm in ấn là gì?",
    "options": [
      "Không bị giảm chất lượng khi phóng to ở mọi kích thước in từ nhỏ đến cực lớn.",
      "Tự động in ra giấy mà không cần máy tính phải kết nối với máy in thực tế.",
      "Có khả năng dự đoán trước thị hiếu thẩm mĩ của khách hàng trong tương lai.",
      "Làm cho mực in trên giấy không bao giờ bị phai màu dưới ánh nắng mặt trời."
    ],
    "answer": 0,
    "explain": "Vector độc lập với độ phân giải; thiết kế kích thước vài cm có thể phóng to in pano hàng chục mét mà vẫn sắc nét tuyệt đối."
  },
  {
    "id": "b12-q11",
    "q": "Để sao chép nhân đôi một đối tượng đồ họa trong Inkscape tại đúng vị trí cũ, ta dùng tổ hợp phím tắt nào?",
    "options": [
      "Ctrl + D (Duplicate - nhân bản đối tượng).",
      "Ctrl + Z (Undo - hoàn tác thao tác vừa thực hiện).",
      "Ctrl + S (Save - lưu tệp tin đồ họa ra ổ đĩa).",
      "Ctrl + A (Select All - chọn tất cả các đối tượng)."
    ],
    "answer": 0,
    "explain": "Ctrl + D (Duplicate) nhân bản đối tượng ngay tại vị trí đối tượng gốc, rất tiện lợi khi thiết kế họa tiết lặp lại."
  },
  {
    "id": "b12-q12",
    "q": "Thanh điều khiển thuộc tính (Tool Controls Bar) trong Inkscape có đặc điểm gì?",
    "options": [
      "Tự động thay đổi các nút tùy chọn tương ứng với từng công cụ đang được chọn trong Toolbox.",
      "Luôn luôn cố định các thông số và không bao giờ thay đổi trong suốt buổi vẽ.",
      "Chỉ hiển thị các thông báo lỗi khi máy tính bị mất kết nối mạng Internet.",
      "Chứa danh sách tên của toàn bộ các học sinh đang có mặt trong phòng máy tính."
    ],
    "answer": 0,
    "explain": "Tool Controls Bar thay đổi ngữ cảnh linh hoạt theo công cụ đang chọn (ví dụ chọn hình chữ nhật thì hiện bo góc, kích thước w, h)."
  },
  {
    "id": "b12-q13",
    "q": "Khi vẽ hình ngôi sao bằng công cụ Stars and Polygons trong Inkscape, ta có thể chỉnh số cánh sao ở đâu?",
    "options": [
      "Ô 'Corners' trên Thanh điều khiển thuộc tính (Tool Controls Bar).",
      "Thanh thực đơn Edit -> Preferences trên góc trái màn hình.",
      "Bảng màu Color Palette ở mép đáy màn hình máy tính.",
      "Không thể chỉnh được vì số cánh sao luôn cố định là 5 cánh."
    ],
    "answer": 0,
    "explain": "Ô 'Corners' trên Tool Controls Bar cho phép nhập số đỉnh (ví dụ: 3 đỉnh là tam giác, 5 đỉnh là sao 5 cánh, 8 đỉnh là bát giác)."
  },
  {
    "id": "b12-q14",
    "q": "Tổ hợp phím tắt Ctrl + Z trong Inkscape có chức năng quen thuộc là gì?",
    "options": [
      "Hủy bỏ (Undo) thao tác vừa thực hiện, quay lại trạng thái trước đó.",
      "Xóa sạch toàn bộ trang vẽ không để lại bất kì đối tượng đồ họa nào.",
      "Đóng phần mềm Inkscape ngay lập tức mà không lưu lại dự án vẽ.",
      "Xuất bản toàn bộ tệp đồ họa thành một đoạn video hoạt hình ngắn."
    ],
    "answer": 0,
    "explain": "Ctrl + Z là lệnh hoàn tác (Undo) chuẩn mực trên mọi phần mềm máy tính."
  },
  {
    "id": "b12-q15",
    "q": "Để vẽ hình chữ nhật có bốn góc bo tròn mềm mại trong Inkscape, ta điều chỉnh thông số nào?",
    "options": [
      "Hai thông số bán kính bo góc Rx và Ry trên thanh thuộc tính (hoặc kéo chấm tròn ở góc hình).",
      "Tăng độ dày của đường viền Stroke lên mức cực đại trên 100 milimet.",
      "Đổi màu tô của hình chữ nhật sang màu vàng nhạt hoặc màu xanh lá cây.",
      "Xoay hình chữ nhật một góc nghiêng 45 độ quanh tâm quay của hình."
    ],
    "answer": 0,
    "explain": "Thông số Rx và Ry (hoặc kéo điểm điều khiển hình tròn ở góc trên bên phải) tạo góc bo tròn thẩm mĩ."
  },
  {
    "id": "b12-q16",
    "q": "Hành động nhóm nhiều đối tượng đồ họa lại thành một khối thống nhất trong Inkscape sử dụng phím tắt nào?",
    "options": [
      "Ctrl + G (Group đối tượng).",
      "Ctrl + U (Ungroup tách nhóm).",
      "Ctrl + C (Copy sao chép).",
      "Ctrl + V (Paste dán đối tượng)."
    ],
    "answer": 0,
    "explain": "Ctrl + G (Group) nhóm các đối tượng rời rạc lại; Ctrl + Shift + G (hoặc Ctrl + U) dùng để rã nhóm."
  }
];
