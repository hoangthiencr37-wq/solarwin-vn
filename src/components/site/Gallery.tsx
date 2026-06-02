import roofVilla from "@/assets/real/roof-villa.jpg.asset.json";
import panelConnector from "@/assets/real/panel-connector.jpg.asset.json";
import inverterLithium from "@/assets/real/inverter-lithium.jpg.asset.json";
import pylontechDelivery from "@/assets/real/pylontech-delivery.jpg.asset.json";
import installKitchen from "@/assets/real/install-kitchen.jpg.asset.json";
import solaxInverter from "@/assets/real/solax-inverter.jpg.asset.json";
import solaxPylontech from "@/assets/real/solax-pylontech.jpg.asset.json";
import solaxBatteryFull from "@/assets/real/solax-battery-full.jpg.asset.json";
import { Camera } from "lucide-react";

const photos = [
  { src: roofVilla.url, title: "Hệ áp mái biệt thự – TP. Vinh", tag: "Mái nhà phố" , span: "md:col-span-2 md:row-span-2" },
  { src: solaxPylontech.url, title: "Inverter SolaX + Pin Pylontech", tag: "Hybrid + Lưu trữ" },
  { src: solaxBatteryFull.url, title: "Tủ điện Solar – Inverter – Pin", tag: "Hệ trọn gói" },
  { src: inverterLithium.url, title: "Hệ Hybrid Lithium Valley", tag: "Backup gia đình" },
  { src: solaxInverter.url, title: "Inverter SolaX 5kW", tag: "Lắp đặt nội thất" },
  { src: installKitchen.url, title: "Lắp inverter tại P. Vinh Phú", tag: "Hộ gia đình" },
  { src: pylontechDelivery.url, title: "Giao Pylontech Fidus Battery", tag: "Thiết bị chính hãng" },
  { src: panelConnector.url, title: "Đấu nối MC4 chuẩn IP67", tag: "Thi công kỹ thuật" },
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
