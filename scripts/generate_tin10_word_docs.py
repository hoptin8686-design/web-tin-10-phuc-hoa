import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_cell_shading(cell, color_hex="F2F4F7"):
    shading_xml = f'<w:shd {nsdecls("w")} w:fill="{color_hex}"/>'
    cell._tc.get_or_add_tcPr().append(parse_xml(shading_xml))

def set_table_borders(table, color="B0B0B0", sz="4", val="single"):
    tblPr = table._tbl.tblPr
    borders_xml = f'''
    <w:tblBorders {nsdecls("w")}>
        <w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
        <w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
        <w:left w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
        <w:right w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
        <w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
        <w:insideV w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
    </w:tblBorders>
    '''
    tblPr.append(parse_xml(borders_xml))

def set_doc_base_style(doc):
    for section in doc.sections:
        section.top_margin = Inches(0.79)     # 2.0 cm
        section.bottom_margin = Inches(0.79)  # 2.0 cm
        section.left_margin = Inches(0.98)    # 2.5 cm
        section.right_margin = Inches(0.59)   # 1.5 cm

    style = doc.styles['Normal']
    font = style.font
    font.name = 'Times New Roman'
    font.size = Pt(12)
    font.color.rgb = RGBColor(0, 0, 0)
    style.paragraph_format.line_spacing = 1.15
    style.paragraph_format.space_after = Pt(4)
    style.paragraph_format.space_before = Pt(0)

