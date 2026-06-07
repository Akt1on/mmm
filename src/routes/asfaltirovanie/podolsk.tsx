import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/podolsk")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Подольск — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Подольск. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/podolsk/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Подольск"
      cityGenitive="Подольске"
      distance="35 км от МКАД"
      description="Асфальтирование дорог, дворов и парковок в Подольске и Подольском районе. Работаем в Климовске, Щербинке, Дубровицах."
      seoText={`<p>В Подольске и Подольском городском округе компания <strong>МСК АСФАЛЬТ</strong> работает по всем направлениям асфальтирования: от ямочного ремонта до крупных дорожных объектов. Обслуживаем промышленные предприятия Климовска и СНТ Подольского района.</p><p>Цена асфальтирования в Подольске — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
