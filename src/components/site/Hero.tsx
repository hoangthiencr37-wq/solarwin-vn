import heroImg from "@/assets/hero-solar.jpg";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Hệ thống điện mặt trời Solar Win trên mái nhà hiện đại"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-solar/30 blur-3xl animate-spin-slow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-solar" />
            Năng lượng sạch · Tiết kiệm bền vững
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
            Tiết Kiệm Đến{" "}
            <span className="text-gradient-sun">90% Tiền Điện</span>{" "}
            Với Giải Pháp Điện Mặt Trời{" "}
            <span className="text-solar">Solar Win</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl">
            Tư vấn – thiết kế – thi công trọn gói hệ thống điện năng lượng mặt trời cho hộ gia đình và doanh nghiệp tại Nghệ An và các tỉnh lân cận. Thiết bị chính hãng, bảo hành dài hạn.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-gradient-sun text-charcoal font-bold shadow-solar hover:scale-105 transition-transform"
            >
              Nhận Báo Giá Miễn Phí
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:0868888826"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" /> Liên Hệ Ngay
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
            {[
              { k: "500+", v: "Công trình" },
              { k: "12MW+", v: "Tổng công suất" },
              { k: "10 năm", v: "Bảo hành" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl sm:text-3xl font-bold text-solar">{s.k}</div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs animate-bounce">
        ↓ Cuộn xuống khám phá
      </div>
    </section>
  );
}
