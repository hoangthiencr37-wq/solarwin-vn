import { Wallet, Zap, Leaf, Building2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Tiết kiệm chi phí",
    desc: "Giảm đến 90% tiền điện hàng tháng cho hộ gia đình và doanh nghiệp.",
  },
  {
    icon: Zap,
    title: "Chủ động nguồn điện",
    desc: "Hệ thống lưu trữ và inverter hybrid chống mất điện 24/7.",
  },
  {
    icon: Leaf,
    title: "Bảo vệ môi trường",
    desc: "Giảm phát thải CO₂, góp phần xây dựng tương lai xanh.",
  },
  {
    icon: Building2,
    title: "Tăng giá trị công trình",
    desc: "Nâng tầm bất động sản với công nghệ năng lượng hiện đại.",
  },
  {
    icon: TrendingUp,
    title: "Hoàn vốn nhanh",
    desc: "Thời gian hoàn vốn trung bình chỉ 4–5 năm, lợi nhuận 20+ năm.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Về Solar Win
            </span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-tight">
              Đối tác tin cậy của{" "}
              <span className="text-gradient-sun">hàng nghìn gia đình Việt</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Solar Win</strong> là đơn vị chuyên tư vấn và thi
              công điện năng lượng mặt trời tại{" "}
              <strong className="text-foreground">Vinh – Nghệ An</strong> và các tỉnh lân cận. Chúng
              tôi cam kết sản phẩm chính hãng, thi công đúng tiêu chuẩn kỹ thuật, bảo hành dài hạn
              và hỗ trợ kỹ thuật trọn đời.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Với phương châm <em className="text-primary font-semibold">"Dựng xây tổ ấm Việt"</em>,
              mỗi công trình của Solar Win là một cam kết về chất lượng, an toàn và hiệu quả lâu
              dài.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Chính hãng 100%", "Bảo hành 10 năm", "Bảo trì trọn đời", "Lắp đặt < 3 ngày"].map(
                (b) => (
                  <span
                    key={b}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    ✓ {b}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 ${
                  i === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-sun grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <b.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
