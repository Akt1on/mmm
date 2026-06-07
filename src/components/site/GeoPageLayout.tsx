import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileCta } from "@/components/site/MobileCta";
import { CookieBanner } from "@/components/site/CookieBanner";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "sonner";
import { MapPin, ChevronRight, CheckCircle } from "lucide-react";

const SERVICES = [
  { name: "Асфальтирование дорог", price: "от 590 ₽/м²" },
  { name: "Асфальтирование дворов", price: "от 620 ₽/м²" },
  { name: "Асфальтирование парковок", price: "от 660 ₽/м²" },
  { name: "Асфальтирование СНТ", price: "от 540 ₽/м²" },
  { name: "Ямочный ремонт", price: "от 1 800 ₽/м²" },
  { name: "Тротуарная плитка", price: "от 1 350 ₽/м²" },
];

function useGeoSchema(city: string, cityGenitive: string) {
  const breadcrumbName = `Асфальтирование в ${cityGenitive}`;
  const businessName = `МСК АСФАЛЬТ — асфальтирование в ${cityGenitive}`;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { 
            "@type": "ListItem", 
            "position": 1, 
            "name": "Главная", 
            "item": "https://mskasfalt.ru/" 
          },
          { 
            "@type": "ListItem", 
            "position": 2, 
            "name": breadcrumbName, 
            "item": typeof window !== "undefined" ? window.location.href : "https://mskasfalt.ru/" 
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": businessName,
        "@id": "https://mskasfalt.ru/#org",
        "url": "https://mskasfalt.ru/",
        "telephone": "+79138263070",
        "areaServed": { "@type": "City", "name": city }
      }
    ]
  });
}

export interface GeoPageProps {
  city: string;
  cityGenitive: string;
  distance: string;
  description: string;
  seoText: string;
}

export function GeoPageLayout({ city, cityGenitive, distance, description, seoText }: GeoPageProps) {
  const schemaJson = useGeoSchema(city, cityGenitive);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        {/* Hero */}
        <section
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a2016 0%, #0f3028 40%, #0d2840 100%)" }}
        >
          <div className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-[#21A038] opacity-10 blur-[120px]" />
          <div className="container-x relative">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70 transition-colors">Главная</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-white/60">Асфальтирование в {cityGenitive}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#7CEB8A] mb-4">
                  <MapPin className="size-3.5" /> {distance}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Асфальтирование в {cityGenitive}
                </h1>
                <p className="mt-4 text-white/65 text-lg max-w-xl">{description}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {[
                    "Выезд инженера в день обращения",
                    "Своя техника — нет субподрядчиков",
                    "Смета фиксируется в договоре",
                    "Гарантия до 5 лет на покрытие",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-[#21A038] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/75">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+79138263070"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #21A038 0%, #008C44 100%)" }}
                  >
                    Позвонить
                  </a>
                  <a
                    href="#lead-form"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5" id="lead-form">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Services + prices */}
        <section className="py-16 sm:py-20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Цены на асфальтирование в {cityGenitive}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map(({ name, price }) => (
                <div key={name} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-semibold mb-1">{name}</div>
                  <div className="text-2xl font-bold text-primary mt-2">{price}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * Выезд инженера и составление сметы — бесплатно. Точная цена зависит от объёма и состояния основания.
            </p>
          </div>
        </section>

        {/* SEO text */}
        <section className="py-16 sm:py-20 bg-muted/20">
          <div className="container-x max-w-4xl">
            <div
              className="text-foreground/70 text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: seoText }}
            />
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 text-center"
          style={{ background: "linear-gradient(135deg, #0a2016 0%, #0f3028 100%)" }}
        >
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Нужна смета на асфальтирование в {cityGenitive}?
            </h2>
            <p className="text-white/60 mb-8">Выезд инженера бесплатно — в день обращения</p>
            <a
              href="tel:+79138263070"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white text-lg"
              style={{ background: "linear-gradient(135deg, #21A038 0%, #008C44 100%)" }}
            >
              +7 913 826-30-70
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </div>
  );
}