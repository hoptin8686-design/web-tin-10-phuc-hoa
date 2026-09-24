import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-24: Xâu kí tự
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b24-q01",
    "q": "Xâu kí tự (string) trong ngôn ngữ lập trình Python được định nghĩa chính xác nhất là gì?",
    "options": [
      "Dãy các kí tự được đặt trong cặp dấu nháy đơn '...' hoặc cặp dấu nháy kép \"...\".",
      "Dãy các số nguyên được đặt trong cặp dấu ngoặc vuông và phân cách bởi dấu chấm phẩy.",
      "Một đại lượng biến đổi động chỉ lưu trữ các chữ số nhị phân 0 và 1 trong bộ vi xử lý.",
      "Tệp văn bản nhị phân độc lập được lưu trữ vĩnh viễn trên ổ đĩa cứng của máy tính."
    ],
    "answer": 0,
    "explain": "Xâu kí tự trong Python là dãy kí tự đặt trong cặp dấu nháy đơn '...' hoặc kép \"...\"."
  },
  {
    "id": "b24-q02",
    "q": "Tính chất 'bất biến' (immutable) của xâu kí tự trong Python có nghĩa là gì?",
    "options": [
      "Không thể thay đổi giá trị của từng kí tự bên trong xâu thông qua phép gán chỉ số s[i] = c.",
      "Không thể thực hiện phép ghép hai xâu kí tự với nhau bằng toán tử cộng trong chương trình.",
      "Độ dài của xâu kí tự là cố định và không bao giờ vượt quá 255 kí tự trong bộ nhớ RAM.",
      "Chỉ có thể đọc xâu một lần duy nhất từ bàn phím và không thể in ra màn hình nhiều lần."
    ],
    "answer": 0,
    "explain": "Xâu kí tự là bất biến (immutable), không cho phép thay đổi từng kí tự qua chỉ số s[i] = 'a'."
  },
  {
    "id": "b24-q03",
    "q": "Điều gì sẽ xảy ra khi thực hiện lệnh s = 'Python'; s[0] = 'p' trong môi trường Python?",
    "options": [
      "Báo lỗi TypeError: 'str' object does not support item assignment do tính bất biến của xâu.",
      "Kí tự đầu tiên được đổi thành 'p' thường và xâu s trở thành 'python' thành công.",
      "Chương trình tự động tạo ra một biến mới có tên là s_new để lưu xâu sau khi sửa đổi.",
      "Lệnh bị bỏ qua và xâu s vẫn giữ nguyên giá trị ban đầu mà không có bất kỳ thông báo nào."
    ],
    "answer": 0,
    "explain": "Xâu là immutable nên gán kí tự vào chỉ số gây TypeError: 'str' object does not support item assignment."
  },
  {
    "id": "b24-q04",
    "q": "Để lấy số lượng kí tự (độ dài) của một xâu kí tự s trong Python, ta sử dụng hàm chuẩn nào?",
    "options": [
      "Hàm len(s) trả về một số nguyên biểu thị chính xác số kí tự có trong xâu kí tự s.",
      "Hàm length(s) trả về một số nguyên biểu thị chính xác số kí tự có trong xâu kí tự s.",
      "Hàm size(s) trả về một số nguyên biểu thị chính xác số kí tự có trong xâu kí tự s.",
      "Hàm str_count(s) trả về một số nguyên biểu thị chính xác số kí tự có trong xâu kí tự s."
    ],
    "answer": 0,
    "explain": "len(s) trả về độ dài của xâu kí tự s."
  },
  {
    "id": "b24-q05",
    "q": "Quy tắc đánh chỉ số của xâu kí tự trong Python tương đồng với cấu trúc dữ liệu nào sau đây?",
    "options": [
      "Kiểu dữ liệu danh sách (list), với chỉ số dương từ 0 đến len-1 và chỉ số âm từ -1 lùi dần.",
      "Kiểu dữ liệu tập hợp (set), hoàn toàn không có thứ tự và không sử dụng chỉ số truy cập.",
      "Kiểu dữ liệu từ điển (dict), sử dụng các khóa dạng văn bản để truy xuất nội dung phần tử.",
      "Kiểu dữ liệu logic (bool), chỉ phân biệt hai trạng thái chỉ số đúng và chỉ số sai."
    ],
    "answer": 0,
    "explain": "Xâu kí tự đánh chỉ số giống danh sách: chỉ số dương từ 0, chỉ số âm từ -1 từ phải sang trái."
  },
  {
    "id": "b24-q06",
    "q": "Cho xâu s = 'VIETNAM'. Biểu thức s[4] trả về kí tự nào trong bảng chữ cái?",
    "options": [
      "Kí tự 'N' vì chỉ số 4 tương ứng với vị trí thứ năm tính từ đầu xâu bên trái.",
      "Kí tự 'T' vì chỉ số 4 tương ứng với vị trí thứ tư tính từ đầu xâu bên trái.",
      "Kí tự 'A' vì chỉ số 4 được tính theo thứ tự từ cuối xâu về phía trước.",
      "Kí tự 'M' vì chỉ số 4 tự động lấy phần tử đứng ở vị trí cuối cùng của chuỗi."
    ],
    "answer": 0,
    "explain": "s[0]='V', s[1]='I', s[2]='E', s[3]='T', s[4]='N'."
  },
  {
    "id": "b24-q07",
    "q": "Cho xâu s = 'TIN HOC'. Kí tự tại vị trí s[-1] và s[3] lần lượt là những kí tự nào?",
    "options": [
      "Kí tự 'C' và kí tự dấu khoảng trắng ' ' nằm tại vị trí phân tách hai từ.",
      "Kí tự 'H' và kí tự chữ cái 'O' nằm ở giữa của xâu kí tự văn bản.",
      "Kí tự 'T' và kí tự dấu khoảng trắng ' ' nằm tại vị trí phân tách hai từ.",
      "Kí tự 'C' và kí tự chữ cái 'H' nằm liền kề phía sau dấu khoảng cách."
    ],
    "answer": 0,
    "explain": "s[-1] là kí tự cuối cùng 'C'; s[0]='T', s[1]='I', s[2]='N', s[3]=' ' (khoảng trắng)."
  },
  {
    "id": "b24-q08",
    "q": "Phép toán ghép nối hai xâu kí tự s1 = 'Ha' và s2 = 'Noi' được thực hiện bằng cú pháp nào?",
    "options": [
      "Biểu thức s1 + s2 cho ra kết quả xâu mới là 'HaNoi' bằng cách ghép liền hai chuỗi.",
      "Biểu thức s1 * s2 cho ra kết quả xâu mới là 'HaNoi' bằng phép nhân ma trận xâu.",
      "Biểu thức s1 & s2 cho ra kết quả xâu mới là 'HaNoi' bằng phép toán logic bitwise.",
      "Biểu thức s1.append(s2) gọi phương thức nối chuỗi trực tiếp của đối tượng xâu."
    ],
    "answer": 0,
    "explain": "Toán tử + dùng để ghép hai xâu kí tự trong Python."
  },
  {
    "id": "b24-q09",
    "q": "Kết quả hiển thị trên màn hình của biểu thức 'Ha' * 3 trong ngôn ngữ Python là gì?",
    "options": [
      "Xâu kí tự 'HaHaHa' lặp lại 3 lần liên tiếp theo tính chất của phép nhân bản xâu.",
      "Xâu kí tự 'Ha 3' ghép thêm số nguyên 3 vào phía sau chuỗi kí tự ban đầu.",
      "Chương trình báo lỗi TypeError vì không thể nhân một chuỗi kí tự với một số nguyên.",
      "Xâu kí tự 'HHHHaaaa' nhân bản từng kí tự chữ cái riêng biệt bên trong chuỗi."
    ],
    "answer": 0,
    "explain": "'Ha' * 3 tạo ra chuỗi nhân bản 3 lần: 'HaHaHa'."
  },
  {
    "id": "b24-q10",
    "q": "Toán tử nào sau đây dùng để kiểm tra xem một xâu con có xuất hiện bên trong xâu mẹ hay không?",
    "options": [
      "Toán tử 'in' trả về True nếu xâu con xuất hiện trong xâu mẹ, ngược lại trả về False.",
      "Toán tử 'has' trả về True nếu xâu con xuất hiện trong xâu mẹ, ngược lại trả về False.",
      "Toán tử 'find_in' kiểm tra sự tồn tại của xâu con trong thư viện chuẩn xâu kí tự.",
      "Toán tử 'like' kiểm tra mẫu kí tự đại diện tương tự như trong câu lệnh SQL."
    ],
    "answer": 0,
    "explain": "Toán tử `in` kiểm tra sự tồn tại của xâu con: `'abc' in 'abcdef'` trả về True."
  },
  {
    "id": "b24-q11",
    "q": "Biểu thức 'tin' in 'Tin hoc 10' trả về kết quả gì trong môi trường lập trình Python?",
    "options": [
      "Giá trị False vì Python phân biệt chữ hoa và chữ thường, 'tin' chữ thường khác 'Tin' chữ hoa.",
      "Giá trị True vì các kí tự chữ cái t, i, n đều có mặt đầy đủ trong xâu mẹ ban đầu.",
      "Giá trị số 0 biểu thị chỉ số xuất hiện đầu tiên của cụm từ bên trong chuỗi văn bản.",
      "Chương trình báo lỗi vì toán tử in chỉ áp dụng cho danh sách chứ không áp dụng cho xâu."
    ],
    "answer": 0,
    "explain": "Python phân biệt hoa thường nên 'tin' không có trong 'Tin hoc 10' -> False."
  },
  {
    "id": "b24-q12",
    "q": "Xem xét đoạn chương trình sau:\ns = 'Python'\nfor ch in s:\n    print(ch, end=' ')\nKết quả xuất hiện trên màn hình là gì?",
    "options": [
      "Dãy kí tự: P y t h o n cách nhau bởi khoảng trắng hiển thị trên cùng một dòng.",
      "Dòng thông báo lỗi do biến ch không thể duyệt qua từng kí tự của chuỗi s.",
      "Toàn bộ xâu 'Python' được in lặp lại đúng 6 lần trên 6 dòng màn hình riêng biệt.",
      "Chỉ in duy nhất kí tự đầu tiên 'P' rồi kết thúc chương trình do không có chỉ số."
    ],
    "answer": 0,
    "explain": "Vòng for duyệt qua từng kí tự 'P', 'y', 't', 'h', 'o', 'n' và in cách nhau khoảng trắng."
  },
  {
    "id": "b24-q13",
    "q": "Để đếm số lần xuất hiện của kí tự 'a' trong một xâu văn bản s, đoạn mã nào sau đây chuẩn xác?",
    "options": [
      "dem = 0; for ch in s: if ch == 'a': dem += 1 duyệt từng kí tự và cộng dồn biến đếm.",
      "dem = 0; for i in range(s): if s[i] == 'a': dem += 1 dùng trực tiếp xâu s trong hàm range.",
      "dem = len(s, 'a') truyền trực tiếp kí tự 'a' vào làm tham số thứ hai của hàm len.",
      "dem = s.find('a') lấy chỉ số của kí tự xuất hiện đầu tiên để làm số lượng tổng cộng."
    ],
    "answer": 0,
    "explain": "Duyệt for ch in s và kiểm tra ch == 'a' để tăng dem, hoặc dùng s.count('a')."
  },
  {
    "id": "b24-q14",
    "q": "Một xâu kí tự được gọi là xâu đối xứng (Palindrome) khi thỏa mãn điều kiện nào sau đây?",
    "options": [
      "Đọc từ trái sang phải hay từ phải sang trái đều cho nội dung kí tự hoàn toàn giống nhau.",
      "Độ dài của xâu là một số chẵn và nửa đầu của xâu trùng khít với nửa sau của xâu.",
      "Tất cả các kí tự trong xâu đều được viết hoa toàn bộ theo chuẩn danh từ riêng.",
      "Xâu chỉ chứa toàn các kí tự chữ số từ 0 đến 9 mà không có bất kỳ chữ cái nào."
    ],
    "answer": 0,
    "explain": "Xâu Palindrome đọc xuôi hay ngược đều như nhau (ví dụ 'radar', 'madam')."
  },
  {
    "id": "b24-q15",
    "q": "Biểu thức cắt xâu s[::-1] trong Python có tác dụng nào đối với xâu kí tự s?",
    "options": [
      "Tạo ra một xâu mới có thứ tự các kí tự bị đảo ngược hoàn toàn từ cuối về đầu.",
      "Xóa bỏ kí tự đầu tiên và kí tự cuối cùng ra khỏi nội dung của xâu ban đầu.",
      "Cắt lấy một nửa số lượng kí tự nằm ở phía trước của xâu theo chiều thuận.",
      "Kiểm tra xem xâu có chứa các kí tự đặc biệt không hợp lệ hay không."
    ],
    "answer": 0,
    "explain": "s[::-1] là kĩ thuật cắt lát đảo ngược xâu kí tự trong Python."
  },
  {
    "id": "b24-q16",
    "q": "Cho xâu s = '12345'. Biểu thức s[1:4] sẽ trả về xâu con nào sau đây?",
    "options": [
      "Xâu con '234' gồm các kí tự từ chỉ số 1 đến chỉ số 3 (dừng trước chỉ số kết thúc 4).",
      "Xâu con '1234' gồm các kí tự từ đầu xâu cho đến vị trí chỉ số thứ tư.",
      "Xâu con '2345' gồm các kí tự từ chỉ số 1 kéo dài đến hết xâu ban đầu.",
      "Xâu con '135' gồm các kí tự ở vị trí chỉ số lẻ của chuỗi số tự nhiên."
    ],
    "answer": 0,
    "explain": "s[start:stop] lấy từ start đến stop-1. s[1:4] lấy s[1]='2', s[2]='3', s[3]='4' -> '234'."
  }
];
