import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/korolev")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Королёв — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Королёв. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/korolev/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Королёв"
      cityGenitive="Королёве"
      distance="22 км от МКАД"
      description="Асфальтирование дорог и парковок в Королёве. Работаем в Юбилейном, Подлипках, Болшево. Выезд инженера в день обращения."
      seoText={`<p>МСК АСФАЛЬТ выполняет асфальтирование в Королёве (бывший Калининград) и прилегающих районах. Специализируемся на асфальтировании промышленных предприятий, складских комплексов и жилых дворов.</p><p>Цена асфальтирования в Королёве — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
