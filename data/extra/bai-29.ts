import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-29: Nhận biết lỗi chương trình

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b29-tf01",
      "context": "Một học sinh viết đoạn mã giải phương trình bậc nhất ax + b = 0:\na = float(input('Nhập a: '))\nb = float(input('Nhập b: '))\nx = -b / a\nprint('Nghiệm là:', x)",
      "statements": [
        {
          "text": "Đoạn chương trình trên hoàn toàn đúng về mặt cú pháp ngữ pháp của Python.",
          "answer": true,
          "explain": "Đúng. Cú pháp các câu lệnh đều chuẩn xác."
        },
        {
          "text": "Nếu người dùng nhập a = 0 và b = 5, chương trình sẽ gặp lỗi ngoại lệ ZeroDivisionError khi chạy.",
          "answer": true,
          "explain": "Đúng. Mẫu số a = 0 dẫn đến phép chia cho 0 gây ZeroDivisionError."
        },
        {
          "text": "Lỗi chia cho số 0 trong trường hợp trên thuộc nhóm lỗi cú pháp (SyntaxError).",
          "answer": false,
          "explain": "Sai. Đây là lỗi khi chạy (Runtime Error / Exception), không phải lỗi cú pháp."
        },
        {
          "text": "Để tránh lỗi trên, người viết cần bổ sung câu lệnh điều kiện if a == 0 trước khi thực hiện phép chia.",
          "answer": true,
          "explain": "Đúng. Biện luận if a == 0 giúp ngăn chặn phép chia cho 0."
        }
      ]
    },
    {
      "id": "b29-tf02",
      "context": "Xét các thông báo lỗi sau đây trong môi trường Python IDLE:",
      "statements": [
        {
          "text": "Thông báo SyntaxError xuất hiện trước khi chương trình thực sự bắt đầu chạy các câu lệnh.",
          "answer": true,
          "explain": "Đúng. Trình biên dịch/thông dịch kiểm tra cú pháp trước khi chạy."
        },
        {
          "text": "Thông báo IndexError xảy ra khi chỉ số truy cập danh sách nhỏ hơn -len(ds) hoặc lớn hơn len(ds)-1.",
          "answer": true,
          "explain": "Đúng. Vượt quá dải chỉ số hợp lệ sẽ ném IndexError."
        },
        {
          "text": "Thông báo NameError xảy ra khi gọi một tên hàm mà ta gõ sai chính tả so với định nghĩa ban đầu.",
          "answer": true,
          "explain": "Đúng. Sai chính tả tên hàm dẫn đến tên chưa được định nghĩa (NameError)."
        },
        {
          "text": "Nếu kết quả bài toán tính chu vi hình vuông cạnh a là a * a thì Python sẽ hiển thị thông báo LogicError.",
          "answer": false,
          "explain": "Sai. Python không có lớp ngoại lệ nào tên là LogicError; lỗi logic do con người tự phát hiện khi kiểm tra kết quả."
        }
      ]
    },
    {
      "id": "b29-tf03",
      "context": "Xem xét đoạn chương trình tính trung bình cộng điểm ba môn Toán, Văn, Anh:\ntoan = 8\nvan = 7\nanh = 9\ndtb = toan + van + anh / 3\nprint('Điểm TB:', dtb)",
      "statements": [
        {
          "text": "Đoạn chương trình trên không xuất hiện bất kỳ thông báo lỗi cú pháp hay ngoại lệ nào khi chạy.",
          "answer": true,
          "explain": "Đúng. Cú pháp và kiểu dữ liệu đều hợp lệ, chương trình chạy thông suốt."
        },
        {
          "text": "Kết quả hiển thị trên màn hình là: Điểm TB: 8.0.",
          "answer": false,
          "explain": "Sai. Do nhân chia trước cộng trừ sau, dtb = 8 + 7 + (9/3) = 18.0."
        },
        {
          "text": "Đoạn chương trình trên đã mắc phải lỗi ngữ nghĩa (lỗi logic).",
          "answer": true,
          "explain": "Đúng. Viết sai biểu thức toán học do thiếu cặp dấu ngoặc đơn."
        },
        {
          "text": "Để sửa đoạn mã cho đúng, cần sửa dòng tính toán thành: dtb = (toan + van + anh) / 3.",
          "answer": true,
          "explain": "Đúng. Cần đóng mở ngoặc tổng ba môn trước khi chia cho 3."
        }
      ]
    },
    {
      "id": "b29-tf04",
      "context": "Một học sinh tìm hiểu về các kĩ năng đọc thông báo lỗi Traceback để tìm vị trí dòng mã nguồn bị sai:",
      "statements": [
        {
          "text": "Dòng cuối cùng trong thông báo Traceback thường là tên loại ngoại lệ và mô tả vắn tắt nguyên nhân lỗi.",
          "answer": true,
          "explain": "Đúng. Dòng cuối ghi loại lỗi, ví dụ TypeError: ... hoặc ValueError: ..."
        },
        {
          "text": "Thông tin File \"ten_tep.py\", line X chỉ cho ta biết dòng thứ X là nơi phát sinh lỗi trực tiếp.",
          "answer": true,
          "explain": "Đúng. Line X chỉ rõ vị trí dòng mã nguồn cần kiểm tra sửa chữa."
        },
        {
          "text": "Khi gặp thông báo lỗi, cách tốt nhất là xóa toàn bộ chương trình và viết lại từ đầu.",
          "answer": false,
          "explain": "Sai. Cần bình tĩnh đọc thông báo, xác định số dòng và sửa đúng câu lệnh có vấn đề."
        },
        {
          "text": "Môi trường IDLE thường tô màu đỏ hoặc đặt con trỏ tại vị trí dòng lệnh xảy ra lỗi cú pháp.",
          "answer": true,
          "explain": "Đúng. IDLE hỗ trợ đánh dấu vị trí phát hiện lỗi cú pháp rất trực quan."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b29-es01",
      "q": "Trình bày và phân biệt ba loại lỗi cơ bản trong lập trình Python: Lỗi cú pháp (SyntaxError), Lỗi ngoại lệ khi chạy (RuntimeError) và Lỗi ngữ nghĩa (LogicError). Cho một ví dụ minh họa cụ thể đối với mỗi loại lỗi.",
      "answer": "1. Lỗi cú pháp (SyntaxError):\n- Khái niệm: Xảy ra khi người lập trình vi phạm các quy tắc ngữ pháp của ngôn ngữ Python (như quên dấu hai chấm, thụt lề sai, viết sai từ khóa...).\n- Thời điểm phát hiện: Phát hiện ngay trong quá trình phân tích cú pháp trước khi chương trình được chạy. Chương trình sẽ không thực thi bất kỳ dòng lệnh nào.\n- Ví dụ: `if a > 0` (thiếu dấu hai chấm `:` ở cuối dòng).\n\n2. Lỗi ngoại lệ khi chạy (RuntimeError / Exceptions):\n- Khái niệm: Xảy ra khi chương trình hoàn toàn đúng cú pháp, đã bắt đầu thực thi nhưng trong quá trình chạy phát sinh một thao tác bất hợp lệ (như chia cho 0, ép kiểu dữ liệu sai, truy cập chỉ số vượt giới hạn...).\n- Thời điểm phát hiện: Chỉ xuất hiện khi dòng lệnh có vấn đề được thực thi. Khi gặp lỗi này, chương trình sẽ dừng đột ngột và in thông báo Traceback.\n- Ví dụ: `x = 10 / 0` (lỗi `ZeroDivisionError: division by zero`).\n\n3. Lỗi ngữ nghĩa / lỗi logic (LogicError):\n- Khái niệm: Xảy ra khi thuật toán hoặc biểu thức của người lập trình bị sai lệch so với yêu cầu bài toán. Chương trình dịch không báo lỗi, chương trình chạy thông suốt từ đầu đến cuối nhưng kết quả đầu ra bị sai.\n- Thời điểm phát hiện: Không có thông báo lỗi từ hệ thống; người lập trình phải tự đối chiếu kết quả đầu ra với các bộ dữ liệu thử nghiệm.\n- Ví dụ: Tính diện tích hình chữ nhật nhưng viết `dt = a + b` thay vì `dt = a * b`."
    },
    {
      "id": "b29-es02",
      "q": "Cho đoạn mã Python sau của một bạn học sinh:\n```python\nn = input('Nhập số học sinh: ')\nfor i in range(n):\n    diem = float(input('Nhập điểm: '))\n    tong += diem\ntb = tong / n\nprint('Điểm TB là: ' + tb)\n```\nHãy chỉ ra ít nhất ba lỗi (cả lỗi ngoại lệ khi chạy và lỗi logic/cú pháp) trong đoạn mã trên và viết lại chương trình hoàn chỉnh, chuẩn xác.",
      "answer": "1. Các lỗi trong đoạn mã nguồn:\n- Lỗi 1: `n = input(...)` trả về chuỗi kí tự (`str`). Khi đưa vào `range(n)` sẽ gây lỗi `TypeError: 'str' object cannot be interpreted as an integer`. Cần ép kiểu `n = int(input(...))`.\n- Lỗi 2: Biến `tong` chưa được khởi tạo giá trị ban đầu (`tong = 0`) trước vòng lặp, khi thực hiện `tong += diem` sẽ gây lỗi `NameError: name 'tong' is not defined`.\n- Lỗi 3: Biểu thức `print('Điểm TB là: ' + tb)` cố gắng ghép xâu với số thực `tb` mà chưa ép kiểu, gây lỗi `TypeError: can only concatenate str (not 'float') to str`.\n\n2. Viết lại chương trình hoàn chỉnh và chuẩn xác:\n```python\n# Nhập số lượng học sinh có ép kiểu nguyên\nn = int(input('Nhập số học sinh: '))\n\n# Khởi tạo biến tổng điểm ban đầu\ntong = 0.0\n\n# Nhập điểm cho từng học sinh và cộng dồn\nfor i in range(n):\n    diem = float(input(f'Nhập điểm cho học sinh thứ {i+1}: '))\n    tong += diem\n\n# Tính điểm trung bình và in kết quả\nif n > 0:\n    tb = tong / n\n    print(f'Điểm TB là: {tb:.2f}')\nelse:\n    print('Số lượng học sinh phải lớn hơn 0!')\n```"
    }
  ]
};
