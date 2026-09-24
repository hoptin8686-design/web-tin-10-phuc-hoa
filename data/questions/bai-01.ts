import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-01: Thông tin và xử lí thông tin
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b01-q01",
    "q": "Trong khoa học Tin học, khái niệm 'dữ liệu' được hiểu chính xác nhất là gì?",
    "options": [
      "Là các tín hiệu thô được đưa vào máy tính để nhận biết và xử lí.",
      "Là những ý nghĩa trừu tượng mang lại hiểu biết trọn vẹn cho con người.",
      "Là công cụ phần cứng dùng để truyền tải các tập tin qua môi trường mạng.",
      "Là các quy luật được đúc kết từ thực tiễn để phục vụ việc ra quyết định."
    ],
    "answer": 0,
    "explain": "Dữ liệu là thông tin dưới dạng các con số, văn bản, hình ảnh, âm thanh đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được."
  },
  {
    "id": "b01-q02",
    "q": "Phát biểu nào sau đây nêu đúng bản chất của khái niệm 'thông tin'?",
    "options": [
      "Là ý nghĩa của dữ liệu mang lại cho con người sự hiểu biết về thế giới.",
      "Là các kí tự số nhị phân 0 và 1 được lưu trữ trên các phiến đĩa từ tính.",
      "Là thiết bị số làm nhiệm vụ chuyển tiếp các gói tin trong mạng máy tính.",
      "Là vật mang tin đóng vai trò lưu giữ nội dung bài học trong nhà trường."
    ],
    "answer": 0,
    "explain": "Thông tin là tất cả những gì mang lại cho chúng ta hiểu biết, gắn liền với quá trình nhận thức của con người."
  },
  {
    "id": "b01-q03",
    "q": "Khẳng định nào dưới đây là đúng về mối quan hệ giữa thông tin và dữ liệu?",
    "options": [
      "Cùng một thông tin có thể được thể hiện qua nhiều dạng dữ liệu khác nhau.",
      "Mỗi dữ liệu cụ thể chỉ biểu diễn duy nhất một thông tin trong mọi ngữ cảnh.",
      "Thông tin và dữ liệu hoàn toàn đồng nhất với nhau trong mọi trường hợp xử lí.",
      "Dữ liệu luôn có ý nghĩa trọn vẹn mà không cần trải qua quá trình nhận thức."
    ],
    "answer": 0,
    "explain": "Thông tin và dữ liệu có tính độc lập tương đối; cùng một thông tin có thể biểu diễn qua văn bản, hình ảnh hoặc âm thanh."
  },
  {
    "id": "b01-q04",
    "q": "Tính toàn vẹn của thông tin thể hiện ở đặc điểm nào sau đây?",
    "options": [
      "Dữ liệu không đầy đủ có thể dẫn đến việc thông tin bị sai lệch hoặc vô nghĩa.",
      "Mọi tập dữ liệu dù thiếu hụt vẫn luôn phản ánh đúng thông tin ban đầu gửi đi.",
      "Thông tin chỉ thay đổi khi thiết bị phần cứng của máy tính xảy ra hiện tượng hỏng.",
      "Việc mất mát dữ liệu không bao giờ ảnh hưởng đến tính chính xác của thông tin rút ra."
    ],
    "answer": 0,
    "explain": "Thông tin có tính toàn vẹn: khi dữ liệu bị thiếu hụt hoặc sai lệch, thông tin rút ra sẽ không còn chính xác."
  },
  {
    "id": "b01-q05",
    "q": "Đơn vị đo lượng thông tin cơ bản và nhỏ nhất trong máy tính là gì?",
    "options": [
      "Bit (chỉ nhận một trong hai giá trị là 0 hoặc 1).",
      "Byte (tập hợp gồm đúng 8 bit liên tiếp nhau).",
      "Kilobyte (tương đương với 1024 byte dữ liệu).",
      "Megabyte (tương đương với 1024 kilobyte dữ liệu)."
    ],
    "answer": 0,
    "explain": "Bit (viết tắt của Binary digit) là đơn vị nhỏ nhất đo lượng thông tin, mang giá trị 0 hoặc 1."
  },
  {
    "id": "b01-q06",
    "q": "Một Byte (B) bằng bao nhiêu bit trong hệ thống máy tính?",
    "options": [
      "8 bit liên tiếp ghép lại với nhau.",
      "4 bit liên tiếp ghép lại với nhau.",
      "16 bit liên tiếp ghép lại với nhau.",
      "32 bit liên tiếp ghép lại với nhau."
    ],
    "answer": 0,
    "explain": "1 Byte = 8 bit. Byte là đơn vị cơ bản để đo dung lượng bộ nhớ máy tính."
  },
  {
    "id": "b01-q07",
    "q": "Theo chuẩn đo lường của Tin học, 1 Gigabyte (GB) bằng bao nhiêu Megabyte (MB)?",
    "options": [
      "1024 Megabyte (MB) tính theo lũy thừa 2^10.",
      "1000 Megabyte (MB) tính theo lũy thừa 10^3.",
      "1048576 Megabyte (MB) tính theo lũy thừa 2^20.",
      "8192 Megabyte (MB) tính theo hệ số nhân bit."
    ],
    "answer": 0,
    "explain": "Trong Tin học, các bội số của Byte dùng lũy thừa của 2: 1 GB = 2^10 MB = 1024 MB."
  },
  {
    "id": "b01-q08",
    "q": "Vật mang tin (phương tiện truyền tin) được định nghĩa là gì?",
    "options": [
      "Phương tiện vật chất dùng để lưu trữ và truyền tải dữ liệu.",
      "Tập hợp các dòng lệnh lập trình điều khiển hoạt động máy tính.",
      "Chương trình phần mềm chuyên dụng để giải trí trên điện thoại.",
      "Ý nghĩa trừu tượng được con người rút ra sau khi đọc tài liệu."
    ],
    "answer": 0,
    "explain": "Vật mang tin là phương tiện vật chất lưu giữ và truyền tải thông tin, ví dụ: trang giấy, ổ cứng, USB, đĩa CD."
  },
  {
    "id": "b01-q09",
    "q": "Quy trình xử lí thông tin trong máy tính điện tử gồm các bước cơ bản theo thứ tự nào?",
    "options": [
      "Nhập dữ liệu vào -> Xử lí dữ liệu -> Xuất dữ liệu ra.",
      "Xử lí dữ liệu -> Nhập dữ liệu vào -> Lưu trữ dữ liệu.",
      "Xuất dữ liệu ra -> Nhập dữ liệu vào -> Xử lí tính toán.",
      "Lưu trữ dữ liệu -> Xuất kết quả -> Nhập lệnh bàn phím."
    ],
    "answer": 0,
    "explain": "Quy trình xử lí thông tin cơ bản: Thu nhận (Input) -> Xử lí (Process) -> Xuất kết quả (Output) và Lưu trữ (Storage)."
  },
  {
    "id": "b01-q10",
    "q": "Thiết bị nào sau đây thực hiện chức năng tiếp nhận dữ liệu đầu vào (Input) cho máy tính?",
    "options": [
      "Bàn phím, chuột máy tính và máy quét hình ảnh.",
      "Màn hình hiển thị, máy in màu và loa phát thanh.",
      "Bộ vi xử lý trung tâm (CPU) và bộ nhớ truy cập ngẫu nhiên (RAM).",
      "Ổ đĩa cứng HDD, ổ đĩa quang và thẻ nhớ Flash."
    ],
    "answer": 0,
    "explain": "Bàn phím, chuột, máy quét (scanner), micro, webcam là các thiết bị vào dùng để thu nhận dữ liệu."
  },
  {
    "id": "b01-q11",
    "q": "Thiết bị nào sau đây thực hiện chức năng xuất dữ liệu (Output) của máy tính?",
    "options": [
      "Màn hình, máy in và máy chiếu kỹ thuật số.",
      "Bàn phím cơ, chuột quang và bảng vẽ cảm ứng.",
      "Thanh nhớ RAM, bộ nhớ đệm Cache và chip ROM.",
      "Cổng USB, dây cáp mạng và bộ định tuyến Wi-Fi."
    ],
    "answer": 0,
    "explain": "Màn hình, máy in, loa, máy chiếu là các thiết bị ra giúp con người nhận được thông tin đã qua xử lí."
  },
  {
    "id": "b01-q12",
    "q": "Khái niệm 'Tri thức' (Knowledge) trong Tin học có mối quan hệ như thế nào với thông tin?",
    "options": [
      "Là sự hiểu biết sâu sắc được đúc kết từ nhiều thông tin qua trải nghiệm.",
      "Hoàn toàn giống hệt với dữ liệu thô chưa qua bất kì bước xử lí nào.",
      "Chỉ là các con số rời rạc được lưu trong bộ nhớ máy tính điện tử.",
      "Là phần cứng vi mạch điều khiển toàn bộ linh kiện của thiết bị thông minh."
    ],
    "answer": 0,
    "explain": "Dữ liệu -> Thông tin -> Tri thức. Tri thức là kết quả của việc liên kết, phân tích các thông tin để đúc kết thành quy luật và kinh nghiệm."
  },
  {
    "id": "b01-q13",
    "q": "Một thẻ nhớ điện thoại có dung lượng 64 GB thì tương đương với bao nhiêu Kilobyte (KB)?",
    "options": [
      "67 108 864 KB (tính bằng 64 × 1024 × 1024).",
      "64 000 000 KB (tính theo hệ số thập phân thông thường).",
      "65 536 KB (tính bằng 64 × 1024).",
      "524 288 KB (tính bằng 64 × 8192)."
    ],
    "answer": 0,
    "explain": "64 GB = 64 × 1024 MB = 65 536 MB = 65 536 × 1024 KB = 67 108 864 KB."
  },
  {
    "id": "b01-q14",
    "q": "Ưu điểm vượt trội của việc xử lí thông tin bằng máy tính so với con người là gì?",
    "options": [
      "Tốc độ xử lí cực nhanh, độ chính xác cao và khả năng lưu trữ khổng lồ.",
      "Có khả năng biểu cảm cảm xúc phong phú và đồng cảm với đồng loại.",
      "Tự đặt ra mục tiêu sống và sáng tạo ra các giá trị nhân văn mới.",
      "Có khả năng thích ứng linh hoạt trong mọi tình huống đạo đức khó khăn."
    ],
    "answer": 0,
    "explain": "Máy tính vượt trội ở tốc độ tính toán, sự bền bỉ, tính chính xác và dung lượng lưu trữ, nhưng không có cảm xúc hay ý thức như con người."
  },
  {
    "id": "b01-q15",
    "q": "Hạn chế lớn nhất của máy tính điện tử trong việc xử lí thông tin là gì?",
    "options": [
      "Không thể tự ý thức và sáng tạo nếu không có chỉ dẫn của con người.",
      "Không thể lưu trữ được hình ảnh và video có độ phân giải cao.",
      "Không thể thực hiện các phép toán số học cộng trừ nhân chia phức tạp.",
      "Không thể truyền dữ liệu đi xa qua môi trường mạng không dây."
    ],
    "answer": 0,
    "explain": "Máy tính chỉ làm theo chương trình mà con người nạp vào, không thể tự ý thức hay tự suy nghĩ vượt ra ngoài thuật toán."
  },
  {
    "id": "b01-q16",
    "q": "Dãy các đơn vị đo dung lượng thông tin nào dưới đây được sắp xếp theo thứ tự tăng dần?",
    "options": [
      "Byte -> Kilobyte -> Megabyte -> Gigabyte -> Terabyte.",
      "Bit -> Megabyte -> Kilobyte -> Gigabyte -> Petabyte.",
      "Byte -> Gigabyte -> Megabyte -> Terabyte -> Kilobyte.",
      "Bit -> Byte -> Gigabyte -> Megabyte -> Terabyte."
    ],
    "answer": 0,
    "explain": "Thứ tự tăng dần chuẩn: Bit (b) < Byte (B) < Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB) < Petabyte (PB)."
  }
];
