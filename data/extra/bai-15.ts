import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-15: Hoàn thiện hình ảnh đồ họa

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b15-tf01",
      "context": "Nhóm bạn An thiết kế Tờ rơi (Flyer) tuyên truyền 'Bảo vệ nguồn nước sạch dòng sông Bằng Giang' trên Inkscape khổ giấy A5:",
      "statements": [
        {
          "text": "Nhóm tổ chức bản vẽ thành 3 lớp riêng biệt: Lớp 1 (Nền phong cảnh), Lớp 2 (Họa tiết giọt nước và dòng sông), Lớp 3 (Chữ khẩu hiệu tuyên truyền).",
          "answer": true,
          "explain": "Đúng. Phân tách Layer chuyên nghiệp: Nền -> Chi tiết đồ họa -> Chữ viết."
        },
        {
          "text": "Sau khi vẽ xong Lớp 1 (Nền), nhóm bấm biểu tượng chiếc ổ khóa của Lớp 1 để khi vẽ chữ ở Lớp 3 không vô tình làm xê dịch nền.",
          "answer": true,
          "explain": "Đúng. Khóa lớp nền là thao tác nghiệp vụ chuẩn xác."
        },
        {
          "text": "Tờ rơi in ấn quảng bá cộng đồng nên xuất ảnh ở độ phân giải cao 300 DPI để bản in trên giấy sắc nét.",
          "answer": true,
          "explain": "Đúng. Chuẩn in ấn giấy đòi hỏi 300 DPI (dots per inch)."
        },
        {
          "text": "Khi đã phân chia đối tượng vào các lớp, người dùng không thể di chuyển một đối tượng từ lớp này sang lớp khác được nữa.",
          "answer": false,
          "explain": "Sai. Dùng lệnh Layer -> Move Selection to Layer Above/Below (Shift + Page Up/Down) chuyển đổi tự do."
        }
      ]
    },
    {
      "id": "b15-tf02",
      "context": "Trong buổi triển lãm sản phẩm đồ họa của học sinh lớp 10 trường THPT Phục Hòa:",
      "statements": [
        {
          "text": "Sản phẩm đồ họa vector có thể xuất sang định dạng PDF để thầy cô mở xem trên bất kì máy tính nào mà không cần cài Inkscape.",
          "answer": true,
          "explain": "Đúng. Định dạng PDF vector rất phổ biến, mở được trên mọi trình duyệt và máy đọc PDF."
        },
        {
          "text": "Tệp ảnh PNG xuất ra từ Inkscape có thể giữ được nền trong suốt (không bị ô vuông màu trắng bao quanh).",
          "answer": true,
          "explain": "Đúng. PNG hỗ trợ kênh Alpha trong suốt hoàn hảo."
        },
        {
          "text": "Học sinh có thể chỉnh sửa lại nội dung văn bản trực tiếp trên tệp ảnh PNG xuất ra giống hệt như trên tệp SVG gốc.",
          "answer": false,
          "explain": "Sai. Ảnh PNG là ảnh bitmap đã bị chuyển thành các điểm ảnh, không còn là văn bản có thể gõ sửa chữ."
        },
        {
          "text": "Phần mềm Inkscape hỗ trợ làm việc với các kích thước khổ giấy tiêu chuẩn quốc tế như A4, A3, A5.",
          "answer": true,
          "explain": "Đúng. Trong Document Properties (Shift + Ctrl + D) có đầy đủ các khổ giấy chuẩn quốc tế."
        }
      ]
    },
    {
      "id": "b15-tf03",
      "context": "Bạn Hoa vẽ một tấm thiệp chúc mừng sinh nhật bạn thân trên Inkscape:",
      "statements": [
        {
          "text": "Hoa sử dụng công cụ Text (phím T) gõ dòng chữ 'HAPPY BIRTHDAY' với phông chữ nghệ thuật cách điệu nổi bật.",
          "answer": true,
          "explain": "Đúng. Tạo điểm nhấn tiêu đề thiệp sinh nhật."
        },
        {
          "text": "Hoa chèn thêm ảnh chụp kỉ niệm của hai bạn vào thiệp bằng lệnh File -> Import (Ctrl + I).",
          "answer": true,
          "explain": "Đúng. Lệnh Import đưa ảnh chụp thực tế vào trang thiết kế."
        },
        {
          "text": "Hoa chọn toàn bộ thiệp và xuất ảnh PNG để gửi qua tin nhắn Zalo cho bạn vào đúng ngày sinh nhật.",
          "answer": true,
          "explain": "Đúng. Định dạng PNG tối ưu để gửi qua tin nhắn điện thoại."
        },
        {
          "text": "Một bức thiệp đã lưu thành tệp .svg thì chỉ có thể mở lại được trên đúng chiếc máy tính đã vẽ ra nó ban đầu.",
          "answer": false,
          "explain": "Sai. Tệp SVG là chuẩn mở quốc tế, sao chép sang bất kì máy tính nào cài Inkscape đều mở và sửa được bình thường."
        }
      ]
    },
    {
      "id": "b15-tf04",
      "context": "Khi đánh giá tính thẩm mĩ của một sản phẩm thiết kế đồ họa hoàn chỉnh:",
      "statements": [
        {
          "text": "Một ấn phẩm đẹp cần có khoảng trống thoáng đãng (khoảng trắng - White Space) hợp lí, không nên nhồi nhét quá nhiều chi tiết rối mắt.",
          "answer": true,
          "explain": "Đúng. Khoảng trắng giúp mắt người xem nghỉ ngơi và tập trung vào nội dung chính."
        },
        {
          "text": "Càng sử dụng nhiều phông chữ khác nhau trên cùng một trang (từ 10 phông chữ trở lên) thì ấn phẩm trông càng chuyên nghiệp.",
          "answer": false,
          "explain": "Sai. Nguyên tắc thiết kế: chỉ nên dùng tối đa 2 đến 3 phông chữ trên một tác phẩm để tránh lộn xộn."
        },
        {
          "text": "Thông điệp chính của ấn phẩm cần được đặt ở vị trí trọng tâm và có độ tương phản cao với nền để người xem nắm bắt ngay trong 3 giây đầu tiên.",
          "answer": true,
          "explain": "Đúng. Nguyên tắc 3 giây trong truyền thông thị giác."
        },
        {
          "text": "Toàn bộ hình vẽ và chữ trên ấn phẩm bắt buộc phải dùng cùng một gam màu duy nhất không được phép phối màu.",
          "answer": false,
          "explain": "Sai. Phối màu hài hòa (tương đồng hoặc tương phản) là yếu tố quyết định sự cuốn hút của đồ họa."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b15-es01",
      "q": "Khái niệm Lớp (Layer) trong Inkscape là gì? Nêu 3 thao tác cơ bản khi quản lí các lớp (tạo lớp, khóa lớp, ẩn/hiện lớp) và phân tích lợi ích thiết thực của việc chia bản vẽ thành nhiều lớp khi thiết kế một tấm Tờ rơi quảng cáo.",
      "answer": "1. Khái niệm Lớp (Layer):\nLớp trong phần mềm đồ họa Inkscape được hình dung như những tấm kính trong suốt xếp chồng khít lên nhau theo thứ tự từ dưới lên trên. Các đối tượng đồ họa nằm ở lớp trên sẽ che khuất các đối tượng nằm ở lớp dưới tại các vị trí chồng lấn; tại các vị trí trong suốt, ta vẫn nhìn thấu các chi tiết ở lớp bên dưới.\n\n2. Ba thao tác cơ bản khi quản lí lớp (Shift + Ctrl + L):\n- Tạo lớp mới (Add Layer): Bấm dấu cộng (+), đặt tên lớp rõ ràng (như 'Nền', 'Hình ảnh', 'Chữ') và chọn vị trí đặt lớp (trên cùng hoặc dưới cùng).\n- Khóa / Mở khóa lớp (Lock / Unlock): Nhấp vào biểu tượng chiếc ổ khóa bên cạnh tên lớp. Khi lớp bị khóa, toàn bộ đối tượng trên lớp đó sẽ không thể bị bấm chọn, di chuyển hay xóa nhầm.\n- Ẩn / Hiện lớp (Hide / Show): Nhấp vào biểu tượng con mắt. Tắt con mắt sẽ tạm thời ẩn toàn bộ lớp đó khỏi trang vẽ để người thiết kế quan sát rõ các chi tiết ở lớp dưới.\n\n3. Lợi ích khi thiết kế Tờ rơi quảng cáo:\n- Quản lí bố cục khoa học: Chia thành 3 lớp rõ rệt: Lớp Nền (Background), Lớp Họa tiết (Graphics/Icons) và Lớp Nội dung chữ (Text/Slogan).\n- Tránh lỗi thao tác: Khi đã vẽ xong phông nền phức tạp, chỉ cần KHÓA lớp Nền lại thì trong suốt quá trình sau đó ta thoải mái căn chỉnh chữ và logo mà không bao giờ bị chuột kéo làm lệch phông nền.\n- Dễ dàng thử nghiệm phương án mới: Muốn thử một phông nền khác hoặc thay đổi nội dung chữ, ta chỉ cần tạo thêm lớp mới và ẩn/hiện lớp để so sánh trực quan trước khi xuất bản."
    },
    {
      "id": "b15-es02",
      "q": "Em hãy trình bày quy trình các bước hoàn chỉnh trên phần mềm Inkscape để thiết kế và xuất bản một tấm Thiệp chúc mừng ngày Nhà giáo Việt Nam 20/11 khổ A5 (gồm: hình nền trang nhã, họa tiết bó hoa tri ân, tiêu đề nghệ thuật và lời chúc ý nghĩa).",
      "answer": "Quy trình thiết kế tấm thiệp 20/11 khổ A5 trên Inkscape gồm 4 giai đoạn:\n\n1. Giai đoạn 1: Chuẩn bị khổ giấy và phân chia lớp (Layer):\n- Vào File -> Document Properties (Shift + Ctrl + D), ở mục Page format chọn khổ giấy A5, hướng giấy ngang (Landscape).\n- Mở bảng Layers (Shift + Ctrl + L), tạo 3 lớp: '1_Nen', '2_HoaTiet', '3_LoiChuc'.\n\n2. Giai đoạn 2: Thiết kế hình nền trang nhã (Lớp 1_Nen):\n- Chọn lớp 1_Nen, dùng công cụ Rectangle vẽ hình chữ nhật phủ kín trang giấy A5.\n- Mở hộp thoại Fill and Stroke (Shift + Ctrl + F), chọn kiểu tô chuyển sắc thẳng (Linear Gradient) từ màu xanh dương nhạt ở góc trên sang màu trắng ngà ở góc dưới tạo cảm giác thanh lịch, trang trọng.\n- Bấm biểu tượng chiếc ổ khóa để cố định lớp nền.\n\n3. Giai đoạn 3: Vẽ họa tiết và biểu tượng tri ân (Lớp 2_HoaTiet):\n- Chuyển sang lớp 2_HoaTiet. Dùng công cụ Bezier (phím B) và Circle để vẽ cành hoa hồng hoặc ngọn đuốc tri thức; hoặc dùng lệnh File -> Import (Ctrl + I) để chèn ảnh chụp bó hoa đẹp vào góc dưới bên trái.\n- Dùng công cụ Align and Distribute (Shift + Ctrl + A) căn chỉnh họa tiết hài hòa, không lấn át không gian ghi chữ.\n\n4. Giai đoạn 4: Soạn thảo văn bản và xuất bản sản phẩm (Lớp 3_LoiChuc):\n- Chuyển sang lớp 3_LoiChuc. Dùng công cụ Text (phím T) gõ tiêu đề chính: 'TRI ÂN THẦY CÔ - 20/11', chọn phông chữ in hoa nổi bật, tô màu đỏ thắm có viền vàng nhẹ.\n- Gõ đoạn thơ/lời chúc ý nghĩa bên dưới bằng phông chữ mềm mại dễ đọc: 'Kính chúc quý thầy cô trường THPT Phục Hòa luôn dồi dào sức khỏe, tràn đầy nhiệt huyết trong sự nghiệp trồng người'.\n- Xuất bản tệp: Vào File -> Save As lưu tệp gốc 'Thiep_20_11.svg' để lưu trữ; sau đó bấm Shift + Ctrl + E, chọn tab Page, đặt độ phân giải 300 DPI và bấm 'Export' để xuất ra tệp ảnh 'Thiep_20_11.png' chất lượng cao sẵn sàng in ấn gửi tặng thầy cô."
    }
  ]
};
