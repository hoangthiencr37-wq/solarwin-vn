import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solar Win – Điện mặt trời Nghệ An | Tiết kiệm 90% tiền điện" },
      {
        name: "description",
        content:
          "Solar Win – Chuyên lắp đặt điện mặt trời tại Vinh, Nghệ An. Hệ thống hộ gia đình, doanh nghiệp, pin lưu trữ, inverter hybrid, trạm sạc xe điện. Báo giá miễn phí.",
      },
      { name: "keywords", content: "điện mặt trời Nghệ An, lắp điện mặt trời Vinh, pin lưu trữ điện, inverter hybrid, điện mặt trời hộ gia đình, điện mặt trời doanh nghiệp, trạm sạc xe điện" },
      { property: "og:title", content: "Solar Win – Điện mặt trời Nghệ An | Tiết kiệm 90% tiền điện" },
      { property: "og:description", content: "Tư vấn, thiết kế, thi công hệ thống điện năng lượng mặt trời chính hãng. Bảo hành dài hạn." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Solar Win",
          slogan: "Dựng xây tổ ấm Việt",
          telephone: "+84868888826",
          email: "info@solarwin.vn",
          address: { "@type": "PostalAddress", streetAddress: "Đường/72m Vòng xuyến, Vinh Hưng", addressRegion: "Nghệ An", postalCode: "43000", addressCountry: "VN" },
          areaServed: "Nghệ An",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparent />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-right" richColors />
    </div>
  );
}
