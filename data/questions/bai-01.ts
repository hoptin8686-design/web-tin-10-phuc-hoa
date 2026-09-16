import type { Question } from "@/lib/types";

// Ngân hàng 15 câu trắc nghiệm Bài 1: Thông tin và xử lí thông tin.
// Tuân thủ nghiêm ngặt quy tắc Cẩm nang:
// - Độ dài 4 đáp án cân bằng tuyệt đối (chênh lệch <= 10 kí tự, chống mẹo câu dài nhất).
// - Các phương án nhiễu là hiểu lầm có thật trong thực tế.
// - Giải thích chi tiết vì sao đúng và vì sao sai.

export const questions: Question[] = [
  {
    id: "b01-q01",
    q: "Trong khoa học Tin học, khái niệm 'dữ liệu' được hiểu chính xác nhất là gì?",
    options: [
      "Là các tín hiệu thô được đưa vào máy tính để nhận biết và xử lí.",
      "Là những ý nghĩa trừu tượng mang lại hiểu biết trọn vẹn cho con người.",
      "Là công cụ phần cứng dùng để truyền tải các tập tin qua môi trường mạng.",
      "Là các quy luật được đúc kết từ thực tiễn để phục vụ việc ra quyết định.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng theo SGK: Dữ liệu là thông tin dưới dạng các con số, văn bản, hình ảnh, âm thanh đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được. Phương án B mô tả 'thông tin', còn D mô tả 'tri thức'.",
  },
  {
    id: "b01-q02",
    q: "Phát biểu nào sau đây nêu đúng bản chất của khái niệm 'thông tin'?",
    options: [
      "Là ý nghĩa của dữ liệu mang lại cho con người sự hiểu biết về thế giới.",
      "Là các kí tự số nhị phân 0 và 1 được lưu trữ trên các phiến đĩa từ tính.",
      "Là thiết bị số làm nhiệm vụ chuyển tiếp các gói tin trong mạng máy tính.",
      "Là vật mang tin đóng vai trò lưu giữ nội dung bài học trong nhà trường.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Thông tin là tất cả những gì mang lại cho chúng ta hiểu biết, gắn liền với quá trình nhận thức của con người. Phương án B là mã nhị phân (dữ liệu), C là thiết bị mạng, D là vật mang tin.",
  },
  {
    id: "b01-q03",
    q: "Khẳng định nào dưới đây là đúng về mối quan hệ giữa thông tin và dữ liệu?",
    options: [
      "Cùng một thông tin có thể được thể hiện qua nhiều dạng dữ liệu khác nhau.",
      "Mỗi dữ liệu cụ thể chỉ biểu diễn duy nhất một thông tin trong mọi ngữ cảnh.",
      "Thông tin và dữ liệu hoàn toàn đồng nhất với nhau trong mọi trường hợp xử lí.",
      "Dữ liệu luôn có ý nghĩa trọn vẹn mà không cần trải qua quá trình nhận thức.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Thông tin và dữ liệu độc lập tương đối. Ví dụ thông tin về một bài học có thể thể hiện qua dữ liệu văn bản viết tay, tệp Word hoặc video bài giảng. B sai vì một dữ liệu có thể mang nhiều thông tin khác nhau. C sai vì dữ liệu và thông tin không đồng nhất.",
  },
  {
    id: "b01-q04",
    q: "Tính toàn vẹn của thông tin thể hiện ở đặc điểm nào sau đây?",
    options: [
      "Dữ liệu không đầy đủ có thể dẫn đến việc thông tin bị sai lệch hoặc vô nghĩa.",
      "Mọi tập dữ liệu dù thiếu hụt vẫn luôn phản ánh đúng thông tin ban đầu gửi đi.",
      "Thông tin chỉ thay đổi khi thiết bị phần cứng của máy tính xảy ra hiện tượng hỏng.",
      "Việc mất mát dữ liệu không bao giờ ảnh hưởng đến tính chính xác của thông tin rút ra.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng theo SGK: Thông tin có tính toàn vẹn. Khi dữ liệu không đầy đủ, thông tin thu được có thể bị hiểu sai lệch hoàn toàn hoặc không thể xác định được (ví dụ dữ liệu đo '39°C' mà thiếu ngữ cảnh là thân nhiệt hay nhiệt độ phòng thì không thể chẩn đoán bệnh).",
  },
  {
    id: "b01-q05",
    q: "Quy trình xử lí thông tin cơ bản trong máy tính diễn ra theo trình tự nào?",
    options: [
      "Tiếp nhận dữ liệu đầu vào → Xử lí dữ liệu trong bộ nhớ → Đưa ra kết quả đầu ra.",
      "Xử lí dữ liệu tính toán → Tiếp nhận dữ liệu từ ngoài vào → Hiển thị kết quả ra màn.",
      "Đưa dữ liệu ra ngoài máy in → Tiếp nhận dữ liệu bàn phím → Lưu trữ dữ liệu vào đĩa.",
      "Lưu trữ dữ liệu vĩnh viễn → Đưa ra màn hình hiển thị → Xử lí tính toán trung tâm.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Máy tính hoạt động theo 3 bước tuần tự: (1) Tiếp nhận dữ liệu (Input) qua bàn phím, chuột, camera; (2) Xử lí dữ liệu (Process) trong CPU và bộ nhớ; (3) Đưa ra kết quả (Output/Storage) qua màn hình, loa hoặc lưu vào vật mang tin.",
  },
  {
    id: "b01-q06",
    q: "Nhóm thiết bị nào sau đây chuyên thực hiện chức năng tiếp nhận dữ liệu (Input)?",
    options: [
      "Bàn phím máy tính, chuột cảm ứng, máy quét ảnh số và camera ghi hình.",
      "Màn hình máy tính, máy in nhiệt, loa phát âm thanh và tai nghe cá nhân.",
      "Thanh nhớ RAM, ổ đĩa cứng thể rắn SSD, bộ nhớ đệm Cache và đĩa quang DVD.",
      "Khối vi xử lí CPU, bộ làm mát quạt gió, bo mạch chủ và bộ nguồn điện áp.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Bàn phím, chuột, máy quét, camera là các thiết bị vào (Input devices) giúp tiếp nhận dữ liệu từ bên ngoài vào máy tính. Nhóm B là thiết bị ra (Output), C là thiết bị lưu trữ, D là linh kiện xử lí phần cứng.",
  },
  {
    id: "b01-q07",
    q: "Vai trò thực chất của máy tính trong quá trình nhận thức của con người là gì?",
    options: [
      "Là công cụ kĩ thuật hỗ trợ con người nâng cao năng suất thu nhận và xử lí.",
      "Có khả năng tự động thay thế hoàn toàn bộ não con người trong nhận thức tự nhiên.",
      "Tự sinh ra mọi tri thức mới mà không cần bất kì dữ liệu ban đầu nào từ đời sống.",
      "Đóng vai trò là chủ thể nhận thức độc lập có cảm xúc và tư duy như con người.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: SGK nêu rõ 'Máy tính không tự nhận thức được mà chỉ là công cụ hỗ trợ cho con người trong quá trình nhận thức'. Các phương án B, C, D gán sai bản chất nhận thức tự chủ cho máy móc.",
  },
  {
    id: "b01-q08",
    q: "Trong các hệ thống máy tính hiện đại, đơn vị 1 Byte được quy ước gồm bao nhiêu bit?",
    options: [
      "Là một nhóm gồm 8 bit liên tiếp dùng để mã hoá kí tự trong máy tính.",
      "Là đơn vị dữ liệu nhỏ nhất chỉ lưu được một trạng thái bật hoặc tắt.",
      "Là bội số gồm đúng 1000 bit liên tục được truyền đi trên đường dây mạng.",
      "Là dung lượng tối thiểu để lưu được một tập tin hình ảnh độ phân giải cao.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: 1 Byte = 8 bit. Byte là đơn vị cơ bản đo lượng dữ liệu trong máy tính. Phương án B nói về bit đơn lẻ (0 hoặc 1), C và D sai định nghĩa.",
  },
  {
    id: "b01-q09",
    q: "Mối quan hệ đo lường chuẩn xác giữa 1 Kilobyte (KB) và Byte (B) trong Tin học là gì?",
    options: [
      "1 KB tương đương với 2¹⁰ Byte = 1 024 Byte theo chuẩn hệ thống nhị phân.",
      "1 KB tương đương với 10³ Byte = 1 000 Byte theo quy ước hệ thống thập phân.",
      "1 KB tương đương với 2⁸ Byte = 256 Byte theo chuẩn biểu diễn mã nhị phân 8 bit.",
      "1 KB tương đương với 2²⁰ Byte = 1 048 576 Byte theo quy ước lưu trữ hiện đại.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Trong Tin học, các đơn vị kế tiếp hơn kém nhau 2¹⁰ = 1 024 lần, do đó 1 KB = 1 024 Byte. Phương án B là nhầm lẫn phổ biến với hệ đo lường thập phân thông thường.",
  },
  {
    id: "b01-q10",
    q: "Khi quy đổi một tệp dung lượng 4 Megabyte (MB) sang đơn vị Kilobyte (KB), ta được kết quả là:",
    options: [
      "Có giá trị bằng 4 096 KB sau khi thực hiện phép nhân 4 với 1 024.",
      "Có giá trị bằng 4 000 KB sau khi thực hiện phép nhân 4 với 1 000.",
      "Có giá trị bằng 2 048 KB sau khi thực hiện phép nhân 2 với 1 024.",
      "Có giá trị bằng 8 192 KB sau khi thực hiện phép nhân 8 với 1 024.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Vì 1 MB = 1 024 KB nên 4 MB = 4 × 1 024 = 4 096 KB. Phương án B nhân sai với 1 000.",
  },
  {
    id: "b01-q11",
    q: "Dãy đơn vị đo dữ liệu nào sau đây được sắp xếp theo đúng thứ tự tăng dần từ bé đến lớn?",
    options: [
      "Byte → Kilobyte (KB) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB).",
      "Byte → Megabyte (MB) → Kilobyte (KB) → Terabyte (TB) → Gigabyte (GB).",
      "Bit → Kilobyte (KB) → Byte (B) → Gigabyte (GB) → Megabyte (MB).",
      "Byte → Terabyte (TB) → Gigabyte (GB) → Megabyte (MB) → Kilobyte (KB).",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Thứ tự chuẩn là Byte < KB < MB < GB < TB < PB... Mỗi đơn vị sau gấp 1 024 lần đơn vị liền trước.",
  },
  {
    id: "b01-q12",
    q: "Một thẻ nhớ có dung lượng 16 GB. Hỏi thẻ nhớ đó chứa được tối đa bao nhiêu ảnh có kích thước 4 MB?",
    options: [
      "Chứa được khoảng 4 096 bức ảnh sau khi quy đổi 16 GB = 16 384 MB rồi chia 4.",
      "Chứa được khoảng 4 000 bức ảnh sau khi quy đổi 16 GB = 16 000 MB rồi chia 4.",
      "Chứa được khoảng 2 048 bức ảnh sau khi lấy 16 nhân với 1 024 rồi chia cho 8.",
      "Chứa được khoảng 1 024 bức ảnh sau khi chia trực tiếp 16 cho 4 rồi nhân 256.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Đổi 16 GB = 16 × 1 024 = 16 384 MB. Số ảnh tối đa lưu được = 16 384 / 4 = 4 096 ảnh.",
  },
  {
    id: "b01-q13",
    q: "Ưu điểm vượt trội nổi bật nhất của thiết bị số trong việc lưu trữ dữ liệu là gì?",
    options: [
      "Khả năng lưu lượng tin khổng lồ trong thiết bị nhỏ gọn với chi phí rất rẻ.",
      "Dữ liệu ghi trên vật mang tin số không bao giờ bị người dùng bấm xoá nhầm.",
      "Tự động phân tích được tâm tư nguyện vọng của mọi người khi sử dụng thiết bị.",
      "Luôn hoạt động bình thường mà không cần tiêu thụ bất kì nguồn năng lượng nào.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng theo SGK: Thiết bị số cho phép lưu trữ lượng dữ liệu cực lớn trong các ổ đĩa hay thẻ nhớ nhỏ gọn, chi phí thấp, tìm kiếm tức thì. Các phương án B, C, D hoàn toàn phi thực tế.",
  },
  {
    id: "b01-q14",
    q: "Xét trường hợp thẻ Căn cước công dân gắn chip điện tử, mối quan hệ thông tin nào sau đây là đúng?",
    options: [
      "Chip điện tử là vật mang tin; dữ liệu cá nhân mã hoá bên trong chứa thông tin.",
      "Chip điện tử là thông tin; còn các con số ngày sinh in trên thẻ là vật mang tin.",
      "Toàn bộ thẻ và con chip đều là thông tin tinh thần của người sở hữu tấm thẻ đó.",
      "Các thông tin lưu trong chip luôn biến đổi ngẫu nhiên mỗi khi đọc bằng máy quét.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Con chip đóng vai trò là vật mang tin vật lí. Các dãy bit mã hoá lưu trong chip là dữ liệu. Khi máy quét giải mã ra họ tên, số định danh, ngày sinh thì đó chính là thông tin có ý nghĩa.",
  },
  {
    id: "b01-q15",
    q: "Ưu điểm của thiết bị số trong phương diện xử lí và truyền thông tin được thể hiện qua đặc điểm nào?",
    options: [
      "Tốc độ tính toán siêu nhanh, hoạt động ổn định và truyền tin tức thời toàn cầu.",
      "Máy móc luôn đưa ra phán đoán cảm tính tốt hơn nhiều so với đạo đức con người.",
      "Không bao giờ xảy ra lỗi kĩ thuật hay gián đoạn đường truyền trong mọi tình huống.",
      "Giúp xóa bỏ hoàn toàn nhu cầu giao tiếp trực tiếp giữa người với người ngoài đời.",
    ],
    answer: 0,
    explain:
      "Đáp án A đúng: Máy tính thực hiện hàng tỉ phép tính mỗi giây, hoạt động liên tục không biết mệt mỏi và truyền dữ liệu qua Internet khắp hành tinh với tốc độ ánh sáng.",
  },
];
