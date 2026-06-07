import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Сколько стоит асфальтирование в Москве?",
    a: "Стоимость асфальтирования в Москве и МО — от 540 ₽/м² для СНТ и дачных дорог, от 590 ₽/м² для дорог и дворов, от 660 ₽/м² для парковок. Ямочный ремонт — от 1 800 ₽/м². Точная цена рассчитывается бесплатно при выезде инженера.",
  },
  {
    q: "Как долго укладывается асфальт?",
    a: "Бригада с асфальтоукладчиком укладывает 1 000–1 500 м² в смену. Стандартный объект 500–2 000 м² выполняется за 1–3 рабочих дня с учётом подготовки основания.",
  },
  {
    q: "Какая гарантия на асфальтирование?",
    a: "МСК АСФАЛЬТ даёт письменную гарантию до 5 лет на все виды асфальтобетонных покрытий. На ямочный ремонт — 2 года. Гарантийные обязательства фиксируются в договоре.",
  },
  {
    q: "Выезжаете ли вы за пределы МКАД?",
    a: "Да, работаем по всей Московской области в радиусе 200 км от МКАД: Балашиха, Химки, Мытищи, Подольск, Одинцово, Домодедово и другие города. Дополнительная плата за выезд не взимается при объёме от 300 м².",
  },
  {
    q: "Можно ли делать асфальтирование зимой?",
    a: "Укладку горячей асфальтобетонной смеси производим при температуре воздуха не ниже +5°C. Активный сезон — с апреля по ноябрь. Зимой выполняем ямочный ремонт холодным асфальтом и принимаем заявки на весну.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container-x max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
        <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
          Частые <span className="text-gradient-brand">вопросы</span>
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold hover:bg-muted/30 transition-colors"
              >
                <span>{q}</span>
                <ChevronDown
                  className={`size-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
