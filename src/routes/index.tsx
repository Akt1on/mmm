import { createFileRoute } from "@tanstack/react-router";
import { useCms } from "@/store/cms";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Advantages } from "@/components/site/Advantages";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Prices } from "@/components/site/Prices";
import { Reviews } from "@/components/site/Reviews";
import { WhyUs } from "@/components/site/WhyUs";
import { Geography } from "@/components/site/Geography";
import { Contacts } from "@/components/site/Contacts";
import { CookieBanner } from "@/components/site/CookieBanner";
import { MobileCta } from "@/components/site/MobileCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SeoText } from "@/components/site/SeoText";
import { FaqSection } from "@/components/site/FaqSection";

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Сколько стоит асфальтирование в Москве?",
      "acceptedAnswer": { "@type": "Answer", "text": "Стоимость асфальтирования в Москве и МО от 540 ₽/м² для СНТ и дачных дорог, от 590 ₽/м² для дорог и дворов, от 660 ₽/м² для парковок. Ямочный ремонт — от 1 800 ₽/м². Точная цена рассчитывается бесплатно при выезде инженера." }
    },
    {
      "@type": "Question",
      "name": "Как долго укладывается асфальт?",
      "acceptedAnswer": { "@type": "Answer", "text": "Бригада с асфальтоукладчиком укладывает 1 000–1 500 м² в смену. Стандартный объект 500–2 000 м² выполняется за 1–3 рабочих дня с учётом подготовки основания." }
    },
    {
      "@type": "Question",
      "name": "Какая гарантия на асфальтирование?",
      "acceptedAnswer": { "@type": "Answer", "text": "МСК АСФАЛЬТ даёт письменную гарантию до 5 лет на все виды асфальтобетонных покрытий. На ямочный ремонт — 2 года. Гарантийные обязательства фиксируются в договоре." }
    },
    {
      "@type": "Question",
      "name": "Выезжаете ли вы за пределы МКАД?",
      "acceptedAnswer": { "@type": "Answer", "text": "Да, работаем по всей Московской области в радиусе 200 км от МКАД: Балашиха, Химки, Мытищи, Подольск, Одинцово, Домодедово и другие города. Дополнительная плата за выезд не взимается при объёме от 300 м²." }
    },
    {
      "@type": "Question",
      "name": "Можно ли делать асфальтирование зимой?",
      "acceptedAnswer": { "@type": "Answer", "text": "Укладку горячей асфальтобетонной смеси производим при температуре воздуха не ниже +5°C. Активный сезон — с апреля по ноябрь. Зимой выполняем ямочный ремонт холодным асфальтом и принимаем заявки на весну." }
    }
  ]
});

import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Москве и МО под ключ — МСК АСФАЛЬТ | Цена от 540 ₽/м²" },
      {
        name: "description",
        content:
          "Асфальтирование дорог, дворов, парковок и СНТ в Москве и МО. Цена от 540 ₽/м². Своя техника, ГОСТ, гарантия 5 лет. Выезд инженера и смета — бесплатно. ☎ +7 913 826-30-70",
      },
      { property: "og:title", content: "МСК АСФАЛЬТ — асфальтирование под ключ в Москве и МО" },
      { property: "og:description", content: "Асфальтирование дорог, дворов, парковок и СНТ. Цена от 540 ₽/м². Гарантия до 5 лет." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mskasfalt.ru/" },
    ],
  }),
  component: Index,
});

/**
 * Lightweight skeleton shown while CMS data loads from Supabase.
 * Prevents the "flash of default Unsplash images" bug.
 */
function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="h-16 bg-card border-b border-border" />
      <div className="min-h-[100svh] bg-gradient-hero flex items-center justify-center">
        <div className="container-x w-full grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="h-8 w-48 rounded-full bg-white/20" />
            <div className="space-y-3">
              <div className="h-14 w-3/4 rounded-2xl bg-white/20" />
              <div className="h-14 w-1/2 rounded-2xl bg-white/20" />
            </div>
            <div className="h-6 w-2/3 rounded-xl bg-white/15" />
            <div className="flex gap-3">
              <div className="h-14 w-40 rounded-full bg-white/20" />
              <div className="h-14 w-44 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="h-64 rounded-[36px] bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const loaded = useCms((s) => s.loaded);

  // Block render until Supabase data is ready — prevents flash of hardcoded defaults
  if (!loaded) return <PageSkeleton />;

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <TrustedBy />
        <Advantages />
        <Services />
        <Portfolio />
        <Prices />
        <Reviews />
        <WhyUs />
        <Geography />
        <SeoText />
        <FaqSection />
        <Contacts />
      </main>
      <SiteFooter />
      <MobileCta />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </div>
  );
}
