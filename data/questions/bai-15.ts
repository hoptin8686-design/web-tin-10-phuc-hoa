import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-15: Hoàn thiện hình ảnh đồ họa
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b15-q01",
    "q": "Khái niệm 'Lớp ảnh' (Layer) trong phần mềm thiết kế đồ họa Inkscape được hiểu là gì?",
    "options": [
      "Các tấm kính trong suốt xếp chồng lên nhau, mỗi tấm chứa các đối tượng đồ họa riêng biệt tạo nên bức tranh hoàn chỉnh.",
      "Lớp vỏ bảo vệ bằng kim loại bọc bên ngoài của thùng máy tính để bàn trong phòng học.",
      "Một tập tin văn bản ghi lại các bước thực hành của học sinh trong giờ kiểm tra Tin học.",
      "Độ phân giải tối đa mà màn hình máy tính có thể hiển thị ra không gian thực tế."
    ],
    "answer": 0,
    "explain": "Layer là các lớp trong suốt xếp chồng lên nhau; đối tượng ở lớp trên che khuất đối tượng ở lớp dưới, giúp phân tách và quản lí bản vẽ phức tạp dễ dàng."
  },
  {
    "id": "b15-q02",
    "q": "Lợi ích lớn nhất của việc sử dụng hệ thống Lớp (Layers) khi vẽ các bức tranh phức tạp là gì?",
    "options": [
      "Dễ dàng quản lí, khóa hoặc ẩn tạm thời từng phần của bản vẽ mà không làm xáo trộn các phần khác.",
      "Làm cho máy tính tự động vẽ tiếp các chi tiết còn lại mà người vẽ không cần dùng chuột.",
      "Tự động dịch các chữ cái tiếng Việt có dấu trong tranh sang tiếng Anh chuẩn.",
      "Làm giảm giá thành mua sắm màn hình máy tính và thiết bị ngoại vi của nhà trường."
    ],
    "answer": 0,
    "explain": "Layer giúp cô lập các phần (nền, nhân vật, chữ), khóa lớp nền để vẽ không bị bấm nhầm, ẩn bớt lớp để đỡ rối mắt."
  },
  {
    "id": "b15-q03",
    "q": "Biểu tượng chiếc ổ khóa bên cạnh tên của một Lớp (Layer) trong bảng quản lí lớp có tác dụng gì?",
    "options": [
      "Khóa lớp đó lại: ngăn không cho người dùng vô tình chỉnh sửa, di chuyển hay xóa các đối tượng trên lớp đó.",
      "Xóa vĩnh viễn toàn bộ tất cả các đối tượng đồ họa nằm trên lớp đó ra khỏi tệp tin.",
      "Đổi màu toàn bộ hình vẽ trên lớp đó sang màu xám đen của kim loại bảo mật.",
      "Cấm không cho máy in in các chi tiết trên lớp đó ra giấy trong mọi trường hợp."
    ],
    "answer": 0,
    "explain": "Biểu tượng ổ khóa dùng để Khóa/Mở khóa lớp (Lock/Unlock); lớp bị khóa sẽ không thể chọn hay chỉnh sửa nhầm."
  },
  {
    "id": "b15-q04",
    "q": "Biểu tượng con mắt bên cạnh tên của một Lớp trong Inkscape có chức năng gì?",
    "options": [
      "Ẩn hoặc Hiện (Hide/Show) toàn bộ các đối tượng đồ họa thuộc lớp đó trên màn hình làm việc.",
      "Bật camera quét khuôn mặt của người đang ngồi vẽ trước màn hình máy tính.",
      "Tự động tăng độ sáng của bóng đèn màn hình lên mức cao nhất trong phòng.",
      "Chụp ảnh màn hình lưu vào bộ nhớ tạm thời của hệ điều hành Windows."
    ],
    "answer": 0,
    "explain": "Biểu tượng con mắt dùng để Bật/Tắt hiển thị lớp (Hide/Show); ẩn lớp giúp quan sát các chi tiết bị che khuất bên dưới."
  },
  {
    "id": "b15-q05",
    "q": "Để mở bảng điều khiển quản lí các Lớp (Layers panel) trong Inkscape, ta dùng tổ hợp phím tắt nào?",
    "options": [
      "Shift + Ctrl + L (Layer panel).",
      "Shift + Ctrl + F (Fill and Stroke).",
      "Shift + Ctrl + A (Align and Distribute).",
      "Shift + Ctrl + E (Export Image)."
    ],
    "answer": 0,
    "explain": "Shift + Ctrl + L mở bảng danh sách Layer và Objects."
  },
  {
    "id": "b15-q06",
    "q": "Khi xuất bản sản phẩm đồ họa từ Inkscape để đăng tải lên trang web Facebook hoặc gửi qua Zalo, định dạng tệp nào là phù hợp nhất?",
    "options": [
      ".png (ảnh bitmap có nền trong suốt và độ nét cao) hoặc .jpg.",
      ".exe (tệp chương trình thực thi của hệ thống máy tính).",
      ".zip (tệp nén dữ liệu dung lượng lớn của thư mục).",
      ".bat (tệp kịch bản dòng lệnh của hệ điều hành Windows)."
    ],
    "answer": 0,
    "explain": "Ảnh PNG hoặc JPEG là định dạng bitmap chuẩn tương thích 100% với mạng xã hội và mọi trình duyệt web."
  },
  {
    "id": "b15-q07",
    "q": "Để xuất một bức tranh từ Inkscape ra tệp ảnh định dạng PNG chất lượng cao, ta dùng tổ hợp phím tắt nào?",
    "options": [
      "Shift + Ctrl + E (Export PNG Image).",
      "Ctrl + S (Lưu tệp tin dạng SVG mặc định).",
      "Ctrl + P (Lệnh in trực tiếp ra máy in).",
      "Ctrl + O (Mở tệp tin có sẵn trên đĩa cứng)."
    ],
    "answer": 0,
    "explain": "Shift + Ctrl + E mở bảng Export để xuất ra tệp ảnh PNG (hoặc JPG/WebP) với tùy chọn kích thước và độ phân giải dpi."
  },
  {
    "id": "b15-q08",
    "q": "Chỉ số DPI (Dots Per Inch) khi xuất ảnh trong Inkscape đại diện cho điều gì?",
    "options": [
      "Mật độ điểm ảnh trên một inch: chỉ số DPI càng cao thì bức ảnh xuất ra càng sắc nét và chi tiết.",
      "Số lượng màu sắc tối đa mà bức ảnh được phép hiển thị ra không gian thực.",
      "Khoảng thời gian cần thiết để máy in hoàn thành việc in ấn một trang giấy.",
      "Độ sáng tối thiểu của màn hình máy tính để có thể nhìn rõ được bức ảnh."
    ],
    "answer": 0,
    "explain": "DPI là mật độ điểm in/điểm ảnh trên mỗi inch. Ảnh in ấn thường cần 300 DPI, ảnh hiển thị màn hình web chuẩn là 96 DPI."
  },
  {
    "id": "b15-q09",
    "q": "Một tấm thiệp chúc mừng ngày Nhà giáo Việt Nam 20/11 thiết kế trên Inkscape nên được bố cục gồm các thành phần cơ bản nào?",
    "options": [
      "Hình ảnh minh họa trang trọng (hoa, bảng phấn), tiêu đề chính, lời chúc ý nghĩa và thông tin người gửi.",
      "Chỉ duy nhất một dòng chữ số điện thoại của người bán thiệp ngoài chợ.",
      "Các bài toán đại số phức tạp và công thức hóa học lớp 12 nâng cao.",
      "Toàn bộ bảng danh sách học sinh của cả trường kèm theo số chứng minh thư."
    ],
    "answer": 0,
    "explain": "Thiệp chúc mừng hoàn thiện gồm: Hình ảnh nền & họa tiết trang trí, Tiêu đề ngày lễ nổi bật, Lời chúc mừng ý nghĩa, Tên cá nhân/tập thể gửi thiệp."
  },
  {
    "id": "b15-q10",
    "q": "Khi thiết kế tờ rơi (Flyer) quảng bá cho Câu lạc bộ Tin học của trường, nguyên tắc phối màu nào giúp ấn phẩm thu hút người đọc?",
    "options": [
      "Sử dụng gam màu hài hòa, có màu chủ đạo và màu nhấn nổi bật, đảm bảo độ tương phản giữa chữ và nền.",
      "Tô hàng trăm màu sắc rực rỡ ngẫu nhiên trên mỗi dòng chữ khiến trang vẽ bị rối mắt.",
      "Chỉ sử dụng duy nhất một màu xám xịt từ đầu đến cuối không có điểm nhấn nào.",
      "Dùng chữ màu vàng nhạt trên nền màu trắng tinh để người đọc phải căng mắt nhìn."
    ],
    "answer": 0,
    "explain": "Quy tắc thiết kế chuyên nghiệp: Tối đa 2-3 màu chủ đạo, chữ và nền tương phản rõ rệt (chữ tối trên nền sáng hoặc chữ sáng trên nền tối)."
  },
  {
    "id": "b15-q11",
    "q": "Để đưa một tệp ảnh chụp bên ngoài (định dạng JPG hoặc PNG) vào bên trong trang vẽ của Inkscape, ta dùng lệnh nào?",
    "options": [
      "File -> Import (phím tắt Ctrl + I).",
      "File -> Export (phím tắt Shift + Ctrl + E).",
      "Path -> Union (phím tắt Ctrl + +).",
      "Object -> Group (phím tắt Ctrl + G)."
    ],
    "answer": 0,
    "explain": "File -> Import (Ctrl + I) dùng để nhúng hoặc liên kết một hình ảnh bitmap bên ngoài vào trang vẽ vector."
  },
  {
    "id": "b15-q12",
    "q": "Khi nhúng một bức ảnh chụp vào Inkscape, tính năng 'Trace Bitmap' (Đồ lại ảnh bitmap thành vector - phím tắt Shift + Alt + B) có tác dụng gì?",
    "options": [
      "Tự động chuyển đổi các đường nét của ảnh chụp bitmap thành các đường nét véc-tơ có thể phóng to không vỡ nét.",
      "Làm cho bức ảnh chụp tự động biến thành một bài hát không lời phát ra loa.",
      "Xóa sạch toàn bộ màu sắc của bức ảnh chụp và chỉ để lại một tấm kính trong suốt.",
      "Tự động gửi bức ảnh chụp đó đến hộp thư điện tử của tất cả bạn bè trong lớp."
    ],
    "answer": 0,
    "explain": "Trace Bitmap là tính năng quét độ tương phản để 'vector hóa' ảnh bitmap thành các mảng đường nét vector phóng to không vỡ."
  },
  {
    "id": "b15-q13",
    "q": "Trong thiết kế đồ họa, nguyên tắc 'Phân cấp thị giác' (Visual Hierarchy) nghĩa là gì?",
    "options": [
      "Sắp xếp nội dung quan trọng nhất có kích thước to nhất và nổi bật nhất, dẫn dắt mắt người xem theo thứ tự ưu tiên.",
      "Bắt buộc tất cả các chữ cái và hình ảnh trên trang đều phải có cùng một kích thước bằng nhau.",
      "Xếp tất cả các chữ cái thành một hàng dọc chạy từ mép trên xuống mép dưới của trang giấy.",
      "Chỉ cho phép người có thị lực tốt 10/10 mới được xem ấn phẩm thiết kế."
    ],
    "answer": 0,
    "explain": "Phân cấp thị giác: Tiêu đề chính to nhất nổi bật nhất -> Tiêu đề phụ vừa -> Nội dung chi tiết nhỏ hơn, giúp người xem nắm bắt thông tin nhanh chóng."
  },
  {
    "id": "b15-q14",
    "q": "Khi xuất ảnh PNG từ Inkscape, nếu chọn tùy chọn 'Selection' trong hộp thoại Export thì điều gì sẽ xảy ra?",
    "options": [
      "Chỉ xuất bản duy nhất các đối tượng đang được chọn thành tệp ảnh, bỏ qua các phần còn lại.",
      "Xuất bản toàn bộ nội dung của trang giấy bất kể đối tượng nằm ở đâu.",
      "Xuất bản toàn bộ mọi đối tượng nằm trên toàn bộ không gian làm việc vô hạn.",
      "Máy tính sẽ lập tức từ chối xuất ảnh và yêu cầu người dùng phải vẽ lại."
    ],
    "answer": 0,
    "explain": "Tab Export: 'Selection' chỉ xuất đối tượng đang chọn; 'Page' xuất trọn khung trang vẽ; 'Drawing' xuất toàn bộ hình vẽ có trên file."
  },
  {
    "id": "b15-q15",
    "q": "Tại sao khi hoàn thiện một sản phẩm thiết kế đồ họa, việc lưu lại tệp định dạng gốc .svg luôn là việc làm bắt buộc?",
    "options": [
      "Để sau này có thể dễ dàng mở lại bằng Inkscape để chỉnh sửa chữ, thay đổi màu sắc và xuất ra các kích thước khác.",
      "Vì tệp .svg không thể chia sẻ được cho bất kì ai nên giữ được bí mật tuyệt đối.",
      "Vì hệ điều hành máy tính bắt buộc mỗi ngày người dùng phải tạo ra ít nhất một tệp .svg.",
      "Để ngăn chặn việc máy in có thể in được tác phẩm đó ra trên chất liệu giấy viết."
    ],
    "answer": 0,
    "explain": "Tệp gốc .svg bảo toàn đầy đủ các lớp, đường vector, phông chữ để chỉnh sửa trong tương lai; tệp PNG xuất ra đã bị phẳng hóa (rasterized)."
  },
  {
    "id": "b15-q16",
    "q": "Một học sinh thiết kế xong logo trường học và muốn gửi cho thợ may thêu lên áo đồng phục. Định dạng tệp tối ưu nhất để gửi đi là:",
    "options": [
      "Tệp đồ họa véc-tơ SVG hoặc PDF (giữ nguyên các đường nét vector cho máy thêu kĩ thuật số).",
      "Một bức ảnh chụp màn hình điện thoại mờ nhòe gửi qua tin nhắn mạng xã hội.",
      "Một tệp tin ghi âm giọng nói mô tả lại chiếc logo đó bằng lời nói.",
      "Một tệp bảng tính Excel chỉ chứa các con số đếm từ 1 đến 100."
    ],
    "answer": 0,
    "explain": "Máy thêu vi tính và máy cắt decal cần đường nét vector (SVG, EPS, PDF vector) để mũi kim hoặc lưỡi dao chạy theo tọa độ chính xác."
  }
];
