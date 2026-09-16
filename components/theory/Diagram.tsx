export default function Diagram({ name }: { name: string }) {
  if (name === "data-process") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-sea/30 bg-[#07131b] p-6">
        <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-star">
          <defs>
            <linearGradient id="grad-sea" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D7C86" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
            <linearGradient id="grad-coral" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2683C" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
            <linearGradient id="grad-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E9F6E" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Khối 1: Thu nhận dữ liệu */}
          <g filter="url(#glow)">
            <rect x="20" y="50" width="190" height="110" rx="16" fill="#102631" stroke="#0D7C86" strokeWidth="2" />
            <circle cx="115" cy="85" r="22" fill="url(#grad-sea)" />
            <text x="115" y="92" textAnchor="middle" fill="#fff" fontSize="20">📥</text>
            <text x="115" y="125" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="15">Tiếp nhận dữ liệu</text>
            <text x="115" y="145" textAnchor="middle" fill="#94B3BC" fontSize="12">Bàn phím, chuột, camera...</text>
          </g>

          {/* Mũi tên 1 -> 2 */}
          <path d="M 215 105 L 275 105" stroke="#5EEAD4" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="280,105 270,99 270,111" fill="#5EEAD4" />

          {/* Khối 2: Xử lý dữ liệu */}
          <g filter="url(#glow)">
            <rect x="285" y="40" width="190" height="130" rx="16" fill="#102631" stroke="#F2683C" strokeWidth="2.5" />
            <circle cx="380" cy="78" r="24" fill="url(#grad-coral)" />
            <text x="380" y="86" textAnchor="middle" fill="#fff" fontSize="22">⚙️</text>
            <text x="380" y="122" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="16">Xử lí dữ liệu</text>
            <text x="380" y="142" textAnchor="middle" fill="#FDBA74" fontSize="12">CPU, Bộ nhớ RAM</text>
            <text x="380" y="158" textAnchor="middle" fill="#94B3BC" fontSize="11">Tính toán, so sánh, biến đổi</text>
          </g>

          {/* Mũi tên 2 -> 3 */}
          <path d="M 480 105 L 540 105" stroke="#6EE7B7" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="545,105 535,99 535,111" fill="#6EE7B7" />

          {/* Khối 3: Đưa ra kết quả */}
          <g filter="url(#glow)">
            <rect x="550" y="50" width="190" height="110" rx="16" fill="#102631" stroke="#0E9F6E" strokeWidth="2" />
            <circle cx="645" cy="85" r="22" fill="url(#grad-leaf)" />
            <text x="645" y="92" textAnchor="middle" fill="#fff" fontSize="20">📤</text>
            <text x="645" y="125" textAnchor="middle" fill="#EAF3F5" fontWeight="bold" fontSize="15">Đưa ra kết quả</text>
            <text x="645" y="145" textAnchor="middle" fill="#94B3BC" fontSize="12">Màn hình, máy in, lưu trữ</text>
          </g>

          {/* Vòng lặp lưu trữ */}
          <path d="M 645 165 C 645 205, 380 205, 380 175" fill="none" stroke="#EFA31D" strokeWidth="2" strokeDasharray="4 4" />
          <text x="512" y="200" textAnchor="middle" fill="#FCD34D" fontSize="12">💾 Lưu vào vật mang tin (USB, SSD, Đám mây)</text>
        </svg>
      </div>
    );
  }

  if (name === "storage-units") {
    return (
      <div className="my-4 overflow-x-auto rounded-2xl border border-gold/30 bg-[#07131b] p-5">
        <div className="min-w-[640px] text-center">
          <div className="flex items-center justify-between gap-2 py-3">
            {[
              { unit: "Bit", val: "0 hoặc 1", color: "border-star/20 bg-void-card text-star" },
              { unit: "Byte", val: "= 8 bit", color: "border-sea/40 bg-sea/15 text-sea-deep font-bold" },
              { unit: "KB", val: "= 1024 B", color: "border-sea/30 bg-void-card text-star" },
              { unit: "MB", val: "= 1024 KB", color: "border-coral/40 bg-coral/15 text-coral font-bold" },
              { unit: "GB", val: "= 1024 MB", color: "border-gold/40 bg-gold/15 text-gold-deep font-bold" },
              { unit: "TB", val: "= 1024 GB", color: "border-leaf/40 bg-leaf/15 text-leaf-deep font-bold" },
              { unit: "PB...", val: "= 1024 TB", color: "border-star/20 bg-void-card text-star" },
            ].map((u, i) => (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className={`w-full rounded-xl border p-2.5 shadow-sm ${u.color}`}>
                  <p className="font-mono text-base font-bold">{u.unit}</p>
                  <p className="mt-1 text-xs opacity-80">{u.val}</p>
                </div>
                {i < 6 && (
                  <span className="my-1 font-mono text-[11px] text-gold-deep">× 2¹⁰ (1024) →</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-star-soft">
            💡 Mỗi đơn vị đo dung lượng liền kề gấp nhau <strong>2¹⁰ = 1 024 lần</strong> (không phải 1 000 lần)!
          </p>
        </div>
      </div>
    );
  }

  if (name === "data-vs-info") {
    return (
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-sea/30 bg-void-card p-4 text-center">
          <span className="text-3xl">🌾</span>
          <h4 className="mt-2 font-display font-bold text-sea-deep">1. Dữ liệu (Data)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Hạt thóc thô sơ"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Con số, ký hiệu, văn bản, điểm ảnh thô chưa qua chế biến (Ví dụ: số "39°C").
          </p>
        </div>
        <div className="rounded-xl border border-coral/30 bg-void-card p-4 text-center">
          <span className="text-3xl">🍚</span>
          <h4 className="mt-2 font-display font-bold text-coral">2. Thông tin (Info)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Bát cơm trắng chín"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Ý nghĩa được rút ra sau khi xử lý dữ liệu (Ví dụ: "Bệnh nhân đang bị sốt cao").
          </p>
        </div>
        <div className="rounded-xl border border-gold/30 bg-void-card p-4 text-center">
          <span className="text-3xl">🧠</span>
          <h4 className="mt-2 font-display font-bold text-gold-deep">3. Tri thức (Knowledge)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">"Bí quyết nấu ăn ngon"</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Hiểu biết, kinh nghiệm để ra quyết định (Ví dụ: "Cần hạ sốt ngay và uống nhiều nước").
          </p>
        </div>
      </div>
    );
  }

  return null;
}
