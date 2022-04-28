(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{692:function(v,_,p){"use strict";p.r(_);var r=p(47),t=Object(r.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("p",[v._v("МІНІСТЕРСТВО ОСВІТИ І НАУКИ УКРАЇНИ")]),v._v(" "),p("p",[v._v("Національний Технічний Університет України")]),v._v(" "),p("p",[v._v("«Київський Політехнічний Інститут»")]),v._v(" "),p("p",[v._v("Факультет інформатики та обчислювальної техніки")]),v._v(" "),p("p",[v._v("Кафедра обчислювальної техніки")]),v._v(" "),p("p",[p("strong",[v._v("Лабораторна робота №4")])]),v._v(" "),p("p",[v._v("з дисципліни «Організація баз даних»")]),v._v(" "),p("p",[p("strong",[v._v("на тему: «Розробка реляційної схеми»")])]),v._v(" "),p("p",[p("strong",[v._v("Виконала:")])]),v._v(" "),p("p",[v._v("студентка 2-го курсу ФІОТ")]),v._v(" "),p("p",[v._v("групи ІО-з01")]),v._v(" "),p("p",[v._v("Манзенко С.С.")]),v._v(" "),p("p",[v._v("Залікова книжка №0111")]),v._v(" "),p("p",[p("strong",[v._v("Перевірив:")])]),v._v(" "),p("p",[v._v("Доцент")]),v._v(" "),p("p",[v._v("Кандидат технічних наук")]),v._v(" "),p("p",[v._v("Болдак О.А")]),v._v(" "),p("p",[p("strong",[v._v("Київ – 2022")])]),v._v(" "),p("p",[v._v("**МЕТА:**Вивчення структури реляційних таблиць. Методи створення реляційної таблиці.")]),v._v(" "),p("p",[p("strong",[v._v("ДОВІДКА")])]),v._v(" "),p("p",[p("strong",[v._v("Реляційна модель даних")]),v._v(" — логічна модель даних, що описує:")]),v._v(" "),p("ul",[p("li",[v._v("структури даних у вигляді наборів відношень, що, можливо, змінюються в часі;")]),v._v(" "),p("li",[v._v("теоретико-множинні операції над даними: об'єднання, перетин, різниця і декартів добуток;")]),v._v(" "),p("li",[v._v("спеціальні реляційні операції: селекція, проекція, з'єднання і розподіл;")]),v._v(" "),p("li",[v._v("а також спеціальні правила, що забезпечують цілісність даних.")])]),v._v(" "),p("p",[v._v("Обробка даних в реляційній моделі ґрунтується на принципах реляційної алгебри.")]),v._v(" "),p("p",[v._v("Реляційна база даних — основана на реляційній моделі даних. Для роботи з реляційними БД застосовують реляційні СКБД. Інакше кажучи, реляційна база даних — це база даних, яка сприймається користувачем як набір нормалізованих відношень різного ступеню.")]),v._v(" "),p("p",[p("strong",[v._v("Відношення")]),v._v(" має просту графічну інтерпретацію, воно може буде представлене у вигляді таблиці, стовпці (поля, атрибути) якої відповідають входженням доменів у відношення, а рядки (записи, кортежі) - наборам з n значень, що взяті з початкових доменів. Кількість рядків n, називають кардинальним числом відношення, або потужністю відношення.")]),v._v(" "),p("p",[v._v("Така таблиця має ряд властивостей:")]),v._v(" "),p("ul",[p("li",[v._v("В таблиці немає двох однакових рядків.")]),v._v(" "),p("li",[v._v("Таблиця має стовпці, відповідні атрибутам відношення.")]),v._v(" "),p("li",[v._v("Кожний атрибут у відношенні має унікальне ім'я.")]),v._v(" "),p("li",[v._v("Порядок рядків в таблиці довільний.")])]),v._v(" "),p("p",[p("em",[p("strong",[v._v("Заголовок (схема) відношення")])]),v._v(" — скінченна множина впорядкованих пар виду <A, T>, де A називається іменем атрибута, а T означає ім'я деякого базового типу або раніше визначеного домену. Всі імена атрибутів в заголовку мають бути різними.")]),v._v(" "),p("p",[p("em",[p("strong",[v._v("Кортеж,")])]),v._v(" відповідний заголовку — множина впорядкованих триплетів <A, T, v>, по одному такому триплету для кожного атрибута в заголовку. Третій елемент – v – триплета <A, T, v> має бути дозволеним значенням типу даних або домена T. Через те, що імена атрибутів унікальні, вказувати домен в кортежі зайве.")]),v._v(" "),p("p",[p("em",[p("strong",[v._v("Тіло відношення")])]),v._v(" — невпорядкована множина різних кортежів.")]),v._v(" "),p("p",[v._v("Реляційна таблиця має поля ID (ідентифікатор), тип даних, ключ. Зв’язки створюються між первинним ключем (PK) и зовнішнім (FK). Зв'язок йде від вторинного до первинного.")]),v._v(" "),p("p",[p("strong",[v._v("Приклад")])]),v._v(" "),p("p",[p("img",{attrs:{src:"lab4.001.png",alt:""}})]),v._v(" "),p("p",[p("em",[p("strong",[v._v("Реляційна алгебра")])]),v._v(" — відгалуження логіки першого порядку, множина відношень замкнених операторами. Оператори застосовуються до відношень, в результаті застосування отримується нове відношення.")]),v._v(" "),p("p",[v._v("В математиці, алгебра відношень є алгебраїчною структурою щодо математичної логіки та теорії множин.")]),v._v(" "),p("p",[v._v("Подібно до інших алгебр, деякі оператори є примітивними, а інші, будучи визначені через примітивні, є похідними від них. В реляційній алгебрі Кодда визначено такі шість примітивних операторів: вибірка, проекція, декартів добуток, об'єднання та різниця і перейменування.")]),v._v(" "),p("p",[v._v("Шість операторів є фундаментальними в тому сенсі, що жоден із них не можна відкинути без втрати потужності. Багато інших операторів було визначено комбінацією цих шести. Серед найважливіших можна назвати: перетин множин, ділення та природнє об'єднання. Насправді, ISBL дала підстави для заміни декартового добутку природнім об'єднанням, окремим випадком якого є декартів добуток.")]),v._v(" "),p("p",[p("strong",[v._v("Завдання")])]),v._v(" "),p("ol",[p("li",[v._v("Вивчити реляційну модель даних, що вона описує, де використовується.")]),v._v(" "),p("li",[v._v("Побудувати реляційну таблицю:")]),v._v(" "),p("li",[v._v("Виходячи з діаграми бізнес об’єктів побудувати таблицю з відповідними назвами комірок.")]),v._v(" "),p("li",[v._v("Відповідно до назви комірки назначити відповідний тип даних для кожної комірки.")]),v._v(" "),p("li",[v._v("Назначити ключі в кожній таблиці, в яких потрібно створити зв’язки.")]),v._v(" "),p("li",[v._v("Створити відношення між ключами.")])]),v._v(" "),p("p",[p("strong",[v._v("ВИКОНАННЯ ЗАВДАНЬ")])]),v._v(" "),p("p",[v._v("РЕЛЯЦІЙНА СХЕМА")]),v._v(" "),p("p",[p("img",{attrs:{src:"lab4.002.png",alt:""}})]),v._v(" "),p("p",[p("strong",[v._v("Створення таблиць з комірками, які мають відповідні типи даних та створення зв’язків між таблицями представлено нижче.")])]),v._v(" "),p("p",[p("img",{attrs:{src:"lab4.003.png",alt:""}})]),v._v(" "),p("p",[v._v("Для того, щоб забезпечити зв’язок між таблицями створюється унікальна колонка первинного ключа на яку посилається колонка зовнішнього ключа у іншій таблиці.")]),v._v(" "),p("p",[v._v("Таким чином маємо схему internetshop1, яка має таблиці: userAccount, orders, products, orderItems. У замовлення може бути тільки один замовник, тому в orders створюється поле userAccountId, яке посилається через зовнішній ключ на userId(унікальний ідентифікатор користувача).")]),v._v(" "),p("p",[v._v("Таким чином встановлений зв’язок між userAccount та orders.")]),v._v(" "),p("p",[v._v("Між orders та products встановляється зв’язок many to many через таблицю orderItems. Тому що у замовленні може бути багато продуктів, а один і той самий продукт може бути у багатьох замовленнях. Тому у orderItems створюються колонки, які посилаються зовнішніми ключами на колонки orders та products.")]),v._v(" "),p("p",[p("strong",[v._v("Висновки")])]),v._v(" "),p("p",[v._v("Навчилась створювати реляційні таблиці у mysql workbench. Вивчила як реалізовуються зв’язки між таблицями бази даних.")])])}),[],!1,null,null,null);_.default=t.exports}}]);