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
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "МСК АСФАЛЬТ — асфальтирование дорог и дворов в Москве и МО" },
      {
        name: "description",
        content:
          "Асфальтирование под ключ в Москве и Московской области. Дороги, дворы, парковки, СНТ. Своя техника, материалы по ГОСТ, гарантия до 5 лет.",
      },
      { property: "og:title", content: "МСК АСФАЛЬТ — асфальтирование под ключ" },
      { property: "og:description", content: "Дороги, дворы, парковки. Гарантия до 5 лет." },
      { property: "og:type", content: "website" },
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
        <Contacts />
      </main>
      <SiteFooter />
      <MobileCta />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </div>
  );
}
