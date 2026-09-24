import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-06: Dữ liệu âm thanh và hình ảnh

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b06-tf01",
      "context": "Nhóm thiết kế đồ họa của trường THPT Phục Hòa vẽ Logo cho Câu lạc bộ Tin học. Logo gồm hình ngọn đuốc tri thức và dòng chữ 'CLB TIN HỌC PHỤC HÒA':",
      "statements": [
        {
          "text": "Nhóm nên vẽ logo bằng phần mềm đồ họa vector (như Inkscape) để khi in trên băng rôn khổ lớn không bị vỡ hạt.",
          "answer": true,
          "explain": "Đúng. Đồ họa vector giữ nguyên độ sắc nét ở mọi kích thước in ấn."
        },
        {
          "text": "Khi xuất bản logo dùng trên trang web của trường, định dạng PNG có nền trong suốt là lựa chọn tối ưu.",
          "answer": true,
          "explain": "Đúng. Định dạng PNG trong suốt giúp logo hòa hợp với màu nền của trang web."
        },
        {
          "text": "Nếu lưu logo dưới dạng ảnh Bitmap JPEG (.jpg) độ phân giải thấp, khi phóng to lên pano sân khấu các đường viền chữ sẽ bị nhòe và răng cưa.",
          "answer": true,
          "explain": "Đúng. Ảnh bitmap phóng to sẽ làm lộ rõ các điểm ảnh ô vuông (hiện tượng răng cưa)."
        },
        {
          "text": "Ảnh vector lưu trữ thông tin về màu sắc của từng điểm ảnh pixel riêng lẻ trên màn hình.",
          "answer": false,
          "explain": "Sai. Ảnh vector lưu công thức toán học (tọa độ điểm, đường cong, màu tô), không lưu điểm ảnh."
        }
      ]
    },
    {
      "id": "b06-tf02",
      "context": "Bạn Hoàng dùng máy ảnh kỹ thuật số chụp một bức ảnh phong cảnh có độ phân giải 4000 x 3000 điểm ảnh theo chuẩn màu 24-bit True Color:",
      "statements": [
        {
          "text": "Tổng số điểm ảnh (pixels) của bức ảnh là 12 triệu điểm ảnh (tương đương 12 Megapixels).",
          "answer": true,
          "explain": "Đúng. 4000 × 3000 = 12 000 000 pixels = 12 MP."
        },
        {
          "text": "Mỗi điểm ảnh trong bức ảnh được biểu diễn bởi đúng 3 Byte dữ liệu trong mô hình RGB.",
          "answer": true,
          "explain": "Đúng. 24 bit = 3 Byte (mỗi kênh màu Đỏ, Lục, Lam chiếm 1 Byte)."
        },
        {
          "text": "Dung lượng dữ liệu thô (chưa nén) của bức ảnh xấp xỉ khoảng 36 MB.",
          "answer": true,
          "explain": "Đúng. 12 000 000 × 3 Byte = 36 000 000 Byte ≈ 34.33 MB (xấp xỉ 36 triệu byte)."
        },
        {
          "text": "Khi lưu tệp sang định dạng JPEG, dung lượng tệp vẫn bắt buộc phải giữ nguyên đúng 36 MB như dữ liệu thô.",
          "answer": false,
          "explain": "Sai. Nén JPEG giúp giảm dung lượng xuống chỉ còn khoảng 3 - 6 MB."
        }
      ]
    },
    {
      "id": "b06-tf03",
      "context": "Một ban nhạc học sinh thu âm bài hát tự sáng tác dài 3 phút dưới định dạng âm thanh Stereo chuẩn CD (tần số lấy mẫu 44.1 kHz, độ sâu lượng tử 16 bit):",
      "statements": [
        {
          "text": "Tần số lấy mẫu 44.1 kHz nghĩa là hệ thống đo biên độ sóng âm 44 100 lần trong mỗi giây.",
          "answer": true,
          "explain": "Đúng. Định nghĩa tần số lấy mẫu."
        },
        {
          "text": "Âm thanh Stereo gồm hai kênh riêng biệt nên lượng dữ liệu sinh ra mỗi giây gấp đôi so với âm thanh Mono.",
          "answer": true,
          "explain": "Đúng. Stereo nhân 2 kênh (trái và phải)."
        },
        {
          "text": "Độ sâu 16 bit cho phép phân biệt được 65 536 mức biên độ âm thanh khác nhau.",
          "answer": true,
          "explain": "Đúng. 2^16 = 65 536 mức lượng tử hóa."
        },
        {
          "text": "Khi nén bản ghi âm trên thành tệp MP3 (bitrate 128 kbps), chất lượng âm thanh hoàn toàn không bị suy giảm dù chỉ một chi tiết nhỏ.",
          "answer": false,
          "explain": "Sai. MP3 là nén có mất mát (lossy), lược bỏ một số tần số âm thanh để tối ưu dung lượng."
        }
      ]
    },
    {
      "id": "b06-tf04",
      "context": "Trong buổi học thực hành tìm hiểu về các định dạng đa phương tiện:",
      "statements": [
        {
          "text": "Tệp âm thanh WAV thường có dung lượng rất lớn vì là định dạng âm thanh thô không nén.",
          "answer": true,
          "explain": "Đúng. WAV lưu trực tiếp dữ liệu PCM không nén nên dung lượng lớn nhất."
        },
        {
          "text": "Tệp ảnh GIF hỗ trợ tạo ảnh động ngắn và giới hạn bảng màu tối đa ở mức 256 màu.",
          "answer": true,
          "explain": "Đúng. Đặc trưng của GIF là hỗ trợ hoạt ảnh và giới hạn màu 8-bit (256 màu)."
        },
        {
          "text": "Mô hình màu CMYK gồm 4 màu (Xanh lơ, Hồng sẫm, Vàng, Đen) chuyên dùng trong kĩ thuật in ấn ấn phẩm thực tế.",
          "answer": true,
          "explain": "Đúng. CMYK là hệ màu trừ dùng cho máy in, khác với RGB là hệ màu cộng trên màn hình."
        },
        {
          "text": "Mắt người có thể phân biệt được vô hạn triệu mức màu sắc khác nhau vượt trội hơn mọi loại màn hình máy tính.",
          "answer": false,
          "explain": "Sai. Mắt người trung bình chỉ phân biệt được khoảng 10 triệu màu, chuẩn 24-bit (16.7 triệu màu) đã vượt ngưỡng nhận biết."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b06-es01",
      "q": "So sánh sự khác nhau cơ bản giữa đồ họa điểm (ảnh Bitmap) và đồ họa véc-tơ (ảnh Vector) về nguyên lí tạo ảnh, định dạng tệp phổ biến và ứng dụng thực tế. Khi thiết kế logo trường học, em sẽ chọn loại đồ họa nào? Vì sao?",
      "answer": "1. So sánh Bitmap và Vector:\n- Nguyên lí tạo ảnh:\n  + Bitmap: Cấu thành từ lưới các điểm ảnh (pixel) hình vuông, mỗi pixel mang một màu cụ thể.\n  + Vector: Cấu thành từ các công thức toán học xác định tọa độ điểm, đoạn thẳng, đường cong Bezier và màu tô.\n- Hiện tượng khi phóng to:\n  + Bitmap: Bị vỡ hạt, răng cưa, nhòe mờ khi phóng to vượt độ phân giải gốc.\n  + Vector: Giữ nguyên độ sắc nét hoàn hảo ở mọi kích thước phóng to thu nhỏ.\n- Định dạng phổ biến:\n  + Bitmap: .jpg, .png, .bmp, .gif.\n  + Vector: .svg, .ai, .eps.\n- Ứng dụng:\n  + Bitmap: Phù hợp chụp ảnh phong cảnh, chân dung có độ chuyển màu phức tạp.\n  + Vector: Phù hợp thiết kế logo, biểu tượng, sơ đồ, phông chữ, bản vẽ kĩ thuật.\n\n2. Lựa chọn khi thiết kế logo trường học:\n- Chắc chắn chọn đồ họa Vector (.svg).\n- Vì sao: Logo cần phải dùng linh hoạt trên nhiều ấn phẩm có kích thước cực kì khác nhau: từ biểu tượng nhỏ trên con dấu, góc bài kiểm tra, đến thêu trên áo đồng phục và in trên phông bạt sân khấu dài hàng chục mét. Đồ họa vector đảm bảo logo luôn sắc nét tuyệt đối mà không cần vẽ lại."
    },
    {
      "id": "b06-es02",
      "q": "Hãy tính dung lượng dữ liệu âm thanh thô (chưa nén) của một bài hát Stereo dài 4 phút được ghi âm với tần số lấy mẫu 44.1 kHz và độ sâu lượng tử 16 bit. Kết quả tính theo Byte và Megabyte (MB).",
      "answer": "1. Các thông số bài toán:\n- Thời gian: 4 phút = 4 × 60 = 240 giây.\n- Tần số lấy mẫu: 44.1 kHz = 44 100 mẫu/giây.\n- Độ sâu lượng tử: 16 bit = 2 Byte/mẫu.\n- Số kênh âm thanh: Stereo = 2 kênh.\n\n2. Tính dung lượng theo Byte:\nDung lượng = Tần số lấy mẫu × Độ sâu (Byte) × Số kênh × Thời gian (giây)\n= 44 100 × 2 × 2 × 240\n= 42 336 000 Byte.\n\n3. Đổi sang Megabyte (MB):\n- 42 336 000 / 1024 = 41 343.75 KB.\n- 41 343.75 / 1024 ≈ 40.37 MB.\n\nKết luận: Bài hát 4 phút chuẩn CD nguyên bản chiếm khoảng 40.37 MB dữ liệu thô."
    }
  ]
};
