import { useEffect, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import htHotelCf from "@/assets/real/ht_hotel_cf.jpg";
import maiNhaPho from "@/assets/real/mai_nha_pho.jpg";
import maiCanopySolarHtHotel from "@/assets/real/Mái canopy solar – HT Hotel.jpg";
import solax2PinPylontechSongSong from "@/assets/real/SolaX + 2 Pin Pylontech song song.jpg";
import solaxHybridSigen from "@/assets/real/SolaX Hybrid + SIGEN.jpg";
import comboSigen from "@/assets/real/Combo SIGEN.jpg";
import giaoPylontechFidusBattery from "@/assets/real/Giao Pylontech Fidus Battery.jpg";

import img_z0825_580 from "@/assets/real/z7910630825580_8015ff5749a42eca826de5efcd83fa75.jpg";
import img_z0825_600 from "@/assets/real/z7910630825600_3eec94885632d4568239b97536fedb0a.jpg";
import img_z0825_704 from "@/assets/real/z7910630825704_a4f39c31b93124a61be6787d47c4e478.jpg";
import auxsolLithiumValleyImg from "@/assets/real/Hybrid AUXSOL + Lithium Valley.png";
import systemHybridLithiumValleyImg from "@/assets/real/Hệ Hybrid Lithium Valley.png";
import img_z0921 from "@/assets/real/Inverter SolaX 5kW.jpg";
import img_z0969_185 from "@/assets/real/z7910630969185_a834fd27af790d7c4d3611a11e1cadf5.jpg";
import img_z1400 from "@/assets/real/Kỹ thuật Solar Win bàn giao.jpg";
import img_z2597 from "@/assets/real/Dau-noi-MC4-dien-nang-luong-mat-troi-la-gi.jpg";
import img_z7578_220 from "@/assets/real/z7910637578220_046ba8f900b106b0ba3483ea46462beb.jpg";
import img_z7578_221 from "@/assets/real/z7910637578221_ce4d3e0d4ac53babee31e2290e4879cd.jpg";
import img_z7626 from "@/assets/real/z7910637626200_46c5cea1fb4dbb5aae4b88a65d247e19.jpg";

const photos = [
  {
    src: maiNhaPho,
    title: "Hệ áp mái biệt thự – TP. Vinh",
    tag: "Mái nhà phố",
  },
  { src: maiCanopySolarHtHotel, title: "Mái canopy solar – HT Hotel", tag: "Khách sạn" },
  { src: img_z0825_600, title: "Inverter SolaX + Pin Pylontech", tag: "Hybrid + Lưu trữ" },
  { src: img_z0825_704, title: "Tủ điện Solar – Inverter – Pin", tag: "Hệ trọn gói" },
  { src: auxsolLithiumValleyImg, title: "Hybrid AUXSOL + Lithium Valley", tag: "Backup gia đình" },
  {
    src: solax2PinPylontechSongSong,
    title: "SolaX + 2 Pin Pylontech song song",
    tag: "Lưu trữ mở rộng",
  },
  { src: htHotelCf, title: "Dự án HT Hotel & Coffee", tag: "Doanh nghiệp" },
  { src: solaxHybridSigen, title: "SolaX Hybrid + SIGEN", tag: "Hộ gia đình" },
  { src: systemHybridLithiumValleyImg, title: "Hệ Hybrid Lithium Valley", tag: "Backup gia đình" },
  { src: img_z0921, title: "Inverter SolaX 5kW", tag: "Lắp đặt nội thất" },
  { src: comboSigen, title: "Combo SIGEN", tag: "Hộ gia đình" },
  { src: img_z1400, title: "Kỹ thuật Solar Win bàn giao", tag: "Đội ngũ kỹ thuật" },
  { src: solaxHybridSigen, title: "Lắp inverter tại P. Vinh Phú", tag: "Hộ gia đình" },
  {
    src: giaoPylontechFidusBattery,
    title: "Giao Pylontech Fidus Battery",
    tag: "Thiết bị chính hãng",
  },
  { src: img_z2597, title: "Đấu nối MC4 chuẩn IP67", tag: "Thi công kỹ thuật" },
];

export function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
            <Camera className="w-4 h-4" /> Hình ảnh thực tế
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Công trình <span className="text-gradient-sun">Solar Win</span> đã thi công
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hình ảnh thực tế tại các công trình hộ gia đình và doanh nghiệp – thiết bị chính hãng
            SolaX, Pylontech, Huawei, BYD, JA Solar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((p, idx) => (
            <div
              key={p.title}
              onClick={() => setActivePhotoIndex(idx)}
              className="group aspect-[4/3] relative overflow-hidden rounded-2xl border border-border/40 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer bg-card"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
              
              {/* Premium Floating glassmorphism label */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-background/80 dark:bg-charcoal/80 backdrop-blur-md border border-border/60 shadow-sm transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-primary block">
                    {p.tag}
                  </span>
                  <span className="mt-0.5 text-xs font-semibold text-foreground leading-tight block truncate">
                    {p.title}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Content Container */}
          <div
            className="max-w-4xl w-full flex flex-col items-center justify-center gap-4 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-2xl">
              <img
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].title}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>
            
            <div className="text-center mt-2">
              <span className="text-xs uppercase tracking-widest font-bold text-solar block">
                {photos[activePhotoIndex].tag}
              </span>
              <h3 className="mt-1 text-lg md:text-xl font-bold text-white leading-tight">
                {photos[activePhotoIndex].title}
              </h3>
              <p className="mt-1 text-xs text-white/50">
                Ảnh {activePhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
