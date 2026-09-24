import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-18: Các lệnh vào ra đơn giản
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b18-q01",
    "q": "Hàm chuẩn nào trong Python được sử dụng để nhận dữ liệu nhập vào từ bàn phím của người dùng?",
    "options": [
      "Hàm input() dừng chương trình, chờ người dùng nhập văn bản và nhấn phím Enter để tiếp tục.",
      "Hàm scan() dừng chương trình, chờ người dùng nhập văn bản và nhấn phím Enter để tiếp tục.",
      "Hàm read() dừng chương trình, chờ người dùng nhập văn bản và nhấn phím Enter để tiếp tục.",
      "Hàm cin() dừng chương trình, chờ người dùng nhập văn bản và nhấn phím Enter để tiếp tục."
    ],
    "answer": 0,
    "explain": "Hàm input() là hàm chuẩn trong Python dùng để nhập dữ liệu từ bàn phím."
  },
  {
    "id": "b18-q02",
    "q": "Giá trị trả về mặc định của hàm input() trong Python luôn thuộc kiểu dữ liệu nào sau đây?",
    "options": [
      "Kiểu xâu kí tự str bất kể người dùng nhập vào là chữ cái hay các chữ số số học.",
      "Kiểu số nguyên int nếu người dùng chỉ nhập vào toàn các kí tự số từ 0 đến 9.",
      "Kiểu số thực float nếu người dùng nhập vào số có chứa dấu chấm thập phân.",
      "Kiểu đối tượng động tự biến đổi tùy theo suy đoán ngữ cảnh của hệ điều hành."
    ],
    "answer": 0,
    "explain": "Hàm input() luôn trả về dữ liệu kiểu xâu kí tự (str)."
  },
  {
    "id": "b18-q03",
    "q": "Để nhập một số nguyên n từ bàn phím, câu lệnh Python nào sau đây được viết chính xác nhất?",
    "options": [
      "n = int(input('Nhập số nguyên n: ')) sử dụng hàm ép kiểu int bao bọc bên ngoài hàm input.",
      "n = input(int('Nhập số nguyên n: ')) sử dụng hàm input bao bọc bên ngoài hàm ép kiểu int.",
      "n = str(input('Nhập số nguyên n: ')) sử dụng hàm ép kiểu str để chuyển dữ liệu số nguyên.",
      "n = float(input('Nhập số nguyên n: ')) nếu chỉ có nhu cầu lưu trữ số nguyên không phần lẻ."
    ],
    "answer": 0,
    "explain": "Dùng int(input()) để chuyển xâu kí tự nhập vào thành số nguyên."
  },
  {
    "id": "b18-q04",
    "q": "Hàm print() trong Python có tham số mặc định sep mang giá trị nào nếu không được người dùng chỉ định?",
    "options": [
      "Một kí tự dấu khoảng trắng ' ' dùng để phân tách giữa các phần tử xuất ra liên tiếp.",
      "Một kí tự dấu phẩy ',' dùng để ngăn cách trực tiếp các phần tử hiển thị trên màn hình.",
      "Một kí tự xuống dòng '\\n' khiến mỗi giá trị đều phải nằm trên một dòng riêng biệt.",
      "Một xâu rỗng '' nối liền các phần tử lại với nhau mà không có bất kỳ khoảng cách nào."
    ],
    "answer": 0,
    "explain": "Mặc định tham số sep=' ' (khoảng trắng phân cách giữa các đối số in ra)."
  },
  {
    "id": "b18-q05",
    "q": "Tham số end trong hàm print() của Python có giá trị mặc định là kí tự nào sau đây?",
    "options": [
      "Kí tự xuống dòng '\\n' giúp con trỏ tự động chuyển xuống đầu dòng tiếp theo sau khi in xong.",
      "Kí tự dấu khoảng trắng ' ' giữ con trỏ ở lại trên cùng dòng để chuẩn bị cho lệnh in kế.",
      "Kí tự dấu chấm '.' để kết thúc một câu hoàn chỉnh theo quy tắc ngữ pháp tiếng Anh.",
      "Kí tự dấu chấm phẩy ';' dùng để kết thúc câu lệnh xuất thông điệp trong lập trình."
    ],
    "answer": 0,
    "explain": "Mặc định tham số end='\\n' (kí tự xuống dòng)."
  },
  {
    "id": "b18-q06",
    "q": "Kết quả hiển thị trên màn hình khi chạy lệnh print(1, 2, 3, sep='-', end='!') là gì?",
    "options": [
      "Dòng thông báo 1-2-3! với các số nối bằng gạch nối và kết thúc ngay bằng dấu chấm than.",
      "Dòng thông báo 1 2 3-! với các số cách nhau bởi khoảng trắng và dấu gạch nối cuối cùng.",
      "Dòng thông báo 1-2-3 và dấu chấm than bị đẩy xuống dòng tiếp theo trên màn hình hiển thị.",
      "Chương trình báo lỗi vì hàm print() không hỗ trợ tùy biến đồng thời cả hai tham số sep và end."
    ],
    "answer": 0,
    "explain": "sep='-' thay khoảng trắng bằng '-', end='!' thay dấu xuống dòng bằng '!', nên kết quả là '1-2-3!'."
  },
  {
    "id": "b18-q07",
    "q": "Phép toán so sánh nào sau đây trong Python dùng để kiểm tra tính khác nhau giữa hai biểu thức?",
    "options": [
      "Toán tử gồm dấu chấm than kết hợp dấu bằng != trả về True nếu hai giá trị khác nhau.",
      "Toán tử hai dấu lớn hơn và nhỏ hơn xếp liền nhau <> dùng theo quy ước của Pascal cũ.",
      "Toán tử một dấu ngã kết hợp dấu bằng ~= dùng theo quy ước của phần mềm Matlab.",
      "Toán tử từ khóa not equal viết bằng chữ cái tiếng Anh ngăn cách nhau bởi khoảng trắng."
    ],
    "answer": 0,
    "explain": "!= là toán tử so sánh khác nhau trong Python."
  },
  {
    "id": "b18-q08",
    "q": "Biểu thức logic (5 > 3) and (10 < 2) trong môi trường Python cho kết quả trả về là gì?",
    "options": [
      "Giá trị False vì phép toán logic and chỉ cho kết quả True khi tất cả các mệnh đề đều đúng.",
      "Giá trị True vì chỉ cần có ít nhất một mệnh đề (5 > 3) đúng là toàn bộ biểu thức đúng.",
      "Giá trị số 1 biểu diễn số học nhị phân cho trạng thái chân lý đúng trong vi xử lý.",
      "Giá trị số 0 biểu diễn số học nhị phân cho trạng thái chân lý sai trong vi xử lý."
    ],
    "answer": 0,
    "explain": "5 > 3 là True, 10 < 2 là False. True and False = False."
  },
  {
    "id": "b18-q09",
    "q": "Toán tử logic 'not' trong Python thực hiện chức năng nào đối với biểu thức đi kèm sau nó?",
    "options": [
      "Đảo ngược giá trị chân lý, biến True thành False và biến False thành giá trị True.",
      "Kiểm tra xem biểu thức có bị lỗi chia cho số 0 hay không trước khi thực thi tính toán.",
      "Chuyển đổi kiểu dữ liệu của biểu thức sang kiểu số nguyên int tương ứng trong máy tính.",
      "Xóa bỏ kết quả tính toán của biểu thức khỏi bộ nhớ tạm thời của trình thông dịch."
    ],
    "answer": 0,
    "explain": "Toán tử not dùng để phủ định giá trị logic: not True là False, not False là True."
  },
  {
    "id": "b18-q10",
    "q": "Xem xét biểu thức: not (4 == 4) or (7 >= 2). Kết quả của biểu thức logic này là gì?",
    "options": [
      "Giá trị True vì vế sau (7 >= 2) là True, và phép toán or chỉ cần một vế đúng là cho kết quả True.",
      "Giá trị False vì vế đầu not (4 == 4) là False khiến toàn bộ biểu thức logic bị sai theo.",
      "Chương trình báo lỗi vì không được kết hợp đồng thời cả ba toán tử not, == và or lại với nhau.",
      "Giá trị None vì các phép toán logic không thể so sánh trực tiếp các giá trị số nguyên."
    ],
    "answer": 0,
    "explain": "not (4 == 4) là not True = False. (7 >= 2) là True. False or True = True."
  },
  {
    "id": "b18-q11",
    "q": "Để chuyển đổi một xâu kí tự '3.14' thành số thực float trong Python, ta dùng cú pháp nào?",
    "options": [
      "float('3.14') chuyển đổi thành công xâu kí tự thành đại lượng số thực dấu phẩy động 3.14.",
      "int('3.14') chuyển đổi trực tiếp xâu kí tự thành số thực bỏ qua phần thập phân phía sau.",
      "real('3.14') gọi hàm chuẩn trong toán học để đưa dữ liệu xâu về miền số thực liên tục.",
      "str('3.14') giữ nguyên xâu kí tự và bổ sung các hàm định dạng hiển thị số thực trên màn."
    ],
    "answer": 0,
    "explain": "Hàm float('3.14') ép kiểu xâu thành số thực float. int('3.14') sẽ báo lỗi ValueError."
  },
  {
    "id": "b18-q12",
    "q": "Khi người dùng nhập vào '10' và '20' cho hai lệnh a = input(); b = input(), biểu thức a + b cho kết quả gì?",
    "options": [
      "Xâu kí tự '1020' vì toán tử cộng giữa hai xâu kí tự thực hiện phép ghép nối chuỗi liên tiếp.",
      "Số nguyên 30 vì Python tự nhận biết hai xâu đều là các chữ số để cộng số học tự động.",
      "Số thực 30.0 vì phép cộng xâu chứa số tự động ép sang miền số thực để tránh tràn số.",
      "Chương trình xuất hiện lỗi kiểu TypeError vì không thể thực hiện phép cộng trên biến nhập."
    ],
    "answer": 0,
    "explain": "Do input() trả về chuỗi str, nên '10' + '20' = '1020' (nối chuỗi)."
  },
  {
    "id": "b18-q13",
    "q": "Cú pháp nào sau đây giúp in nhiều giá trị x, y, z trên cùng một dòng và không tự động xuống dòng sau khi in?",
    "options": [
      "print(x, y, z, end=' ') thay đổi tham số kết thúc thành khoảng trắng thay vì dấu xuống dòng.",
      "print(x, y, z, sep=' ') thay đổi tham số phân tách thành khoảng trắng để giữ nguyên dòng in.",
      "print(x; y; z) dùng dấu chấm phẩy ngăn cách các đối số để báo hiệu không xuống dòng.",
      "print_inline(x, y, z) gọi hàm in đặc biệt của thư viện chuẩn đồ họa máy tính trong Python."
    ],
    "answer": 0,
    "explain": "end=' ' thay thế kí tự xuống dòng '\\n' mặc định, giúp các lần in tiếp theo nằm trên cùng dòng."
  },
  {
    "id": "b18-q14",
    "q": "Khi thực hiện lệnh x = int('abc') trong Python, điều gì sẽ xảy ra trong hệ thống?",
    "options": [
      "Python ném ra ngoại lệ ValueError vì xâu 'abc' không thể chuyển đổi thành số nguyên hợp lệ.",
      "Biến x sẽ nhận giá trị 0 vì xâu chữ cái tự động quy về giá trị số không trong hệ nhị phân.",
      "Biến x sẽ nhận mã ASCII của chữ cái đầu tiên là số nguyên 97 tương ứng với kí tự 'a'.",
      "Chương trình bỏ qua lệnh này và tiếp tục chạy các dòng lệnh tiếp theo mà không thông báo."
    ],
    "answer": 0,
    "explain": "int('abc') gây lỗi ValueError: invalid literal for int() with base 10: 'abc'."
  },
  {
    "id": "b18-q15",
    "q": "Để in giá trị của biến diem kèm thông điệp 'Điểm của bạn là: ' ra màn hình, cách viết nào sau đây đúng?",
    "options": [
      "print('Điểm của bạn là:', diem) truyền thông điệp và biến diem vào làm hai đối số của hàm print.",
      "print('Điểm của bạn là:' + diem) tự động chuyển đổi biến số diem thành xâu để nối trực tiếp.",
      "print('Điểm của bạn là:' diem) không cần bất kỳ dấu ngăn cách nào giữa chuỗi và tên biến.",
      "print(Điểm của bạn là:, diem) bỏ qua dấu nháy đơn bao quanh xâu thông điệp khi truyền vào hàm."
    ],
    "answer": 0,
    "explain": "print('Điểm của bạn là:', diem) là cú pháp chuẩn và an toàn nhất."
  },
  {
    "id": "b18-q16",
    "q": "Một bài toán yêu cầu nhập chiều dài và chiều rộng của hình chữ nhật từ bàn phím để tính chu vi. Dòng lệnh nhập số thực cho chiều rộng dai và rong nào là chuẩn xác nhất?",
    "options": [
      "dai = float(input('Nhập chiều dài: ')); rong = float(input('Nhập chiều rộng: ')) để hỗ trợ số thập phân.",
      "dai = int(input('Nhập chiều dài: ')); rong = int(input('Nhập chiều rộng: ')) vì kích thước luôn nguyên.",
      "dai = input(float('Chiều dài: ')); rong = input(float('Chiều rộng: ')) lồng hàm ép kiểu vào trong.",
      "dai, rong = input('Nhập hai cạnh: ') tự động chia đôi giá trị chuỗi nhập vào cho hai biến số."
    ],
    "answer": 0,
    "explain": "float(input()) cho phép nhập kích thước hình học có phần lẻ thập phân chính xác."
  }
];
