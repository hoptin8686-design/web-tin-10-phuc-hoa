import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-05: Dữ liệu lôgic
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b05-q01",
    "q": "Kiểu dữ liệu lôgic (Boolean) chỉ nhận một trong hai giá trị nào dưới đây?",
    "options": [
      "Đúng (True / quy ước số 1) hoặc Sai (False / quy ước số 0).",
      "Số nguyên dương hoặc số nguyên âm trên trục số thực.",
      "Chữ in hoa hoặc chữ in thường trong bảng mã chữ cái.",
      "Tập tin hình ảnh hoặc tập tin video đa phương tiện."
    ],
    "answer": 0,
    "explain": "Dữ liệu logic chỉ nhận 1 trong 2 chân trị: Đúng (True/1) hoặc Sai (False/0)."
  },
  {
    "id": "b05-q02",
    "q": "Phép toán lôgic 'VÀ' (AND / Hội) cho kết quả là True (Đúng) khi nào?",
    "options": [
      "Khi TẤT CẢ các mệnh đề thành phần đều có giá trị Đúng (True).",
      "Khi chỉ cần CÓ ÍT NHẤT một mệnh đề thành phần có giá trị Đúng.",
      "Khi toàn bộ các mệnh đề thành phần đều có giá trị Sai (False).",
      "Khi mệnh đề thứ nhất Đúng còn mệnh đề thứ hai mang giá trị Sai."
    ],
    "answer": 0,
    "explain": "Phép AND (nhân logic) chỉ đúng khi tất cả các biểu thức tham gia đều đúng: 1 AND 1 = 1; chỉ cần 1 toán hạng bằng 0 thì kết quả bằng 0."
  },
  {
    "id": "b05-q03",
    "q": "Phép toán lôgic 'HOẶC' (OR / Tuyển) cho kết quả là False (Sai) khi nào?",
    "options": [
      "Khi TẤT CẢ các mệnh đề thành phần đều có giá trị Sai (False).",
      "Khi có ít nhất một mệnh đề thành phần có giá trị Đúng (True).",
      "Khi mệnh đề thứ nhất Đúng còn mệnh đề thứ hai mang giá trị Sai.",
      "Trong mọi trường hợp phép OR không bao giờ cho ra kết quả Sai."
    ],
    "answer": 0,
    "explain": "Phép OR (cộng logic) chỉ sai khi tất cả các toán hạng đều sai: 0 OR 0 = 0. Nếu có ít nhất một toán hạng bằng 1 thì kết quả là 1."
  },
  {
    "id": "b05-q04",
    "q": "Phép toán lôgic 'PHỦ ĐỊNH' (NOT) có chức năng gì đối với một giá trị lôgic?",
    "options": [
      "Đảo ngược giá trị: biến Đúng (True) thành Sai (False) và ngược lại.",
      "Nhân đôi giá trị chân lí của mệnh đề ban đầu lên hai lần.",
      "Luôn luôn trả về giá trị Đúng (True) trong mọi tình huống tính toán.",
      "Xóa bỏ mệnh đề đó ra khỏi chương trình máy tính đang thực thi."
    ],
    "answer": 0,
    "explain": "Phép NOT là phép toán một ngôi thực hiện đảo chân trị: NOT True = False, NOT False = True."
  },
  {
    "id": "b05-q05",
    "q": "Phép toán lôgic 'HOẶC LOẠI TRỪ' (XOR) cho kết quả là True khi nào?",
    "options": [
      "Khi hai toán hạng có giá trị chân lí khác nhau (một Đúng và một Sai).",
      "Khi cả hai toán hạng đều có cùng giá trị Đúng (True) như nhau.",
      "Khi cả hai toán hạng đều có cùng giá trị Sai (False) như nhau.",
      "Trong mọi trường hợp phép toán XOR luôn luôn trả về giá trị Sai."
    ],
    "answer": 0,
    "explain": "XOR (Exclusive OR) trả về True khi 2 toán hạng khác nhau: 1 XOR 0 = 1, 0 XOR 1 = 1; trả về 0 khi 2 toán hạng giống nhau: 0 XOR 0 = 0, 1 XOR 1 = 0."
  },
  {
    "id": "b05-q06",
    "q": "Cho hai biến lôgic A = True và B = False. Giá trị của biểu thức (A AND B) OR (NOT B) là gì?",
    "options": [
      "True (vì A AND B = False, NOT B = True, do đó False OR True = True).",
      "False (vì có toán hạng B = False làm toàn bộ biểu thức trở thành False).",
      "Không xác định được giá trị vì hai biến A và B có chân trị mâu thuẫn.",
      "Bằng 0 trong mọi trường hợp do có sự xuất hiện của phép toán AND."
    ],
    "answer": 0,
    "explain": "A AND B = True AND False = False. NOT B = NOT False = True. False OR True = True."
  },
  {
    "id": "b05-q07",
    "q": "Bảng chân trị (Truth Table) trong Tin học dùng để làm gì?",
    "options": [
      "Liệt kê toàn bộ các tổ hợp giá trị đầu vào có thể có và kết quả đầu ra tương ứng.",
      "Ghi lại danh sách điểm số môn Tin học của toàn bộ học sinh trong trường.",
      "Đo lường tốc độ xung nhịp hoạt động của bộ vi xử lí CPU trong máy tính.",
      "Thống kê số lượng vi mạch bán dẫn có mặt trong một con chip máy tính."
    ],
    "answer": 0,
    "explain": "Bảng chân trị biểu diễn bảng các giá trị của hàm logic ứng với mọi tổ hợp chân trị của các biến đầu vào."
  },
  {
    "id": "b05-q08",
    "q": "Ứng dụng quan trọng nhất của đại số lôgic trong phần cứng máy tính là gì?",
    "options": [
      "Thiết kế các cổng lôgic (AND, OR, NOT) tạo nên các mạch xử lí dữ liệu trong CPU.",
      "Làm mát cho các phiến tản nhiệt của card đồ họa khi chơi game nặng.",
      "Tăng dung lượng pin cho các thiết bị di động thông minh không bị chai pin.",
      "Làm cho màn hình máy tính có thể uốn cong mà không bị vỡ kính bảo vệ."
    ],
    "answer": 0,
    "explain": "Đại số Boole là nền tảng lí thuyết để thiết kế các cổng logic điện tử, ghép nối thành bộ số học và logic ALU trong chip vi xử lý."
  },
  {
    "id": "b05-q09",
    "q": "Trong ngôn ngữ lập trình, biểu thức điều kiện trong câu lệnh rẽ nhánh 'nếu... thì' thuộc kiểu dữ liệu nào?",
    "options": [
      "Kiểu lôgic (biểu thức trả về True thì thực hiện lệnh, False thì bỏ qua).",
      "Kiểu xâu kí tự văn bản dài nhiều trang trên màn hình soạn thảo.",
      "Kiểu số thực dấu phẩy động với độ chính xác vô hạn sau dấu phẩy.",
      "Kiểu tệp tin âm thanh ghi âm giọng nói của người lập trình viên."
    ],
    "answer": 0,
    "explain": "Điều kiện rẽ nhánh (if condition) bắt buộc là biểu thức logic cho ra True hoặc False để quyết định luồng rẽ nhánh."
  },
  {
    "id": "b05-q10",
    "q": "Cổng lôgic nào sau đây có một đầu vào và một đầu ra duy nhất?",
    "options": [
      "Cổng NOT (cổng đảo).",
      "Cổng AND (cổng và).",
      "Cổng OR (cổng hoặc).",
      "Cổng XOR (cổng hoặc loại trừ)."
    ],
    "answer": 0,
    "explain": "Cổng NOT là cổng một đầu vào: tín hiệu vào 1 thì ra 0, vào 0 thì ra 1. Các cổng AND, OR, XOR có từ 2 đầu vào trở lên."
  },
  {
    "id": "b05-q11",
    "q": "Biểu thức lôgic nào sau đây luôn luôn có giá trị True với mọi giá trị của biến A?",
    "options": [
      "A OR (NOT A) (luật bài trung: một mệnh đề hoặc đúng hoặc phủ định của nó đúng).",
      "A AND (NOT A) (luật mâu thuẫn: một mệnh đề không thể vừa đúng vừa sai).",
      "A AND True (giá trị luôn phụ thuộc hoàn toàn vào giá trị của biến A).",
      "A XOR A (hai giá trị giống hệt nhau luôn luôn cho ra kết quả False)."
    ],
    "answer": 0,
    "explain": "Theo luật bài trung: A OR (NOT A) luôn bằng True (nếu A=1 thì 1 OR 0 = 1; nếu A=0 thì 0 OR 1 = 1)."
  },
  {
    "id": "b05-q12",
    "q": "Biểu thức lôgic nào sau đây luôn luôn có giá trị False với mọi giá trị của biến A?",
    "options": [
      "A AND (NOT A) (một điều không thể vừa xảy ra vừa không xảy ra cùng lúc).",
      "A OR (NOT A) (biểu thức này luôn luôn có giá trị bằng True).",
      "A OR False (biểu thức này có giá trị đúng bằng giá trị của biến A).",
      "NOT (NOT A) (phủ định hai lần quay trở về đúng giá trị ban đầu của A)."
    ],
    "answer": 0,
    "explain": "Theo luật mâu thuẫn: A AND (NOT A) luôn bằng False (1 AND 0 = 0, 0 AND 1 = 0)."
  },
  {
    "id": "b05-q13",
    "q": "Định luật De Morgan nào sau đây là đúng trong đại số lôgic?",
    "options": [
      "NOT (A AND B) = (NOT A) OR (NOT B).",
      "NOT (A AND B) = (NOT A) AND (NOT B).",
      "NOT (A OR B) = (NOT A) OR (NOT B).",
      "NOT (A AND B) = A OR B."
    ],
    "answer": 0,
    "explain": "Định luật De Morgan: Phủ định của tích bằng tổng các phủ định: NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B."
  },
  {
    "id": "b05-q14",
    "q": "Trong mạch điện thực tế, hai công tắc điện mắc NỐI TIẾP nhau tương ứng với phép toán lôgic nào?",
    "options": [
      "Phép toán AND (dòng điện chỉ chạy qua khi CẢ HAI công tắc cùng đóng).",
      "Phép toán OR (chỉ cần một trong hai công tắc đóng là đèn sẽ sáng ngay).",
      "Phép toán NOT (đảo ngược trạng thái hoạt động của bóng đèn chiếu sáng).",
      "Phép toán XOR (chỉ sáng khi một công tắc đóng và một công tắc mở)."
    ],
    "answer": 0,
    "explain": "Mắc nối tiếp: Cả công tắc 1 VÀ công tắc 2 cùng đóng thì mạch mới kín -> mô phỏng phép AND."
  },
  {
    "id": "b05-q15",
    "q": "Trong mạch điện thực tế, hai công tắc điện mắc SONG SONG nhau tương ứng với phép toán lôgic nào?",
    "options": [
      "Phép toán OR (chỉ cần công tắc này HOẶC công tắc kia đóng là đèn sẽ sáng).",
      "Phép toán AND (bắt buộc cả hai công tắc phải cùng đóng cùng một lúc).",
      "Phép toán NOT (làm ngắt toàn bộ nguồn điện của hệ thống lưới điện).",
      "Phép toán bù hai (làm đổi chiều dòng điện xoay chiều thành một chiều)."
    ],
    "answer": 0,
    "explain": "Mắc song song: Đóng công tắc 1 HOẶC công tắc 2 thì mạch đều thông -> mô phỏng phép OR."
  },
  {
    "id": "b05-q16",
    "q": "Một hệ thống báo cháy tự động sẽ kích hoạt còi báo động khi: (Cảm biến nhiệt phát hiện nhiệt độ cao) HOẶC (Cảm biến khói phát hiện có khói). Đây là ứng dụng của phép toán:",
    "options": [
      "Phép toán OR (chỉ cần một trong hai điều kiện nguy hiểm xảy ra là chuông reo).",
      "Phép toán AND (phải đợi cả nhiệt độ cao lẫn có khói dày đặc mới báo động).",
      "Phép toán NOT (chỉ báo động khi không có nhiệt độ cao và không có khói).",
      "Phép toán chia lấy dư (đếm số lần tín hiệu nhiệt độ dao động trong một giờ)."
    ],
    "answer": 0,
    "explain": "Hệ thống an toàn sử dụng logic OR: Cảm biến nhiệt OR Cảm biến khói = Kích hoạt còi báo, đảm bảo an toàn tối đa."
  }
];
