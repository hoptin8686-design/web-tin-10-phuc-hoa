// Dữ liệu Ma trận, Bản đặc tả và Đề kiểm tra Giữa học kỳ 1 môn Tin học lớp 10
// Theo chuẩn cấu trúc tập huấn Sở GD&ĐT Cao Bằng & THPT Phục Hòa
// Bộ sách Kết nối tri thức với cuộc sống

export interface MatrixRow {
  stt: number;
  topic: string;
  unit: string;
  mcqKnow: number;
  mcqUnderstand: number;
  mcqApply: number;
  tfKnow: number;
  tfUnderstand: number;
  tfApply: number;
  essayKnow: number;
  essayUnderstand: number;
  essayApply: number;
  totalPoints: number;
  percentage: number;
}

export interface SpecItem {
  stt: number;
  topic: string;
  unit: string;
  standards: {
    level: "Nhận biết" | "Thông hiểu" | "Vận dụng";
    content: string[];
    questionRef: string;
  }[];
}

export interface MidtermExamQuestionMCQ {
  id: string;
  q: string;
  options: [string, string, string, string];
  answer: number; // 0, 1, 2, 3
  explain: string;
  level: "Nhận biết" | "Thông hiểu" | "Vận dụng";
  topicCode: string;
}

export interface MidtermExamTFItem {
  id: string;
  scenario: string;
  topicCode: string;
  statements: {
    id: string;
    text: string;
    answer: boolean;
    explain: string;
    level: "Nhận biết" | "Thông hiểu" | "Vận dụng";
  }[];
}

export interface MidtermExamEssayItem {
  id: string;
  q: string;
  points: number;
  criteria: {
    detail: string;
    score: number;
  }[];
  sampleAnswer: string;
}

// 1. KHUNG MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KỲ 1 - TIN HỌC 10
export const MIDTERM_MATRIX = {
  title: "KHUNG MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KÌ 1 — MÔN TIN HỌC LỚP 10",
  timeMinutes: 45,
  description: "Cấu trúc đề kiểm tra đánh giá định kì theo chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống)",
  table: [
    {
      stt: 1,
      topic: "Chủ đề 1. Máy tính và xã hội tri thức",
      unit: "1.1. Dữ liệu, thông tin và xử lý thông tin (Bài 1, 3, 4, 5, 6)",
      mcqKnow: 1,
      mcqUnderstand: 1,
      mcqApply: 0,
      tfKnow: 0,
      tfUnderstand: 0,
      tfApply: 0,
      essayKnow: 1,
      essayUnderstand: 0,
      essayApply: 0,
      totalPoints: 1.5,
      percentage: 15,
    },
    {
      stt: 2,
      topic: "Chủ đề 1. Máy tính và xã hội tri thức",
      unit: "1.2. Vai trò của thiết bị thông minh & Tin học đối với xã hội (Bài 2, 7)",
      mcqKnow: 1,
      mcqUnderstand: 2,
      mcqApply: 0,
      tfKnow: 2,
      tfUnderstand: 1,
      tfApply: 1,
      essayKnow: 0,
      essayUnderstand: 0,
      essayApply: 0,
      totalPoints: 2.0,
      percentage: 20,
    },
    {
      stt: 3,
      topic: "Chủ đề 2. Mạng máy tính và Internet",
      unit: "2.1. Mạng máy tính, Internet, IoT, Điện toán đám mây (Bài 8, 10)",
      mcqKnow: 3,
      mcqUnderstand: 1,
      mcqApply: 0,
      tfKnow: 0,
      tfUnderstand: 0,
      tfApply: 0,
      essayKnow: 0,
      essayUnderstand: 0,
      essayApply: 0,
      totalPoints: 1.0,
      percentage: 10,
    },
    {
      stt: 4,
      topic: "Chủ đề 2. Mạng máy tính và Internet",
      unit: "2.2. Dịch vụ mạng, An toàn thông tin & Phòng chống phần mềm độc hại (Bài 9, 11)",
      mcqKnow: 1,
      mcqUnderstand: 1,
      mcqApply: 0,
      tfKnow: 2,
      tfUnderstand: 1,
      tfApply: 1,
      essayKnow: 0,
      essayUnderstand: 1,
      essayApply: 0,
      totalPoints: 2.5,
      percentage: 25,
    },
    {
      stt: 5,
      topic: "Chủ đề 3. Đạo đức, pháp luật và văn hóa trong môi trường số",
      unit: "3.1. Pháp luật trong môi trường số & Bản quyền tác giả (Bài 11, 12)",
      mcqKnow: 1,
      mcqUnderstand: 0,
      mcqApply: 0,
      tfKnow: 2,
      tfUnderstand: 1,
      tfApply: 1,
      essayKnow: 0,
      essayUnderstand: 0,
      essayApply: 1,
      totalPoints: 2.0,
      percentage: 20,
    },
    {
      stt: 6,
      topic: "Chủ đề 3. Đạo đức, pháp luật và văn hóa trong môi trường số",
      unit: "3.2. Ứng xử trên môi trường số & Trách nhiệm chia sẻ thông tin (Bài 9, 11)",
      mcqKnow: 0,
      mcqUnderstand: 1,
      mcqApply: 0,
      tfKnow: 2,
      tfUnderstand: 1,
      tfApply: 1,
      essayKnow: 0,
      essayUnderstand: 0,
      essayApply: 0,
      totalPoints: 1.0,
      percentage: 10,
    },
  ],
  totals: {
    mcqCount: 12,
    mcqPoints: 3.0,
    tfCount: 4, // 4 câu = 16 ý
    tfPoints: 4.0,
    essayCount: 3,
    essayPoints: 3.0,
    totalPoints: 10.0,
    ratioKnow: 40,
    ratioUnderstand: 30,
    ratioApply: 30,
  },
};

