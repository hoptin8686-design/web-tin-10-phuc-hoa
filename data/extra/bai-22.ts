import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-22: Kiểu dữ liệu danh sách

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b22-tf01",
      "context": "Cho danh sách lưu trữ điểm số các môn thi của một học sinh: diem = [8.5, 9.0, 7.5, 10.0, 6.5]",
      "statements": [
        {
          "text": "Độ dài của danh sách trên là 5, thu được thông qua lời gọi hàm len(diem).",
          "answer": true,
          "explain": "Đúng. Danh sách có 5 phần tử nên len(diem) = 5."
        },
        {
          "text": "Phần tử đầu tiên diem[0] mang giá trị 8.5 và phần tử cuối cùng diem[-1] mang giá trị 6.5.",
          "answer": true,
          "explain": "Đúng. diem[0] là 8.5, diem[-1] là phần tử cuối cùng 6.5."
        },
        {
          "text": "Lệnh diem[5] sẽ truy cập và in ra phần tử điểm cuối cùng trong danh sách.",
          "answer": false,
          "explain": "Sai. Chỉ số tối đa là len(diem) - 1 = 4. Lệnh diem[5] sẽ gây lỗi IndexError: list index out of range."
        },
        {
          "text": "Danh sách diem là kiểu dữ liệu có thể thay đổi (mutable), do đó có thể cập nhật diem[2] = 8.0.",
          "answer": true,
          "explain": "Đúng. Danh sách hỗ trợ gán đè phần tử trực tiếp qua chỉ số."
        }
      ]
    },
    {
      "id": "b22-tf02",
      "context": "Xét hai cách duyệt danh sách a = [10, 20, 30] trong Python:\nCách 1: for x in a: print(x)\nCách 2: for i in range(len(a)): print(a[i])",
      "statements": [
        {
          "text": "Cả hai cách duyệt trên đều in ra các phần tử 10, 20, 30 trên các dòng màn hình theo thứ tự giống nhau.",
          "answer": true,
          "explain": "Đúng. Cả hai cách đều duyệt tuần tự từ đầu đến cuối danh sách."
        },
        {
          "text": "Cách 1 duyệt trực tiếp theo giá trị của phần tử mà không cần quan tâm đến chỉ số vị trí.",
          "answer": true,
          "explain": "Đúng. Biến x nhận trực tiếp từng giá trị của phần tử trong a."
        },
        {
          "text": "Cách 2 chỉ có thể dùng khi danh sách toàn các phần tử là số nguyên.",
          "answer": false,
          "explain": "Sai. Cách duyệt theo chỉ số áp dụng được cho danh sách chứa bất kỳ kiểu dữ liệu nào."
        },
        {
          "text": "Nếu muốn thay đổi giá trị của các phần tử trong danh sách khi duyệt thì nên sử dụng Cách 2.",
          "answer": true,
          "explain": "Đúng. Khi có chỉ số i ta mới có thể thực hiện lệnh gán a[i] = giá_trị_mới."
        }
      ]
    },
    {
      "id": "b22-tf03",
      "context": "Một học sinh thực hiện các thao tác với danh sách chứa nhiều kiểu dữ liệu hỗn hợp:\nmix = [100, 'Tin học', True, 3.14, [1, 2]]",
      "statements": [
        {
          "text": "Danh sách mix là hoàn toàn hợp lệ trong Python vì danh sách có thể chứa các phần tử khác kiểu nhau.",
          "answer": true,
          "explain": "Đúng. Python cho phép danh sách chứa dữ liệu hỗn hợp (heterogeneous)."
        },
        {
          "text": "Phần tử mix[1] có kiểu dữ liệu là xâu kí tự str với giá trị là 'Tin học'.",
          "answer": true,
          "explain": "Đúng. mix[1] lưu trữ chuỗi 'Tin học'."
        },
        {
          "text": "Phần tử mix[4] là một danh sách con gồm hai phần tử [1, 2].",
          "answer": true,
          "explain": "Đúng. Danh sách lồng nhau là hoàn toàn hợp lệ trong Python."
        },
        {
          "text": "Biểu thức mix[4][1] sẽ cho ra kết quả là số nguyên 1.",
          "answer": false,
          "explain": "Sai. mix[4] là [1, 2], nên mix[4][1] là phần tử thứ hai có giá trị bằng 2."
        }
      ]
    },
    {
      "id": "b22-tf04",
      "context": "Xét đoạn mã tìm giá trị lớn nhất trong một danh sách số nguyên a = [15, 42, 8, 93, 27]:\nmax_val = a[0]\nfor x in a:\n    if x > max_val:\n        max_val = x\nprint(max_val)",
      "statements": [
        {
          "text": "Thuật toán khởi tạo max_val bằng phần tử đầu tiên a[0] của danh sách là 15.",
          "answer": true,
          "explain": "Đúng. Đây là cách khởi tạo an toàn nhất cho bài toán tìm cực trị."
        },
        {
          "text": "Khi duyệt qua số 93, điều kiện 93 > max_val đúng nên max_val được cập nhật thành 93.",
          "answer": true,
          "explain": "Đúng. max_val sẽ nhận giá trị lớn hơn khi tìm thấy."
        },
        {
          "text": "Nếu danh sách có các phần tử âm như a = [-5, -12, -3] thì thuật toán trên sẽ bị sai.",
          "answer": false,
          "explain": "Sai. Vì khởi tạo max_val = a[0] (thuộc danh sách) nên thuật toán luôn đúng kể cả khi toàn số âm."
        },
        {
          "text": "Trong Python có thể tìm trực tiếp giá trị lớn nhất của danh sách a bằng hàm có sẵn max(a).",
          "answer": true,
          "explain": "Đúng. Hàm max(a) có sẵn trả về giá trị lớn nhất của danh sách cực kỳ ngắn gọn."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b22-es01",
      "q": "Kiểu dữ liệu danh sách (list) trong Python là gì? Trình bày quy tắc đánh chỉ số dương và chỉ số âm trong danh sách. Lỗi IndexError xuất hiện trong trường hợp nào và cách khắc phục?",
      "answer": "1. Khái niệm danh sách trong Python:\n- Danh sách (list) là một tập hợp các phần tử có thứ tự, có thể thay đổi được (mutable) và được đặt trong cặp ngoặc vuông `[]`.\n- Các phần tử trong danh sách được phân tách nhau bởi dấu phẩy `,` và có thể có các kiểu dữ liệu khác nhau (số, chuỗi, boolean, danh sách khác...).\n\n2. Quy tắc đánh chỉ số:\n- Chỉ số dương: Đánh số từ trái qua phải, bắt đầu từ chỉ số `0` cho phần tử đầu tiên, tăng dần đến `len(list) - 1` cho phần tử cuối cùng.\n- Chỉ số âm: Đánh số từ phải qua trái, bắt đầu từ chỉ số `-1` cho phần tử cuối cùng, lùi dần về `-len(list)` cho phần tử đầu tiên.\n\n3. Lỗi IndexError và cách khắc phục:\n- Nguyên nhân: Lỗi `IndexError: list index out of range` xuất hiện khi chương trình cố gắng truy cập vào một phần tử có chỉ số nằm ngoài phạm vi cho phép (tức là chỉ số `< -len(list)` hoặc chỉ số `>= len(list)`).\n- Cách khắc phục: Luôn kiểm tra độ dài danh sách bằng hàm `len()` trước khi truy cập chỉ số, hoặc sử dụng vòng lặp `for x in my_list:` để duyệt trực tiếp theo phần tử nhằm tránh hoàn toàn nguy cơ vượt chỉ số."
    },
    {
      "id": "b22-es02",
      "q": "Viết chương trình Python nhập vào từ bàn phím một danh sách n số nguyên. Hãy:\na) Tính tổng và tính trung bình cộng của các phần tử trong danh sách.\nb) Đếm xem có bao nhiêu phần tử mang giá trị chẵn trong danh sách đó.",
      "answer": "Chương trình Python xử lý danh sách số nguyên:\n\n```python\n# Nhập số lượng phần tử n\nn = int(input('Nhập số lượng phần tử n: '))\n\n# Nhập từng phần tử vào danh sách\na = []\nfor i in range(n):\n    val = int(input(f'Nhập phần tử thứ {i+1}: '))\n    a.append(val)\n\nprint('Danh sách vừa nhập:', a)\n\n# a) Tính tổng và trung bình cộng\ntong = sum(a)\ntb_cong = tong / len(a) if len(a) > 0 else 0\nprint(f'Tổng các phần tử: {tong}')\nprint(f'Trung bình cộng: {tb_cong:.2f}')\n\n# b) Đếm số lượng phần tử chẵn\ndem_chan = 0\nfor x in a:\n    if x % 2 == 0:\n        dem_chan += 1\n\nprint(f'Số lượng phần tử chẵn trong danh sách: {dem_chan}')\n```\n\nGiải thích:\n- Sử dụng vòng lặp để nhập từng phần tử và đưa vào danh sách bằng phương thức `append()`.\n- Sử dụng hàm chuẩn `sum(a)` để tính tổng và chia cho `len(a)` để tìm trung bình cộng.\n- Duyệt qua từng phần tử bằng `for x in a:` và kiểm tra điều kiện chẵn `x % 2 == 0` để tăng biến đếm `dem_chan`."
    }
  ]
};
