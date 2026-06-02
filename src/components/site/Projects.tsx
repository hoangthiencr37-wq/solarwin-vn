import factory from "@/assets/project-factory.jpg";
import roofVilla from "@/assets/real/roof-villa.jpg.asset.json";
import ev from "@/assets/project-ev.jpg";
import battery from "@/assets/project-battery.jpg";
import { MapPin, Zap, TrendingDown, Activity } from "lucide-react";

const projects = [
  { img: roofVilla.url, title: "Gia đình anh Hùng", power: "10 kWp", location: "TP. Vinh, Nghệ An", output: "1.350 kWh/tháng", saving: "Tiết kiệm 3,2 triệu/tháng" },
  { img: factory, title: "Nhà xưởng may mặc Hoàng Gia", power: "250 kWp", location: "KCN Bắc Vinh", output: "32.000 kWh/tháng", saving: "Tiết kiệm 78 triệu/tháng" },
  { img: ev, title: "Trạm sạc xe điện Cửa Lò", power: "60 kWp", location: "Thị xã Cửa Lò", output: "8.100 kWh/tháng", saving: "12 trụ sạc 24/7" },
  { img: battery, title: "Hệ thống lưu trữ gia đình", power: "8 kWp + 15 kWh", location: "Diễn Châu, Nghệ An", output: "1.080 kWh/tháng", saving: "Backup 12 giờ mất điện" },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Dự án tiêu biểu</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
              Hàng trăm công trình <span className="text-gradient-sun">đã vận hành</span>
            </h2>
          </div>
          <p className="text-muted-foreground lg:max-w-md">
            Mỗi dự án là một câu chuyện về tiết kiệm và sự tin tưởng. Khám phá những công trình tiêu biểu Solar Win đã thực hiện.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-solar text-charcoal text-xs font-bold">
                  {p.power}
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">
                  {p.title}
                </h3>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs"><MapPin className="w-3.5 h-3.5" /> Địa điểm</div>
                  <div className="mt-1 font-semibold">{p.location}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs"><Activity className="w-3.5 h-3.5" /> Sản lượng</div>
                  <div className="mt-1 font-semibold">{p.output}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs"><TrendingDown className="w-3.5 h-3.5" /> Hiệu quả</div>
                  <div className="mt-1 font-semibold text-primary">{p.saving}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
