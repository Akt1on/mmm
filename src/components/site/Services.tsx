import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useCms } from "@/store/cms";
import { maxLink, telLink } from "@/lib/contacts";


const SERVICE_SLUGS: Record<string, string> = {
  s1: "/uslugi/asfaltirovaniye-dorog",
  s2: "/uslugi/asfaltirovaniye-dvorov",
  s3: "/uslugi/asfaltirovaniye-snt",
  s4: "/uslugi/asfaltirovaniye-parkovok",
  s5: "/uslugi/asfaltirovaniye-dorog",
  s6: "/uslugi/trotuarnaya-plitka",
  s7: "/uslugi/trotuarnaya-plitka",
  s8: "/uslugi/yamochnyy-remont",
  s9: "/uslugi/asfaltirovaniye-snt",
  s10: "/uslugi/asfaltirovaniye-dorog",
};

export function Services() {
  const services = useCms((s) => s.services);
  const contacts = useCms((s) => s.contacts);

  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight">
              Полный цикл <span className="text-gradient-brand">благоустройства</span>
            </h2>
          </div>
          <a href={telLink(contacts.phone)} className="inline-flex items-center gap-2 text-primary font-semibold">
            Заказать звонок <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group relative rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-glow-green hover:-translate-y-1 transition-all overflow-hidden overflow-hidden"
              >
                {s.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={s.image} alt="" className="size-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  </div>
                )}
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-gradient-brand-soft opacity-0 blur-2xl group-hover:opacity-30 transition-opacity" />
                <Link to={(SERVICE_SLUGS[s.id] ?? "/") as any} className="absolute inset-0 z-10" aria-label={s.title} />
                <div className="relative">
                  <div className="size-12 rounded-2xl bg-gradient-brand-soft grid place-items-center text-white shadow-soft">
                    <Icon className="size-6" />
                  </div>
                  <h3 className={`mt-5 text-lg font-bold leading-tight ${s.image ? "group-hover:text-white" : "text-foreground"} transition-colors`}>{s.title}</h3>
                  <p className={`mt-2 text-sm line-clamp-3 ${s.image ? "text-muted-foreground group-hover:text-white/85" : "text-muted-foreground"} transition-colors`}>{s.description}</p>
                  {s.priceFrom && (
                    <div className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${s.image ? "text-primary group-hover:text-[color:var(--brand-mint)]" : "text-primary"} transition-colors`}>
                      {s.priceFrom}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
