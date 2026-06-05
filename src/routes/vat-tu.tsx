import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "sonner";
import {
  Sun, Zap, Battery, Shield, Cable, Wrench, Cpu, Plug, Phone, MessageSquare, MessageCircle, CheckCircle2, XCircle, Star
} from "lucide-react";
import solaxPylontech from "@/assets/real/solax-pylontech.jpg.asset.json";
import solaxBatteryFull from "@/assets/real/solax-battery-full.jpg.asset.json";
import pylontechDelivery from "@/assets/real/pylontech-delivery.jpg.asset.json";
import inverterLithium from "@/assets/real/inverter-lithium.jpg.asset.json";
import solaxInverter from "@/assets/real/solax-inverter.jpg.asset.json";
import roofVilla from "@/assets/real/roof-villa.jpg.asset.json";
import panelConnector from "@/assets/real/panel-connector.jpg.asset.json";
import installKitchen from "@/assets/real/install-kitchen.jpg.asset.json";

export const Route = createFileRoute("/vat-tu")({
  head: () => ({
    meta: [
      { title: "Danh mục vật tư điện mặt trời – Solar Win | Pylontech, SolaX, JA Solar" },
      { name: "description", content: "Catalogue đầy đủ vật tư điện năng lượng mặt trời: tấm pin JA Solar/LONGi/Jinko, inverter SolaX/Huawei/Solis, pin lưu trữ Pylontech US3000C, US5000, Fidus Plus 16kWh, Force H1/H2/H3, tủ điện AC/DC, MC4, khung giá đỡ." },
      { property: "og:title", content: "Danh mục vật tư điện mặt trời – Solar Win" },
      { property: "og:description", content: "Pylontech – Sản phẩm chủ lực Solar Win. Catalogue vật tư đầy đủ, chính hãng." },
      { property: "og:image", content: solaxBatteryFull.url },
    ],
    links: [{ rel: "canonical", href: "/vat-tu" }],
  }),
  component: VatTuPage,
});

/* ============== DATA ============== */

const panels = [
  { brand: "JA Solar", origin: "Trung Quốc", power: "550 – 620Wp", cell: "N-Type TOPCon / Mono PERC", eff: "21.5 – 22.5%", warrantyP: "15 năm", warrantyE: "30 năm (≥87.4%)", pros: "Hiệu suất cao, bền, giá cạnh tranh", cons: "Cần kỹ thuật lắp chuẩn", rating: 5 },
  { brand: "LONGi Solar", origin: "Trung Quốc", power: "550 – 620Wp", cell: "Hi-MO 6 / Hi-MO 7 N-Type", eff: "22.0 – 22.8%", warrantyP: "15 năm", warrantyE: "30 năm", pros: "Top 1 thế giới, công nghệ Hi-MO mới", cons: "Giá cao hơn JA", rating: 5 },
  { brand: "Jinko Solar", origin: "Trung Quốc", power: "545 – 620Wp", cell: "Tiger Neo N-Type", eff: "21.8 – 22.5%", warrantyP: "12-15 năm", warrantyE: "30 năm", pros: "Tiger Neo nổi tiếng, ổn định", cons: "Hàng giả nhiều, cần đại lý uy tín", rating: 5 },
  { brand: "Trina Solar", origin: "Trung Quốc", power: "550 – 605Wp", cell: "Vertex N-Type", eff: "21.5 – 22.3%", warrantyP: "12 năm", warrantyE: "25 năm", pros: "Thương hiệu Tier 1 lâu đời", cons: "Mẫu mã ít đa dạng", rating: 4 },
  { brand: "Canadian Solar", origin: "Canada/TQ", power: "550 – 600Wp", cell: "HiKu / TOPHiKu N-Type", eff: "21.3 – 22.0%", warrantyP: "12 năm", warrantyE: "25 năm", pros: "Thương hiệu Bắc Mỹ, chất lượng tốt", cons: "Giá nhỉnh hơn mặt bằng", rating: 4 },
];

