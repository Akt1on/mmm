import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/krasnogorsk")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Красногорск — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Красногорск. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/krasnogorsk/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Красногорск"
      cityGenitive="Красногорске"
      distance="20 км от МКАД"
      description="Асфальтирование в Красногорске и Красногорском районе. Дороги, дворы, парковки. Работаем в Нахабино, Дедовске, Путилково."
      seoText={`<p>В Красногорске и Красногорском районе МСК АСФАЛЬТ выполняет асфальтирование под ключ. Специализируемся на благоустройстве жилых комплексов Путилково, дорогах в коттеджных посёлках Нахабино и промышленных объектах.</p><p>Цена асфальтирования в Красногорске — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
