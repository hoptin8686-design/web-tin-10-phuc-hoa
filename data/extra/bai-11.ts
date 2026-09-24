import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b11-tf01",
      "context": "Bạn Tuấn, học sinh lớp 10, tìm thấy trên mạng một đoạn mã Python giải bài toán sắp xếp danh sách của một lập trình viên đăng trên diễn đàn công nghệ có giấy phép CC BY:",
      "statements": [
        {
          "text": "Tuấn được phép sử dụng đoạn mã đó trong bài tập dự án Tin học của mình.",
          "answer": true,
          "explain": "Đúng. Giấy phép CC BY cho phép sử dụng và cải tiến mã nguồn."
        },
        {
          "text": "Tuấn bắt buộc phải ghi chú nguồn trích dẫn và tên của tác giả đoạn mã gốc trong phần ghi chú của chương trình.",
          "answer": true,
          "explain": "Đúng. 'BY' đòi hỏi ghi nhận công trạng của tác giả gốc."
        },
        {
          "text": "Tuấn có quyền xóa tên tác giả gốc và ghi tên mình vào để nộp cho thầy giáo chấm điểm sáng tạo.",
          "answer": false,
          "explain": "Sai. Đây là hành vi đạo văn và vi phạm điều kiện giấy phép CC BY."
        },
        {
          "text": "Nếu Tuấn bán phần mềm có chứa đoạn mã đó, Tuấn vẫn không vi phạm giấy phép CC BY nếu vẫn ghi công tác giả gốc.",
          "answer": true,
          "explain": "Đúng. Giấy phép CC BY (không có đuôi NC) cho phép sử dụng cả cho mục đích thương mại miễn là có ghi nhận tác giả."
        }
      ]
    },
    {
      "id": "b11-tf02",
      "context": "Trong một buổi tranh luận về văn hóa mạng, hai bạn học sinh lớp 10 xảy ra mâu thuẫn. Bạn A đã lập một tài khoản Facebook giả mạo lấy ảnh và tên của bạn B rồi đăng các bài viết bịa đặt nói xấu thầy cô:",
      "statements": [
        {
          "text": "Hành vi của bạn A vi phạm nghiêm trọng Luật An ninh mạng và quyền bảo vệ danh dự, nhân phẩm của bạn B.",
          "answer": true,
          "explain": "Đúng. Giả mạo danh tính và bôi nhọ người khác là hành vi vi phạm pháp luật rõ ràng."
        },
        {
          "text": "Bạn A cho rằng vì dùng tài khoản ẩn danh nên cơ quan chức năng hoàn toàn không thể tìm ra danh tính thực tế của mình.",
          "answer": false,
          "explain": "Sai. Cơ quan an ninh mạng có thể dễ dàng truy vết địa chỉ IP và nhật ký mạng để xác định người vi phạm."
        },
        {
          "text": "Hành vi của bạn A được xếp vào nhóm hành vi bạo lực học đường trên không gian mạng (Cyberbullying).",
          "answer": true,
          "explain": "Đúng. Đây là hình thức bắt nạt, khủng bố tinh thần trên mạng."
        },
        {
          "text": "Bạn B và gia đình có quyền yêu cầu cơ quan chức năng can thiệp và xử phạt hành chính đối với bạn A theo quy định của pháp luật.",
          "answer": true,
          "explain": "Đúng. Pháp luật có chế tài xử phạt hành chính và bồi thường thiệt hại cho nạn nhân."
        }
      ]
    },
    {
      "id": "b11-tf03",
      "context": "Bạn Mai sử dụng công cụ AI Midjourney để tạo ra một bức tranh minh họa cho truyện ngắn dự thi cuộc thi sáng tác văn học của trường:",
      "statements": [
        {
          "text": "Mai nên ghi chú rõ ràng trong bài dự thi: 'Hình ảnh minh họa được tạo bởi công nghệ AI Midjourney'.",
          "answer": true,
          "explain": "Đúng. Minh bạch về việc sử dụng công cụ AI là chuẩn mực đạo đức công nghệ."
        },
        {
          "text": "Nếu cuộc thi quy định rõ 'toàn bộ tranh minh họa phải do học sinh tự vẽ tay', việc Mai nộp tranh do AI sinh ra là hành vi gian lận thể lệ cuộc thi.",
          "answer": true,
          "explain": "Đúng. Vi phạm quy chế cuộc thi và thiếu trung thực học thuật."
        },
        {
          "text": "Bức tranh do AI tự động sinh ra có bản quyền tác giả mặc định thuộc về chính con chip vi xử lý của máy tính.",
          "answer": false,
          "explain": "Sai. Pháp luật không công nhận máy móc hay phần mềm là chủ thể của quyền tác giả."
        },
        {
          "text": "Việc sử dụng AI làm trợ lí gợi ý ý tưởng bố cục tranh là một cách tiếp cận công nghệ thông minh và hợp lí.",
          "answer": true,
          "explain": "Đúng. Sử dụng AI làm công cụ hỗ trợ sáng tạo (Human-in-the-loop) là xu hướng được khuyến khích."
        }
      ]
    },
    {
      "id": "b11-tf04",
      "context": "Tìm hiểu về quyền sở hữu trí tuệ đối với phần mềm máy tính:",
      "statements": [
        {
          "text": "Phần mềm nguồn mở (như hệ điều hành Linux, phần mềm đồ họa Inkscape) là phần mềm vi phạm bản quyền nên mới được phát hành miễn phí.",
          "answer": false,
          "explain": "Sai. Phần mềm nguồn mở có bản quyền hợp pháp (như GNU GPL), tác giả chủ động chia sẻ quyền tự do sử dụng và sửa đổi cho cộng đồng."
        },
        {
          "text": "Mua đĩa cài đặt phần mềm có bản quyền cho phép người mua có quyền tự ý sao chép ra hàng nghìn bản khác đem bán lại kiếm lời.",
          "answer": false,
          "explain": "Sai. Người mua chỉ có quyền sử dụng (License to use), không có quyền sao chép thương mại."
        },
        {
          "text": "Học sinh sử dụng phần mềm có bản quyền hoặc phần mềm tự do nguồn mở là hành động thiết thực tôn trọng sở hữu trí tuệ.",
          "answer": true,
          "explain": "Đúng. Thói quen dùng phần mềm hợp pháp xây dựng xã hội số văn minh."
        },
        {
          "text": "Các cơ quan, doanh nghiệp sử dụng phần mềm lậu có thể bị xử phạt vi phạm hành chính hoặc truy cứu trách nhiệm hình sự.",
          "answer": true,
          "explain": "Đúng. Luật Sở hữu trí tuệ quy định chế tài xử phạt rất nặng đối với vi phạm bản quyền phần mềm."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b11-es01",
      "q": "Trình bày 4 quy tắc cơ bản trong 'Bộ quy tắc ứng xử trên mạng xã hội' do Bộ Thông tin và Truyền thông ban hành. Là một học sinh THPT, em đã và sẽ làm gì để góp phần xây dựng một môi trường mạng an toàn, lành mạnh và văn minh?",
      "answer": "1. Bốn quy tắc cơ bản trong Bộ quy tắc ứng xử trên mạng xã hội:\n- Quy tắc Tôn trọng, Tuân thủ pháp luật: Tuân thủ luật pháp Việt Nam, tôn trọng quyền và lợi ích hợp pháp của tổ chức, cá nhân.\n- Quy tắc Lành mạnh: Hành vi, ứng xử trên mạng xã hội phải phù hợp với các giá trị đạo đức, văn hóa truyền thống tốt đẹp của dân tộc Việt Nam.\n- Quy tắc An toàn, Bảo mật thông tin: Tuân thủ các quy định về bảo vệ an toàn thông tin cá nhân và tổ chức; không làm lộ lọt dữ liệu riêng tư.\n- Quy tắc Trách nhiệm: Chịu trách nhiệm về các phát ngôn, hành vi của mình trên mạng; có ý thức phối hợp với cơ quan chức năng xử lí hành vi vi phạm.\n\n2. Hành động cụ thể của học sinh THPT:\n- Không tham gia bắt nạt trên mạng (Cyberbullying): Không bình luận miệt thị ngoại hình, không công kích hay lan truyền video bôi nhọ bạn bè.\n- Kiểm chứng thông tin trước khi chia sẻ: Tuyệt đối không like, share các thông tin giật gân, tin giả chưa qua kiểm chứng từ nguồn chính thống.\n- Sử dụng ngôn từ văn minh: Giao tiếp lễ phép, tôn trọng sự khác biệt, không dùng từ ngữ thô tục trên các diễn đàn mạng.\n- Lan tỏa thông điệp tích cực: Chia sẻ các câu chuyện đẹp, kiến thức học tập bổ ích, hình ảnh đẹp về trường lớp và quê hương Cao Bằng."
    },
    {
      "id": "b11-es02",
      "q": "Hệ thống giấy phép Creative Commons (CC) là gì? Hãy giải thích ý nghĩa của 4 điều kiện thành phần cơ bản: BY, NC, ND, SA. Nếu một tài liệu học tập được gán nhãn giấy phép 'CC BY-NC-SA 4.0', người dùng được phép và không được phép làm những gì?",
      "answer": "1. Khái niệm giấy phép Creative Commons (CC):\nCreative Commons là hệ thống các giấy phép bản quyền công cộng chuẩn hóa quốc tế, cho phép các tác giả chia sẻ tác phẩm của mình (văn bản, tranh ảnh, video, âm nhạc) cho cộng đồng sử dụng một cách hợp pháp dưới những điều kiện rõ ràng mà không cần phải kí kết hợp đồng riêng biệt.\n\n2. Giải thích 4 điều kiện thành phần cơ bản:\n- BY (Attribution - Ghi nhận công trạng): Người dùng phải ghi rõ tên tác giả gốc và dẫn đường liên kết đến tác phẩm gốc.\n- NC (Non-Commercial - Phi thương mại): Chỉ được phép sử dụng tác phẩm cho các mục đích phi thương mại (học tập, nghiên cứu), không được kinh doanh kiếm lời.\n- ND (No Derivatives - Không tác phẩm phái sinh): Chỉ được phép sao chép và phân phối tác phẩm nguyên vẹn, không được cắt ghép, dịch thuật hoặc chỉnh sửa tác phẩm gốc.\n- SA (ShareAlike - Chia sẻ tương tự): Nếu người dùng tạo ra tác phẩm phái sinh dựa trên tác phẩm này, thì bắt buộc phải phát hành tác phẩm phái sinh đó dưới cùng một giấy phép mở như bản gốc.\n\n3. Ý nghĩa của nhãn 'CC BY-NC-SA 4.0':\n- Được phép: Sao chép, phân phối, trích dẫn và chỉnh sửa/tạo tác phẩm mới dựa trên tài liệu này.\n- Điều kiện bắt buộc và điều cấm:\n  + Bắt buộc ghi công: Phải ghi rõ tên tác giả ban đầu (BY).\n  + Cấm thương mại: Tuyệt đối không được in bán lấy tiền hoặc kinh doanh (NC).\n  + Kế thừa giấy phép: Bất kì tài liệu phái sinh nào tạo ra từ tài liệu này cũng phải được phát hành lại dưới đúng giấy phép CC BY-NC-SA (SA)."
    }
  ]
};
