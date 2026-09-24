import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-14: Làm việc với đối tượng đường và văn bản

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b14-tf01",
      "context": "Bạn Mai thiết kế con dấu hình tròn cho Câu lạc bộ Sách trường THPT Phục Hòa. Con dấu gồm một đường tròn viền ngoài và dòng chữ 'CLB SÁCH THPT PHỤC HÒA' uốn cong tròn phía trên:",
      "statements": [
        {
          "text": "Mai dùng công cụ Text (phím T) gõ dòng chữ và công cụ Circle để vẽ đường tròn làm đường dẫn.",
          "answer": true,
          "explain": "Đúng. Chuẩn bị 2 đối tượng độc lập: văn bản và đường dẫn."
        },
        {
          "text": "Mai chọn cả dòng chữ và đường tròn rồi vào menu Text -> Put on Path để dòng chữ uốn cong theo đường tròn.",
          "answer": true,
          "explain": "Đúng. Thao tác uốn chữ theo đường dẫn chuẩn trong Inkscape."
        },
        {
          "text": "Nếu Mai xóa đường tròn đi bằng phím Delete, dòng chữ uốn cong vẫn giữ nguyên hình dạng uốn lượn đẹp mắt.",
          "answer": false,
          "explain": "Sai. Xóa đường dẫn thì chữ sẽ mất quỹ đạo và duỗi thẳng trở lại. Mai phải ẩn màu nét viền của đường tròn (Stroke = No paint)."
        },
        {
          "text": "Mai có thể xoay đường tròn để điều chỉnh dòng chữ nằm cân đối ở nửa trên của con dấu tròn.",
          "answer": true,
          "explain": "Đúng. Xoay hình tròn đường dẫn sẽ kéo theo dòng chữ xoay theo đến vị trí mong muốn."
        }
      ]
    },
    {
      "id": "b14-tf02",
      "context": "Trong giờ học vẽ đường cong Bézier, bạn Tuấn thực hành uốn nắn một chiếc bình hoa gốm sứ đối xứng:",
      "statements": [
        {
          "text": "Tuấn dùng công cụ Draw Bezier Curves (phím B) để vẽ một nửa thân bình hoa bằng các đoạn thẳng và đường cong.",
          "answer": true,
          "explain": "Đúng. Vẽ một nửa đối xứng rồi nhân bản lật gương là kĩ thuật thiết kế cơ bản."
        },
        {
          "text": "Tuấn dùng công cụ Node Tool (phím N) để kéo các tay nắm điều khiển uốn cong mềm mại các đường nét thân bình.",
          "answer": true,
          "explain": "Đúng. Node tool uốn nắn đường cong qua cần điều khiển."
        },
        {
          "text": "Sau khi vẽ xong nửa thân bình, Tuấn nhân bản bằng Ctrl + D và bấm nút lật ngang (Flip horizontally) để tạo nửa còn lại.",
          "answer": true,
          "explain": "Đúng. Lật gương đối xứng tạo sản phẩm hoàn hảo 100%."
        },
        {
          "text": "Đường cong Bézier trong Inkscape được vẽ bằng các hạt màu pixel chấm rời rạc nên khi phóng to sẽ bị nhòe nét.",
          "answer": false,
          "explain": "Sai. Đường Bézier là đối tượng vector toán học thuần túy, phóng to vô hạn không bao giờ vỡ nét."
        }
      ]
    },
    {
      "id": "b14-tf03",
      "context": "Xét các loại điểm neo (Node) trong phần mềm đồ họa Inkscape:",
      "statements": [
        {
          "text": "Điểm neo góc nhọn (Cusp node) cho phép hai tay nắm điều khiển độc lập về góc quay và độ dài.",
          "answer": true,
          "explain": "Đúng. Định nghĩa điểm neo góc nhọn."
        },
        {
          "text": "Điểm neo trơn (Smooth node) giữ cho hai tay nắm luôn thẳng hàng nhau, tạo tiếp tuyến cong liên tục.",
          "answer": true,
          "explain": "Đúng. Định nghĩa điểm neo trơn mềm."
        },
        {
          "text": "Điểm neo đối xứng (Symmetric node) là điểm neo trơn mà hai tay nắm có độ dài luôn luôn bằng nhau tuyệt đối.",
          "answer": true,
          "explain": "Đúng. Symmetric node cân bằng cả hướng và độ dài tay nắm."
        },
        {
          "text": "Người dùng không thể chuyển đổi qua lại giữa điểm neo góc nhọn và điểm neo trơn mềm.",
          "answer": false,
          "explain": "Sai. Các nút trên Tool Controls cho phép chuyển đổi tức thì giữa các kiểu điểm neo."
        }
      ]
    },
    {
      "id": "b14-tf04",
      "context": "Để chuẩn bị gửi tệp thiết kế poster đến nhà in in ấn chuyên nghiệp:",
      "statements": [
        {
          "text": "Người thiết kế nên chọn toàn bộ các đoạn văn bản tiêu đề rồi bấm Path -> Object to Path.",
          "answer": true,
          "explain": "Đúng. Chuyển chữ thành vector (Convert to Path / Outline) giúp tránh hoàn toàn lỗi thiếu phông chữ tại xưởng in."
        },
        {
          "text": "Sau khi đã chuyển văn bản thành đối tượng đường (Object to Path), người dùng vẫn có thể dùng công cụ Text để sửa lại lỗi chính tả.",
          "answer": false,
          "explain": "Sai. Khi đã biến thành vector, văn bản trở thành các hình vẽ thông thường, không thể gõ sửa chữ cái được nữa."
        },
        {
          "text": "Nên lưu một tệp gốc dạng tệp chữ để sửa đổi khi cần, và một tệp xuất bản đã rã phông để gửi đi in.",
          "answer": true,
          "explain": "Đúng. Đây là quy trình làm việc chuẩn mực chuyên nghiệp của nhà thiết kế."
        },
        {
          "text": "Tệp SVG xuất bản từ Inkscape hoàn toàn có thể mở và in trực tiếp trên các máy in phun màu hoặc máy in bạt khổ lớn.",
          "answer": true,
          "explain": "Đúng. SVG được các phần mềm in ấn công nghiệp hỗ trợ chuẩn mực."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b14-es01",
      "q": "Trình bày quy trình 4 bước cụ thể trên phần mềm Inkscape để tạo một dòng chữ uốn cong theo viền của một hình tròn (ví dụ: tạo dòng chữ 'ĐOÀN TNCS HỒ CHÍ MINH' trên huy hiệu Đoàn). Nêu cách xử lí đường tròn dẫn hướng để khi xuất bản hình ảnh con dấu không bị lộ viền tròn thừa.",
      "answer": "1. Quy trình 4 bước uốn chữ theo hình tròn trong Inkscape:\n- Bước 1 (Tạo đường dẫn): Dùng công cụ Circle (phím E), giữ phím Ctrl kéo chuột để vẽ một hình tròn có kích thước vừa vặn với con dấu mong muốn.\n- Bước 2 (Gõ văn bản): Chọn công cụ Text (phím T), nhấp chuột trên trang vẽ và gõ dòng chữ in hoa: 'ĐOÀN TNCS HỒ CHÍ MINH'; chọn phông chữ đậm nét, hỗ trợ tiếng Việt Unicode hoàn chỉnh (như Arial hoặc Roboto Bold).\n- Bước 3 (Thực hiện uốn chữ): Dùng công cụ Select (phím S), giữ phím Shift nhấp chọn đồng thời cả dòng chữ và hình tròn vừa vẽ; vào thanh thực đơn Text -> chọn 'Put on Path'. Dòng chữ sẽ tự động uốn lượn bám theo đường cong của hình tròn.\n- Bước 4 (Căn chỉnh vị trí): Nhấp chọn riêng hình tròn, nhấp chuột thêm lần nữa để hiện các mũi tên xoay quanh tâm, xoay hình tròn để đưa dòng chữ về đúng vị trí cân đối ở nửa trên con dấu.\n\n2. Cách xử lí đường tròn dẫn hướng để không lộ viền thừa:\n- Tuyệt đối KHÔNG xóa hình tròn bằng phím Delete (vì nếu xóa đường dẫn, dòng chữ sẽ mất quỹ đạo và duỗi thẳng lại như cũ).\n- Cách xử lí chuẩn: Nhấp chọn riêng hình tròn dẫn hướng, mở hộp thoại Fill and Stroke (Shift + Ctrl + F), ở tab Fill chọn 'No paint' (X) và ở tab Stroke paint cũng chọn 'No paint' (X). Khi đó đường tròn trở nên hoàn toàn trong suốt (tàng hình), mắt người không nhìn thấy nhưng nó vẫn đóng vai trò là khung giữ cho dòng chữ uốn cong hoàn hảo."
    },
    {
      "id": "b14-es02",
      "q": "Phân biệt 3 loại điểm neo (Node) cơ bản trong Inkscape: Điểm neo góc nhọn (Cusp node), Điểm neo trơn (Smooth node) và Điểm neo đối xứng (Symmetric node). Trong tình huống vẽ cánh hoa hồng uốn lượn mềm mại và vẽ góc nhọn của ngôi sao, em sẽ sử dụng loại điểm neo nào? Vì sao?",
      "answer": "1. Phân biệt 3 loại điểm neo cơ bản:\n- Điểm neo góc nhọn (Cusp / Corner Node):\n  + Đặc điểm: Hai tay nắm điều khiển chuyển động hoàn toàn độc lập với nhau cả về phương hướng lẫn độ dài.\n  + Hình dáng đường nét: Tạo ra khúc gấp khúc, đổi hướng đột ngột với góc nhọn hoặc góc vuông sắc sảo.\n- Điểm neo trơn (Smooth Node):\n  + Đặc điểm: Hai tay nắm điều khiển luôn nằm trên một đường thẳng đối xứng hướng (cùng một đường tiếp tuyến), nhưng độ dài của hai tay nắm có thể kéo dài ngắn khác nhau tùy ý.\n  + Hình dáng đường nét: Đảm bảo đường cong đi qua điểm neo luôn trơn tru, không có nếp gãy gấp khúc.\n- Điểm neo đối xứng (Symmetric Node):\n  + Đặc điểm: Là trường hợp đặc biệt của điểm neo trơn, hai tay nắm không những thẳng hàng mà độ dài của chúng luôn luôn bằng nhau tuyệt đối.\n  + Hình dáng đường nét: Tạo ra cung cong tròn trịa và cân đối tuyệt đối ở cả hai phía của điểm neo.\n\n2. Ứng dụng trong tình huống thực tế:\n- Khi vẽ góc nhọn của ngôi sao 5 cánh: Bắt buộc sử dụng Điểm neo góc nhọn (Cusp node). Vì cánh sao cần có góc gập sắc cạnh ở các đỉnh nhọn và các góc lõm, hai hướng đường nét gặp nhau tại một điểm đổi hướng đột ngột.\n- Khi vẽ đường viền cánh hoa hồng uốn lượn: Bắt buộc sử dụng Điểm neo trơn (Smooth node) hoặc Điểm neo đối xứng (Symmetric node). Vì cánh hoa trong tự nhiên có độ cong uyển chuyển, mềm mại; điểm neo trơn giúp đường nét không bị gãy góc thô ráp, tạo cảm giác mềm mại và chân thực cho bông hoa."
    }
  ]
};
