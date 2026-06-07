import { Home, Factory, Battery, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Điện mặt trời hộ gia đình",
    desc: "Hệ thống 3kWp – 20kWp tối ưu cho mái nhà. Tiết kiệm tới 90% hoá đơn điện.",
  },
  {
    icon: Factory,
    title: "Điện mặt trời doanh nghiệp",
    desc: "Giải pháp công suất lớn cho nhà xưởng, văn phòng, khu công nghiệp.",
  },
  {
    icon: Battery,
    title: "Hệ thống pin lưu trữ",
    desc: "Pin Lithium dung lượng cao, kết hợp inverter hybrid chống mất điện.",
  },
  {
    icon: Zap,
    title: "Trạm sạc xe điện",
    desc: "Lắp đặt trạm sạc AC/DC cho hộ gia đình, văn phòng và bãi xe công cộng.",
  },
  {
    icon: Wrench,
    title: "Bảo trì & nâng cấp",
    desc: "Vệ sinh tấm pin, kiểm tra inverter, nâng cấp công suất theo nhu cầu.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Dịch vụ
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Giải pháp <span className="text-gradient-sun">trọn gói</span> – một điểm đến
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Từ tư vấn, thiết kế, thi công đến bảo trì – Solar Win đồng hành cùng bạn trọn vòng đời
            hệ thống.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-elevated overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-sun grid place-items-center shadow-solar group-hover:rotate-6 transition-transform">
                  <s.icon className="w-7 h-7 text-charcoal" />
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary/30 group-hover:text-white/40 transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-muted-foreground group-hover:text-white/90 transition-colors">
                  {s.desc}
                </p>
                <div className="mt-6 text-sm font-semibold text-primary group-hover:text-solar transition-colors">
                  Tìm hiểu thêm →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
