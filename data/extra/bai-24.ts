import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-24: Xâu kí tự

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b24-tf01",
      "context": "Xét xâu kí tự biểu diễn họ tên một học sinh: ho_ten = 'Nguyen Van An'",
      "statements": [
        {
          "text": "Độ dài của xâu ho_ten là 13 kí tự, tính cả hai kí tự dấu khoảng trắng ở giữa các từ.",
          "answer": true,
          "explain": "Đúng. 'Nguyen' (6) + ' ' (1) + 'Van' (3) + ' ' (1) + 'An' (2) = 13."
        },
        {
          "text": "Biểu thức ho_ten[0] trả về kí tự 'N' và ho_ten[-1] trả về kí tự 'n'.",
          "answer": true,
          "explain": "Đúng. ho_ten[0] là chữ cái đầu, ho_ten[-1] là chữ cái cuối cùng."
        },
        {
          "text": "Câu lệnh ho_ten[0] = 'n' sẽ đổi chữ cái 'N' đầu tiên thành chữ thường thành công.",
          "answer": false,
          "explain": "Sai. Xâu kí tự trong Python có tính bất biến (immutable), không thể gán lại kí tự qua chỉ số."
        },
        {
          "text": "Biểu thức 'Van' in ho_ten sẽ trả về kết quả True.",
          "answer": true,
          "explain": "Đúng. Cụm từ 'Van' xuất hiện trong xâu ho_ten."
        }
      ]
    },
    {
      "id": "b24-tf02",
      "context": "Một học sinh viết đoạn mã kiểm tra tính đối xứng của một từ s nhập từ bàn phím:\ns = input('Nhập từ: ')\nif s == s[::-1]:\n    print('Là xâu đối xứng')\nelse:\n    print('Không đối xứng')",
      "statements": [
        {
          "text": "Cú pháp s[::-1] sử dụng bước nhảy -1 để đảo ngược thứ tự các kí tự trong xâu s.",
          "answer": true,
          "explain": "Đúng. Bước nhảy âm (-1) duyệt xâu từ cuối về đầu."
        },
        {
          "text": "Nếu người dùng nhập vào từ 'radar' thì chương trình sẽ in 'Là xâu đối xứng'.",
          "answer": true,
          "explain": "Đúng. 'radar' viết ngược lại vẫn là 'radar'."
        },
        {
          "text": "Nếu người dùng nhập vào từ 'Madam' thì chương trình sẽ in 'Là xâu đối xứng'.",
          "answer": false,
          "explain": "Sai. 'Madam' viết ngược là 'madaM', do chữ 'M' hoa và 'm' thường khác nhau nên s != s[::-1]."
        },
        {
          "text": "Để chương trình nhận diện 'Madam' là đối xứng, có thể chuẩn hóa s.lower() trước khi so sánh.",
          "answer": true,
          "explain": "Đúng. s.lower() chuyển hết về chữ thường 'madam' == 'madam' sẽ cho kết quả True."
        }
      ]
    },
    {
      "id": "b24-tf03",
      "context": "Xét đoạn mã đếm số lượng chữ số xuất hiện trong một xâu kí tự bất kỳ:\ns = 'Tin10_KNTT_2026'\ndem = 0\nfor ch in s:\n    if '0' <= ch <= '9':\n        dem += 1",
      "statements": [
        {
          "text": "Vòng for duyệt qua từng kí tự ch của xâu s một cách tuần tự từ trái sang phải.",
          "answer": true,
          "explain": "Đúng. Vòng for ch in s duyệt qua từng kí tự của xâu."
        },
        {
          "text": "Điều kiện '0' <= ch <= '9' kiểm tra xem kí tự ch có phải là kí tự chữ số hay không.",
          "answer": true,
          "explain": "Đúng. So sánh mã kí tự trong khoảng từ '0' đến '9' tương đương hàm ch.isdigit()."
        },
        {
          "text": "Giá trị của biến dem sau khi kết thúc vòng lặp bằng 6.",
          "answer": true,
          "explain": "Đúng. Các chữ số là '1', '0', '2', '0', '2', '6' (tổng cộng 6 chữ số)."
        },
        {
          "text": "Nếu thay điều kiện thành if ch.isdigit(): thì chương trình sẽ chạy sai kết quả.",
          "answer": false,
          "explain": "Sai. Phương thức ch.isdigit() kiểm tra chính xác kí tự chữ số, kết quả hoàn toàn tương đương."
        }
      ]
    },
    {
      "id": "b24-tf04",
      "context": "Xét các thao tác cắt lát xâu kí tự (string slicing) với xâu s = 'CONGNGHE':",
      "statements": [
        {
          "text": "Lệnh s[0:4] sẽ trích xuất ra xâu con 'CONG'.",
          "answer": true,
          "explain": "Đúng. s[0:4] lấy các kí tự tại chỉ số 0, 1, 2, 3 tương ứng 'C', 'O', 'N', 'G'."
        },
        {
          "text": "Lệnh s[4:] sẽ trích xuất phần còn lại của xâu từ chỉ số 4 đến hết xâu là 'NGHE'.",
          "answer": true,
          "explain": "Đúng. Bỏ trống stop nghĩa là lấy đến hết chuỗi."
        },
        {
          "text": "Lệnh s[:4] cho kết quả hoàn toàn giống với lệnh s[0:4].",
          "answer": true,
          "explain": "Đúng. Bỏ trống start mặc định bắt đầu từ 0."
        },
        {
          "text": "Lệnh s[2:2] sẽ trích xuất ra một kí tự duy nhất tại vị trí chỉ số 2 là 'N'.",
          "answer": false,
          "explain": "Sai. Khi start == stop, phép cắt lát luôn trả về một xâu rỗng ''."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b24-es01",
      "q": "Xâu kí tự trong Python là gì? Trình bày tính chất bất biến của xâu và giải thích tại sao câu lệnh s[0] = 'A' lại gây lỗi. Nêu cách để tạo ra một xâu mới thay đổi kí tự đầu tiên từ xâu ban đầu.",
      "answer": "1. Khái niệm xâu kí tự:\n- Xâu kí tự (string) là một dãy các kí tự được đặt trong cặp dấu nháy đơn `'...'` hoặc cặp dấu nháy kép `\"...\"`.\n- Xâu là một cấu trúc dữ liệu tuần tự có thứ tự và được truy cập thông qua chỉ số (chỉ số dương bắt đầu từ 0, chỉ số âm bắt đầu từ -1).\n\n2. Tính chất bất biến và lý do gây lỗi:\n- Xâu kí tự trong Python là đối tượng bất biến (immutable), nghĩa là một khi đã được tạo ra thì nội dung các kí tự bên trong nó không thể bị chỉnh sửa, thêm bớt hay ghi đè trực tiếp.\n- Khi thực hiện `s[0] = 'A'`, trình thông dịch Python sẽ ném ra lỗi `TypeError: 'str' object does not support item assignment` vì cú pháp gán đè qua chỉ số chỉ áp dụng cho các kiểu dữ liệu khả biến (như danh sách list) chứ không áp dụng cho xâu.\n\n3. Cách tạo xâu mới thay đổi kí tự đầu tiên:\n- Ta sử dụng kĩ thuật cắt lát xâu (slicing) kết hợp phép ghép xâu `+` để tạo ra một xâu hoàn toàn mới:\n```python\ns = 'python'\n# Thay kí tự đầu bằng 'P'\ns_moi = 'P' + s[1:]\nprint(s_moi)  # Kết quả: 'Python'\n```"
    },
    {
      "id": "b24-es02",
      "q": "Viết chương trình Python nhập vào một xâu văn bản s từ bàn phím. Hãy:\na) Đếm xem trong xâu có bao nhiêu kí tự chữ số, bao nhiêu kí tự chữ cái tiếng Anh.\nb) Kiểm tra xem xâu có phải là xâu đối xứng hay không (bỏ qua sự phân biệt chữ hoa, chữ thường).",
      "answer": "Chương trình Python xử lý xâu văn bản:\n\n```python\n# Nhập xâu văn bản từ bàn phím\ns = input('Nhập xâu văn bản: ')\n\n# a) Đếm chữ số và chữ cái\ndem_chu_so = 0\ndem_chu_cai = 0\n\nfor ch in s:\n    if ch.isdigit():\n        dem_chu_so += 1\n    elif ch.isalpha():\n        dem_chu_cai += 1\n\nprint(f'Số lượng kí tự chữ số: {dem_chu_so}')\nprint(f'Số lượng kí tự chữ cái: {dem_chu_cai}')\n\n# b) Kiểm tra đối xứng (không phân biệt chữ hoa/thường)\ns_chuan = s.lower()  # Chuyển toàn bộ về chữ thường\nif s_chuan == s_chuan[::-1]:\n    print('Xâu vừa nhập là xâu đối xứng.')\nelse:\n    print('Xâu vừa nhập không phải là xâu đối xứng.')\n```\n\nGiải thích:\n- Sử dụng phương thức `ch.isdigit()` để kiểm tra kí tự số và `ch.isalpha()` để kiểm tra chữ cái.\n- Để kiểm tra đối xứng không phân biệt hoa thường, ta chuyển chuỗi về dạng chữ thường bằng `s.lower()`, sau đó so sánh chuỗi đó với chuỗi đảo ngược `s_chuan[::-1]`."
    }
  ]
};
