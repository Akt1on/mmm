import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/lyubertsy")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Люберцы — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Люберцы. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/lyubertsy/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Люберцы"
      cityGenitive="Люберцах"
      distance="12 км от МКАД"
      description="Асфальтирование в Люберцах и Люберецком районе. Дороги, дворы, промзоны. Работаем в Котельниках, Дзержинском, Томилино."
      seoText={`<p>МСК АСФАЛЬТ выполняет асфальтирование в Люберцах и Люберецком городском округе. Работаем с ЖК-застройщиками, управляющими компаниями и промышленными предприятиями Котельников и Дзержинского.</p><p>Цена асфальтирования в Люберцах — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
