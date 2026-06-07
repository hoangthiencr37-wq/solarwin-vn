import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    name: "Anh Nguyễn Văn Hùng",
    role: "Chủ hộ – TP. Vinh",
    text: "Lắp 10kWp từ Solar Win, mỗi tháng tiền điện chỉ còn 200k thay vì 3,5 triệu. Đội thi công cực kỳ chuyên nghiệp, sạch sẽ.",
  },
  {
    name: "Chị Trần Thị Lan",
    role: "Giám đốc nhà xưởng – KCN Bắc Vinh",
    text: "Hệ thống 250kWp giúp doanh nghiệp tiết kiệm 80 triệu/tháng. Hoàn vốn dự kiến chỉ trong 3,5 năm. Rất hài lòng!",
  },
  {
    name: "Anh Lê Minh Đức",
    role: "Chủ villa – Cửa Lò",
    text: "Đầu tư hệ thống lưu trữ 15kWh, mất điện cả ngày vẫn dùng điều hoà thoải mái. Tư vấn tận tâm, hậu mãi tốt.",
  },
  {
    name: "Chị Phạm Thị Hoa",
    role: "Chủ homestay – Diễn Châu",
    text: "Solar Win lắp đặt nhanh, đúng tiến độ. Giờ homestay quảng bá điểm cộng năng lượng xanh, khách quốc tế rất thích.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);
  const t = items[i];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Đánh giá khách hàng
          </span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Niềm tin từ <span className="text-gradient-sun">hàng nghìn khách hàng</span>
          </h2>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-14 rounded-3xl bg-card shadow-elevated border border-border">
            <Quote className="absolute top-6 left-6 w-20 h-20 text-solar/15" strokeWidth={1} />
            <div className="relative">
              <div className="flex gap-1 text-solar">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-xl lg:text-2xl font-medium leading-relaxed">"{t.text}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-sun grid place-items-center text-charcoal font-bold text-xl">
                  {t.name.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Trước"
              className="w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center shadow-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Đánh giá ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Sau"
              className="w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors grid place-items-center shadow-card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