// 2. BẢNG ĐẶC TẢ ĐỀ KIỂM TRA
export const MIDTERM_SPECIFICATION: SpecItem[] = [
  {
    stt: 1,
    topic: "Chủ đề 1. Máy tính và xã hội tri thức",
    unit: "Dữ liệu, thông tin và các đơn vị đo lưu trữ",
    standards: [
      {
        level: "Nhận biết",
        content: ["Nêu được sự ưu việt của việc lưu trữ dựa trên các thiết bị số."],
        questionRef: "Câu 1 (TN)",
      },
      {
        level: "Thông hiểu",
        content: [
          "Phân biệt được thông tin và dữ liệu.",
          "Chuyển đổi được giữa các đơn vị đo dung lượng lưu trữ: B, KB, MB, GB, TB...",
        ],
        questionRef: "Câu 2 (TN)",
      },
      {
        level: "Nhận biết",
        content: ["Nêu được tên các đơn vị đo dung lượng lưu trữ dữ liệu theo thứ tự."],
        questionRef: "Câu 3 (TL)",
      },
    ],
  },
  {
    stt: 2,
    topic: "Chủ đề 1. Máy tính và xã hội tri thức",
    unit: "Vai trò của thiết bị thông minh và tin học trong đời sống",
    standards: [
      {
        level: "Nhận biết",
        content: ["Nhận biết được đâu là thiết bị thông minh trong thực tế."],
        questionRef: "Câu 3 (TN)",
      },
      {
        level: "Thông hiểu",
        content: [
          "Giải thích được ảnh hưởng của Internet, máy tìm kiếm, AI đến sự thay đổi của loài người.",
          "Hiểu được các thông số cấu hình phần cứng cơ bản của máy tính (tốc độ CPU, RAM, ổ cứng).",
        ],
        questionRef: "Câu 4, 5 (TN)",
      },
      {
        level: "Vận dụng",
        content: [
          "Đánh giá và phản biện được các nhận định về thiết bị thông minh và khả năng tự động xử lý thông tin.",
        ],
        questionRef: "Câu 1 (Đ/S)",
      },
    ],
  },
  {
    stt: 3,
    topic: "Chủ đề 2. Mạng máy tính và Internet",
    unit: "Khái niệm mạng, Internet, IoT và Điện toán đám mây",
    standards: [
      {
        level: "Nhận biết",
        content: [
          "Nêu được đối tượng có thể kết nối vào Internet vạn vật (IoT).",
          "Nêu được các thành phần chính của dịch vụ đám mây (Hạ tầng, Nền tảng, Phần mềm).",
          "Nhận biết được công cụ bảo vệ mạng máy tính (Tường lửa - Firewall).",
        ],
        questionRef: "Câu 6, 7, 8 (TN)",
      },
      {
        level: "Thông hiểu",
        content: ["Hiểu được khái niệm và lợi ích của nguồn học liệu mở trên Internet."],
        questionRef: "Câu 9 (TN)",
      },
    ],
  },
  {
    stt: 4,
    topic: "Chủ đề 2. Mạng máy tính và Internet",
    unit: "Dịch vụ mạng, an toàn mạng và phòng chống phần mềm độc hại",
    standards: [
      {
        level: "Nhận biết",
        content: ["Phân biệt được phạm vi và bán kính của các loại mạng (LAN, WAN, Internet)."],
        questionRef: "Câu 10 (TN)",
      },
      {
        level: "Thông hiểu",
        content: ["Nắm được quy tắc đặt mật khẩu mạnh bảo vệ tài khoản cá nhân."],
        questionRef: "Câu 11 (TN)",
      },
      {
        level: "Vận dụng",
        content: [
          "Nhận biết và xử lý các nguy cơ mất an toàn dữ liệu cá nhân, lừa đảo trực tuyến và phần mềm độc hại.",
        ],
        questionRef: "Câu 2 (Đ/S), Câu 2 (TL)",
      },
    ],
  },
  {
    stt: 5,
    topic: "Chủ đề 3. Đạo đức, pháp luật và văn hóa trong môi trường số",
    unit: "Pháp luật trong môi trường số, bản quyền và ứng xử mạng",
    standards: [
      {
        level: "Nhận biết",
        content: ["Nhận biết các hành động tuân thủ hoặc vi phạm quyền tác giả đối với sản phẩm số."],
        questionRef: "Câu 12 (TN)",
      },
      {
        level: "Thông hiểu",
        content: ["Hiểu được quyền sở hữu trí tuệ, bản quyền phần mềm và giới hạn sử dụng tác phẩm đã công bố."],
        questionRef: "Câu 3 (Đ/S), Câu 1 (TL)",
      },
      {
        level: "Vận dụng",
        content: ["Đánh giá hành vi ứng xử văn hóa, trách nhiệm phát ngôn và chia sẻ thông tin trên không gian mạng."],
        questionRef: "Câu 4 (Đ/S)",
      },
    ],
  },
];

