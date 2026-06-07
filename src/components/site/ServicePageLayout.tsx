import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileCta } from "@/components/site/MobileCta";
import { CookieBanner } from "@/components/site/CookieBanner";
import { LeadForm } from "@/components/site/LeadForm";
import { Toaster } from "sonner";
import { CheckCircle, ChevronRight } from "lucide-react";


function useServiceSchema(title: string, price: string, url: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://mskasfalt.ru/" },
          { "@type": "ListItem", "position": 2, "name": title, "item": url }
        ]
      },
      {
        "@type": "Service",
        "name": title,
        "provider": { "@type": "LocalBusiness", "name": "МСК АСФАЛЬТ", "@id": "https://mskasfalt.ru/#org" },
        "areaServed": { "@type": "State", "name": "Москва и Московская область" },
        "offers": { "@type": "Offer", "priceCurrency": "RUB", "price": price.replace(/[^\d]/g, "") || "590" }
      }
    ]
  });
}

export interface ServicePageProps {
  title: string;
  h1: string;
  description: string;
  price: string;
  unit?: string;
  features: string[];
  process: { step: string; text: string }[];
  faq: { q: string; a: string }[];
  seoText: string;
  breadcrumb: string;
}

export function ServicePageLayout({
  h1,
  description,
  price,
  unit = "м²",
  features,
  process,
  faq,
  seoText,
  breadcrumb,
}: ServicePageProps) {
  const schemaJson = useServiceSchema(
    h1,
    price,
    typeof window !== "undefined" ? window.location.href : "https://mskasfalt.ru/"
  );

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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link to="/" className="hover:text-white/70 transition-colors">Главная</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-white/60">{breadcrumb}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[#7CEB8A] mb-4">
                  Асфальтирование под ключ
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{h1}</h1>
                <p className="mt-4 text-white/65 text-lg max-w-xl">{description}</p>

                <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl bg-white/10 px-6 py-4 border border-white/15">
                  <span className="text-3xl font-bold text-[#7CEB8A]">{price}</span>
                  <span className="text-white/50 text-sm">/ {unit}</span>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {features.map((f) => (
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

        {/* Process */}
        <section className="py-16 sm:py-20 bg-muted/20">
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10">Как мы работаем</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map(({ step, text }, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="size-10 rounded-full bg-primary/10 grid place-items-center text-primary font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <div className="font-semibold mb-1">{step}</div>
                  <div className="text-sm text-muted-foreground">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Text */}
        <section className="py-16 sm:py-20">
          <div className="container-x max-w-4xl">
            <div
              className="text-foreground/70 text-sm sm:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: seoText }}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 bg-muted/20">
          <div className="container-x max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {faq.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border bg-card p-6">
                  <div className="font-semibold mb-2">{q}</div>
                  <div className="text-sm text-muted-foreground">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section
          className="py-16 text-center"
          style={{ background: "linear-gradient(135deg, #0a2016 0%, #0f3028 100%)" }}
        >
          <div className="container-x">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Нужна бесплатная смета?</h2>
            <p className="text-white/60 mb-8">Выезд инженера, замер и расчёт — бесплатно, в день обращения</p>
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
