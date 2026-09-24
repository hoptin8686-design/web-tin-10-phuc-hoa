import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-28: Phạm vi của biến

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b28-tf01",
      "context": "Xét đoạn mã nguồn minh họa phạm vi biến trong Python sau:\nx = 10\ndef ham_a():\n    y = 20\n    print('Trong hàm a:', x, y)\n\nham_a()\nprint('Ngoài hàm:', x)",
      "statements": [
        {
          "text": "Biến x là biến toàn cục vì được khai báo ở bên ngoài tất cả các hàm.",
          "answer": true,
          "explain": "Đúng. x nằm ở phạm vi mô-đun cấp cao nhất nên là biến toàn cục."
        },
        {
          "text": "Biến y là biến cục bộ của hàm ham_a và chỉ có thể sử dụng bên trong hàm ham_a.",
          "answer": true,
          "explain": "Đúng. y được gán trong ham_a nên là biến cục bộ."
        },
        {
          "text": "Nếu thêm dòng lệnh print(y) ở cuối chương trình thì màn hình sẽ in ra giá trị 20.",
          "answer": false,
          "explain": "Sai. y là biến cục bộ, gọi ngoài hàm sẽ gây lỗi NameError: name 'y' is not defined."
        },
        {
          "text": "Hàm ham_a có thể đọc và in giá trị của biến toàn cục x mà không cần từ khóa global.",
          "answer": true,
          "explain": "Đúng. Việc đọc giá trị biến toàn cục hoàn toàn tự do trong Python."
        }
      ]
    },
    {
      "id": "b28-tf02",
      "context": "Xét đoạn mã sử dụng từ khóa global để đếm số lần gọi một hàm:\ndem_so = 0\ndef xu_ly():\n    global dem_so\n    dem_so += 1\n\nxu_ly()\nxu_ly()\nxu_ly()",
      "statements": [
        {
          "text": "Từ khóa global dem_so thông báo rằng biến dem_so trong hàm chính là biến toàn cục bên ngoài.",
          "answer": true,
          "explain": "Đúng. global liên kết biến trong hàm với biến toàn cục cùng tên."
        },
        {
          "text": "Sau 3 lần gọi hàm xu_ly(), giá trị của biến toàn cục dem_so sẽ bằng 3.",
          "answer": true,
          "explain": "Đúng. Mỗi lần gọi hàm, dem_so được tăng thêm 1 đơn vị."
        },
        {
          "text": "Nếu bỏ dòng lệnh global dem_so đi thì dòng dem_so += 1 sẽ gây ra lỗi UnboundLocalError.",
          "answer": true,
          "explain": "Đúng. dem_so += 1 là phép gán, Python coi dem_so là cục bộ nhưng chưa được khởi tạo trước khi đọc."
        },
        {
          "text": "Trong mọi hàm, luôn bắt buộc phải khai báo từ khóa global cho tất cả các biến tham gia tính toán.",
          "answer": false,
          "explain": "Sai. Chỉ khi nào cần gán lại giá trị của biến toàn cục mới dùng từ khóa global."
        }
      ]
    },
    {
      "id": "b28-tf03",
      "context": "Xét hiện tượng che khuất tên biến (variable shadowing):\ndiem = 5\ndef sua_diem():\n    diem = 10\n    print('Trong hàm:', diem)\n\nsua_diem()\nprint('Ngoài hàm:', diem)",
      "statements": [
        {
          "text": "Lệnh diem = 10 trong hàm sua_diem đã tạo ra một biến cục bộ mới có tên là diem.",
          "answer": true,
          "explain": "Đúng. Do không có từ khóa global, lệnh gán tạo biến cục bộ mới."
        },
        {
          "text": "Dòng 'Trong hàm:' sẽ in ra giá trị 10.",
          "answer": true,
          "explain": "Đúng. Bên trong hàm, biến cục bộ diem=10 che khuất biến ngoài nên in 10."
        },
        {
          "text": "Dòng 'Ngoài hàm:' sẽ in ra giá trị 10 do biến diem đã bị cập nhật giá trị mới.",
          "answer": false,
          "explain": "Sai. Biến toàn cục bên ngoài vẫn giữ nguyên giá trị ban đầu là 5."
        },
        {
          "text": "Biến cục bộ diem và biến toàn cục diem thực chất là hai vùng nhớ hoàn toàn khác nhau.",
          "answer": true,
          "explain": "Đúng. Hai biến thuộc hai không gian tên (namespaces) độc lập."
        }
      ]
    },
    {
      "id": "b28-tf04",
      "context": "Một học sinh tranh luận về ưu nhược điểm của biến toàn cục và biến cục bộ trong buổi học Tin học:",
      "statements": [
        {
          "text": "Biến cục bộ giúp tiết kiệm bộ nhớ máy tính vì bộ nhớ của nó được giải phóng ngay sau khi hàm chạy xong.",
          "answer": true,
          "explain": "Đúng. Cơ chế thu hồi bộ nhớ cục bộ giúp tối ưu RAM."
        },
        {
          "text": "Sử dụng biến cục bộ giúp các hàm hoạt động độc lập và dễ dàng mang sang các dự án khác tái sử dụng.",
          "answer": true,
          "explain": "Đúng. Hàm không phụ thuộc biến ngoài có tính module hóa cao."
        },
        {
          "text": "Nên dùng biến toàn cục cho tất cả các dữ liệu để tiện truy cập mọi lúc mọi nơi mà không cần truyền tham số.",
          "answer": false,
          "explain": "Sai. Lạm dụng biến toàn cục là thực hành lập trình xấu, dễ gây lỗi ngoài ý muốn và khó bảo trì."
        },
        {
          "text": "Các tham số được định nghĩa trong hàm (def f(a, b):) cũng đóng vai trò là các biến cục bộ của hàm đó.",
          "answer": true,
          "explain": "Đúng. Các tham số chính là các biến cục bộ nhận giá trị ban đầu từ đối số."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b28-es01",
      "q": "Phân biệt biến cục bộ (local variable) và biến toàn cục (global variable) trong Python về: vị trí khai báo, phạm vi hoạt động và vòng đời tồn tại. Khi nào cần sử dụng từ khóa global bên trong hàm?",
      "answer": "1. Phân biệt biến cục bộ và biến toàn cục:\n- Vị trí khai báo:\n  + Biến cục bộ: Khai báo bên trong thân hàm (bao gồm cả các tham số của hàm).\n  + Biến toàn cục: Khai báo bên ngoài tất cả các hàm (ở cấp độ tệp chương trình).\n- Phạm vi hoạt động (Scope):\n  + Biến cục bộ: Chỉ có thể truy cập và sử dụng bên trong hàm nơi nó được sinh ra. Bên ngoài hàm không nhìn thấy biến này (nếu gọi sẽ báo lỗi `NameError`).\n  + Biến toàn cục: Có thể truy cập và đọc được ở mọi nơi trong toàn bộ chương trình, kể cả bên trong các hàm con.\n- Vòng đời tồn tại (Lifetime):\n  + Biến cục bộ: Sinh ra khi hàm bắt đầu được gọi và tự động bị hủy (giải phóng bộ nhớ) khi hàm kết thúc.\n  + Biến toàn cục: Tồn tại suốt từ lúc được tạo ra cho đến khi toàn bộ chương trình kết thúc phiên làm việc.\n\n2. Khi nào cần dùng từ khóa global:\n- Khi ở bên trong một hàm, ta muốn gán lại (thay đổi giá trị) của một biến toàn cục đã khai báo ở bên ngoài.\n- Nếu không có từ khóa `global`, phép gán `tên_biến = giá_trị` bên trong hàm sẽ tự động tạo ra một biến cục bộ mới che khuất biến ngoài, hoặc gây lỗi `UnboundLocalError` nếu có phép toán tăng giảm như `x += 1`."
    },
    {
      "id": "b28-es02",
      "q": "Cho đoạn mã Python sau:\n```python\ntong_tien = 1000\ndef mua_hang(gia_tri):\n    tong_tien = tong_tien - gia_tri\nmua_hang(200)\nprint(tong_tien)\n```\na) Hãy chỉ ra lỗi khi chạy đoạn mã trên và giải thích nguyên nhân.\nb) Hãy viết lại đoạn mã theo hai cách: cách 1 sử dụng từ khóa global; cách 2 thiết kế hàm chuẩn mực (không dùng biến toàn cục, dùng tham số và return).",
      "answer": "a) Chỉ ra lỗi và giải thích nguyên nhân:\n- Lỗi xảy ra: `UnboundLocalError: local variable 'tong_tien' referenced before assignment`.\n- Nguyên nhân: Trong thân hàm `mua_hang`, câu lệnh `tong_tien = tong_tien - gia_tri` có chứa phép gán cho biến `tong_tien`. Python tự động nhận diện `tong_tien` là một biến cục bộ của hàm, nhưng ở vế phải lại sử dụng giá trị của nó trước khi được gán giá trị khởi tạo cục bộ, dẫn đến lỗi UnboundLocalError.\n\nb) Viết lại đoạn mã:\n\nCách 1: Sử dụng từ khóa global (liên kết biến toàn cục):\n```python\ntong_tien = 1000\n\ndef mua_hang(gia_tri):\n    global tong_tien\n    tong_tien = tong_tien - gia_tri\n\nmua_hang(200)\nprint('Tổng tiền còn lại:', tong_tien)  # In ra: 800\n```\n\nCách 2: Thiết kế hàm chuẩn mực (Khuyên dùng - dùng tham số và return):\n```python\ndef tinh_tien_con_lai(so_du, gia_tri):\n    return so_du - gia_tri\n\ntong_tien = 1000\ntong_tien = tinh_tien_con_lai(tong_tien, 200)\nprint('Tổng tiền còn lại:', tong_tien)  # In ra: 800\n```"
    }
  ]
};
