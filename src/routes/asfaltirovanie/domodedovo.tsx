import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/domodedovo")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Домодедово — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Домодедово. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/domodedovo/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Домодедово"
      cityGenitive="Домодедово"
      distance="35 км от МКАД"
      description="Асфальтирование в Домодедово и Домодедовском районе. Логистические парки, СНТ, дороги. Работаем у аэропорта и в Белых Столбах."
      seoText={`<p>В Домодедово и Домодедовском районе МСК АСФАЛЬТ специализируется на асфальтировании логистических терминалов и складских комплексов в районе аэропорта, а также дорог в СНТ и коттеджных посёлках.</p><p>Цена асфальтирования в Домодедово — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
