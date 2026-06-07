import { ShieldCheck, Users, Award, Headphones, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Đội ngũ kỹ sư giàu kinh nghiệm",
    desc: "Hơn 50 kỹ sư & kỹ thuật viên được đào tạo bài bản, thi công hàng trăm công trình.",
  },
  {
    icon: Hammer,
    title: "Thi công đúng tiêu chuẩn",
    desc: "Tuân thủ TCVN, IEC quốc tế. An toàn điện và chống thấm tuyệt đối.",
  },
  {
    icon: Award,
    title: "Thiết bị chính hãng",
    desc: "Phân phối tấm pin & inverter từ JA Solar, Longi, Huawei, Sungrow, Deye.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành lâu dài",
    desc: "Pin 25 năm hiệu suất, inverter 10 năm, thi công 5 năm – cam kết bằng văn bản.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ kỹ thuật nhanh",
    desc: "Hotline 24/7, kỹ thuật viên có mặt trong vòng 4 giờ tại Nghệ An.",
  },
];

const stats = [
  { k: "500+", v: "Công trình hoàn thành" },
  { k: "12 MWp", v: "Tổng công suất lắp đặt" },
  { k: "98%", v: "Khách hàng hài lòng" },
  { k: "15M kWh", v: "Sản lượng điện tạo ra/năm" },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="py-20 lg:py-28 bg-charcoal text-charcoal-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-solar/15 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-solar uppercase tracking-wider">
            Tại sao chọn Solar Win
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            5 lý do khách hàng <span className="text-gradient-sun">tin tưởng</span> chúng tôi
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`p-7 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-solar/50 transition-all duration-300 hover:-translate-y-1 ${
                i === 3 ? "lg:col-start-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-sun grid place-items-center mb-4">
                <r.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-bold text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-white/70">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 lg:p-10 rounded-3xl bg-gradient-primary shadow-glow">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-white">{s.k}</div>
              <div className="mt-2 text-sm text-white/80 font-medium">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
