import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-12: Phần mềm thiết kế đồ họa

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b12-tf01",
      "context": "Bạn Thảo thực hành tạo hình Quốc kì Việt Nam trên phần mềm Inkscape trong giờ Tin học lớp 10 trường THPT Phục Hòa:",
      "statements": [
        {
          "text": "Thảo dùng công cụ Rectangle để vẽ nền cờ màu đỏ và dùng công cụ Stars and Polygons để vẽ ngôi sao 5 cánh màu vàng.",
          "answer": true,
          "explain": "Đúng. Đây là các công cụ hình học cơ bản chuẩn để vẽ quốc kì."
        },
        {
          "text": "Để vẽ ngôi sao vàng có 5 cánh nhọn chuẩn mực, Thảo đặt số Corners trên thanh thuộc tính bằng 5.",
          "answer": true,
          "explain": "Đúng. Corners = 5 tạo ngôi sao 5 cánh."
        },
        {
          "text": "Thảo có thể nhấp chuột trái vào ô màu đỏ trên Bảng màu để tô màu đỏ cho nền cờ đang được chọn.",
          "answer": true,
          "explain": "Đúng. Nhấp chuột trái vào Palette để đổi màu tô Fill."
        },
        {
          "text": "Bức cờ đỏ sao vàng vẽ bằng Inkscape khi xuất thành tệp .svg sẽ bị nhòe vỡ hạt khi phóng to chiếu lên màn hình máy chiếu hội trường.",
          "answer": false,
          "explain": "Sai. Tệp SVG là đồ họa vector, phóng to lên kích thước sân vận động vẫn sắc nét tuyệt đối."
        }
      ]
    },
    {
      "id": "b12-tf02",
      "context": "Một nhóm học sinh tìm hiểu về các công cụ trên thanh Toolbox của Inkscape:",
      "statements": [
        {
          "text": "Công cụ Select and Transform Objects (phím S) dùng để chọn, di chuyển, thay đổi kích thước và xoay đối tượng.",
          "answer": true,
          "explain": "Đúng. Chức năng chính của công cụ Select."
        },
        {
          "text": "Khi kéo thả chuột bằng công cụ Circle/Ellipse mà giữ đồng thời phím Ctrl, ta sẽ thu được một hình tròn hoàn hảo.",
          "answer": true,
          "explain": "Đúng. Phím Ctrl khóa tỉ lệ 1:1 tạo hình tròn."
        },
        {
          "text": "Inkscape bắt buộc người dùng phải mua thẻ bản quyền kích hoạt hàng tháng thì mới xuất được ảnh ra ổ cứng.",
          "answer": false,
          "explain": "Sai. Inkscape là phần mềm mã nguồn mở hoàn toàn miễn phí trọn đời."
        },
        {
          "text": "Người dùng có thể phóng to thu nhỏ góc nhìn trang vẽ (Zoom) bằng cách giữ phím Ctrl và lăn con lăn chuột.",
          "answer": true,
          "explain": "Đúng. Phím tắt Ctrl + lăn chuột zoom trang vẽ cực kì thuận tiện."
        }
      ]
    },
    {
      "id": "b12-tf03",
      "context": "Khi làm việc với các đối tượng hình học trong Inkscape:",
      "statements": [
        {
          "text": "Tổ hợp phím Ctrl + D giúp nhân bản đối tượng đang chọn ngay tại vị trí cũ của nó.",
          "answer": true,
          "explain": "Đúng. Lệnh Duplicate nhân bản đối tượng tức thì."
        },
        {
          "text": "Hai đối tượng hình học sau khi được nhóm lại (Group) bằng Ctrl + G sẽ di chuyển cùng nhau như một thể thống nhất.",
          "answer": true,
          "explain": "Đúng. Group giúp quản lí nhiều chi tiết phức tạp gắn kết với nhau."
        },
        {
          "text": "Một khi đã nhóm đối tượng bằng Ctrl + G thì vĩnh viễn không bao giờ có thể tách rời các chi tiết ra được nữa.",
          "answer": false,
          "explain": "Sai. Dùng lệnh Ungroup (Ctrl + Shift + G) để tách nhóm bất kì lúc nào."
        },
        {
          "text": "Mỗi hình vẽ trong Inkscape đều có hai thuộc tính hiển thị cơ bản là màu tô (Fill) và đường viền (Stroke).",
          "answer": true,
          "explain": "Đúng. Cấu trúc hiển thị vector chuẩn gồm Fill và Stroke."
        }
      ]
    },
    {
      "id": "b12-tf04",
      "context": "So sánh phần mềm Inkscape với phần mềm chỉnh sửa ảnh Paint có sẵn trong Windows:",
      "statements": [
        {
          "text": "Paint xử lí đồ họa điểm (Bitmap), còn Inkscape xử lí đồ họa véc-tơ (Vector).",
          "answer": true,
          "explain": "Đúng. Sự khác biệt bản chất về công nghệ xử lí ảnh."
        },
        {
          "text": "Hình vẽ trong Paint khi phóng to gấp 10 lần sẽ thấy rõ các ô vuông điểm ảnh bị răng cưa.",
          "answer": true,
          "explain": "Đúng. Hạn chế cố hữu của ảnh bitmap độ phân giải thấp."
        },
        {
          "text": "Inkscape hỗ trợ làm việc với các đường cong Bézier phức tạp và hệ thống phân lớp (Layers) chuyên nghiệp.",
          "answer": true,
          "explain": "Đúng. Inkscape là công cụ đồ họa vector chuyên nghiệp ngang tầm Adobe Illustrator."
        },
        {
          "text": "Tệp tin thiết kế trên Inkscape không thể chuyển đổi (export) sang định dạng ảnh PNG thông thường.",
          "answer": false,
          "explain": "Sai. Inkscape hỗ trợ xuất ảnh PNG chất lượng cao rất linh hoạt."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b12-es01",
      "q": "Trình bày 4 thành phần chính trong giao diện làm việc của phần mềm thiết kế đồ họa Inkscape (Hộp công cụ, Thanh điều khiển thuộc tính, Bảng màu, Trang vẽ). Nêu chức năng của từng thành phần đó đối với người thiết kế.",
      "answer": "1. Bốn thành phần chính trong giao diện Inkscape:\n- Hộp công cụ (Toolbox - mép trái màn hình): Chứa toàn bộ các công cụ tạo hình và chỉnh sửa như: Công cụ chọn (Select), tạo hình chữ nhật (Rectangle), tạo hình tròn/elip (Circle), tạo hình sao/đa giác (Star), bút vẽ đường cong Bezier, công cụ văn bản (Text).\n- Thanh điều khiển thuộc tính (Tool Controls Bar - nằm ngang phía trên trang vẽ): Hiển thị và cho phép tinh chỉnh các thông số kĩ thuật đặc thù của công cụ đang được chọn trong Toolbox (ví dụ: kích thước w, h, góc bo tròn Rx, số cánh sao, độ dày nét vẽ).\n- Bảng màu (Color Palette - thanh ngang ở đáy màn hình): Cung cấp dải các ô màu sắc trực quan, giúp người vẽ đổi màu tô (Fill) bằng cách nhấp chuột trái hoặc đổi màu viền (Stroke) bằng cách giữ phím Shift + nhấp chuột trái một cách nhanh chóng.\n- Trang vẽ (Canvas / Drawing Page - vùng trung tâm): Không gian làm việc hiển thị một trang giấy có khung viền xác định khổ in (thường mặc định là A4); người thiết kế đặt các đối tượng đồ họa bên trong hoặc xung quanh khung này để sáng tạo sản phẩm."
    },
    {
      "id": "b12-es02",
      "q": "Trình bày các bước cụ thể trên phần mềm Inkscape để vẽ một lá cờ Tổ quốc Việt Nam (nền màu đỏ, ngôi sao vàng 5 cánh ở chính giữa) đảm bảo đúng tỉ lệ và thẩm mĩ.",
      "answer": "1. Các bước vẽ nền cờ đỏ:\n- Bước 1: Chọn công cụ hình chữ nhật (Rectangle Tool - phím R).\n- Bước 2: Kéo thả chuột trên trang vẽ để tạo một hình chữ nhật với tỉ lệ chiều rộng bằng 3/2 chiều cao (chuẩn tỉ lệ cờ Việt Nam, ví dụ đặt W = 300 mm, H = 200 mm trên Tool Controls Bar).\n- Bước 3: Nhấp chuột trái vào ô màu đỏ tươi trên Bảng màu ở đáy màn hình để tô màu đỏ cho nền cờ.\n\n2. Các bước vẽ ngôi sao vàng 5 cánh:\n- Bước 1: Chọn công cụ hình sao và đa giác (Stars and Polygons - phím *).\n- Bước 2: Trên thanh Tool Controls Bar, chọn biểu tượng ngôi sao, đặt ô Corners = 5 và điều chỉnh Spoke ratio = 0.382 (tỉ lệ cánh sao chuẩn mực).\n- Bước 3: Giữ phím Ctrl và kéo thả chuột để vẽ ngôi sao cân đối; nhấp chuột trái vào ô màu vàng trên Bảng màu để tô màu vàng.\n\n3. Căn chỉnh ngôi sao vào chính giữa nền cờ:\n- Bước 1: Chọn công cụ Select (phím S), quét chuột chọn cả hình nền cờ và ngôi sao.\n- Bước 2: Mở bảng căn gióng (Object -> Align and Distribute, hoặc phím tắt Shift + Ctrl + A).\n- Bước 3: Trong mục 'Relative to', chọn 'First selected' (hoặc 'Biggest object'), sau đó bấm nút 'Center on vertical axis' (căn giữa trục dọc) và 'Center on horizontal axis' (căn giữa trục ngang) để ngôi sao nằm tuyệt đối ở tâm lá cờ."
    }
  ]
};