def add_exam_header(doc, title="ĐỀ KIỂM TRA GIỮA HỌC KỲ I", sub="NĂM HỌC 2024 - 2025"):
    table = doc.add_table(rows=1, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    table.columns[0].width = Inches(3.2)
    table.columns[1].width = Inches(3.8)

    # Left box
    c0 = table.cell(0, 0)
    p0 = c0.paragraphs[0]
    p0.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p0.add_run("SỞ GIÁO DỤC VÀ ĐÀO TẠO CAO BẰNG\n")
    r.font.size = Pt(10.5)
    r = p0.add_run("TRƯỜNG THPT PHỤC HÒA\n")
    r.bold = True
    r.font.size = Pt(11)
    r = p0.add_run("TỔ: TỰ NHIÊN — NHÓM TIN HỌC\n")
    r.font.size = Pt(10)
    r = p0.add_run("─────***─────")
    r.font.size = Pt(9)

    # Right box
    c1 = table.cell(0, 1)
    p1 = c1.paragraphs[0]
    p1.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p1.add_run(f"{title}\n")
    r.bold = True
    r.font.size = Pt(12)
    r = p1.add_run(f"{sub}\n")
    r.bold = True
    r.font.size = Pt(11)
    r = p1.add_run("Môn: TIN HỌC 10 — Sách Kết Nối Tri Thức\n")
    r.font.size = Pt(11)
    r.italic = True
    r = p1.add_run("Thời gian làm bài: 45 phút (Không kể giao đề)")
    r.font.size = Pt(10)
    r.italic = True

    # Student info box
    doc.add_paragraph()
    info_table = doc.add_table(rows=2, cols=2)
    info_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    info_table.autofit = False
    info_table.columns[0].width = Inches(4.5)
    info_table.columns[1].width = Inches(2.5)

    r0 = info_table.cell(0, 0).paragraphs[0]
    r0.add_run("Họ và tên học sinh: ................................................................").font.size = Pt(11)

    r1 = info_table.cell(0, 1).paragraphs[0]
    r1.add_run("Lớp: ........................").font.size = Pt(11)

    r2 = info_table.cell(1, 0).paragraphs[0]
    r2.add_run("Số báo danh / Mã HS: ............................................................").font.size = Pt(11)

    r3 = info_table.cell(1, 1).paragraphs[0]
    r_made = r3.add_run("MÃ ĐỀ: 101")
    r_made.bold = True
    r_made.font.size = Pt(12)

    set_table_borders(info_table, color="718096", sz="4", val="dotted")
    for row in info_table.rows:
        for c in row.cells:
            set_cell_margins(c, top=60, bottom=60, left=100, right=100)

    p_div = doc.add_paragraph()
    p_div.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_div.add_run("───────────────────────────────────────────────────")
    r.font.color.rgb = RGBColor(160, 174, 192)

# ==================== DATA DEFINITIONS FOR TIN 10 ====================
QUESTIONS_PART1_TIN10 = [
    {
        "num": 1,
        "q": "Các thiết bị số hiện đại ngày nay có khả năng lưu trữ dữ liệu ở mức độ nào sau đây?",
        "opts": [
            "A. Mức độ khổng lồ nhờ các thiết bị lưu trữ từ tính, thể rắn và điện toán đám mây.",
            "B. Mức độ nhỏ bé chỉ giới hạn trong một vài trang văn bản đơn giản của người dùng.",
            "C. Mức độ trung bình tương đương với dung lượng của một cuốn sổ tay học sinh.",
            "D. Mức độ rất nhỏ do bộ nhớ của các vi xử lý máy tính không cho phép lưu trữ lâu dài."
        ],
        "ans": "A",
        "exp": "Các thiết bị số hiện nay (ổ SSD, thẻ nhớ, đám mây) có khả năng lưu trữ lượng thông tin khổng lồ lên tới Terabyte và Petabyte."
    },
    {
        "num": 2,
        "q": "Phương án nào sau đây nêu đúng số lượng bức ảnh có thể được lưu trữ trong một thẻ nhớ 16 GB, biết rằng mỗi bức ảnh có dung lượng trung bình là 2 MB?",
        "opts": [
            "A. 8192 bức ảnh (tính theo công thức: 16 × 1024 MB / 2 MB = 8192 ảnh).",
            "B. 1024 bức ảnh (tính theo phép chia dung lượng ước lượng thông thường).",
            "C. 1000 bức ảnh (tính theo hệ số thập phân làm tròn chẵn của máy tính).",
            "D. 512 bức ảnh (tính theo dung lượng tối thiểu của các thiết bị số cũ)."
        ],
        "ans": "A",
        "exp": "Đổi 16 GB = 16 × 1024 MB = 16 384 MB. Số ảnh = 16 384 / 2 = 8192 bức ảnh."
    },
    {
        "num": 3,
        "q": "Thiết bị nào sau đây được coi là một thiết bị thông minh trong đời sống hiện nay?",
        "opts": [
            "A. Điện thoại thông minh (Smartphone) có khả năng kết nối mạng và xử lý dữ liệu đa năng.",
            "B. Đồng hồ lịch vạn niên cơ học chỉ hiển thị ngày giờ cố định theo bánh răng.",
            "C. Máy tính bỏ túi học sinh thông thường chỉ thực hiện các phép tính số học đơn giản.",
            "D. Máy giặt cơ học truyền thống chỉ điều khiển bằng các nút vặn hẹn giờ cơ điện."
        ],
        "ans": "A",
        "exp": "Điện thoại thông minh có hệ điều hành, khả năng kết nối mạng, cài ứng dụng và tự động xử lý thông tin đa dạng."
    },
    {
        "num": 4,
        "q": "Sự phát triển vượt bậc của Internet, công cụ tìm kiếm, mạng xã hội và trí tuệ nhân tạo (AI) đã tác động làm thay đổi sâu sắc nhất yếu tố nào sau đây?",
        "opts": [
            "A. Đời sống, phương thức làm việc, học tập và nhận thức của toàn thể loài người.",
            "B. Môi trường tự nhiên và khí hậu toàn cầu của các đại dương trên thế giới.",
            "C. Khối lượng vật chất và quỹ đạo chuyển động của Trái Đất trong hệ Mặt Trời.",
            "D. Thành phần hóa học của bầu khí quyển và cấu trúc địa chất của các lục địa."
        ],
        "ans": "A",
        "exp": "Công nghệ thông tin và AI làm thay đổi căn bản cách thức sinh hoạt, học tập, giao tiếp và phương thức sản xuất của nhân loại."
    },
    {
        "num": 5,
        "q": "Thông tin nào sau đây của máy tính có thể nhận biết được trực tiếp từ bảng cấu hình hệ thống (System Properties)?",
        "opts": [
            "A. Tốc độ xung nhịp của bộ vi xử lý CPU, dung lượng bộ nhớ RAM và tên hệ điều hành.",
            "B. Giá tiền mua máy tính ban đầu và thời hạn bảo hành của cửa hàng phân phối.",
            "C. Năm sản xuất chính xác của từng con ốc vít và vỏ bọc kim loại bên ngoài thân máy.",
            "D. Địa chỉ nhà riêng của người lắp ráp thiết bị tại nhà máy sản xuất linh kiện."
        ],
        "ans": "A",
        "exp": "Cấu hình máy tính hiển thị các thông số kĩ thuật: Vi xử lý CPU, dung lượng RAM, phiên bản hệ điều hành..."
    },
    {
        "num": 6,
        "q": "Trong mạng lưới Internet vạn vật (IoT - Internet of Things), đối tượng nào sau đây có thể được gắn cảm biến để kết nối và truyền dữ liệu qua Internet?",
        "opts": [
            "A. Hầu như mọi đồ vật, thiết bị máy móc, cảm biến đo đạc môi trường và phương tiện giao thông.",
            "B. Chỉ có duy nhất máy tính để bàn truyền thống và các máy chủ lớn đặt trong phòng lạnh.",
            "C. Chỉ có các loài động vật hoang dã sinh sống trong các khu rừng rậm nhiệt đới.",
            "D. Chỉ có các văn bản giấy và tài liệu in ấn được bảo quản trong các thư viện quốc gia."
        ],
        "ans": "A",
        "exp": "IoT cho phép kết nối mọi vật thể (xe cộ, đồ gia dụng, camera, đèn đường, cảm biến nhiệt độ...) vào mạng Internet."
    },
    {
        "num": 7,
        "q": "Phương án nào sau đây nêu đúng ba mô hình dịch vụ cốt lõi của công nghệ Điện toán đám mây (Cloud Computing)?",
        "opts": [
            "A. Cơ sở hạ tầng (IaaS), Nền tảng (PaaS) và Phần mềm như một dịch vụ (SaaS).",
            "B. Bộ nhớ RAM, ổ đĩa cứng thể rắn SSD và nguồn điện dự phòng công suất cao.",
            "C. Dây cáp mạng cáp quang, bộ chuyển mạch Switch và thiết bị phát sóng vô tuyến Wi-Fi.",
            "D. Màn hình hiển thị, bàn phím cơ quang học và chuột máy tính cảm ứng không dây."
        ],
        "ans": "A",
        "exp": "Ba mô hình chuẩn của Cloud: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service)."
    },
    {
        "num": 8,
        "q": "Công cụ nào sau đây đóng vai trò kiểm soát, lọc dữ liệu và ngăn chặn các truy cập trái phép để bảo vệ mạng máy tính?",
        "opts": [
            "A. Bức tường lửa (Firewall) bảo vệ mạng bằng phần mềm hoặc thiết bị phần cứng chuyên dụng.",
            "B. Dây cáp mạng đồng xoắn đôi kết nối giữa máy tính cá nhân và cổng cắm trên tường.",
            "C. Phần mềm soạn thảo văn bản dùng để ghi chép các biên bản họp định kì của công ty.",
            "D. Máy in laser trắng đen kết nối qua cổng USB dùng để in tài liệu hợp đồng."
        ],
        "ans": "A",
        "exp": "Tường lửa (Firewall) giám sát và kiểm soát lưu lượng mạng ra/vào dựa trên các quy tắc bảo mật thiết lập sẵn."
    },
    {
        "num": 9,
        "q": "Nguồn học liệu mở (Open Educational Resources - OER) trên Internet là loại tài nguyên học tập có đặc điểm nổi bật nào?",
        "opts": [
            "A. Cung cấp miễn phí hoặc có giấy phép mở, cho phép người dùng tự do truy cập, sử dụng và chia sẻ.",
            "B. Bắt buộc người học phải trả một khoản phí bản quyền rất lớn mới được quyền xem trang bìa.",
            "C. Chỉ cho phép tải về vào các ngày nghỉ lễ và tự động biến mất khỏi máy tính sau 24 giờ.",
            "D. Chỉ dành riêng cho các giáo sư đại học nghiên cứu chứ học sinh phổ thông không được phép truy cập."
        ],
        "ans": "A",
        "exp": "Học liệu mở (OER) được cấp phép mở để công chúng tự do tiếp cận, tái sử dụng và chia sẻ phục vụ mục đích giáo dục phi thương mại."
    },
    {
        "num": 10,
        "q": "Trong các loại mạng máy tính sau đây, mạng nào có phạm vi địa lý và bán kính kết nối lớn nhất?",
        "opts": [
            "A. Mạng toàn cầu Internet kết nối hàng tỉ thiết bị trên toàn thế giới.",
            "B. Mạng diện rộng WAN kết nối giữa các chi nhánh trong một quốc gia.",
            "C. Mạng đô thị MAN kết nối trong phạm vi một thành phố hoặc một tỉnh.",
            "D. Mạng cục bộ LAN kết nối trong phạm vi một phòng học hoặc một tòa nhà."
        ],
        "ans": "A",
        "exp": "Mạng Internet là mạng của các mạng, bao phủ toàn cầu và có phạm vi lớn nhất."
    },
    {
        "num": 11,
        "q": "Để bảo vệ tài khoản cá nhân, một mật khẩu mạnh và an toàn NÊN tránh thành phần nào sau đây?",
        "opts": [
            "A. Các thông tin cá nhân dễ đoán như họ tên, ngày tháng năm sinh hoặc số điện thoại.",
            "B. Sự kết hợp giữa các chữ cái in hoa và chữ cái in thường ngẫu nhiên.",
            "C. Các chữ số từ 0 đến 9 xen kẽ không theo quy luật số thứ tự liên tiếp.",
            "D. Các kí tự đặc biệt an toàn như dấu chấm than (!), dấu thăng (#), dấu phần trăm (%)."
        ],
        "ans": "A",
        "exp": "Mật khẩu mạnh không được chứa thông tin cá nhân dễ đoán (tên, ngày sinh, sđt) và cần có độ dài từ 8 kí tự gồm chữ hoa, thường, số, kí tự đặc biệt."
    },
    {
        "num": 12,
        "q": "Hành động nào sau đây là hành vi hợp pháp và KHÔNG vi phạm quyền tác giả đối với tác phẩm?",
        "opts": [
            "A. Trích dẫn một đoạn văn ngắn từ sách có dẫn rõ tên tác giả, tên tác phẩm và nguồn trích dẫn.",
            "B. Tự ý tải một bức tranh vẽ của họa sĩ trên mạng về in lên áo thun để kinh doanh bán lấy tiền.",
            "C. Sao chép toàn bộ một cuốn sách giáo khoa rồi đem bán bản photocopy lại cho học sinh trong trường.",
            "D. Xóa bỏ tên tác giả thực sự trên một bài hát rồi ghi tên mình vào để dự thi tài năng âm nhạc."
        ],
        "ans": "A",
        "exp": "Theo Luật Sở hữu trí tuệ, việc trích dẫn hợp lý tác phẩm đã công bố mà không làm sai ý tác giả và có nêu rõ nguồn gốc là không vi phạm bản quyền."
    }
]

QUESTIONS_PART2_TIN10 = [
    {
        "num": 1,
        "context": "Trong buổi sinh hoạt Câu lạc bộ Khoa học - Kỹ thuật của Trường THPT Phục Hòa, bạn Lan và các bạn cùng thảo luận về các thiết bị trong đời sống gia đình nhằm phân loại đâu là thiết bị thông minh:",
        "statements": [
            ("a", "Robot hút bụi tự động có cảm biến nhận diện vật cản và tự vẽ bản đồ phòng là một thiết bị thông minh.", True, "Đúng. Robot hút bụi tự hành có cảm biến, vi xử lý và phần mềm tự động điều hướng nên là thiết bị thông minh."),
            ("b", "Ấm đun nước siêu tốc tự ngắt điện khi nước sôi nhờ thanh rơ-le nhiệt lưỡng kim là một thiết bị thông minh.", False, "Sai. Cơ chế tự ngắt của ấm siêu tốc thuần túy là vật lý giãn nở cơ học nhiệt, không có quá trình xử lý thông tin hay vi xử lý số."),
            ("c", "Mọi thiết bị điện tử có khả năng tiếp nhận, xử lý thông tin và tự chủ điều khiển hành vi ở mức độ nhất định đều là thiết bị thông minh.", True, "Đúng. Khả năng tương tác thông tin và hoạt động tự chủ là tiêu chí cốt lõi định nghĩa thiết bị thông minh."),
            ("d", "Một chiếc ô tô đồ chơi trẻ em chỉ cần lắp thêm bộ điều khiển từ xa bằng sóng vô tuyến đơn giản là đã trở thành thiết bị thông minh.", False, "Sai. Đồ chơi điều khiển từ xa đơn giản phụ thuộc 100% vào thao tác của con người, không có thuật toán tự chủ xử lý tình huống.")
        ]
    },
    {
        "num": 2,
        "context": "Hưởng ứng Ngày Chuyển đổi số Quốc gia (10/10), Đoàn trường THPT Phục Hòa tổ chức buổi tọa đàm về chủ đề 'Học sinh thế hệ Gen Z an toàn trên không gian mạng'. Các đoàn viên đưa ra một số nhận định:",
        "statements": [
            ("a", "Học sinh nếu để lộ công khai thông tin cá nhân (CCCD, địa chỉ, số điện thoại, mật khẩu) có thể bị kẻ xấu lợi dụng để lừa đảo hoặc tống tiền.", True, "Đúng. Lộ dữ liệu cá nhân là nguyên nhân hàng đầu dẫn đến các vụ mạo danh lừa đảo viễn thông và đánh cắp tài khoản số."),
            ("b", "Ở bất kì nơi đâu và bất cứ thời điểm nào, người dùng cũng luôn có thể kết nối xem video chất lượng cao mà không bị phụ thuộc vào hạ tầng mạng.", False, "Sai. Việc truy cập Internet phụ thuộc hoàn toàn vào vùng phủ sóng, băng thông cáp quang/4G/5G và tình trạng của máy chủ cung cấp."),
            ("c", "Mỗi tác động của Internet đối với cuộc sống của học sinh luôn tồn tại hai mặt song hành: cơ hội mở rộng tri thức và nguy cơ cám dỗ, rủi ro.", True, "Đúng. Internet mang lại kho học liệu vô tận nhưng cũng tiềm ẩn nguy cơ nghiện mạng, tin giả, bắt nạt trực tuyến và phần mềm độc hại."),
            ("d", "Khi lướt web, nếu thấy địa chỉ trang web bắt đầu bằng giao thức http:// không có bảo mật SSL thì ta vẫn có thể yên tâm nhập thông tin thẻ ngân hàng.", False, "Sai. http:// không được mã hóa dữ liệu truyền tải, kẻ gian trên cùng đường truyền có thể dễ dàng nghe lén; chỉ nhập dữ liệu nhạy cảm trên giao thức https:// có chứng chỉ hợp lệ.")
        ]
    },
    {
        "num": 3,
        "context": "Nhóm học sinh lớp 10 tham gia dự án tìm hiểu về Luật Sở hữu trí tuệ và Luật Công nghệ thông tin trong môi trường số:",
        "statements": [
            ("a", "Trong môi trường số, quyền tác giả bảo hộ quyền nhân thân và quyền tài sản của tác giả đối với tác phẩm số do mình trực tiếp sáng tạo ra.", True, "Đúng. Tác phẩm số (phần mềm, bài viết, bản nhạc, video, tranh vẽ số) đều được Luật Sở hữu trí tuệ bảo vệ quyền tác giả đầy đủ."),
            ("b", "Luật Sở hữu trí tuệ chỉ bảo vệ các tác phẩm viết tay trên giấy chứ hoàn toàn không bảo hộ các sản phẩm phần mềm máy tính hay tệp tin số.", False, "Sai. Khoản 1 Điều 14 Luật Sở hữu trí tuệ quy định rõ ràng chương trình máy tính, dữ liệu số là một loại hình tác phẩm được bảo hộ quyền tác giả."),
            ("c", "Bản quyền phần mềm nghiêm cấm các hành vi bẻ khóa (crack), sao chép và phân phối trái phép khi chưa được sự cho phép của chủ sở hữu.", True, "Đúng. Việc bẻ khóa hoặc phân phối phần mềm vi phạm quyền độc quyền của tác giả và có thể bị xử lý vi phạm bản quyền theo pháp luật."),
            ("d", "Một người tự dịch nguyên văn một bài báo khoa học nước ngoài sang tiếng Việt rồi đăng lên trang web cá nhân và ghi mình là tác giả duy nhất là hoàn toàn hợp pháp.", False, "Sai. Hành vi dịch tác phẩm mà không xin phép và tự nhận mình là tác giả đã xâm phạm nghiêm trọng quyền đứng tên và quyền làm tác phẩm phái sinh theo Điều 28 Luật SHTT.")
        ]
    },
    {
        "num": 4,
        "context": "Văn hóa ứng xử trên không gian mạng là thước đo nhân cách của công dân số. Thầy giáo đưa ra các tình huống thực tế để học sinh cùng nhận định:",
        "statements": [
            ("a", "Hành vi đăng tải, lan truyền thông tin sai sự thật, xúc phạm danh dự nhân phẩm của người khác trên mạng xã hội là hành vi vi phạm pháp luật.", True, "Đúng. Hành vi này vi phạm Luật An ninh mạng và Nghị định 15/2020/NĐ-CP, có thể bị xử phạt hành chính hoặc xử lý hình sự."),
            ("b", "Sử dụng thiết bị số và Internet quá nhiều vào ban đêm có thể gây hại cho thị lực, rối loạn giấc ngủ và giảm sút kết quả học tập.", True, "Đúng. Ánh sáng xanh và sự thiếu ngủ do lạm dụng thiết bị số ảnh hưởng tiêu cực trực tiếp đến sức khỏe thể chất và tinh thần học sinh."),
            ("c", "Khi công nghệ ngày càng hiện đại và thông minh hơn, mọi rủi ro về lừa đảo và phần mềm độc hại sẽ tự động biến mất mà người dùng không cần cảnh giác.", False, "Sai. Công nghệ càng phát triển thì các thủ đoạn lừa đảo và phần mềm độc hại (mã độc AI, deepfake) càng tinh vi hơn, đòi hỏi con người luôn nâng cao nhận thức bảo mật."),
            ("d", "Nhấp chuột vào một liên kết lạ chứa mã độc trong email có thể khiến thiết bị bị hacker chiếm quyền kiểm soát từ xa và đánh cắp toàn bộ mật khẩu.", True, "Đúng. Đây là kĩ thuật tấn công phi kĩ thuật (phishing) và phát tán mã độc gián điệp (Trojan/Spyware) rất phổ biến hiện nay.")
        ]
    }
]

QUESTIONS_PART3_TIN10 = [
    {
        "num": 1,
        "q": "Câu 1 (1,0 điểm). Bạn An mượn một cuốn sách tham khảo Tin học của bạn cùng lớp rồi đem đi photocopy một bản để làm tài liệu học tập cá nhân. Theo em, hành động photocopy đó của An có vi phạm quyền tác giả hay không? Hãy giải thích rõ căn cứ pháp lý.",
        "guide": [
            ("Kết luận", "Hành động photocopy 01 bản của bạn An KHÔNG vi phạm quyền tác giả.", "0.25 điểm"),
            ("Căn cứ pháp lý", "Căn cứ theo Điều 25 Luật Sở hữu trí tuệ Việt Nam, việc tự sao chép 01 bản tác phẩm đã công bố nhằm mục đích nghiên cứu, học tập cá nhân thuộc trường hợp giới hạn quyền tác giả (không phải xin phép và không phải trả tiền thù lao).", "0.25 điểm"),
            ("Mục đích sử dụng", "Do An chỉ sao chép 01 bản để tự học, hoàn toàn không nhằm mục đích kinh doanh thương mại và không làm phương hại đến quyền lợi chính đáng của tác giả.", "0.25 điểm"),
            ("Mở rộng liên hệ", "Nếu An photocopy nhiều bản để bán lại cho các bạn khác nhằm kiếm tiền thì hành vi đó sẽ vi phạm bản quyền và bị xử phạt theo quy định của pháp luật.", "0.25 điểm")
        ]
    },
    {
        "num": 2,
        "q": "Câu 2 (1,0 điểm). Nếu một số thông tin cá nhân quan trọng của em (như: họ và tên, số CCCD, địa chỉ nhà riêng, email và số điện thoại) bị kẻ xấu thu thập được trên mạng, em và gia đình có thể phải đối mặt với những nguy cơ gì? Nêu ít nhất 3 biện pháp phòng tránh.",
        "guide": [
            ("Các nguy cơ gặp phải", "- Bị nhận liên tục các cuộc gọi, tin nhắn rác, lừa đảo trúng thưởng.\n- Kẻ xấu giả mạo công an, viện kiểm sát, ngân hàng để gọi điện đe dọa, tống tiền.\n- Bị lợi dụng thông tin CCCD mở tài khoản ảo hoặc vay nợ tín dụng đen trái phép.\n- Bị xâm nhập, chiếm đoạt các tài khoản mạng xã hội (Facebook, Zalo) để lừa vay tiền bạn bè.", "0.5 điểm"),
            ("Ba biện pháp phòng tránh", "1. Không chia sẻ công khai số CCCD, số điện thoại, địa chỉ nhà trên mạng xã hội.\n2. Bật xác thực 2 bước (2FA) cho toàn bộ tài khoản email, mạng xã hội.\n3. Đặt mật khẩu mạnh (≥8 kí tự gồm hoa, thường, số, kí tự đặc biệt); không nhấp vào đường link lạ.", "0.5 điểm")
        ]
    },
    {
        "num": 3,
        "q": "Câu 3 (1,0 điểm). Em hãy nêu tên viết tắt của bốn đơn vị đo dung lượng lưu trữ dữ liệu thông dụng trong khoa học máy tính theo thứ tự tăng dần từ bé đến lớn. Giữa hai đơn vị đo liền kề nhau có mối quan hệ tỉ lệ quy đổi là bao nhiêu?",
        "guide": [
            ("Tên 4 đơn vị tăng dần", "Bốn đơn vị đo theo thứ tự tăng dần:\n1. KB (Kilobyte)\n2. MB (Megabyte)\n3. GB (Gigabyte)\n4. TB (Terabyte)", "0.5 điểm"),
            ("Mối quan hệ quy đổi", "- Trong khoa học máy tính, hệ đo lường dữ liệu sử dụng lũy thừa của 2. Đơn vị đứng sau gấp đúng 1024 (tức 2^10) lần đơn vị đo đứng liền trước nó.\n- Cụ thể: 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.", "0.5 điểm")
        ]
    }
]

# ==================== BUILD EXAM DOCX ====================
def build_exam_document_tin10(filepath, include_answers=False):
    doc = docx.Document()
    set_doc_base_style(doc)

    title_text = "ĐỀ KIỂM TRA GIỮA HỌC KỲ I" if not include_answers else "ĐỀ KIỂM TRA & ĐÁP ÁN GIỮA HỌC KỲ I"
    add_exam_header(doc, title=title_text)

    # ------------------ PHẦN I ------------------
    p = doc.add_paragraph()
    r = p.add_run("PHẦN I. CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN\n")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)
    r_sub = p.add_run("(Gồm 12 câu, mỗi câu 0,25 điểm — Tổng cộng: 3,0 điểm. Thí sinh trả lời từ Câu 1 đến Câu 12. Mỗi câu hỏi chỉ chọn một phương án đúng nhất).")
    r_sub.italic = True
    r_sub.font.size = Pt(11)

    for q in QUESTIONS_PART1_TIN10:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(4)
        p_q.paragraph_format.space_after = Pt(2)
        r_num = p_q.add_run(f"Câu {q['num']}: ")
        r_num.bold = True
        p_q.add_run(q['q'])

        for opt in q['opts']:
            p_opt = doc.add_paragraph()
            p_opt.paragraph_format.left_indent = Inches(0.25)
            p_opt.paragraph_format.space_before = Pt(1)
            p_opt.paragraph_format.space_after = Pt(1)
            p_opt.add_run(opt)

        if include_answers:
            p_ans = doc.add_paragraph()
            p_ans.paragraph_format.left_indent = Inches(0.25)
            r_ans = p_ans.add_run(f"➜ Đáp án đúng: {q['ans']}. ")
            r_ans.bold = True
            r_ans.font.color.rgb = RGBColor(40, 167, 69)
            p_ans.add_run(f"Giải thích: {q['exp']}").italic = True

    # ------------------ PHẦN II ------------------
    doc.add_paragraph()
    p = doc.add_paragraph()
    r = p.add_run("PHẦN II. CÂU TRẮC NGHIỆM ĐÚNG / SAI\n")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)
    r_sub = p.add_run("(Gồm 04 câu, mỗi câu tối đa 1,0 điểm — Tổng cộng: 4,0 điểm. Thí sinh trả lời từ Câu 1 đến Câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai).\nThang điểm: Đúng 1 ý: 0,10 điểm | Đúng 2 ý: 0,25 điểm | Đúng 3 ý: 0,50 điểm | Đúng 4 ý: 1,00 điểm.")
    r_sub.italic = True
    r_sub.font.size = Pt(10.5)

    for q in QUESTIONS_PART2_TIN10:
        p_c = doc.add_paragraph()
        p_c.paragraph_format.space_before = Pt(6)
        p_c.paragraph_format.space_after = Pt(2)
        r_c = p_c.add_run(f"Câu {q['num']}: ")
        r_c.bold = True
        p_c.add_run(q['context'])

        for opt_label, stmt_text, is_true, explain_text in q['statements']:
            p_st = doc.add_paragraph()
            p_st.paragraph_format.left_indent = Inches(0.25)
            p_st.paragraph_format.space_before = Pt(2)
            p_st.paragraph_format.space_after = Pt(2)
            r_lbl = p_st.add_run(f"{opt_label}) ")
            r_lbl.bold = True
            p_st.add_run(stmt_text)

            if include_answers:
                p_ans = doc.add_paragraph()
                p_ans.paragraph_format.left_indent = Inches(0.5)
                tag = "ĐÚNG" if is_true else "SAI"
                color = RGBColor(40, 167, 69) if is_true else RGBColor(220, 53, 69)
                r_ans = p_ans.add_run(f"➜ Ý {opt_label}) là {tag}. ")
                r_ans.bold = True
                r_ans.font.color.rgb = color
                p_ans.add_run(f"Giải thích: {explain_text}").italic = True

    # ------------------ PHẦN III ------------------
    doc.add_paragraph()
    p = doc.add_paragraph()
    r = p.add_run("PHẦN III. TỰ LUẬN / CÂU HỎI TRẢ LỜI NGẮN\n")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)
    r_sub = p.add_run("(Gồm 03 câu, mỗi câu 1,0 điểm — Tổng cộng: 3,0 điểm. Thí sinh viết câu trả lời trực tiếp vào giấy làm bài).")
    r_sub.italic = True
    r_sub.font.size = Pt(11)

    for q in QUESTIONS_PART3_TIN10:
        p_es = doc.add_paragraph()
        p_es.paragraph_format.space_before = Pt(6)
        p_es.paragraph_format.space_after = Pt(2)
        r_es = p_es.add_run(q['q'])
        r_es.bold = True

        if not include_answers:
            p_blank = doc.add_paragraph()
            p_blank.paragraph_format.left_indent = Inches(0.25)
            p_blank.paragraph_format.space_after = Pt(8)
            p_blank.add_run("Bài làm:\n..........................................................................................................................................................................\n..........................................................................................................................................................................\n..........................................................................................................................................................................").italic = True
        else:
            p_g_title = doc.add_paragraph()
            p_g_title.paragraph_format.left_indent = Inches(0.25)
            r_gt = p_g_title.add_run("➜ Hướng dẫn chấm & Đáp án chi tiết:")
            r_gt.bold = True
            r_gt.font.color.rgb = RGBColor(40, 167, 69)

            for item_title, item_desc, item_pt in q['guide']:
                p_item = doc.add_paragraph()
                p_item.paragraph_format.left_indent = Inches(0.5)
                p_item.paragraph_format.space_before = Pt(1)
                p_item.paragraph_format.space_after = Pt(2)
                r_it = p_item.add_run(f"• {item_title} ({item_pt}): ")
                r_it.bold = True
                p_item.add_run(item_desc)

    p_end = doc.add_paragraph()
    p_end.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_end.paragraph_format.space_before = Pt(16)
    r_end = p_end.add_run("────────── HẾT ──────────\n(Cán bộ coi thi không giải thích gì thêm)")
    r_end.bold = True
    r_end.font.size = Pt(11)

    doc.save(filepath)
    print(f"Saved: {filepath}")

