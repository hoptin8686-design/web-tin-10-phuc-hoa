import type { LessonExtra } from "@/lib/types";

// Bài tập Đúng/Sai (4 câu ngữ cảnh D2) và Tự luận (2 câu) cho BAI-33: Nghề thiết kế đồ hoạ máy tính

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b33-tf01",
      "context": "Nhóm học sinh trao đổi về hai công nghệ đồ họa máy tính cốt lõi: Đồ họa điểm ảnh (Raster) và Đồ họa vectơ (Vector):",
      "statements": [
        {
          "text": "Ảnh điểm ảnh (Raster) được cấu tạo từ một lưới các chấm màu gọi là pixel (điểm ảnh).",
          "answer": true,
          "explain": "Đúng. Raster dựa trên ma trận các pixel màu sắc."
        },
        {
          "text": "Ảnh vectơ được tạo thành từ các đối tượng hình học như đường thẳng, đường cong, đa giác dựa trên các phương trình toán học.",
          "answer": true,
          "explain": "Đúng. Vector biểu diễn hình ảnh bằng công thức toán học."
        },
        {
          "text": "Khi phóng to ảnh điểm ảnh lên nhiều lần, ta sẽ thấy hiện tượng vỡ hạt, răng cưa và mất độ sắc nét.",
          "answer": true,
          "explain": "Đúng. Phóng to pixel sẽ làm lộ các ô vuông màu (hiện tượng pixelation/vỡ hình)."
        },
        {
          "text": "Đồ họa vectơ là lựa chọn tối ưu để chụp và lưu giữ những bức ảnh phong cảnh thiên nhiên có màu sắc chân thực.",
          "answer": false,
          "explain": "Sai. Ảnh chụp thiên nhiên phức tạp phải dùng ảnh raster (JPEG, RAW...); vector chỉ tối ưu cho logo, icon, typography."
        }
      ]
    },
    {
      "id": "b33-tf02",
      "context": "Một bạn học sinh dự định làm hồ sơ xin thực tập vị trí thiết kế đồ họa tại một công ty truyền thông:",
      "statements": [
        {
          "text": "Portfolio (hồ sơ tác phẩm mẫu) là tài liệu quan trọng nhất thể hiện phong cách, tư duy và kỹ năng thực tế của bạn đó.",
          "answer": true,
          "explain": "Đúng. Portfolio là bằng chứng xác thực nhất về năng lực thiết kế."
        },
        {
          "text": "Bạn đó có thể tự do lấy các mẫu thiết kế của người khác trên mạng đưa vào portfolio của mình mà không cần ghi nguồn.",
          "answer": false,
          "explain": "Sai. Hành vi đạo nhái, nhận vơ tác phẩm là vi phạm nghiêm trọng đạo đức nghề nghiệp và pháp luật bản quyền."
        },
        {
          "text": "Kỹ năng giao tiếp và lắng nghe phản hồi (feedback) từ khách hàng là một kỹ năng mềm vô cùng quan trọng đối với nhà thiết kế.",
          "answer": true,
          "explain": "Đúng. Thiết kế là phục vụ nhu cầu truyền thông của khách hàng, cần lắng nghe và thấu hiểu phản hồi."
        },
        {
          "text": "Người làm thiết kế đồ họa chỉ cần biết vẽ đẹp bằng tay chứ hoàn toàn không cần học cách sử dụng máy tính.",
          "answer": false,
          "explain": "Sai. Thiết kế đồ họa máy tính hiện đại bắt buộc phải thành thạo các phần mềm đồ họa số (Photoshop, Illustrator, Inkscape...)."
        }
      ]
    },
    {
      "id": "b33-tf03",
      "context": "Xét hai hệ màu cơ bản trong thiết kế đồ họa: RGB và CMYK:",
      "statements": [
        {
          "text": "Hệ màu RGB là hệ màu cộng ánh sáng, khi kết hợp cả ba màu Đỏ, Xanh lá và Xanh dương ở cường độ tối đa sẽ tạo ra màu Trắng.",
          "answer": true,
          "explain": "Đúng. RGB là mô hình màu cộng (Additive color model): R + G + B = White."
        },
        {
          "text": "Hệ màu CMYK là hệ màu trừ mực in, thường dùng để thiết kế sách báo, tạp chí, bao bì in offset.",
          "answer": true,
          "explain": "Đúng. CMYK là mô hình màu trừ (Subtractive color model) dùng cho in ấn."
        },
        {
          "text": "Nếu thiết kế poster trên máy tính bằng hệ màu RGB rồi đem đi in trực tiếp thì màu sắc bản in ra có thể bị xỉn màu và sai lệch so với màn hình.",
          "answer": true,
          "explain": "Đúng. Không gian màu RGB rộng hơn CMYK, máy in không thể tái tạo hết các màu rực rỡ của RGB nên dễ bị lệch màu."
        },
        {
          "text": "Chữ K trong tên gọi CMYK là viết tắt của từ tiếng Anh 'Key' (màu then chốt, thường là mực màu Đen).",
          "answer": true,
          "explain": "Đúng. Key plate đại diện cho màu đen (Black) trong in ấn bốn màu."
        }
      ]
    },
    {
      "id": "b33-tf04",
      "context": "Xét tác động của Trí tuệ nhân tạo (AI) đối với nghề thiết kế đồ họa trong bối cảnh cuộc Cách mạng công nghiệp 4.0:",
      "statements": [
        {
          "text": "Các công cụ AI có thể hỗ trợ tạo nhanh các bản phác thảo ý tưởng (concept sketch) và gợi ý bảng màu chỉ sau vài giây.",
          "answer": true,
          "explain": "Đúng. AI giúp tăng tốc đáng kể khâu lên ý tưởng và tìm nguồn cảm hứng."
        },
        {
          "text": "AI sẽ thay thế hoàn toàn 100% vai trò của con người trong thiết kế và không còn ai theo học ngành này nữa.",
          "answer": false,
          "explain": "Sai. AI thiếu cảm xúc nhân văn, thấu hiểu ngữ cảnh văn hóa sâu sắc và tư duy phản biện chiến lược của con người."
        },
        {
          "text": "Nhà thiết kế tương lai cần rèn luyện kĩ năng viết câu lệnh (prompt engineering) để điều khiển công cụ AI hiệu quả.",
          "answer": true,
          "explain": "Đúng. Khả năng tương tác với AI là kĩ năng bổ trợ mới rất cần thiết."
        },
        {
          "text": "Các vấn đề bản quyền đối với tác phẩm do AI tạo ra hiện đang là chủ đề tranh luận pháp lý lớn trên thế giới.",
          "answer": true,
          "explain": "Đúng. Vấn đề bản quyền dữ liệu huấn luyện và quyền tác giả của sản phẩm AI đang được các quốc gia thảo luận xây dựng luật."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b33-es01",
      "q": "Nghề thiết kế đồ họa máy tính là gì? Phân tích sự khác biệt căn bản giữa đồ họa điểm ảnh (Raster Graphics) và đồ họa vectơ (Vector Graphics) về: nguyên lý biểu diễn, khả năng co giãn kích thước, dung lượng lưu trữ và ứng dụng điển hình của mỗi loại.",
      "answer": "1. Khái niệm nghề thiết kế đồ họa máy tính:\n- Thiết kế đồ họa máy tính (Computer Graphic Design) là ngành ứng dụng công nghệ thông tin và phần mềm chuyên dụng để tạo ra các tác phẩm mỹ thuật truyền thông thị giác (hình ảnh, biểu tượng, typography, màu sắc) nhằm truyền đạt một thông điệp cụ thể tới người xem.\n\n2. Phân tích sự khác biệt căn bản giữa đồ họa Raster và đồ họa Vector:\n\n- Nguyên lý biểu diễn:\n  + Đồ họa Raster (ảnh điểm ảnh): Biểu diễn hình ảnh bằng một ma trận lưới gồm hàng triệu điểm ảnh nhỏ li ti (`pixel`), mỗi điểm ảnh mang một giá trị màu xác định.\n  + Đồ họa Vector (ảnh vectơ): Biểu diễn hình ảnh dựa trên các công thức toán học xác định các đối tượng hình học (điểm tọa độ, đường thẳng, đường cong bezier, hình đa giác, màu tô).\n\n- Khả năng co giãn kích thước (Khả năng co dãn - Scalability):\n  + Đồ họa Raster: Khi phóng to kích thước vượt quá độ phân giải gốc, ảnh sẽ bị hiện tượng vỡ hạt, nhòe và răng cưa (`pixelation`).\n  + Đồ họa Vector: Có thể phóng to hoặc thu nhỏ vô hạn ở bất kỳ kích thước nào (từ con tem đến biển quảng cáo khổng lồ trên tòa nhà) mà đường nét vẫn giữ nguyên độ sắc nét hoàn hảo.\n\n- Dung lượng lưu trữ:\n  + Đồ họa Raster: Thường có dung lượng tệp lớn vì phải lưu thông tin màu sắc của từng pixel riêng lẻ.\n  + Đồ họa Vector: Thường có dung lượng tệp rất nhỏ vì chỉ cần lưu các tham số phương trình toán học.\n\n- Ứng dụng điển hình và phần mềm tiêu biểu:\n  + Đồ họa Raster: Thích hợp cho chỉnh sửa ảnh chân dung, ảnh chụp phong cảnh phức tạp nhiều sắc độ. Phần mềm tiêu biểu: Adobe Photoshop, GIMP.\n  + Đồ họa Vector: Thích hợp cho thiết kế logo, biểu tượng (icon), font chữ, ấn phẩm nhận diện thương hiệu, hình minh họa hoạt hình. Phần mềm tiêu biểu: Inkscape, Adobe Illustrator, CorelDraw."
    },
    {
      "id": "b33-es02",
      "q": "Một học sinh THPT có niềm đam mê và muốn theo đuổi nghề Thiết kế đồ họa máy tính trong tương lai. Hãy trình bày những phẩm chất, kỹ năng cần chuẩn bị từ khi còn ngồi trên ghế nhà trường, và nêu ít nhất 3 vị trí công việc hấp dẫn trong ngành này.",
      "answer": "1. Phẩm chất và kỹ năng cần chuẩn bị từ bậc THPT:\n- Rèn luyện óc thẩm mỹ và tư duy thị giác: Quan sát cuộc sống, học hỏi cách phối màu, bố cục, tỉ lệ hài hòa từ thiên nhiên và các tác phẩm nghệ thuật xuất sắc.\n- Nâng cao tư duy sáng tạo: Luôn tò mò, tìm kiếm những góc nhìn mới mẻ để giải quyết bài toán truyền thông thông điệp bằng hình ảnh.\n- Làm chủ công nghệ và phần mềm đồ họa: Tự học và thực hành sử dụng các phần mềm đồ họa thông dụng (như Inkscape, Photoshop, Illustrator, Figma, Blender) thông qua các bài tập thiết kế poster lớp, áo lớp, video kỷ yếu.\n- Ngoại ngữ (Tiếng Anh): Giúp tiếp cận kho tài liệu học tập, các khóa học trực tuyến quốc tế và bắt kịp xu hướng thiết kế toàn cầu.\n- Kỹ năng mềm: Giao tiếp, làm việc nhóm, quản lý thời gian và đặc biệt là kỹ năng lắng nghe phản hồi (`feedback`) với tinh thần cầu thị.\n- Xây dựng Portfolio cá nhân: Lưu trữ có hệ thống tất cả các sản phẩm thiết kế mình đã làm từ nhỏ đến lớn để làm hồ sơ năng lực sau này.\n\n2. Ba vị trí công việc hấp dẫn trong ngành thiết kế đồ họa:\n- Chuyên viên thiết kế nhận diện thương hiệu (Brand Identity Designer): Chuyên sáng tạo logo, bộ quy chuẩn nhận diện thương hiệu, bao bì sản phẩm cho các doanh nghiệp.\n- Chuyên viên thiết kế giao diện và trải nghiệm người dùng (UI/UX Designer): Chuyên thiết kế giao diện các ứng dụng di động, website thân thiện, dễ sử dụng cho các công ty công nghệ và ngân hàng.\n- Chuyên viên thiết kế đồ họa 3D và kĩ xảo điện ảnh (3D Motion / VFX Artist): Chuyên tạo hình mô hình 3D, làm hoạt hình, hiệu ứng hình ảnh cho các studio làm game và phim điện ảnh."
    }
  ]
};
