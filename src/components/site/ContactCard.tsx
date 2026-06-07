import { Phone, MessageCircle } from "lucide-react";
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

/**
 * Карточка с контактами — замена формы заявки.
 * Выводит телефон, MAX, WhatsApp, Telegram.
 */
export function ContactCard() {
  const c = useCms((s) => s.contacts);
  const tgLink = c.telegram ? telegramLink(c.telegram) : "";
  const waLink = c.whatsapp ? whatsappLink(c.whatsapp) : "";

  return (
    <div
      className="rounded-[32px] p-8 space-y-4"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div>
        <h3 className="text-xl font-bold text-white">Связаться с нами</h3>
        <p className="text-sm text-white/50 mt-1">Позвоните или напишите — ответим сразу</p>
      </div>

      {/* Phone */}
      <a
        href={telLink(c.phone)}
        className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all hover:scale-[1.02]"
        style={{ background: "linear-gradient(135deg, #21A038 0%, #008C44 100%)" }}
      >
        <div className="size-11 rounded-xl bg-white/20 grid place-items-center text-white flex-shrink-0">
          <Phone className="size-5" />
        </div>
        <div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Телефон</div>
          <div className="text-lg font-bold text-white">{c.phoneDisplay}</div>
        </div>
      </a>

      {/* MAX */}
      <a
        href={maxLink(c.phone)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 rounded-2xl px-5 py-4 transition-all hover:scale-[1.02]"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          className="size-11 rounded-xl grid place-items-center text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #0098F8 0%, #7CEB8A 100%)" }}
        >
          <MessageCircle className="size-5" />
        </div>
        <div>
          <div className="text-xs text-white/50 uppercase tracking-wider">Мессенджер</div>
          <div className="text-base font-bold text-white">Написать в MAX</div>
        </div>
      </a>

      {/* WhatsApp + Telegram */}
      <div className="grid grid-cols-2 gap-3">
        {waLink ? (
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl px-4 py-4 transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, rgba(37,211,102,0.18) 0%, rgba(37,211,102,0.08) 100%)",
              border: "1px solid rgba(37,211,102,0.35)",
            }}
          >
            <div
              className="size-9 rounded-xl grid place-items-center text-white flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
            >
              <WhatsAppIcon />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Мессенджер</div>
              <div className="text-sm font-bold text-white">WhatsApp</div>
            </div>
          </a>
        ) : (
          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-4 opacity-40 cursor-default"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.15)" }}
          >
            <div className="size-9 rounded-xl grid place-items-center text-white/40 flex-shrink-0 bg-white/10">
              <WhatsAppIcon />
            </div>
            <div>
              <div className="text-xs text-white/30 uppercase tracking-wider">Мессенджер</div>
              <div className="text-sm font-semibold text-white/40">WhatsApp</div>
            </div>
          </div>
        )}

        {tgLink ? (
          <a
            href={tgLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl px-4 py-4 transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, rgba(0,136,204,0.18) 0%, rgba(0,136,204,0.08) 100%)",
              border: "1px solid rgba(0,136,204,0.35)",
            }}
          >
            <div
              className="size-9 rounded-xl grid place-items-center text-white flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0088CC 0%, #0055AA 100%)" }}
            >
              <TelegramIcon />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Мессенджер</div>
              <div className="text-sm font-bold text-white">Telegram</div>
            </div>
          </a>
        ) : (
          <div
            className="flex items-center gap-3 rounded-2xl px-4 py-4 opacity-40 cursor-default"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.15)" }}
          >
            <div className="size-9 rounded-xl grid place-items-center text-white/40 flex-shrink-0 bg-white/10">
              <TelegramIcon />
            </div>
            <div>
              <div className="text-xs text-white/30 uppercase tracking-wider">Мессенджер</div>
              <div className="text-sm font-semibold text-white/40">Telegram</div>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-white/30 text-center pt-1">
        Работаем ежедневно с 8:00 до 22:00
      </p>
    </div>
  );
}
