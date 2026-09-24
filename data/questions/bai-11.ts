import type { Question } from "@/lib/types";

// Ngân hàng 16 câu trắc nghiệm BAI-11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền
// Chuẩn hóa 16 câu trắc nghiệm (đáp án đúng tại vị trí 0, độ dài phân tán đồng đều)

export const questions: Question[] = [
  {
    "id": "b11-q01",
    "q": "Bộ quy tắc ứng xử trên mạng xã hội do Bộ Thông tin và Truyền thông Việt Nam ban hành dựa trên những quy tắc cốt lõi nào?",
    "options": [
      "Tôn trọng, Tuân thủ pháp luật, Lành mạnh, An toàn và Trách nhiệm.",
      "Tự do ngôn luận vô căn cứ, ẩn danh để công kích người khác và lan truyền tin đồn.",
      "Chỉ sử dụng mạng xã hội vào ban đêm và từ chối mọi sự quản lí của cơ quan chức năng.",
      "Bắt buộc mọi người dùng phải chia sẻ toàn bộ đời sống riêng tư lên trang cá nhân."
    ],
    "answer": 0,
    "explain": "Quy tắc ứng xử trên MXH gồm: Tôn trọng pháp luật, Lành mạnh, An toàn và Trách nhiệm đối với thông tin mình đăng tải."
  },
  {
    "id": "b11-q02",
    "q": "Hành vi nào dưới đây bị nghiêm cấm theo quy định của Luật An ninh mạng Việt Nam?",
    "options": [
      "Đăng tải thông tin sai sự thật xúc phạm danh dự, nhân phẩm của cá nhân hoặc tổ chức.",
      "Sử dụng mạng Internet để tra cứu tài liệu học tập và nghiên cứu khoa học phục vụ bài học.",
      "Tạo nhóm học tập trên mạng xã hội để cùng nhau giải các bài tập lập trình Tin học.",
      "Bật chế độ xác thực hai lớp (2FA) để bảo vệ tài khoản mạng xã hội của bản thân."
    ],
    "answer": 0,
    "explain": "Luật An ninh mạng nghiêm cấm tung tin bịa đặt, vu khống, xúc phạm nhân phẩm danh dự, kích động bạo lực, chống phá nhà nước."
  },
  {
    "id": "b11-q03",
    "q": "Khái niệm 'Bản quyền tác giả' (Copyright) bảo hộ quyền lợi gì cho tác giả sáng tạo tác phẩm?",
    "options": [
      "Bảo hộ quyền nhân thân (đứng tên tác giả) và quyền tài sản (cho phép sao chép, phân phối, thu lợi nhuận).",
      "Cho phép tác giả có quyền can thiệp vào đời sống riêng tư của toàn bộ độc giả mua sách.",
      "Bảo hộ quyền độc quyền vĩnh viễn không bao giờ hết hạn kể cả hàng nghìn năm sau khi tác giả qua đời.",
      "Miễn trừ hoàn toàn nghĩa vụ nộp thuế thu nhập cho mọi hoạt động kinh doanh của tác giả."
    ],
    "answer": 0,
    "explain": "Quyền tác giả gồm: Quyền nhân thân (đứng tên, đặt tên, bảo vệ sự toàn vẹn tác phẩm) và Quyền tài sản (sao chép, biểu diễn, phân phối)."
  },
  {
    "id": "b11-q04",
    "q": "Hành vi nào dưới đây cấu thành hành vi vi phạm bản quyền tác giả trong môi trường số?",
    "options": [
      "Tải một phần mềm thương mại có phí về, bẻ khóa (crack) rồi chia sẻ công khai lên mạng cho người khác dùng.",
      "Mua bản quyền một ứng dụng di động chính thức từ kho ứng dụng Google Play để tự dùng.",
      "Sử dụng một hình ảnh miễn phí thuộc phạm vi công cộng (Public Domain) để làm hình nền máy tính.",
      "Trích dẫn một câu danh ngôn nổi tiếng vào bài thuyết trình và ghi rõ tên tác giả câu nói."
    ],
    "answer": 0,
    "explain": "Bẻ khóa (crack), sao chép và phân phối phần mềm thương mại mà không có sự đồng ý của tác giả là hành vi vi phạm bản quyền nghiêm trọng."
  },
  {
    "id": "b11-q05",
    "q": "Giấy phép Creative Commons (CC) được tạo ra với mục đích chính là gì?",
    "options": [
      "Giúp tác giả dễ dàng cấp quyền cho cộng đồng sử dụng, chia sẻ tác phẩm của mình một cách hợp pháp.",
      "Bắt buộc tất cả các tác phẩm sáng tạo trên thế giới phải xóa bỏ hoàn toàn tên tác giả ban đầu.",
      "Cấm tuyệt đối mọi người không được phép trích dẫn bất kì tài liệu nào trên mạng Internet.",
      "Thu phí bản quyền bản quyền tự động trừ tiền từ tài khoản ngân hàng của người xem."
    ],
    "answer": 0,
    "explain": "Creative Commons cung cấp các giấy phép bản quyền mở chuẩn hóa (như CC BY, CC NC), giúp tác giả tự quy định điều kiện chia sẻ tác phẩm cho cộng đồng."
  },
  {
    "id": "b11-q06",
    "q": "Kí hiệu giấy phép 'CC BY' trong hệ thống Creative Commons có ý nghĩa bắt buộc người sử dụng phải làm gì?",
    "options": [
      "Ghi nhận công trạng (Attribution) và ghi rõ nguồn gốc tên tác giả gốc của tác phẩm.",
      "Không được phép sử dụng tác phẩm cho bất kì mục đích thương mại kiếm tiền nào.",
      "Không được phép cắt xén hay chỉnh sửa tác phẩm gốc dưới bất kì hình thức nào.",
      "Bắt buộc phải chia sẻ tác phẩm phái sinh với giấy phép mở tương tự như bản gốc."
    ],
    "answer": 0,
    "explain": "'BY' (Attribution - Ghi nhận công trạng): Bạn được tự do dùng, sửa, phối lại nhưng bắt buộc phải ghi tên tác giả gốc và dẫn link nguồn."
  },
  {
    "id": "b11-q07",
    "q": "Kí hiệu 'NC' (Non-Commercial) trong giấy phép Creative Commons quy định điều kiện gì?",
    "options": [
      "Chỉ được sử dụng cho mục đích phi thương mại, không được dùng để bán lấy tiền.",
      "Được phép thoải mái đem bán lấy tiền mà không cần chia sẻ lại cho tác giả gốc.",
      "Tác phẩm chỉ được lưu trữ trên máy tính mà không được in ra trên giấy viết.",
      "Bắt buộc người xem phải trả tiền xu trực tiếp cho tác giả mỗi khi bấm xem."
    ],
    "answer": 0,
    "explain": "'NC' (Non-Commercial): Người dùng chỉ được phép sử dụng tác phẩm cho các mục đích phi thương mại (học tập, nghiên cứu), cấm kinh doanh kiếm lời."
  },
  {
    "id": "b11-q08",
    "q": "Khi làm bài thuyết trình, học sinh sử dụng một bức ảnh tìm thấy trên Google. Hành động nào thể hiện sự tôn trọng bản quyền?",
    "options": [
      "Ghi rõ nguồn ảnh hoặc liên kết trang web gốc nơi lấy bức ảnh ở góc dưới bức ảnh.",
      "Tải ảnh về rồi dùng phần mềm xóa mờ dòng chữ bản quyền của tác giả in chìm trên ảnh.",
      "Tự nhận bức ảnh đó là do chính mình tự tay vẽ ra để nhận điểm cao của thầy cô giáo.",
      "Đăng ảnh lên trang cá nhân và tuyên bố toàn bộ quyền sở hữu trí tuệ thuộc về mình."
    ],
    "answer": 0,
    "explain": "Ghi chú nguồn trích dẫn rõ ràng thể hiện đạo đức học thuật và sự tôn trọng quyền tác giả."
  },
  {
    "id": "b11-q09",
    "q": "Khái niệm 'Bắt nạt trên mạng' (Cyberbullying) bao gồm hành vi nào dưới đây?",
    "options": [
      "Sử dụng mạng xã hội để nhục mạ, đe dọa, cô lập hoặc lan truyền tin giả nhằm bôi nhọ người khác.",
      "Tranh luận học thuật một cách văn minh, lịch sự và tôn trọng quan điểm của bạn học.",
      "Gửi tin nhắn chúc mừng bạn đạt giải cao trong kì thi học sinh giỏi cấp tỉnh.",
      "Tạo một bài viết chia sẻ phương pháp học tập hiệu quả môn Tin học cho các bạn."
    ],
    "answer": 0,
    "explain": "Cyberbullying là hành vi dùng công nghệ số để đe dọa, làm nhục, quấy rối, cô lập nạn nhân, để lại tổn thương tâm lí nặng nề."
  },
  {
    "id": "b11-q09b",
    "q": "Vấn đề bản quyền đối với các tác phẩm (văn bản, tranh vẽ) do Trí tuệ nhân tạo (AI) tạo ra hiện nay được quy định theo xu hướng nào?",
    "options": [
      "Chỉ con người mới được công nhận là tác giả hợp pháp; người dùng cần minh bạch việc có sử dụng AI hỗ trợ.",
      "Phần mềm AI tự động được cấp quyền công dân và hưởng toàn bộ tiền tác quyền tác phẩm.",
      "Toàn bộ các tác phẩm do AI tạo ra đều bị cấm lưu hành vĩnh viễn trên toàn thế giới.",
      "Bắt buộc người dùng phải nộp phạt cho chính phủ nếu sử dụng AI để vẽ một bức tranh."
    ],
    "answer": 0,
    "explain": "Pháp luật quốc tế và Việt Nam quy định quyền tác giả gắn liền với sự sáng tạo của con người. Sử dụng AI cần minh bạch công khai, tránh gian lận học thuật."
  },
  {
    "id": "b11-q10",
    "q": "Khi một học sinh sao chép nguyên văn bài làm văn của bạn khác trên mạng rồi dán vào bài thi của mình, hành vi này được gọi là gì?",
    "options": [
      "Đạo văn (Plagiarism - hành vi gian lận học thuật vi phạm đạo đức nghiêm trọng).",
      "Sáng tạo nghệ thuật đột phá theo phong cách hậu hiện đại của công dân số.",
      "Ứng dụng chuyển đổi số xuất sắc trong việc hoàn thành nghĩa vụ học tập.",
      "Thực hành chia sẻ tài nguyên giáo dục mở theo chuẩn quốc tế Creative Commons."
    ],
    "answer": 0,
    "explain": "Đạo văn (Plagiarism) là hành vi ăn cắp ý tưởng, câu chữ của người khác và nhận là của mình, vi phạm nghiêm trọng tính liêm chính học thuật."
  },
  {
    "id": "b11-q11",
    "q": "Một bài hát dân ca truyền thống của người Tày (như điệu hát Then) thuộc quyền sở hữu của ai?",
    "options": [
      "Thuộc về di sản văn hóa công cộng của cộng đồng dân tộc (Public Domain), ai cũng có quyền gìn giữ và biểu diễn.",
      "Thuộc về quyền sở hữu độc quyền của một tập đoàn công nghệ nước ngoài mua bản quyền.",
      "Bị cấm lưu hành trên không gian mạng vì không có mã vạch số hóa bản quyền.",
      "Thuộc về quyền sở hữu riêng của cá nhân người đầu tiên tải bài hát đó lên mạng xã hội."
    ],
    "answer": 0,
    "explain": "Tác phẩm văn hóa dân gian truyền thống thuộc về cộng đồng (phạm vi công cộng), mọi người đều có quyền kế thừa, bảo tồn và phát huy."
  },
  {
    "id": "b11-q12",
    "q": "Hành vi sử dụng phần mềm 'lậu' (phần mềm bẻ khóa không trả phí bản quyền) gây ra hậu quả xấu nào?",
    "options": [
      "Máy tính dễ bị nhiễm mã độc ẩn giấu trong tệp bẻ khóa, vi phạm pháp luật và làm tổn hại ngành phần mềm.",
      "Giúp nền kinh tế quốc gia phát triển vượt bậc mà không cần đầu tư nghiên cứu khoa học.",
      "Làm cho phần mềm đó hoạt động mượt mà và không bao giờ bị lỗi phần mềm trong quá trình dùng.",
      "Được các tập đoàn công nghệ lớn tặng thêm tiền thưởng vì đã giúp quảng bá ứng dụng."
    ],
    "answer": 0,
    "explain": "Dùng phần mềm lậu vi phạm Luật Sở hữu trí tuệ, tệp crack thường chứa trojan độc hại và làm nản lòng các nhà phát triển phần mềm chân chính."
  },
  {
    "id": "b11-q13",
    "q": "Để thể hiện trách nhiệm của một 'Công dân số' chân chính, khi thấy một tin đồn thất thiệt chưa kiểm chứng trên mạng, em nên làm gì?",
    "options": [
      "Không chia sẻ (share), không bấm like; kiểm chứng qua nguồn tin chính thống và báo cáo bài viết xấu độc.",
      "Lập tức chia sẻ ngay về trang cá nhân của mình kèm dòng chữ 'Mọi người cẩn thận nhé'.",
      "Thêm bớt các chi tiết giật gân li kì vào tin đồn rồi gửi vào tất cả các nhóm chat bạn bè.",
      "Kêu gọi mọi người cùng nhau bình luận chửi bới người bị đồn đại trong bài viết."
    ],
    "answer": 0,
    "explain": "Quy tắc 'Dừng lại - Kiểm chứng - Báo cáo': Không tiếp tay phát tán tin giả, chỉ chia sẻ thông tin từ cơ quan báo chí chính thống."
  },
  {
    "id": "b11-q14",
    "q": "Thời hạn bảo hộ quyền tác giả đối với tác phẩm văn học, nghệ thuật tại Việt Nam (theo Luật SHTT) thông thường kéo dài bao lâu?",
    "options": [
      "Suốt cuộc đời tác giả và thêm 50 năm tiếp theo sau năm tác giả qua đời.",
      "Chỉ bảo hộ trong vòng đúng 5 năm kể từ ngày tác phẩm được xuất bản lần đầu.",
      "Bảo hộ vô thời hạn vĩnh viễn không bao giờ kết thúc cho các thế hệ con cháu.",
      "Hết hạn bảo hộ ngay tại thời điểm tác phẩm được đưa lên mạng Internet."
    ],
    "answer": 0,
    "explain": "Theo Luật Sở hữu trí tuệ Việt Nam, quyền tài sản đối với tác phẩm văn học, nghệ thuật được bảo hộ suốt đời tác giả và 50 năm sau năm tác giả chết."
  },
  {
    "id": "b11-q15",
    "q": "Khái niệm 'Dấu chân kĩ thuật số' (Digital Footprint) cảnh báo điều gì cho mỗi học sinh khi dùng Internet?",
    "options": [
      "Mọi phát ngôn, hình ảnh, tương tác trên mạng đều có thể được ghi lại lâu dài và ảnh hưởng đến tương lai của bản thân.",
      "Kích thước bàn chân của người dùng sẽ tự động được đo lường khi đi bộ mang theo điện thoại.",
      "Dấu vân tay của người dùng sẽ in hằn vĩnh viễn trên mặt kính cảm ứng của điện thoại.",
      "Số bước chân đi bộ trong ngày của học sinh được lưu trên ứng dụng đếm bước đi."
    ],
    "answer": 0,
    "explain": "Digital Footprint là dấu vết dữ liệu để lại trên mạng; những phát ngôn thiếu suy nghĩ thời trẻ có thể ảnh hưởng đến cơ hội xin học bổng, việc làm sau này."
  }
];
