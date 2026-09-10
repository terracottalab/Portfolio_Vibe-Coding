# Portfolio — Maria Zemliacheva

Персональный portfolio website.  
Статический сайт: HTML + CSS + JavaScript, без фреймворков и сборщиков.

---

## Как открыть сайт

### Способ 1 — Двойной клик (самый простой)

1. Открой **Finder**
2. Перейди в папку `Desktop → Projects → Portfolio_Vibe Coding`
3. Дважды кликни на файл **index.html**

Сайт откроется в браузере.

### Способ 2 — Команда в терминале

```bash
open ~/Desktop/Projects/Portfolio_Vibe\ Coding/index.html
```

### Способ 3 — Локальный сервер (рекомендуемый)

```bash
cd ~/Desktop/Projects/Portfolio_Vibe\ Coding
python3 -m http.server 8080
```

Затем открой в браузере: **http://localhost:8080**

Чтобы остановить сервер — нажми `Ctrl + C` в терминале.

> **Почему сервер лучше?**  
> Шрифты Google Fonts и переключение языка RU/EN корректнее работают через сервер, а не через прямое открытие файла.

---

## Структура проекта

```
Portfolio_Vibe Coding/
├── index.html              ← Главная страница
├── case-study.html         ← Шаблон case study (проект Norwich Terrier)
├── css/
│   ├── variables.css       — Цвета, шрифты, отступы (design tokens)
│   ├── reset.css           — Сброс стилей
│   ├── base.css            — Типографика, глобальные стили
│   ├── layout.css          — Сетка, контейнеры
│   ├── components.css      — Кнопки, карточки, теги
│   ├── sections.css        — Стили секций (hero, work, about...)
│   ├── case-study.css      — Стили страницы case study
│   └── responsive.css      — Адаптив (планшет, мобильный)
├── js/
│   ├── main.js             — Навигация, мобильное меню
│   ├── animations.js       — Анимации при скролле
│   └── i18n.js             — Переключение RU / EN
└── assets/
    ├── images/
    │   ├── projects/       — Скриншоты проектов
    │   └── portrait/       — Фото
    └── favicon/
        └── favicon.svg     — Иконка сайта
```

---

## Как редактировать

### Текст

Весь контент находится прямо в `index.html`.  
Открой файл в Cursor, найди нужную секцию по комментарию (например `<!-- 03 — ABOUT -->`) и измени текст.

### Переводы (EN)

Английские тексты хранятся в `js/i18n.js` в массиве `map`.  
Каждая запись: `[CSS-селектор, индекс элемента, английский текст]`.

### Контакты

Замени `[PLACEHOLDER]` на реальные данные в трёх местах:
- `index.html` — секция Contact + Footer
- `case-study.html` — Footer

### Скриншоты проектов

1. Положи изображения в `assets/images/projects/`
2. В `index.html` замени `<div class="placeholder-image">` на `<img>`:

```html
<div class="project-card__image">
  <img src="assets/images/projects/имя-файла.jpg" alt="Описание" loading="lazy">
</div>
```

### Цвета и шрифты

Все настройки — в `css/variables.css`. Основные переменные:

| Переменная | Значение | Что это |
|------------|----------|---------|
| `--c-bg` | `#F5F3EF` | Фон сайта |
| `--c-text` | `#1C1C1C` | Основной текст |
| `--c-accent` | `#2B4C7E` | Акцентный цвет (синий) |
| `--c-border` | `#D4D0CA` | Линии и рамки |
| `--f-sans` | Space Grotesk | Основной шрифт |
| `--f-mono` | JetBrains Mono | Моноширинный шрифт |

---

## Добавление нового проекта

1. Скопируй любой блок `<article class="project-card">` в `index.html`
2. Измени номер, название, описание, метаданные
3. Для case study — скопируй `case-study.html`, переименуй и отредактируй

---

## Деплой

Сайт полностью статический — его можно разместить на любом хостинге:

- **GitHub Pages** — бесплатно, привязка домена
- **Netlify** — бесплатно, drag & drop папки
- **Vercel** — бесплатно, автодеплой из Git
- Любой хостинг с поддержкой статических файлов
