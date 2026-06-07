import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useCms } from "@/store/cms";
import { Link } from "@tanstack/react-router";

// Districts that have dedicated geo pages
const GEO_SLUGS: Record<string, string> = {
  "Балашиха": "/asfaltirovanie/balashiha",
  "Химки": "/asfaltirovanie/himki",
  "Мытищи": "/asfaltirovanie/mytishchi",
  "Королёв": "/asfaltirovanie/korolev",
  "Подольск": "/asfaltirovanie/podolsk",
  "Люберцы": "/asfaltirovanie/lyubertsy",
  "Красногорск": "/asfaltirovanie/krasnogorsk",
  "Одинцово": "/asfaltirovanie/odintsovo",
  "Домодедово": "/asfaltirovanie/domodedovo",
  "Истра": "/asfaltirovanie/istra",
};

export function Geography() {
  const districts = useCms((s) => s.districts);
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">География</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Работаем по <span className="text-gradient-brand">Москве и МО</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Выезжаем на объект в любой район в радиусе 200 км от МКАД. Логистика отлажена, техника всегда в работе.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {districts.map((d, i) => {
                const slug = GEO_SLUGS[d.name];
                const inner = (
                  <>
                    <MapPin className="size-4 text-primary flex-shrink-0" />
                    <span className="truncate">{d.name}</span>
                    {slug && (
                      <span className="ml-auto text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    )}
                  </>
                );
                return (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i % 6) * 0.04 }}
                  >
                    {slug ? (
                      <Link
                        to={slug as any}
                        className="group rounded-2xl bg-card border border-border shadow-card px-4 py-3 flex items-center gap-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:shadow-glow-green transition-all"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className="rounded-2xl bg-card border border-border shadow-card px-4 py-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                        {inner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
