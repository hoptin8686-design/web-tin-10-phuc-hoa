import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-27: Tham số của hàm

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b27-tf01",
      "context": "Xét định nghĩa hàm tính chu vi và diện tích hình chữ nhật sau:\ndef hcn(dai, rong=5):\n    cv = (dai + rong) * 2\n    dt = dai * rong\n    return cv, dt",
      "statements": [
        {
          "text": "Tham số dai là tham số bắt buộc, còn tham số rong là tham số có giá trị mặc định bằng 5.",
          "answer": true,
          "explain": "Đúng. rong có giá trị mặc định là 5 nếu không được truyền vào."
        },
        {
          "text": "Lệnh gọi hcn(10) sẽ tính chu vi và diện tích với dai = 10 và rong = 5.",
          "answer": true,
          "explain": "Đúng. rong lấy giá trị mặc định là 5, kết quả cv = 30, dt = 50."
        },
        {
          "text": "Lệnh gọi hcn(dai=8, rong=6) sử dụng cách truyền đối số theo từ khóa (keyword arguments).",
          "answer": true,
          "explain": "Đúng. Chỉ định rõ tên tham số kèm giá trị là truyền theo từ khóa."
        },
        {
          "text": "Định nghĩa hàm đổi thành def hcn(dai=10, rong): cv = (dai + rong) * 2 return cv vẫn hoàn toàn hợp lệ.",
          "answer": false,
          "explain": "Sai. Tham số mặc định bắt buộc phải đứng sau tham số không có mặc định; def hcn(dai=10, rong) sẽ gây SyntaxError."
        }
      ]
    },
    {
      "id": "b27-tf02",
      "context": "Một học sinh thử nghiệm truyền các đối số vị trí và từ khóa khi gọi hàm:\ndef thong_tin(ho_ten, lop, nam_sinh=2008):\n    return f'{ho_ten} - {lop} - {nam_sinh}'",
      "statements": [
        {
          "text": "Lệnh gọi thong_tin('Nguyen Van A', '10A1') hoàn toàn hợp lệ và sử dụng nam_sinh mặc định là 2008.",
          "answer": true,
          "explain": "Đúng. Có thể bỏ qua đối số thứ 3 nhờ giá trị mặc định."
        },
        {
          "text": "Lệnh gọi thong_tin(lop='10A2', ho_ten='Tran Thi B') là hợp lệ dù đảo thứ tự hai đối số.",
          "answer": true,
          "explain": "Đúng. Truyền theo từ khóa cho phép đảo thứ tự các đối số."
        },
        {
          "text": "Lệnh gọi thong_tin(ho_ten='Le C', '10A3') là hoàn toàn hợp lệ trong Python.",
          "answer": false,
          "explain": "Sai. Đối số vị trí bắt buộc phải đứng trước đối số từ khóa; '10A3' đứng sau ho_ten='Le C' sẽ gây SyntaxError."
        },
        {
          "text": "Lệnh gọi thong_tin('Pham D', lop='10A4', nam_sinh=2007) kết hợp đúng cả đối số vị trí và từ khóa.",
          "answer": true,
          "explain": "Đúng. Đối số vị trí 'Pham D' đứng đầu, theo sau là hai đối số từ khóa."
        }
      ]
    },
    {
      "id": "b27-tf03",
      "context": "Xét sự khác biệt khi truyền tham số là kiểu dữ liệu có thể thay đổi (mutable) và không thể thay đổi (immutable):\ndef f1(x):\n    x += 10\n\ndef f2(lst):\n    lst.append(99)",
      "statements": [
        {
          "text": "Nếu a = 5 và gọi f1(a), sau khi hàm kết thúc giá trị của a vẫn bằng 5.",
          "answer": true,
          "explain": "Đúng. Số nguyên là immutable, hàm không làm thay đổi biến a bên ngoài."
        },
        {
          "text": "Nếu my_list = [1, 2] và gọi f2(my_list), sau khi hàm kết thúc my_list sẽ trở thành [1, 2, 99].",
          "answer": true,
          "explain": "Đúng. List là mutable, phương thức append làm thay đổi trực tiếp đối tượng danh sách."
        },
        {
          "text": "Cơ chế truyền đối số trong Python về bản chất là truyền theo giá trị tham chiếu đối tượng (Pass by Object Reference).",
          "answer": true,
          "explain": "Đúng. Python truyền tham chiếu đến đối tượng trong bộ nhớ."
        },
        {
          "text": "Để tránh việc f2 làm thay đổi my_list gốc, ta có thể truyền một bản sao vào hàm bằng cú pháp f2(my_list.copy()).",
          "answer": true,
          "explain": "Đúng. Truyền bản sao giúp bảo vệ danh sách gốc không bị thay đổi."
        }
      ]
    },
    {
      "id": "b27-tf04",
      "context": "Xét hàm tính tiền sau khi áp dụng chiết khấu giảm giá cho một món hàng:\ndef tinh_tien(gia_goc, chiet_khau=0.1):\n    return gia_goc * (1 - chiet_khau)",
      "statements": [
        {
          "text": "Mức chiết khấu mặc định của hàm là 10% (tương ứng với giá trị 0.1).",
          "answer": true,
          "explain": "Đúng. chiet_khau=0.1 tương ứng 10%."
        },
        {
          "text": "Nếu gọi tinh_tien(100000), số tiền phải thanh toán trả về là 90000.0.",
          "answer": true,
          "explain": "Đúng. 100000 * (1 - 0.1) = 90000.0."
        },
        {
          "text": "Nếu một mặt hàng được giảm 20%, ta có thể gọi tinh_tien(100000, 0.2) và nhận kết quả là 80000.0.",
          "answer": true,
          "explain": "Đúng. Giá trị 0.2 sẽ ghi đè lên giá trị mặc định 0.1."
        },
        {
          "text": "Lệnh gọi tinh_tien() không truyền tham số nào vẫn chạy được và trả về giá trị 0.",
          "answer": false,
          "explain": "Sai. Tham số gia_goc là tham số bắt buộc, nếu không truyền sẽ báo lỗi TypeError: missing required positional argument."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b27-es01",
      "q": "Phân biệt tham số (parameters) và đối số (arguments) trong Python. Trình bày chi tiết hai cách truyền đối số khi gọi hàm: truyền theo vị trí (positional) và truyền theo từ khóa (keyword). Nêu ví dụ minh họa cho từng cách.",
      "answer": "1. Phân biệt tham số và đối số:\n- Tham số (Parameters): Là các biến được khai báo bên trong cặp ngoặc đơn của định nghĩa hàm (`def`). Chúng đóng vai trò nhận dữ liệu đầu vào khi hàm được thực thi.\n- Đối số (Arguments): Là các giá trị hoặc biểu thức thực tế được truyền vào cho hàm tại thời điểm gọi hàm (`function call`).\n\n2. Hai cách truyền đối số:\n- Truyền theo vị trí (Positional Arguments):\n  + Các đối số được gán cho các tham số theo đúng thứ tự xuất hiện từ trái sang phải.\n  + Ví dụ:\n  ```python\n  def gioi_thieu(ten, tuoi):\n      print(f'Tôi tên là {ten}, năm nay {tuoi} tuổi.')\n  gioi_thieu('Minh', 16)  # 'Minh' gán cho ten, 16 gán cho tuoi\n  ```\n- Truyền theo từ khóa (Keyword Arguments):\n  + Đối số được truyền kèm theo tên tham số dưới dạng `tên_tham_số = giá_trị`.\n  + Ưu điểm: Không cần quan tâm đến thứ tự của các tham số khi gọi hàm.\n  + Ví dụ:\n  ```python\n  gioi_thieu(tuoi=16, ten='Minh')  # Thứ tự đảo lộn nhưng Python vẫn gán chính xác\n  ```\n- Lưu ý: Khi kết hợp cả hai cách, các đối số vị trí bắt buộc phải đứng trước các đối số từ khóa."
    },
    {
      "id": "b27-es02",
      "q": "Thế nào là tham số mặc định (default parameters) trong Python? Nêu quy tắc bắt buộc khi khai báo tham số mặc định. Viết hàm `tinh_cuoc_taxi(quang_duong, gia_mo_cua=12000, gia_km=10000)` tính cước xe taxi và minh họa 2 trường hợp gọi hàm.",
      "answer": "1. Khái niệm và quy tắc tham số mặc định:\n- Khái niệm: Tham số mặc định là tham số đã được gán sẵn một giá trị tại thời điểm định nghĩa hàm. Khi gọi hàm, nếu người dùng không truyền giá trị cho tham số đó thì Python sẽ tự động lấy giá trị mặc định để thực thi.\n- Quy tắc bắt buộc: Trong định nghĩa hàm, các tham số có giá trị mặc định bắt buộc phải nằm ở phía sau (bên phải) tất cả các tham số không có giá trị mặc định. Nếu đặt tham số mặc định trước tham số thông thường, Python sẽ báo lỗi `SyntaxError: non-default argument follows default argument`.\n\n2. Viết hàm và minh họa gọi hàm:\n```python\n# Định nghĩa hàm tính cước taxi\ndef tinh_cuoc_taxi(quang_duong, gia_mo_cua=12000, gia_km=10000):\n    if quang_duong <= 0:\n        return 0\n    elif quang_duong <= 1:\n        return gia_mo_cua\n    else:\n        return gia_mo_cua + (quang_duong - 1) * gia_km\n\n# Trường hợp 1: Sử dụng giá cước mặc định cho xe 4 chỗ tiêu chuẩn\ntien_xe_1 = tinh_cuoc_taxi(5) \n# quang_duong = 5km, gia_mo_cua = 12000, gia_km = 10000\n# Tiền = 12000 + 4 * 10000 = 52000đ\nprint(f'Cước xe 4 chỗ đi 5km: {tien_xe_1}đ')\n\n# Trường hợp 2: Ghi đè giá cước cho xe 7 chỗ cao cấp\ntien_xe_2 = tinh_cuoc_taxi(5, gia_mo_cua=15000, gia_km=13000)\n# Tiền = 15000 + 4 * 13000 = 67000đ\nprint(f'Cước xe 7 chỗ đi 5km: {tien_xe_2}đ')\n```"
    }
  ]
};
