import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-14: Làm việc với đối tượng đường và văn bản
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b14-q01",
    "q": "Công cụ Pen (Draw Bezier Curves - phím tắt B) trong Inkscape cho phép tạo ra đường cong bằng cách nào?",
    "options": [
      "Nhấp chuột tạo các điểm neo (Node) và kéo thả chuột để kéo dài các tay nắm điều khiển hướng cong.",
      "Gõ tên phương trình toán học của đường cong parabol vào thanh dòng lệnh của hệ điều hành.",
      "Dùng ngón tay chạm giữ liên tục vào màn hình cảm ứng trong thời gian đúng 10 giây.",
      "Chỉ có thể vẽ được các đoạn thẳng đứng tuyệt đối mà không thể bẻ cong được."
    ],
    "answer": 0,
    "explain": "Nhấp chuột tạo điểm neo, nhấp và rê chuột (click & drag) sẽ kéo ra hai cần điều khiển (tay nắm - handle) uốn cong đường nét."
  },
  {
    "id": "b14-q02",
    "q": "Để chỉnh sửa vị trí các điểm neo (Node) và uốn nắn tay nắm của đường cong, ta sử dụng công cụ nào?",
    "options": [
      "Công cụ Node Tool (Edit paths by nodes - phím tắt N hoặc F2).",
      "Công cụ Bút vẽ tự do chì mềm (Pencil Tool - phím tắt F6).",
      "Công cụ Tẩy xóa đường nét (Eraser Tool - phím Shift + E).",
      "Công cụ Hút màu trên màn hình (Dropper Tool - phím D)."
    ],
    "answer": 0,
    "explain": "Node Tool (phím N) là công cụ tinh chỉnh đường: di chuyển điểm neo, thêm/xóa điểm neo, uốn nắn tay nắm điều khiển."
  },
  {
    "id": "b14-q03",
    "q": "Điểm neo góc nhọn (Corner / Cusp Node) có đặc điểm gì?",
    "options": [
      "Hai tay nắm điều khiển hoàn toàn độc lập nhau, cho phép tạo ra các khúc ngoặt nhọn và sắc cạnh.",
      "Hai tay nắm luôn luôn thẳng hàng và có độ dài bằng nhau bắt buộc đường phải tròn trịa.",
      "Không có bất kì tay nắm nào và không bao giờ có thể di chuyển được trên trang vẽ.",
      "Làm cho toàn bộ đối tượng tự động biến thành hình chữ nhật màu đen trong suốt."
    ],
    "answer": 0,
    "explain": "Cusp node (nút góc nhọn): hai tay nắm di chuyển độc lập về cả góc lẫn độ dài, tạo khúc gập nhọn sắc sảo."
  },
  {
    "id": "b14-q04",
    "q": "Điểm neo trơn mềm (Smooth Node) có đặc điểm nào dưới đây?",
    "options": [
      "Hai tay nắm luôn nằm trên một đường thẳng đối xứng hướng nhau, đảm bảo đường cong đi qua điểm neo luôn mềm mại.",
      "Làm cho đường cong bị đứt đoạn thành hai mảnh rời rạc không nối liền nhau.",
      "Chỉ có thể đặt ở vị trí điểm đầu tiên hoặc điểm kết thúc của đường vẽ hở.",
      "Tự động đổi màu đường nét từ màu đỏ sang màu vàng cam mỗi khi nhấp chuột."
    ],
    "answer": 0,
    "explain": "Smooth node: 2 cần điều khiển luôn thẳng hàng khóa hướng tiếp tuyến, đảm bảo đường cong qua nút luôn lượn sóng trơn tru."
  },
  {
    "id": "b14-q05",
    "q": "Công cụ Văn bản (Text Tool - phím tắt T) trong Inkscape có chức năng gì?",
    "options": [
      "Gõ chữ, chèn tiêu đề, khẩu hiệu và định dạng phông chữ, cỡ chữ, căn lề văn bản.",
      "Tự động tính điểm trung bình học kì môn Tin học cho toàn bộ học sinh trong trường.",
      "Chuyển đổi các bài hát mp3 thành văn bản lời bài hát tiếng Việt có dấu tự động.",
      "Dọn dẹp các tệp tin rác trong ổ đĩa cứng của máy tính để giải phóng bộ nhớ."
    ],
    "answer": 0,
    "explain": "Text Tool (phím T) dùng để tạo văn bản dạng tự do hoặc khối văn bản (Paragraph), định dạng phông, kích thước, độ dãn dòng."
  },
  {
    "id": "b14-q06",
    "q": "Để uốn một dòng chữ chạy uốn lượn theo một đường cong có sẵn trong Inkscape, ta dùng lệnh nào?",
    "options": [
      "Text -> Put on Path (đặt văn bản theo đường dẫn).",
      "Path -> Object to Path (chuyển đối tượng thành đường).",
      "Object -> Group (nhóm văn bản và đường cong lại).",
      "Edit -> Paste in Place (dán tại chỗ đối tượng văn bản)."
    ],
    "answer": 0,
    "explain": "Chọn dòng chữ và đường cong, chọn Text -> Put on Path; chữ sẽ tự động uốn lượn bám khít theo quỹ đạo đường cong."
  },
  {
    "id": "b14-q07",
    "q": "Sau khi đã uốn chữ theo đường cong bằng 'Put on Path', nếu ta muốn ẩn đường cong đó đi chỉ để lại dòng chữ thì ta làm thế nào?",
    "options": [
      "Chọn riêng đường cong và đặt màu viền Stroke của nó về 'No paint' (trong suốt).",
      "Nhấn phím Delete trên bàn phím để xóa vĩnh viễn đường cong đó đi ngay lập tức.",
      "Tắt màn hình máy tính rồi bật lại để phần mềm tự động xóa đường cong đi.",
      "Đổi màu tô của dòng chữ sang màu trắng trùng với màu nền của trang vẽ."
    ],
    "answer": 0,
    "explain": "Không được nhấn Delete (chữ sẽ duỗi thẳng lại như cũ); cách chuẩn là chọn đường cong và bỏ màu nét vẽ (Stroke = No paint) để tàng hình đường dẫn."
  },
  {
    "id": "b14-q08",
    "q": "Để chuyển một đoạn văn bản nghệ thuật thành các đối tượng đường véc-tơ vĩnh viễn (để máy tính khác không bị lỗi thiếu phông chữ), ta dùng lệnh:",
    "options": [
      "Path -> Object to Path (phím tắt Shift + Ctrl + C).",
      "Text -> Remove from Path.",
      "File -> Clean up Document.",
      "Object -> Ungroup."
    ],
    "answer": 0,
    "explain": "Path -> Object to Path 'rã chữ' thành hình vẽ vector. Chữ không thể gõ sửa nội dung được nữa nhưng sang máy khác mở ra không bao giờ bị lỗi phông."
  },
  {
    "id": "b14-q09",
    "q": "Khi dùng công cụ Node Tool (phím N), để thêm một điểm neo mới vào giữa một đoạn thẳng, thao tác nhanh nhất là:",
    "options": [
      "Nhấp đúp chuột trực tiếp vào vị trí muốn thêm điểm trên đoạn thẳng đó.",
      "Nhấn phím cách Space liên tục ba lần trên bàn phím máy tính cá nhân.",
      "Kéo thả toàn bộ trang vẽ sang một tệp tin đồ họa mới hoàn toàn trống.",
      "Khởi động lại phần mềm Inkscape và vẽ lại toàn bộ từ đầu tác phẩm."
    ],
    "answer": 0,
    "explain": "Dùng công cụ Node (phím N), nhấp đúp chuột lên đoạn thẳng/cong sẽ chèn ngay một điểm neo mới tại vị trí con trỏ."
  },
  {
    "id": "b14-q10",
    "q": "Để xóa bỏ một điểm neo thừa trên đường cong mà không làm hở đường nét, ta chọn điểm neo đó rồi nhấn phím nào?",
    "options": [
      "Phím Delete hoặc Backspace trên bàn phím.",
      "Tổ hợp phím Shift + Ctrl + Alt + Delete.",
      "Phím Enter ở góc bên phải của bàn phím.",
      "Phím Esc ở góc trên cùng bên trái màn hình."
    ],
    "answer": 0,
    "explain": "Chọn điểm neo và bấm Delete (hoặc nút Delete selected nodes trên Tool Controls), điểm neo bị xóa và đường cong tự động nối liền mềm mại."
  },
  {
    "id": "b14-q11",
    "q": "Tính năng 'Flow into Frame' (Đổ văn bản vào khung hình) trong thực đơn Text của Inkscape giúp làm gì?",
    "options": [
      "Ép đoạn văn bản tự động chảy và căn chỉnh gọn gàng bên trong hình dạng của một khung hình bất kì.",
      "Chuyển đổi toàn bộ văn bản thành một bức tranh sơn dầu phong cảnh cổ điển.",
      "Xóa bỏ toàn bộ các dấu câu tiếng Việt có trong đoạn văn bản đang được chọn.",
      "Đo lường thời gian đọc của người đọc đối với bài văn bản trên trang web."
    ],
    "answer": 0,
    "explain": "Text -> Flow into Frame đưa văn bản tràn vừa khít vào trong một hình vẽ khép kín (như hình trái tim, hình tròn)."
  },
  {
    "id": "b14-q12",
    "q": "Muốn biến một điểm neo góc nhọn thành điểm neo trơn mềm mại trên Tool Controls Bar, ta bấm vào biểu tượng nào?",
    "options": [
      "Make selected nodes smooth (biểu tượng đường cong trơn mềm có chấm vuông ở giữa).",
      "Make selected nodes corner (biểu tượng góc nhọn sắc cạnh hình tam giác).",
      "Delete selected nodes (biểu tượng dấu trừ màu đỏ xóa bỏ điểm neo).",
      "Join selected endnodes (biểu tượng nối hai đầu mút hở lại với nhau)."
    ],
    "answer": 0,
    "explain": "Nút 'Make selected nodes smooth' trên thanh thuộc tính biến điểm neo góc gập thành điểm neo trơn trượt mượt mà."
  },
  {
    "id": "b14-q13",
    "q": "Khi vẽ bằng công cụ Pen (Bezier), muốn kết thúc việc vẽ một đường hở (không nối khép kín về điểm đầu), ta làm gì?",
    "options": [
      "Nhấn phím Enter hoặc nhấp đúp chuột tại điểm kết thúc của đường vẽ.",
      "Nhấn phím tắt nguồn của màn hình máy tính để bàn ngay lập tức.",
      "Nhấp chuột liên tục vào thanh thực đơn File ở góc trên màn hình.",
      "Rút phích cắm bàn phím ra khỏi cổng kết nối USB của máy tính."
    ],
    "answer": 0,
    "explain": "Bấm phím Enter (hoặc nhấp đúp chuột, hoặc nhấp chuột phải) sẽ kết thúc đường vẽ hở."
  },
  {
    "id": "b14-q14",
    "q": "Để viết chữ hoa tiếng Việt có dấu chuẩn đẹp trong Inkscape, ta nên chọn phông chữ nào?",
    "options": [
      "Các phông chữ chuẩn hỗ trợ đầy đủ tiếng Việt Unicode như: Arial, Times New Roman, Roboto, Baloo 2.",
      "Bất kì phông chữ nước ngoài nào tải về trên các diễn đàn chia sẻ game lậu.",
      "Chỉ sử dụng phông chữ viết tay không có dấu của hệ thống máy tính cổ điển.",
      "Phông chữ mã nguồn máy tính không hỗ trợ bảng mã gõ tiếng Việt có dấu."
    ],
    "answer": 0,
    "explain": "Chọn các phông Unicode hoàn chỉnh (như Open Sans, Roboto, Inter, Times New Roman, Baloo) để không bị lỗi 'chữ có dấu bị nhảy phông'."
  },
  {
    "id": "b14-q15",
    "q": "Thao tác tách văn bản rời khỏi đường dẫn (quay về dạng nằm ngang ban đầu) sử dụng lệnh nào?",
    "options": [
      "Text -> Remove from Path.",
      "Path -> Break Apart.",
      "Object -> Ungroup.",
      "Edit -> Cut."
    ],
    "answer": 0,
    "explain": "Text -> Remove from Path gỡ bỏ ràng buộc đường dẫn, đưa dòng chữ về trạng thái nằm ngang thẳng hàng như cũ."
  },
  {
    "id": "b14-q16",
    "q": "Khoảng cách giữa các chữ cái trong một dòng tiêu đề nghệ thuật (Kerning/Letter spacing) được điều chỉnh ở đâu trong Inkscape?",
    "options": [
      "Thanh Tool Controls Bar của công cụ Text (biểu tượng các chữ cái A B có mũi tên khoảng cách ngang).",
      "Bảng màu Color Palette ở đáy màn hình máy tính phòng thực hành.",
      "Hộp thoại quản lí dung lượng pin của hệ điều hành Windows trên máy.",
      "Mục cài đặt hiển thị ngày giờ hệ thống trên góc dưới màn hình."
    ],
    "answer": 0,
    "explain": "Tool Controls của công cụ Text có ô điều chỉnh 'Letter spacing' (khoảng cách giữa các kí tự) tính bằng px."
  }
];
