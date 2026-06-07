import { Phone, MessageCircle, MapPin, Clock, Building } from "lucide-react";
import { useCms } from "@/store/cms";
import { maxLink, telLink, whatsappLink, telegramLink } from "@/lib/contacts";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.554 4.107 1.523 5.836L0 24l6.338-1.498A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.362l-.358-.213-3.762.888.951-3.67-.234-.376A9.793 9.793 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function Contacts() {
  const c = useCms((s) => s.contacts);
  const tgLink = c.telegram ? telegramLink(c.telegram) : "";
  const waLink = c.whatsapp ? whatsappLink(c.whatsapp) : "";

  return (
    <section
      id="contacts"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a2016 0%, #0f3028 35%, #0d2840 70%, #091e30 100%)",
      }}
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full bg-[#21A038] opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-[400px] rounded-full bg-[#0098F8] opacity-10 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-[#008C44] opacity-5 blur-[140px]" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: heading + contact buttons */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7CEB8A]">Контакты</p>
            <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Готовы посчитать{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #7CEB8A 0%, #21A038 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ваш объект?
              </span>
            </h2>
            <p className="mt-4 text-white/65 max-w-xl">
              Позвоните или напишите — инженер свяжется в течение 10 минут и подготовит смету за 30 минут после выезда.
            </p>

            <div className="mt-8 space-y-3">
              {/* Phone */}
              <a
                href={telLink(c.phone)}
                className="group flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="size-12 rounded-xl grid place-items-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #21A038 0%, #008C44 100%)" }}>
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Телефон</div>
                  <div className="text-lg font-bold text-white">{c.phoneDisplay}</div>
                </div>
              </a>

              {/* MAX */}
              <a
                href={maxLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="size-12 rounded-xl grid place-items-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #0098F8 0%, #7CEB8A 100%)" }}>
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">MAX мессенджер</div>
                  <div className="text-lg font-bold text-white">Написать в MAX</div>
                </div>
              </a>

              {/* WhatsApp + Telegram side by side */}
              <div className="grid grid-cols-2 gap-3">
                {waLink ? (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,211,102,0.18) 0%, rgba(37,211,102,0.08) 100%)",
                      border: "1px solid rgba(37,211,102,0.35)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className="size-10 rounded-xl grid place-items-center text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
                    >
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Мессенджер</div>
                      <div className="text-sm font-bold text-white">WhatsApp</div>
                    </div>
                  </a>
                ) : null}

                {tgLink ? (
                  <a
                    href={tgLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,136,204,0.18) 0%, rgba(0,136,204,0.08) 100%)",
                      border: "1px solid rgba(0,136,204,0.35)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className="size-10 rounded-xl grid place-items-center text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #0088CC 0%, #0055AA 100%)" }}
                    >
                      <TelegramIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Мессенджер</div>
                      <div className="text-sm font-bold text-white">Telegram</div>
                    </div>
                  </a>
                ) : null}

                {/* Fallback placeholders if not configured */}
                {!waLink && (
                  <div
                    className="flex items-center gap-3 rounded-2xl px-5 py-4 opacity-40 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px dashed rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="size-10 rounded-xl grid place-items-center text-white/40 flex-shrink-0 bg-white/10">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 uppercase tracking-wider">Мессенджер</div>
                      <div className="text-sm font-semibold text-white/40">WhatsApp</div>
                    </div>
                  </div>
                )}
                {!tgLink && (
                  <div
                    className="flex items-center gap-3 rounded-2xl px-5 py-4 opacity-40 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px dashed rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="size-10 rounded-xl grid place-items-center text-white/40 flex-shrink-0 bg-white/10">
                      <TelegramIcon />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 uppercase tracking-wider">Мессенджер</div>
                      <div className="text-sm font-semibold text-white/40">Telegram</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: info card */}
          <div className="lg:col-span-6">
            <div
              className="rounded-[32px] p-8 space-y-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="size-10 rounded-xl grid place-items-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(33,160,56,0.25)", border: "1px solid rgba(124,235,138,0.3)" }}
                >
                  <MapPin className="size-4 text-[#7CEB8A]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Адрес офиса</div>
                  <div className="font-semibold text-white mt-0.5">{c.address}</div>
                </div>
              </div>

              <div
                className="h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="size-10 rounded-xl grid place-items-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,152,248,0.2)", border: "1px solid rgba(0,152,248,0.3)" }}
                >
                  <Clock className="size-4 text-[#0098F8]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Время работы</div>
                  <div className="font-semibold text-white mt-0.5">{c.workHours}</div>
                </div>
              </div>

              <div
                className="h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
              />

              <div className="flex items-start gap-4">
                <div
                  className="size-10 rounded-xl grid place-items-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(124,235,138,0.15)", border: "1px solid rgba(124,235,138,0.25)" }}
                >
                  <Building className="size-4 text-[#7CEB8A]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40">Реквизиты</div>
                  <div className="font-semibold text-white mt-0.5">{c.company}</div>
                  <div className="text-sm text-white/50 mt-0.5">ИНН {c.inn}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
