import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import logoRed from "@/assets/real/logo.jpg";

const links = [
  { href: "/#about", label: "Giới thiệu" },
  { href: "/#services", label: "Dịch vụ" },
  { href: "/#projects", label: "Dự án" },
  { href: "/#gallery", label: "Hình ảnh" },
  { href: "/vat-tu", label: "Vật tư" },
  { href: "/#testimonials", label: "Đánh giá" },
  { href: "/#contact", label: "Liên hệ" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy listener
  useEffect(() => {
    if (currentPath !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // offset for header height + spacing
      
      // If near the top, default to first section
      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }

      const sections = ["about", "services", "projects", "gallery", "testimonials", "contact"];
      
      let currentSection = "about";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const isTransparent = transparent && !scrolled;

  const isActive = (href: string) => {
    if (href === "/vat-tu") {
      return currentPath === "/vat-tu";
    }
    if (currentPath === "/") {
      const hash = href.replace("/#", "");
      return activeSection === hash;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-background/85 backdrop-blur-xl shadow-card"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoRed}
            alt="Solar Win logo"
            className="h-12 lg:h-14 w-auto object-contain drop-shadow-md rounded-md"
          />
          <span
            className={`hidden sm:block text-[11px] font-medium leading-tight max-w-[140px] ${
              isTransparent ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            Dựng xây
            <br />
            tổ ấm Việt
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-all relative py-1.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:origin-left after:transition-transform after:duration-300 ${
                  active ? "after:scale-x-100 " : "after:scale-x-0 hover:after:scale-x-100 "
                } ${
                  active
                    ? isTransparent
                      ? "text-solar font-semibold"
                      : "text-primary font-semibold"
                    : isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
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
          className={`lg:hidden p-2 rounded-md ${isTransparent ? "text-white" : "text-charcoal"}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-3 font-medium border-b border-border/60 transition-all ${
                    active
                      ? "text-primary bg-primary/5 pl-6 border-l-4 border-l-primary"
                      : "text-foreground hover:text-primary hover:pl-4"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
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
