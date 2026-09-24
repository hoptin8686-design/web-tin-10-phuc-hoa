import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-13: Bổ sung các đối tượng đồ họa
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b13-q01",
    "q": "Hộp thoại nào trong Inkscape cho phép tinh chỉnh chi tiết màu tô, màu viền, độ mờ đục và kiểu nét vẽ?",
    "options": [
      "Hộp thoại Fill and Stroke (phím tắt Shift + Ctrl + F).",
      "Hộp thoại Font and Text (phím tắt Shift + Ctrl + T).",
      "Hộp thoại Align and Distribute (phím tắt Shift + Ctrl + A).",
      "Hộp thoại Export PNG Image (phím tắt Shift + Ctrl + E)."
    ],
    "answer": 0,
    "explain": "Shift + Ctrl + F mở hộp thoại Fill and Stroke gồm 3 tab: Fill (Màu tô), Stroke paint (Màu vẽ viền), Stroke style (Kiểu nét vẽ)."
  },
  {
    "id": "b13-q02",
    "q": "Kiểu tô màu chuyển sắc (Gradient) trong Inkscape có tác dụng gì?",
    "options": [
      "Tạo hiệu ứng chuyển màu mềm mại từ màu này sang màu khác, làm hình vẽ có chiều sâu và sống động.",
      "Làm cho hình vẽ tự động biến mất khỏi trang vẽ khi in ra máy in màu.",
      "Chỉ cho phép tô đúng hai màu đen và trắng đối xứng nhau qua tâm hình.",
      "Làm tăng độ dày của đường viền bao quanh hình lên mức tối đa."
    ],
    "answer": 0,
    "explain": "Tô chuyển sắc (Linear hoặc Radial Gradient) tạo dải màu biến thiên mượt mà, giúp tạo khối 3D và ánh sáng tự nhiên."
  },
  {
    "id": "b13-q03",
    "q": "Thông số độ mờ đục 'Opacity' (tính theo phần trăm %) trong hộp thoại Fill and Stroke quy định điều gì?",
    "options": [
      "Độ trong suốt của đối tượng: 100% là đặc hoàn toàn, giảm dần về 0% thì đối tượng trong suốt nhìn thấu nền bên dưới.",
      "Tốc độ di chuyển của đối tượng khi người dùng kéo thả chuột trên màn hình máy tính.",
      "Số lượng điểm ảnh pixel tối đa mà đối tượng đồ họa đó có thể hiển thị ra màn hình.",
      "Góc nghiêng của bóng đổ phía sau đối tượng đồ họa khi chiếu đèn sân khấu vào."
    ],
    "answer": 0,
    "explain": "Opacity điều khiển độ trong suốt của cả đối tượng (gồm cả fill và stroke), từ 0% (vô hình hoàn toàn) đến 100% (đục hoàn toàn)."
  },
  {
    "id": "b13-q04",
    "q": "Phép ghép hình Boolean 'Hợp' (Union - phím tắt Ctrl + +) giữa hai hình vẽ có tác dụng gì?",
    "options": [
      "Hợp nhất hai hay nhiều hình đang giao nhau thành MỘT hình đơn nhất mang đường bao chung ngoài cùng.",
      "Cắt bỏ toàn bộ phần giao nhau và chỉ giữ lại các phần không chạm vào nhau của hai hình.",
      "Chia nhỏ hai hình vẽ thành hàng trăm mảnh ghép rời rạc nằm rải rác trên trang vẽ.",
      "Đổi màu tô của cả hai hình sang màu xanh lá cây đậm một cách tự động."
    ],
    "answer": 0,
    "explain": "Phép Union (Path -> Union) gộp các hình thành một hình duy nhất có đường biên ngoài bao trọn tất cả các hình."
  },
  {
    "id": "b13-q05",
    "q": "Phép ghép hình Boolean 'Hiệu' (Difference - phím tắt Ctrl + -) thực hiện thao tác nào?",
    "options": [
      "Dùng hình nằm ở lớp trên để khoét đục (cắt bỏ) một phần tương ứng khỏi hình nằm ở lớp dưới.",
      "Hợp nhất cả hai hình lại thành một khối hình học duy nhất có màu sắc của hình nằm trên.",
      "Nhân đôi hình nằm ở lớp dưới lên làm hai bản sao đặt đối xứng nhau qua trục ngang.",
      "Tự động vẽ thêm một đường thẳng nối giữa tâm của hai hình vẽ đang được chọn."
    ],
    "answer": 0,
    "explain": "Phép Difference (Path -> Difference) lấy hình dưới TRỪ ĐI phần giao nhau với hình trên (ví dụ dùng hình tròn nhỏ khoét hình tròn lớn tạo mặt trăng khuyết)."
  },
  {
    "id": "b13-q06",
    "q": "Để tạo ra hình một vầng trăng khuyết mềm mại, ta có thể áp dụng phép ghép hình nào trong Inkscape?",
    "options": [
      "Vẽ hai hình tròn chồng lên nhau rồi áp dụng phép Hiệu (Path -> Difference).",
      "Vẽ hai hình vuông rồi áp dụng phép Hợp (Path -> Union) để gộp lại.",
      "Vẽ một hình sao năm cánh rồi dùng công cụ Tẩy xóa đi 3 cánh nhọn.",
      "Dùng công cụ văn bản gõ chữ cái 'C' hoa rồi phóng to lên kích thước lớn."
    ],
    "answer": 0,
    "explain": "Vẽ hình tròn 1 (dưới), vẽ hình tròn 2 (trên) đè lệch lên hình tròn 1, chọn cả hai rồi bấm Path -> Difference để khoét ra trăng khuyết."
  },
  {
    "id": "b13-q07",
    "q": "Phép ghép hình Boolean 'Giao' (Intersection - phím tắt Ctrl + *) giữ lại phần nào của hai hình?",
    "options": [
      "Chỉ giữ lại duy nhất phần chung (phần giao nhau chồng lấn) giữa các hình đang chọn.",
      "Giữ lại toàn bộ các phần bên ngoài và xóa sạch hoàn toàn phần giao nhau ở giữa.",
      "Xóa sạch cả hai hình và thay thế bằng một hình chữ nhật màu đen ở giữa trang.",
      "Nhân bản hình vẽ lên thành 4 bản sao đặt ở 4 góc của trang vẽ đồ họa."
    ],
    "answer": 0,
    "explain": "Intersection chỉ giữ lại diện tích chồng lấn chung giữa các hình được chọn; phần ngoài không giao nhau sẽ bị loại bỏ."
  },
  {
    "id": "b13-q08",
    "q": "Để vẽ hình chiếc lá cây đơn giản, ta có thể vẽ hai hình tròn giao nhau rồi áp dụng phép ghép hình nào?",
    "options": [
      "Phép Giao (Path -> Intersection).",
      "Phép Hợp (Path -> Union).",
      "Phép Hiệu (Path -> Difference).",
      "Phép Chia cắt (Path -> Division)."
    ],
    "answer": 0,
    "explain": "Hai hình tròn đè một phần lên nhau, phần chung chính là hình chiếc lá bầu dục nhọn 2 đầu -> áp dụng Path -> Intersection."
  },
  {
    "id": "b13-q09",
    "q": "Trong tab Stroke style của hộp thoại Fill and Stroke, mục 'Dashes' cho phép người vẽ làm gì?",
    "options": [
      "Chọn kiểu nét vẽ cho đường viền như nét đứt đoạn, nét chấm gạch, nét liền.",
      "Thay đổi màu sắc của đường viền từ màu đỏ sang màu vàng nghệ thuật.",
      "Làm cho hình vẽ tự động xoay tròn liên tục trên màn hình máy tính.",
      "Tăng tốc độ hiển thị hình ảnh trên các trang web có kết nối mạng chậm."
    ],
    "answer": 0,
    "explain": "Mục Dashes trong Stroke style cung cấp danh sách các kiểu nét đứt (dashed lines) đa dạng cho đường viền."
  },
  {
    "id": "b13-q10",
    "q": "Các tùy chọn kiểu góc 'Join' (Miter join, Round join, Bevel join) trong Stroke style quy định điều gì?",
    "options": [
      "Hình dáng của các điểm uốn góc nhọn của đường viền (góc nhọn góc vuông, bo tròn góc, vát phẳng góc).",
      "Khoảng cách giữa hai điểm ảnh pixel liên tiếp nhau trên màn hình hiển thị.",
      "Tỉ lệ phối trộn giữa màu đỏ và màu xanh lam trong mô hình màu RGB.",
      "Số lượng đối tượng tối đa được phép ghép lại với nhau trong một bản vẽ."
    ],
    "answer": 0,
    "explain": "Join quy định cách thể hiện góc gấp khúc của nét viền: Miter (góc nhọn sắc), Round (bo tròn mềm), Bevel (vát cạnh phẳng)."
  },
  {
    "id": "b13-q11",
    "q": "Phép ghép hình 'Hiệu đối xứng' (Exclusion - phím tắt Ctrl + ^) có tác dụng gì?",
    "options": [
      "Giữ lại toàn bộ các phần riêng không giao nhau và đục thủng phần giao nhau chung ở giữa.",
      "Gộp toàn bộ hai hình lại thành một khối đặc duy nhất không có bất kì lỗ thủng nào.",
      "Cắt hình bên dưới thành nhiều mảnh nhỏ độc lập theo đường viền của hình bên trên.",
      "Đảo ngược hoàn toàn các góc nhọn của hình ngôi sao từ hướng ra ngoài thành hướng vào trong."
    ],
    "answer": 0,
    "explain": "Exclusion (loại trừ phần chung): giữ lại phần không trùng lặp và làm rỗng (khoét thủng) phần giao nhau giữa hai hình."
  },
  {
    "id": "b13-q12",
    "q": "Khi thực hiện phép ghép hình Boolean trong Inkscape, thứ tự lớp trên/dưới của các đối tượng có quan trọng không?",
    "options": [
      "Rất quan trọng, đặc biệt với phép Hiệu (Difference) và Chia (Division) vì hình trên sẽ dùng để cắt hình dưới.",
      "Hoàn toàn không quan trọng, đối tượng nào nằm trên hay dưới cũng cho ra kết quả giống hệt nhau.",
      "Chỉ quan trọng khi người dùng vẽ các hình có màu sắc hoàn toàn giống hệt nhau.",
      "Chỉ quan trọng khi máy tính xách tay đang chạy bằng nguồn pin mà không cắm sạc điện."
    ],
    "answer": 0,
    "explain": "Trong phép Difference và Division, đối tượng nằm trên đóng vai trò là 'dao cắt' cắt vào đối tượng nằm dưới."
  },
  {
    "id": "b13-q13",
    "q": "Để chuyển một đối tượng hình học cơ bản (như hình chữ nhật, hình sao) thành đối tượng đường (Path) để có thể chỉnh sửa tự do từng điểm, ta dùng lệnh nào?",
    "options": [
      "Path -> Object to Path (phím tắt Shift + Ctrl + C).",
      "Edit -> Select All (phím tắt Ctrl + A).",
      "File -> Save As (phím tắt Shift + Ctrl + S).",
      "Object -> Group (phím tắt Ctrl + G)."
    ],
    "answer": 0,
    "explain": "Object to Path (Shift + Ctrl + C) biến các hình học mẫu thành đường nét với các điểm neo (node) để tùy biến tự do."
  },
  {
    "id": "b13-q14",
    "q": "Để thay đổi thứ tự lớp của đối tượng, đưa đối tượng đang chọn lên lớp trên cùng (Top), ta dùng phím nào?",
    "options": [
      "Phím Home (hoặc lệnh Object -> Raise to Top).",
      "Phím End (hoặc lệnh Object -> Lower to Bottom).",
      "Phím Page Up (đưa lên một mức).",
      "Phím Page Down (hạ xuống một mức)."
    ],
    "answer": 0,
    "explain": "Phím Home: Lên trên cùng (Top); End: Xuống dưới cùng (Bottom); Page Up: Lên 1 lớp; Page Down: Xuống 1 lớp."
  },
  {
    "id": "b13-q15",
    "q": "Trong hộp thoại Fill and Stroke, thông số 'Blur' (Độ nhòe) thường được sử dụng để tạo hiệu ứng gì?",
    "options": [
      "Tạo hiệu ứng bóng đổ (Drop Shadow) mềm mại hoặc tạo ánh sáng phát quang huyền ảo.",
      "Làm cho hình vẽ trở nên sắc nét hơn và rõ từng chi tiết đường viền bên ngoài.",
      "Tăng độ tương phản màu sắc của hình vẽ lên mức rực rỡ nhất có thể.",
      "Biến hình vẽ thành một đoạn văn bản có thể chỉnh sửa phông chữ được."
    ],
    "answer": 0,
    "explain": "Blur làm nhòe mờ rìa đối tượng, khi kết hợp với màu đen đặt phía sau và giảm Opacity sẽ tạo bóng đổ (shadow) rất tự nhiên."
  },
  {
    "id": "b13-q16",
    "q": "Để vẽ hình đám mây bồng bềnh trong Inkscape, kĩ thuật nhanh và đẹp nhất là:",
    "options": [
      "Vẽ nhiều hình tròn to nhỏ chồng lấn lên nhau rồi áp dụng phép Hợp (Path -> Union).",
      "Dùng bút chì vẽ tay từng đường gợn sóng ngoằn ngoèo trên màn hình cảm ứng.",
      "Chụp ảnh đám mây thật ngoài trời rồi dán trực tiếp vào phần mềm Inkscape.",
      "Gõ chữ 'Mây' bằng phông chữ nghệ thuật rồi tô màu trắng cho chữ cái đó."
    ],
    "answer": 0,
    "explain": "Ghép nhiều hình tròn to nhỏ khác nhau lại rồi dùng Path -> Union sẽ tạo ra đường viền đám mây uốn lượn hoàn hảo."
  }
];
