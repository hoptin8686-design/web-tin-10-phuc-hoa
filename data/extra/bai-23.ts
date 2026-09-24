import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-23: Một số lệnh làm việc với dữ liệu danh sách

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b23-tf01",
      "context": "Xét đoạn mã thực hiện thêm và xóa các phần tử trong danh sách sau:\nds = ['Toán', 'Văn']\nds.append('Anh')\nds.insert(1, 'Tin')\nds.remove('Văn')",
      "statements": [
        {
          "text": "Sau lệnh ds.append('Anh'), danh sách ds sẽ là ['Toán', 'Văn', 'Anh'].",
          "answer": true,
          "explain": "Đúng. append thêm phần tử vào cuối danh sách."
        },
        {
          "text": "Sau lệnh ds.insert(1, 'Tin'), phần tử 'Tin' sẽ nằm ở vị trí thứ hai trong danh sách.",
          "answer": true,
          "explain": "Đúng. Chỉ số 1 tương ứng với vị trí thứ hai: ['Toán', 'Tin', 'Văn', 'Anh']."
        },
        {
          "text": "Sau lệnh ds.remove('Văn'), danh sách cuối cùng còn lại là ['Toán', 'Tin', 'Anh'].",
          "answer": true,
          "explain": "Đúng. 'Văn' đã bị xóa khỏi danh sách."
        },
        {
          "text": "Nếu thực hiện thêm lệnh ds.remove('Sử') thì chương trình sẽ tự động bỏ qua mà không báo lỗi.",
          "answer": false,
          "explain": "Sai. Phương thức remove sẽ ném ra ngoại lệ ValueError nếu phần tử cần xóa không tồn tại trong danh sách."
        }
      ]
    },
    {
      "id": "b23-tf02",
      "context": "Một học sinh thử nghiệm toán tử kiểm tra thành viên và toán tử ghép danh sách:\na = [1, 2, 3]\nb = [3, 4, 5]\nc = a + b",
      "statements": [
        {
          "text": "Biểu thức 3 in a sẽ cho kết quả trả về là True.",
          "answer": true,
          "explain": "Đúng. Số 3 là một phần tử có mặt trong danh sách a."
        },
        {
          "text": "Biểu thức 6 not in b sẽ cho kết quả trả về là True.",
          "answer": true,
          "explain": "Đúng. Số 6 không nằm trong danh sách b nên not in trả về True."
        },
        {
          "text": "Danh sách c sau phép ghép nối có độ dài len(c) bằng 5 do số 3 bị loại bỏ trùng lặp.",
          "answer": false,
          "explain": "Sai. Phép ghép danh sách + giữ nguyên tất cả các phần tử, c = [1, 2, 3, 3, 4, 5] có độ dài bằng 6."
        },
        {
          "text": "Lệnh c.count(3) sẽ trả về giá trị số nguyên bằng 2.",
          "answer": true,
          "explain": "Đúng. Số 3 xuất hiện đúng 2 lần trong danh sách c."
        }
      ]
    },
    {
      "id": "b23-tf03",
      "context": "Xét sự khác biệt giữa hai phương thức sắp xếp danh sách a = [4, 1, 3, 2]:\nCách 1: a.sort()\nCách 2: b = sorted(a)",
      "statements": [
        {
          "text": "Cách 1 thay đổi trực tiếp thứ tự các phần tử của danh sách a ban đầu.",
          "answer": true,
          "explain": "Đúng. Phương thức a.sort() sắp xếp tại chỗ (in-place) và làm thay đổi a."
        },
        {
          "text": "Cách 2 không làm thay đổi danh sách a mà trả về một danh sách mới b đã được sắp xếp.",
          "answer": true,
          "explain": "Đúng. Hàm sorted() trả về danh sách mới, danh sách gốc a giữ nguyên."
        },
        {
          "text": "Để sắp xếp giảm dần với a.sort(), ta truyền tham số a.sort(reverse=True).",
          "answer": true,
          "explain": "Đúng. reverse=True đảo ngược chiều sắp xếp thành giảm dần."
        },
        {
          "text": "Lệnh a.reverse() sẽ sắp xếp các phần tử của a theo thứ tự giảm dần.",
          "answer": false,
          "explain": "Sai. a.reverse() chỉ đảo ngược thứ tự trước sau của các phần tử hiện có chứ không sắp xếp theo độ lớn giá trị."
        }
      ]
    },
    {
      "id": "b23-tf04",
      "context": "Xét đoạn mã lọc các số nguyên dương lẻ từ danh sách ban đầu đưa vào danh sách mới:\ngoc = [12, 5, 8, 9, 14, 21, 3]\nle = []\nfor x in goc:\n    if x % 2 != 0:\n        le.append(x)",
      "statements": [
        {
          "text": "Thuật toán sử dụng danh sách rỗng le = [] để tích lũy các phần tử thỏa mãn điều kiện.",
          "answer": true,
          "explain": "Đúng. Đây là mẫu tích lũy danh sách lọc dữ liệu."
        },
        {
          "text": "Điều kiện x % 2 != 0 lọc ra chính xác các số nguyên lẻ.",
          "answer": true,
          "explain": "Đúng. Số lẻ chia 2 có dư khác 0."
        },
        {
          "text": "Sau khi kết thúc vòng lặp, danh sách le chứa các phần tử: [5, 9, 21, 3].",
          "answer": true,
          "explain": "Đúng. Các số lẻ trong danh sách gốc lần lượt là 5, 9, 21, 3."
        },
        {
          "text": "Có thể viết lại đoạn mã trên ngắn gọn bằng cấu trúc List Comprehension: le = [x for x in goc if x % 2 != 0].",
          "answer": true,
          "explain": "Đúng. List Comprehension là cú pháp cao cấp rất phổ biến và tương đương trong Python."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b23-es01",
      "q": "Trình bày sự khác nhau giữa các phương thức thêm phần tử (append và insert) và các phương thức/lệnh xóa phần tử (remove, pop, del) trong danh sách Python. Nêu ví dụ minh họa cho từng phương thức.",
      "answer": "1. Sự khác nhau giữa các phương thức thêm phần tử:\n- `append(x)`: Thêm phần tử `x` vào vị trí cuối cùng của danh sách. Danh sách tăng thêm 1 phần tử.\n  + Ví dụ: `a = [1, 2]; a.append(3)` -> `a` trở thành `[1, 2, 3]`.\n- `insert(i, x)`: Chèn phần tử `x` vào vị trí chỉ số `i`, các phần tử từ vị trí `i` trở về sau sẽ bị dịch sang phải một vị trí.\n  + Ví dụ: `a = [1, 3]; a.insert(1, 2)` -> `a` trở thành `[1, 2, 3]`.\n\n2. Sự khác nhau giữa các phương thức/lệnh xóa phần tử:\n- `remove(x)`: Tìm và xóa phần tử đầu tiên có giá trị bằng `x`. Nếu `x` không có trong danh sách sẽ báo lỗi `ValueError`.\n  + Ví dụ: `a = [1, 2, 2, 3]; a.remove(2)` -> `a` còn `[1, 2, 3]`.\n- `pop(i)`: Xóa phần tử tại vị trí chỉ số `i` và trả về chính giá trị của phần tử vừa xóa. Nếu không truyền `i` (`pop()`), nó mặc định xóa và trả về phần tử cuối cùng. Nếu danh sách rỗng hoặc chỉ số vượt quá phạm vi sẽ báo `IndexError`.\n  + Ví dụ: `a = [10, 20, 30]; x = a.pop(1)` -> `x = 20`, `a` còn `[10, 30]`.\n- `del a[i]`: Câu lệnh xóa phần tử tại chỉ số `i` (hoặc xóa cả một lát cắt `del a[1:3]`) trực tiếp mà không trả về giá trị.\n  + Ví dụ: `a = [5, 6, 7]; del a[0]` -> `a` còn `[6, 7]`."
    },
    {
      "id": "b23-es02",
      "q": "Viết chương trình Python quản lý danh sách tên các bạn học sinh trong một tổ học tập. Chương trình cung cấp các chức năng:\n1. Nhập danh sách ban đầu gồm n bạn.\n2. Sắp xếp danh sách tên học sinh theo thứ tự bảng chữ cái tăng dần và in ra.\n3. Nhập một tên từ bàn phím, kiểm tra xem tên đó có trong tổ hay không và xóa tên bạn đó nếu có.",
      "answer": "Chương trình Python quản lý danh sách học sinh:\n\n```python\n# 1. Nhập danh sách học sinh\nn = int(input('Nhập số lượng học sinh trong tổ: '))\nds_hoc_sinh = []\nfor i in range(n):\n    ten = input(f'Nhập tên học sinh thứ {i+1}: ').strip()\n    ds_hoc_sinh.append(ten)\n\nprint('\\nDanh sách ban đầu:', ds_hoc_sinh)\n\n# 2. Sắp xếp theo thứ tự bảng chữ cái\nds_hoc_sinh.sort()\nprint('Danh sách sau khi sắp xếp tăng dần:', ds_hoc_sinh)\n\n# 3. Tìm kiếm và xóa học sinh\nten_can_xoa = input('\\nNhập tên học sinh cần xóa: ').strip()\nif ten_can_xoa in ds_hoc_sinh:\n    ds_hoc_sinh.remove(ten_can_xoa)\n    print(f'Đã xóa bạn \"{ten_can_xoa}\" khỏi danh sách.')\n    print('Danh sách hiện tại:', ds_hoc_sinh)\nelse:\n    print(f'Không tìm thấy bạn \"{ten_can_xoa}\" trong danh sách tổ.')\n```\n\nGiải thích:\n- Sử dụng vòng lặp kết hợp `append()` và `strip()` để nhập và làm sạch khoảng trắng thừa của từng tên học sinh.\n- Phương thức `sort()` sắp xếp danh sách chuỗi theo thứ tự từ điển (A-Z).\n- Sử dụng toán tử `in` để kiểm tra sự tồn tại trước khi gọi `remove()` nhằm tránh gây lỗi chương trình khi tên không có trong danh sách."
    }
  ]
};
