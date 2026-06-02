import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(80),
  phone: z.string().trim().regex(/^[0-9+\s().-]{8,15}$/, "Số điện thoại không hợp lệ"),
  address: z.string().trim().min(3, "Vui lòng nhập địa chỉ").max(200),
  bill: z.string().trim().max(50).optional(),
  need: z.string().trim().max(500).optional(),
});

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Đã gửi yêu cầu! Solar Win sẽ liên hệ trong 15 phút.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Báo giá miễn phí</span>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-tight">
              Tính toán <span className="text-gradient-sun">giải pháp riêng</span> cho bạn
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Để lại thông tin, đội ngũ kỹ sư Solar Win sẽ khảo sát, tư vấn miễn phí và gửi báo giá chi tiết trong vòng 24 giờ.
            </p>
            <ul className="mt-6 space-y-3">
              {["Khảo sát miễn phí tận nơi", "Tư vấn giải pháp tối ưu chi phí", "Báo giá minh bạch, không phát sinh", "Hỗ trợ vay vốn 0% lãi suất"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 p-6 lg:p-10 rounded-3xl bg-card border border-border shadow-elevated">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Họ và tên *" name="name" placeholder="Nguyễn Văn A" />
              <Field label="Số điện thoại *" name="phone" type="tel" placeholder="0868 888 826" />
              <Field label="Địa chỉ lắp đặt *" name="address" placeholder="Phường, Thành phố Vinh" className="sm:col-span-2" />
              <Field label="Tiền điện hàng tháng" name="bill" placeholder="VD: 2.000.000đ" />
              <div>
                <label className="block text-sm font-semibold mb-2">Nhu cầu lắp đặt</label>
                <select name="need" className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                  <option value="ho-gia-dinh">Hộ gia đình</option>
                  <option value="doanh-nghiep">Doanh nghiệp / Nhà xưởng</option>
                  <option value="pin-luu-tru">Pin lưu trữ / Hybrid</option>
                  <option value="tram-sac">Trạm sạc xe điện</option>
                  <option value="bao-tri">Bảo trì hệ thống</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || done}
              className="mt-6 w-full h-14 rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-glow hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed transition-transform flex items-center justify-center gap-2"
            >
              {done ? (
                <><CheckCircle2 className="w-5 h-5" /> Đã gửi thành công</>
              ) : loading ? (
                "Đang gửi..."
              ) : (
                <>Gửi yêu cầu báo giá <Send className="w-4 h-4" /></>
              )}
            </button>
            <p className="mt-4 text-xs text-center text-muted-foreground">
              Bằng việc gửi, bạn đồng ý cho Solar Win liên hệ tư vấn về dịch vụ.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}
