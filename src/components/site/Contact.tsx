import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Liên hệ
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Sẵn sàng tư vấn <span className="text-gradient-sun">24/7</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            <InfoCard
              icon={Phone}
              label="Hotline 1"
              value="0868 888 826"
              href="tel:0868888826"
              highlight
            />
            <InfoCard
              icon={Phone}
              label="Hotline 2"
              value="0972 545 686"
              href="tel:0972545686"
              highlight
            />
            <InfoCard
              icon={Mail}
              label="Email"
              value="info@solarwin.vn"
              href="mailto:info@solarwin.vn"
            />
            <InfoCard
              icon={MapPin}
              label="Showroom"
              value="Đường/72m Vòng xuyến, Vinh Hưng, Nghệ An 43000, Việt Nam"
            />
            <InfoCard icon={Clock} label="Giờ làm việc" value="T2 – CN: 7:30 – 21:00" />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-elevated border border-border h-[400px]">
            <iframe
              title="Bản đồ Solar Win"
              src="https://www.google.com/maps?q=%C4%90%C6%B0%E1%BB%9Dng%2F72m+V%C3%B2ng+xuy%E1%BA%BFn%2C+Vinh+H%C6%B0ng%2C+Ngh%E1%BB%87+An+43000%2C+Vi%E1%BB%87t+Nam&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) {
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href } : {})}
      className={`p-6 rounded-2xl border transition-all hover:-translate-y-1 ${
        highlight
          ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
          : "bg-card border-border shadow-card hover:shadow-elevated"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${highlight ? "bg-white/20" : "bg-gradient-sun"}`}
      >
        <Icon className={`w-6 h-6 ${highlight ? "text-white" : "text-charcoal"}`} />
      </div>
      <div
        className={`text-xs uppercase tracking-wider font-semibold ${highlight ? "text-white/80" : "text-muted-foreground"}`}
      >
        {label}
      </div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </Comp>
  );
}
