import { Phone, MessageCircle } from "lucide-react";
import zaloIcon from "@/assets/real/zalo.png";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://zalo.me/0868888826"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn tin Zalo"
          className="w-14 h-14 rounded-full bg-white shadow-elevated hover:scale-110 transition-transform flex items-center justify-center p-2.5 border border-border/40"
        >
          <img src={zaloIcon} alt="Zalo" className="w-full h-full object-contain" />
        </a>
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
    </>
  );
}
