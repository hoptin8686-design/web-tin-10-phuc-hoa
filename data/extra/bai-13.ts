import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-13: Bổ sung các đối tượng đồ họa

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b13-tf01",
      "context": "Bạn Hùng thực hành thiết kế biểu tượng đám mây có mặt trăng khuyết ló ra phía sau trên Inkscape:",
      "statements": [
        {
          "text": "Hùng vẽ 4 hình tròn xếp chồng lên nhau rồi chọn Path -> Union để hợp thành một đám mây liền khối thống nhất.",
          "answer": true,
          "explain": "Đúng. Phép Union gộp các hình tròn thành một khối đám mây chuẩn mực."
        },
        {
          "text": "Để tạo mặt trăng khuyết, Hùng đặt hình tròn thứ hai đè lên hình tròn thứ nhất rồi chọn Path -> Difference để khoét thủng.",
          "answer": true,
          "explain": "Đúng. Phép Difference cắt bỏ phần giao nhau tạo vầng trăng khuyết."
        },
        {
          "text": "Hùng nhấn phím End trên bàn phím để đưa hình đám mây xuống dưới cùng, nằm sau mặt trăng khuyết.",
          "answer": false,
          "explain": "Sai. Mặt trăng ló sau đám mây nên mặt trăng phải nằm lớp dưới (bấm End cho mặt trăng), đám mây nằm lớp trên (bấm Home)."
        },
        {
          "text": "Hùng có thể điều chỉnh độ trong suốt Opacity của đám mây xuống 80% để nhìn mờ mờ thấy mặt trăng phía sau.",
          "answer": true,
          "explain": "Đúng. Giảm Opacity tạo hiệu ứng mây mờ ảo nhìn xuyên qua được."
        }
      ]
    },
    {
      "id": "b13-tf02",
      "context": "Trong buổi học về hộp thoại Fill and Stroke (Shift + Ctrl + F) trong Inkscape:",
      "statements": [
        {
          "text": "Tab Fill dùng để thiết lập màu tô bên trong của hình kín (tô đơn sắc, tô chuyển sắc, hoặc không tô màu).",
          "answer": true,
          "explain": "Đúng. Chức năng chính của tab Fill."
        },
        {
          "text": "Tab Stroke paint dùng để đặt màu sắc cho đường viền bao quanh hình.",
          "answer": true,
          "explain": "Đúng. Tab Stroke paint quản lí màu viền."
        },
        {
          "text": "Tab Stroke style cho phép nhập độ dày nét vẽ (Width) theo đơn vị milimet (mm) hoặc điểm ảnh (px).",
          "answer": true,
          "explain": "Đúng. Cho phép chọn nhiều đơn vị đo độ dày nét vẽ."
        },
        {
          "text": "Nếu bấm vào biểu tượng dấu nhân 'X' (No paint) trong tab Fill, hình vẽ sẽ bị xóa vĩnh viễn khỏi trang vẽ.",
          "answer": false,
          "explain": "Sai. Biểu tượng 'X' chỉ là bỏ màu tô (không tô màu trong suốt), đối tượng và đường viền vẫn tồn tại."
        }
      ]
    },
    {
      "id": "b13-tf03",
      "context": "Xét các phép toán ghép hình Boolean trong thực đơn Path của Inkscape:",
      "statements": [
        {
          "text": "Phép Intersection (Giao) chỉ giữ lại phần diện tích chung mà cả hai hình cùng đè lên nhau.",
          "answer": true,
          "explain": "Đúng. Định nghĩa phép Giao Intersection."
        },
        {
          "text": "Phép Exclusion (Hiệu đối xứng) giữ lại phần chung ở giữa và xóa bỏ toàn bộ phần riêng của hai hình.",
          "answer": false,
          "explain": "Sai. Exclusion ngược lại: giữ lại phần riêng bên ngoài và đục thủng phần chung ở giữa."
        },
        {
          "text": "Để thực hiện phép Union, người dùng phải dùng công cụ Select quét chọn ít nhất từ hai đối tượng trở lên.",
          "answer": true,
          "explain": "Đúng. Phép ghép hình đòi hỏi chọn từ 2 đối tượng trở lên."
        },
        {
          "text": "Các phép ghép hình Boolean chỉ áp dụng được trên ảnh chụp Bitmap chứ không dùng được trên các hình học Vector.",
          "answer": false,
          "explain": "Sai. Phép ghép Boolean là đặc trưng riêng biệt chỉ áp dụng cho đối tượng Vector trong thực đơn Path."
        }
      ]
    },
    {
      "id": "b13-tf04",
      "context": "Thiết kế một huy hiệu Đoàn thanh niên hình tròn có dải ruy băng lượn sóng phía dưới:",
      "statements": [
        {
          "text": "Học sinh có thể dùng tính năng Radial Gradient (tô tỏa tròn) để tạo hiệu ứng ánh kim loại phản chiếu cho huy hiệu.",
          "answer": true,
          "explain": "Đúng. Radial Gradient tạo hiệu ứng sáng bóng ở tâm lan ra mép hình."
        },
        {
          "text": "Sau khi thiết kế xong toàn bộ chi tiết, chọn tất cả rồi nhấn Ctrl + G giúp đóng gói huy hiệu thành một nhóm duy nhất dễ di chuyển.",
          "answer": true,
          "explain": "Đúng. Grouping giúp cố định vị trí tương đối giữa các thành phần."
        },
        {
          "text": "Khi tăng thông số Blur lên 50% cho nền huy hiệu, huy hiệu sẽ có đường viền vô cùng sắc nét và rõ ràng.",
          "answer": false,
          "explain": "Sai. Blur làm nhòe mờ mép hình, tăng lên 50% sẽ làm hình nhòe mờ như đám khói."
        },
        {
          "text": "Để căn giữa huy hiệu vào chính giữa trang giấy A4, học sinh dùng bảng Align and Distribute (Shift + Ctrl + A).",
          "answer": true,
          "explain": "Đúng. Bảng Align and Distribute hỗ trợ căn giữa trang hoàn hảo."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b13-es01",
      "q": "Trình bày bản chất và kết quả của 3 phép toán ghép hình Boolean trong thực đơn Path của Inkscape: Hợp (Union), Hiệu (Difference) và Giao (Intersection). Nêu một ví dụ ứng dụng thực tế cho mỗi phép toán đó khi thiết kế đồ họa.",
      "answer": "1. Phép Hợp (Union - Ctrl + +):\n- Bản chất: Gộp hai hoặc nhiều đối tượng hình học đang giao nhau thành MỘT đối tượng duy nhất có đường bao ngoài cùng bao trọn tất cả các hình con.\n- Ứng dụng: Vẽ hình đám mây (vẽ nhiều hình tròn to nhỏ chồng lấn rồi Union lại) hoặc vẽ người tuyết, quả hồ lô.\n\n2. Phép Hiệu (Difference - Ctrl + -):\n- Bản chất: Dùng đối tượng nằm ở lớp trên làm 'khuôn cắt' để khoét đục, loại bỏ phần giao nhau ra khỏi đối tượng nằm ở lớp dưới.\n- Ứng dụng: Vẽ mặt trăng lưỡi liềm (vẽ 2 hình tròn đè lệch nhau rồi Difference) hoặc vẽ chiếc bánh quy bị cắn một miếng ở góc.\n\n3. Phép Giao (Intersection - Ctrl + *):\n- Bản chất: Chỉ giữ lại duy nhất phần diện tích chồng lấn chung giữa các hình được chọn; toàn bộ các phần diện tích bên ngoài không giao nhau sẽ bị xóa bỏ.\n- Ứng dụng: Vẽ chiếc lá cây xanh (vẽ 2 hình tròn đè một phần lên nhau rồi Intersection để lấy phần cong bầu dục nhọn 2 đầu ở giữa)."
    },
    {
      "id": "b13-es02",
      "q": "Hộp thoại Fill and Stroke trong Inkscape gồm 3 thẻ (tab) chức năng nào? Nêu vai trò của từng thẻ và giải thích ý nghĩa của thông số 'Opacity' (Độ mờ đục) đối với một đối tượng đồ họa.",
      "answer": "1. Ba thẻ (tab) chức năng của hộp thoại Fill and Stroke (Shift + Ctrl + F):\n- Thẻ Fill (Màu tô): Điều chỉnh màu sắc bên trong lòng đối tượng. Hỗ trợ các chế độ: No paint (trong suốt không tô), Flat color (tô màu đơn sắc), Linear gradient (tô chuyển sắc thẳng), Radial gradient (tô chuyển sắc tỏa tròn), Pattern (tô họa tiết).\n- Thẻ Stroke paint (Màu vẽ viền): Thiết lập màu sắc cho đường nét bao quanh đối tượng với các chế độ tương tự như thẻ Fill.\n- Thẻ Stroke style (Kiểu nét vẽ): Tinh chỉnh các thông số kĩ thuật của đường viền gồm: Độ dày nét (Width), kiểu nét (Dashes: nét liền, nét đứt, chấm gạch), kiểu nối góc (Join: nhọn, tròn, vát) và kiểu đầu mút đường vẽ (Cap: vuông, tròn).\n\n2. Ý nghĩa của thông số Opacity (Độ mờ đục):\n- Quy định mức độ trong suốt tổng thể của toàn bộ đối tượng (bao gồm cả màu tô và màu viền).\n- Giá trị chạy từ 0% đến 100%:\n  + 100%: Đối tượng hoàn toàn đặc (đục), che khuất hoàn toàn các đối tượng nằm ở lớp phía dưới.\n  + 0%: Đối tượng trong suốt hoàn toàn (vô hình).\n  + Từ 1% đến 99%: Đối tượng bán trong suốt, cho phép nhìn thấy mờ mờ các hình khối và màu sắc nằm ở lớp dưới, tạo hiệu ứng thủy tinh, làn sương, kính màu hoặc bóng đổ nghệ thuật."
    }
  ]
};
