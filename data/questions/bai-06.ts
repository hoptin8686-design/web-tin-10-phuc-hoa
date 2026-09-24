import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-06: Dữ liệu âm thanh và hình ảnh
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b06-q01",
    "q": "Khái niệm 'Điểm ảnh' (Pixel - Picture Element) trong ảnh số được hiểu là gì?",
    "options": [
      "Phần tử nhỏ nhất cấu thành nên một bức ảnh số dạng đồ họa điểm (Bitmap).",
      "Kích thước đường chéo của màn hình ti vi hoặc màn hình máy tính để bàn.",
      "Số lượng màu sắc tối đa mà mắt người có thể cảm nhận được trong một giây.",
      "Khoảng cách vật lí giữa hai mắt quét của cảm biến máy ảnh kỹ thuật số."
    ],
    "answer": 0,
    "explain": "Pixel là đơn vị cơ bản nhỏ nhất của ảnh số bitmap; mỗi pixel mang thông tin về tọa độ và màu sắc."
  },
  {
    "id": "b06-q02",
    "q": "Độ phân giải của một bức ảnh số (Image Resolution) thể hiện điều gì?",
    "options": [
      "Số lượng điểm ảnh theo chiều rộng và chiều cao của bức ảnh (ví dụ 1920 x 1080).",
      "Dung lượng bộ nhớ mà tệp ảnh chiếm dụng trên thanh ghi của vi xử lí CPU.",
      "Tốc độ truyền tệp ảnh từ điện thoại sang máy tính qua kết nối Bluetooth.",
      "Khoảng thời gian cần thiết để phần mềm đồ họa xuất bản bức ảnh ra ổ đĩa."
    ],
    "answer": 0,
    "explain": "Độ phân giải ảnh là số pixel theo chiều ngang × chiều dọc (W × H), ví dụ Full HD là 1920 × 1080 = 2 073 600 pixels."
  },
  {
    "id": "b06-q03",
    "q": "Trong mô hình màu RGB, ba màu cơ bản được phối trộn để tạo nên mọi màu sắc là gì?",
    "options": [
      "Đỏ (Red), Lục (Green) và Lam (Blue).",
      "Đỏ (Red), Vàng (Yellow) và Xanh da trời (Blue).",
      "Đen (Black), Trắng (White) và Xám (Gray).",
      "Hồng (Pink), Tím (Purple) và Nâu (Brown)."
    ],
    "answer": 0,
    "explain": "Mô hình màu RGB dựa trên 3 màu gốc ánh sáng: R (Đỏ), G (Lục / Xanh lá), B (Lam / Xanh dương)."
  },
  {
    "id": "b06-q04",
    "q": "Chuẩn màu 24-bit (True Color) sử dụng bao nhiêu bit để biểu diễn mỗi kênh màu Red, Green, Blue?",
    "options": [
      "8 bit cho mỗi kênh màu (mỗi kênh có 256 mức độ từ 0 đến 255).",
      "24 bit cho mỗi kênh màu riêng biệt trong hệ thống phần cứng máy.",
      "1 bit cho mỗi kênh màu để phân biệt giữa trạng thái sáng và tối.",
      "16 bit cho mỗi kênh màu để mô phỏng dải màu đen trắng cổ điển."
    ],
    "answer": 0,
    "explain": "True Color 24-bit gồm: 8 bit R + 8 bit G + 8 bit B = 24 bit, tạo ra 256^3 ≈ 16.7 triệu màu sắc chân thực."
  },
  {
    "id": "b06-q05",
    "q": "Đặc điểm cơ bản để phân biệt giữa ảnh Bitmap và ảnh Vector là gì?",
    "options": [
      "Ảnh Bitmap bị vỡ hạt khi phóng to, còn ảnh Vector phóng to bao nhiêu cũng không bị vỡ nét.",
      "Ảnh Bitmap luôn luôn có dung lượng tệp nhỏ hơn hàng trăm lần so với ảnh Vector.",
      "Ảnh Vector chỉ có thể biểu diễn được hai màu đen trắng chứ không có màu sắc.",
      "Ảnh Bitmap chỉ mở được trên điện thoại còn ảnh Vector chỉ mở được trên máy tính."
    ],
    "answer": 0,
    "explain": "Ảnh Bitmap tạo từ lưới pixel nên phóng to sẽ lộ ô pixel (vỡ hạt). Ảnh Vector tạo từ công thức toán học đường nét nên phóng to vô hạn vẫn sắc nét."
  },
  {
    "id": "b06-q06",
    "q": "Tệp tin hình ảnh có phần mở rộng nào dưới đây thuộc định dạng đồ họa Vector?",
    "options": [
      ".svg (Scalable Vector Graphics).",
      ".jpg (Joint Photographic Experts Group).",
      ".png (Portable Network Graphics).",
      ".bmp (Bitmap Image File)."
    ],
    "answer": 0,
    "explain": ".svg, .ai, .eps là các định dạng ảnh vector. Còn .jpg, .png, .bmp, .gif là ảnh bitmap."
  },
  {
    "id": "b06-q07",
    "q": "Quá trình số hóa âm thanh từ dạng tương tự (Analog) sang dạng số (Digital) gồm hai bước cơ bản là:",
    "options": [
      "Lấy mẫu tín hiệu theo thời gian (Sampling) và lượng tử hóa biên độ (Quantization).",
      "Khuếch đại âm thanh qua loa phát thanh và thu âm lại bằng micrô máy tính.",
      "Chuyển đổi văn bản thành giọng nói và dịch tự động sang tiếng Anh chuẩn.",
      "Cắt bỏ toàn bộ các tần số âm trầm và chỉ giữ lại các âm thanh có tần số cao."
    ],
    "answer": 0,
    "explain": "Số hóa âm thanh: Lấy mẫu (đo biên độ tại các thời điểm rời rạc) -> Lượng tử hóa (làm tròn biên độ thành các giá trị nhị phân)."
  },
  {
    "id": "b06-q08",
    "q": "Tần số lấy mẫu âm thanh (Sampling Rate) tiêu chuẩn của đĩa CD chất lượng cao là bao nhiêu?",
    "options": [
      "44.1 kHz (tức là thực hiện lấy mẫu 44 100 lần trong mỗi giây).",
      "1000 Hz (tức là thực hiện lấy mẫu đúng 1 000 lần trong mỗi giây).",
      "192 MHz (tức là thực hiện lấy mẫu 192 triệu lần trong mỗi giây).",
      "20 kHz (tức là giới hạn ngưỡng nghe tối đa của tai người trưởng thành)."
    ],
    "answer": 0,
    "explain": "Chuẩn âm thanh CD là 44.1 kHz / 16 bit stereo, đảm bảo tái tạo trung thực dải tần nghe được của tai người (tối đa 20 kHz theo định lí Nyquist)."
  },
  {
    "id": "b06-q09",
    "q": "Độ sâu lượng tử (Bit Depth) trong số hóa âm thanh thể hiện điều gì?",
    "options": [
      "Số lượng bit được sử dụng để ghi lại biên độ sóng âm tại mỗi thời điểm lấy mẫu.",
      "Độ dài thời gian của bài hát tính theo đơn vị phút và giây trên máy nghe nhạc.",
      "Số lượng loa phát thanh được kết nối vào hệ thống âm thanh vòm của gia đình.",
      "Tốc độ truyền sóng âm thanh trong môi trường không khí ở nhiệt độ phòng."
    ],
    "answer": 0,
    "explain": "Bit depth (độ sâu bit) quyết định số mức biên độ đo được; 16 bit cho 65 536 mức, 24 bit cho hơn 16.7 triệu mức, âm thanh càng chi tiết."
  },
  {
    "id": "b06-q10",
    "q": "Định dạng tệp âm thanh nào dưới đây là định dạng nén có mất mát dữ liệu (Lossy Compression) phổ biến nhất?",
    "options": [
      ".mp3 (MPEG Audio Layer III).",
      ".wav (Waveform Audio File Format).",
      ".flac (Free Lossless Audio Codec).",
      ".alac (Apple Lossless Audio Codec)."
    ],
    "answer": 0,
    "explain": ".mp3 là chuẩn nén có mất mát, loại bỏ các tần số tai người khó nghe để giảm dung lượng xuống còn khoảng 1/10 so với .wav gốc."
  },
  {
    "id": "b06-q11",
    "q": "Tại sao định dạng ảnh JPEG (.jpg) thường được dùng để chụp ảnh phong cảnh và người thật?",
    "options": [
      "Áp dụng thuật toán nén thông minh giúp giảm mạnh dung lượng tệp mà mắt thường khó nhận ra sự suy giảm chất lượng.",
      "Cho phép phóng to ảnh lên hàng triệu lần mà các nét vẽ không bao giờ bị hiện tượng vỡ hạt.",
      "Bảo vệ bản quyền hoàn toàn không cho phép người khác tải ảnh về máy tính cá nhân.",
      "Lưu trữ được cả âm thanh phát ra từ cảnh vật ngay tại thời điểm người chụp bấm nút máy ảnh."
    ],
    "answer": 0,
    "explain": "JPEG nén rất tốt cho ảnh nhiều chi tiết chuyển màu mềm mại (ảnh chụp thực tế), giúp giảm dung lượng đáng kể để tải lên mạng."
  },
  {
    "id": "b06-q12",
    "q": "Định dạng ảnh PNG (.png) có ưu điểm vượt trội nào so với định dạng JPEG (.jpg)?",
    "options": [
      "Hỗ trợ nền trong suốt (Transparency/Alpha channel) và nén không mất dữ liệu chất lượng cao.",
      "Có dung lượng tệp luôn luôn nhỏ hơn tệp JPEG từ 5 đến 10 lần trong mọi tình huống.",
      "Chỉ có thể mở được bằng phần mềm đồ họa chuyên nghiệp Photoshop trên máy tính.",
      "Có thể trực tiếp in ra giấy ảnh khổ lớn mà không cần dùng đến mực in máy tính."
    ],
    "answer": 0,
    "explain": "PNG hỗ trợ kênh trong suốt (Alpha channel) rất phù hợp làm logo, icon, nhãn đồ họa và không bị mờ nhòe chữ khi lưu lại."
  },
  {
    "id": "b06-q13",
    "q": "Một bức ảnh có kích thước 1000 x 1000 điểm ảnh theo chuẩn 24-bit màu. Dung lượng dữ liệu thô (chưa nén) của ảnh là bao nhiêu?",
    "options": [
      "Khoảng 3 000 000 Byte (gần 2.86 MB).",
      "Khoảng 1 000 000 Byte (gần 0.95 MB).",
      "Khoảng 24 000 000 Byte (gần 22.8 MB).",
      "Khoảng 300 000 Byte (gần 292 KB)."
    ],
    "answer": 0,
    "explain": "Số pixel = 1000 × 1000 = 1 000 000. Mỗi pixel 24 bit = 3 byte. Dung lượng thô = 1 000 000 × 3 = 3 000 000 Byte ≈ 2.86 MB."
  },
  {
    "id": "b06-q14",
    "q": "Khái niệm 'Kênh âm thanh Stereo' (âm thanh nổi) có đặc điểm gì?",
    "options": [
      "Sử dụng hai kênh âm thanh độc lập (kênh trái và kênh phải) tạo cảm giác không gian sống động.",
      "Chỉ sử dụng một kênh âm thanh duy nhất phát ra đồng thời ở tất cả các loa trong phòng.",
      "Là âm thanh chỉ có thể nghe được bằng tai nghe có dây cắm trực tiếp vào máy tính.",
      "Là tín hiệu âm thanh có tần số cao hơn 100 MHz mà tai người không thể cảm nhận được."
    ],
    "answer": 0,
    "explain": "Stereo gồm 2 kênh riêng biệt (Left và Right), tạo chiều sâu không gian âm thanh. Âm thanh 1 kênh gọi là Mono."
  },
  {
    "id": "b06-q15",
    "q": "Khi thu âm bài phát biểu tại hội trường, nếu đặt tần số lấy mẫu quá thấp (ví dụ 4 kHz) thì hiện tượng gì sẽ xảy ra?",
    "options": [
      "Âm thanh thu được bị méo tiếng, nghẹt tiếng và mất đi các âm sắc trong trẻo tự nhiên.",
      "Dung lượng tệp âm thanh sẽ phình to gấp hàng trăm lần khiến máy tính bị treo máy.",
      "Bài phát biểu tự động bị tua nhanh gấp 10 lần so với tốc độ nói thực tế của người nói.",
      "Loa phát thanh sẽ lập tức bị cháy cuộn cảm biến do quá tải tần số âm thanh."
    ],
    "answer": 0,
    "explain": "Tần số lấy mẫu quá thấp không bắt kịp dao động sóng âm, gây méo tiếng và mất dải tần số cao theo định lí lấy mẫu."
  },
  {
    "id": "b06-q16",
    "q": "Phần mềm nào dưới đây là phần mềm chuyên dụng mã nguồn mở để ghi âm và xử lí âm thanh số phổ biến nhất?",
    "options": [
      "Audacity.",
      "Inkscape.",
      "Microsoft Excel.",
      "Google Chrome."
    ],
    "answer": 0,
    "explain": "Audacity là phần mềm miễn phí mã nguồn mở hàng đầu để thu âm, cắt ghép và lọc tiếng ồn cho tệp âm thanh số."
  }
];
