import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-33: Nghề thiết kế đồ hoạ máy tính
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b33-q01",
    "q": "Nghề thiết kế đồ họa máy tính (Computer Graphic Design) được hiểu chính xác nhất là gì?",
    "options": [
      "Ngành kết hợp giữa nghệ thuật và công nghệ thông tin để truyền tải thông điệp bằng hình ảnh thị giác.",
      "Nghề chuyên sửa chữa các bo mạch chủ và lắp ráp các card màn hình đồ họa trong phần cứng máy tính.",
      "Nghề viết các hệ điều hành và quản trị các mạng máy tính nội bộ trong các doanh nghiệp viễn thông.",
      "Nghề nhập liệu và thống kê các con số kế toán tài chính trên các phần mềm bảng tính điện tử."
    ],
    "answer": 0,
    "explain": "Thiết kế đồ họa là nghệ thuật kết hợp tư duy sáng tạo với công cụ CNTT để truyền tải thông điệp thị giác."
  },
  {
    "id": "b33-q02",
    "q": "Sản phẩm nào sau đây là sản phẩm tiêu biểu của ngành thiết kế đồ họa 2D truyền thông và quảng cáo?",
    "options": [
      "Poster quảng cáo, logo nhận diện thương hiệu, bao bì sản phẩm, banner và tờ rơi giới thiệu.",
      "Bộ vi xử lý CPU máy tính và các thanh RAM lưu trữ dữ liệu tạm thời trong thùng máy.",
      "Các đoạn mã nhị phân 0 và 1 dùng để giao tiếp trực tiếp với các chip bán dẫn điện tử.",
      "Dây cáp mạng Internet và các thiết bị định tuyến Router kết nối mạng cáp quang quốc tế."
    ],
    "answer": 0,
    "explain": "Sản phẩm đồ họa 2D gồm: poster, logo, bao bì, banner, brochure, nhận diện thương hiệu..."
  },
  {
    "id": "b33-q03",
    "q": "Trong thiết kế đồ họa, đồ họa vectơ (Vector Graphics) có ưu điểm vượt trội nào so với đồ họa điểm ảnh (Raster/Bitmap)?",
    "options": [
      "Có thể co giãn kích thước tùy ý mà hoàn toàn không bị vỡ hình, mờ nhòe hay suy giảm chất lượng hình ảnh.",
      "Chỉ sử dụng được duy nhất hai màu đen và trắng nên dung lượng tệp tin luôn nhỏ hơn 1 Kilobyte.",
      "Chụp lại được nguyên vẹn các chi tiết ánh sáng và bóng đổ phức tạp của thế giới thực như máy ảnh.",
      "Không cần sử dụng bất kỳ phần mềm chuyên dụng nào mà hệ điều hành tự động vẽ ra theo ý muốn."
    ],
    "answer": 0,
    "explain": "Đồ họa vector dựa trên phương trình toán học nên co giãn phóng to thu nhỏ không bị vỡ nét."
  },
  {
    "id": "b33-q04",
    "q": "Phần mềm mã nguồn mở miễn phí nào sau đây được giảng dạy trong chương trình Tin học 10 để thiết kế đồ họa vectơ?",
    "options": [
      "Phần mềm Inkscape cung cấp đầy đủ công cụ vẽ vectơ tiêu chuẩn tương đương Adobe Illustrator.",
      "Phần mềm Paint có sẵn trong Windows chỉ hỗ trợ vẽ các nét vẽ đơn giản bằng cọ vẽ.",
      "Phần mềm Notepad dùng để soạn thảo các văn bản thô không có định dạng màu sắc hình ảnh.",
      "Phần mềm Microsoft Excel dùng để tính toán số liệu và vẽ các biểu đồ thống kê kinh doanh."
    ],
    "answer": 0,
    "explain": "Inkscape là phần mềm đồ họa vector mã nguồn mở miễn phí trong chương trình Tin học 10."
  },
  {
    "id": "b33-q05",
    "q": "Vị trí thiết kế giao diện và trải nghiệm người dùng (UI/UX Designer) tập trung vào công việc gì?",
    "options": [
      "Thiết kế giao diện đẹp mắt (UI) và tối ưu hóa sự thuận tiện, dễ dùng của ứng dụng cho khách hàng (UX).",
      "Viết các thuật toán bảo mật cơ sở dữ liệu và mã hóa đường truyền thông tin giữa các máy chủ.",
      "Cài đặt phần mềm diệt virus và vệ sinh bàn phím, màn hình máy tính định kì cho văn phòng.",
      "Hàn gắn các vi mạch điện tử và kiểm tra điện áp của bộ nguồn máy tính để bàn."
    ],
    "answer": 0,
    "explain": "UI (User Interface) là thiết kế giao diện; UX (User Experience) là tối ưu trải nghiệm và cảm nhận người dùng."
  },
  {
    "id": "b33-q06",
    "q": "Phần mềm nào sau đây là tiêu chuẩn công nghiệp thế giới về chỉnh sửa ảnh bitmap và thiết kế kỹ thuật số?",
    "options": [
      "Adobe Photoshop chuyên xử lý ảnh điểm ảnh (raster) và cắt ghép hình ảnh số nghệ thuật.",
      "Adobe Acrobat Reader chỉ dùng để mở và đọc các tệp văn bản tài liệu định dạng PDF.",
      "VLC Media Player chuyên dùng để phát các video phim ảnh và nghe các tệp âm thanh số.",
      "Google Chrome là trình duyệt web dùng để tra cứu thông tin trên mạng toàn cầu Internet."
    ],
    "answer": 0,
    "explain": "Adobe Photoshop là phần mềm chỉnh sửa ảnh raster tiêu chuẩn phổ biến nhất thế giới."
  },
  {
    "id": "b33-q07",
    "q": "Nhà thiết kế đồ họa 3D (3D Graphic Designer) thường làm việc trong những lĩnh vực mũi nhọn nào sau đây?",
    "options": [
      "Sản xuất phim hoạt hình 3D, kĩ xảo điện ảnh (VFX), thiết kế nhân vật game và mô phỏng kiến trúc.",
      "In ấn các loại hóa đơn giấy bán hàng và biên lai thu học phí trong các trường trung học.",
      "Quản lý hồ sơ nhân sự và phân bổ lịch trực đêm cho các kỹ sư mạng viễn thông quốc gia.",
      "Đo đạc diện tích đất đai ngoài thực địa bằng các thiết bị trắc địa cổ điển không dùng máy tính."
    ],
    "answer": 0,
    "explain": "Thiết kế 3D ứng dụng mạnh trong làm game, hoạt hình 3D, kĩ xảo điện ảnh và mô phỏng kiến trúc/nội thất."
  },
  {
    "id": "b33-q08",
    "q": "Phần mềm mã nguồn mở 3D miễn phí cực kỳ mạnh mẽ đang rất phổ biến hiện nay trên toàn cầu là gì?",
    "options": [
      "Blender hỗ trợ toàn diện từ dựng hình 3D, gắn xương hoạt hóa, mô phỏng vật lý đến kết xuất đồ họa.",
      "Paint 3D đi kèm Windows chỉ có các tính năng xếp hình khối cơ bản cho người mới bắt đầu.",
      "AutoCAD 2D chuyên dùng để vẽ các sơ đồ mạch điện và bản vẽ cơ khí mặt phẳng truyền thống.",
      "WinRAR chuyên dùng để nén và giải nén các tệp tin lưu trữ dữ liệu trên đĩa cứng."
    ],
    "answer": 0,
    "explain": "Blender là bộ phần mềm sáng tạo 3D mã nguồn mở miễn phí hàng đầu thế giới."
  },
  {
    "id": "b33-q09",
    "q": "Năng lực quan trọng hàng đầu của một người làm nghề thiết kế đồ họa máy tính là gì?",
    "options": [
      "Óc thẩm mỹ tinh tế, tư duy thị giác, sự sáng tạo và khả năng làm chủ các công cụ phần mềm đồ họa.",
      "Khả năng thuộc lòng tất cả các công thức toán tích phân và vi phân nhiều biến số trong đại học.",
      "Tốc độ chạy bền và sức khỏe thể chất để khuân vác các thùng máy chủ trong phòng máy chủ.",
      "Khả năng dịch trực tiếp các tài liệu tiếng Nga cổ sang tiếng Việt mà không cần từ điển hỗ trợ."
    ],
    "answer": 0,
    "explain": "Người làm đồ họa cần óc thẩm mỹ, tư duy thị giác, óc sáng tạo kết hợp kỹ năng sử dụng thành thạo phần mềm."
  },
  {
    "id": "b33-q10",
    "q": "Một 'Portfolio' (Hồ sơ năng lực) của nhà thiết kế đồ họa khi đi xin việc có ý nghĩa then chốt như thế nào?",
    "options": [
      "Là tập hợp các tác phẩm, dự án thiết kế thực tế đã làm để chứng minh năng lực thực tế với nhà tuyển dụng.",
      "Là bản sao bảng điểm các môn văn hóa phổ thông như Toán, Ngữ văn, Lịch sử từ thời cấp hai.",
      "Là giấy chứng nhận sức khỏe và danh sách các khoản đóng góp quỹ từ thiện của cá nhân đó.",
      "Là bản kê khai tài sản nhà cửa đất đai để đảm bảo trách nhiệm tài chính khi nhận việc."
    ],
    "answer": 0,
    "explain": "Portfolio là bộ hồ sơ tổng hợp các sản phẩm/dự án thiết kế thực tế, là yếu tố quyết định nhất khi tuyển dụng designer."
  },
  {
    "id": "b33-q11",
    "q": "Hệ màu nào sau đây là hệ màu chuẩn được sử dụng khi thiết kế sản phẩm đồ họa phục vụ mục đích IN ẤN?",
    "options": [
      "Hệ màu CMYK (Cyan - Lục lam, Magenta - Hồng sẫm, Yellow - Vàng, Key/Black - Đen).",
      "Hệ màu RGB (Red - Đỏ, Green - Xanh lá, Blue - Xanh dương) dùng cho màn hình kỹ thuật số.",
      "Hệ màu HSL (Hue - Sắc độ, Saturation - Độ bão hòa, Lightness - Độ sáng của ánh sáng).",
      "Hệ màu Grayscale chỉ gồm các sắc độ xám đơn sắc không có màu sắc sống động."
    ],
    "answer": 0,
    "explain": "Hệ màu CMYK là chuẩn in ấn công nghiệp (mực in). Hệ RGB dùng cho hiển thị màn hình số."
  },
  {
    "id": "b33-q12",
    "q": "Hệ màu RGB thường được ưu tiên lựa chọn khi thiết kế sản phẩm đồ họa trong trường hợp nào?",
    "options": [
      "Thiết kế hình ảnh hiển thị trên các thiết bị kỹ thuật số như màn hình máy tính, điện thoại, website.",
      "Thiết kế để in ấn poster khổ lớn trên bạt hiflex treo ngoài trời bằng mực in dầu công nghiệp.",
      "Thiết kế để in bao bì hộp sữa giấy và nhãn mác dán trên chai nước giải khát bằng máy in offset.",
      "Thiết kế các mẫu sách giáo khoa và tạp chí in màu trên giấy bóng cao cấp bằng công nghệ in ống đồng."
    ],
    "answer": 0,
    "explain": "Hệ RGB dựa trên ánh sáng phát quang, chuẩn cho hiển thị màn hình (web, app, video, mạng xã hội)."
  },
  {
    "id": "b33-q13",
    "q": "Quy chuẩn đạo đức nghề nghiệp và pháp luật quan trọng nhất mà nhà thiết kế đồ họa bắt buộc phải tuân thủ là gì?",
    "options": [
      "Tôn trọng quyền tác giả và sở hữu trí tuệ, không sao chép trái phép hay đạo nhái thiết kế của người khác.",
      "Tuyệt đối không được sử dụng chuột máy tính không dây trong quá trình vẽ các đường cong vectơ.",
      "Bắt buộc phải sử dụng tất cả các màu sắc trong bảng màu cho mỗi tác phẩm thiết kế của mình.",
      "Chỉ được phép xuất bản tệp hình ảnh vào các ngày chẵn trong tuần theo lịch dương thế giới."
    ],
    "answer": 0,
    "explain": "Đạo đức nghề nghiệp designer: Tôn trọng bản quyền, tác quyền sở hữu trí tuệ, không đạo nhái (plagiarism)."
  },
  {
    "id": "b33-q14",
    "q": "Sự phát triển mạnh mẽ của công nghệ Trí tuệ nhân tạo tạo sinh (Generative AI - như Midjourney, DALL-E) đặt ra yêu cầu gì đối với nhà thiết kế đồ họa?",
    "options": [
      "Chủ động học hỏi, coi AI là công cụ trợ lực sáng tạo, đồng thời nâng cao tư duy thẩm mỹ và tính cá nhân hóa độc bản.",
      "Từ bỏ hoàn toàn ngành nghề thiết kế đồ họa vì con người không còn khả năng cạnh tranh với máy tính móc.",
      "Kiến nghị các cơ quan chức năng cấm hoàn toàn việc sử dụng máy vi tính trong các công ty thiết kế.",
      "Chỉ tập trung vẽ tranh thủ công trên giấy báo cũ bằng màu nước để tránh sự can thiệp của AI."
    ],
    "answer": 0,
    "explain": "Nhà thiết kế cần thích ứng, tận dụng AI làm công cụ hỗ trợ để gia tăng năng suất và phát huy tư duy sáng tạo độc bản."
  },
  {
    "id": "b33-q15",
    "q": "Trong môi trường doanh nghiệp hiện đại, người làm nghề thiết kế đồ họa thường phối hợp chặt chẽ nhất với các bộ phận nào?",
    "options": [
      "Bộ phận Tiếp thị (Marketing), Truyền thông (Media) và đội ngũ Phát triển phần mềm / Lập trình Web.",
      "Bộ phận kế toán kho hàng và đội ngũ nhân viên bảo vệ canh giữ cổng cơ quan ban đêm.",
      "Bộ phận bảo trì xe đưa đón nhân viên và đội ngũ lao công vệ sinh khuôn viên tòa nhà văn phòng.",
      "Bộ phận thanh tra an toàn vệ sinh lao động và kiểm toán tài chính nhà nước độc lập."
    ],
    "answer": 0,
    "explain": "Designer phối hợp chặt chẽ với Marketing, Content, Truyền thông và Đội ngũ lập trình viên (Front-end/Dev)."
  },
  {
    "id": "b33-q16",
    "q": "Một học sinh lớp 10 yêu thích hội họa, có tư duy bố cục màu sắc tốt và thích sử dụng máy tính thì ngành nghề đại học nào sau đây là định hướng phù hợp?",
    "options": [
      "Ngành Thiết kế đồ họa (Graphic Design), Thiết kế đa phương tiện (Multimedia) hoặc Nghệ thuật số (Digital Art).",
      "Ngành Kế toán doanh nghiệp, Tài chính ngân hàng hoặc Quản trị rủi ro bảo hiểm xã hội.",
      "Ngành Kỹ thuật khai thác mỏ địa chất hoặc Công nghệ chế biến thủy hải sản đông lạnh.",
      "Ngành Thú y nông nghiệp hoặc Quản lý đất đai tài nguyên môi trường rừng nhiệt đới."
    ],
    "answer": 0,
    "explain": "Các ngành học phù hợp: Thiết kế đồ họa, Truyền thông đa phương tiện, Thiết kế mỹ thuật số, Đồ họa game/hoạt hình."
  }
];
