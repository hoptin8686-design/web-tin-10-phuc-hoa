import Link from "next/link";

export default function NotFound() {
  return (
    <main className="playground flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl">🔍🌌</span>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-star">404</h1>
      <p className="mt-2 text-lg font-bold text-coral">Không tìm thấy trang yêu cầu</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-star-soft">
        Bài học hoặc đường dẫn này chưa sẵn sàng hoặc đã được thay đổi. Thầy cô và các em vui lòng quay lại trang chủ.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
      >
        ← Quay về Trang chủ Tin 10
      </Link>
    </main>
  );
}
