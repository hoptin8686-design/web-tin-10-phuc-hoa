import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-20: Câu lệnh lặp for
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b20-q01",
    "q": "Cấu trúc lặp với số lần biết trước trong ngôn ngữ lập trình Python sử dụng câu lệnh nào sau đây?",
    "options": [
      "Câu lệnh for kết hợp với một tập hợp hoặc vùng dữ liệu có thể lặp tuần tự (iterable).",
      "Câu lệnh repeat kết hợp với điều kiện dừng until kiểm tra ở cuối mỗi vòng lặp.",
      "Câu lệnh loop kết hợp với từ khóa times để chỉ định số lần lặp trực tiếp của lệnh.",
      "Câu lệnh do kết hợp với điều kiện lặp while đặt ở cuối khối lệnh để kiểm tra."
    ],
    "answer": 0,
    "explain": "Trong Python, vòng lặp biết trước số lần được thực hiện bằng lệnh for in."
  },
  {
    "id": "b20-q02",
    "q": "Cú pháp chuẩn của câu lệnh lặp for trong Python được viết theo mẫu nào sau đây?",
    "options": [
      "for <biến_đếm> in <vùng_lặp>: theo sau là khối lệnh con được thụt lề vào trong.",
      "for (<khởi_tạo>; <điều_kiện>; <tăng>) { khối lệnh thực thi đặt trong ngoặc nhọn }.",
      "for <biến_đếm> := 1 to n do khối lệnh thực thi bắt đầu bằng begin và kết thúc end.",
      "for each <biến_đếm> of <danh_sách> loop khối lệnh kết thúc bằng từ khóa end loop."
    ],
    "answer": 0,
    "explain": "Cú pháp for trong Python: for <biến> in <vùng_lặp>:\n    <khối lệnh>"
  },
  {
    "id": "b20-q03",
    "q": "Hàm range(n) với một tham số nguyên dương n trong Python sinh ra dãy số nguyên nào?",
    "options": [
      "Dãy số nguyên bắt đầu từ số 0 và kết thúc tại số nguyên n - 1 (gồm đúng n phần tử).",
      "Dãy số nguyên bắt đầu từ số 1 và kết thúc tại số nguyên n (gồm đúng n phần tử).",
      "Dãy số nguyên bắt đầu từ số 0 và kết thúc tại số nguyên n (gồm đúng n + 1 phần tử).",
      "Dãy số nguyên ngẫu nhiên gồm n số khác nhau nằm trong khoảng từ 0 đến 100."
    ],
    "answer": 0,
    "explain": "range(n) sinh dãy số 0, 1, 2, ..., n-1 gồm n số."
  },
  {
    "id": "b20-q04",
    "q": "Lệnh range(2, 7) trong Python sẽ sinh ra dãy các giá trị số nguyên nào sau đây?",
    "options": [
      "Dãy gồm 5 số nguyên liên tiếp lần lượt là: 2, 3, 4, 5, 6 và dừng lại trước số 7.",
      "Dãy gồm 6 số nguyên liên tiếp lần lượt là: 2, 3, 4, 5, 6, 7 bao gồm cả hai đầu mút.",
      "Dãy gồm 5 số nguyên liên tiếp lần lượt là: 3, 4, 5, 6, 7 bắt đầu từ số liền sau 2.",
      "Dãy gồm 4 số nguyên liên tiếp lần lượt là: 2, 4, 6, 8 với bước nhảy cách nhau 2 đơn vị."
    ],
    "answer": 0,
    "explain": "range(start, stop) sinh từ start đến stop - 1. range(2, 7) sinh 2, 3, 4, 5, 6."
  },
  {
    "id": "b20-q05",
    "q": "Trong hàm range(start, stop, step), tham số thứ ba 'step' có ý nghĩa biểu thị điều gì?",
    "options": [
      "Bước nhảy (độ chênh lệch) giữa hai giá trị số nguyên liên tiếp trong dãy được sinh ra.",
      "Số lần lặp tối đa mà vòng lặp for được phép thực hiện trước khi tự động kết thúc.",
      "Giá trị bắt đầu mới nếu vòng lặp gặp sự cố lỗi tràn số trong quá trình thực thi.",
      "Số lượng phần tử tối thiểu cần được tạo ra trước khi cấp phát bộ nhớ cho chương trình."
    ],
    "answer": 0,
    "explain": "Tham số step là bước nhảy giữa các phần tử liên tiếp trong dãy số do range tạo ra."
  },
  {
    "id": "b20-q06",
    "q": "Dãy số nào được tạo ra bởi lệnh range(10, 2, -2) trong môi trường lập trình Python?",
    "options": [
      "Dãy giảm dần gồm 4 số nguyên: 10, 8, 6, 4 với bước nhảy lùi là 2 đơn vị mỗi lần.",
      "Dãy giảm dần gồm 5 số nguyên: 10, 8, 6, 4, 2 bao gồm cả giá trị chặn dưới là số 2.",
      "Dãy tăng dần gồm 4 số nguyên: 2, 4, 6, 8 bắt đầu từ cận dưới tiến lên cận trên 10.",
      "Một dãy rỗng không chứa phần tử nào vì giá trị bắt đầu 10 lớn hơn giá trị kết thúc 2."
    ],
    "answer": 0,
    "explain": "range(10, 2, -2) bắt đầu từ 10, giảm 2 đơn vị mỗi bước và dừng trước 2: 10, 8, 6, 4."
  },
  {
    "id": "b20-q07",
    "q": "Đoạn chương trình sau sẽ in ra màn hình bao nhiêu dòng kết quả?\nfor i in range(5):\n    print('Python')",
    "options": [
      "In ra đúng 5 dòng thông điệp 'Python' trên màn hình dòng lệnh tương ứng 5 lần lặp.",
      "In ra đúng 4 dòng thông điệp 'Python' trên màn hình dòng lệnh tương ứng 4 lần lặp.",
      "In ra đúng 6 dòng thông điệp 'Python' do biến đếm bắt đầu chạy từ 0 đến số 5.",
      "Chương trình báo lỗi vì biến đếm i không được sử dụng bên trong khối lệnh print."
    ],
    "answer": 0,
    "explain": "range(5) sinh ra 5 giá trị (0, 1, 2, 3, 4) nên vòng lặp chạy đúng 5 lần."
  },
  {
    "id": "b20-q08",
    "q": "Xem xét đoạn mã tính tổng sau:\ns = 0\nfor i in range(1, 6):\n    s = s + i\nprint(s)\nKết quả in ra là:",
    "options": [
      "Giá trị số nguyên 15 tương ứng với tổng của dãy số nguyên từ 1 đến 5 (1+2+3+4+5).",
      "Giá trị số nguyên 10 tương ứng với tổng của dãy số nguyên từ 1 đến 4 (1+2+3+4).",
      "Giá trị số nguyên 21 tương ứng với tổng của dãy số nguyên từ 1 đến 6 (1+2+3+4+5+6).",
      "Giá trị số nguyên 0 do biến s bị khởi tạo lại sau mỗi vòng lặp thực hiện tính toán."
    ],
    "answer": 0,
    "explain": "range(1, 6) gồm 1, 2, 3, 4, 5. Tổng s = 1 + 2 + 3 + 4 + 5 = 15."
  },
  {
    "id": "b20-q09",
    "q": "Khi thực hiện đoạn mã:\nfor ch in 'TIN':\n    print(ch, end='-')\nKết quả xuất hiện trên màn hình là gì?",
    "options": [
      "Xâu hiển thị là 'T-I-N-' do biến ch lần lượt nhận từng kí tự trong xâu 'TIN' để in ra.",
      "Xâu hiển thị là 'TIN-' do lệnh in chỉ nối dấu gạch ngang ở cuối chuỗi sau khi duyệt hết.",
      "Xâu hiển thị là 'T-I-N' không có dấu gạch ngang ở cuối do Python tự động ngắt chuỗi.",
      "Chương trình báo lỗi TypeError vì vòng lặp for không thể duyệt trên dữ liệu xâu kí tự."
    ],
    "answer": 0,
    "explain": "for ch in 'TIN' duyệt qua 'T', 'I', 'N', mỗi lần in ch kèm '-' nên in 'T-I-N-'."
  },
  {
    "id": "b20-q10",
    "q": "Để in ra các số chẵn trong phạm vi từ 2 đến 20 (bao gồm cả 20), hàm range nào sau đây được dùng chuẩn nhất?",
    "options": [
      "range(2, 21, 2) bắt đầu từ 2, kết thúc trước 21 và bước nhảy là 2 đơn vị mỗi lần tăng.",
      "range(2, 20, 2) bắt đầu từ 2, kết thúc trước 20 và bước nhảy là 2 đơn vị mỗi lần tăng.",
      "range(1, 21, 2) bắt đầu từ 1, kết thúc trước 21 và bước nhảy là 2 đơn vị mỗi lần tăng.",
      "range(0, 20, 2) bắt đầu từ 0, kết thúc trước 20 và bước nhảy là 2 đơn vị mỗi lần tăng."
    ],
    "answer": 0,
    "explain": "range(2, 21, 2) sinh ra 2, 4, 6, ..., 20 (dừng trước 21)."
  },
  {
    "id": "b20-q11",
    "q": "Vòng lặp for lồng nhau (nested loops) sau đây thực hiện bao nhiêu lần lệnh print('*')?\nfor i in range(3):\n    for j in range(4):\n        print('*', end='')",
    "options": [
      "Thực hiện đúng 12 lần lệnh print('*') tương ứng với tích của 3 hàng nhân với 4 cột.",
      "Thực hiện đúng 7 lần lệnh print('*') tương ứng với tổng số lần lặp của cả hai vòng for.",
      "Thực hiện đúng 4 lần lệnh print('*') tương ứng với số lần lặp của vòng for bên trong.",
      "Thực hiện đúng 3 lần lệnh print('*') tương ứng với số lần lặp của vòng for bên ngoài."
    ],
    "answer": 0,
    "explain": "Vòng ngoài lặp 3 lần, mỗi lần vòng trong lặp 4 lần. Tổng số lần là 3 * 4 = 12."
  },
  {
    "id": "b20-q12",
    "q": "Đoạn mã sau thực hiện thuật toán tính toán đại lượng nào?\np = 1\nfor i in range(1, n + 1):\n    p = p * i",
    "options": [
      "Tính n giai thừa (kí hiệu n!) bằng cách nhân dồn liên tiếp các số nguyên từ 1 đến n.",
      "Tính lũy thừa bậc n của cơ số 1 bằng cách nhân liên tiếp số 1 với chính nó n lần.",
      "Tính tổng các số nguyên liên tiếp từ 1 đến n theo công thức cấp số cộng toán học.",
      "Đếm số lượng các ước số dương của số nguyên n bằng cách kiểm tra phép chia hết."
    ],
    "answer": 0,
    "explain": "Nhân dồn p = p * i với i từ 1 đến n chính là công thức tính n giai thừa (n!)."
  },
  {
    "id": "b20-q13",
    "q": "Nếu trong vòng lặp for gặp câu lệnh break, điều gì sẽ xảy ra với quá trình lặp của chương trình?",
    "options": [
      "Vòng lặp for chứa lệnh break sẽ bị chấm dứt ngay lập tức và thoát ra ngoài thân lặp.",
      "Chương trình bỏ qua lần lặp hiện tại để chuyển sang thực hiện lần lặp kế tiếp ngay.",
      "Vòng lặp for sẽ tự động quay trở lại giá trị ban đầu và khởi động lại từ đầu.",
      "Hệ thống tạm dừng chương trình và yêu cầu người dùng nhập giá trị mới từ bàn phím."
    ],
    "answer": 0,
    "explain": "Lệnh break dùng để kết thúc và thoát ngay khỏi vòng lặp hiện tại."
  },
  {
    "id": "b20-q14",
    "q": "Xem xét đoạn mã sau:\ns = 0\nfor i in range(10):\n    if i == 3:\n        break\n    s = s + i\nGiá trị của biến s sau khi kết thúc vòng lặp là:",
    "options": [
      "Giá trị bằng 3 do vòng lặp chỉ kịp cộng hai số i = 0 và i = 1, i = 2 trước khi break.",
      "Giá trị bằng 6 do vòng lặp cộng các số 0, 1, 2, 3 rồi mới thực hiện lệnh break.",
      "Giá trị bằng 45 do lệnh break bị bỏ qua khi điều kiện i == 3 không được thỏa mãn.",
      "Giá trị bằng 0 do khi gặp break biến s tự động bị hoàn nguyên về giá trị khởi tạo."
    ],
    "answer": 0,
    "explain": "i = 0 -> s = 0; i = 1 -> s = 1; i = 2 -> s = 3; i = 3 -> gặp break thoát lặp ngay. Kết quả s = 3."
  },
  {
    "id": "b20-q15",
    "q": "Điều gì sẽ xảy ra khi chạy lệnh range(5, 1)?",
    "options": [
      "Trả về một vùng lặp rỗng không có phần tử nào vì bước nhảy mặc định là +1 đi lên.",
      "Sinh ra dãy số giảm dần gồm các số nguyên: 5, 4, 3, 2 theo logic suy diễn thông minh.",
      "Chương trình báo lỗi ValueError vì giá trị bắt đầu không được lớn hơn giá trị kết thúc.",
      "Sinh ra dãy số gồm 4 số nguyên: 1, 2, 3, 4 theo chiều tăng dần từ cận dưới lên."
    ],
    "answer": 0,
    "explain": "range(5, 1) có step mặc định là +1, vì start > stop nên tạo ra dãy rỗng, không lặp lần nào."
  },
  {
    "id": "b20-q16",
    "q": "Để đếm số lượng các số nguyên chia hết cho 5 trong đoạn từ 1 đến 100, cách thiết lập vòng lặp for nào sau đây ngắn gọn và tối ưu nhất?",
    "options": [
      "for i in range(5, 101, 5): sử dụng bước nhảy 5 để chỉ duyệt qua đúng các bội số của 5.",
      "for i in range(1, 100): kết hợp kiểm tra điều kiện if i % 5 == 0 bên trong thân lặp.",
      "for i in range(5, 100, 5): bỏ qua số 100 ở vị trí chặn trên của đoạn số cần kiểm tra.",
      "for i in range(1, 101): đếm tất cả các số và chia kết quả đếm cuối cùng cho số 5."
    ],
    "answer": 0,
    "explain": "range(5, 101, 5) trực tiếp duyệt qua các bội của 5 từ 5 đến 100, tối ưu nhất về số lần lặp."
  }
];
