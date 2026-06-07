import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/odintsovo")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Одинцово — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Одинцово. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/odintsovo/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Одинцово"
      cityGenitive="Одинцово"
      distance="25 км от МКАД"
      description="Асфальтирование в Одинцово и Одинцовском районе. Работаем в Голицыно, Кубинке, Звенигороде. Элитные посёлки и промобъекты."
      seoText={`<p>МСК АСФАЛЬТ выполняет асфальтирование в Одинцово и Одинцовском городском округе. Работаем с элитными коттеджными посёлками по Рублёво-Успенскому и Можайскому шоссе, а также с промышленными объектами Голицыно и Кубинки.</p><p>Цена асфальтирования в Одинцово — <strong>от 540 ₽/м²</strong>. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
