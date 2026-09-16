import type { Question } from "@/lib/types";

export type MockExam = {
  id: string;
  title: string;
  badge: string;
  durationMinutes: number;
  description: string;
  questions: Question[];
};

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-giua-ki-1",
    title: "Đề Ôn tập Kiểm tra Giữa Kì I — Tin học 10",
    badge: "Học kì 1 · 45 Phút",
    durationMinutes: 45,
    description:
      "Đề ôn tập giữa kì bám sát kế hoạch dạy học Trường THPT Phục Hòa: Chủ đề 1 (Máy tính và Xã hội tri thức), Chủ đề 2 (Mạng máy tính và Internet), Chủ đề 3 (Đạo đức số).",
    questions: [
      {
        id: "gk1-q01",
        q: "Dữ liệu đưa vào máy tính xử lí được gọi là gì?",
        options: [
          "Là các tín hiệu thô được đưa vào máy tính để nhận biết và xử lí.",
          "Là những ý nghĩa trừu tượng mang lại hiểu biết trọn vẹn cho con người.",
          "Là công cụ phần cứng dùng để truyền tải các tập tin qua môi trường mạng.",
          "Là các quy luật được đúc kết từ thực tiễn để phục vụ việc ra quyết định.",
        ],
        answer: 0,
        explain: "Dữ liệu là các yếu tố thể hiện (số, chữ, hình ảnh, âm thanh) đã đưa vào máy tính.",
      },
      {
        id: "gk1-q02",
        q: "Trong các đơn vị đo lượng dữ liệu, 1 Megabyte (MB) bằng bao nhiêu Kilobyte (KB)?",
        options: [
          "Có giá trị bằng 1 024 KB theo bội số nhị phân trong khoa học máy tính.",
          "Có giá trị bằng 1 000 KB theo quy ước chuẩn thập phân thông thường ngoài đời.",
          "Có giá trị bằng 2 048 KB theo cách tính nhân đôi dung lượng lưu trữ.",
          "Có giá trị bằng 512 KB theo quy ước phân chia dung lượng của các đĩa cứng.",
        ],
        answer: 0,
        explain: "1 MB = 2¹⁰ KB = 1 024 KB.",
      },
      {
        id: "gk1-q03",
        q: "Thiết bị nào sau đây thuộc nhóm thiết bị thông minh?",
        options: [
          "Điện thoại thông minh (Smartphone), đồng hồ thông minh (Smartwatch).",
          "Nồi cơm điện cơ thông thường, bóng đèn dây tóc phát sáng truyền thống.",
          "Quạt bàn chạy điện cơ học 3 cấp tốc độ gió sử dụng phím bấm cơ học.",
          "Bàn tính gảy bằng gỗ cổ truyền của các thương nhân thời xa xưa.",
        ],
        answer: 0,
        explain: "Thiết bị thông minh có bộ vi xử lí, có khả năng kết nối mạng và xử lí thông tin tự động.",
      },
      {
        id: "gk1-q04",
        q: "Mạng máy tính mang lại lợi ích cơ bản nhất nào cho người dùng?",
        options: [
          "Cho phép chia sẻ tài nguyên dữ liệu và phần cứng giữa các máy tính.",
          "Làm cho các thiết bị phần cứng trong mạng không bao giờ bị hỏng hóc.",
          "Tự động giải quyết mọi bài toán thi cử mà học sinh không cần học bài.",
          "Giúp máy tính hoạt động bình thường mà không cần bất kì nguồn điện nào.",
        ],
        answer: 0,
        explain: "Lợi ích cốt lõi của mạng là chia sẻ tài nguyên (dữ liệu, phần mềm, thiết bị in ấn...).",
      },
      {
        id: "gk1-q05",
        q: "Hành vi nào sau đây là vi phạm đạo đức và pháp luật trên không gian mạng?",
        options: [
          "Tự ý phát tán hình ảnh riêng tư hoặc thông tin cá nhân của người khác.",
          "Tham gia vào các diễn đàn học tập trực tuyến để trao đổi kiến thức SGK.",
          "Sử dụng phần mềm mã nguồn mở miễn phí phục vụ việc tự học tại nhà riêng.",
          "Gửi thư điện tử xin phép thầy cô giáo cho nghỉ học do bị ốm đột xuất.",
        ],
        answer: 0,
        explain: "Phát tán trái phép thông tin cá nhân là hành vi vi phạm quyền riêng tư và pháp luật an ninh mạng.",
      },
      {
        id: "gk1-q06",
        q: "Để bảo vệ tài khoản cá nhân khi sử dụng Internet, học sinh nên làm gì?",
        options: [
          "Đặt mật khẩu mạnh gồm chữ hoa, chữ thường, số, kí tự đặc biệt và bảo mật.",
          "Dùng ngày sinh nhật của mình làm mật khẩu để cho dễ nhớ và không bị quên.",
          "Chia sẻ công khai mật khẩu tài khoản cho tất cả các bạn trong lớp cùng dùng.",
          "Bấm lưu mật khẩu đăng nhập tại các máy tính công cộng ở quán dịch vụ Internet.",
        ],
        answer: 0,
        explain: "Mật khẩu mạnh và bảo mật giúp ngăn chặn rủi ro bị chiếm quyền điều khiển tài khoản.",
      },
    ],
  },
  {
    id: "de-cuoi-ki-1",
    title: "Đề Ôn tập Kiểm tra Cuối Kì I — Tin học 10",
    badge: "Học kì 1 · 45 Phút",
    durationMinutes: 45,
    description:
      "Đề ôn tập cuối học kì 1 bao quát toàn bộ nội dung: Xử lí thông tin, Mạng máy tính, Đạo đức số, Đồ họa vector Inkscape và bước đầu làm quen Lập trình Python.",
    questions: [
      {
        id: "ck1-q01",
        q: "Phần mềm Inkscape được sử dụng chủ yếu để làm gì?",
        options: [
          "Thiết kế đồ họa vector chuyên nghiệp với các hình khối và đường nét sắc.",
          "Soạn thảo văn bản và tính toán bảng tính điểm số tự động cho giáo viên.",
          "Quét virus và ngăn chặn các mã độc tấn công vào hệ điều hành máy tính.",
          "Biên dịch và thực thi các chương trình viết bằng ngôn ngữ lập trình C++.",
        ],
        answer: 0,
        explain: "Inkscape là phần mềm đồ họa vector mã nguồn mở phổ biến.",
      },
      {
        id: "ck1-q02",
        q: "Đặc điểm nổi bật nhất của hình ảnh đồ họa vector so với đồ họa bitmap là gì?",
        options: [
          "Khi phóng to thu nhỏ hình ảnh thì đường nét vẫn mịn màng và không vỡ nét.",
          "Được tạo thành từ một lưới gồm hàng triệu điểm ảnh có màu sắc cố định.",
          "Dung lượng tệp đồ họa vector luôn lớn gấp hàng trăm lần tệp ảnh chụp bitmap.",
          "Chỉ hiển thị được hai màu đen và trắng cơ bản trên màn hình máy tính.",
        ],
        answer: 0,
        explain: "Đồ họa vector dựa trên công thức toán học nên phóng to không bị vỡ hạt như bitmap.",
      },
      {
        id: "ck1-q03",
        q: "Trong ngôn ngữ Python, câu lệnh nào sau đây dùng để xuất thông tin ra màn hình?",
        options: [
          "Lệnh print() dùng để in dữ liệu hoặc thông điệp ra màn hình điều khiển.",
          "Lệnh input() dùng để tiếp nhận dữ liệu gõ vào từ bàn phím của người dùng.",
          "Lệnh int() dùng để chuyển đổi kiểu dữ liệu xâu kí tự sang kiểu số nguyên.",
          "Lệnh float() dùng để chuyển đổi dữ liệu sang kiểu số thực có dấu chấm động.",
        ],
        answer: 0,
        explain: "print() là lệnh xuất chuẩn trong Python.",
      },
      {
        id: "ck1-q04",
        q: "Biểu thức Python: 15 // 4 cho kết quả bằng bao nhiêu?",
        options: [
          "Cho kết quả là 3 do đây là phép toán chia lấy phần nguyên của hai số.",
          "Cho kết quả là 3.75 do đây là phép toán chia thực thông thường của toán học.",
          "Cho kết quả là 2 do đây là phép tính làm tròn xuống số chẵn gần nhất có thể.",
          "Cho kết quả là 4 do đây là phép toán chia lấy phần dư trong ngôn ngữ Python.",
        ],
        answer: 0,
        explain: "15 // 4 lấy phần nguyên = 3 (15 chia 4 được 3 dư 3).",
      },
      {
        id: "ck1-q05",
        q: "Tên biến nào sau đây là hợp lệ trong ngôn ngữ lập trình Python?",
        options: [
          "tong_diem (bắt đầu bằng chữ cái, có dấu gạch dưới và không chứa dấu cách).",
          "2tong (tên biến bắt đầu bằng chữ số là vi phạm quy tắc đặt tên của Python).",
          "tong-diem (chứa dấu gạch ngang là toán tử trừ nên sẽ gây lỗi cú pháp lệnh).",
          "for (trùng với từ khóa lệnh lặp for đã được Python dành riêng sử dụng).",
        ],
        answer: 0,
        explain: "Tên biến hợp lệ trong Python chỉ gồm chữ cái, chữ số, gạch dưới và không bắt đầu bằng số, không trùng từ khóa.",
      },
    ],
  },
];
