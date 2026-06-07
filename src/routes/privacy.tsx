import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — МСК АСФАЛЬТ" },
      { name: "description", content: "Политика обработки персональных данных компании МСК АСФАЛЬТ в соответствии с 152-ФЗ." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-x py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          ← На главную
        </Link>

        <h1 className="text-3xl font-bold mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности регулирует порядок обработки персональных данных
              пользователей сайта <strong>mskasfalt.ru</strong> (далее — Сайт), осуществляемой компанией
              МСК АСФАЛЬТ (далее — Оператор) в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Какие данные мы собираем</h2>
            <p>При использовании Сайта Оператор может обрабатывать следующие персональные данные:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты (при наличии)</li>
              <li>Описание объекта (при заполнении формы заявки)</li>
              <li>Технические данные: IP-адрес, данные cookies, браузер, страницы посещения</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Цели обработки данных</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Обработка заявок и обратный звонок</li>
              <li>Подготовка коммерческих предложений и смет</li>
              <li>Улучшение работы Сайта и анализ статистики посещаемости</li>
              <li>Соблюдение требований законодательства РФ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Cookies</h2>
            <p>
              Сайт использует файлы cookies для корректной работы и анализа аудитории (Яндекс.Метрика).
              Вы можете отключить cookies в настройках браузера. При этом часть функций Сайта может быть недоступна.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Передача данных третьим лицам</h2>
            <p>
              Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных
              действующим законодательством РФ. Технические сервисы (Яндекс.Метрика) обрабатывают данные
              в соответствии со своими политиками конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Хранение и защита данных</h2>
            <p>
              Оператор принимает необходимые организационные и технические меры для защиты персональных
              данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
              Данные хранятся не дольше, чем необходимо для достижения целей обработки.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Права субъектов персональных данных</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Получить информацию об обработке ваших персональных данных</li>
              <li>Потребовать уточнения, блокировки или уничтожения данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Обратиться с жалобой в Роскомнадзор</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Контакты оператора</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:<br />
              <strong>МСК АСФАЛЬТ</strong><br />
              Телефон: <a href="tel:+79138263070" className="text-primary hover:underline">+7 913 826-30-70</a><br />
              Адрес: МКАД 41 км, БЦ «Технопарк», Москва
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Изменения политики</h2>
            <p>
              Оператор вправе вносить изменения в настоящую Политику. Актуальная версия всегда
              доступна на странице <strong>mskasfalt.ru/privacy</strong>.
              Последнее обновление: июнь 2026 г.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
