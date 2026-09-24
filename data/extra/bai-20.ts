import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-20: Câu lệnh lặp for

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b20-tf01",
      "context": "Xét đoạn chương trình Python sử dụng vòng lặp for để tính tổng và đếm các ước số của số nguyên dương N = 12:\ndem = 0\ntong = 0\nfor i in range(1, N + 1):\n    if N % i == 0:\n        dem += 1\n        tong += i",
      "statements": [
        {
          "text": "Vòng lặp for trên sẽ duyệt qua tất cả các giá trị số nguyên i từ 1 đến 12.",
          "answer": true,
          "explain": "Đúng. range(1, N + 1) với N = 12 sẽ sinh các số từ 1 đến 12."
        },
        {
          "text": "Điều kiện N % i == 0 dùng để kiểm tra xem i có phải là một ước số nguyên của N hay không.",
          "answer": true,
          "explain": "Đúng. N chia hết cho i (dư bằng 0) nghĩa là i là ước của N."
        },
        {
          "text": "Sau khi vòng lặp kết thúc, giá trị của biến dem bằng 6.",
          "answer": true,
          "explain": "Đúng. Các ước số của 12 là 1, 2, 3, 4, 6, 12; tổng cộng có 6 ước."
        },
        {
          "text": "Sau khi vòng lặp kết thúc, giá trị của biến tong bằng 24.",
          "answer": false,
          "explain": "Sai. Tổng các ước là 1 + 2 + 3 + 4 + 6 + 12 = 28."
        }
      ]
    },
    {
      "id": "b20-tf02",
      "context": "Một nhóm học sinh làm các bài tập trắc nghiệm về hàm range() trong các trường hợp tham số khác nhau:",
      "statements": [
        {
          "text": "Lệnh list(range(4)) sẽ tạo ra danh sách gồm các số [0, 1, 2, 3].",
          "answer": true,
          "explain": "Đúng. range(4) bắt đầu từ 0 và dừng trước 4."
        },
        {
          "text": "Lệnh range(3, 3) sẽ tạo ra một dãy chứa đúng một phần tử là số 3.",
          "answer": false,
          "explain": "Sai. Khi start == stop, range tạo ra dãy rỗng."
        },
        {
          "text": "Lệnh list(range(1, 10, 3)) sẽ tạo ra danh sách gồm các số [1, 4, 7].",
          "answer": true,
          "explain": "Đúng. 1, 1+3=4, 4+3=7, 7+3=10 (10 >= stop nên dừng)."
        },
        {
          "text": "Hàm range() có thể nhận các tham số là số thực float như range(1.5, 5.5, 0.5).",
          "answer": false,
          "explain": "Sai. Các tham số của range() bắt buộc phải là số nguyên int, nếu dùng float sẽ báo TypeError."
        }
      ]
    },
    {
      "id": "b20-tf03",
      "context": "Xem xét đoạn chương trình in bảng cửu chương 7 bằng vòng lặp for:\nfor i in range(1, 11):\n    print('7 x', i, '=', 7 * i)",
      "statements": [
        {
          "text": "Vòng lặp trên sẽ thực hiện đúng 10 lần in ra màn hình tương ứng i từ 1 đến 10.",
          "answer": true,
          "explain": "Đúng. range(1, 11) sinh các số từ 1 đến 10."
        },
        {
          "text": "Dòng in đầu tiên trên màn hình sẽ có nội dung là: 7 x 1 = 7.",
          "answer": true,
          "explain": "Đúng. Với i = 1, in ra '7 x 1 = 7'."
        },
        {
          "text": "Dòng in cuối cùng trên màn hình sẽ có nội dung là: 7 x 11 = 77.",
          "answer": false,
          "explain": "Sai. Dòng cuối cùng ứng với i = 10, in ra '7 x 10 = 70'."
        },
        {
          "text": "Nếu thay lệnh print thành print(f'7 x {i} = {7*i}') thì kết quả in ra vẫn không thay đổi.",
          "answer": true,
          "explain": "Đúng. Sử dụng f-string cho kết quả định dạng xâu tương đương."
        }
      ]
    },
    {
      "id": "b20-tf04",
      "context": "Xét đoạn mã vẽ hình chữ nhật đặc bằng các dấu sao '*' kích thước 3 hàng và 5 cột:\nfor r in range(3):\n    for c in range(5):\n        print('*', end='')\n    print()",
      "statements": [
        {
          "text": "Đoạn chương trình sử dụng cấu trúc hai vòng lặp for lồng nhau.",
          "answer": true,
          "explain": "Đúng. Vòng lặp biến c nằm bên trong thân vòng lặp biến r."
        },
        {
          "text": "Lệnh print('*', end='') giúp in các dấu sao trên cùng một hàng ngang.",
          "answer": true,
          "explain": "Đúng. end='' ngăn việc xuống dòng sau mỗi dấu sao."
        },
        {
          "text": "Lệnh print() đặt ở cuối thân vòng lặp ngoài có tác dụng ngắt dòng sau khi in hết một hàng.",
          "answer": true,
          "explain": "Đúng. print() không đối số in kí tự xuống dòng để bắt đầu hàng mới."
        },
        {
          "text": "Tổng số dấu sao '*' được in ra toàn bộ trên màn hình sau khi chạy xong là 8 dấu sao.",
          "answer": false,
          "explain": "Sai. Tổng số dấu sao là 3 * 5 = 15 dấu sao."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b20-es01",
      "q": "Trình bày cú pháp của câu lệnh lặp for trong Python. Giải thích chi tiết hoạt động của hàm range() trong ba trường hợp: một tham số, hai tham số và ba tham số. Nêu ví dụ cụ thể cho mỗi trường hợp.",
      "answer": "1. Cú pháp câu lệnh lặp for trong Python:\n```python\nfor <biến_đếm> in <vùng_lặp>:\n    <khối_lệnh>\n```\n- Hoạt động: Biến đếm lần lượt nhận từng giá trị trong vùng lặp (danh sách, xâu hoặc dãy sinh bởi range), mỗi lần nhận một giá trị thì thực hiện khối lệnh con thụt lề.\n\n2. Hoạt động của hàm range():\n- Trường hợp 1 tham số: `range(stop)`\n  + Sinh dãy số nguyên từ `0` đến `stop - 1` với bước tăng mặc định là 1.\n  + Ví dụ: `range(4)` sinh ra dãy: 0, 1, 2, 3.\n- Trường hợp 2 tham số: `range(start, stop)`\n  + Sinh dãy số nguyên từ `start` đến `stop - 1` với bước tăng mặc định là 1.\n  + Ví dụ: `range(2, 6)` sinh ra dãy: 2, 3, 4, 5.\n- Trường hợp 3 tham số: `range(start, stop, step)`\n  + Sinh dãy số từ `start` đến `stop - 1` (nếu step > 0) hoặc từ `start` đến `stop + 1` (nếu step < 0) với bước nhảy `step`.\n  + Ví dụ tăng: `range(1, 10, 2)` sinh ra dãy số lẻ: 1, 3, 5, 7, 9.\n  + Ví dụ giảm: `range(5, 0, -1)` sinh ra dãy lùi: 5, 4, 3, 2, 1."
    },
    {
      "id": "b20-es02",
      "q": "Viết chương trình Python nhập vào một số nguyên dương n từ bàn phím (n > 1). Sử dụng vòng lặp for để kiểm tra xem n có phải là số nguyên tố hay không và in ra thông báo kết luận rõ ràng trên màn hình.",
      "answer": "Chương trình Python kiểm tra số nguyên tố bằng vòng lặp for:\n\n```python\n# Nhập số nguyên dương n\nn = int(input('Nhập số nguyên dương n (n > 1): '))\n\n# Khởi tạo biến cờ hiệu (flag) giả định n là số nguyên tố\nla_nguyen_to = True\n\n# Duyệt từ 2 đến căn bậc hai của n (hoặc duyệt từ 2 đến n - 1)\nfor i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n        la_nguyen_to = False\n        break  # Tìm thấy ước số thì dừng ngay vòng lặp\n\n# In kết quả kết luận\nif la_nguyen_to and n > 1:\n    print(n, 'là số nguyên tố.')\nelse:\n    print(n, 'không phải là số nguyên tố.')\n```\n\nGiải thích thuật toán:\n- Số nguyên tố là số nguyên lớn hơn 1, chỉ có hai ước dương là 1 và chính nó.\n- Để tối ưu hóa thuật toán, chỉ cần kiểm tra các ước từ 2 đến phần nguyên căn bậc hai của n (`int(n ** 0.5)`). Nếu trong khoảng này n chia hết cho bất kỳ số nào thì n là hợp số (`la_nguyen_to = False`), ta dùng lệnh `break` để thoát ngay vòng lặp giúp tiết kiệm thời gian chạy."
    }
  ]
};
