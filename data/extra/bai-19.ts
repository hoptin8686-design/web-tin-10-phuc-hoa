import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-19: Câu lệnh điều kiện if

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b19-tf01",
      "context": "Xét đoạn mã nguồn Python kiểm tra tính chẵn lẻ của một số nguyên n được nhập từ bàn phím:\nn = int(input('Nhập số nguyên n: '))\nif n % 2 == 0:\n    print(n, 'là số chẵn')\nelse:\n    print(n, 'là số lẻ')",
      "statements": [
        {
          "text": "Đoạn chương trình trên sử dụng cấu trúc rẽ nhánh dạng đủ if - else.",
          "answer": true,
          "explain": "Đúng. Cấu trúc có cả nhánh if và nhánh else đầy đủ."
        },
        {
          "text": "Dấu hai chấm : sau mệnh đề if và else là bắt buộc, nếu thiếu chương trình sẽ báo lỗi SyntaxError.",
          "answer": true,
          "explain": "Đúng. Dấu hai chấm là quy định cú pháp bắt buộc trong Python."
        },
        {
          "text": "Nếu người dùng nhập vào số -4 thì chương trình sẽ in ra '-4 là số lẻ' vì số âm không chia hết cho 2.",
          "answer": false,
          "explain": "Sai. Trong Python, -4 % 2 == 0 là True, chương trình sẽ in ra '-4 là số chẵn'."
        },
        {
          "text": "Các dòng print bên dưới if và else bắt buộc phải được thụt lề cùng mức (thường là 4 dấu cách).",
          "answer": true,
          "explain": "Đúng. Khối lệnh con phải được thụt lề đồng nhất để xác định phạm vi."
        }
      ]
    },
    {
      "id": "b19-tf02",
      "context": "Một học sinh viết đoạn mã phân loại học lực dựa trên điểm trung bình dtb như sau:\nif dtb >= 8.0:\n    xl = 'Giỏi'\nelif dtb >= 6.5:\n    xl = 'Khá'\nelif dtb >= 5.0:\n    xl = 'Trung bình'\nelse:\n    xl = 'Yếu'",
      "statements": [
        {
          "text": "Đoạn chương trình sử dụng cấu trúc rẽ nhánh nhiều nhánh với từ khóa elif.",
          "answer": true,
          "explain": "Đúng. elif giúp kiểm tra tuần tự nhiều điều kiện loại trừ nhau."
        },
        {
          "text": "Nếu dtb = 9.0 thì chương trình sẽ kiểm tra tất cả các điều kiện elif phía sau trước khi đưa ra kết quả.",
          "answer": false,
          "explain": "Sai. Trong cấu trúc if-elif-else, khi một nhánh đã thỏa mãn (dtb >= 8.0 là True), các nhánh sau sẽ bị bỏ qua ngay lập tức."
        },
        {
          "text": "Với dtb = 6.8, biến xl sẽ nhận giá trị 'Khá'.",
          "answer": true,
          "explain": "Đúng. dtb >= 8.0 là False, chuyển sang elif dtb >= 6.5 là True -> xl = 'Khá'."
        },
        {
          "text": "Nếu đổi vị trí kiểm tra elif dtb >= 5.0 lên trước elif dtb >= 6.5 thì học sinh có dtb = 7.0 sẽ bị xếp loại 'Trung bình'.",
          "answer": true,
          "explain": "Đúng. Vì 7.0 >= 5.0 đúng nên nhánh đầu tiên sẽ được thực thi ngay, dẫn đến xếp loại sai thuật toán."
        }
      ]
    },
    {
      "id": "b19-tf03",
      "context": "Xét bài toán tìm số lớn nhất trong ba số thực a, b, c nhập từ bàn phím với đoạn mã:\nmax_val = a\nif b > max_val:\n    max_val = b\nif c > max_val:\n    max_val = c",
      "statements": [
        {
          "text": "Đoạn chương trình trên sử dụng hai câu lệnh rẽ nhánh dạng thiếu độc lập nhau.",
          "answer": true,
          "explain": "Đúng. Đây là hai câu lệnh if độc lập, không có mệnh đề else."
        },
        {
          "text": "Nếu a = 10, b = 25, c = 15 thì sau câu lệnh if thứ nhất, biến max_val nhận giá trị 25.",
          "answer": true,
          "explain": "Đúng. b > max_val (25 > 10) đúng nên max_val được cập nhật thành 25."
        },
        {
          "text": "Sau khi kết thúc toàn bộ đoạn mã với bộ số trên, giá trị của max_val là 15 vì câu lệnh if thứ hai ghi đè lên.",
          "answer": false,
          "explain": "Sai. Ở if thứ hai, c > max_val (15 > 25) là False nên max_val vẫn giữ nguyên là 25."
        },
        {
          "text": "Thuật toán trên hoạt động chính xác với mọi bộ ba số thực a, b, c kể cả khi có các số âm hoặc bằng nhau.",
          "answer": true,
          "explain": "Đúng. Đây là thuật toán tìm max kinh điển và luôn đúng trong mọi trường hợp."
        }
      ]
    },
    {
      "id": "b19-tf04",
      "context": "Xét đoạn mã kiểm tra tính hợp lệ của ba cạnh a, b, c để tạo thành một tam giác:\nif a + b > c and a + c > b and b + c > a:\n    if a == b == c:\n        loai = 'Tam giác đều'\n    elif a == b or b == c or a == c:\n        loai = 'Tam giác cân'\n    else:\n        loai = 'Tam giác thường'\nelse:\n    loai = 'Không phải tam giác'",
      "statements": [
        {
          "text": "Đoạn chương trình có sử dụng cấu trúc rẽ nhánh lồng nhau (nested if).",
          "answer": true,
          "explain": "Đúng. Khối lệnh if-elif-else phân loại tam giác được lồng bên trong nhánh if kiểm tra bất đẳng thức tam giác."
        },
        {
          "text": "Điều kiện a + b > c and a + c > b and b + c > a là bất đẳng thức tam giác bắt buộc phải thỏa mãn đồng thời.",
          "answer": true,
          "explain": "Đúng. Tổng hai cạnh bất kỳ của một tam giác luôn phải lớn hơn cạnh còn lại."
        },
        {
          "text": "Với bộ ba cạnh a = 3, b = 3, c = 3, biến loai sẽ nhận giá trị 'Tam giác đều'.",
          "answer": true,
          "explain": "Đúng. Thỏa mãn bất đẳng thức tam giác và a == b == c là True."
        },
        {
          "text": "Với bộ ba cạnh a = 1, b = 2, c = 5, biến loai sẽ nhận giá trị 'Tam giác thường'.",
          "answer": false,
          "explain": "Sai. Vì 1 + 2 = 3 < 5 (không thỏa mãn bất đẳng thức tam giác) nên nhánh else ngoài cùng chạy -> loai = 'Không phải tam giác'."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b19-es01",
      "q": "Nêu cú pháp và vẽ sơ đồ khối (hoặc mô tả chi tiết luồng thực thi) của câu lệnh điều kiện dạng thiếu và dạng đủ trong Python. Giải thích tầm quan trọng của quy tắc thụt lề trong câu lệnh điều kiện.",
      "answer": "1. Cấu trúc rẽ nhánh dạng thiếu:\n- Cú pháp:\n```python\nif <điều kiện>:\n    <khối lệnh>\n```\n- Luồng thực thi: Python kiểm tra `<điều kiện>`. Nếu điều kiện nhận giá trị `True`, `<khối lệnh>` thụt lề sẽ được thực thi; nếu điều kiện nhận giá trị `False`, khối lệnh bị bỏ qua và chương trình chuyển sang câu lệnh tiếp theo sau `if`.\n\n2. Cấu trúc rẽ nhánh dạng đủ:\n- Cú pháp:\n```python\nif <điều kiện>:\n    <khối lệnh 1>\nelse:\n    <khối lệnh 2>\n```\n- Luồng thực thi: Python kiểm tra `<điều kiện>`. Nếu `True`, `<khối lệnh 1>` được thực thi và bỏ qua `<khối lệnh 2>`; nếu `False`, bỏ qua `<khối lệnh 1>` và thực thi `<khối lệnh 2>`.\n\n3. Tầm quan trọng của quy tắc thụt lề (indentation):\n- Trong Python, thụt lề không chỉ phục vụ tính thẩm mỹ mà là quy định ngữ pháp bắt buộc để xác định khối lệnh (thay thế cho cặp ngoặc nhọn `{}` hay `begin...end` ở các ngôn ngữ khác).\n- Các lệnh có cùng mức thụt lề (chuẩn là 4 khoảng trắng) sẽ thuộc về cùng một khối lệnh. Thụt lề sai sẽ dẫn đến lỗi cú pháp `IndentationError` hoặc sai lệch hoàn toàn logic của thuật toán."
    },
    {
      "id": "b19-es02",
      "q": "Viết chương trình Python hoàn chỉnh giải phương trình bậc nhất dạng ax + b = 0 với các hệ số a, b là số thực nhập từ bàn phím. Chương trình cần xét đầy đủ các trường hợp: vô nghiệm, vô số nghiệm và có nghiệm duy nhất (làm tròn 2 chữ số thập phân).",
      "answer": "Chương trình Python giải phương trình bậc nhất ax + b = 0:\n\n```python\n# Nhập các hệ số a và b từ bàn phím\na = float(input('Nhập hệ số a: '))\nb = float(input('Nhập hệ số b: '))\n\n# Biện luận và giải phương trình\nif a == 0:\n    if b == 0:\n        print('Phương trình có vô số nghiệm.')\n    else:\n        print('Phương trình vô nghiệm.')\nelse:\n    x = -b / a\n    print(f'Phương trình có nghiệm duy nhất x = {x:.2f}')\n```\n\nGiải thích các trường hợp kiểm tra:\n- Trường hợp 1: Nếu a = 0 và b = 0 (dạng 0x + 0 = 0), phương trình thỏa mãn với mọi x nên kết luận vô số nghiệm.\n- Trường hợp 2: Nếu a = 0 và b != 0 (dạng 0x + b = 0 với b khác 0), không tồn tại giá trị x nào thỏa mãn nên kết luận vô nghiệm.\n- Trường hợp 3: Nếu a != 0, phương trình luôn có nghiệm duy nhất x = -b / a, sử dụng định dạng `{x:.2f}` để làm tròn 2 chữ số sau dấu phẩy."
    }
  ]
};
