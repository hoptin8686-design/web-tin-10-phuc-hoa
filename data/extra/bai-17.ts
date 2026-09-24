import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-17: Biến và lệnh gán

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b17-tf01",
      "context": "Trong buổi thực hành viết mã nguồn Python đầu tiên, bạn Hùng thực hiện thử nghiệm đặt tên các biến số để lưu trữ thông tin học sinh:",
      "statements": [
        {
          "text": "Tên biến ho_va_ten là hoàn toàn hợp lệ và tuân thủ đúng quy ước đặt tên dạng snake_case trong Python.",
          "answer": true,
          "explain": "Đúng. Tên biến dùng chữ thường và nối từ bằng dấu gạch dưới là phong cách chuẩn trong Python."
        },
        {
          "text": "Tên biến 10A1_toan là hợp lệ vì chứa cả chữ số, chữ cái và dấu gạch dưới.",
          "answer": false,
          "explain": "Sai. Tên biến bắt đầu bằng chữ số (10) là không hợp lệ theo ngữ pháp Python."
        },
        {
          "text": "Tên biến class không thể sử dụng để lưu tên lớp học vì nó là từ khóa đã dành riêng của ngôn ngữ Python.",
          "answer": true,
          "explain": "Đúng. 'class' là từ khóa dùng để định nghĩa lớp đối tượng nên không thể dùng làm tên biến."
        },
        {
          "text": "Nếu gán diem_toan = 8.5 thì biến diem_toan sẽ tự động nhận kiểu dữ liệu là float.",
          "answer": true,
          "explain": "Đúng. Giá trị 8.5 là số thực nên kiểu của biến là float."
        }
      ]
    },
    {
      "id": "b17-tf02",
      "context": "Xét đoạn mã Python thực hiện việc trao đổi và biến đổi các giá trị số học sau đây:\na = 15\nb = 4\na, b = b, a + b",
      "statements": [
        {
          "text": "Lệnh a, b = b, a + b thực hiện tính toán tất cả các biểu thức ở vế phải trước khi thực hiện gán cho vế trái.",
          "answer": true,
          "explain": "Đúng. Python lượng giá toàn bộ vế phải (4, 15+4=19) rồi mới gán tương ứng vào a và b."
        },
        {
          "text": "Sau khi thực hiện câu lệnh trên, giá trị mới của biến a là 4.",
          "answer": true,
          "explain": "Đúng. Biến a nhận giá trị của b ban đầu là 4."
        },
        {
          "text": "Sau khi thực hiện câu lệnh trên, giá trị mới của biến b là 8 do lấy giá trị mới của a cộng tiếp.",
          "answer": false,
          "explain": "Sai. Biến b nhận giá trị của biểu thức cũ (15 + 4) = 19."
        },
        {
          "text": "Biểu thức type(a) == int sẽ cho kết quả trả về là True.",
          "answer": true,
          "explain": "Đúng. Biến a lưu giá trị số nguyên 4 nên kiểu dữ liệu là int."
        }
      ]
    },
    {
      "id": "b17-tf03",
      "context": "Một học sinh viết các câu lệnh kiểm tra kiểu dữ liệu và chuyển đổi kiểu trong cửa sổ dòng lệnh Python:\nx = '2026'\ny = 2026\nz = True",
      "statements": [
        {
          "text": "Biến x mang kiểu xâu kí tự str, còn biến y mang kiểu số nguyên int.",
          "answer": true,
          "explain": "Đúng. '2026' nằm trong cặp dấu nháy đơn nên là xâu (str), 2026 là số nguyên (int)."
        },
        {
          "text": "Biểu thức x + y sẽ cho ra kết quả là xâu '20262026' một cách tự động.",
          "answer": false,
          "explain": "Sai. Python không tự động ép kiểu giữa xâu và số trong phép cộng, lệnh này sẽ gây lỗi TypeError."
        },
        {
          "text": "Biến z có kiểu dữ liệu là bool đại diện cho giá trị chân lý đúng.",
          "answer": true,
          "explain": "Đúng. True và False là các giá trị thuộc kiểu logic bool trong Python."
        },
        {
          "text": "Lệnh int(x) + y sẽ thực hiện thành công và trả về giá trị số nguyên là 4052.",
          "answer": true,
          "explain": "Đúng. int('2026') chuyển xâu thành số nguyên 2026, sau đó cộng với 2026 được 4052."
        }
      ]
    },
    {
      "id": "b17-tf04",
      "context": "Giáo viên giảng bài về cơ chế quản lý bộ nhớ và biến trong Python cho học sinh lớp 10:\nm = 100\nn = m\nm = 200",
      "statements": [
        {
          "text": "Khi thực hiện lệnh n = m, biến n sẽ trỏ tới cùng vùng nhớ lưu trữ giá trị 100 mà m đang trỏ tới.",
          "answer": true,
          "explain": "Đúng. Trong Python, lệnh gán biến bản chất là tạo liên kết tham chiếu tới đối tượng dữ liệu."
        },
        {
          "text": "Sau lệnh m = 200, giá trị của biến n cũng tự động thay đổi thành 200 theo biến m.",
          "answer": false,
          "explain": "Sai. Số nguyên là đối tượng bất biến, khi m trỏ tới 200 thì n vẫn trỏ tới đối tượng 100 cũ."
        },
        {
          "text": "Lệnh id(m) cho phép xem định danh địa chỉ vùng nhớ của đối tượng mà biến m đang lưu giữ.",
          "answer": true,
          "explain": "Đúng. Hàm id() trả về định danh số nguyên duy nhất đại diện cho địa chỉ đối tượng trong bộ nhớ."
        },
        {
          "text": "Trong Python, người lập trình phải dùng lệnh delete_var(m) để giải phóng bộ nhớ khi biến m không còn sử dụng.",
          "answer": false,
          "explain": "Sai. Python có cơ chế gom rác tự động (Garbage Collection), người lập trình không cần giải phóng bộ nhớ thủ công."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b17-es01",
      "q": "Biến trong Python là gì? Trình bày chi tiết ba quy tắc bắt buộc khi đặt tên biến trong Python và nêu hai ví dụ về tên biến hợp lệ, hai ví dụ về tên biến không hợp lệ (có giải thích lý do).",
      "answer": "1. Khái niệm biến trong Python:\n- Biến là tên gọi đại diện cho một vùng nhớ trong bộ nhớ máy tính dùng để lưu trữ dữ liệu.\n- Giá trị của biến có thể được thay đổi trong quá trình thực thi chương trình.\n- Trong Python, biến không cần khai báo kiểu trước mà tự động nhận kiểu từ giá trị được gán.\n\n2. Ba quy tắc bắt buộc khi đặt tên biến:\n- Quy tắc 1: Tên biến chỉ được chứa các chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới (_).\n- Quy tắc 2: Tên biến không được bắt đầu bằng chữ số.\n- Quy tắc 3: Tên biến không được trùng với các từ khóa đã dành riêng của Python (như if, else, for, def, class...).\n- Lưu ý thêm: Python phân biệt chữ hoa và chữ thường (case-sensitive).\n\n3. Ví dụ minh họa:\n- Tên hợp lệ: `chieu_dai` (chữ cái và gạch dưới rõ nghĩa), `diem1` (bắt đầu bằng chữ cái, chứa số ở sau).\n- Tên không hợp lệ: `1diem` (bắt đầu bằng chữ số vi phạm quy tắc 2), `for` (trùng từ khóa dành riêng của Python vi phạm quy tắc 3)."
    },
    {
      "id": "b17-es02",
      "q": "Giải thích cú pháp và ý nghĩa của lệnh gán đồng thời trong Python. Viết một đoạn mã Python ngắn thực hiện việc tráo đổi giá trị của hai biến a = 12 và b = 99 theo hai cách: cách dùng biến trung gian truyền thống và cách dùng cú pháp đặc trưng của Python.",
      "answer": "1. Cú pháp và ý nghĩa lệnh gán đồng thời:\n- Cú pháp: `<biến 1>, <biến 2>, ... = <biểu thức 1>, <biểu thức 2>, ...`\n- Ý nghĩa: Python sẽ lượng giá tất cả các biểu thức ở vế phải trước, sau đó gán tuần tự các giá trị tương ứng cho các biến ở vế trái trong cùng một câu lệnh. Cách này giúp mã nguồn ngắn gọn, tối ưu và hạn chế lỗi.\n\n2. Đoạn mã tráo đổi giá trị của hai biến a = 12 và b = 99:\n\nCách 1: Sử dụng biến trung gian (truyền thống):\n```python\na = 12\nb = 99\ntemp = a   # Lưu giá trị cũ của a vào biến tạm\na = b      # Gán giá trị của b cho a\nb = temp   # Gán giá trị biến tạm cho b\nprint('a =', a, 'b =', b) # Kết quả: a = 99, b = 12\n```\n\nCách 2: Sử dụng cú pháp gán đồng thời của Python:\n```python\na = 12\nb = 99\na, b = b, a  # Tráo đổi trực tiếp không cần biến trung gian\nprint('a =', a, 'b =', b) # Kết quả: a = 99, b = 12\n```"
    }
  ]
};
