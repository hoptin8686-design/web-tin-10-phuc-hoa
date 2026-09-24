import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-04: Hệ nhị phân và dữ liệu số nguyên

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b04-tf01",
      "context": "Trong bài kiểm tra 15 phút về hệ nhị phân, bạn Thảo được yêu cầu chuyển đổi số thập phân 25 sang nhị phân và số nhị phân 10110 sang thập phân:",
      "statements": [
        {
          "text": "Số thập phân 25 phân tích thành tổng các lũy thừa của 2 là: 16 + 8 + 1 (2^4 + 2^3 + 2^0).",
          "answer": true,
          "explain": "Đúng. 25 = 16 + 8 + 1."
        },
        {
          "text": "Biểu diễn nhị phân của số 25 là 11001.",
          "answer": true,
          "explain": "Đúng. Vị trí bit: 2^4 (1), 2^3 (1), 2^2 (0), 2^1 (0), 2^0 (1) -> 11001."
        },
        {
          "text": "Số nhị phân 10110 có giá trị thập phân bằng 22.",
          "answer": true,
          "explain": "Đúng. 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 16 + 4 + 2 = 22."
        },
        {
          "text": "Số chẵn trong hệ nhị phân luôn luôn có bit tận cùng bên phải bằng 1.",
          "answer": false,
          "explain": "Sai. Số chẵn luôn có bit tận cùng bên phải (bit 2^0) bằng 0, số lẻ mới có bit tận cùng bằng 1."
        }
      ]
    },
    {
      "id": "b04-tf02",
      "context": "Một nhóm học sinh tìm hiểu về cấu trúc thanh ghi 8-bit trong bộ vi xử lý máy tính:",
      "statements": [
        {
          "text": "Nếu thanh ghi 8-bit dùng để lưu số nguyên không dấu, giá trị lớn nhất mà nó lưu được là 255.",
          "answer": true,
          "explain": "Đúng. Dãy 11111111 có giá trị là 255."
        },
        {
          "text": "Nếu thanh ghi 8-bit dùng để lưu số nguyên có dấu mã bù 2, số âm nhỏ nhất có thể biểu diễn là -128.",
          "answer": true,
          "explain": "Đúng. Dãy 10000000 đại diện cho số -128 trong mã bù 2."
        },
        {
          "text": "Trong mã bù 2, dãy bit 11111111 biểu diễn số nguyên -1.",
          "answer": true,
          "explain": "Đúng. Số +1 là 00000001 -> đảo bit 11111110 -> cộng 1 thành 11111111 (biểu diễn số -1)."
        },
        {
          "text": "Thực hiện phép tính 150 + 150 trên thanh ghi 8-bit không dấu sẽ cho ra kết quả chính xác 300.",
          "answer": false,
          "explain": "Sai. 300 > 255 nên xảy ra hiện tượng tràn số (Overflow), kết quả bị cắt bớt bit."
        }
      ]
    },
    {
      "id": "b04-tf03",
      "context": "Khi thực hiện phép toán số học nhị phân trên giấy:",
      "statements": [
        {
          "text": "Phép cộng 1011 + 0101 cho kết quả nhị phân là 10000.",
          "answer": true,
          "explain": "Đúng. 1011 (11) + 0101 (5) = 16 = 10000_2."
        },
        {
          "text": "Phép trừ 1000 - 0001 cho kết quả nhị phân là 0111.",
          "answer": true,
          "explain": "Đúng. 8 - 1 = 7 = 0111_2."
        },
        {
          "text": "Khi nhân một số nhị phân với 2, ta chỉ cần thêm một chữ số 0 vào bên phải của số đó.",
          "answer": true,
          "explain": "Đúng. Tương tự như nhân với 10 trong hệ thập phân, dịch trái 1 bit tương đương với nhân 2."
        },
        {
          "text": "Mọi số thập phân khi chuyển sang hệ nhị phân đều có số lượng chữ số ít hơn trong hệ thập phân.",
          "answer": false,
          "explain": "Sai. Hệ nhị phân cơ số nhỏ hơn (chỉ 2 kí số) nên dãy chữ số luôn dài hơn hệ thập phân."
        }
      ]
    },
    {
      "id": "b04-tf04",
      "context": "Trong lập trình hệ thống, lập trình viên sử dụng hệ thập lục phân (Hex) để biểu diễn màu sắc và địa chỉ bộ nhớ:",
      "statements": [
        {
          "text": "Chữ số Hex 'A' tương ứng với số 10 trong hệ thập phân và dãy bit '1010' trong hệ nhị phân.",
          "answer": true,
          "explain": "Đúng. A=10=1010_2."
        },
        {
          "text": "Chữ số Hex 'F' tương ứng với số 15 trong hệ thập phân và dãy bit '1111' trong hệ nhị phân.",
          "answer": true,
          "explain": "Đúng. F=15=1111_2."
        },
        {
          "text": "Số Hex '10' có giá trị thập phân bằng đúng số 10 trong toán học.",
          "answer": false,
          "explain": "Sai. 10_16 = 1×16^1 + 0×16^0 = 16 trong hệ thập phân."
        },
        {
          "text": "Mã màu RGB '#FFFFFF' biểu diễn màu trắng gồm 3 byte cực đại: Đỏ (255), Lục (255), Lam (255).",
          "answer": true,
          "explain": "Đúng. FF_16 = 255. Ba cặp FF tạo nên màu trắng sáng tối đa."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b04-es01",
      "q": "Trình bày cách chuyển đổi số thập phân 43 sang hệ nhị phân bằng phương pháp chia liên tiếp cho 2. Sau đó kiểm tra lại bằng cách đổi ngược số nhị phân vừa tìm được về hệ thập phân.",
      "answer": "1. Chuyển đổi từ thập phân 43 sang nhị phân:\n- 43 / 2 = 21 (dư 1)\n- 21 / 2 = 10 (dư 1)\n- 10 / 2 = 5  (dư 0)\n- 5 / 2  = 2  (dư 1)\n- 2 / 2  = 1  (dư 0)\n- 1 / 2  = 0  (dư 1)\nĐọc các số dư theo chiều từ dưới lên trên: 101011_2.\nKết quả: 43_10 = 101011_2.\n\n2. Đổi ngược 101011_2 về hệ thập phân để kiểm tra:\n101011_2 = 1×2^5 + 0×2^4 + 1×2^3 + 0×2^2 + 1×2^1 + 1×2^0\n= 1×32 + 0×16 + 1×8 + 0×4 + 1×2 + 1×1\n= 32 + 8 + 2 + 1 = 43_10.\nKết quả hoàn toàn chính xác."
    },
    {
      "id": "b04-es02",
      "q": "Trình bày nguyên lí biểu diễn số nguyên âm trong máy tính bằng phương pháp mã bù hai (Two's Complement). Hãy tìm biểu diễn mã bù hai 8-bit của số -19.",
      "answer": "1. Nguyên lí mã bù hai:\n- Để biểu diễn số âm -X trong hệ thống n bit, máy tính lấy biểu diễn nhị phân của số dương +X, sau đó đảo toàn bộ các bit (mã bù một: 0 thành 1, 1 thành 0), cuối cùng cộng thêm 1 đơn vị vào kết quả.\n- Ưu điểm: Phép trừ A - B được quy về phép cộng A + (mã bù 2 của B), giúp bộ xử lý CPU chỉ cần dùng một mạch cộng duy nhất và có duy nhất một biểu diễn cho số 0.\n\n2. Các bước tìm mã bù hai 8-bit của số -19:\n- Bước 1: Biểu diễn số dương +19 dưới dạng 8-bit nhị phân:\n  19 = 16 + 2 + 1 = 00010011_2.\n- Bước 2: Đảo toàn bộ các bit (tìm mã bù một):\n  00010011 -> 11101100.\n- Bước 3: Cộng thêm 1 vào kết quả ở Bước 2:\n  11101100 + 1 = 11101101_2.\n- Kết luận: Biểu diễn 8-bit mã bù hai của số -19 là 11101101."
    }
  ]
};
