export const DEFAULT_PHONE = "+79138263070";
export const DEFAULT_PHONE_DISPLAY = "+7 (913) 826-30-70";

// MAX messenger — прямая ссылка на профиль
// Параметр phone оставлен для совместимости с вызовами вида maxLink(contacts.phone)
export const maxLink = (_phone?: string) =>
  "https://max.ru/u/f9LHodD0cOKLOhMvPWCztfpt7K5Urlad_nbFPrnTUqpduNLeliVTernqzV0";

export const telLink = (phone: string) =>
  `tel:${phone.replace(/[^\d+]/g, "")}`;

export const whatsappLink = (phone: string) =>
  `https://wa.me/${phone.replace(/[^\d+]/g, "").replace(/^\+/, "")}`;

export const telegramLink = (username: string) => {
  const clean = username.replace(/^@/, "").trim();
  return clean ? `https://t.me/${clean}` : "";
};
