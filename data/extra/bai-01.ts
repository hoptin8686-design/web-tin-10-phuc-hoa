import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  tf: [
    {
      id: "b01-tf-01",
      context:
        "Bạn Hùng, học sinh lớp 10 trường THPT Phục Hòa, dùng điện thoại thông minh chụp ảnh chuyến trải nghiệm thác Bản Giốc. Thẻ nhớ điện thoại của Hùng có dung lượng 32 GB. Mỗi bức ảnh Hùng chụp có kích thước tệp trung bình là 4 MB. Hùng dự định sao lưu ảnh lên dịch vụ lưu trữ đám mây Google Drive.",
      statements: [
        {
          text: "Mỗi bức ảnh lưu trên thẻ nhớ điện thoại là dữ liệu dưới dạng tập tin đồ họa số, còn vẻ đẹp hùng vĩ của thác Bản Giốc khi Hùng ngắm nhìn bức ảnh là thông tin mà Hùng thu nhận được.",
          answer: true,
          explain:
            "Đúng: Bức ảnh số lưu dãy bit là dữ liệu; còn cảm nhận, ý nghĩa và sự hiểu biết về cảnh đẹp chính là thông tin đối với con người.",
        },
        {
          text: "Dung lượng thẻ nhớ 32 GB tương đương với đúng 32 000 MB theo chuẩn đo lường của khoa học máy tính.",
          answer: false,
          explain:
            "Sai: Trong Tin học, 1 GB = 1 024 MB, do đó 32 GB = 32 × 1 024 = 32 768 MB (không phải 32 000 MB).",
        },
        {
          text: "Nếu một bức ảnh của Hùng bị mất đi một nửa dữ liệu trong quá trình sao chép, Hùng vẫn chắc chắn thu nhận được trọn vẹn thông tin bức ảnh ban đầu nhờ tính toàn vẹn của dữ liệu.",
          answer: false,
          explain:
            "Sai: Thông tin có tính toàn vẹn. Khi dữ liệu bị mất một nửa (hỏng tệp), thông tin sẽ bị sai lệch hoặc hoàn toàn không thể xem được bức ảnh.",
        },
        {
          text: "Thẻ nhớ của Hùng có thể chứa được tối đa hơn 8 000 bức ảnh có kích thước 4 MB nếu thẻ đang hoàn toàn trống.",
          answer: true,
          explain:
            "Đúng: 32 GB = 32 768 MB. Số ảnh tối đa = 32 768 / 4 = 8 192 bức ảnh (lớn hơn 8 000).",
        },
      ],
    },
    {
      id: "b01-tf-02",
      context:
        "Trong kì thi giữa học kì I tại trường THPT Phục Hòa, thầy cô giáo sử dụng phần mềm quản lí điểm số để nhập và thống kê điểm thi môn Tin học của 35 học sinh lớp 10A1.",
      statements: [
        {
          text: "Bảng danh sách các con số điểm (ví dụ: 8.5; 9.0; 7.5) gõ vào phần mềm được gọi là dữ liệu đầu vào.",
          answer: true,
          explain:
            "Đúng: Các con số điểm gõ vào máy là dữ liệu thô (Input data) cần xử lí.",
        },
        {
          text: "Máy tính tự nhận thức được việc học sinh nào chăm học hay lười học mà không cần dựa vào bất kì thuật toán hay chương trình tính điểm nào do con người thiết lập.",
          answer: false,
          explain:
            "Sai: Máy tính không tự nhận thức được. Nó chỉ là công cụ tính toán theo các câu lệnh và công thức mà con người đã lập trình sẵn.",
        },
        {
          text: "Thông tin 'Điểm trung bình môn Tin của lớp 10A1 là 8.2' là kết quả rút ra sau quá trình xử lí dữ liệu của phần mềm.",
          answer: true,
          explain:
            "Đúng: Điểm trung bình là thông tin tổng hợp có ý nghĩa giúp giáo viên đánh giá chất lượng học tập của lớp.",
        },
        {
          text: "Nếu xóa nhầm cột điểm kiểm tra thường xuyên của 10 bạn học sinh, kết quả điểm tổng kết môn Tin của cả lớp vẫn không bị ảnh hưởng.",
          answer: false,
          explain:
            "Sai: Do tính toàn vẹn của thông tin, việc thiếu hụt dữ liệu thành phần sẽ làm kết quả tính toán bị sai lệch nghiêm trọng.",
        },
      ],
    },
  ],

  essay: [
    {
      id: "b01-es-01",
      q: "Một cuốn sách giáo khoa Tin học 10 khi được số hóa dưới dạng văn bản và hình ảnh có dung lượng khoảng 50 MB. Thư viện Trường THPT Phục Hòa có khoảng 2 000 cuốn sách. Hỏi nếu số hóa toàn bộ số sách trên thì cần dung lượng bộ nhớ khoảng bao nhiêu Gigabyte (GB)? Một thẻ nhớ hoặc USB dung lượng 128 GB có đủ sức chứa toàn bộ thư viện sách số hóa đó hay không?",
      answer:
        "HƯỚNG DẪN GIẢI:\n1. Tổng dung lượng cần để số hóa 2 000 cuốn sách là:\n   2 000 × 50 MB = 100 000 MB.\n\n2. Đổi 100 000 MB sang Gigabyte (GB):\n   100 000 / 1 024 ≈ 97.66 GB.\n\n3. Đánh giá dung lượng thẻ nhớ:\n   Vì 97.66 GB < 128 GB nên thẻ nhớ/USB dung lượng 128 GB hoàn toàn đủ sức chứa toàn bộ 2 000 cuốn sách số hóa của thư viện trường, thậm chí còn dư khoảng hơn 30 GB.",
    },
    {
      id: "b01-es-02",
      q: "Em hãy nêu một ví dụ thực tế trong đời sống học đường thể hiện rõ: Cùng một thông tin nhưng có thể biểu diễn bằng nhiều dạng dữ liệu khác nhau. Ý nghĩa của việc này đối với việc học tập của học sinh là gì?",
      answer:
        "HƯỚNG DẪN TRẢ LỜI:\n1. Ví dụ thực tế:\n   Thông tin về 'Nguyên lí hoạt động của vòng lặp trong Python' có thể được thể hiện qua nhiều dạng dữ liệu:\n   - Dữ liệu văn bản: Định nghĩa và cú pháp viết trong vở ghi hoặc sách giáo khoa.\n   - Dữ liệu hình ảnh / sơ đồ: Sơ đồ khối (Flowchart) mô tả mũi tên rẽ nhánh và lặp.\n   - Dữ liệu âm thanh / video: Thầy cô giảng giải bằng lời nói trên lớp hoặc video bài giảng trên YouTube.\n\n2. Ý nghĩa trong học tập:\n   Giúp học sinh tiếp cận kiến thức đa giác quan: học sinh thích đọc chữ có tài liệu văn bản, học sinh thích trực quan có sơ đồ minh họa, học sinh nghe giảng qua video dễ hiểu hơn. Điều này tăng cường hiệu quả tự học và ghi nhớ lâu hơn.",
    },
  ],
};
