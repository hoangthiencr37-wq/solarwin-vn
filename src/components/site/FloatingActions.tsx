import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://zalo.me/0868888826"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="w-14 h-14 rounded-full bg-[#0068ff] grid place-items-center text-white shadow-elevated hover:scale-110 transition-transform"
      >
        <span className="font-bold text-sm">Zalo</span>
      </a>
      <a
        href="https://m.me/solarwin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Messenger"
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
  );
}
