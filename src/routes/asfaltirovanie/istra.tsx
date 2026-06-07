import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/istra")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Истра — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Истра. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/istra/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Истра"
      cityGenitive="Истре"
      distance="45 км от МКАД"
      description="Асфальтирование в Истре и Истринском районе. СНТ, коттеджные посёлки, дороги. Работаем по Волоколамскому и Новорижскому шоссе."
      seoText={`<p>В Истре и Истринском районе МСК АСФАЛЬТ выполняет асфальтирование дорог в СНТ, коттеджных посёлках и садовых товариществах по Волоколамскому и Новорижскому шоссе. Работаем в Дедовске, Снегирях, Новом Иерусалиме.</p><p>Цена асфальтирования в Истре — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
