import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Контакты", href: "#contact" },
];

const ADVANTAGES = [
  {
    icon: "ShieldCheck",
    title: "Надёжность",
    desc: "Более 15 лет на рынке. Каждый проект выполняем в срок и в соответствии с договором.",
  },
  {
    icon: "TrendingUp",
    title: "Результат",
    desc: "Нацелены на измеримый результат для вашего бизнеса, а не просто на выполнение задач.",
  },
  {
    icon: "Users",
    title: "Команда",
    desc: "Опытные специалисты с профильным образованием и успешными кейсами в вашей отрасли.",
  },
  {
    icon: "Handshake",
    title: "Партнёрство",
    desc: "Выстраиваем долгосрочные отношения — ваш успех является нашим главным приоритетом.",
  },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "var(--cream)" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b"
        style={{ backgroundColor: "var(--navy)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <span
              className="text-xs font-body font-medium tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              ПАО «Россети Центр»
            </span>
            <span
              className="text-lg font-display font-semibold tracking-wide"
              style={{ color: "var(--gold)" }}
            >
              «Липецкэнерго»
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors duration-200 font-body"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Связаться
          </button>
        </div>

        <button
          className="md:hidden"
          style={{ color: "white" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-white text-2xl font-display tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-4 px-8 py-3 text-base font-medium tracking-widest uppercase"
            style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
          >
            Связаться
          </button>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <div
          className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "rgba(201,168,76,0.04)", transform: "translate(-50%, 50%)" }}
        />

        <div className="container mx-auto px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 animate-[fade-up_0.6s_ease_forwards]">
              <span className="divider-gold" />
              <span
                className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                style={{ color: "var(--gold)" }}
              >
                ПАО «Россети Центр» — «Липецкэнерго»
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl font-display font-light leading-none text-white mb-6"
              style={{ animation: "fade-up 0.7s ease 0.1s forwards", opacity: 0 }}
            >
              Ищем
              <br />
              <em className="not-italic font-semibold" style={{ color: "var(--gold)" }}>
                сотрудников
              </em>
              <br />
              в организацию.
            </h1>

            <p
              className="text-white/60 text-lg font-body font-light leading-relaxed max-w-xl mb-10"
              style={{ animation: "fade-up 0.7s ease 0.25s forwards", opacity: 0 }}
            >
              Ищем сотрудников для работы в организации.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fade-up 0.7s ease 0.4s forwards", opacity: 0 }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
              >
                Оставить заявку
              </button>
              <button
                onClick={() => scrollTo("#about")}
                className="px-8 py-4 text-sm font-medium tracking-widest uppercase border transition-all duration-200 hover:border-white/60"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span className="text-xs tracking-widest uppercase font-body">Прокрутите</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="divider-gold" />
                <span
                  className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  О компании
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-display font-light leading-tight mb-6"
                style={{ color: "var(--navy)" }}
              >
                Ваш надёжный
                <br />
                <em className="not-italic font-semibold">бизнес-партнёр</em>
              </h2>
              <p className="font-body font-light leading-relaxed mb-6" style={{ color: "#4b5563" }}>
                Наша компания специализируется на предоставлении высококачественных
                профессиональных услуг для бизнеса любого масштаба. Мы берём на себя
                ключевые задачи, позволяя вам сосредоточиться на главном.
              </p>
              <p className="font-body font-light leading-relaxed" style={{ color: "#4b5563" }}>
                За годы работы мы выстроили репутацию честного и компетентного партнёра,
                которому доверяют ведущие компании страны.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Клиентов" },
                { value: "15", label: "Лет опыта" },
                { value: "98%", label: "Довольных" },
                { value: "24/7", label: "Поддержка" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 flex flex-col gap-2 border bg-white"
                  style={{ borderColor: "rgba(15,34,64,0.12)" }}
                >
                  <span
                    className="text-4xl font-display font-semibold"
                    style={{ color: "var(--navy)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm tracking-wider uppercase font-body" style={{ color: "#9ca3af" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-28" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="divider-gold" />
              <span
                className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                style={{ color: "var(--gold)" }}
              >
                Почему мы
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="text-5xl font-display font-light text-white">
              Наши{" "}
              <em className="not-italic font-semibold" style={{ color: "var(--gold)" }}>
                преимущества
              </em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="p-10 flex flex-col gap-5 transition-colors duration-300"
                style={{ backgroundColor: "rgba(15,34,64,0.85)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,34,64,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,34,64,0.85)")}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center border"
                  style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                >
                  <Icon name={item.icon} size={22} />
                </div>
                <h3 className="text-xl font-display font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="font-body font-light text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-28" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="divider-gold" />
                <span
                  className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  Обратная связь
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-display font-light leading-tight mb-6"
                style={{ color: "var(--navy)" }}
              >
                Свяжитесь
                <br />
                <em className="not-italic font-semibold">с нами</em>
              </h2>
              <p className="font-body font-light leading-relaxed mb-10" style={{ color: "#4b5563" }}>
                Оставьте заявку, и наш специалист свяжется с вами в течение одного
                рабочего дня для обсуждения вашего запроса.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Phone", text: "+7 (495) 000-00-00" },
                  { icon: "Mail", text: "info@company.ru" },
                  { icon: "MapPin", text: "Москва, ул. Деловая, 1" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }}
                    >
                      <Icon name={item.icon} size={16} />
                    </div>
                    <span className="font-body text-sm" style={{ color: "#374151" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 border" style={{ borderColor: "rgba(15,34,64,0.12)" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }}
                  >
                    <Icon name="CheckCircle" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold" style={{ color: "var(--navy)" }}>
                    Заявка отправлена
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    Мы получили ваше сообщение и свяжемся<br />с вами в ближайшее время.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs tracking-widest uppercase font-body underline"
                    style={{ color: "var(--gold)" }}
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase font-body mb-2 font-medium"
                      style={{ color: "var(--navy)" }}
                    >
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-body border bg-transparent outline-none"
                      style={{ borderColor: "rgba(15,34,64,0.2)", color: "var(--navy)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--navy)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(15,34,64,0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase font-body mb-2 font-medium"
                      style={{ color: "var(--navy)" }}
                    >
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-body border bg-transparent outline-none"
                      style={{ borderColor: "rgba(15,34,64,0.2)", color: "var(--navy)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--navy)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(15,34,64,0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase font-body mb-2 font-medium"
                      style={{ color: "var(--navy)" }}
                    >
                      Сообщение
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Опишите ваш запрос..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-body border bg-transparent outline-none resize-none"
                      style={{ borderColor: "rgba(15,34,64,0.2)", color: "var(--navy)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--navy)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(15,34,64,0.2)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:opacity-90 mt-2"
                    style={{ backgroundColor: "var(--navy)", color: "white" }}
                  >
                    Отправить заявку
                  </button>

                  <p className="text-xs text-center leading-relaxed font-body" style={{ color: "#9ca3af" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 border-t"
        style={{ backgroundColor: "var(--navy)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-body font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
              ПАО «Россети Центр»
            </span>
            <span className="text-base font-display font-semibold tracking-wide" style={{ color: "var(--gold)" }}>
              «Липецкэнерго»
            </span>
          </div>
          <span className="text-xs tracking-widest font-body" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2024 Все права защищены
          </span>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs tracking-wider uppercase font-body transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}