const inverters = [
  { brand: "Solis", type: "On-grid / Hybrid", power: "3 – 110kW", warranty: "5-10 năm", eff: "98.3%", ip: "IP66", pros: "Bền, ổn định, hậu mãi tốt", cons: "App giám sát cơ bản" },
  { brand: "Huawei", type: "On-grid / Hybrid Luna", power: "3 – 100kW", warranty: "10 năm", eff: "98.6%", ip: "IP65", pros: "AI tối ưu, chống cháy, app SUN2000 mạnh", cons: "Giá cao" },
  { brand: "SolaX", type: "Hybrid X1/X3", power: "3 – 30kW", warranty: "5-10 năm", eff: "98.0%", ip: "IP65", pros: "Tương thích pin tốt, EPS dự phòng nhanh", cons: "Nhiều dòng dễ chọn nhầm" },
  { brand: "Sungrow", type: "On-grid / Hybrid SH", power: "3 – 250kW", warranty: "10 năm", eff: "98.4%", ip: "IP66", pros: "Top thế giới về inverter, bền bỉ", cons: "Cấu hình hybrid khó hơn" },
  { brand: "Growatt", type: "On-grid / Hybrid SPH", power: "3 – 50kW", warranty: "5-10 năm", eff: "97.6%", ip: "IP65", pros: "Giá rẻ, phổ biến, dễ thay thế", cons: "Tuổi thọ trung bình" },
  { brand: "Deye", type: "Hybrid Single/3 pha", power: "3 – 50kW", warranty: "5-10 năm", eff: "97.6%", ip: "IP65", pros: "Hybrid mạnh, hỗ trợ off-grid tốt", cons: "App cần đăng ký SolarMan" },
];

const pylontechModels = [
  { name: "Pylontech US3000C", cap: "3.5 kWh", volt: "48V (LV)", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: pylontechDelivery.url,
    pros: ["Giá hợp lý nhất phân khúc", "Module nhỏ, dễ vận chuyển", "Mở rộng song song dễ dàng"], use: "Hộ gia đình nhỏ, backup cơ bản" },
  { name: "Pylontech US5000", cap: "4.8 kWh", volt: "48V (LV)", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: solaxPylontech.url,
    pros: ["Bán chạy nhất Việt Nam", "Tương thích SolaX, Deye, Sungrow, Growatt", "Hiệu suất xả 100% DOD"], use: "Hộ gia đình 5–15 kWh" },
  { name: "Pylontech Fidus Plus 16 kWh", cap: "16 kWh", volt: "48V (LV)", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: solaxBatteryFull.url,
    pros: ["Thiết kế dạng tủ đứng cao cấp", "Lắp đặt nhanh – plug & play", "Phù hợp biệt thự, nhà phố lớn"], use: "Biệt thự, hệ Hybrid 8–15 kWp" },
  { name: "Pylontech Force H1", cap: "3.55 – 17.76 kWh", volt: "High Voltage", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: inverterLithium.url,
    pros: ["Điện áp cao, hiệu suất tốt", "Modular dễ mở rộng", "Tích hợp BMS thông minh"], use: "Inverter HV: Sungrow, GoodWe" },
  { name: "Pylontech Force H2", cap: "7.1 – 24.86 kWh", volt: "High Voltage", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: solaxBatteryFull.url,
    pros: ["HV thế hệ mới", "Modular, dung lượng linh hoạt", "Hiệu suất sạc/xả >95%"], use: "Hệ 10–25 kWh cao cấp" },
  { name: "Pylontech Force H3", cap: "10.65 – 28.4 kWh", volt: "High Voltage", chem: "LiFePO4", cycle: "≥6.000 chu kỳ", img: solaxPylontech.url,
    pros: ["Dòng cao cấp nhất Pylontech", "Thiết kế hiện đại, gọn", "Tương thích inverter HV mới nhất"], use: "Biệt thự lớn, doanh nghiệp nhỏ" },
];

