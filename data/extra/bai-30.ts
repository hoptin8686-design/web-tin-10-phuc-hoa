import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-30: Kiểm thử và gỡ lỗi chương trình

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b30-tf01",
      "context": "Xét bài toán viết hàm `tim_kiem(x, a)` tìm vị trí xuất hiện đầu tiên của phần tử x trong danh sách a (trả về chỉ số nếu thấy, trả về -1 nếu không thấy):",
      "statements": [
        {
          "text": "Trường hợp a = [10, 20, 30], x = 20 là một ca kiểm thử trường hợp bình thường (Normal case).",
          "answer": true,
          "explain": "Đúng. Phần tử nằm ở giữa danh sách là trường hợp hoạt động thông thường."
        },
        {
          "text": "Trường hợp a = [], x = 5 là một ca kiểm thử dữ liệu đặc biệt (danh sách rỗng).",
          "answer": true,
          "explain": "Đúng. Danh sách rỗng là test case đặc biệt quan trọng để tránh lỗi IndexError."
        },
        {
          "text": "Trường hợp a = [5, 10, 15], x = 5 là ca kiểm thử phần tử nằm ở vị trí biên đầu danh sách.",
          "answer": true,
          "explain": "Đúng. Kiểm tra phần tử đầu tiên (chỉ số 0)."
        },
        {
          "text": "Nếu hàm vượt qua được bộ test với a = [1, 2, 3], x = 2 thì có thể khẳng định hàm đã đúng 100% trong mọi trường hợp.",
          "answer": false,
          "explain": "Sai. Chỉ một ca kiểm thử đơn lẻ không thể đảm bảo hàm chạy đúng với mọi kích thước và kiểu dữ liệu khác nhau."
        }
      ]
    },
    {
      "id": "b30-tf02",
      "context": "Một học sinh sử dụng kĩ thuật in vết (Print Debugging) để tìm lỗi trong một vòng lặp tính tổng các số chẵn:\ntong = 0\nfor i in range(1, 10):\n    if i % 2 == 0:\n        tong += i\n        print(f'Gỡ lỗi: i = {i}, tong hien tai = {tong}')",
      "statements": [
        {
          "text": "Lệnh print được chèn thêm giúp người lập trình quan sát sự biến thiên của biến i và biến tong sau mỗi bước.",
          "answer": true,
          "explain": "Đúng. Đây là mục đích chính của kĩ thuật in vết gỡ lỗi."
        },
        {
          "text": "Dòng thông báo gỡ lỗi đầu tiên in ra màn hình sẽ là: 'Gỡ lỗi: i = 2, tong hien tai = 2'.",
          "answer": true,
          "explain": "Đúng. Số chẵn đầu tiên trong range(1, 10) là i = 2, tong = 2."
        },
        {
          "text": "Lệnh in vết gỡ lỗi làm cho thuật toán bị sai lệch kết quả tính toán cuối cùng của bài toán.",
          "answer": false,
          "explain": "Sai. Lệnh print chỉ xuất thông tin ra màn hình, không làm thay đổi giá trị của các biến tính toán."
        },
        {
          "text": "Sau khi đã sửa lỗi xong và kiểm tra chính xác, học sinh nên xóa bỏ dòng print gỡ lỗi này.",
          "answer": true,
          "explain": "Đúng. Trả lại mã nguồn sạch sẽ trước khi bàn giao sản phẩm."
        }
      ]
    },
    {
      "id": "b30-tf03",
      "context": "Xét tính năng đặt điểm dừng (Breakpoint) trong các môi trường lập trình chuyên nghiệp (như VS Code hay PyCharm):",
      "statements": [
        {
          "text": "Lập trình viên có thể đặt nhiều điểm dừng khác nhau tại các dòng lệnh nghi ngờ có lỗi.",
          "answer": true,
          "explain": "Đúng. Có thể đặt nhiều breakpoint trong cùng một chương trình."
        },
        {
          "text": "Khi chạy ở chế độ Debug, chương trình sẽ tự động dừng lại trước khi thực thi câu lệnh tại dòng có breakpoint.",
          "answer": true,
          "explain": "Đúng. Debugger tạm dừng ngay tại điểm dừng để người dùng thanh tra trạng thái."
        },
        {
          "text": "Tại điểm dừng, lập trình viên có thể xem được giá trị hiện thời của tất cả các biến trong bộ nhớ.",
          "answer": true,
          "explain": "Đúng. Bảng Variables/Watch hiển thị đầy đủ giá trị các biến."
        },
        {
          "text": "Điểm dừng breakpoint sẽ làm thay đổi cú pháp mã nguồn và khiến tệp tin bị tăng dung lượng trên đĩa.",
          "answer": false,
          "explain": "Sai. Breakpoint là tính năng điều khiển của IDE, không ghi thêm mã vào tệp nguồn."
        }
      ]
    },
    {
      "id": "b30-tf04",
      "context": "Một nhóm học sinh xây dựng bộ dữ liệu kiểm thử cho bài toán kiểm tra năm nhuận N (dương lịch):",
      "statements": [
        {
          "text": "Năm N = 2024 là test case kiểm tra năm chia hết cho 4 nhưng không chia hết cho 100 (kết quả kì vọng: Là năm nhuận).",
          "answer": true,
          "explain": "Đúng. 2024 chia hết cho 4 và không chia hết cho 100 là năm nhuận."
        },
        {
          "text": "Năm N = 2000 là test case kiểm tra năm chia hết cho 400 (kết quả kì vọng: Là năm nhuận).",
          "answer": true,
          "explain": "Đúng. 2000 chia hết cho 400 nên là năm nhuận thế kỉ."
        },
        {
          "text": "Năm N = 1900 là test case kiểm tra năm chia hết cho 100 nhưng không chia hết cho 400 (kết quả kì vọng: Không nhuận).",
          "answer": true,
          "explain": "Đúng. 1900 chia hết cho 100 nhưng không chia hết cho 400 nên không phải năm nhuận."
        },
        {
          "text": "Chỉ cần kiểm thử với N = 2024 là đủ để kết luận chương trình kiểm tra năm nhuận viết đúng với mọi năm lịch sử.",
          "answer": false,
          "explain": "Sai. Thuật toán năm nhuận có các điều kiện ngoại lệ phức tạp (chia hết cho 100, chia hết cho 400), cần đủ các ca kiểm thử trên."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b30-es01",
      "q": "Kiểm thử chương trình là gì? Phân biệt giữa dữ liệu kiểm thử thông thường, dữ liệu kiểm thử biên và dữ liệu kiểm thử đặc biệt. Lấy ví dụ bộ dữ liệu kiểm thử cho bài toán giải phương trình bậc nhất ax + b = 0.",
      "answer": "1. Khái niệm kiểm thử chương trình:\n- Kiểm thử (testing) là quá trình chạy chương trình với các bộ dữ liệu thử nghiệm có chủ đích nhằm phát hiện ra các lỗi tiềm ẩn, bảo đảm chương trình hoạt động đúng theo các yêu cầu thiết kế ban đầu.\n\n2. Phân loại dữ liệu kiểm thử:\n- Dữ liệu thông thường (Normal test data): Là các giá trị phổ biến, nằm sâu bên trong miền dữ liệu hợp lệ mà người dùng thường xuyên nhập.\n- Dữ liệu biên (Boundary test data): Là các giá trị nằm ngay sát ranh giới giữa các miền dữ liệu (giá trị cực tiểu, cực đại, điểm chuyển giao điều kiện).\n- Dữ liệu đặc biệt (Special test data): Là các giá trị ngoại lệ, dữ liệu rỗng, dữ liệu số 0, số âm, hoặc dữ liệu sai định dạng để kiểm tra khả năng phòng thủ và xử lý ngoại lệ của chương trình.\n\n3. Ví dụ bộ dữ liệu kiểm thử cho phương trình ax + b = 0:\n- Ca 1 (Thông thường): a = 2, b = -6 -> Kì vọng: Nghiệm duy nhất x = 3.0.\n- Ca 2 (Dữ liệu biên/đặc biệt): a = 0, b = 0 -> Kì vọng: Phương trình có vô số nghiệm.\n- Ca 3 (Dữ liệu đặc biệt): a = 0, b = 5 -> Kì vọng: Phương trình vô nghiệm.\n- Ca 4 (Dữ liệu số thực thập phân): a = 3, b = 2 -> Kì vọng: Nghiệm duy nhất x = -0.67."
    },
    {
      "id": "b30-es02",
      "q": "Gỡ lỗi (debugging) là gì? Trình bày chi tiết hai phương pháp gỡ lỗi phổ biến: phương pháp in vết (Print Debugging) và phương pháp sử dụng công cụ gỡ lỗi (Debugger). Nêu ưu và nhược điểm của mỗi phương pháp.",
      "answer": "1. Khái niệm gỡ lỗi:\n- Gỡ lỗi (debugging) là quá trình truy tìm nguyên nhân gốc rễ dẫn đến lỗi (được phát hiện qua quá trình kiểm thử) và tiến hành sửa đổi mã nguồn để loại bỏ lỗi đó, khôi phục hoạt động chính xác của chương trình.\n\n2. Hai phương pháp gỡ lỗi phổ biến:\n\na) Phương pháp in vết (Print Debugging):\n- Cách thực hiện: Chèn các câu lệnh `print()` vào các vị trí nghi ngờ trước/sau các khối lệnh điều kiện, vòng lặp để in ra giá trị hiện thời của biến số hoặc thông báo chương trình đã chạy đến dòng nào.\n- Ưu điểm: Đơn giản, trực quan, dễ áp dụng ngay trong mọi môi trường (IDLE, dòng lệnh) mà không cần cài đặt thêm công cụ phụ trợ.\n- Nhược điểm: Phải sửa đổi mã nguồn; nếu lạm dụng sẽ làm rối màn hình xuất kết quả; sau khi sửa xong phải mất công tìm và xóa thủ công các dòng `print` đó.\n\nb) Phương pháp sử dụng công cụ gỡ lỗi (Debugger):\n- Cách thực hiện: Sử dụng các tính năng tích hợp của IDE như đặt điểm dừng (`breakpoint`), chạy từng bước (`step over`, `step into`), theo dõi cửa sổ biến (`watch variable`) và ngăn xếp cuộc gọi (`call stack`).\n- Ưu điểm: Cực kỳ mạnh mẽ, chuyên nghiệp, không cần sửa đổi mã nguồn, có thể xem trực tiếp trạng thái của toàn bộ bộ nhớ và luồng thực thi trong thời gian thực.\n- Nhược điểm: Đòi hỏi người lập trình phải học cách sử dụng các phím tắt và công cụ điều khiển gỡ lỗi của IDE phức tạp hơn."
    }
  ]
};
