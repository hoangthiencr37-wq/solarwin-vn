import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import zaloQr from "@/assets/real/zalo-qr.png.asset.json";

export function FloatingActions() {
  const [showQr, setShowQr] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setShowQr(true)}
          aria-label="Hiển thị QR Zalo"
          className="w-14 h-14 rounded-full bg-[#0068ff] grid place-items-center text-white shadow-elevated hover:scale-110 transition-transform"
        >
          <span className="font-bold text-sm">Zalo</span>
        </button>
        <a
          href="https://www.facebook.com/DienmattroiSolarwin.vn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Solar Win"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00B2FF] to-[#006AFF] grid place-items-center text-white shadow-elevated hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:0868888826"
          aria-label="Gọi ngay"
          className="w-14 h-14 rounded-full bg-primary grid place-items-center text-primary-foreground shadow-glow animate-float-pulse"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {showQr && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm grid place-items-center p-4 animate-in fade-in"
          onClick={() => setShowQr(false)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-elevated p-6 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowQr(false)}
              aria-label="Đóng"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-muted hover:bg-muted/70 grid place-items-center"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold mb-1">Kết nối Zalo Solar Win</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Quét mã QR bằng ứng dụng Zalo để chat trực tiếp
            </p>
            <img
              src={zaloQr.url}
              alt="Mã QR Zalo Solar Win"
              className="w-full h-auto rounded-lg border border-border"
            />
          </div>
        </div>
      )}
    </>
  );
}
