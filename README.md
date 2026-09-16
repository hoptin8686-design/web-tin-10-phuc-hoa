# Chinh phục Tin học 10 — Trường THPT Phục Hòa

Trang web học tập, ôn tập và số hóa chương trình môn **Tin học 10 (Bộ sách Kết nối tri thức với cuộc sống)** dành riêng cho học sinh và giáo viên **Trường THPT Phục Hòa, Tỉnh Cao Bằng**.

---

## 🌟 Tính Năng Nổi Bật

1. **Nhận diện trường THPT Phục Hòa:**
   - Huy hiệu `Trường THPT Phục Hòa - Tỉnh Cao Bằng` trang trọng.
   - Phụ đề chuyên môn: `Tổ Tự nhiên — Năm học 2026-2027`.
   - Giao diện **Dark Mode không gian vũ trụ** cao cấp (`#0A1720`), phối màu rực rỡ chuẩn nhận diện: Xanh biển ngọc Sea (`#0D7C86`), Cam san hô Coral (`#F2683C`), Xanh lá Leaf (`#0E9F6E`), Vàng kim Gold (`#EFA31D`).
   - Phông chữ tiếng Việt chuẩn hóa: `Baloo 2` và `Inter`.

2. **Cấu trúc 34 Bài học SGK Toàn diện:**
   - Phân chia thành 6 Chủ đề chuẩn của Bộ GD&ĐT và KHDH Trường THPT Phục Hòa.
   - Hỗ trợ đầy đủ định hướng Tin học ứng dụng (ICT) và Khoa học máy tính (CS).

3. **5 Phân hệ Học tập Chuyên sâu cho từng bài học:**
   - 📖 **Đọc SGK số hóa HTML:** Bản sách điện tử nguyên văn, tích hợp thanh mục lục trượt tự động (Sticky TOC) và nút tăng/giảm cỡ chữ (+ / -).
   - 💡 **Lý thuyết Tương tác Sinh động:** Tuân thủ quy tắc 5 điểm Sư phạm (Dẫn nhập đời sống, Ẩn dụ thực tế, Khối thẻ màu, Hộp ghi nhớ cốt lõi & Cảnh báo bẫy hay gặp, Sơ đồ minh họa vector SVG và Câu hỏi check nhanh).
   - 🎯 **Trắc nghiệm 4 lựa chọn:** Tự động xáo trộn câu hỏi và phương án, nút bấm A/B/C/D to tối ưu di động, cân bằng độ dài phương án và chấm điểm kèm giải thích chi tiết.
   - ⚖️ **Tư duy Đúng / Sai:** Đánh giá phản biện 4 mệnh đề a, b, c, d độc lập từ ngữ cảnh thực tế đời sống.
   - 📝 **Tự luận & Thực hành:** Có khung gõ nháp/code mô phỏng và nút đối chiếu đáp án chi tiết.

4. **Kiểm tra Định kì (Giữa kì & Cuối kì):**
   - Đề thi bấm giờ 45 phút, chấm điểm thang 10 tự động, thay thế cho mục đề thi tốt nghiệp THPT (phù hợp với đối tượng học sinh khối 10).

5. **Lưu trữ Tiến độ & Vinh danh Học tập:**
   - Tự động lưu tiến độ vào `localStorage` máy học sinh.
   - Thưởng sao vàng ⭐ khi đạt từ 80% trở lên.
   - Phân tích câu sai và tự động đưa ra danh mục "Chỗ em cần ôn lại".

---

## 🚀 Khởi Chạy Trên Máy Tính (Local Server)

```bash
# Cài đặt thư viện (nếu chưa có)
npm install

# Khởi chạy môi trường phát triển
npm run dev
```

Mở trình duyệt web và truy cập: **`http://localhost:3000`**

---

## ☁️ Hướng Dẫn Đưa Lên GitHub và Triển Khai Vercel

### Bước 1: Đẩy mã nguồn lên GitHub
```bash
git init
git add .
git commit -m "Khoi tao web Chinh phuc Tin hoc 10 THPT Phuc Hoa"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-thay-co>/web-tin-10-phuc-hoa.git
git push -u origin main
```

### Bước 2: Triển khai miễn phí trên Vercel
1. Đăng nhập [Vercel.com](https://vercel.com) bằng tài khoản GitHub.
2. Bấm **Add New...** -> **Project**.
3. Chọn kho lưu trữ `web-tin-10-phuc-hoa` và bấm **Deploy**.
4. Nhận đường link chính thức (dạng `https://web-tin-10-phuc-hoa.vercel.app`) để chia sẻ cho học sinh toàn trường!
