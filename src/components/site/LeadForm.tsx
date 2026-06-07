import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ phone?: string }>({});

  const validate = () => {
    const e: { phone?: string } = {};
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      e.phone = "Введите корректный номер телефона";
    }
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setState("sending");

    try {
      // Отправка через Telegram Bot API
      // Замените BOT_TOKEN и CHAT_ID на реальные значения
      const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
      const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;

      if (BOT_TOKEN && CHAT_ID) {
        const text =
          `🆕 Новая заявка с сайта mskasfalt.ru\n\n` +
          `👤 Имя: ${form.name || "не указано"}\n` +
          `📞 Телефон: ${form.phone}\n` +
          `📝 Описание: ${form.message || "не указано"}`;

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
        });
      }

      setState("success");
      setForm({ name: "", phone: "", message: "" });
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="size-16 rounded-full bg-primary/15 grid place-items-center">
          <CheckCircle className="size-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-white">Заявка отправлена!</h3>
        <p className="text-white/60 max-w-xs">
          Инженер свяжется с вами в течение 10 минут в рабочее время (8:00–22:00).
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 text-sm text-white/50 hover:text-white underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-[32px] p-8 space-y-5"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      <div>
        <h3 className="text-xl font-bold text-white">Оставить заявку</h3>
        <p className="text-sm text-white/50 mt-1">Перезвоним в течение 10 минут</p>
      </div>

      <div className="space-y-3">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(33,160,56,0.8)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={form.phone}
            onChange={(e) => {
              setForm((p) => ({ ...p, phone: e.target.value }));
              if (errors.phone) setErrors({});
            }}
            className="w-full rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: errors.phone ? "1px solid rgba(239,68,68,0.8)" : "1px solid rgba(255,255,255,0.15)",
            }}
            onFocus={(e) => {
              if (!errors.phone) e.currentTarget.style.borderColor = "rgba(33,160,56,0.8)";
            }}
            onBlur={(e) => {
              if (!errors.phone) e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1 pl-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Опишите объект (площадь, адрес, тип работ)"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            rows={3}
            className="w-full rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all resize-none"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(33,160,56,0.8)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
          />
        </div>
      </div>

      {state === "error" && (
        <p className="text-sm text-red-400">Ошибка отправки. Позвоните нам напрямую: +7 913 826-30-70</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={state === "sending"}
        className="w-full flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, #21A038 0%, #008C44 100%)" }}
      >
        {state === "sending" ? (
          <span className="animate-pulse">Отправляем...</span>
        ) : (
          <>
            <Send className="size-4" />
            Отправить заявку
          </>
        )}
      </button>

      <p className="text-xs text-white/30 text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-white/60">
          политикой конфиденциальности
        </a>
      </p>
    </div>
  );
}
