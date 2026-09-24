import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-25: Một số lệnh làm việc với xâu kí tự

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b25-tf01",
      "context": "Xét đoạn mã nguồn chuẩn hóa xâu họ tên học sinh nhập từ bàn phím:\nraw_name = '   nguyen   van   an   '\nwords = raw_name.split()\nclean_name = ' '.join(words)\nclean_name = clean_name.title()",
      "statements": [
        {
          "text": "Lệnh raw_name.split() sẽ tách xâu thành danh sách gồm 3 phần tử: ['nguyen', 'van', 'an'].",
          "answer": true,
          "explain": "Đúng. Phương thức split() không tham số tự động gộp các khoảng trắng liên tiếp và bỏ khoảng trắng thừa ở hai đầu."
        },
        {
          "text": "Lệnh ' '.join(words) sẽ ghép các từ lại thành xâu 'nguyen van an' với đúng một khoảng trắng ở giữa mỗi từ.",
          "answer": true,
          "explain": "Đúng. join nối các từ bằng một dấu cách chuẩn."
        },
        {
          "text": "Phương thức clean_name.title() sẽ viết hoa chữ cái đầu tiên của mỗi từ để trở thành 'Nguyen Van An'.",
          "answer": true,
          "explain": "Đúng. Phương thức title() viết hoa chữ cái đầu mỗi từ trong xâu."
        },
        {
          "text": "Sau các thao tác trên, xâu gốc raw_name cũng tự động bị thay đổi nội dung theo clean_name.",
          "answer": false,
          "explain": "Sai. Xâu là đối tượng bất biến, raw_name hoàn toàn không bị thay đổi."
        }
      ]
    },
    {
      "id": "b25-tf02",
      "context": "Một học sinh thực hiện các phương thức tìm kiếm và thay thế trên xâu s = 'Hoc lap trinh Python rat vui':",
      "statements": [
        {
          "text": "Biểu thức s.find('Python') trả về chỉ số bắt đầu của từ 'Python' trong xâu s.",
          "answer": true,
          "explain": "Đúng. find trả về chỉ số vị trí đầu tiên của từ cần tìm."
        },
        {
          "text": "Biểu thức s.find('Java') sẽ trả về giá trị số nguyên là 0 vì từ 'Java' không có trong xâu.",
          "answer": false,
          "explain": "Sai. Khi không tìm thấy, phương thức find() trả về giá trị -1."
        },
        {
          "text": "Lệnh s.replace('Python', 'AI') tạo ra xâu mới có nội dung là 'Hoc lap trinh AI rat vui'.",
          "answer": true,
          "explain": "Đúng. replace thay thế 'Python' bằng 'AI'."
        },
        {
          "text": "Biểu thức s.count('a') sẽ đếm số lần xuất hiện của chữ cái 'a' trong xâu s.",
          "answer": true,
          "explain": "Đúng. count('a') trả về số lần kí tự 'a' xuất hiện trong xâu."
        }
      ]
    },
    {
      "id": "b25-tf03",
      "context": "Xét sự khác biệt giữa hai phương thức tách xâu trong Python:\ns = 'Toan,Ly,Hoa,Sinh'\nds1 = s.split(',')\nds2 = s.split()",
      "statements": [
        {
          "text": "Biến ds1 sẽ lưu trữ danh sách gồm 4 phần tử: ['Toan', 'Ly', 'Hoa', 'Sinh'].",
          "answer": true,
          "explain": "Đúng. split(',') tách theo đúng dấu phẩy ngăn cách."
        },
        {
          "text": "Biến ds2 sẽ lưu trữ danh sách gồm 1 phần tử duy nhất là ['Toan,Ly,Hoa,Sinh'].",
          "answer": true,
          "explain": "Đúng. Vì trong xâu s không có dấu khoảng trắng nào nên split() coi cả xâu là 1 từ."
        },
        {
          "text": "Lệnh ';'.join(ds1) sẽ tạo ra xâu mới là 'Toan;Ly;Hoa;Sinh'.",
          "answer": true,
          "explain": "Đúng. join nối danh sách thành xâu phân cách bởi dấu chấm phẩy."
        },
        {
          "text": "Phương thức join() có thể nối một danh sách chứa cả số nguyên như [1, 2, 3] thành chuỗi mà không cần ép kiểu.",
          "answer": false,
          "explain": "Sai. join() yêu cầu tất cả các phần tử trong danh sách bắt buộc phải là xâu (str), nếu có phần tử số sẽ gây lỗi TypeError."
        }
      ]
    },
    {
      "id": "b25-tf04",
      "context": "Một nhóm học sinh viết các hàm kiểm tra định dạng tệp tin từ tên tệp do người dùng tải lên:\nfilename = 'bai_tap_tin10.py'",
      "statements": [
        {
          "text": "Biểu thức filename.endswith('.py') trả về True để xác định tệp mã nguồn Python.",
          "answer": true,
          "explain": "Đúng. endswith kiểm tra phần mở rộng của tên tệp."
        },
        {
          "text": "Biểu thức filename.startswith('bai_tap') trả về True để kiểm tra tiền tố tên tệp.",
          "answer": true,
          "explain": "Đúng. startswith kiểm tra phần bắt đầu của chuỗi."
        },
        {
          "text": "Lệnh filename.split('.')[-1] sẽ trích xuất ra đúng phần đuôi mở rộng của tệp là 'py'.",
          "answer": true,
          "explain": "Đúng. split('.') tạo ['bai_tap_tin10', 'py'], phần tử [-1] là 'py'."
        },
        {
          "text": "Phương thức endswith() chỉ kiểm tra được một kí tự đơn chứ không kiểm tra được chuỗi nhiều kí tự.",
          "answer": false,
          "explain": "Sai. endswith() kiểm tra được chuỗi có độ dài tùy ý."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b25-es01",
      "q": "Trình bày cú pháp và chức năng của hai phương thức split() và join() trong Python. Giải thích tại sao cặp phương thức này lại được coi là hai thao tác nghịch đảo của nhau trong xử lý văn bản.",
      "answer": "1. Phương thức split():\n- Cú pháp: `s.split(sep=None)`\n- Chức năng: Tách xâu kí tự `s` thành một danh sách (list) các xâu con dựa trên kí tự phân cách `sep`. Nếu không truyền `sep`, phương thức mặc định coi một hoặc nhiều khoảng trắng liên tiếp là dấu phân cách, đồng thời tự động loại bỏ khoảng trắng ở hai đầu xâu.\n- Ví dụ: `'Táo Lê Cam'.split()` -> `['Táo', 'Lê', 'Cam']`.\n\n2. Phương thức join():\n- Cú pháp: `sep.join(ds)`\n- Chức năng: Nối tất cả các phần tử xâu trong danh sách `ds` thành một xâu duy nhất, ở giữa mỗi phần tử được chèn thêm kí tự/chuỗi phân cách `sep`.\n- Điều kiện: Tất cả phần tử trong danh sách bắt buộc phải có kiểu `str`.\n- Ví dụ: `', '.join(['Táo', 'Lê', 'Cam'])` -> `'Táo, Lê, Cam'`.\n\n3. Tính chất nghịch đảo:\n- Hai phương thức này đối lập và bổ trợ cho nhau: `split()` chuyển đổi dữ liệu từ dạng Xâu sang dạng Danh sách (phân tích từ), trong khi `join()` chuyển đổi dữ liệu từ dạng Danh sách ngược lại dạng Xâu (tổng hợp câu). Chúng thường xuyên được kết hợp để chuẩn hóa khoảng trắng thừa trong văn bản: `' '.join(s.split())`."
    },
    {
      "id": "b25-es02",
      "q": "Viết chương trình Python nhập vào một xâu văn bản bất kỳ từ bàn phím. Hãy thực hiện:\na) Chuẩn hóa xâu: xóa các khoảng trắng thừa ở đầu, cuối và giữa các từ (sao cho giữa hai từ chỉ có duy nhất một dấu cách).\nb) Viết hoa chữ cái đầu tiên của mỗi từ trong xâu đã chuẩn hóa.\nc) Đếm số lượng từ có trong câu.",
      "answer": "Chương trình Python chuẩn hóa xâu văn bản:\n\n```python\n# Nhập xâu văn bản từ bàn phím\ns = input('Nhập xâu văn bản cần chuẩn hóa: ')\n\n# a) Tách từ và loại bỏ khoảng trắng thừa\nwords = s.split()  # Tự động gộp khoảng trắng thừa và tách thành list các từ\n\n# Ghép lại thành xâu chuẩn với duy nhất 1 khoảng trắng giữa các từ\ns_chuan = ' '.join(words)\n\n# b) Viết hoa chữ cái đầu của mỗi từ\ns_tieu_de = s_chuan.title()\n\n# c) Đếm số lượng từ\nso_tu = len(words)\n\n# In kết quả hiển thị ra màn hình\nprint('\\n--- KẾT QUẢ XỬ LÝ ---')\nprint('Xâu sau khi chuẩn hóa khoảng cách:', s_chuan)\nprint('Xâu sau khi viết hoa chữ cái đầu:', s_tieu_de)\nprint(f'Số lượng từ có trong câu: {so_tu}')\n```\n\nGiải thích:\n- `s.split()` gom tất cả các khoảng trắng thừa ở đầu, cuối và giữa các từ để tạo thành danh sách `words`.\n- `' '.join(words)` nối lại các từ với đúng 1 khoảng cách phân cách.\n- `title()` chuyển các chữ cái đầu từ thành chữ in hoa.\n- `len(words)` trả về chính xác số lượng từ trong câu một cách tối ưu và an toàn nhất."
    }
  ]
};
