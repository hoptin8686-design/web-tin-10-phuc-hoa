import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-21: Câu lệnh lặp while

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b21-tf01",
      "context": "Xét đoạn chương trình tính tổng nghịch đảo S = 1 + 1/2 + 1/3 + ... + 1/n cho đến khi số hạng 1/n nhỏ hơn 0.001:\nS = 0.0\ni = 1\nwhile 1 / i >= 0.001:\n    S += 1 / i\n    i += 1",
      "statements": [
        {
          "text": "Đoạn chương trình trên sử dụng cấu trúc lặp với số lần chưa biết trước.",
          "answer": true,
          "explain": "Đúng. Số lần lặp phụ thuộc vào điều kiện 1/i >= 0.001."
        },
        {
          "text": "Vòng lặp sẽ kết thúc ngay khi giá trị của 1 / i nhỏ hơn 0.001.",
          "answer": true,
          "explain": "Đúng. Khi 1/i < 0.001, điều kiện lặp nhận giá trị False và vòng lặp dừng."
        },
        {
          "text": "Nếu bỏ qua câu lệnh i += 1 thì chương trình sẽ rơi vào vòng lặp vô hạn.",
          "answer": true,
          "explain": "Đúng. Nếu không tăng i, 1/i luôn bằng 1 >= 0.001 dẫn đến lặp vô tận."
        },
        {
          "text": "Biến S sau khi chạy chương trình sẽ lưu kiểu dữ liệu số nguyên int.",
          "answer": false,
          "explain": "Sai. Phép chia 1/i tạo ra số thực nên S có kiểu float."
        }
      ]
    },
    {
      "id": "b21-tf02",
      "context": "Một học sinh viết đoạn mã kiểm tra tính hợp lệ của điểm số nhập vào từ bàn phím (yêu cầu điểm từ 0 đến 10):\ndiem = float(input('Nhập điểm (0-10): '))\nwhile diem < 0 or diem > 10:\n    print('Điểm không hợp lệ, vui lòng nhập lại!')\n    diem = float(input('Nhập điểm (0-10): '))",
      "statements": [
        {
          "text": "Nếu người dùng nhập ngay lần đầu số 8.5 thì khối lệnh trong thân while sẽ không chạy lần nào.",
          "answer": true,
          "explain": "Đúng. 8.5 nằm trong [0, 10] nên điều kiện sai ngay từ đầu, thân while không chạy."
        },
        {
          "text": "Nếu người dùng nhập -2 thì chương trình sẽ in thông báo nhắc và yêu cầu nhập lại.",
          "answer": true,
          "explain": "Đúng. -2 < 0 nên điều kiện diem < 0 or diem > 10 là True."
        },
        {
          "text": "Điều kiện lặp diem < 0 or diem > 10 có thể thay thế hoàn toàn tương đương bằng 0 <= diem <= 10.",
          "answer": false,
          "explain": "Sai. 0 <= diem <= 10 là điều kiện điểm hợp lệ; để lặp khi nhập sai ta phải dùng điều kiện ngược lại (phủ định)."
        },
        {
          "text": "Đoạn mã trên là một mẫu thiết kế phổ biến để kiểm soát tính hợp lệ của dữ liệu đầu vào.",
          "answer": true,
          "explain": "Đúng. Đây là mẫu bẫy lỗi nhập liệu (Input Validation Loop) kinh điển trong lập trình."
        }
      ]
    },
    {
      "id": "b21-tf03",
      "context": "Xét đoạn mã tìm ước chung lớn nhất của hai số nguyên dương a = 24 và b = 18:\nwhile a != b:\n    if a > b:\n        a = a - b\n    else:\n        b = b - a\nprint('UCLN là:', a)",
      "statements": [
        {
          "text": "Đoạn mã trên áp dụng thuật toán trừ liên tiếp để tìm ước chung lớn nhất.",
          "answer": true,
          "explain": "Đúng. Đây là dạng nguyên bản của thuật toán Euclid dựa trên phép trừ."
        },
        {
          "text": "Ở lần lặp đầu tiên, vì 24 > 18 nên giá trị mới của biến a sẽ là 6.",
          "answer": true,
          "explain": "Đúng. a = 24 - 18 = 6."
        },
        {
          "text": "Ở lần lặp thứ hai, biến b sẽ được cập nhật thành b = 18 - 6 = 12.",
          "answer": true,
          "explain": "Đúng. Vì 6 < 18 nên nhánh else chạy: b = 18 - 6 = 12."
        },
        {
          "text": "Kết quả cuối cùng in ra màn hình là 'UCLN là: 12'.",
          "answer": false,
          "explain": "Sai. Vòng lặp tiếp tục trừ cho đến khi a == b == 6. Kết quả UCLN là 6."
        }
      ]
    },
    {
      "id": "b21-tf04",
      "context": "Xét đoạn mã sử dụng lệnh while kết hợp break và continue:\nx = 0\nwhile True:\n    x += 1\n    if x % 2 == 0:\n        continue\n    if x > 5:\n        break\n    print(x, end=' ')",
      "statements": [
        {
          "text": "Vòng lặp while True là một vòng lặp vô hạn nếu không có câu lệnh break bên trong thân lặp.",
          "answer": true,
          "explain": "Đúng. Điều kiện True luôn đúng nên cần break để thoát."
        },
        {
          "text": "Khi x nhận giá trị là các số chẵn, lệnh continue sẽ bỏ qua các lệnh in phía sau để chuyển sang lần lặp kế tiếp.",
          "answer": true,
          "explain": "Đúng. x % 2 == 0 thì continue chạy nên các số chẵn không bị in ra."
        },
        {
          "text": "Vòng lặp sẽ thoát khi biến x nhận giá trị đầu tiên lớn hơn 5 (tức x = 6).",
          "answer": true,
          "explain": "Đúng. Khi x = 6, 6 > 5 đúng nên gặp break và thoát lặp."
        },
        {
          "text": "Kết quả hiển thị trên màn hình của đoạn chương trình là dãy số: 1 3 5 7.",
          "answer": false,
          "explain": "Sai. Khi x = 1 in 1; x = 3 in 3; x = 5 in 5; khi x = 6 gặp break dừng lặp; kết quả chỉ in '1 3 5 '."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b21-es01",
      "q": "Nêu cú pháp và quy tắc hoạt động của câu lệnh lặp while trong Python. Thế nào là hiện tượng lặp vô hạn? Nêu nguyên nhân dẫn đến lặp vô hạn và cách phòng tránh khi viết mã nguồn.",
      "answer": "1. Cú pháp và quy tắc hoạt động của câu lệnh while:\n- Cú pháp:\n```python\nwhile <điều_kiện>:\n    <khối_lệnh>\n```\n- Quy tắc hoạt động: Python kiểm tra `<điều_kiện>`. Nếu điều kiện nhận giá trị `True`, khối lệnh thụt lề được thực hiện. Sau khi thực hiện xong khối lệnh, Python quay lại kiểm tra điều kiện. Quá trình này lặp lại cho đến khi điều kiện nhận giá trị `False` thì vòng lặp kết thúc và chương trình tiếp tục chạy các câu lệnh phía sau `while`.\n\n2. Hiện tượng lặp vô hạn (vòng lặp vô tận):\n- Là hiện tượng vòng lặp thực hiện liên tục mà không bao giờ kết thúc, làm chương trình bị treo và tiêu tốn tài nguyên CPU.\n- Nguyên nhân: Do điều kiện lặp luôn luôn bằng `True` và trong thân vòng lặp không có bất kỳ câu lệnh nào làm thay đổi giá trị của các biến tham gia vào điều kiện đó (ví dụ quên tăng biến đếm `i += 1`), hoặc không có lệnh thoát `break`.\n\n3. Cách phòng tránh:\n- Luôn đảm bảo trong thân vòng lặp có ít nhất một câu lệnh làm thay đổi giá trị của các biến kiểm tra điều kiện theo hướng tiến dần tới trạng thái `False`.\n- Cẩn trọng khi sử dụng vòng lặp `while True`, bắt buộc phải có câu lệnh điều kiện `if` kèm lệnh `break` để thoát khỏi vòng lặp khi đạt mục tiêu."
    },
    {
      "id": "b21-es02",
      "q": "Viết chương trình Python hoàn chỉnh nhập vào một số nguyên dương n từ bàn phím. Sử dụng vòng lặp while để tính tổng các chữ số của n và đếm xem số n có bao nhiêu chữ số. Nêu ví dụ chạy tay với n = 2026.",
      "answer": "Chương trình Python đếm số chữ số và tính tổng chữ số của n:\n\n```python\n# Nhập số nguyên dương n\nn = int(input('Nhập số nguyên dương n: '))\ntemp = n  # Lưu lại giá trị ban đầu để in kết quả\n\ndem = 0   # Biến đếm số chữ số\ntong = 0  # Biến tính tổng các chữ số\n\n# Sử dụng vòng lặp while để bóc tách từng chữ số\nwhile n > 0:\n    chu_so = n % 10     # Lấy chữ số hàng đơn vị\n    tong += chu_so      # Cộng dồn vào tổng\n    dem += 1            # Tăng số lượng chữ số lên 1\n    n //= 10            # Bỏ chữ số hàng đơn vị đã xử lý\n\nprint(f'Số {temp} có {dem} chữ số và tổng các chữ số là {tong}.')\n```\n\nChạy tay với n = 2026:\n- Ban đầu: dem = 0, tong = 0, n = 2026.\n- Lần 1: n = 2026 > 0. chu_so = 2026 % 10 = 6; tong = 0 + 6 = 6; dem = 1; n = 2026 // 10 = 202.\n- Lần 2: n = 202 > 0. chu_so = 202 % 10 = 2; tong = 6 + 2 = 8; dem = 2; n = 202 // 10 = 20.\n- Lần 3: n = 20 > 0. chu_so = 20 % 10 = 0; tong = 8 + 0 = 8; dem = 3; n = 20 // 10 = 2.\n- Lần 4: n = 2 > 0. chu_so = 2 % 10 = 2; tong = 8 + 2 = 10; dem = 4; n = 2 // 10 = 0.\n- Lần 5: n = 0 > 0 là False -> Dừng vòng lặp.\n- Kết quả in ra: Số 2026 có 4 chữ số và tổng các chữ số là 10."
    }
  ]
};