const pylonCompare = [
  { brand: "Pylontech", chem: "LiFePO4", cycle: "6.000+", stab: "★★★★★", expand: "Rất tốt", compat: "Rộng nhất", warranty: "10 năm", price: "Trung – cao", overall: "★★★★★" },
  { brand: "Huawei Luna", chem: "LiFePO4", cycle: "6.000", stab: "★★★★★", expand: "Tốt (chỉ Huawei)", compat: "Chỉ Huawei", warranty: "10 năm", price: "Cao", overall: "★★★★★" },
  { brand: "BYD", chem: "LiFePO4", cycle: "6.000", stab: "★★★★★", expand: "Tốt", compat: "Rộng (HV)", warranty: "10 năm", price: "Cao", overall: "★★★★½" },
  { brand: "Dyness", chem: "LiFePO4", cycle: "6.000", stab: "★★★★", expand: "Tốt", compat: "Rộng", warranty: "10 năm", price: "Trung", overall: "★★★★" },
  { brand: "Zetara", chem: "LiFePO4", cycle: "6.000", stab: "★★★★", expand: "Khá", compat: "Trung bình", warranty: "10 năm", price: "Thấp – trung", overall: "★★★½" },
  { brand: "ZETATECH", chem: "LiFePO4", cycle: "5.000+", stab: "★★★½", expand: "Khá", compat: "Hạn chế", warranty: "5-10 năm", price: "Thấp", overall: "★★★" },
];

const acdc = [
  { name: "MCCB", desc: "Aptomat tổng bảo vệ quá tải, ngắn mạch toàn hệ" },
  { name: "MCB", desc: "Aptomat nhánh bảo vệ từng tải, từng chuỗi" },
  { name: "SPD AC", desc: "Chống sét lan truyền phía AC – bảo vệ inverter" },
  { name: "SPD DC", desc: "Chống sét DC – bảo vệ chuỗi pin và inverter" },
  { name: "ATS", desc: "Tự động chuyển nguồn lưới ↔ inverter khi mất điện" },
  { name: "Cầu chì DC", desc: "Bảo vệ dòng ngắn mạch chuỗi tấm pin" },
  { name: "Contactor", desc: "Đóng/cắt tải công suất lớn theo logic điều khiển" },
  { name: "Đồng hồ đo điện", desc: "Smart meter đo sản lượng, công suất phát/tiêu thụ" },
];

const ground = [
  { name: "Kim thu sét", desc: "Thu sét đánh thẳng, dẫn dòng xuống đất an toàn" },
  { name: "Cọc tiếp địa", desc: "Cọc đồng/mạ đồng đóng sâu, giảm điện trở đất < 10Ω" },
  { name: "Dây đồng trần", desc: "Liên kết hệ tiếp địa, kim thu sét và tủ điện" },
  { name: "Hộp kiểm tra điện trở đất", desc: "Đo kiểm định kỳ điện trở tiếp địa hệ thống" },
];

const cables = [
  { name: "Dây DC 4mm²", desc: "Đấu chuỗi tấm pin tới combiner / inverter" },
  { name: "Dây DC 6mm²", desc: "Dòng cao, hệ công suất lớn / khoảng cách xa" },
  { name: "Dây AC", desc: "Từ inverter về tủ điện AC và lưới điện" },
  { name: "Dây tiếp địa", desc: "Liên kết khung giá đỡ, vỏ inverter, tủ điện" },
];
const cableBrands = ["Cadivi", "LS Vina", "Lion", "Goldcup"];

const racking = [
  { name: "Rail nhôm", desc: "Thanh ray nhôm anode chịu lực, chống ăn mòn" },
  { name: "Kẹp giữa", desc: "Cố định 2 tấm pin liền kề trên rail" },
  { name: "Kẹp biên", desc: "Cố định tấm pin ngoài cùng của dãy" },
  { name: "Bulong inox 304", desc: "Chống gỉ sét, độ bền cơ học cao" },
  { name: "Chân L", desc: "Bắt rail vào mái tôn / mái ngói nghiêng" },
  { name: "Chân U", desc: "Khung tam giác / nâng cao góc nghiêng tối ưu" },
];

const accessories = ["Ống ruột gà", "Máng cáp", "Dây rút UV", "Đầu cos", "Tem cảnh báo", "Co nhiệt", "Băng keo điện", "Nẹp cáp"];

