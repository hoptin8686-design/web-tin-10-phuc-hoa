import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-34: Nghề phát triển phần mềm

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b34-tf01",
      "context": "Nhóm học sinh tìm hiểu về các vai trò trong một nhóm phát triển phần mềm chuyên nghiệp:",
      "statements": [
        {
          "text": "Lập trình viên (Developer) là người trực tiếp chuyển hóa thiết kế và thuật toán thành các dòng mã lệnh chạy được.",
          "answer": true,
          "explain": "Đúng. Dev là người viết mã xây dựng tính năng sản phẩm."
        },
        {
          "text": "Chuyên viên kiểm thử (Tester) chỉ cần kiểm tra xem phần mềm có chạy được hay không chứ không cần tìm kiếm các lỗi tiềm ẩn.",
          "answer": false,
          "explain": "Sai. Tester phải thiết kế kịch bản thử nghiệm công phu để tìm lỗi logic, hiệu năng, bảo mật và trải nghiệm người dùng."
        },
        {
          "text": "Chuyên viên phân tích nghiệp vụ (BA) giúp khách hàng làm rõ các yêu cầu chức năng mà họ mong muốn có trong phần mềm.",
          "answer": true,
          "explain": "Đúng. BA phân tích, thu thập và tài liệu hóa yêu cầu nghiệp vụ."
        },
        {
          "text": "Trong các dự án phần mềm hiện đại, kỹ năng làm việc nhóm (Teamwork) quan trọng không kém gì kỹ năng lập trình cá nhân.",
          "answer": true,
          "explain": "Đúng. Phần mềm là sản phẩm hợp tác của nhiều chuyên môn khác nhau, teamwork là tối quan trọng."
        }
      ]
    },
    {
      "id": "b34-tf02",
      "context": "Một học sinh tranh luận về các định kiến và thực tế của nghề lập trình viên:",
      "statements": [
        {
          "text": "Nghề lập trình viên chỉ là ngồi gõ bàn phím một mình trong phòng tối và không bao giờ phải giao tiếp với ai.",
          "answer": false,
          "explain": "Sai. Lập trình viên phải liên tục trao đổi với BA, Tester, PM, đồng nghiệp và khách hàng."
        },
        {
          "text": "Nghề phát triển phần mềm mang lại cơ hội làm việc từ xa (Remote work) và cơ hội việc làm toàn cầu rất cao.",
          "answer": true,
          "explain": "Đúng. CNTT là một trong những ngành đi đầu về làm việc linh hoạt từ xa xuyên quốc gia."
        },
        {
          "text": "Khi đã học xong một ngôn ngữ lập trình (như Python), người lập trình viên không bao giờ cần phải học thêm bất cứ thứ gì khác nữa.",
          "answer": false,
          "explain": "Sai. Ngành phần mềm đòi hỏi tinh thần tự học liên tục để cập nhật công nghệ, thư viện và framework mới."
        },
        {
          "text": "Nữ giới hoàn toàn có thể trở thành những chuyên gia phần mềm, quản lý dự án và kiến trúc sư hệ thống xuất sắc.",
          "answer": true,
          "explain": "Đúng. Năng lực lập trình phụ thuộc vào tư duy logic và sự bền bỉ, không phân biệt giới tính."
        }
      ]
    },
    {
      "id": "b34-tf03",
      "context": "Xét quy trình phát triển phần mềm chuẩn từ khi nhận đề bài đến khi bàn giao sản phẩm:",
      "statements": [
        {
          "text": "Giai đoạn khảo sát và xác định yêu cầu được thực hiện trước khi bắt tay vào viết mã nguồn.",
          "answer": true,
          "explain": "Đúng. Cần hiểu rõ đề bài và yêu cầu trước khi thiết kế và viết mã."
        },
        {
          "text": "Sau khi bàn giao phần mềm cho khách hàng, công việc phát triển coi như chấm dứt hoàn toàn mà không cần bảo trì.",
          "answer": false,
          "explain": "Sai. Giai đoạn bảo trì (Maintenance) rất dài hơi nhằm sửa lỗi phát sinh, cập nhật bảo mật và nâng cấp tính năng mới."
        },
        {
          "text": "Việc sử dụng hệ thống quản lý mã nguồn Git giúp nhiều lập trình viên có thể cùng phát triển một dự án mà không bị ghi đè mất mã của nhau.",
          "answer": true,
          "explain": "Đúng. Git hỗ trợ phân nhánh (branching) và hợp nhất (merging) mã nguồn nhóm hiệu quả."
        },
        {
          "text": "Viết mã sạch (Clean Code) và có chú thích rõ ràng giúp tiết kiệm rất nhiều chi phí và thời gian bảo trì phần mềm sau này.",
          "answer": true,
          "explain": "Đúng. Clean Code giúp người khác và chính tác giả dễ đọc hiểu và phát triển tiếp."
        }
      ]
    },
    {
      "id": "b34-tf04",
      "context": "Một nhóm học sinh bàn về việc ứng dụng Trí tuệ nhân tạo (AI Coding Assistants như GitHub Copilot) trong nghề phát triển phần mềm:",
      "statements": [
        {
          "text": "Các trợ lý AI có thể gợi ý mã nguồn, tự động hoàn thành dòng lệnh và hỗ trợ tìm lỗi rất nhanh.",
          "answer": true,
          "explain": "Đúng. AI giúp tăng năng suất viết mã đáng kể cho lập trình viên."
        },
        {
          "text": "Lập trình viên có thể tin tưởng tuyệt đối 100% vào mã do AI sinh ra mà không cần kiểm tra lại độ an toàn và tính đúng đắn.",
          "answer": false,
          "explain": "Sai. Mã do AI sinh ra có thể chứa lỗi logic, lỗ hổng bảo mật hoặc vi phạm bản quyền; lập trình viên luôn phải kiểm thử và chịu trách nhiệm."
        },
        {
          "text": "Sự xuất hiện của AI đòi hỏi lập trình viên phải nâng cao tư duy kiến trúc hệ thống, giải quyết bài toán phức tạp hơn là việc gõ mã đơn thuần.",
          "answer": true,
          "explain": "Đúng. Giá trị con người dịch chuyển lên tầng tư duy thuật toán, thiết kế hệ thống và thẩm định giải pháp."
        },
        {
          "text": "Học sinh THPT học lập trình cơ bản là bước đệm cần thiết để hiểu bản chất hoạt động của AI và các hệ thống số hiện đại.",
          "answer": true,
          "explain": "Đúng. Nền tảng tư duy máy tính (Computational Thinking) là hành trang thiết yếu trong kỷ nguyên số."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b34-es01",
      "q": "Nghề phát triển phần mềm là gì? Trình bày các vị trí công việc chính trong một đội ngũ phát triển phần mềm (Software Development Team) và nêu vai trò cụ thể của từng vị trí.",
      "answer": "1. Khái niệm nghề phát triển phần mềm:\n- Phát triển phần mềm (Software Development) là quá trình có hệ thống bao gồm nghiên cứu, phân tích nhu cầu, thiết kế kiến trúc, lập trình (viết mã), kiểm thử và bảo trì nhằm tạo ra các chương trình, ứng dụng máy tính đáp ứng nhu cầu sử dụng của con người và doanh nghiệp.\n\n2. Các vị trí công việc chính trong đội ngũ phát triển phần mềm:\n\n- Chuyên viên phân tích nghiệp vụ (Business Analyst - BA):\n  + Vai trò: Làm việc trực tiếp với khách hàng để tìm hiểu nhu cầu kinh doanh, phân tích và chuyển đổi thành tài liệu đặc tả yêu cầu phần mềm chi tiết cho đội ngũ kỹ thuật thực hiện.\n\n- Lập trình viên Front-end (Front-end Developer):\n  + Vai trò: Xây dựng toàn bộ giao diện trực quan của ứng dụng mà người dùng tương tác trực tiếp (giao diện web, ứng dụng di động), đảm bảo tính thẩm mỹ, độ mượt mà và tương thích trên nhiều kích cỡ màn hình.\n\n- Lập trình viên Back-end (Back-end Developer):\n  + Vai trò: Xây dựng hệ thống máy chủ, xử lý logic nghiệp vụ ngầm, thiết kế và truy xuất cơ sở dữ liệu, xây dựng các cổng giao tiếp API và bảo mật an toàn cho dữ liệu hệ thống.\n\n- Chuyên viên kiểm thử phần mềm (Tester / QA-QC):\n  + Vai trò: Xây dựng các kịch bản kiểm thử, thực hiện kiểm thử tự động và thủ công để phát hiện lỗi (`bugs`), bảo đảm phần mềm vận hành chính xác và ổn định trước khi bàn giao cho người dùng.\n\n- Quản lý dự án (Project Manager - PM):\n  + Vai trò: Lập kế hoạch tổng thể, phân công nhiệm vụ, theo dõi tiến độ, kiểm soát ngân sách và giải quyết các vướng mắc để đưa dự án về đích đúng hạn và đạt chuẩn chất lượng."
    },
    {
      "id": "b34-es02",
      "q": "Là một học sinh THPT trong thời đại số và Trí tuệ nhân tạo (AI), nếu mong muốn trở thành một nhà phát triển phần mềm trong tương lai, em cần rèn luyện những phẩm chất và kỹ năng nền tảng nào? Em có suy nghĩ gì về trách nhiệm xã hội và đạo đức nghề nghiệp của một kỹ sư phần mềm?",
      "answer": "1. Những phẩm chất và kỹ năng nền tảng cần rèn luyện:\n- Năng lực tư duy logic và giải quyết vấn đề: Thường xuyên rèn luyện khả năng phân tích, chia nhỏ bài toán phức tạp thành các bước giải quyết đơn giản; học vững kiến thức Toán học và Tin học phổ thông.\n- Nắm vững lập trình cơ bản: Thực hành viết mã thành thạo trên một ngôn ngữ lập trình (như Python), hiểu rõ cấu trúc dữ liệu, giải thuật, kĩ năng đọc thông báo lỗi và gỡ lỗi.\n- Tinh thần tự học suốt đời (Lifelong Learning): Khả năng chủ động tìm kiếm tri thức, đọc hiểu tài liệu tiếng Anh chuyên ngành và không ngại học hỏi các công nghệ mới.\n- Kỹ năng làm việc nhóm và giao tiếp: Rèn luyện tinh thần hợp tác, biết lắng nghe, chia sẻ ý tưởng và tiếp thu các ý kiến đóng góp xây dựng từ thầy cô và bạn bè.\n- Kĩ năng làm chủ công cụ AI: Học cách sử dụng AI như một trợ thủ đắc lực hỗ trợ học tập và viết mã, nhưng không lệ thuộc mà luôn giữ vững tư duy phản biện.\n\n2. Trách nhiệm xã hội và đạo đức nghề nghiệp:\n- Tôn trọng quyền sở hữu trí tuệ và bản quyền: Không sử dụng mã nguồn sao chép trái phép, tôn trọng giấy phép phần mềm nguồn mở.\n- Bảo vệ an toàn dữ liệu và quyền riêng tư: Tuyệt đối không cài đặt mã độc, backdoor, không khai thác lỗ hổng bảo mật để đánh cắp hay trục lợi từ dữ liệu cá nhân của người dùng.\n- Trách nhiệm với cộng đồng: Phần mềm tạo ra phải hướng tới mục tiêu tốt đẹp, nâng cao chất lượng cuộc sống con người, đóng góp tích cực cho xã hội và sự phát triển bền vững của đất nước."
    }
  ]
};
