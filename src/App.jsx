import { useState } from \"react\";
import { Helmet } from \"react-helmet\";
import { motion } from \"framer-motion\";
import { Button } from \"@/components/ui/button\";

// Single-file luxury black website with RU/EN support and video background

const ru = {
  nav: { home: \"Главная\", services: \"Услуги\", contacts: \"Контакты\" },
  praise: \"Пахвала\",
  heroTagline: \"Полировка, шлифовка и реставрация мрамора и гранита премиум-класса\",
  servicesTitle: \"Наши услуги\",
  servicesIntro: \"Полировка, шлифовка, перекодировка и реставрация каменных поверхностей. Ниже — описание процессов и заглушки для фото.\",
  serviceItems: [
    { title: \"Полировка\", body: \"Восстанавливаем зеркальный блеск камня с применением профессиональных алмазных систем.\" },
    { title: \"Шлифовка\", body: \"Удаляем дефекты, выравниваем поверхность, готовим под полировку.\" },
    { title: \"Реставрация\", body: \"Комплексное восстановление сколов, царапин и потёртостей.\" },
    { title: \"Перекодировка (обновление обработки)\", body: \"Смена фактуры или уровня глянца в зависимости от задач интерьера.\" }
  ],
  contactsTitle: \"Контакты\",
  contactsBody: \"Свяжитесь с нами для консультации и расчёта стоимости проекта.\",
  seo: {
    home: { title: \"Gold-Mramor — Полировка и реставрация мрамора и гранита\", desc: \"Полировка мрамора в Москве, шлифовка мрамора и реставрация гранита в премиальном формате. Профессиональные работы по камню в Москве и Московской области.\" },
    services: { title: \"Услуги — Gold-Mramor\", desc: \"Полировка, шлифовка, реставрация и перекодировка каменных поверхностей. Подробное описание процессов.\" },
    contacts: { title: \"Контакты — Gold-Mramor\", desc: \"Gold-Mramor — связь с мастерами по камню. Консультации и заявки на работы.\" }
  }
};

const en = {
  nav: { home: \"Home\", services: \"Services\", contacts: \"Contacts\" },
  praise: \"Praise\",
  heroTagline: \"Premium marble & granite polishing, grinding and restoration\",
  servicesTitle: \"Our Services\",
  servicesIntro: \"Polishing, grinding, treatment renewal and full-scale stone restoration. Below — process descriptions and placeholder photos.\",
  serviceItems: [
    { title: \"Polishing\", body: \"Restore mirror gloss using professional diamond systems.\" },
    { title: \"Grinding\", body: \"Remove defects, level the surface and prepare for polishing.\" },
    { title: \"Restoration\", body: \"Comprehensive repair of chips, scratches and wear.\" },
    { title: \"Treatment Renewal\", body: \"Change of texture or gloss level tailored to interior needs.\" }
  ],
  contactsTitle: \"Contacts\",
  contactsBody: \"Get in touch for consultation and project pricing.\",
  seo: {
    home: { title: \"Gold-Mramor — Marble & Granite Polishing and Restoration\", desc: \"Professional polishing, grinding and restoration of marble and granite in Moscow and the Moscow region. Luxury craftsmanship and flawless aesthetics.\" },
    services: { title: \"Services — Gold-Mramor\", desc: \"Polishing, grinding, restoration and treatment renewal for stone surfaces.\" },
    contacts: { title: \"Contacts — Gold-Mramor\", desc: \"Gold-Mramor contact details — talk to our stone care specialists.\" }
  }
};

export default function App() {
  const [lang, setLang] = useState(\"ru\");
  const t = lang === \"ru\" ? ru : en;
  const [page, setPage] = useState(\"home\");

  const seo = t.seo[page];

  return (
    <div className=\"relative min-h-screen bg-black text-white\">
      <Helmet>
        <title>{seo.title}</title>
        <meta name=\"description\" content={seo.desc} />
        <meta
          name=\"keywords\"
          content={
            lang === \"ru\"
              ? \"полировка мрамора Москва, шлифовка мрамора Москва, реставрация мрамора, полировка гранита, уход за мрамором\"
              : \"marble polishing Moscow, granite polishing Moscow, marble restoration, stone polishing services\"
          }
        />
        <html lang={lang} />
      </Helmet>

      <video
        className=\"fixed inset-0 w-full h-full object-cover opacity-60\"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src=\"/video/background-placeholder.mp4\" type=\"video/mp4\" />
      </video>

      <div className=\"relative z-10 flex flex-col min-h-screen\">
        <header className=\"flex items-center justify-between px-8 py-4\">
          <nav className=\"flex gap-6\">
            {[\"home\", \"services\", \"contacts\"].map((key) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={\`text-sm uppercase tracking-wide hover:opacity-80 transition \${page === key ? \"font-semibold\" : \"font-light\"}\`}
              >
                {t.nav[key]}
              </button>
            ))}
          </nav>

          <div className=\"cursor-pointer\" onClick={() => setPage(\"home\")}>
            <motion.div whileHover={{ scale: 1.05 }} className=\"rounded-2xl px-4 py-2 bg-white/10 backdrop-blur\">
              <span className=\"text-lg font-semibold tracking-wider\">GOLD-MRAMOR</span>
            </motion.div>
          </div>
        </header>

        <div className=\"absolute top-4 left-1/2 -translate-x-1/2 flex gap-2\">
          <Button variant=\"secondary\" className=\"rounded-2xl px-3 py-1\" onClick={() => setLang(\"ru\")}>RU</Button>
          <Button variant=\"secondary\" className=\"rounded-2xl px-3 py-1\" onClick={() => setLang(\"en\")}>EN</Button>
        </div>

        <main className=\"flex-1 flex items-center justify-center px-6\">
          {page === \"home\" && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className=\"max-w-4xl mx-auto text-center space-y-10\"
            >
              <div className=\"space-y-6\">
                <h1 className=\"text-4xl md:text-5xl font-light\">{t.praise}</h1>
                <p className=\"text-lg md:text-xl font-light opacity-90\">{t.heroTagline}</p>
              </div>

              <div className=\"grid md:grid-cols-3 gap-4\">
                <div className=\"rounded-2xl bg-white/10 backdrop-blur p-4\">
                  <h3 className=\"text-lg font-semibold mb-1\">Премиальное качество</h3>
                  <p className=\"text-sm opacity-90\">Работа с элитными объектами Москвы и области. Строгий контроль результата.</p>
                </div>
                <div className=\"rounded-2xl bg-white/10 backdrop-blur p-4\">
                  <h3 className=\"text-lg font-semibold mb-1\">Профессиональные технологии</h3>
                  <p className=\"text-sm opacity-90\">Алмазные системы полировки и сертифицированные материалы.</p>
                </div>
                <div className=\"rounded-2xl bg-white/10 backdrop-blur p-4\">
                  <h3 className=\"text-lg font-semibold mb-1\">Опыт и ответственность</h3>
                  <p className=\"text-sm opacity-90\">Аккуратность, сохранность интерьеров и соблюдение сроков.</p>
                </div>
              </div>

              <div className=\"rounded-2xl bg-white/10 backdrop-blur p-6 text-left max-w-2xl mx-auto\">
                <h3 className=\"text-xl font-semibold mb-2\">{lang === \"en\" ? 'Submit a request' : 'Оставить заявку'}</h3>
                <p className=\"text-sm opacity-80 mb-4\">{lang === \"en\" ? 'We work in Moscow and the Moscow region. Leave your contacts — we will call you back and calculate the cost.' : 'Мы работаем по Москве и Московской области. Оставьте контакты — перезвоним и рассчитаем стоимость работ.'}</p>
                <form
                  className=\"grid gap-3\"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const name = form.name?.value || '';
                    const phone = form.phone?.value || '';
                    const task = form.task?.value || '';
                    const subject = encodeURIComponent(lang === 'en' ? 'Request from GOLD-MRAMOR website' : 'Заявка с сайта GOLD-MRAMOR');
                    const body = encodeURIComponent(
                      lang === 'en'
                        ? `Name: ${name}\nPhone / WhatsApp: ${phone}\nTask: ${task}`
                        : `Имя: ${name}\nТелефон / WhatsApp: ${phone}\nЗадача: ${task}`
                    );
                    window.location.href = `mailto:gold-mramor@mail.ru?subject=${subject}&body=${body}`;
                  }}
                >
                  <input name=\"name\" className=\"rounded-xl bg-black/40 border border-white/20 px-3 py-2\" placeholder={lang === 'en' ? 'Your name' : 'Ваше имя'} />
                  <input name=\"phone\" className=\"rounded-xl bg-black/40 border border-white/20 px-3 py-2\" placeholder={lang === 'en' ? 'Phone / WhatsApp' : 'Телефон / WhatsApp'} />
                  <textarea name=\"task\" className=\"rounded-xl bg-black/40 border border-white/20 px-3 py-2\" placeholder={lang === 'en' ? 'Describe your request briefly' : 'Кратко опишите задачу'}></textarea>
                  <Button type=\"submit\" className=\"rounded-2xl px-4 py-2\">{lang === 'en' ? 'Send request' : 'Отправить заявку'}</Button>
                </form>
              </div>
            </motion.section>
          )}

          {page === \"services\" && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=\"w-full max-w-5xl space-y-8\"
            >
              <h2 className=\"text-3xl font-light\">{t.servicesTitle}</h2>
              <p className=\"opacity-90 max-w-3xl\">{t.servicesIntro}</p>
              <div className=\"grid md:grid-cols-2 gap-6\">
                {t.serviceItems.map((s, i) => (
                  <div key={i} className=\"rounded-2xl bg-white/10 backdrop-blur p-4 shadow\">
                    <div className=\"aspect-video rounded-xl bg-black/50 border border-white/10 mb-3 flex items-center justify-center\">
                      <span className=\"opacity-60\">PHOTO — Placeholder</span>
                    </div>
                    <h3 className=\"text-xl font-semibold mb-1\">{s.title}</h3>
                    <p className=\"opacity-90 text-sm\">{s.body}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {page === \"contacts\" && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=\"max-w-3xl space-y-6\"
            >
              <h2 className=\"text-3xl font-light\">{t.contactsTitle}</h2>
              <p className=\"opacity-90\">{t.contactsBody}</p>
              <div className=\"grid gap-3\">
                <div className=\"rounded-2xl bg-white/10 backdrop-blur p-4\">
                  <p>Email: gold-mramor@mail.ru</p>
                  <p>Phone / WhatsApp: +7 963 652 45 45</p>
                  <p>Region: Москва и Московская область</p>
                </div>
              </div>
            </motion.section>
          )}
        </main>

        <footer className=\"px-8 py-6 text-xs opacity-70\">
          © {new Date().getFullYear()} GOLD-MRAMOR. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