# ==================== BUILD ANSWER KEY DOCX ====================
def build_answer_key_document_tin10(filepath):
    doc = docx.Document()
    set_doc_base_style(doc)

    add_exam_header(doc, title="HƯỚNG DẪN CHẤM & ĐÁP ÁN ĐỀ THI GIỮA HK1", sub="NĂM HỌC 2024 - 2025")

    # Table Phần I
    p1 = doc.add_paragraph()
    r = p1.add_run("I. ĐÁP ÁN PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN (3,0 điểm — Mỗi câu 0,25đ)")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)

    t1 = doc.add_table(rows=2, cols=12)
    t1.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t1, color="4A5568", sz="4", val="single")

    for i in range(12):
        c_head = t1.cell(0, i)
        c_head.text = f"Câu {i+1}"
        c_head.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_head.paragraphs[0].runs[0].bold = True
        set_cell_shading(c_head, "E2E8F0")
        set_cell_margins(c_head, top=80, bottom=80, left=60, right=60)

        c_val = t1.cell(1, i)
        c_val.text = QUESTIONS_PART1_TIN10[i]['ans']
        c_val.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_val.paragraphs[0].runs[0].bold = True
        c_val.paragraphs[0].runs[0].font.color.rgb = RGBColor(16, 75, 140)
        set_cell_margins(c_val, top=80, bottom=80, left=60, right=60)

    doc.add_paragraph()

    # Table Phần II
    p2 = doc.add_paragraph()
    r = p2.add_run("II. ĐÁP ÁN PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (4,0 điểm — Tối đa 1,0đ/câu)")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)

    p_rule = doc.add_paragraph()
    r_rule = p_rule.add_run("Quy tắc chấm: Đúng 1 ý: 0,1đ | Đúng 2 ý: 0,25đ | Đúng 3 ý: 0,5đ | Đúng 4 ý: 1,0đ.")
    r_rule.italic = True
    r_rule.font.size = Pt(10.5)

    t2 = doc.add_table(rows=5, cols=5)
    t2.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t2, color="4A5568", sz="4", val="single")

    headers_t2 = ["Lệnh hỏi", "Câu 1", "Câu 2", "Câu 3", "Câu 4"]
    for j, h in enumerate(headers_t2):
        c = t2.cell(0, j)
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c.paragraphs[0].runs[0].bold = True
        set_cell_shading(c, "E2E8F0")
        set_cell_margins(c, top=80, bottom=80, left=100, right=100)

    for row_idx, opt_char in enumerate(["a", "b", "c", "d"], start=1):
        c_opt = t2.cell(row_idx, 0)
        c_opt.text = f"Ý {opt_char})"
        c_opt.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_opt.paragraphs[0].runs[0].bold = True
        set_cell_shading(c_opt, "F7FAFC")
        set_cell_margins(c_opt, top=60, bottom=60, left=100, right=100)

        for q_idx in range(4):
            is_true = QUESTIONS_PART2_TIN10[q_idx]['statements'][row_idx - 1][2]
            c = t2.cell(row_idx, q_idx + 1)
            c.text = "Đ" if is_true else "S"
            c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            r_val = c.paragraphs[0].runs[0]
            r_val.bold = True
            r_val.font.color.rgb = RGBColor(40, 167, 69) if is_true else RGBColor(220, 53, 69)
            set_cell_margins(c, top=60, bottom=60, left=100, right=100)

    doc.add_paragraph()

    # Phần III
    p3 = doc.add_paragraph()
    r = p3.add_run("III. ĐÁP ÁN & BIỂU ĐIỂM PHẦN III: TỰ LUẬN (3,0 điểm)")
    r.bold = True
    r.font.size = Pt(12)
    r.font.color.rgb = RGBColor(16, 75, 140)

    for q in QUESTIONS_PART3_TIN10:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(6)
        r_q = p_q.add_run(q['q'])
        r_q.bold = True

        for item_title, item_desc, item_pt in q['guide']:
            p_it = doc.add_paragraph()
            p_it.paragraph_format.left_indent = Inches(0.25)
            r_it = p_it.add_run(f"• {item_title} ({item_pt}):\n")
            r_it.bold = True
            p_it.add_run(item_desc)

    doc.save(filepath)
    print(f"Saved: {filepath}")

