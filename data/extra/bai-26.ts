import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-26: Hàm trong Python

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b26-tf01",
      "context": "Xét định nghĩa hàm kiểm tra số chẵn sau đây trong Python:\ndef la_so_chan(n):\n    if n % 2 == 0:\n        return True\n    return False",
      "statements": [
        {
          "text": "Hàm trên có tên là la_so_chan và nhận vào một tham số đầu vào là n.",
          "answer": true,
          "explain": "Đúng. def la_so_chan(n) khai báo hàm với tham số n."
        },
        {
          "text": "Nếu n = 8, hàm sẽ trả về giá trị logic True.",
          "answer": true,
          "explain": "Đúng. 8 % 2 == 0 là True nên gặp lệnh return True."
        },
        {
          "text": "Nếu n = 7, hàm sẽ trả về giá trị None vì không có nhánh else.",
          "answer": false,
          "explain": "Sai. Khi điều kiện if sai, luồng chạy tiếp xuống dòng return False."
        },
        {
          "text": "Có thể viết lại thân hàm trên cực kỳ ngắn gọn thành một dòng duy nhất: return n % 2 == 0.",
          "answer": true,
          "explain": "Đúng. Biểu thức n % 2 == 0 tự nó trả về True hoặc False."
        }
      ]
    },
    {
      "id": "b26-tf02",
      "context": "Một học sinh viết hàm in lời chào mừng và thử nghiệm giá trị trả về:\ndef chao_mung():\n    print('Chào mừng bạn đến với Python!')\n\nkq = chao_mung()",
      "statements": [
        {
          "text": "Khi câu lệnh kq = chao_mung() được thực thi, dòng chữ 'Chào mừng bạn đến với Python!' sẽ xuất hiện trên màn hình.",
          "answer": true,
          "explain": "Đúng. Lệnh print bên trong hàm sẽ được chạy khi gọi hàm."
        },
        {
          "text": "Biến kq sau khi gọi hàm sẽ lưu giá trị xâu 'Chào mừng bạn đến với Python!'.",
          "answer": false,
          "explain": "Sai. Hàm chao_mung() không có lệnh return nên giá trị trả về lưu vào kq là None."
        },
        {
          "text": "Biểu thức kq is None sẽ cho kết quả trả về là True.",
          "answer": true,
          "explain": "Đúng. Biến kq thực sự mang giá trị None."
        },
        {
          "text": "Hàm không có tham số bắt buộc vẫn phải có cặp ngoặc tròn () khi định nghĩa và khi gọi hàm.",
          "answer": true,
          "explain": "Đúng. Cặp ngoặc đơn () là bắt buộc trong cú pháp gọi hàm."
        }
      ]
    },
    {
      "id": "b26-tf03",
      "context": "Xét hàm tính lũy thừa bậc n của cơ số a:\ndef luy_thua(a, n):\n    res = 1\n    for i in range(n):\n        res *= a\n    return res",
      "statements": [
        {
          "text": "Hàm luy_thua có hai tham số đầu vào là a và n.",
          "answer": true,
          "explain": "Đúng. Tham số a là cơ số, n là số mũ."
        },
        {
          "text": "Khi gọi luy_thua(2, 3), hàm sẽ trả về giá trị số nguyên bằng 8.",
          "answer": true,
          "explain": "Đúng. res = 1 * 2 * 2 * 2 = 8."
        },
        {
          "text": "Nếu n = 0, vòng for không chạy lần nào và hàm trả về giá trị 1.",
          "answer": true,
          "explain": "Đúng. a^0 = 1, range(0) rỗng nên res giữ nguyên bằng 1."
        },
        {
          "text": "Trong Python có thể thay thế toàn bộ thân hàm trên bằng toán tử có sẵn: return a ** n.",
          "answer": true,
          "explain": "Đúng. Toán tử ** tính lũy thừa trực tiếp trong Python."
        }
      ]
    },
    {
      "id": "b26-tf04",
      "context": "Giáo viên giảng về vai trò của việc lập trình theo mô-đun và hàm trong xây dựng phần mềm:",
      "statements": [
        {
          "text": "Sử dụng hàm giúp tránh việc phải sao chép lặp lại cùng một đoạn mã nhiều lần trong chương trình.",
          "answer": true,
          "explain": "Đúng. Đây là nguyên lý DRY (Don't Repeat Yourself) cơ bản."
        },
        {
          "text": "Khi một hàm xảy ra lỗi, người lập trình chỉ cần tập trung sửa chữa bên trong hàm đó mà không làm ảnh hưởng toàn bộ hệ thống.",
          "answer": true,
          "explain": "Đúng. Hàm giúp cô lập phạm vi lỗi và dễ dàng bảo trì."
        },
        {
          "text": "Tất cả các hàm trong chương trình bắt buộc phải được viết trong cùng một tệp mã nguồn duy nhất.",
          "answer": false,
          "explain": "Sai. Các hàm có thể được tách ra các mô-đun (file .py khác nhau) rồi dùng lệnh import để nạp vào."
        },
        {
          "text": "Một hàm có thể gọi một hàm khác đã được định nghĩa trước đó trong chương trình.",
          "answer": true,
          "explain": "Đúng. Việc hàm gọi hàm là cấu trúc hoạt động tiêu chuẩn trong lập trình."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b26-es01",
      "q": "Hàm trong lập trình là gì? Trình bày cú pháp định nghĩa hàm trong Python. Phân tích vai trò của câu lệnh return và cho biết điều gì xảy ra nếu một hàm kết thúc mà không có câu lệnh return.",
      "answer": "1. Khái niệm hàm trong lập trình:\n- Hàm (function) là một đoạn chương trình độc lập có tên gọi, được đóng gói để thực hiện một nhiệm vụ hay tính toán cụ thể.\n- Hàm có thể nhận dữ liệu đầu vào (các tham số) và trả về kết quả (thông qua lệnh return). Hàm có tính tái sử dụng cao, có thể được gọi nhiều lần tại nhiều vị trí khác nhau trong chương trình.\n\n2. Cú pháp định nghĩa hàm trong Python:\n```python\ndef <tên_hàm>(<danh_sách_tham_số>):\n    <khối_lệnh_của_hàm>\n    return <giá_trị_trả_về>\n```\n\n3. Vai trò của câu lệnh return và giá trị mặc định:\n- Vai trò của `return`: Dùng để trả kết quả tính toán của hàm về cho vị trí gọi hàm, đồng thời chấm dứt ngay lập tức quá trình thực thi của hàm (các câu lệnh phía sau return trong thân hàm sẽ bị bỏ qua).\n- Trường hợp không có lệnh `return`: Nếu một hàm không có lệnh `return`, hoặc chỉ có lệnh `return` mà không kèm biểu thức nào, Python sẽ tự động trả về một giá trị đặc biệt là `None` (đại diện cho sự không tồn tại của giá trị)."
    },
    {
      "id": "b26-es02",
      "q": "Viết hàm `kiem_tra_nguyen_to(n)` trong Python nhận vào một số nguyên n và trả về `True` nếu n là số nguyên tố, ngược lại trả về `False`. Sau đó, viết đoạn chương trình chính sử dụng hàm trên để tìm và in ra tất cả các số nguyên tố trong phạm vi từ 2 đến 50 trên cùng một dòng.",
      "answer": "Chương trình Python định nghĩa và sử dụng hàm kiểm tra số nguyên tố:\n\n```python\n# Định nghĩa hàm kiểm tra số nguyên tố\ndef kiem_tra_nguyen_to(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False  # Tìm thấy ước số thì không phải số nguyên tố\n    return True           # Không có ước số nào ngoài 1 và chính nó\n\n# Chương trình chính sử dụng hàm\nprint('Các số nguyên tố từ 2 đến 50 là:')\nfor x in range(2, 51):\n    if kiem_tra_nguyen_to(x):\n        print(x, end=' ')\nprint()\n```\n\nGiải thích:\n- Hàm `kiem_tra_nguyen_to(n)` nhận tham số n, nếu n < 2 lập tức trả về `False`.\n- Vòng lặp duyệt từ 2 đến căn bậc hai của n, nếu n chia hết cho `i` thì trả về `False` ngay lập tức.\n- Nếu duyệt hết mà không chia hết cho số nào thì thoát khỏi vòng lặp và gặp `return True`.\n- Trong chương trình chính, ta dùng vòng lặp `for x in range(2, 51)` và gọi hàm `kiem_tra_nguyen_to(x)` để lọc và in kết quả trên cùng một dòng bằng tham số `end=' '`."
    }
  ]
};
