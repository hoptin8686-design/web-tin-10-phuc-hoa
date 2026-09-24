import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-04: Hệ nhị phân và dữ liệu số nguyên
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b04-q01",
    "q": "Hệ nhị phân (Binary) là hệ đếm cơ số mấy và sử dụng những kí số nào?",
    "options": [
      "Hệ cơ số 2, chỉ sử dụng đúng hai kí số là 0 và 1.",
      "Hệ cơ số 10, sử dụng mười kí số từ 0 đến 9 như toán học thông thường.",
      "Hệ cơ số 8, sử dụng tám kí số từ 0 đến 7 trong việc đánh số linh kiện.",
      "Hệ cơ số 16, sử dụng các kí số từ 0 đến 9 kết hợp với các chữ cái A đến F."
    ],
    "answer": 0,
    "explain": "Hệ nhị phân (cơ số 2) chỉ sử dụng 2 kí hiệu số là 0 và 1, phù hợp với 2 trạng thái vật lí của mạch điện tử (ngắt và dẫn điện)."
  },
  {
    "id": "b04-q02",
    "q": "Giá trị của số nhị phân 1101 trong hệ thập phân là bao nhiêu?",
    "options": [
      "13 (tính bằng 1×8 + 1×4 + 0×2 + 1×1).",
      "11 (tính bằng 1×8 + 0×4 + 1×2 + 1×1).",
      "15 (tính bằng 1×8 + 1×4 + 1×2 + 1×1).",
      "9 (tính bằng 1×8 + 0×4 + 0×2 + 1×1)."
    ],
    "answer": 0,
    "explain": "1101_2 = 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 = 8 + 4 + 0 + 1 = 13_10."
  },
  {
    "id": "b04-q03",
    "q": "Để chuyển một số nguyên dương từ hệ thập phân sang hệ nhị phân, ta thực hiện theo phương pháp nào?",
    "options": [
      "Chia liên tiếp số đó cho 2 và ghi lại các số dư, sau đó viết các số dư theo thứ tự ngược lại.",
      "Nhân liên tiếp số đó với 2 và ghi lại phần nguyên thu được theo thứ tự từ trên xuống dưới.",
      "Lấy số đó chia cho 8 rồi cộng thêm 1 đơn vị vào kết quả của phép chia cuối cùng.",
      "Trừ số đó cho 10 cho đến khi kết quả bằng 0 rồi đếm tổng số lần thực hiện phép trừ."
    ],
    "answer": 0,
    "explain": "Quy tắc: Chia liên tiếp cho 2 lấy phần dư (0 hoặc 1), dừng lại khi thương bằng 0; dãy số dư viết từ dưới lên (ngược lại) là số nhị phân cần tìm."
  },
  {
    "id": "b04-q04",
    "q": "Số thập phân 19 khi chuyển đổi sang hệ nhị phân sẽ có biểu diễn là gì?",
    "options": [
      "10011 (tương ứng với 16 + 2 + 1).",
      "10101 (tương ứng với 16 + 4 + 1 = 21).",
      "11001 (tương ứng với 16 + 8 + 1 = 25).",
      "10001 (tương ứng với 16 + 1 = 17)."
    ],
    "answer": 0,
    "explain": "19 = 16 + 2 + 1 = 2^4 + 2^1 + 2^0 -> dạng nhị phân là 10011."
  },
  {
    "id": "b04-q05",
    "q": "Kết quả của phép cộng hai số nhị phân 1 + 1 trong hệ nhị phân là gì?",
    "options": [
      "0 và nhớ 1 sang hàng bên trái (viết thành 10).",
      "2 (giữ nguyên kí số 2 như trong hệ thập phân).",
      "1 và không cần nhớ sang hàng bên cạnh.",
      "0 và không phát sinh bất kì số nhớ nào."
    ],
    "answer": 0,
    "explain": "Trong hệ nhị phân không có kí số 2, nên 1 + 1 = 2_10 = 10_2 (viết 0 nhớ 1 sang hàng có trọng số cao hơn bên trái)."
  },
  {
    "id": "b04-q06",
    "q": "Thực hiện phép cộng hai số nhị phân 1010 + 0101, kết quả thu được là gì?",
    "options": [
      "1111 (tương ứng với 10 + 5 = 15 trong hệ thập phân).",
      "10000 (tương ứng với 16 trong hệ thập phân).",
      "1110 (tương ứng với 14 trong hệ thập phân).",
      "1101 (tương ứng với 13 trong hệ thập phân)."
    ],
    "answer": 0,
    "explain": "1010 (10) + 0101 (5) = 1111 (15). Từng cột: 0+1=1, 1+0=1, 0+1=1, 1+0=1 -> 1111."
  },
  {
    "id": "b04-q07",
    "q": "Một byte gồm 8 bit có thể biểu diễn được bao nhiêu giá trị số nguyên không dấu khác nhau?",
    "options": [
      "256 giá trị khác nhau (từ số 0 đến số 255).",
      "128 giá trị khác nhau (từ số 0 đến số 127).",
      "512 giá trị khác nhau (từ số 0 đến số 511).",
      "65536 giá trị khác nhau (từ số 0 đến số 65535)."
    ],
    "answer": 0,
    "explain": "Với n bit không dấu, biểu diễn được 2^n giá trị từ 0 đến 2^n - 1. Với 8 bit: 2^8 = 256 giá trị, từ 0 đến 255."
  },
  {
    "id": "b04-q08",
    "q": "Để biểu diễn số nguyên có dấu (cả số âm và số dương) trong máy tính, người ta thường dùng phương pháp nào?",
    "options": [
      "Sử dụng bit ngoài cùng bên trái (bit có trọng số cao nhất MSB) làm bit dấu.",
      "Sử dụng dấu cộng (+) và dấu trừ (-) bằng kí tự ASCII đặt ngay trước dãy số nhị phân.",
      "Nhân số đó với 10 rồi lưu trữ phần dư vào thanh ghi tạm thời của bộ nhớ.",
      "Tô màu đỏ cho các bit số âm và tô màu xanh cho các bit mang giá trị dương."
    ],
    "answer": 0,
    "explain": "Trong biểu diễn số nguyên có dấu, bit cực trái (MSB) là bit dấu: 0 biểu diễn số dương, 1 biểu diễn số âm."
  },
  {
    "id": "b04-q09",
    "q": "Trong hệ thống biểu diễn số nguyên có dấu 8-bit dùng mã bù 2, phạm vi giá trị có thể biểu diễn là:",
    "options": [
      "Từ -128 đến +127.",
      "Từ -127 đến +128.",
      "Từ 0 đến 255.",
      "Từ -256 đến +255."
    ],
    "answer": 0,
    "explain": "Công thức với n bit có dấu: từ -2^(n-1) đến 2^(n-1) - 1. Với n=8: từ -2^7 = -128 đến 2^7 - 1 = +127."
  },
  {
    "id": "b04-q10",
    "q": "Quy tắc tìm mã bù hai của một số nhị phân được thực hiện như thế nào?",
    "options": [
      "Đảo toàn bộ các bit (0 thành 1, 1 thành 0) rồi cộng thêm 1 vào kết quả đó.",
      "Đổi bit đầu tiên thành 1 và giữ nguyên toàn bộ tất cả các bit còn lại phía sau.",
      "Nhân toàn bộ số nhị phân đó với 2 rồi bỏ đi bit dư thừa ở vị trí cuối cùng.",
      "Lấy số nhị phân ban đầu trừ đi đúng 1 đơn vị rồi giữ nguyên kết quả."
    ],
    "answer": 0,
    "explain": "Mã bù hai = Mã bù một (đảo bit) + 1. Ví dụ số +5 (00000101) -> đảo bit thành 11111010 -> cộng 1 thành 11111011 (đây là số -5)."
  },
  {
    "id": "b04-q11",
    "q": "Dãy bit 00001000 trong hệ nhị phân có giá trị thập phân bằng bao nhiêu?",
    "options": [
      "8 (vì bit 1 nằm ở vị trí lũy thừa 2^3).",
      "16 (vì bit 1 nằm ở vị trí lũy thừa 2^4).",
      "4 (vì bit 1 nằm ở vị trí lũy thừa 2^2).",
      "2 (vì bit 1 nằm ở vị trí lũy thừa 2^1)."
    ],
    "answer": 0,
    "explain": "Tính từ phải sang trái bắt đầu từ vị trí 0: vị trí 3 có giá trị là 2^3 = 8."
  },
  {
    "id": "b04-q12",
    "q": "Tại sao máy tính sử dụng phép cộng với mã bù hai để thực hiện phép trừ hai số nguyên?",
    "options": [
      "Vì giúp mạch điện tử của CPU chỉ cần thiết kế bộ cộng, tiết kiệm chi phí phần cứng.",
      "Vì máy tính không thể phân biệt được giữa số 0 và số 1 khi làm phép tính toán.",
      "Vì phép trừ nhị phân luôn cho ra kết quả là các số thực dấu phẩy động vô hạn.",
      "Vì các nhà toán học cấm sử dụng phép trừ trực tiếp trên các mạch vi điện tử."
    ],
    "answer": 0,
    "explain": "A - B = A + (-B). Dùng mã bù hai cho phép biến phép trừ thành phép cộng với số đối, do đó CPU chỉ cần mạch cộng (Adder)."
  },
  {
    "id": "b04-q13",
    "q": "Hiện tượng 'Tràn số' (Overflow) trong tính toán số học trên máy tính xảy ra khi nào?",
    "options": [
      "Khi kết quả của phép toán vượt quá phạm vi lưu trữ tối đa của số lượng bit quy định.",
      "Khi người dùng gõ phím quá nhanh làm bàn phím không kịp nhận diện dữ liệu đầu vào.",
      "Khi màn hình máy tính hiển thị quá nhiều chữ số khiến các con số bị tràn khỏi khung hình.",
      "Khi máy tính bị ngắt kết nối mạng Internet đột ngột trong lúc đang thực hiện phép chia."
    ],
    "answer": 0,
    "explain": "Tràn số xảy ra khi kết quả tính toán lớn hơn giá trị lớn nhất (hoặc nhỏ hơn giá trị nhỏ nhất) mà thanh ghi có thể chứa được."
  },
  {
    "id": "b04-q14",
    "q": "Số nguyên 0 trong biểu diễn mã bù hai 8-bit có dạng nhị phân là gì?",
    "options": [
      "00000000 (chỉ có duy nhất một biểu diễn số 0, khắc phục nhược điểm của mã bù một).",
      "10000000 (đây là số -128 trong hệ thống mã bù hai).",
      "11111111 (đây là số -1 trong hệ thống mã bù hai).",
      "01111111 (đây là số +127 trong hệ thống mã bù hai)."
    ],
    "answer": 0,
    "explain": "Ưu điểm lớn nhất của mã bù hai là chỉ có một số 0 duy nhất (00000000), không có tình trạng '+0' và '-0' gây lãng phí mã như mã bù một."
  },
  {
    "id": "b04-q15",
    "q": "Kết quả của phép trừ nhị phân 110 - 011 là bao nhiêu?",
    "options": [
      "011 (tương ứng với 6 - 3 = 3 trong hệ thập phân).",
      "100 (tương ứng với 4 trong hệ thập phân).",
      "010 (tương ứng với 2 trong hệ thập phân).",
      "001 (tương ứng với 1 trong hệ thập phân)."
    ],
    "answer": 0,
    "explain": "110_2 = 6_10, 011_2 = 3_10. Hiệu là 6 - 3 = 3_10 = 011_2."
  },
  {
    "id": "b04-q16",
    "q": "Hệ đếm thập lục phân (Hexadecimal - cơ số 16) thường được dùng kèm với hệ nhị phân vì lí do gì?",
    "options": [
      "Mỗi chữ số Hex đại diện chính xác cho một nhóm 4 bit nhị phân, giúp viết gọn gàng và dễ đọc.",
      "Hệ Hex làm cho máy tính chạy nhanh gấp 16 lần so với khi dùng hệ nhị phân thông thường.",
      "Các linh kiện vi mạch điện tử thực tế hoạt động trực tiếp bằng 16 mức điện áp khác nhau.",
      "Giúp học sinh không cần phải học thuộc bảng mã ASCII và Unicode khi lập trình phần mềm."
    ],
    "answer": 0,
    "explain": "Vì 16 = 2^4, mỗi chữ số Hex (0-F) tương ứng với đúng 4 bit nhị phân (nibble), giúp viết gọn địa chỉ bộ nhớ và mã màu RGB."
  }
];
