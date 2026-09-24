import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-32: Ôn tập lập trình Python

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b32-tf01",
      "context": "Xét đoạn mã nguồn tổng hợp xử lý danh sách điểm số của một lớp học:\ndiem = [7.5, 8.0, 9.5, 6.0, 8.5, 4.0, 10.0]\ndiem_gioi = [x for x in diem if x >= 8.0]\ndtb = sum(diem) / len(diem)",
      "statements": [
        {
          "text": "Danh sách diem_gioi sử dụng cú pháp List Comprehension để lọc ra các điểm số từ 8.0 trở lên.",
          "answer": true,
          "explain": "Đúng. Cú pháp [x for x in diem if x >= 8.0] lọc các điểm >= 8.0."
        },
        {
          "text": "Số lượng học sinh đạt điểm giỏi trong danh sách là 4 học sinh (các điểm: 8.0, 9.5, 8.5, 10.0).",
          "answer": true,
          "explain": "Đúng. Có đúng 4 điểm >= 8.0."
        },
        {
          "text": "Điểm cao nhất trong danh sách có thể tìm được thông qua hàm max(diem) cho kết quả là 10.0.",
          "answer": true,
          "explain": "Đúng. max(diem) trả về 10.0."
        },
        {
          "text": "Biểu thức sum(diem) // len(diem) sẽ tính ra điểm trung bình chính xác dạng số thực có phần lẻ.",
          "answer": false,
          "explain": "Sai. Phép chia // là phép chia nguyên cắt bỏ phần thập phân, muốn lấy số thực phải dùng phép chia /."
        }
      ]
    },
    {
      "id": "b32-tf02",
      "context": "Xét sự tương đồng và khác biệt giữa vòng lặp for và while trong việc tính tổng S = 1 + 2 + ... + 100:\nCách 1: s1 = sum(range(1, 101))\nCách 2: s2 = 0; i = 1; while i <= 100: s2 += i; i += 1",
      "statements": [
        {
          "text": "Cả hai cách trên đều tính ra cùng một kết quả số nguyên là 5050.",
          "answer": true,
          "explain": "Đúng. Tổng từ 1 đến 100 là (100 * 101) / 2 = 5050."
        },
        {
          "text": "Cách 1 ngắn gọn hơn nhờ tận dụng hàm có sẵn sum kết hợp với hàm sinh dãy range.",
          "answer": true,
          "explain": "Đúng. sum(range(1, 101)) là cách viết cực kì cô đọng của Python."
        },
        {
          "text": "Ở Cách 2, nếu quên câu lệnh i += 1 thì chương trình sẽ bị lặp vô hạn.",
          "answer": true,
          "explain": "Đúng. Không tăng biến đếm i thì điều kiện i <= 100 luôn True."
        },
        {
          "text": "Hàm range(1, 101) sinh ra dãy các số nguyên từ 1 đến 101 bao gồm cả số 101.",
          "answer": false,
          "explain": "Sai. range(1, 101) dừng trước 101, tức là chỉ sinh đến số 100."
        }
      ]
    },
    {
      "id": "b32-tf03",
      "context": "Một học sinh ôn tập các hàm xử lý xâu và danh sách trước kì thi học kì 2:\ns = 'python programming'\nw = s.split()",
      "statements": [
        {
          "text": "Biến w sẽ lưu danh sách gồm hai từ: ['python', 'programming'].",
          "answer": true,
          "explain": "Đúng. split() tách xâu theo khoảng trắng."
        },
        {
          "text": "Lệnh w[0].upper() sẽ trả về xâu in hoa 'PYTHON'.",
          "answer": true,
          "explain": "Đúng. upper() chuyển chữ thường thành chữ hoa."
        },
        {
          "text": "Lệnh s.replace('p', 'P') sẽ thay thế tất cả các chữ cái 'p' thường trong xâu thành chữ 'P' hoa.",
          "answer": true,
          "explain": "Đúng. replace thay thế tất cả các lần xuất hiện của xâu con."
        },
        {
          "text": "Biểu thức len(w) cho kết quả bằng 18 tương ứng với tổng số kí tự của xâu s ban đầu.",
          "answer": false,
          "explain": "Sai. w là danh sách gồm 2 từ nên len(w) = 2; độ dài xâu len(s) mới bằng 18."
        }
      ]
    },
    {
      "id": "b32-tf04",
      "context": "Xét định nghĩa hàm kiểm tra số hoàn hảo (số có tổng các ước số thực sự bằng chính nó, ví dụ 6 = 1 + 2 + 3):\ndef la_so_hoan_hao(n):\n    if n <= 1:\n        return False\n    tong_uoc = 0\n    for i in range(1, n):\n        if n % i == 0:\n            tong_uoc += i\n    return tong_uoc == n",
      "statements": [
        {
          "text": "Vòng for duyệt qua tất cả các ước số thực sự của n từ 1 đến n - 1.",
          "answer": true,
          "explain": "Đúng. Ước thực sự không bao gồm chính số đó."
        },
        {
          "text": "Lệnh gọi la_so_hoan_hao(6) sẽ trả về giá trị True.",
          "answer": true,
          "explain": "Đúng. Ước của 6 là 1, 2, 3; 1 + 2 + 3 = 6."
        },
        {
          "text": "Lệnh gọi la_so_hoan_hao(28) sẽ trả về giá trị True.",
          "answer": true,
          "explain": "Đúng. Ước của 28 là 1, 2, 4, 7, 14; tổng là 28."
        },
        {
          "text": "Hàm trên có độ phức tạp thời gian tối ưu nhất và có thể chạy tức thì với n = 10^12.",
          "answer": false,
          "explain": "Sai. Vòng lặp duyệt đến n - 1 với n = 10^12 sẽ chạy mất hàng giờ; cần tối ưu duyệt đến sqrt(n)."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b32-es01",
      "q": "Hệ thống hóa toàn bộ kiến thức cốt lõi của phần Lập trình Python (Chủ đề 5 - Tin học 10 Kết nối tri thức) thành 5 mảng kiến thức chính và tóm tắt ngắn gọn nội dung trọng tâm của từng mảng.",
      "answer": "Hệ thống hóa kiến thức cốt lõi Lập trình Python 10:\n\n1. Các kiểu dữ liệu cơ bản và biểu thức:\n- Các kiểu dữ liệu cơ sở: `int` (số nguyên), `float` (số thực), `str` (xâu kí tự), `bool` (logic True/False).\n- Phép toán số học (`+`, `-`, `*`, `/`, `//`, `%`, `**`), so sánh (`==`, `!=`, `>`, `<`, `>=`, `<=`) và toán tử logic (`and`, `or`, `not`).\n- Lệnh nhập xuất chuẩn: `input()` (luôn trả về xâu, cần ép kiểu `int()`, `float()`) và `print()` (với tham số `sep`, `end`).\n\n2. Cấu trúc điều khiển luồng:\n- Rẽ nhánh: `if`, `if-else`, `if-elif-else` (tuân thủ nghiêm ngặt quy tắc thụt lề 4 khoảng trắng).\n- Lặp biết trước số lần: `for <biến> in range(...)`.\n- Lặp chưa biết trước số lần: `while <điều_kiện>:` (chú ý tránh vòng lặp vô hạn).\n- Lệnh ngắt lặp `break` và bỏ qua lần lặp `continue`.\n\n3. Cấu trúc dữ liệu tuần tự (Danh sách và Xâu kí tự):\n- Danh sách (`list`): Đặt trong `[]`, có thứ tự, khả biến (mutable), hỗ trợ `append()`, `insert()`, `remove()`, `pop()`, `sort()`.\n- Xâu kí tự (`str`): Đặt trong nháy đơn/kép, bất biến (immutable), hỗ trợ `split()`, `join()`, `replace()`, `find()`, `count()`, cắt lát `[start:stop:step]`.\n\n4. Chương trình con và Hàm:\n- Định nghĩa bằng từ khóa `def`, kết thúc trả kết quả bằng `return` (mặc định trả về `None`).\n- Tham số vị trí, tham số từ khóa và tham số có giá trị mặc định (phải đặt sau cùng).\n- Phạm vi biến: Biến cục bộ (local - trong hàm) và biến toàn cục (global - ngoài hàm, dùng từ khóa `global` khi muốn sửa đổi).\n\n5. Kiểm thử, phát hiện lỗi và gỡ lỗi:\n- Ba nhóm lỗi: Lỗi cú pháp (SyntaxError), Lỗi khi chạy (RuntimeError/Exceptions) và Lỗi logic (LogicError).\n- Kĩ thuật kiểm thử bộ test (bình thường, biên, đặc biệt) và gỡ lỗi bằng in vết (`print`) hoặc dùng `debugger`."
    },
    {
      "id": "b32-es02",
      "q": "Viết chương trình Python hoàn chỉnh thực hiện quản lý danh sách điểm kiểm tra môn Tin học của một lớp gồm n học sinh. Chương trình thực hiện:\n1. Nhập danh sách điểm từ bàn phím.\n2. In danh sách điểm và tính điểm trung bình của cả lớp (làm tròn 2 chữ số thập phân).\n3. Tìm điểm số cao nhất và đếm xem có bao nhiêu học sinh đạt điểm cao nhất đó.\n4. Đếm số học sinh có điểm dưới trung bình (< 5.0).",
      "answer": "Chương trình Python tổng hợp quản lý điểm học sinh:\n\n```python\n# 1. Nhập số lượng học sinh và danh sách điểm\nn = int(input('Nhập số lượng học sinh trong lớp: '))\ndiem_lop = []\n\nfor i in range(n):\n    d = float(input(f'Nhập điểm cho học sinh thứ {i+1}: '))\n    diem_lop.append(d)\n\nprint('\\n--- THỐNG KÊ KẾT QUẢ ĐIỂM KIỂM TRA TIN HỌC ---')\n# 2. In danh sách điểm và tính trung bình\nprint('Danh sách điểm cả lớp:', diem_lop)\nif len(diem_lop) > 0:\n    dtb_lop = sum(diem_lop) / len(diem_lop)\n    print(f'Điểm trung bình của cả lớp: {dtb_lop:.2f}')\n    \n    # 3. Tìm điểm cao nhất và đếm số học sinh đạt thủ khoa\n    diem_max = max(diem_lop)\n    so_luong_max = diem_lop.count(diem_max)\n    print(f'Điểm cao nhất lớp là: {diem_max} (có {so_luong_max} học sinh đạt được)')\n    \n    # 4. Đếm số học sinh dưới trung bình (< 5.0)\n    duoi_tb = 0\n    for d in diem_lop:\n        if d < 5.0:\n            duoi_tb += 1\n    print(f'Số lượng học sinh dưới trung bình (< 5.0): {duoi_tb} học sinh')\nelse:\n    print('Lớp chưa có dữ liệu điểm!')\n```\n\nGiải thích:\n- Sử dụng danh sách động `diem_lop` và vòng lặp `append` để lưu trữ dữ liệu.\n- Tận dụng các hàm chuẩn tích hợp của Python: `sum()`, `len()`, `max()` và phương thức `count()` giúp mã nguồn ngắn gọn, chạy nhanh và an toàn.\n- Duyệt mảng bằng `for d in diem_lop` để kiểm tra điều kiện điểm dưới trung bình `d < 5.0`."
    }
  ]
};