# ==================== BUILD MATRIX & SPEC DOCX ====================
def build_matrix_document_tin10(filepath):
    doc = docx.Document()
    set_doc_base_style(doc)

    # Change to Landscape for Matrix
    section = doc.sections[0]
    section.orientation = docx.enum.section.WD_ORIENT.LANDSCAPE
    section.page_width = Inches(11.69)   # A4 Landscape width
    section.page_height = Inches(8.27)   # A4 Landscape height
    section.left_margin = Inches(0.59)
    section.right_margin = Inches(0.59)
    section.top_margin = Inches(0.59)
    section.bottom_margin = Inches(0.59)

    add_exam_header(doc, title="MA TRẬN & BẢNG ĐẶC TẢ ĐỀ KIỂM TRA GIỮA HỌC KỲ I", sub="MÔN: TIN HỌC 10 — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG")

    # SECTION 1: KHUNG MA TRẬN
    p = doc.add_paragraph()
    r = p.add_run("I. KHUNG MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KỲ I (45 PHÚT)")
    r.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(16, 75, 140)

    matrix_rows = [
        # TT, Chủ đề, Nhận biết (TNKQ, ĐS), Thông hiểu (TNKQ, ĐS), Vận dụng (TNKQ, ĐS, TL), VDC (TL), Tổng câu (TNKQ, ĐS, TL), Tổng điểm, Tỉ lệ
        ("1", "Chủ đề 1.1: Dữ liệu, thông tin và lưu trữ (Bài 1, 3, 4, 5, 6)", "1", "0", "1", "0", "0", "0", "1", "0", "2", "0", "1", "1.5", "15%"),
        ("2", "Chủ đề 1.2: Thiết bị thông minh & Tin học trong đời sống (Bài 2, 7)", "1", "2", "2", "1", "0", "1", "0", "0", "3", "4", "0", "2.0", "20%"),
        ("3", "Chủ đề 2.1: Mạng máy tính, Internet, IoT & Điện toán đám mây (Bài 8, 10)", "3", "0", "1", "0", "0", "0", "0", "0", "4", "0", "0", "1.0", "10%"),
        ("4", "Chủ đề 2.2: Dịch vụ mạng, an toàn mạng & phòng chống mã độc (Bài 9, 11)", "1", "2", "1", "1", "0", "1", "0", "1", "2", "4", "1", "2.5", "25%"),
        ("5", "Chủ đề 3.1: Pháp luật trong môi trường số & Bản quyền tác giả (Bài 11, 12)", "1", "2", "0", "1", "0", "1", "0", "1", "1", "4", "1", "2.0", "20%"),
        ("6", "Chủ đề 3.2: Ứng xử trên môi trường số & Trách nhiệm chia sẻ (Bài 9, 11)", "0", "2", "1", "1", "0", "1", "0", "0", "1", "4", "0", "1.0", "10%"),
        ("TỔNG", "Toàn bộ bài kiểm tra (12 bài)", "7", "8", "6", "4", "0", "4", "1", "2", "12", "16", "3", "10.0", "100%")
    ]

    t_mat = doc.add_table(rows=3 + len(matrix_rows), cols=15)
    t_mat.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t_mat, color="4A5568", sz="4", val="single")

    t_mat.cell(0, 0).text = "TT"
    t_mat.cell(0, 1).text = "Chủ đề / Nội dung kiến thức"
    t_mat.cell(0, 2).text = "Mức độ nhận thức"
    t_mat.cell(0, 10).text = "Tổng số câu/ý"
    t_mat.cell(0, 13).text = "Tổng điểm"
    t_mat.cell(0, 14).text = "Tỉ lệ %"

    t_mat.cell(0, 0).merge(t_mat.cell(2, 0))
    t_mat.cell(0, 1).merge(t_mat.cell(2, 1))
    t_mat.cell(0, 2).merge(t_mat.cell(0, 9))
    t_mat.cell(0, 10).merge(t_mat.cell(1, 12))
    t_mat.cell(0, 13).merge(t_mat.cell(2, 13))
    t_mat.cell(0, 14).merge(t_mat.cell(2, 14))

    t_mat.cell(1, 2).text = "Nhận biết"
    t_mat.cell(1, 4).text = "Thông hiểu"
    t_mat.cell(1, 6).text = "Vận dụng"
    t_mat.cell(1, 9).text = "Vận dụng cao"

    t_mat.cell(1, 2).merge(t_mat.cell(1, 3))
    t_mat.cell(1, 4).merge(t_mat.cell(1, 5))
    t_mat.cell(1, 6).merge(t_mat.cell(1, 8))

    sub_headers = ["TNKQ", "Đ/S", "TNKQ", "Đ/S", "TNKQ", "Đ/S", "TL", "TL", "TNKQ", "Đ/S", "TL"]
    for idx, sh in enumerate(sub_headers):
        t_mat.cell(2, 2 + idx).text = sh

    for r_idx in range(3):
        for c in t_mat.rows[r_idx].cells:
            c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
            if len(c.paragraphs[0].runs) > 0:
                c.paragraphs[0].runs[0].bold = True
                c.paragraphs[0].runs[0].font.size = Pt(9.5)
            set_cell_shading(c, "E2E8F0")
            set_cell_margins(c, top=60, bottom=60, left=40, right=40)

    for r_idx, row_data in enumerate(matrix_rows, start=3):
        is_total_row = (r_idx == 3 + len(matrix_rows) - 1)
        for c_idx, val in enumerate(row_data):
            c = t_mat.cell(r_idx, c_idx)
            c.text = val
            p = c.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT if c_idx == 1 else WD_ALIGN_PARAGRAPH.CENTER
            c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
            if len(p.runs) > 0:
                p.runs[0].font.size = Pt(9.5)
                if is_total_row:
                    p.runs[0].bold = True
            if is_total_row:
                set_cell_shading(c, "CBD5E0")
            set_cell_margins(c, top=60, bottom=60, left=40, right=40)

    # Ghi chú ma trận
    p_note = doc.add_paragraph()
    p_note.paragraph_format.space_before = Pt(6)
    r_n = p_note.add_run("* Ghi chú: Phần II (Đúng - Sai) gồm 4 câu, mỗi câu 4 ý = 16 ý. Thang điểm: đúng 1 ý = 0.1đ, 2 ý = 0.25đ, 3 ý = 0.5đ, 4 ý = 1.0đ/câu. Tỉ lệ nhận thức: Nhận biết 40% — Thông hiểu 30% — Vận dụng 30%.")
    r_n.italic = True
    r_n.font.size = Pt(9.5)

    # SECTION 2: BẢNG ĐẶC TẢ
    doc.add_page_break()
    p_dt = doc.add_paragraph()
    r = p_dt.add_run("II. BẢNG ĐẶC TẢ KỸ THUẬT ĐỀ KIỂM TRA GIỮA HỌC KỲ I")
    r.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(16, 75, 140)

    spec_data = [
        ("1", "Dữ liệu, thông tin và lưu trữ (Bài 1, 3, 4, 5, 6)", "Nhận biết – Thông hiểu", "Nêu được sự ưu việt của thiết bị số trong lưu trữ dữ liệu; phân biệt thông tin và dữ liệu; tính toán quy đổi giữa các đơn vị đo dung lượng lưu trữ (B, KB, MB, GB, TB).", "2 TNKQ\n1 TL", "1.50"),
        ("2", "Thiết bị thông minh và Tin học trong đời sống (Bài 2, 7)", "Nhận biết – Thông hiểu – Vận dụng", "Nhận biết thiết bị thông minh; giải thích được ảnh hưởng của Internet, máy tìm kiếm và AI; hiểu thông số cấu hình hệ thống máy tính (CPU, RAM); phản biện và phân biệt các thiết bị thông minh tự động.", "3 TNKQ\n4 ý Đ/S (Câu 1)", "2.00"),
        ("3", "Mạng máy tính, Internet, IoT & Điện toán đám mây (Bài 8, 10)", "Nhận biết – Thông hiểu", "Nêu được đối tượng kết nối vào IoT; nêu 3 mô hình dịch vụ đám mây (IaaS, PaaS, SaaS); nhận biết công cụ bảo vệ mạng Tường lửa (Firewall); hiểu lợi ích và đặc điểm của nguồn học liệu mở OER.", "4 TNKQ", "1.00"),
        ("4", "Dịch vụ mạng, an toàn mạng & phòng chống mã độc (Bài 9, 11)", "Nhận biết – Thông hiểu – Vận dụng", "Phân biệt phạm vi các loại mạng (LAN, WAN, Internet); nắm quy tắc đặt mật khẩu mạnh; nhận biết nguy cơ lộ dữ liệu cá nhân trên mạng xã hội; phân biệt HTTP và HTTPS; đề xuất giải pháp phòng tránh lừa đảo.", "2 TNKQ\n4 ý Đ/S (Câu 2)\n1 TL", "2.50"),
        ("5", "Pháp luật trong môi trường số & Bản quyền tác giả (Bài 11, 12)", "Nhận biết – Thông hiểu – Vận dụng", "Nhận biết các hành động tuân thủ hoặc vi phạm quyền tác giả đối với sản phẩm số; hiểu quyền sở hữu trí tuệ, bản quyền phần mềm; đánh giá tính hợp pháp khi sao chép tài liệu học tập cá nhân theo Luật SHTT.", "1 TNKQ\n4 ý Đ/S (Câu 3)\n1 TL", "2.00"),
        ("6", "Ứng xử trên môi trường số & Trách nhiệm chia sẻ (Bài 9, 11)", "Nhận biết – Thông hiểu – Vận dụng", "Nhận biết các quy định pháp luật về ứng xử trên mạng xã hội (Luật An ninh mạng); hiểu tác hại của việc lạm dụng Internet; nhận biết nguy cơ mã độc gián điệp Phishing/Trojan và trách nhiệm công dân số.", "1 TNKQ\n4 ý Đ/S (Câu 4)", "1.00"),
    ]

    t_spec = doc.add_table(rows=1 + len(spec_data), cols=6)
    t_spec.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t_spec, color="4A5568", sz="4", val="single")

    spec_headers = ["STT", "Nội dung kiến thức", "Mức độ đánh giá", "Yêu cầu cần đạt / Chuẩn kiến thức kĩ năng", "Số câu hỏi", "Điểm số"]
    t_spec.columns[0].width = Inches(0.6)
    t_spec.columns[1].width = Inches(2.2)
    t_spec.columns[2].width = Inches(1.8)
    t_spec.columns[3].width = Inches(4.5)
    t_spec.columns[4].width = Inches(1.2)
    t_spec.columns[5].width = Inches(0.8)

    for c_idx, h in enumerate(spec_headers):
        c = t_spec.cell(0, c_idx)
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
        c.paragraphs[0].runs[0].bold = True
        c.paragraphs[0].runs[0].font.size = Pt(10)
        set_cell_shading(c, "E2E8F0")
        set_cell_margins(c, top=80, bottom=80, left=60, right=60)

    for r_idx, row in enumerate(spec_data, start=1):
        for c_idx, val in enumerate(row):
            c = t_spec.cell(r_idx, c_idx)
            c.text = val
            p = c.paragraphs[0]
            if c_idx in [0, 4, 5]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
            if len(p.runs) > 0:
                p.runs[0].font.size = Pt(9.5)
                if c_idx == 0:
                    p.runs[0].bold = True
            set_cell_margins(c, top=60, bottom=60, left=60, right=60)

    doc.save(filepath)
    print(f"Saved: {filepath}")

