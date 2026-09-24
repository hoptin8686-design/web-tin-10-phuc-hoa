import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-01: Thông tin và xử lí thông tin

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b01-tf01",
      "context": "Bạn Mai, học sinh lớp 10 trường THPT Phục Hòa, dùng điện thoại thông minh chụp ảnh chuyến đi dã ngoại tại khu di tích Pác Bó. Thẻ nhớ của Mai có dung lượng 32 GB. Mỗi bức ảnh có dung lượng trung bình 4 MB. Mai dự định sao chép ảnh vào máy tính để lưu trữ lâu dài.",
      "statements": [
        {
          "text": "Bức ảnh số lưu trên thẻ nhớ là dữ liệu, còn cảm nhận về cảnh đẹp của di tích khi xem ảnh là thông tin Mai thu nhận được.",
          "answer": true,
          "explain": "Đúng. Tệp ảnh chứa dãy bit là dữ liệu; hiểu biết và cảm nhận của con người là thông tin."
        },
        {
          "text": "Dung lượng thẻ nhớ 32 GB tương đương với đúng 32 000 MB theo hệ thống đo lường của Tin học.",
          "answer": false,
          "explain": "Sai. Trong Tin học, 1 GB = 1024 MB nên 32 GB = 32 × 1024 = 32 768 MB."
        },
        {
          "text": "Nếu tệp ảnh bị lỗi mất một phần dữ liệu, thông tin mà bức ảnh thể hiện có thể bị méo mó hoặc không xem được do tính toàn vẹn của thông tin.",
          "answer": true,
          "explain": "Đúng. Thông tin có tính toàn vẹn; thiếu dữ liệu sẽ dẫn tới sai lệch hoặc mất mát thông tin."
        },
        {
          "text": "Thẻ nhớ 32 GB khi còn trống hoàn toàn có thể lưu trữ tối đa đúng 8 000 bức ảnh dung lượng 4 MB.",
          "answer": false,
          "explain": "Sai. Số ảnh tối đa là 32 768 / 4 = 8 192 bức ảnh, nhiều hơn con số 8 000."
        }
      ]
    },
    {
      "id": "b01-tf02",
      "context": "Trong giờ thực hành Tin học 10, nhóm của bạn Hùng thảo luận về mô hình hoạt động của hệ thống xử lí thông tin tự động bằng máy tính:",
      "statements": [
        {
          "text": "Bàn phím, chuột và máy quét tài liệu đều là các thiết bị làm nhiệm vụ tiếp nhận dữ liệu đầu vào (Input).",
          "answer": true,
          "explain": "Đúng. Đây là các thiết bị vào chuẩn mực của hệ thống máy tính."
        },
        {
          "text": "Bộ nhớ trong (RAM) là nơi lưu trữ dữ liệu vĩnh viễn ngay cả khi máy tính bị mất điện đột ngột.",
          "answer": false,
          "explain": "Sai. RAM là bộ nhớ khả biến, toàn bộ dữ liệu trên RAM sẽ biến mất khi mất nguồn điện."
        },
        {
          "text": "Bộ xử lý trung tâm (CPU) đóng vai trò là 'bộ não' điều khiển và thực hiện các phép toán xử lí dữ liệu.",
          "answer": true,
          "explain": "Đúng. CPU điều phối toàn bộ hoạt động tính toán và logic của máy tính."
        },
        {
          "text": "Máy tính có khả năng tự động hiểu được cảm xúc của người dùng mà không cần bất kì cảm biến hay phần mềm chuyên biệt nào.",
          "answer": false,
          "explain": "Sai. Máy tính chỉ xử lí tín hiệu và thuật toán, hoàn toàn không có cảm xúc tự thân."
        }
      ]
    },
    {
      "id": "b01-tf03",
      "context": "Nhà trường số hóa hồ sơ học bạ điện tử của 1000 học sinh. Mỗi học bạ có dung lượng trung bình khoảng 500 KB gồm thông tin cá nhân và điểm số các năm học:",
      "statements": [
        {
          "text": "Tổng dung lượng cần thiết để lưu trữ 1000 học bạ là khoảng 500 000 KB, tương đương khoảng 488 MB.",
          "answer": true,
          "explain": "Đúng. 1000 × 500 KB = 500 000 KB = 500 000 / 1024 ≈ 488.28 MB."
        },
        {
          "text": "Một chiếc USB dung lượng 8 GB hoàn toàn đủ sức chứa toàn bộ hồ sơ học bạ số hóa của trường.",
          "answer": true,
          "explain": "Đúng. 8 GB = 8 192 MB, lớn hơn rất nhiều so với 488 MB cần thiết."
        },
        {
          "text": "Việc số hóa học bạ biến thông tin thành dữ liệu nhị phân để máy tính dễ dàng tìm kiếm và thống kê.",
          "answer": true,
          "explain": "Đúng. Dữ liệu số hóa giúp tự động hóa khâu tra cứu và tổng hợp báo cáo."
        },
        {
          "text": "Khi đã số hóa, nhà trường không cần phải quan tâm đến việc sao lưu dữ liệu dự phòng vì máy tính không bao giờ bị hỏng.",
          "answer": false,
          "explain": "Sai. Thiết bị lưu trữ có thể hỏng hóc hoặc bị virus, do đó sao lưu dữ liệu là bắt buộc."
        }
      ]
    },
    {
      "id": "b01-tf04",
      "context": "Bác nông dân ở Phục Hòa sử dụng trạm quan trắc tự động đo nhiệt độ và độ ẩm đất vườn trồng mía. Cứ mỗi giờ trạm gửi về máy chủ một dòng dữ liệu:",
      "statements": [
        {
          "text": "Các con số đo nhiệt độ '28°C' và độ ẩm '75%' được cảm biến thu nhận là các dữ liệu thô.",
          "answer": true,
          "explain": "Đúng. Số đo đo được từ cảm biến chính là dữ liệu đầu vào."
        },
        {
          "text": "Thông báo trên điện thoại 'Độ ẩm đất đang quá thấp, cần bật hệ thống tưới nước ngay' là thông tin đã qua xử lí.",
          "answer": true,
          "explain": "Đúng. Đây là kết quả rút ra sau khi so sánh dữ liệu đo được với ngưỡng an toàn."
        },
        {
          "text": "Kinh nghiệm tưới mía vào buổi sáng sớm mà bác nông dân đúc kết được sau 10 năm trồng trọt được gọi là tri thức.",
          "answer": true,
          "explain": "Đúng. Tri thức là sự hiểu biết và kinh nghiệm đúc kết từ nhiều thông tin qua thời gian."
        },
        {
          "text": "Dữ liệu độ ẩm đo được chỉ có thể dùng để tưới cây chứ không thể dùng cho mục đích dự báo năng suất mùa vụ.",
          "answer": false,
          "explain": "Sai. Dữ liệu có thể được tái sử dụng cho nhiều mục đích phân tích khác nhau."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b01-es01",
      "q": "Trình bày sự khác biệt cốt lõi giữa hai khái niệm 'Thông tin' và 'Dữ liệu'. Nêu một ví dụ thực tế trong trường học để làm rõ mối quan hệ giữa chúng.",
      "answer": "1. Sự khác biệt cốt lõi:\n- Dữ liệu (Data): Là các số hạt thô, văn bản, âm thanh, hình ảnh được lưu trữ và đưa vào máy tính. Dữ liệu mang tính khách quan và có thể chưa có ý nghĩa trực tiếp nếu thiếu ngữ cảnh.\n- Thông tin (Information): Là ý nghĩa của dữ liệu mang lại cho con người hiểu biết về thế giới xung quanh. Thông tin gắn liền với nhận thức của con người.\n\n2. Mối quan hệ: Dữ liệu là phương tiện chuyên chở thông tin; xử lí dữ liệu sẽ rút ra thông tin.\n\n3. Ví dụ thực tế:\n- Dữ liệu: Danh sách con số '8.5, 9.0, 7.0' ghi trong sổ điểm.\n- Thông tin rút ra: Điểm trung bình môn Tin của bạn An đạt loại Giỏi, đủ điều kiện nhận học bổng khuyến khích học tập."
    },
    {
      "id": "b01-es02",
      "q": "Một thư viện trường THPT có 2 000 cuốn sách, mỗi cuốn khi số hóa thành tệp PDF có dung lượng trung bình 50 MB. Hãy tính tổng dung lượng bộ nhớ (theo đơn vị Gigabyte) cần thiết để lưu trữ toàn bộ số sách này. Một ổ cứng di động 1 TB có thể chứa được bao nhiêu cuốn sách như vậy?",
      "answer": "1. Tổng dung lượng cần lưu 2 000 cuốn sách:\n- Dung lượng theo MB: 2 000 × 50 MB = 100 000 MB.\n- Đổi sang Gigabyte (GB): 100 000 / 1024 ≈ 97.66 GB.\n\n2. Khả năng lưu trữ của ổ cứng 1 TB:\n- 1 TB = 1024 GB = 1024 × 1024 MB = 1 048 576 MB.\n- Số cuốn sách tối đa ổ cứng 1 TB chứa được:\n  1 048 576 / 50 ≈ 20 971 cuốn sách.\n- Kết luận: Ổ cứng 1 TB thoải mái chứa toàn bộ thư viện 2 000 cuốn và còn có thể chứa gấp 10 lần số đó."
    }
  ]
};