const smart = [
  { name: "Smart Meter", desc: "Đo sản lượng, phát/tiêu thụ thời gian thực" },
  { name: "Data Logger", desc: "Ghi log dữ liệu, truyền lên cloud" },
  { name: "WiFi Dongle", desc: "Kết nối inverter với app điện thoại" },
  { name: "RS485 Converter", desc: "Truyền thông inverter ↔ BMS pin lưu trữ" },
  { name: "Bộ giám sát từ xa", desc: "Cảnh báo sự cố, theo dõi qua app 24/7" },
];

const solutions = [
  { tag: "Tiết kiệm", title: "Hệ tiết kiệm On-grid", desc: "JA Solar 550W + Solis 5kW – giảm 70-90% hoá đơn điện" },
  { tag: "Hybrid", title: "Hệ Hybrid phổ biến", desc: "SolaX X1 5kW + Pylontech US5000 (4.8 kWh) – backup mất điện" },
  { tag: "Cao cấp", title: "Hybrid + Pylontech Fidus Plus 16 kWh", desc: "SolaX/Deye 8kW + Fidus Plus – biệt thự, nhà phố lớn" },
  { tag: "Premium", title: "Huawei + Pylontech Force H3", desc: "Huawei SUN2000 + Force H3 – hiệu suất & thẩm mỹ tối đa" },
];

/* ============== UI HELPERS ============== */

