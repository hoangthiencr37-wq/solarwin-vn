import { useState } from "react";
import { Phone, X } from "lucide-react";
import zaloIcon from "@/assets/real/zalo.png";
import facebookLogo from "@/assets/real/facebook_logo.png";
import zaloQr from "@/assets/real/zalo_qr.png";

export function FloatingActions() {
  const [showZaloModal, setShowZaloModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        {/* Zalo Button */}
        <button
          onClick={() => setShowZaloModal(true)}
          aria-label="Nhắn tin Zalo"
          className="w-14 h-14 rounded-full bg-white shadow-elevated hover:scale-110 transition-transform flex items-center justify-center p-0.5 border border-border/40 cursor-pointer"
        >
          <img src={zaloIcon} alt="Zalo" className="w-full h-full object-contain" />
        </button>

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/DienmattroiSolarwin.vn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Solar Win"
          className="w-14 h-14 rounded-full bg-white shadow-elevated hover:scale-110 transition-transform flex items-center justify-center p-2.5 border border-border/40"
        >
          <img src={facebookLogo} alt="Facebook" className="w-full h-full object-contain" />
        </a>

        {/* Phone Call Button */}
        <a
          href="tel:0868888826"
          aria-label="Gọi ngay"
          className="w-14 h-14 rounded-full bg-primary grid place-items-center text-primary-foreground shadow-glow animate-float-pulse"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Zalo QR Modal */}
      {showZaloModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowZaloModal(false)}
        >
          <div
            className="bg-[#18181b] border border-white/10 rounded-3xl p-6 md:p-8 max-w-[340px] w-full relative flex flex-col items-center justify-center shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowZaloModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Title */}
            <h3 className="text-white text-lg font-bold text-center">
              Kết nối Zalo Solar Win
            </h3>
            
            {/* Description */}
            <p className="mt-2 text-xs text-white/60 text-center leading-relaxed">
              Quét mã QR bằng ứng dụng Zalo để chat trực tiếp
            </p>

            {/* QR Code */}
            <div className="mt-5 w-full aspect-square bg-white rounded-2xl p-4 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src={zaloQr}
                alt="Zalo QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
