import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-34: Nghề phát triển phần mềm
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b34-q01",
    "q": "Nghề phát triển phần mềm (Software Development) trong ngành Công nghệ thông tin được định nghĩa chính xác nhất là gì?",
    "options": [
      "Quá trình nghiên cứu, thiết kế, viết mã, kiểm thử và bảo trì các chương trình ứng dụng máy tính.",
      "Nghề sản xuất các linh kiện vật lý bằng chất bán dẫn silic như chip vi xử lý và ổ đĩa thể rắn.",
      "Nghề buôn bán các thiết bị viễn thông như điện thoại di động và phụ kiện sạc pin tại cửa hàng.",
      "Nghề chuyên in ấn các loại sách hướng dẫn sử dụng đồ gia dụng bằng máy in công nghiệp lớn."
    ],
    "answer": 0,
    "explain": "Nghề phát triển phần mềm bao gồm toàn bộ vòng đời: khảo sát, thiết kế, lập trình, kiểm thử và bảo trì."
  },
  {
    "id": "b34-q02",
    "q": "Vị trí lập trình viên Front-end (Front-end Developer) trong một dự án phần mềm chịu trách nhiệm chính về phần nào?",
    "options": [
      "Phát triển toàn bộ giao diện tương tác trực tiếp với người dùng trên trình duyệt web hoặc ứng dụng.",
      "Thiết kế cấu trúc bảng cơ sở dữ liệu và quản trị hệ thống máy chủ lưu trữ trên đám mây.",
      "Kiểm tra chất lượng nguồn điện cấp cho phòng máy chủ và bảo trì máy phát điện dự phòng.",
      "Ký kết hợp đồng kinh tế và đàm phán giá cả mua sắm máy móc thiết bị văn phòng với đối tác."
    ],
    "answer": 0,
    "explain": "Front-end Developer xây dựng giao diện người dùng (UI), xử lý trải nghiệm tương tác trực tiếp trên màn hình."
  },
  {
    "id": "b34-q03",
    "q": "Vị trí lập trình viên Back-end (Back-end Developer) chịu trách nhiệm về các thành phần cốt lõi nào của hệ thống?",
    "options": [
      "Xử lý logic nghiệp vụ ngầm, giao tiếp cơ sở dữ liệu, xây dựng API và bảo mật an toàn phía máy chủ.",
      "Vẽ màu sắc cho các nút bấm trên giao diện ứng dụng và tạo các hiệu ứng chuyển động đồ họa.",
      "Soạn thảo hợp đồng lao động và tuyển dụng các nhân viên kế toán cho công ty công nghệ.",
      "Lau chùi các đường ống làm mát bằng chất lỏng của các cụm máy chủ siêu máy tính đa nhân."
    ],
    "answer": 0,
    "explain": "Back-end Developer xử lý logic nghiệp vụ máy chủ, kiến trúc dữ liệu, API và bảo mật hệ thống."
  },
  {
    "id": "b34-q04",
    "q": "Lập trình viên Full-stack (Full-stack Developer) là người có năng lực làm việc bao quát ở những phạm vi nào?",
    "options": [
      "Có khả năng làm việc thành thạo trên cả hai mảng giao diện người dùng (Front-end) và máy chủ (Back-end).",
      "Là người chỉ chuyên viết các tài liệu hướng dẫn sử dụng phần mềm bằng tiếng Anh chuyên ngành.",
      "Là kỹ sư chỉ chịu trách nhiệm hàn gắn các dây cáp mạng bị đứt bên ngoài các cột điện cao thế.",
      "Là người quản lý tài chính chịu trách nhiệm thanh toán tiền lương hàng tháng cho toàn bộ công ty."
    ],
    "answer": 0,
    "explain": "Full-stack Developer có kiến thức và kỹ năng toàn diện cả Front-end lẫn Back-end."
  },
  {
    "id": "b34-q05",
    "q": "Chuyên viên phân tích nghiệp vụ (Business Analyst - BA) trong dự án phần mềm đóng vai trò cầu nối nào?",
    "options": [
      "Cầu nối giữa khách hàng (nêu nhu cầu kinh doanh) và đội ngũ phát triển kỹ thuật (lập trình viên).",
      "Cầu nối giữa ban giám đốc công ty và các cơ quan thuế nhà nước về báo cáo tài chính năm.",
      "Cầu nối giữa nhà cung cấp điện thoại thông minh và các đại lý bán lẻ trên toàn quốc.",
      "Cầu nối giữa nhà sản xuất máy in văn phòng và các trường học phổ thông trên địa bàn."
    ],
    "answer": 0,
    "explain": "BA phân tích yêu cầu kinh doanh của khách hàng và chuyển hóa thành tài liệu đặc tả kỹ thuật cho dev."
  },
  {
    "id": "b34-q06",
    "q": "Chuyên viên kiểm thử phần mềm (Software Tester / QA - QC) đảm nhận nhiệm vụ cốt lõi nào sau đây?",
    "options": [
      "Thiết kế kịch bản thử nghiệm, chạy kiểm thử để tìm kiếm và phát hiện các lỗi trước khi phát hành.",
      "Trực tiếp viết mã nguồn chính cho các thuật toán lõi của hệ thống phần mềm thương mại.",
      "Đi giao hàng các đĩa cài đặt phần mềm đến từng địa chỉ nhà riêng của khách hàng đặt mua.",
      "Thiết kế logo và banner quảng cáo sản phẩm trên các nền tảng mạng xã hội trực tuyến."
    ],
    "answer": 0,
    "explain": "Tester / QA-QC tìm kiếm lỗi (bugs), kiểm tra chất lượng và đảm bảo phần mềm vận hành đúng yêu cầu."
  },
  {
    "id": "b34-q07",
    "q": "Người quản lý dự án phần mềm (Project Manager - PM) chịu trách nhiệm chính về những yếu tố nào của dự án?",
    "options": [
      "Lập kế hoạch, điều phối nhân sự, kiểm soát tiến độ, chi phí và chất lượng để dự án hoàn thành đúng hạn.",
      "Ngồi gõ từng dòng mã nguồn thuật toán liên tục từ sáng đến tối thay thế cho các lập trình viên.",
      "Sửa chữa hệ thống điều hòa nhiệt độ trong phòng làm việc của các kỹ sư công nghệ thông tin.",
      "Chịu trách nhiệm nấu ăn và phục vụ đồ uống cho các buổi tiệc sinh nhật của các thành viên."
    ],
    "answer": 0,
    "explain": "Project Manager quản lý tiến độ, phạm vi, ngân sách, nhân sự và chất lượng chuyển giao của dự án."
  },
  {
    "id": "b34-q08",
    "q": "Kỹ năng tư duy nào được coi là nền tảng cốt lõi nhất của người làm nghề phát triển phần mềm?",
    "options": [
      "Tư duy logic, năng lực giải quyết vấn đề và khả năng mô hình hóa thuật toán thành mã lệnh.",
      "Khả năng học thuộc lòng chính xác từng chữ trong cuốn từ điển bách khoa toàn thư thế giới.",
      "Tư duy trừu tượng về hội họa siêu thực của thế kỷ 19 không liên quan đến máy tính điện tử.",
      "Khả năng ghi nhớ tất cả các số điện thoại của người dân sinh sống trong cùng một khu phố."
    ],
    "answer": 0,
    "explain": "Tư duy logic, phân tích vấn đề và biến thuật toán thành giải pháp phần mềm là nền tảng cốt lõi của dev."
  },
  {
    "id": "b34-q09",
    "q": "Tại sao tinh thần 'tự học suốt đời' (Lifelong Learning) lại là yêu cầu sống còn đối với một lập trình viên?",
    "options": [
      "Vì công nghệ, ngôn ngữ lập trình và các khung làm việc (framework) liên tục thay đổi và phát triển cực nhanh.",
      "Vì hệ điều hành máy tính bắt buộc người dùng phải thi lại chứng chỉ sau mỗi 30 ngày sử dụng.",
      "Vì các tài liệu lập trình cũ sẽ tự động biến mất khỏi ổ cứng máy tính sau một năm lưu trữ.",
      "Vì luật pháp quốc tế quy định lập trình viên không được phép sử dụng lại các đoạn mã đã viết quá một tuần."
    ],
    "answer": 0,
    "explain": "Công nghệ CNTT đổi mới từng ngày, lập trình viên nếu không liên tục cập nhật công nghệ mới sẽ nhanh chóng bị đào thải."
  },
  {
    "id": "b34-q10",
    "q": "Hệ thống quản lý phiên bản mã nguồn phổ biến nhất mà hầu như mọi kỹ sư phần mềm trên thế giới đều phải thành thạo là gì?",
    "options": [
      "Hệ thống quản lý phiên bản phân tán Git (kết hợp các nền tảng lưu trữ như GitHub, GitLab).",
      "Hệ điều hành Windows Explorer dùng để đổi tên các tệp tin trong thư mục màn hình nền.",
      "Phần mềm sao chép dữ liệu qua thẻ nhớ USB truyền thống của các máy tính phòng thực hành.",
      "Ứng dụng nhắn tin Zalo dùng để gửi các đoạn mã nguồn dưới dạng tệp văn bản đính kèm."
    ],
    "answer": 0,
    "explain": "Git và GitHub là công cụ chuẩn mực số 1 thế giới để quản lý phiên bản và phối hợp mã nguồn nhóm."
  },
  {
    "id": "b34-q11",
    "q": "Ngoại ngữ, đặc biệt là Tiếng Anh chuyên ngành CNTT, đóng vai trò quan trọng như thế nào đối với nghề lập trình?",
    "options": [
      "Giúp tra cứu tài liệu kĩ thuật, học hỏi công nghệ mới, tham gia cộng đồng quốc tế và làm việc từ xa.",
      "Chỉ để dịch các câu chào mừng hiển thị trên giao diện của phần mềm sang ngôn ngữ bản địa.",
      "Không có vai trò gì vì hiện nay các phần mềm dịch tự động có thể làm thay toàn bộ công việc.",
      "Chỉ cần thiết khi công ty có kế hoạch tổ chức cho nhân viên đi du lịch nghỉ dưỡng ở nước ngoài."
    ],
    "answer": 0,
    "explain": "Tài liệu kỹ thuật, thư viện, diễn đàn (StackOverflow, GitHub) đều dùng tiếng Anh; tiếng Anh là chìa khóa mở kho tri thức."
  },
  {
    "id": "b34-q12",
    "q": "Quy trình phát triển phần mềm linh hoạt (Agile / Scrum) có đặc điểm nổi bật nào so với mô hình Thác nước (Waterfall)?",
    "options": [
      "Chia nhỏ dự án thành các chu kì ngắn (Sprint 1-4 tuần), liên tục cải tiến và thích ứng nhanh với thay đổi.",
      "Bắt buộc phải hoàn thành 100% tất cả các tài liệu thiết kế trong 5 năm rồi mới được phép bắt đầu viết mã.",
      "Không cho phép khách hàng đưa ra bất kỳ phản hồi nào cho đến khi sản phẩm đã được thanh toán toàn bộ.",
      "Cấm lập trình viên không được phép sửa đổi bất kỳ dòng mã nào sau khi đã nhấn phím lưu tệp nguồn."
    ],
    "answer": 0,
    "explain": "Agile/Scrum phát triển lặp theo các chu kỳ ngắn (sprints), thích ứng linh hoạt với yêu cầu thay đổi của khách hàng."
  },
  {
    "id": "b34-q13",
    "q": "Xu hướng công nghệ nào sau đây đang tạo ra sự bùng nổ nhu cầu việc làm lớn nhất cho nghề phát triển phần mềm?",
    "options": [
      "Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data), Điện toán đám mây (Cloud) và Internet vạn vật (IoT).",
      "Công nghệ sản xuất đĩa mềm dung lượng 1.44 Megabyte dùng cho các máy tính đời cũ thập niên 90.",
      "Công nghệ in ấn sách giáo khoa bằng bàn ép chữ chì thủ công truyền thống thời trung cổ.",
      "Kĩ thuật đóng ghim thủ công các tập hóa đơn bán hàng bằng kim loại không gỉ trong siêu thị."
    ],
    "answer": 0,
    "explain": "AI, Cloud Computing, Big Data, DevOps và IoT là những xu hướng công nghệ dẫn dắt thị trường tuyển dụng CNTT."
  },
  {
    "id": "b34-q14",
    "q": "Hành vi nào sau đây vi phạm nghiêm trọng đạo đức nghề nghiệp và pháp luật của người phát triển phần mềm?",
    "options": [
      "Cố tình cài đặt cửa sau (backdoor), mã độc đánh cắp dữ liệu người dùng hoặc vi phạm bản quyền mã nguồn.",
      "Chia sẻ các đoạn mã thuật toán giải phương trình bậc hai trên các diễn đàn học tập cộng đồng.",
      "Sử dụng các thư viện phần mềm mã nguồn mở có giấy phép tự do (như MIT hay Apache License).",
      "Thực hiện đặt tên biến gợi nhớ ý nghĩa và viết các dòng chú thích giải thích thuật toán rõ ràng."
    ],
    "answer": 0,
    "explain": "Cài mã độc, backdoor, đánh cắp dữ liệu cá nhân hay xâm phạm bản quyền phần mềm là vi phạm pháp luật hình sự."
  },
  {
    "id": "b34-q15",
    "q": "Một học sinh có nguyện vọng trở thành một Kỹ sư phần mềm giỏi trong tương lai, bạn nên bắt đầu từ đâu?",
    "options": [
      "Nắm vững kiến thức thuật toán cơ bản, cấu trúc dữ liệu, rèn luyện lập trình bằng một ngôn ngữ như Python.",
      "Chờ đến khi tốt nghiệp đại học rồi mới bắt đầu tìm hiểu xem máy vi tính hoạt động như thế nào.",
      "Chỉ tập trung chơi các trò chơi điện tử trực tuyến thâu đêm suốt sáng để rèn luyện phản xạ tay.",
      "Mua thật nhiều sách giáo trình dày hàng nghìn trang về xếp trên giá sách mà không cần đọc."
    ],
    "answer": 0,
    "explain": "Bắt đầu từ việc nắm chắc tư duy giải thuật, cấu trúc dữ liệu cơ bản và thành thạo 1 ngôn ngữ lập trình như Python."
  },
  {
    "id": "b34-q16",
    "q": "Công việc của Kỹ sư Vận hành và Phát triển (DevOps Engineer) trong các công ty công nghệ là gì?",
    "options": [
      "Tự động hóa quy trình tích hợp, triển khai phần mềm (CI/CD) và duy trì sự ổn định của hệ thống máy chủ hạ tầng.",
      "Trực tiếp gọi điện thoại tiếp thị phần mềm đến các hộ gia đình vào ban đêm để chào hàng.",
      "Chuyên sửa chữa bàn ghế và sơn lại tường các phòng họp làm việc của nhân viên công ty.",
      "Thiết kế logo và nhãn mác dán trên vỏ hộp quà tặng trong các dịp lễ tết của doanh nghiệp."
    ],
    "answer": 0,
    "explain": "DevOps tự động hóa triển khai (CI/CD), quản lý hạ tầng đám mây và bảo đảm hệ thống vận hành liên tục 24/7."
  }
];