// 3. ĐỀ KIỂM TRA CHUẨN GIỮA HỌC KỲ 1 (TẬP HUẤN SỞ GD&ĐT CAO BẰNG)
export const OFFICIAL_MIDTERM_EXAM = {
  examCode: "ĐỀ 01 - CHUẨN MA TRẬN",
  school: "Trường THPT Phục Hòa - Tỉnh Cao Bằng",
  year: "Năm học 2026 - 2027",
  subject: "Tin học 10 (Kết nối tri thức)",
  duration: 45, // 45 phút

  // PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (3.0 ĐIỂM)
  part1_mcq: [
    {
      id: "gk1-mcq-01",
      q: "Các thiết bị số hiện đại ngày nay có khả năng lưu trữ dữ liệu ở mức độ nào sau đây?",
      options: [
        "Mức độ khổng lồ nhờ các thiết bị lưu trữ từ tính, thể rắn và điện toán đám mây.",
        "Mức độ nhỏ bé chỉ giới hạn trong một vài trang văn bản đơn giản của người dùng.",
        "Mức độ trung bình tương đương với dung lượng của một cuốn sổ tay học sinh.",
        "Mức độ rất nhỏ do bộ nhớ của các vi xử lý máy tính không cho phép lưu trữ lâu dài.",
      ],
      answer: 0,
      explain: "Các thiết bị số hiện nay (ổ cứng SSD, thẻ nhớ, đám mây) có khả năng lưu trữ lượng thông tin khổng lồ lên tới Terabyte và Petabyte.",
      level: "Nhận biết",
      topicCode: "Chủ đề 1",
    },
    {
      id: "gk1-mcq-02",
      q: "Phương án nào sau đây nêu đúng số lượng bức ảnh có thể được lưu trữ trong một thẻ nhớ 16 GB, biết rằng mỗi bức ảnh có dung lượng trung bình là 2 MB?",
      options: [
        "8192 bức ảnh (tính theo công thức: 16 × 1024 MB / 2 MB = 8192 ảnh).",
        "1024 bức ảnh (tính theo phép chia dung lượng ước lượng thông thường).",
        "1000 bức ảnh (tính theo hệ số thập phân làm tròn chẵn của máy tính).",
        "512 bức ảnh (tính theo dung lượng tối thiểu của các thiết bị số cũ).",
      ],
      answer: 0,
      explain: "Đổi 16 GB = 16 × 1024 MB = 16 384 MB. Số ảnh = 16 384 / 2 = 8192 bức ảnh.",
      level: "Thông hiểu",
      topicCode: "Chủ đề 1",
    },
    {
      id: "gk1-mcq-03",
      q: "Thiết bị nào sau đây được coi là một thiết bị thông minh trong đời sống hiện nay?",
      options: [
        "Điện thoại thông minh (Smartphone) có khả năng kết nối mạng và xử lý dữ liệu đa năng.",
        "Đồng hồ lịch vạn niên cơ học chỉ hiển thị ngày giờ cố định theo bánh răng.",
        "Máy tính bỏ túi học sinh thông thường chỉ thực hiện các phép tính số học đơn giản.",
        "Máy giặt cơ học truyền thống chỉ điều khiển bằng các nút vặn hẹn giờ cơ điện.",
      ],
      answer: 0,
      explain: "Điện thoại thông minh có hệ điều hành, khả năng kết nối mạng, cài ứng dụng và tự động xử lý thông tin đa dạng.",
      level: "Nhận biết",
      topicCode: "Chủ đề 1",
    },
    {
      id: "gk1-mcq-04",
      q: "Sự phát triển vượt bậc của Internet, công cụ tìm kiếm, mạng xã hội và trí tuệ nhân tạo (AI) đã tác động làm thay đổi sâu sắc nhất yếu tố nào sau đây?",
      options: [
        "Đời sống, phương thức làm việc, học tập và nhận thức của toàn thể loài người.",
        "Môi trường tự nhiên và khí hậu toàn cầu của các đại dương trên thế giới.",
        "Khối lượng vật chất và quỹ đạo chuyển động của Trái Đất trong hệ Mặt Trời.",
        "Thành phần hóa học của bầu khí quyển và cấu trúc địa chất của các lục địa.",
      ],
      answer: 0,
      explain: "Công nghệ thông tin và AI làm thay đổi căn bản cách thức sinh hoạt, học tập, giao tiếp và phương thức sản xuất của nhân loại.",
      level: "Thông hiểu",
      topicCode: "Chủ đề 1",
    },
    {
      id: "gk1-mcq-05",
      q: "Thông tin nào sau đây của máy tính có thể nhận biết được trực tiếp từ bảng cấu hình hệ thống (System Properties)?",
      options: [
        "Tốc độ xung nhịp của bộ vi xử lý CPU, dung lượng bộ nhớ RAM và tên hệ điều hành.",
        "Giá tiền mua máy tính ban đầu và thời hạn bảo hành của cửa hàng phân phối.",
        "Năm sản xuất chính xác của từng con ốc vít và vỏ bọc kim loại bên ngoài thân máy.",
        "Địa chỉ nhà riêng của người lắp ráp thiết bị tại nhà máy sản xuất linh kiện.",
      ],
      answer: 0,
      explain: "Cấu hình máy tính hiển thị các thông số kĩ thuật: Vi xử lý CPU, dung lượng RAM, phiên bản hệ điều hành...",
      level: "Thông hiểu",
      topicCode: "Chủ đề 1",
    },
    {
      id: "gk1-mcq-06",
      q: "Trong mạng lưới Internet vạn vật (IoT - Internet of Things), đối tượng nào sau đây có thể được gắn cảm biến để kết nối và truyền dữ liệu qua Internet?",
      options: [
        "Hầu như mọi đồ vật, thiết bị máy móc, cảm biến đo đạc môi trường và phương tiện giao thông.",
        "Chỉ có duy nhất máy tính để bàn truyền thống và các máy chủ lớn đặt trong phòng lạnh.",
        "Chỉ có các loài động vật hoang dã sinh sống trong các khu rừng rậm nhiệt đới.",
        "Chỉ có các văn bản giấy và tài liệu in ấn được bảo quản trong các thư viện quốc gia.",
      ],
      answer: 0,
      explain: "IoT cho phép kết nối mọi vật thể (xe cộ, đồ gia dụng, camera, đèn đường, cảm biến nhiệt độ...) vào mạng Internet.",
      level: "Nhận biết",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-07",
      q: "Phương án nào sau đây nêu đúng ba mô hình dịch vụ cốt lõi của công nghệ Điện toán đám mây (Cloud Computing)?",
      options: [
        "Cơ sở hạ tầng (IaaS), Nền tảng (PaaS) và Phần mềm như một dịch vụ (SaaS).",
        "Bộ nhớ RAM, ổ đĩa cứng thể rắn SSD và nguồn điện dự phòng công suất cao.",
        "Dây cáp mạng cáp quang, bộ chuyển mạch Switch và thiết bị phát sóng vô tuyến Wi-Fi.",
        "Màn hình hiển thị, bàn phím cơ quang học và chuột máy tính cảm ứng không dây.",
      ],
      answer: 0,
      explain: "Ba mô hình chuẩn của Cloud: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service).",
      level: "Nhận biết",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-08",
      q: "Công cụ nào sau đây đóng vai trò kiểm soát, lọc dữ liệu và ngăn chặn các truy cập trái phép để bảo vệ mạng máy tính?",
      options: [
        "Bức tường lửa (Firewall) bảo vệ mạng bằng phần mềm hoặc thiết bị phần cứng chuyên dụng.",
        "Dây cáp mạng đồng xoắn đôi kết nối giữa máy tính cá nhân và cổng cắm trên tường.",
        "Phần mềm soạn thảo văn bản dùng để ghi chép các biên bản họp định kì của công ty.",
        "Máy in laser trắng đen kết nối qua cổng USB dùng để in tài liệu hợp đồng.",
      ],
      answer: 0,
      explain: "Tường lửa (Firewall) giám sát và kiểm soát lưu lượng mạng ra/vào dựa trên các quy tắc bảo mật thiết lập sẵn.",
      level: "Nhận biết",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-09",
      q: "Nguồn học liệu mở (Open Educational Resources - OER) trên Internet là loại tài nguyên học tập có đặc điểm nổi bật nào?",
      options: [
        "Cung cấp miễn phí hoặc có giấy phép mở, cho phép người dùng tự do truy cập, sử dụng và chia sẻ.",
        "Bắt buộc người học phải trả một khoản phí bản quyền rất lớn mới được quyền xem trang bìa.",
        "Chỉ cho phép tải về vào các ngày nghỉ lễ và tự động biến mất khỏi máy tính sau 24 giờ.",
        "Chỉ dành riêng cho các giáo sư đại học nghiên cứu chứ học sinh phổ thông không được phép truy cập.",
      ],
      answer: 0,
      explain: "Học liệu mở (OER) được cấp phép mở để công chúng tự do tiếp cận, tái sử dụng và chia sẻ phục vụ mục đích giáo dục phi thương mại.",
      level: "Thông hiểu",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-10",
      q: "Trong các loại mạng máy tính sau đây, mạng nào có phạm vi địa lý và bán kính kết nối lớn nhất?",
      options: [
        "Mạng toàn cầu Internet kết nối hàng tỉ thiết bị trên toàn thế giới.",
        "Mạng diện rộng WAN kết nối giữa các chi nhánh trong một quốc gia.",
        "Mạng đô thị MAN kết nối trong phạm vi một thành phố hoặc một tỉnh.",
        "Mạng cục bộ LAN kết nối trong phạm vi một phòng học hoặc một tòa nhà.",
      ],
      answer: 0,
      explain: "Mạng Internet là mạng của các mạng, bao phủ toàn cầu và có phạm vi lớn nhất.",
      level: "Nhận biết",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-11",
      q: "Để bảo vệ tài khoản cá nhân, một mật khẩu mạnh và an toàn NÊN tránh thành phần nào sau đây?",
      options: [
        "Các thông tin cá nhân dễ đoán như họ tên, ngày tháng năm sinh hoặc số điện thoại.",
        "Sự kết hợp giữa các chữ cái in hoa và chữ cái in thường ngẫu nhiên.",
        "Các chữ số từ 0 đến 9 xen kẽ không theo quy luật số thứ tự liên tiếp.",
        "Các kí tự đặc biệt an toàn như dấu chấm than (!), dấu thăng (#), dấu phần trăm (%).",
      ],
      answer: 0,
      explain: "Mật khẩu mạnh không được chứa thông tin cá nhân dễ đoán (tên, ngày sinh, sđt) và cần có độ dài từ 8 kí tự gồm chữ hoa, thường, số, kí tự đặc biệt.",
      level: "Thông hiểu",
      topicCode: "Chủ đề 2",
    },
    {
      id: "gk1-mcq-12",
      q: "Hành động nào sau đây là hành vi hợp pháp và KHÔNG vi phạm quyền tác giả đối với tác phẩm?",
      options: [
        "Trích dẫn một đoạn văn ngắn từ sách có dẫn rõ tên tác giả, tên tác phẩm và nguồn trích dẫn.",
        "Tự ý tải một bức tranh vẽ của họa sĩ trên mạng về in lên áo thun để kinh doanh bán lấy tiền.",
        "Sao chép toàn bộ một cuốn sách giáo khoa rồi đem bán bản photocopy lại cho học sinh trong trường.",
        "Xóa bỏ tên tác giả thực sự trên một bài hát rồi ghi tên mình vào để dự thi tài năng âm nhạc.",
      ],
      answer: 0,
      explain: "Theo Luật Sở hữu trí tuệ, việc trích dẫn hợp lý tác phẩm đã công bố mà không làm sai ý tác giả và có nêu rõ nguồn gốc là không vi phạm bản quyền.",
      level: "Nhận biết",
      topicCode: "Chủ đề 3",
    },
  ],

  // PHẦN II: 4 CÂU ĐÚNG / SAI THEO NGỮ CẢNH (4.0 ĐIỂM - CHUẨN BỘ GD&ĐT)
  part2_tf: [
    {
      id: "gk1-tf-01",
      topicCode: "Chủ đề 1",
      scenario: "Trong buổi sinh hoạt Câu lạc bộ Khoa học - Kỹ thuật của Trường THPT Phục Hòa, bạn Lan và các bạn cùng thảo luận về các thiết bị trong đời sống gia đình nhằm phân loại đâu là thiết bị thông minh:",
      statements: [
        {
          id: "gk1-tf-01-a",
          text: "Robot hút bụi tự động có cảm biến nhận diện vật cản và tự vẽ bản đồ phòng là một thiết bị thông minh.",
          answer: true,
          explain: "Đúng. Robot hút bụi tự hành có cảm biến, vi xử lý và phần mềm tự động điều hướng nên là thiết bị thông minh.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-01-b",
          text: "Ấm đun nước siêu tốc tự ngắt điện khi nước sôi nhờ thanh rơ-le nhiệt lưỡng kim là một thiết bị thông minh.",
          answer: false,
          explain: "Sai. Cơ chế tự ngắt của ấm siêu tốc thuần túy là vật lý giãn nở cơ học nhiệt, không có quá trình xử lý thông tin hay vi xử lý số.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-01-c",
          text: "Mọi thiết bị điện tử có khả năng tiếp nhận, xử lý thông tin và tự chủ điều khiển hành vi ở mức độ nhất định đều là thiết bị thông minh.",
          answer: true,
          explain: "Đúng. Khả năng tương tác thông tin và hoạt động tự chủ là tiêu chí cốt lõi định nghĩa thiết bị thông minh.",
          level: "Thông hiểu",
        },
        {
          id: "gk1-tf-01-d",
          text: "Một chiếc ô tô đồ chơi trẻ em chỉ cần lắp thêm bộ điều khiển từ xa bằng sóng vô tuyến đơn giản là đã trở thành thiết bị thông minh.",
          answer: false,
          explain: "Sai. Đồ chơi điều khiển từ xa đơn giản phụ thuộc 100% vào thao tác của con người, không có thuật toán tự chủ xử lý tình huống.",
          level: "Vận dụng",
        },
      ],
    },
    {
      id: "gk1-tf-02",
      topicCode: "Chủ đề 2",
      scenario: "Hưởng ứng Ngày Chuyển đổi số Quốc gia (10/10), Đoàn trường THPT Phục Hòa tổ chức buổi tọa đàm về chủ đề 'Học sinh thế hệ Gen Z an toàn trên không gian mạng'. Các đoàn viên đưa ra một số nhận định:",
      statements: [
        {
          id: "gk1-tf-02-a",
          text: "Học sinh nếu để lộ công khai thông tin cá nhân (CCCD, địa chỉ, số điện thoại, mật khẩu) có thể bị kẻ xấu lợi dụng để lừa đảo hoặc tống tiền.",
          answer: true,
          explain: "Đúng. Lộ dữ liệu cá nhân là nguyên nhân hàng đầu dẫn đến các vụ mạo danh lừa đảo viễn thông và đánh cắp tài khoản số.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-02-b",
          text: "Ở bất kì nơi đâu và bất cứ thời điểm nào, người dùng cũng luôn có thể kết nối xem video chất lượng cao mà không bị phụ thuộc vào hạ tầng mạng.",
          answer: false,
          explain: "Sai. Việc truy cập Internet phụ thuộc hoàn toàn vào vùng phủ sóng, băng thông cáp quang/4G/5G và tình trạng của máy chủ cung cấp.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-02-c",
          text: "Mỗi tác động của Internet đối với cuộc sống của học sinh luôn tồn tại hai mặt song hành: cơ hội mở rộng tri thức và nguy cơ cám dỗ, rủi ro.",
          answer: true,
          explain: "Đúng. Internet mang lại kho học liệu vô tận nhưng cũng tiềm ẩn nguy cơ nghiện mạng, tin giả, bắt nạt trực tuyến và phần mềm độc hại.",
          level: "Thông hiểu",
        },
        {
          id: "gk1-tf-02-d",
          text: "Khi lướt web, nếu thấy địa chỉ trang web bắt đầu bằng giao thức http:// không có bảo mật SSL thì ta vẫn có thể yên tâm nhập thông tin thẻ ngân hàng.",
          answer: false,
          explain: "Sai. http:// không được mã hóa dữ liệu truyền tải, kẻ gian trên cùng đường truyền có thể dễ dàng nghe lén và đánh cắp thông tin; chỉ nhập thông tin nhạy cảm trên giao thức bảo mật https:// có chứng chỉ hợp lệ.",
          level: "Vận dụng",
        },
      ],
    },
    {
      id: "gk1-tf-03",
      topicCode: "Chủ đề 3",
      scenario: "Nhóm học sinh lớp 10 tham gia dự án tìm hiểu về Luật Sở hữu trí tuệ và Luật Công nghệ thông tin trong môi trường số:",
      statements: [
        {
          id: "gk1-tf-03-a",
          text: "Trong môi trường số, quyền tác giả bảo hộ quyền nhân thân và quyền tài sản của tác giả đối với tác phẩm số do mình trực tiếp sáng tạo ra.",
          answer: true,
          explain: "Đúng. Tác phẩm số (phần mềm, bài viết, bản nhạc, video, tranh vẽ số) đều được Luật Sở hữu trí tuệ bảo vệ quyền tác giả đầy đủ.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-03-b",
          text: "Luật Sở hữu trí tuệ chỉ bảo vệ các tác phẩm viết tay trên giấy chứ hoàn toàn không bảo hộ các sản phẩm phần mềm máy tính hay tệp tin số.",
          answer: false,
          explain: "Sai. Khoản 1 Điều 14 Luật Sở hữu trí tuệ quy định rõ ràng chương trình máy tính, dữ liệu số là một loại hình tác phẩm được bảo hộ quyền tác giả.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-03-c",
          text: "Bản quyền phần mềm nghiêm cấm các hành vi bẻ khóa (crack), sao chép và phân phối trái phép khi chưa được sự cho phép của chủ sở hữu.",
          answer: true,
          explain: "Đúng. Việc bẻ khóa hoặc phân phối phần mềm vi phạm quyền độc quyền của tác giả và có thể bị xử lý vi phạm bản quyền theo pháp luật.",
          level: "Thông hiểu",
        },
        {
          id: "gk1-tf-03-d",
          text: "Một người tự dịch nguyên văn một bài báo khoa học nước ngoài sang tiếng Việt rồi đăng lên trang web cá nhân và ghi mình là tác giả duy nhất là hoàn toàn hợp pháp.",
          answer: false,
          explain: "Sai. Hành vi dịch tác phẩm mà không xin phép và tự nhận mình là tác giả đã xâm phạm nghiêm trọng quyền đứng tên và quyền làm tác phẩm phái sinh theo Điều 28 Luật SHTT.",
          level: "Vận dụng",
        },
      ],
    },
    {
      id: "gk1-tf-04",
      topicCode: "Chủ đề 3",
      scenario: "Văn hóa ứng xử trên không gian mạng là thước đo nhân cách của công dân số. Thầy giáo đưa ra các tình huống thực tế để học sinh cùng nhận định:",
      statements: [
        {
          id: "gk1-tf-04-a",
          text: "Hành vi đăng tải, lan truyền thông tin sai sự thật, xúc phạm danh dự nhân phẩm của người khác trên mạng xã hội là hành vi vi phạm pháp luật.",
          answer: true,
          explain: "Đúng. Hành vi này vi phạm Luật An ninh mạng và Nghị định 15/2020/NĐ-CP, có thể bị xử phạt hành chính hoặc xử lý hình sự.",
          level: "Nhận biết",
        },
        {
          id: "gk1-tf-04-b",
          text: "Sử dụng thiết bị số và Internet quá nhiều vào ban đêm có thể gây hại cho thị lực, rối loạn giấc ngủ và giảm sút kết quả học tập.",
          answer: true,
          explain: "Đúng. Ánh sáng xanh và sự thiếu ngủ do lạm dụng thiết bị số ảnh hưởng tiêu cực trực tiếp đến sức khỏe thể chất và tinh thần học sinh.",
          level: "Thông hiểu",
        },
        {
          id: "gk1-tf-04-c",
          text: "Khi công nghệ ngày càng hiện đại và thông minh hơn, mọi rủi ro về lừa đảo và phần mềm độc hại sẽ tự động biến mất mà người dùng không cần cảnh giác.",
          answer: false,
          explain: "Sai. Công nghệ càng phát triển thì các thủ đoạn lừa đảo và phần mềm độc hại (mã độc AI, deepfake) càng tinh vi hơn, đòi hỏi con người luôn nâng cao nhận thức bảo mật.",
          level: "Thông hiểu",
        },
        {
          id: "gk1-tf-04-d",
          text: "Nhấp chuột vào một liên kết lạ chứa mã độc trong email có thể khiến thiết bị bị hacker chiếm quyền kiểm soát từ xa và đánh cắp toàn bộ mật khẩu.",
          answer: true,
          explain: "Đúng. Đây là kĩ thuật tấn công phi kĩ thuật (phishing) và phát tán mã độc gián điệp (Trojan/Spyware) rất phổ biến hiện nay.",
          level: "Vận dụng",
        },
      ],
    },
  ],

  // PHẦN III: 3 CÂU HỎI TỰ LUẬN (3.0 ĐIỂM)
  part3_essay: [
    {
      id: "gk1-es-01",
      q: "Bạn An mượn một cuốn sách tham khảo Tin học của bạn cùng lớp rồi đem đi photocopy một bản để làm tài liệu học tập cá nhân. Theo em, hành động photocopy đó của An có vi phạm quyền tác giả hay không? Hãy giải thích rõ căn cứ pháp lý.",
      points: 1.0,
      criteria: [
        { detail: "Khẳng định việc photo 01 bản để học tập cá nhân KHÔNG vi phạm quyền tác giả.", score: 0.25 },
        { detail: "Nêu đúng căn cứ: Thuộc trường hợp giới hạn quyền tác giả (sao chép 01 bản nhằm mục đích nghiên cứu, học tập cá nhân theo Luật SHTT).", score: 0.25 },
        { detail: "Giải thích rõ: Việc này không nhằm mục đích thương mại và không làm phương hại đến việc khai thác bình thường của tác phẩm.", score: 0.25 },
        { detail: "Mở rộng: Nếu An photo nhiều bản để bán lại cho các bạn khác thì sẽ vi phạm pháp luật và bị xử phạt hành chính.", score: 0.25 },
      ],
      sampleAnswer:
        "1. Kết luận: Hành động của bạn An KHÔNG vi phạm quyền tác giả.\n\n2. Căn cứ giải thích:\n- Căn cứ theo Điều 25 Luật Sở hữu trí tuệ Việt Nam, việc tự sao chép một bản tác phẩm đã công bố nhằm mục đích nghiên cứu khoa học, học tập cá nhân của bản thân thuộc các trường hợp sử dụng tác phẩm không phải xin phép và không phải trả tiền nhuận bút, thù lao.\n- Do An chỉ photo duy nhất 01 bản để phục vụ việc học tập của riêng mình, không mang tính chất kinh doanh kiếm lời nên hành vi này là hợp pháp.\n- Tuy nhiên, nếu An photocopy nhiều bản để bán lại cho các bạn khác nhằm mục đích thương mại thì hành vi đó sẽ vi phạm bản quyền và bị xử phạt theo quy định của pháp luật.",
    },
    {
      id: "gk1-es-02",
      q: "Nếu một số thông tin cá nhân quan trọng của em (như: họ và tên, số CCCD, địa chỉ nhà riêng, email và số điện thoại) bị kẻ xấu thu thập được trên mạng, em và gia đình có thể phải đối mặt với những nguy cơ gì? Nêu ít nhất 3 biện pháp phòng tránh.",
      points: 1.0,
      criteria: [
        { detail: "Nêu được các nguy cơ: Bị gửi thư rác, tin nhắn lừa đảo, giả mạo người thân/công an tống tiền, vay nợ tín dụng đen...", score: 0.5 },
        { detail: "Nêu được ít nhất 3 biện pháp phòng tránh thiết thực, đúng đắn.", score: 0.5 },
      ],
      sampleAnswer:
        "1. Các nguy cơ em và gia đình có thể gặp phải:\n- Bị nhận liên tục các tin nhắn, cuộc gọi rác và email lừa đảo trúng thưởng, đe dọa.\n- Kẻ xấu có thể mạo danh công an, tòa án hoặc nhân viên ngân hàng để gọi điện đe dọa, tống tiền hoặc thao túng tâm lý chiếm đoạt tài sản.\n- Bị kẻ xấu lợi dụng ảnh chụp CCCD và số điện thoại để đăng ký mở tài khoản ngân hàng ảo hoặc vay tiền qua các app tín dụng đen, gây rắc rối pháp lý.\n- Bị kẻ xấu xâm nhập, đổi mật khẩu và chiếm đoạt các tài khoản mạng xã hội (Facebook, Zalo, Gmail) rồi nhắn tin vay mượn tiền bạn bè, người thân.\n\n2. Ba biện pháp phòng tránh an toàn:\n- Không chia sẻ công khai số CCCD, số điện thoại, địa chỉ nhà lên các bài đăng mạng xã hội công cộng.\n- Kích hoạt tính năng bảo mật xác thực hai bước (2FA) cho tất cả các tài khoản mạng xã hội và email cá nhân.\n- Đặt mật khẩu mạnh (trên 8 kí tự, gồm chữ hoa, thường, số và kí tự đặc biệt); tuyệt đối không nhấn vào các đường link lạ không rõ nguồn gốc.",
    },
    {
      id: "gk1-es-03",
      q: "Em hãy nêu tên viết tắt của bốn đơn vị đo dung lượng lưu trữ dữ liệu thông dụng trong khoa học máy tính theo thứ tự tăng dần từ bé đến lớn. Giữa hai đơn vị đo liền kề nhau có mối quan hệ tỉ lệ quy đổi là bao nhiêu?",
      points: 1.0,
      criteria: [
        { detail: "Nêu đúng tên viết tắt 4 đơn vị tăng dần (KB -> MB -> GB -> TB).", score: 0.5 },
        { detail: "Nêu đúng mối quan hệ quy đổi: Đơn vị sau gấp 1024 (2^10) lần đơn vị đứng liền trước nó.", score: 0.5 },
      ],
      sampleAnswer:
        "1. Bốn đơn vị đo dung lượng dữ liệu thông dụng theo thứ tự tăng dần:\n- KB (Kilobyte)\n- MB (Megabyte)\n- GB (Gigabyte)\n- TB (Terabyte)\n\n2. Mối quan hệ quy đổi giữa hai đơn vị đo liền kề:\n- Trong khoa học Tin học, hệ đo lường dữ liệu máy tính sử dụng lũy thừa của 2. Đơn vị đứng sau gấp đúng 1024 (tức 2^10) lần đơn vị đo đứng liền trước nó.\n- Cụ thể:\n  + 1 KB = 1024 Bytes\n  + 1 MB = 1024 KB\n  + 1 GB = 1024 MB\n  + 1 TB = 1024 GB",
    },
  ],
};
