import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-31: Thực hành viết chương trình đơn giản

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b31-tf01",
      "context": "Xét bài toán viết chương trình tính tiền điện sinh hoạt theo phương pháp bậc thang rút gọn:\n- Bậc 1 (từ 0 đến 50 kWh): giá 1678 đ/kWh.\n- Bậc 2 (từ kWh thứ 51 trở đi): giá 1734 đ/kWh.",
      "statements": [
        {
          "text": "Dữ liệu đầu vào (Input) của bài toán là lượng điện năng tiêu thụ (số kWh) nhập từ bàn phím.",
          "answer": true,
          "explain": "Đúng. Input là số kWh điện tiêu thụ."
        },
        {
          "text": "Nếu tiêu thụ 40 kWh thì số tiền điện phải trả được tính theo công thức: 40 * 1678.",
          "answer": true,
          "explain": "Đúng. 40 <= 50 nên toàn bộ tính theo giá bậc 1."
        },
        {
          "text": "Nếu tiêu thụ 60 kWh thì số tiền điện phải trả được tính theo công thức: 60 * 1734.",
          "answer": false,
          "explain": "Sai. Đây là tính lũy tiến bậc thang: 50 kWh đầu tính giá bậc 1 (50 * 1678), 10 kWh sau tính giá bậc 2 (10 * 1734)."
        },
        {
          "text": "Chương trình cần sử dụng cấu trúc rẽ nhánh if - else để phân loại hai trường hợp số kWh <= 50 và > 50.",
          "answer": true,
          "explain": "Đúng. Cần rẽ nhánh kiểm tra ngưỡng 50 kWh."
        }
      ]
    },
    {
      "id": "b31-tf02",
      "context": "Một học sinh viết chương trình kiểm tra ba số a, b, c có tạo thành ba cạnh của tam giác không, và nếu có thì tính diện tích theo công thức Hê-rông:\na = float(input('a = '))\nb = float(input('b = '))\nc = float(input('c = '))\nif a + b > c and a + c > b and b + c > a:\n    p = (a + b + c) / 2\n    s = (p * (p - a) * (p - b) * (p - c)) ** 0.5\n    print('Diện tích tam giác:', s)\nelse:\n    print('Không phải tam giác')",
      "statements": [
        {
          "text": "Điều kiện a + b > c and a + c > b and b + c > a là điều kiện cần và đủ để ba số dương a, b, c tạo thành tam giác.",
          "answer": true,
          "explain": "Đúng. Bất đẳng thức tam giác bắt buộc tổng hai cạnh luôn lớn hơn cạnh thứ ba."
        },
        {
          "text": "Biến p trong đoạn mã đóng vai trò là nửa chu vi của tam giác.",
          "answer": true,
          "explain": "Đúng. p = (a + b + c) / 2 là nửa chu vi."
        },
        {
          "text": "Toán tử ** 0.5 được sử dụng để tính căn bậc hai của biểu thức tích Hê-rông.",
          "answer": true,
          "explain": "Đúng. Lũy thừa 0.5 tương đương phép lấy căn bậc hai."
        },
        {
          "text": "Nếu nhập a = 3, b = 4, c = 5 thì chương trình sẽ in ra 'Không phải tam giác'.",
          "answer": false,
          "explain": "Sai. 3, 4, 5 thỏa mãn bất đẳng thức tam giác, chương trình sẽ tính ra diện tích s = 6.0."
        }
      ]
    },
    {
      "id": "b31-tf03",
      "context": "Xét đoạn mã in dãy số Fibonacci gồm n phần tử đầu tiên (với n >= 2):\nn = int(input('Nhập n: '))\nf0, f1 = 0, 1\nprint(f0, f1, end=' ')\nfor i in range(2, n):\n    fn = f0 + f1\n    print(fn, end=' ')\n    f0, f1 = f1, fn",
      "statements": [
        {
          "text": "Dãy Fibonacci bắt đầu bằng hai số hạng đầu tiên là 0 và 1.",
          "answer": true,
          "explain": "Đúng. f0 = 0, f1 = 1."
        },
        {
          "text": "Mỗi số hạng tiếp theo được tính bằng tổng của hai số hạng liền trước nó: fn = f0 + f1.",
          "answer": true,
          "explain": "Đúng. Quy luật Fibonacci: F(n) = F(n-1) + F(n-2)."
        },
        {
          "text": "Câu lệnh f0, f1 = f1, fn sử dụng kĩ thuật gán đồng thời để dịch chuyển hai giá trị liền trước cho bước lặp kế tiếp.",
          "answer": true,
          "explain": "Đúng. f0 nhận giá trị f1, f1 nhận giá trị fn."
        },
        {
          "text": "Với n = 5, dãy số in ra trên màn hình sẽ là: 0 1 1 2 3.",
          "answer": true,
          "explain": "Đúng. Dãy gồm 5 số: 0, 1, 0+1=1, 1+1=2, 1+2=3."
        }
      ]
    },
    {
      "id": "b31-tf04",
      "context": "Một học sinh thảo luận về các thói quen tốt khi viết mã nguồn chương trình trong giờ thực hành Tin học 10:",
      "statements": [
        {
          "text": "Nên viết các dòng chú thích (#) giải thích ý nghĩa các khối lệnh phức tạp để dễ đọc lại sau này.",
          "answer": true,
          "explain": "Đúng. Chú thích rõ ràng là thói quen lập trình tốt."
        },
        {
          "text": "Nên gộp toàn bộ tất cả các chức năng vào một hàm duy nhất dài hàng trăm dòng để máy tính chạy nhanh hơn.",
          "answer": false,
          "explain": "Sai. Cần chia nhỏ mã thành các hàm ngắn gọn chuyên biệt (tính module hóa)."
        },
        {
          "text": "Cần kiểm tra tính hợp lệ của dữ liệu người dùng nhập vào để chương trình không bị sập bất ngờ.",
          "answer": true,
          "explain": "Đúng. Bẫy lỗi và kiểm tra dữ liệu đầu vào giúp chương trình chạy ổn định."
        },
        {
          "text": "Sau khi viết mã xong, chỉ cần chạy thử một bộ số bất kỳ thấy có kết quả là có thể bàn giao ngay mà không cần kiểm thử thêm.",
          "answer": false,
          "explain": "Sai. Cần kiểm thử đầy đủ các bộ test thông thường, biên và đặc biệt."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b31-es01",
      "q": "Trình bày 5 bước trong quy trình giải quyết bài toán bằng lập trình máy tính. Tại sao bước 'Xác định bài toán' lại đóng vai trò quyết định đầu tiên đến sự thành công của cả dự án phần mềm?",
      "answer": "1. Năm bước trong quy trình giải quyết bài toán bằng lập trình:\n- Bước 1: Xác định bài toán (Problem Formulation): Phân tích và chỉ rõ dữ liệu đầu vào (Input), kết quả đầu ra cần đạt được (Output) và các điều kiện, ràng buộc liên quan.\n- Bước 2: Thiết kế thuật toán (Algorithm Design): Lựa chọn cấu trúc dữ liệu và xây dựng các bước giải quyết bài toán (bằng sơ đồ khối hoặc mã giả/mô tả từng bước).\n- Bước 3: Viết mã chương trình (Coding): Sử dụng một ngôn ngữ lập trình cụ thể (như Python) để cài đặt thuật toán thành chương trình nguồn có thể chạy được trên máy tính.\n- Bước 4: Kiểm thử và gỡ lỗi (Testing & Debugging): Chạy thử chương trình với các bộ dữ liệu thử nghiệm (bình thường, biên, đặc biệt), phát hiện lỗi và tiến hành sửa lỗi.\n- Bước 5: Hoàn thiện tài liệu (Documentation): Viết tài liệu hướng dẫn sử dụng và chú thích mã nguồn để phục vụ việc bảo trì, chuyển giao và nâng cấp sau này.\n\n2. Tầm quan trọng của bước Xác định bài toán:\n- Nếu không hiểu đúng hoặc xác định sai bài toán, toàn bộ các bước tiếp theo (thuật toán, viết mã, kiểm thử) dù có thực hiện hoàn hảo đến đâu thì sản phẩm tạo ra cũng hoàn toàn sai lệch so với nhu cầu thực tế của người dùng.\n- Xác định đúng bài toán giúp lập trình viên định hình rõ mục tiêu, tiết kiệm thời gian, tránh việc phải đập đi viết lại toàn bộ mã nguồn."
    },
    {
      "id": "b31-es02",
      "q": "Viết chương trình Python hoàn chỉnh giải bài toán sau: Nhập vào số nguyên dương n từ bàn phím. Hãy:\na) Tính tổng các số chẵn trong phạm vi từ 1 đến n.\nb) Đếm xem trong phạm vi từ 1 đến n có bao nhiêu số chia hết cho 3 nhưng không chia hết cho 5.\nc) In kết quả rõ ràng ra màn hình.",
      "answer": "Chương trình Python giải bài toán số học:\n\n```python\n# Bước 1: Nhập số nguyên dương n từ bàn phím\nn = int(input('Nhập số nguyên dương n (n > 0): '))\n\n# Khởi tạo các biến tích lũy\ntong_chan = 0\ndem_chia_3_khong_5 = 0\n\n# Bước 2 & 3: Sử dụng vòng lặp for duyệt từ 1 đến n\nfor i in range(1, n + 1):\n    # a) Kiểm tra số chẵn và cộng dồn\n    if i % 2 == 0:\n        tong_chan += i\n    \n    # b) Kiểm tra chia hết cho 3 nhưng không chia hết cho 5\n    if (i % 3 == 0) and (i % 5 != 0):\n        dem_chia_3_khong_5 += 1\n\n# In kết quả hiển thị ra màn hình\nprint('\\n--- KẾT QUẢ TÍNH TOÁN ---')\nprint(f'a) Tổng các số chẵn từ 1 đến {n} là: {tong_chan}')\nprint(f'b) Số lượng các số chia hết cho 3 nhưng không chia cho 5 là: {dem_chia_3_khong_5}')\n```\n\nGiải thích:\n- Sử dụng vòng lặp `for i in range(1, n + 1)` để duyệt tuần tự qua tất cả các số nguyên từ 1 đến n.\n- Điều kiện `i % 2 == 0` lọc ra các số chẵn để cộng vào biến `tong_chan`.\n- Điều kiện logic `(i % 3 == 0) and (i % 5 != 0)` kiểm tra chính xác các số chia hết cho 3 nhưng đồng thời không chia hết cho 5 để tăng biến đếm `dem_chia_3_khong_5`."
    }
  ]
};
