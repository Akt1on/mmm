import { createFileRoute } from "@tanstack/react-router";
import { GeoPageLayout } from "@/components/site/GeoPageLayout";

export const Route = createFileRoute("/asfaltirovanie/mytishchi")({
  head: () => ({
    meta: [
      { title: "Асфальтирование в Мытищи — цена от 540 ₽/м² | МСК АСФАЛЬТ" },
      { name: "description", content: "Асфальтирование дорог, дворов, парковок и СНТ в Мытищи. Своя техника, гарантия 5 лет. Цена от 540 ₽/м². Выезд инженера бесплатно. ☎ +7 913 826-30-70" },
      { property: "og:url", content: "https://mskasfalt.ru/asfaltirovanie/mytishchi/" },
    ],
  }),
  component: () => (
    <GeoPageLayout
      city="Мытищи"
      cityGenitive="Мытищах"
      distance="18 км от МКАД"
      description="Асфальтирование в Мытищах и Мытищинском районе. Дороги, дворы, парковки, СНТ. Работаем в Болтино, Пирогово, Тайнинское."
      seoText={`<p>В Мытищах и Мытищинском городском округе компания <strong>МСК АСФАЛЬТ</strong> выполняет полный комплекс работ по асфальтированию. Обслуживаем как городские объекты, так и коттеджные посёлки по Ярославскому шоссе.</p><p>Цена асфальтирования в Мытищах — <strong>от 540 ₽/м²</strong>. Выезд инженера бесплатно. Звоните: <a href='tel:+79138263070'>+7 913 826-30-70</a>.</p>`}
    />
  ),
});