# ==================== BUILD COMPREHENSIVE BUNDLE ====================
def build_full_bundle_document_tin10(filepath):
    doc = docx.Document()
    set_doc_base_style(doc)

    add_exam_header(doc, title="HỒ SƠ KIỂM TRA GIỮA HỌC KỲ I", sub="MÔN: TIN HỌC 10 (KNTT) — NĂM HỌC 2024 - 2025")

    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_before = Pt(8)
    r = p_intro.add_run("BỘ HỒ SƠ ĐỀ THI VÀ MA TRẬN ĐẶC TẢ BAO GỒM:\n")
    r.bold = True
    r.font.size = Pt(12)
    p_intro.add_run("1. Ma trận đề kiểm tra 45 phút chuẩn tỉ lệ nhận thức (40% NB - 30% TH - 30% VD).\n2. Bảng đặc tả chi tiết 6 đơn vị kiến thức (Chủ đề 1, 2, 3 SGK Kết nối tri thức).\n3. Đề thi chính thức gồm 3 phần (12 TNKQ + 4 Đ/S + 3 Tự luận).\n4. Đáp án, biểu điểm và hướng dẫn chấm chi tiết.").italic = True

    p_div = doc.add_paragraph()
    p_div.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_div.add_run("═══════════════════════════════════════════════════")
    r.font.color.rgb = RGBColor(16, 75, 140)

    # 1. KHUNG MA TRẬN
    p = doc.add_paragraph()
    r = p.add_run("PHẦN 1. MA TRẬN ĐỀ KIỂM TRA GIỮA HỌC KỲ I")
    r.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(16, 75, 140)

    t_m = doc.add_table(rows=5, cols=6)
    t_m.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t_m, color="4A5568", sz="4", val="single")
    headers_m = ["Chủ đề", "Nhận biết", "Thông hiểu", "Vận dụng", "Tổng số câu", "Tổng điểm"]
    for i, h in enumerate(headers_m):
        c = t_m.cell(0, i)
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c.paragraphs[0].runs[0].bold = True
        set_cell_shading(c, "E2E8F0")
        set_cell_margins(c, top=80, bottom=80, left=80, right=80)

    data_m = [
        ("Chủ đề 1: Máy tính và xã hội tri thức", "2 TN, 2 ý Đ/S, 1 TL", "3 TN, 1 ý Đ/S", "1 ý Đ/S", "5 TN, 1 Đ/S, 1 TL", "3.5 điểm (35%)"),
        ("Chủ đề 2: Mạng máy tính và Internet", "4 TN, 2 ý Đ/S", "2 TN, 1 ý Đ/S", "1 ý Đ/S, 1 TL", "6 TN, 1 Đ/S, 1 TL", "3.5 điểm (35%)"),
        ("Chủ đề 3: Đạo đức, pháp luật & Văn hóa số", "1 TN, 4 ý Đ/S", "1 TN, 2 ý Đ/S", "2 ý Đ/S, 1 TL", "1 TN, 2 Đ/S, 1 TL", "3.0 điểm (30%)"),
        ("TỔNG CỘNG TOÀN ĐỀ (45 phút)", "7 TN, 8 ý Đ/S (4.0đ)", "6 TN, 4 ý Đ/S (3.0đ)", "4 ý Đ/S, 3 TL (3.0đ)", "12 TN, 4 Đ/S, 3 TL", "10.0 điểm (100%)")
    ]
    for r_idx, row in enumerate(data_m, start=1):
        is_tot = (r_idx == 4)
        for c_idx, val in enumerate(row):
            c = t_m.cell(r_idx, c_idx)
            c.text = val
            p = c.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT if c_idx == 0 else WD_ALIGN_PARAGRAPH.CENTER
            if is_tot:
                p.runs[0].bold = True
                set_cell_shading(c, "CBD5E0")
            set_cell_margins(c, top=60, bottom=60, left=60, right=60)

    doc.add_page_break()

    # 2. ĐỀ THI
    p = doc.add_paragraph()
    r = p.add_run("PHẦN 2. ĐỀ KIỂM TRA CHÍNH THỨC GIỮA HỌC KỲ I")
    r.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(16, 75, 140)

    # TNKQ
    p = doc.add_paragraph()
    r = p.add_run("I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (12 câu — 3,0 điểm)")
    r.bold = True
    r.font.size = Pt(11.5)

    for q in QUESTIONS_PART1_TIN10:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(3)
        p_q.paragraph_format.space_after = Pt(1)
        r_num = p_q.add_run(f"Câu {q['num']}: ")
        r_num.bold = True
        p_q.add_run(q['q'])
        for opt in q['opts']:
            p_opt = doc.add_paragraph()
            p_opt.paragraph_format.left_indent = Inches(0.2)
            p_opt.paragraph_format.space_before = Pt(1)
            p_opt.paragraph_format.space_after = Pt(1)
            p_opt.add_run(opt)

    # Đ/S
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    r = p.add_run("II. TRẮC NGHIỆM ĐÚNG / SAI (4 câu — 4,0 điểm)")
    r.bold = True
    r.font.size = Pt(11.5)

    for q in QUESTIONS_PART2_TIN10:
        p_c = doc.add_paragraph()
        p_c.paragraph_format.space_before = Pt(4)
        p_c.paragraph_format.space_after = Pt(1)
        r_c = p_c.add_run(f"Câu {q['num']}: ")
        r_c.bold = True
        p_c.add_run(q['context'])
        for opt_label, stmt_text, _, _ in q['statements']:
            p_st = doc.add_paragraph()
            p_st.paragraph_format.left_indent = Inches(0.2)
            p_st.paragraph_format.space_before = Pt(1)
            p_st.paragraph_format.space_after = Pt(1)
            r_lbl = p_st.add_run(f"{opt_label}) ")
            r_lbl.bold = True
            p_st.add_run(stmt_text)

    # TỰ LUẬN
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    r = p.add_run("III. TỰ LUẬN (3 câu — 3,0 điểm)")
    r.bold = True
    r.font.size = Pt(11.5)

    for q in QUESTIONS_PART3_TIN10:
        p_es = doc.add_paragraph()
        p_es.paragraph_format.space_before = Pt(4)
        p_es.paragraph_format.space_after = Pt(1)
        r_es = p_es.add_run(q['q'])
        r_es.bold = True

    doc.add_page_break()

    # 3. ĐÁP ÁN & HƯỚNG DẪN CHẤM
    p = doc.add_paragraph()
    r = p.add_run("PHẦN 3. ĐÁP ÁN & HƯỚNG DẪN CHẤM CHI TIẾT")
    r.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(16, 75, 140)

    # Đáp án P1 Table
    p1 = doc.add_paragraph()
    r = p1.add_run("1. Đáp án Phần I (Trắc nghiệm nhiều lựa chọn):")
    r.bold = True
    t1 = doc.add_table(rows=2, cols=12)
    t1.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t1, color="4A5568", sz="4", val="single")
    for i in range(12):
        c_head = t1.cell(0, i)
        c_head.text = f"{i+1}"
        c_head.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_head.paragraphs[0].runs[0].bold = True
        set_cell_shading(c_head, "E2E8F0")

        c_val = t1.cell(1, i)
        c_val.text = QUESTIONS_PART1_TIN10[i]['ans']
        c_val.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_val.paragraphs[0].runs[0].bold = True
        c_val.paragraphs[0].runs[0].font.color.rgb = RGBColor(16, 75, 140)

    # Đáp án P2 Table
    p2 = doc.add_paragraph()
    p2.paragraph_format.space_before = Pt(8)
    r = p2.add_run("2. Đáp án Phần II (Trắc nghiệm Đúng/Sai):")
    r.bold = True
    t2 = doc.add_table(rows=5, cols=5)
    t2.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t2, color="4A5568", sz="4", val="single")
    for j, h in enumerate(["Ý", "Câu 1", "Câu 2", "Câu 3", "Câu 4"]):
        c = t2.cell(0, j)
        c.text = h
        c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c.paragraphs[0].runs[0].bold = True
        set_cell_shading(c, "E2E8F0")
    for row_idx, opt_char in enumerate(["a", "b", "c", "d"], start=1):
        c_opt = t2.cell(row_idx, 0)
        c_opt.text = opt_char
        c_opt.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
        c_opt.paragraphs[0].runs[0].bold = True
        for q_idx in range(4):
            is_true = QUESTIONS_PART2_TIN10[q_idx]['statements'][row_idx - 1][2]
            c = t2.cell(row_idx, q_idx + 1)
            c.text = "Đ" if is_true else "S"
            c.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.CENTER
            r_val = c.paragraphs[0].runs[0]
            r_val.bold = True
            r_val.font.color.rgb = RGBColor(40, 167, 69) if is_true else RGBColor(220, 53, 69)

    # Đáp án P3 Hướng dẫn chấm
    p3 = doc.add_paragraph()
    p3.paragraph_format.space_before = Pt(8)
    r = p3.add_run("3. Biểu điểm và Hướng dẫn chấm Phần III (Tự luận):")
    r.bold = True
    for q in QUESTIONS_PART3_TIN10:
        p_q = doc.add_paragraph()
        p_q.paragraph_format.space_before = Pt(4)
        r_q = p_q.add_run(q['q'])
        r_q.bold = True
        for item_title, item_desc, item_pt in q['guide']:
            p_it = doc.add_paragraph()
            p_it.paragraph_format.left_indent = Inches(0.2)
            r_it = p_it.add_run(f"• {item_title} ({item_pt}):\n")
            r_it.bold = True
            p_it.add_run(item_desc)

    doc.save(filepath)
    print(f"Saved: {filepath}")