function SectionHeader({ icon: Icon, eyebrow, title, desc }: any) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
        <Icon className="w-4 h-4" /> {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl lg:text-4xl font-bold">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function VatTuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-primary/40 text-white py-20 lg:py-28">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--solar),transparent_50%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-solar text-charcoal px-3 py-1.5 rounded-full">
                <Star className="w-3.5 h-3.5" /> Catalogue Solar Win 2026
              </span>
              <h1 className="mt-5 text-4xl lg:text-6xl font-extrabold leading-tight">
                Danh mục <span className="text-gradient-sun">vật tư điện mặt trời</span>
              </h1>
              <p className="mt-5 text-lg text-white/85">
                Toàn bộ thiết bị – linh kiện chính hãng Solar Win đang phân phối & thi công: tấm pin Tier 1, inverter Hybrid, pin lưu trữ <strong>Pylontech</strong>, tủ điện AC/DC, khung giá đỡ, hệ tiếp địa & phụ kiện giám sát thông minh.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#pylontech" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gradient-primary font-semibold shadow-glow hover:scale-105 transition-transform">
                  <Battery className="w-4 h-4" /> Xem Pylontech
                </a>
                <a href="tel:0972545686" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/10 backdrop-blur border border-white/20 font-semibold hover:bg-white/20">
                  <Phone className="w-4 h-4" /> 0972 545 686
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 1. PANELS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Sun} eyebrow="01 — Tấm pin" title="Tấm pin năng lượng mặt trời Tier 1" desc="So sánh trực quan 5 thương hiệu hàng đầu thế giới đang được Solar Win lắp đặt." />
            <div className="overflow-x-auto rounded-2xl border border-border shadow-card">
              <table className="w-full text-sm min-w-[900px]">
                <thead className="bg-secondary/60">
                  <tr className="text-left">
                    {["Thương hiệu","Xuất xứ","Công suất","Công nghệ Cell","Hiệu suất","BH sản phẩm","BH hiệu suất","Đánh giá"].map(h => (
                      <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {panels.map(p => (
                    <tr key={p.brand} className="border-t border-border hover:bg-secondary/30">
                      <td className="px-4 py-3 font-bold text-primary">{p.brand}</td>
                      <td className="px-4 py-3">{p.origin}</td>
                      <td className="px-4 py-3">{p.power}</td>
                      <td className="px-4 py-3">{p.cell}</td>
                      <td className="px-4 py-3">{p.eff}</td>
                      <td className="px-4 py-3">{p.warrantyP}</td>
                      <td className="px-4 py-3">{p.warrantyE}</td>
                      <td className="px-4 py-3 text-solar">{"★".repeat(p.rating)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {panels.map(p => (
                <div key={p.brand} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                  <div className="font-bold text-lg">{p.brand}</div>
                  <div className="mt-2 flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span><b>Ưu:</b> {p.pros}</span></div>
                  <div className="mt-1 flex gap-2 text-sm"><XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /><span><b>Nhược:</b> {p.cons}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. INVERTERS */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Zap} eyebrow="02 — Inverter" title="Biến tần On-grid & Hybrid" desc="6 thương hiệu inverter Solar Win tin dùng cho hộ gia đình và doanh nghiệp." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {inverters.map(i => (
                <div key={i.brand} className="rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-primary">{i.brand}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-solar/20 text-charcoal font-semibold">{i.ip}</span>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">{i.type}</div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div><dt className="text-xs text-muted-foreground">Công suất</dt><dd className="font-semibold">{i.power}</dd></div>
                    <div><dt className="text-xs text-muted-foreground">Hiệu suất</dt><dd className="font-semibold">{i.eff}</dd></div>
                    <div className="col-span-2"><dt className="text-xs text-muted-foreground">Bảo hành</dt><dd className="font-semibold">{i.warranty}</dd></div>
                  </dl>
                  <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
                    <div className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{i.pros}</span></div>
                    <div className="flex gap-2"><XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /><span>{i.cons}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PYLONTECH — FLAGSHIP */}
        <section id="pylontech" className="py-24 bg-gradient-to-b from-charcoal to-charcoal/95 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,var(--primary),transparent_60%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-solar text-charcoal px-3 py-1.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-charcoal" /> Sản phẩm chủ lực Solar Win
              </span>
              <h2 className="mt-5 text-4xl lg:text-5xl font-extrabold">
                Pin lưu trữ <span className="text-gradient-sun">Pylontech</span>
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                Pylontech là thương hiệu pin Lithium <strong>LiFePO4</strong> hàng đầu thế giới — độ ổn định cao, tuổi thọ <strong>6.000+ chu kỳ</strong>, tương thích rộng nhất với mọi inverter Hybrid, được sử dụng trong hàng triệu hệ thống điện mặt trời toàn cầu.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pylontechModels.map(m => (
                <article key={m.name} className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-solar/60 transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                    <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-solar">{m.name}</h3>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/5 rounded-lg px-3 py-2"><div className="text-white/60">Dung lượng</div><div className="font-bold">{m.cap}</div></div>
                      <div className="bg-white/5 rounded-lg px-3 py-2"><div className="text-white/60">Điện áp</div><div className="font-bold">{m.volt}</div></div>
                      <div className="bg-white/5 rounded-lg px-3 py-2"><div className="text-white/60">Hoá học</div><div className="font-bold">{m.chem}</div></div>
                      <div className="bg-white/5 rounded-lg px-3 py-2"><div className="text-white/60">Chu kỳ</div><div className="font-bold">{m.cycle}</div></div>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-sm">
                      {m.pros.map(p => (
                        <li key={p} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-solar shrink-0 mt-0.5" /><span className="text-white/85">{p}</span></li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/70">
                      <b>Ứng dụng:</b> {m.use}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* COMPARE TABLE */}
            <div className="mt-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-center">So sánh Pylontech với các thương hiệu khác</h3>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <table className="w-full text-sm min-w-[900px]">
                  <thead className="bg-white/10">
                    <tr className="text-left text-white">
                      {["Thương hiệu","Công nghệ","Chu kỳ","Ổn định","Mở rộng","Tương thích","Bảo hành","Giá","Tổng thể"].map(h => (
                        <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pylonCompare.map((r, idx) => (
                      <tr key={r.brand} className={`border-t border-white/10 ${idx === 0 ? "bg-solar/10" : ""}`}>
                        <td className={`px-4 py-3 font-bold ${idx === 0 ? "text-solar" : "text-white"}`}>{r.brand}{idx === 0 && " ⭐"}</td>
                        <td className="px-4 py-3 text-white/85">{r.chem}</td>
                        <td className="px-4 py-3 text-white/85">{r.cycle}</td>
                        <td className="px-4 py-3 text-solar">{r.stab}</td>
                        <td className="px-4 py-3 text-white/85">{r.expand}</td>
                        <td className="px-4 py-3 text-white/85">{r.compat}</td>
                        <td className="px-4 py-3 text-white/85">{r.warranty}</td>
                        <td className="px-4 py-3 text-white/85">{r.price}</td>
                        <td className="px-4 py-3 text-solar font-semibold">{r.overall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AC/DC CABINET */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Shield} eyebrow="04 — Tủ điện" title="Tủ điện AC/DC & thiết bị bảo vệ" desc="Đảm bảo an toàn cho toàn bộ hệ thống, inverter và pin lưu trữ." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {acdc.map(x => (
                <div key={x.name} className="p-5 rounded-2xl bg-card border border-border shadow-card hover:border-primary/40 transition-colors">
                  <div className="font-bold text-primary">{x.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. GROUNDING */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Shield} eyebrow="05 — Tiếp địa & chống sét" title="Hệ thống tiếp địa và chống sét" desc="Bảo vệ inverter, pin lưu trữ và tài sản khỏi sét đánh & dòng rò." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ground.map(x => (
                <div key={x.name} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                  <div className="font-bold">{x.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MC4 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader icon={Plug} eyebrow="06 — Đầu nối" title="Đầu nối MC4 chính hãng" desc="" />
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> MC4 chính hãng, chuẩn quốc tế</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Chuẩn chống nước <b>IP68</b> – ngâm nước vẫn an toàn</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Chịu UV – không lão hoá ngoài trời 25+ năm</li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Kết nối nhanh, tiếp xúc thấp – giảm tổn hao</li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img src={panelConnector.url} alt="Đầu nối MC4 IP68" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* 7. CABLES */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Cable} eyebrow="07 — Dây cáp" title="Dây cáp điện mặt trời chuyên dụng" desc="" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cables.map(c => (
                <div key={c.name} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                  <div className="font-bold text-primary">{c.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm font-semibold text-muted-foreground">Thương hiệu Solar Win sử dụng:</span>
              {cableBrands.map(b => (
                <span key={b} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-semibold">{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 8. RACKING */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Wrench} eyebrow="08 — Khung giá đỡ" title="Hệ khung giá đỡ nhôm – inox" desc="Chịu lực, chống ăn mòn, tuổi thọ 25+ năm." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {racking.map(r => (
                <div key={r.name} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                  <div className="font-bold">{r.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ACCESSORIES */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Wrench} eyebrow="09 — Vật tư phụ" title="Vật tư phụ thi công" desc="" />
            <div className="flex flex-wrap justify-center gap-3">
              {accessories.map(a => (
                <span key={a} className="px-5 py-3 rounded-full bg-card border border-border font-semibold text-sm shadow-card">{a}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 10. SMART */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionHeader icon={Cpu} eyebrow="10 — Giám sát & Smart Home" title="Phụ kiện giám sát thông minh" desc="Theo dõi sản lượng, cảnh báo sự cố 24/7 trên điện thoại." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {smart.map(s => (
                <div key={s.name} className="p-5 rounded-2xl bg-card border border-border shadow-card">
                  <div className="font-bold text-primary">{s.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-24 bg-gradient-to-br from-primary/95 to-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-extrabold">Giải pháp đề xuất Solar Win</h2>
              <p className="mt-4 text-primary-foreground/85">Bốn cấu hình tiêu chuẩn cho mọi nhu cầu – từ tiết kiệm điện đến biệt thự cao cấp.</p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {solutions.map(s => (
                <div key={s.title} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 hover:bg-white/15 transition-colors">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-solar text-charcoal px-2 py-1 rounded-full">{s.tag}</span>
                  <h3 className="mt-3 text-lg font-bold leading-tight">✅ {s.title}</h3>
                  <p className="mt-2 text-sm text-white/85">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <a href="#quote" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-charcoal text-white font-semibold shadow-elevated hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" /> Nhận báo giá
              </a>
              <a href="https://www.facebook.com/DienmattroiSolarwin.vn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-primary font-semibold hover:scale-105 transition-transform">
                <MessageSquare className="w-4 h-4" /> Tư vấn miễn phí
              </a>
              <a href="tel:0972545686" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-solar text-charcoal font-semibold hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4" /> Kỹ thuật Solar Win
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-right" richColors />
    </div>
  );
}
