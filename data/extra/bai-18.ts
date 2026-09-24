import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-18: Các lệnh vào ra đơn giản

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b18-tf01",
      "context": "Bạn Mai viết một chương trình Python đơn giản để tính diện tích hình chữ nhật với các dòng mã nguồn sau:\ndai = input('Nhập chiều dài: ')\nrong = input('Nhập chiều rộng: ')\ndien_tich = dai * rong\nprint('Diện tích là:', dien_tich)",
      "statements": [
        {
          "text": "Khi chạy chương trình và nhập chiều dài là 5, chiều rộng là 4, chương trình sẽ in ra 'Diện tích là: 20'.",
          "answer": false,
          "explain": "Sai. Lệnh input() trả về xâu (str), phép nhân hai xâu dai * rong sẽ gây lỗi TypeError: can't multiply sequence by non-int of type 'str'."
        },
        {
          "text": "Để chương trình chạy đúng, bạn Mai cần sửa lại hai dòng nhập liệu thành dai = float(input(...)) và rong = float(input(...)).",
          "answer": true,
          "explain": "Đúng. Cần ép kiểu sang float hoặc int trước khi thực hiện phép nhân số học."
        },
        {
          "text": "Hàm input('Nhập chiều dài: ') sẽ hiển thị thông báo nhắc 'Nhập chiều dài: ' trước khi dừng chờ người dùng nhập.",
          "answer": true,
          "explain": "Đúng. Chuỗi truyền vào input() đóng vai trò là dòng nhắc (prompt) cho người dùng."
        },
        {
          "text": "Nếu người dùng nhấn phím Enter mà không gõ kí tự nào, hàm input() sẽ trả về giá trị None.",
          "answer": false,
          "explain": "Sai. Hàm input() sẽ trả về một xâu rỗng '' chứ không phải đối tượng None."
        }
      ]
    },
    {
      "id": "b18-tf02",
      "context": "Xét các phát biểu về hoạt động và các tham số tùy chọn của hàm print() trong ngôn ngữ lập trình Python:",
      "statements": [
        {
          "text": "Lệnh print('A', 'B', 'C') và lệnh print('A', 'B', 'C', sep=' ') cho kết quả hiển thị trên màn hình hoàn toàn giống hệt nhau.",
          "answer": true,
          "explain": "Đúng. Giá trị mặc định của tham số sep là một khoảng trắng ' '."
        },
        {
          "text": "Nếu thiết lập sep='', hàm print sẽ ghép liền các đối số được in mà không để khoảng cách ở giữa.",
          "answer": true,
          "explain": "Đúng. Chuỗi rỗng '' làm kí tự phân tách sẽ nối dính các giá trị lại với nhau."
        },
        {
          "text": "Tham số end='' làm cho dòng in tiếp theo được hiển thị ngay sau kết quả in hiện tại trên cùng một hàng.",
          "answer": true,
          "explain": "Đúng. end='' triệt tiêu kí tự xuống dòng '\\n' mặc định của hàm print."
        },
        {
          "text": "Hàm print() bắt buộc phải truyền vào ít nhất một đối số, nếu gọi print() không có đối số sẽ gây lỗi cú pháp.",
          "answer": false,
          "explain": "Sai. Lệnh print() không có đối số hoàn toàn hợp lệ, nó sẽ in một dòng trống (chỉ in kí tự xuống dòng)."
        }
      ]
    },
    {
      "id": "b18-tf03",
      "context": "Cho hai biến số nguyên x = 8 và y = 3. Xem xét các biểu thức quan hệ và logic sau trong Python:\nbt1 = (x > y) and (x % y == 2)\nbt2 = not (x == y * 2) or (y > 5)",
      "statements": [
        {
          "text": "Biểu thức (x > y) mang giá trị True vì 8 lớn hơn 3.",
          "answer": true,
          "explain": "Đúng. 8 > 3 là khẳng định đúng nên có giá trị logic True."
        },
        {
          "text": "Biểu thức bt1 có giá trị là True.",
          "answer": true,
          "explain": "Đúng. 8 > 3 là True và 8 % 3 == 2 là True (8 chia 3 dư 2), True and True cho kết quả True."
        },
        {
          "text": "Biểu thức (x == y * 2) có giá trị là True do x gấp gần ba lần y.",
          "answer": false,
          "explain": "Sai. y * 2 = 6, mà x = 8 nên 8 == 6 là False."
        },
        {
          "text": "Biểu thức bt2 có giá trị là True.",
          "answer": true,
          "explain": "Đúng. not (False) = True, True or False = True."
        }
      ]
    },
    {
      "id": "b18-tf04",
      "context": "Một nhóm học sinh tìm hiểu về các hàm ép kiểu dữ liệu cơ bản trong Python để chuẩn bị cho bài thi thực hành:",
      "statements": [
        {
          "text": "Hàm int(8.9) sẽ chuyển đổi số thực 8.9 thành số nguyên 8 bằng cách cắt bỏ phần thập phân.",
          "answer": true,
          "explain": "Đúng. Hàm int() lấy phần nguyên và cắt bỏ hoàn toàn phần thập phân, không làm tròn số học."
        },
        {
          "text": "Hàm str(100) sẽ chuyển đổi số nguyên 100 thành xâu kí tự '100'.",
          "answer": true,
          "explain": "Đúng. Hàm str() chuyển đổi mọi kiểu dữ liệu thành biểu diễn xâu kí tự."
        },
        {
          "text": "Lệnh bool(0) và lệnh bool('') đều trả về giá trị logic là False.",
          "answer": true,
          "explain": "Đúng. Số 0 và xâu rỗng '' trong Python đều được coi là giá trị sai (falsy) khi ép kiểu bool."
        },
        {
          "text": "Lệnh int('12.5') sẽ tự động chuyển đổi thành số nguyên 12 mà không gây ra bất kỳ lỗi nào.",
          "answer": false,
          "explain": "Sai. int('12.5') sẽ báo lỗi ValueError vì chuỗi chứa dấu chấm thập phân; muốn lấy 12 cần qua float: int(float('12.5'))."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b18-es01",
      "q": "Hàm input() trong Python hoạt động như thế nào và trả về kiểu dữ liệu gì? Tại sao khi cần tính toán số học với dữ liệu nhập từ bàn phím, ta bắt buộc phải sử dụng các hàm ép kiểu như int() hoặc float()? Nêu ví dụ minh họa.",
      "answer": "1. Cách hoạt động và kiểu dữ liệu của hàm input():\n- Khi gặp lệnh `input()`, chương trình tạm dừng thực thi, hiển thị dòng thông báo nhắc (nếu có) và chờ người dùng nhập văn bản từ bàn phím rồi nhấn phím Enter.\n- Dữ liệu trả về của hàm `input()` luôn luôn là một xâu kí tự (kiểu `str`), ngay cả khi người dùng chỉ gõ các chữ số (ví dụ gõ 123 thì nhận được xâu '123').\n\n2. Lý do cần ép kiểu dữ liệu:\n- Nếu không ép kiểu, các phép toán thực hiện trên chuỗi sẽ tuân theo quy tắc xử lý chuỗi chứ không phải số học (ví dụ toán tử `+` sẽ ghép nối hai chuỗi thay vì cộng số học; toán tử `*` giữa hai chuỗi sẽ gây lỗi `TypeError`).\n- Để thực hiện các phép toán số học như cộng, trừ, nhân, chia, ta bắt buộc phải chuyển đổi chuỗi kí tự đó sang kiểu số nguyên (`int()`) hoặc số thực (`float()`).\n\n3. Ví dụ minh họa:\n- Sai (không ép kiểu):\n```python\na = input('Nhập số a: ') # Người dùng nhập 10 -> a = '10'\nb = input('Nhập số b: ') # Người dùng nhập 20 -> b = '20'\nprint(a + b)            # In ra '1020' (ghép xâu, sai kết quả số học)\n```\n- Đúng (có ép kiểu):\n```python\na = int(input('Nhập số a: ')) # a = 10 (kiểu int)\nb = int(input('Nhập số b: ')) # b = 20 (kiểu int)\nprint(a + b)                  # In ra 30 (cộng số học chính xác)\n```"
    },
    {
      "id": "b18-es02",
      "q": "Trình bày vai trò và giá trị mặc định của hai tham số sep và end trong hàm print() của Python. Viết một đoạn mã ngắn minh họa cách sử dụng hai tham số này để in ra dãy số 1, 2, 3, 4, 5 trên cùng một dòng, phân tách nhau bởi dấu gạch ngang '-', và kết thúc dòng bằng dấu ba chấm '...'.",
      "answer": "1. Vai trò và giá trị mặc định của tham số sep và end:\n- Tham số `sep` (separator): Quy định kí tự hoặc chuỗi dùng để phân tách giữa các đối số được in ra trong cùng một lệnh `print()`. Giá trị mặc định là một khoảng trắng (`sep=' '`).\n- Tham số `end`: Quy định kí tự hoặc chuỗi được in ra ở vị trí cuối cùng sau khi đã in xong toàn bộ các đối số, kết thúc lệnh `print()`. Giá trị mặc định là kí tự xuống dòng (`end='\\n'`).\n\n2. Đoạn mã Python minh họa yêu cầu:\n```python\n# Cách 1: Sử dụng tham số sep và end trong một câu lệnh print duy nhất\nprint(1, 2, 3, 4, 5, sep='-', end='...\\n')\n# Kết quả in ra màn hình: 1-2-3-4-5...\n\n# Cách 2: Sử dụng vòng lặp for và tùy biến tham số end\nfor i in range(1, 5):\n    print(i, end='-')\nprint(5, end='...\\n')\n# Kết quả in ra màn hình: 1-2-3-4-5...\n```"
    }
  ]
};
