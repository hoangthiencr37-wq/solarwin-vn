import { useEffect, useState } from "react";
import { Menu, X, Sun } from "lucide-react";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#projects", label: "Dự án" },
  { href: "#gallery", label: "Hình ảnh" },
  { href: "#why", label: "Tại sao chọn" },
  { href: "#testimonials", label: "Đánh giá" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative w-10 h-10 rounded-xl bg-gradient-sun grid place-items-center shadow-solar">
            <Sun className="w-5 h-5 text-charcoal" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-charcoal" : "text-white"}`}>
              Solar<span className="text-primary">Win</span>
            </span>
            <span className={`text-[10px] font-medium ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Dựng xây tổ ấm Việt
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          className="hidden lg:inline-flex items-center justify-center h-11 px-5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          Nhận báo giá
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-charcoal" : "text-white"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-foreground font-medium border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-3 h-11 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold"
            >
              Nhận báo giá miễn phí
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
