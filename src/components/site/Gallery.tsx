import { Camera } from "lucide-react";

// Dynamically import all real JPEG photos uploaded by the user (starts with z)
const images = import.meta.glob<{ default: string }>("../../assets/real/z*.jpg", { eager: true });
const imageList = Object.values(images).map((mod) => mod.default);

const photos = [
  { src: imageList[0] || "", title: "Hệ áp mái biệt thự – TP. Vinh", tag: "Mái nhà phố" , span: "md:col-span-2 md:row-span-2" },
  { src: imageList[1] || "", title: "Mái canopy solar – HT Hotel", tag: "Khách sạn" },
  { src: imageList[2] || "", title: "Inverter SolaX + Pin Pylontech", tag: "Hybrid + Lưu trữ" },
  { src: imageList[3] || "", title: "Tủ điện Solar – Inverter – Pin", tag: "Hệ trọn gói" },
  { src: imageList[4] || "", title: "Hybrid AUXSOL + Lithium Valley", tag: "Backup gia đình" },
  { src: imageList[5] || "", title: "SolaX + 2 Pin Pylontech song song", tag: "Lưu trữ mở rộng" },
  { src: imageList[6] || "", title: "Dự án HT Hotel & Coffee", tag: "Doanh nghiệp" },
  { src: imageList[7] || "", title: "SolaX Hybrid + Pylontech", tag: "Hộ gia đình" },
  { src: imageList[8] || "", title: "Hệ Hybrid Lithium Valley", tag: "Backup gia đình" },
  { src: imageList[9] || "", title: "Inverter SolaX 5kW", tag: "Lắp đặt nội thất" },
  { src: imageList[10] || "", title: "SolaX + ATS phòng giặt", tag: "Hộ gia đình" },
  { src: imageList[11] || "", title: "Kỹ thuật Solar Win bàn giao", tag: "Đội ngũ kỹ thuật" },
  { src: imageList[12] || "", title: "Lắp inverter tại P. Vinh Phú", tag: "Hộ gia đình" },
  { src: imageList[13] || "", title: "Giao Pylontech Fidus Battery", tag: "Thiết bị chính hãng" },
  { src: imageList[14] || "", title: "Đấu nối MC4 chuẩn IP67", tag: "Thi công kỹ thuật" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
            <Camera className="w-4 h-4" /> Hình ảnh thực tế
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Công trình <span className="text-gradient-sun">Solar Win</span> đã thi công
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hình ảnh thực tế tại các công trình hộ gia đình và doanh nghiệp – thiết bị chính hãng SolaX, Pylontech, Huawei, BYD, JA Solar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {photos.map((p) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="text-[10px] uppercase tracking-wider font-bold text-solar">{p.tag}</div>
                <div className="mt-1 text-sm font-semibold leading-tight">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