if __name__ == "__main__":
    out_dir_web = r"d:\Du-an-web\web-tin-10-phuc-hoa\public\download"
    out_dir_root = r"d:\Du-an-web"
    os.makedirs(out_dir_web, exist_ok=True)

    files_to_generate = [
        ("De_Kiem_Tra_Giua_HK1_Tin_10_KNTT.docx", lambda p: build_exam_document_tin10(p, include_answers=False)),
        ("De_Va_Dap_An_Giua_HK1_Tin_10_KNTT.docx", lambda p: build_exam_document_tin10(p, include_answers=True)),
        ("Huong_Dan_Cham_Giua_HK1_Tin_10.docx", lambda p: build_answer_key_document_tin10(p)),
        ("Ma_Tran_Va_Bang_Dac_Ta_Giua_HK1_Tin_10.docx", lambda p: build_matrix_document_tin10(p)),
        ("Tron_Bo_De_Thi_Va_Ma_Tran_Giua_HK1_Tin_10.docx", lambda p: build_full_bundle_document_tin10(p)),
        ("De_Kiem_Tra_Giua_Ky_I_Tin_Hoc_10_Ket_Noi_Tri_Thuc.docx", lambda p: build_full_bundle_document_tin10(p)),
    ]

    for fname, func in files_to_generate:
        path_web = os.path.join(out_dir_web, fname)
        func(path_web)

        path_root = os.path.join(out_dir_root, fname)
        func(path_root)
