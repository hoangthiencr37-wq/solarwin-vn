import { Sun, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-gradient-sun grid place-items-center shadow-solar">
                <Sun className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
              </span>
              <div>
                <div className="font-bold text-lg">Solar<span className="text-solar">Win</span></div>
                <div className="text-xs text-white/60">Dựng xây tổ ấm Việt</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Solar Win – Chuyên tư vấn, thiết kế và thi công điện năng lượng mặt trời tại Nghệ An và các tỉnh lân cận.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-solar">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-solar">Điện mặt trời hộ gia đình</a></li>
              <li><a href="#services" className="hover:text-solar">Điện mặt trời doanh nghiệp</a></li>
              <li><a href="#services" className="hover:text-solar">Pin lưu trữ – Hybrid</a></li>
              <li><a href="#services" className="hover:text-solar">Trạm sạc xe điện</a></li>
              <li><a href="#services" className="hover:text-solar">Bảo trì & nâng cấp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-solar">Liên kết</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-solar">Giới thiệu</a></li>
              <li><a href="#projects" className="hover:text-solar">Dự án</a></li>
              <li><a href="#why" className="hover:text-solar">Tại sao chọn</a></li>
              <li><a href="#testimonials" className="hover:text-solar">Đánh giá</a></li>
              <li><a href="#quote" className="hover:text-solar">Báo giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-solar">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-solar" /> <a href="tel:0868888826" className="hover:text-solar">0868 888 826</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-solar" /> <a href="mailto:info@solarwin.vn" className="hover:text-solar">info@solarwin.vn</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-solar" /> TP. Vinh, Nghệ An</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Solar Win. Tất cả quyền được bảo lưu.</div>
          <div>Điện mặt trời Nghệ An · Inverter Hybrid · Pin lưu trữ</div>
        </div>
      </div>
    </footer>
  );
}
