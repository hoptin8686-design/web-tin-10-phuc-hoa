import type { LessonTheory } from "@/lib/types";

// Bài 1. Thông tin và xử lí thông tin — SGK Tin học 10 (Kết nối tri thức), Trang 6–10.
// Tuân thủ 100% Bộ quy tắc Sư phạm 5 điểm trong Cẩm nang thực chiến Phục Hòa:
// 1. Dẫn nhập đời thường (Hook)
// 2. Ẩn dụ thực tế (Analogy: thóc -> cơm -> tri thức)
// 3. Khối thẻ màu (Cards)
// 4. Hộp ghi nhớ & Cảnh báo bẫy (Notes & Traps)
// 5. Chuẩn xác thuật ngữ SGK

const theory: LessonTheory = {
  minutes: 8,
  intro:
    "Hằng ngày, khi em lướt TikTok, nhắn tin Zalo hay quét mã QR trên thẻ Căn cước công dân, hàng triệu tín hiệu số đang âm thầm dịch chuyển. Bài học mở đầu này sẽ giúp em trả lời hai câu hỏi nền tảng của toàn bộ ngành Tin học: **Dữ liệu và Thông tin khác nhau thế nào?** và **Vì sao máy tính lại xử lí thông tin vượt trội con người?**",

  sections: [
    {
      id: "phan-1-khai-niem",
      emoji: "💡",
      heading: "1. Bản chất của Thông tin và Dữ liệu",
      blocks: [
        {
          kind: "text",
          text: "Nhiều người thường dùng lẫn lộn hai từ “thông tin” và “dữ liệu” như thể chúng là một. Nhưng trong khoa học Tin học, đây là hai khái niệm hoàn toàn khác biệt và có mối quan hệ nhân quả mật thiết.",
        },
        {
          kind: "figure",
          diagram: "data-vs-info",
          caption: "Ẩn dụ trực quan: Mối quan hệ từ Dữ liệu đến Thông tin và Tri thức",
        },
        {
          kind: "cards",
          tone: "sea",
          items: [
            {
              emoji: "📄",
              title: "Dữ liệu (Data)",
              text: "Là các con số, văn bản, hình ảnh, âm thanh thô được ghi lại trên vật mang tin và đưa vào máy tính để máy tính có thể nhận biết và xử lí được.",
            },
            {
              emoji: "🎯",
              title: "Thông tin (Information)",
              text: "Là **ý nghĩa** được con người rút ra sau khi tiếp nhận và xử lí dữ liệu. Thông tin gắn liền với quá trình nhận thức của con người.",
            },
            {
              emoji: "💾",
              title: "Vật mang tin (Medium)",
              text: "Là phương tiện vật lí lưu giữ dữ liệu: thẻ nhớ, ổ cứng, USB, đĩa quang, giấy vở viết, thẻ gắn chip điện tử...",
            },
            {
              emoji: "🧠",
              title: "Tri thức (Knowledge)",
              text: "Là sự hiểu biết, kinh nghiệm và quy luật được đúc kết từ thông tin để con người vận dụng giải quyết các bài toán trong đời sống.",
            },
          ],
        },
        {
          kind: "example",
          title: "Bản tin thời tiết và kết quả khám bệnh",
          text: "Bác sĩ đo được chỉ số **39°C** ghi trên nhiệt kế (đây là **Dữ liệu**). Từ con số đó, bác sĩ và người nhà hiểu rằng bệnh nhân đang bị **sốt cao nguy hiểm** (đây là **Thông tin**). Bác sĩ kê đơn thuốc hạ sốt và hướng dẫn chườm ấm (đây là **Tri thức** vận dụng).",
        },
        {
          kind: "note",
          text: "Trong máy tính, **dữ liệu là thông tin đã được mã hoá thành các dãy bit (0 và 1)** để máy tính có thể lưu trữ và xử lí được. Thông tin là ý nghĩa của dữ liệu đối với con người.",
        },
        {
          kind: "compare",
          left: {
            title: "Dữ liệu (Hình thức thể hiện)",
            emoji: "📦",
            items: [
              "Tồn tại khách quan trên vật mang tin",
              "Chưa chắc đã có ý nghĩa nếu đứng độc lập",
              "Máy tính có thể sao chép, lưu trữ và tính toán trực tiếp",
              "Ví dụ: dãy số '0912345678', bức ảnh đuôi .jpg",
            ],
          },
          right: {
            title: "Thông tin (Ý nghĩa nhận thức)",
            emoji: "💡",
            items: [
              "Gắn liền với nhận thức của người tiếp nhận",
              "Mang lại sự hiểu biết và giải tỏa sự bất định",
              "Máy tính không tự nhận thức được thông tin, chỉ hỗ trợ xử lí",
              "Ví dụ: biết số điện thoại của bạn thân để gọi khi khẩn cấp",
            ],
          },
        },
        {
          kind: "warn",
          title: "Tính toàn vẹn của thông tin",
          text: "Thông tin có tính toàn vẹn. Nếu **dữ liệu bị thiếu hụt hoặc sai lệch**, thông tin rút ra sẽ bị sai hoàn toàn hoặc không thể xác định được! *Ví dụ: Thông báo ghi 'Họp lúc 8 giờ' nhưng thiếu mất ngày tháng thì thông tin đó trở nên vô dụng.*",
        },
        {
          kind: "check",
          q: "Phát biểu nào sau đây thể hiện đúng nhất mối quan hệ giữa thông tin và dữ liệu?",
          options: [
            "Thông tin và dữ liệu là một, có thể dùng thay thế cho nhau trong mọi trường hợp.",
            "Dữ liệu là ý nghĩa tinh thần, còn thông tin là các con số được ghi vào máy tính.",
            "Thông tin là ý nghĩa của dữ liệu; cùng một thông tin có thể thể hiện qua nhiều dữ liệu khác nhau.",
            "Máy tính tự mình có thể hiểu trọn vẹn thông tin giống như bộ não của con người.",
          ],
          answer: 2,
          explain:
            "Chính xác! Thông tin là ý nghĩa của dữ liệu. Ví dụ nội dung một bài thơ (thông tin) có thể ghi vào vở (dữ liệu chữ viết), ghi âm (dữ liệu âm thanh) hoặc quay clip (dữ liệu video).",
        },
      ],
    },

    {
      id: "phan-2-quy-trinh",
      emoji: "⚙️",
      heading: "2. Quá trình Xử lí Thông tin bằng Máy tính",
      blocks: [
        {
          kind: "text",
          text: "Máy tính không tự nhận thức được thế giới, nhưng nó là cỗ máy vĩ đại nhất hỗ trợ con người trong việc thu thập và chuyển hoá dữ liệu thành thông tin hữu ích qua quy trình 3 bước khép kín:",
        },
        {
          kind: "figure",
          diagram: "data-process",
          caption: "Sơ đồ 3 giai đoạn xử lí thông tin và dữ liệu trong máy tính điện tử",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Tiếp nhận dữ liệu (Input)",
              text: "Máy tính nhận dữ liệu từ các thiết bị ngoại vi (bàn phím, chuột, camera, micro, máy quét, cảm biến) và chuyển thành tín hiệu nhị phân trong bộ nhớ.",
            },
            {
              label: "Bước 2",
              title: "Xử lí dữ liệu (Process)",
              text: "Bộ xử lí trung tâm (CPU) thực hiện các phép tính số học và logic, so sánh, sắp xếp, biến đổi các dãy bit dữ liệu theo chương trình lập sẵn.",
            },
            {
              label: "Bước 3",
              title: "Đưa ra kết quả & Lưu trữ (Output & Storage)",
              text: "Xuất dữ liệu mới dưới dạng con người hiểu được (màn hình, loa, máy in) hoặc ghi vào vật mang tin (ổ cứng SSD, đám mây, thẻ nhớ) để sử dụng lâu dài.",
            },
          ],
        },
      ],
    },

    {
      id: "phan-3-don-vi",
      emoji: "📊",
      heading: "3. Các Đơn vị Lưu trữ Dữ liệu trong Tin học",
      blocks: [
        {
          kind: "text",
          text: "Đơn vị cơ bản nhỏ nhất của dữ liệu trong máy tính là **bit** (nhận một trong hai trạng thái 0 hoặc 1). Tuy nhiên, để lưu trữ các kí tự chữ cái hay số, máy tính gom nhóm 8 bit thành **1 Byte**.",
        },
        {
          kind: "figure",
          diagram: "storage-units",
          caption: "Bảng nấc thang các đơn vị lưu trữ dữ liệu (gấp nhau 2¹⁰ = 1024 lần)",
        },
        {
          kind: "note",
          text: "**1 Byte = 8 bit.** Byte là đơn vị cơ bản để đo lượng lưu trữ dữ liệu. Các đơn vị lớn hơn liên tiếp nhau hơn kém nhau **2¹⁰ = 1 024 lần**.",
        },
        {
          kind: "warn",
          title: "Bẫy tính toán 1000 vs 1024",
          text: "Học sinh thường quen đổi 1 kg = 1000 g nên hay tính nhầm 1 KB = 1000 Byte. Trong Tin học, vì máy tính dùng hệ đếm nhị phân cơ số 2, nên **1 KB = 2¹⁰ Byte = 1 024 Byte**! Tương tự 1 MB = 1 024 KB, 1 GB = 1 024 MB.",
        },
        {
          kind: "check",
          q: "Một tệp văn bản có dung lượng 2 MB. Nếu quy đổi sang đơn vị Kilobyte (KB) chuẩn xác theo Tin học thì dung lượng tệp là bao nhiêu?",
          options: [
            "Dung lượng tệp là 2 000 KB.",
            "Dung lượng tệp là 2 048 KB.",
            "Dung lượng tệp là 1 024 KB.",
            "Dung lượng tệp là 2 024 KB.",
          ],
          answer: 1,
          explain:
            "Chính xác! 1 MB = 1 024 KB, do đó 2 MB = 2 × 1 024 = 2 048 KB (không phải 2 000 KB).",
        },
      ],
    },

    {
      id: "phan-4-uu-viet",
      emoji: "🚀",
      heading: "4. Sự Ưu việt của Thiết bị Số",
      blocks: [
        {
          kind: "text",
          text: "So với phương pháp thủ công truyền thống bằng giấy bút và lưu trữ vật lí, thiết bị số đem lại cuộc cách mạng toàn diện trên 3 phương diện then chốt:",
        },
        {
          kind: "cards",
          tone: "leaf",
          items: [
            {
              emoji: "🗄️",
              title: "Lưu trữ khổng lồ & Siêu nhỏ gọn",
              text: "Một ổ cứng SSD 2 TB nhỏ bằng bao diêm có thể chứa toàn bộ nội dung của một thư viện trường học lớn. Dữ liệu không bị phai mờ theo thời gian và tìm kiếm chỉ mất vài mili-giây.",
            },
            {
              emoji: "⚡",
              title: "Xử lí siêu tốc & Tuyệt đối chính xác",
              text: "Máy tính có thể thực hiện hàng tỉ đến hàng trăm triệu tỉ phép tính trong 1 giây mà không hề mệt mỏi hay nhầm lẫn. Nhờ đó ta có thể mô phỏng thời tiết, thiết kế vũ trụ và nghiên cứu vắc-xin.",
            },
            {
              emoji: "🌐",
              title: "Truyền thông tức thời không biên giới",
              text: "Mạng Internet và cáp quang cho phép truyền tải dữ liệu đi nửa vòng Trái Đất với tốc độ ánh sáng. Học sinh tại Phục Hòa (Cao Bằng) có thể tiếp cận mọi kho tri thức thế giới ngay lập tức.",
            },
            {
              emoji: "💰",
              title: "Tự động hóa & Tiết kiệm chi phí",
              text: "Giảm thiểu chi phí in ấn giấy tờ, tự động hóa quy trình quản trị, bảo mật bằng mã hoá và phân quyền truy cập an toàn.",
            },
          ],
        },
      ],
    },
  ],

  summary: [
    "Dữ liệu là các yếu tố thể hiện (số, chữ, ảnh, âm thanh) đã đưa vào máy tính. Thông tin là ý nghĩa của dữ liệu mang lại nhận thức cho con người.",
    "Cùng một thông tin có thể biểu diễn qua nhiều dạng dữ liệu khác nhau. Dữ liệu không đầy đủ sẽ làm thông tin bị sai lệch (tính toàn vẹn).",
    "Quá trình xử lí thông tin bằng máy tính gồm 3 bước: Tiếp nhận dữ liệu (Input) → Xử lí dữ liệu (Process) → Đưa ra kết quả & Lưu trữ (Output/Storage).",
    "1 Byte = 8 bit. Các đơn vị lưu trữ lớn hơn kế tiếp nhau gấp 2¹⁰ = 1 024 lần: Byte → KB → MB → GB → TB → PB → EB → ZB → YB.",
    "Thiết bị số có 4 ưu điểm vượt trội: Dung lượng lưu trữ lớn & gọn nhẹ, Tốc độ xử lí cực nhanh & chính xác, Truyền tin tức thời toàn cầu, và Tự động hóa chi phí thấp.",
  ],
};

export default theory;
