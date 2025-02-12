﻿МІНІСТЕРСТВО ОСВІТИ І НАУКИ УКРАЇНИ

Національний Технічний Університет України

«Київський Політехнічний Інститут»

Факультет інформатики та обчислювальної техніки

Кафедра обчислювальної техніки





**Лабораторна робота №1**

з дисципліни «Організація баз даних»

**на тему: «Виявлення  вимог до функціональності програми. Розробка запитів зацікавлених осіб»**




**Виконала:**

студентка 2-го курсу ФІОТ

групи ІО-з01

Манзенко С.С.

Залікова книжка №0111

**Перевірив:**

Доцент 

Кандидат технічних наук

Болдак О.А







**Київ – 2022**

**Мета:** вивчення вимог до програмного проекту, структури документів та програмної системи, формування запитів зацікавлених осіб.

**Довідка**

Розробка концептуальної моделі предметної області є першим найважливішим етапом розробки програмної системи, оскільки визначає узагальнене уявлення про інформацію її кінцевих користувачів.

**Визначення цілі, перетворення системи**

База даних є частиною програмної системи, тому для її розробки необхідно проаналізувати вимоги до системи в цілому.

**Послідовність дій:**

1. Аналіз предметної області
1. Формування запитів зацікавлених осіб

**Запити зацікавлених осіб** – це опис вимог різних учасників проекту (замовників, користувачів та ін.) до змісту системи, що містить організаційні (призначення системи), функціональні (можливості системи) та експлуатаційні аспекти.

**Завдання:**

1. Провести аналіз предметної області
1. Визначити коло зацікавлених осіб
1. Визначити призначення розроблюваної системи за структурою списку запитів зацікавлених осіб (компетенції, бізнес-сценарії та ін.)

ВИКОНАННЯ ЗАВДАНЬ

**Аналіз предметної області**

**Аналіз ринку електронної комерції**

![](lab01.001.png)

У випадку даного проекту магазин є онлайн магазином. Даний магазин є спеціалізованим.

![ЛЕКЦІЯ 4. «Електронна комерція як складова електронного бізнесу](lab01.002.png)

При створення інтренет-магазину треба продумати деталі реалізації товару та механізму оплати. Далі загальна інтформація та детальніше про способи оплати.

Об’єктом розробки є інтернет-магазин, зі зручним інтерфейсом для взаємодії із користувачем та базою даних для збереження інформації про товари. Мета розробки інтернет магазину була не тільки у створенні функціональності для ефективного управління даними і взаємодії із користувачем, але й у створенні зручного, адаптивного дизайну самого інтернет магазину для адаптації під розмір екрану не тільки комп’ютерів, але й також мобільних телефонів. У проекті код для UI не має впливу на дані, також зміна даних не впливає на інтерфейс і не може його змінити.

Для зручності інтерфейсу використовуються базові елементи будь-якого інтернет-магазину, тобто навігаційна панель, секція з товарами та футер. Для кожної сторінки інтернет-магазину категорія товару різна.

Дані для заповнення карток товарів на кожній зі сторінок надходять з бази даних чи файлу з даними.

У кожному інтернет-магазині має бути реалізована опція пошуку товарів за назвою чи категорією.

Дизайн має бути простим і сучасним. Фотографії мають бути якісними, але «легкими». Інтерфейс має бути зручним користувача. Мова та валюта у інтернет-магазині мають бути підібрані під користувацьку аудиторію.

**Запит від замовника**

**Зміст**

[Вступ	5](#_Toc101861821)

[**Мета**	5](#_Toc101861822)

[**Контекст**	6](#_Toc101861823)

[Скорочення	6](#_Toc101861824)

[Характеристика ділових процесів	6](#_Toc101861825)

[Короткий огляд продукту	7](#_Toc101861826)

[Практичність	8](#_Toc101861827)

[Надійність	9](#_Toc101861828)

[Продуктивність	9](#_Toc101861829)

[Експлуатаційна придатність	9](#_Toc101861830)


## **Вступ**
Цей документ містить основні відомості про проект «інтернет магазин одягу»

Інтернет-магазин одягу орієнтований під англомовну аудиторію. Ідея магазину – продаж аутлет-колекцій дизайнерських речей за доступною ціною.

Основна аудиторія інтернет-магазину жінки у віці від 20 до 60 років. Дизайн інтернет-магазину має бути сучасним та зручним.

Інтернет-магазин має відповідати наступним критеріям: адаптивність під екрани з різною роздільною здатністю, має бути легким для швидкого завантаження даних, створений швидко та якісно.

Панель адміністратора сайту не обов’язкова. Інтернет-магазин повинен бути зі зручною базою даних. Основний критерій для адміністратора сайту буде вміння працювати з базами даних або знання мови JS.
### **Мета**
Метою є створення зручного для користувача UI та бази даних, яка містить товари. При цьому головною вимогою є окреме існування бази даних від UI, щоб через одне не можна було змінити інше.
### **Контекст**
Цей документ впливає на створення магазину, його загальні характеристики.
## **Скорочення**
1. Brands outlet store – надалі BS або Brands Store.

## **Характеристика ділових процесів**
**НАЗВА:** BRANDS OUTLET STORE – назва інтернет-магазину брендового одягу по доступним цінам. 

**УЧАСНИКИ:** Керівник інтернет-магазину (чи власник),** адміністратор інтернет-магазину, покупці, фасувальники товарів(замовлень).

**ПЕРЕДУМОВИ:** Адміністратор інтернет-магазину заповню є інформацією про товар картки товару у базі даних чи у файлі з даними які у свою чергу будуть використовуватись для відображення покупцеві, покупець замовляє товар, потім інформацію про товар приймає адміністратор і передає фасувальникам, які в свою чергу пакують товар і відправляють покупцеві поштою.

**Результат**

Результатом даної операції є доставка товару покупцеві, покупець оплачує вартість товару накладеним платежем.

**Виключні ситуації**

Замовлень дуже багато – товар закінчується швидше ніж адміністратор встигає видаляти картки з інформацією про товар чи помічати товар як недоступний. 

**Основний сценарій**

1. Покупець передивляється інтернет-магазин та додає товар у корзину. Товари повинні зберігатись там доти, доки він їх не замовить або не видалить із корзини. Покупець має вказати свій номер телефону та електронну пошту для зворотнього зв’язку. Дані про замовлення надходять до адміністратора сайту. Картки товарів мають оновлюватись часто тому всі товари та їх розміри мають бути наявні. Якщо товару немає – адміністратор повинен видалити його із бази даних або файлу даних. Але якщо картку не встигли видалити, товару немає – адміністратор передзвонює покупцю та повідомляє про відсутність товару. Якщо все є скидає на пошту лист про те, що замовлення успішно виконане та реквізити оплати замовлення якщо оплата була обрана онлайн у випадку накладеного платежу оплата проводиться на пошті. У разі успішного виконання попередніх пунктів адміністратор передає інформацію фасувальнику товарів, він у свою чергу пакує товар та відправляє покупцеві.
1. Покупець передивляється інтернет-магазин та додає товар у список бажань. Поки не планує його купляти. Дані про товар повинні зберігатися у кошику доти доки покупець не оформить замовлення або не видалить товар із кошика.
1. Покупець передивляється інтернет-магазин та додає товар до кошика не оформлюючи замовлення. У такому випадку товари мають знаходитись у кошику поки їх не видалить користувач або не оформить замовлення.
## **Короткий огляд продукту**
Користувачі системи – адміністратор інтернет-магазину, покупці. Ідея магазину у тому, щоб зробити недоступне більш доступним. 

Основна категорія покупців – це жінки віком від 20 до 60 років. Дизайн має бути сучасним та мінімалістичним (без плаваючих вікон та анімації) . Інтернет-сайт повинен містить зручний інтерфейс для екранів з різною роздільною здатністю. Зображення товарів мають бути «легкими» для швидкого завантаження сторінок, але якість повинна бути високою.

Адміністратор інтернет-магазину повинен розбиратися у базах даних чи у мові JS для того, щоб змогти заповнити інформацію про товари.

**Функціональність**

Функціональні вимоги до створення інтернет-магазину є адаптивний дизайн, файл з даними або база даних, яка існує окремо від UI, наявність пошуку по категоріям товарів, збереження товарів у кошику та списку бажань.

На сайті має бути:

1. ` `навігаційна панель з пошуком по категоріям товарів,
1. ` `сторінка кошику, сторінка списку бажань,
1. ` `Головна частина сторінки (hero section),для її наповнення дані мають надходити з бази даних чи файлу даних
1. Нижня частина (footer), де мають міститися дані про компанію, лінки на соцмережі, пошту, ідея компанії коротко.
## **Практичність**
Інтерфейс має бути зручним для користувача і сучасним. Для цього аналізується ринок інтернет-магазинів та які саме технології використовують для їх створення. У цьому випадку у Brands Outlet Store  мають використовуватись:

JS, HTML, CSS, Photoswipe, localStorage (для збереження товарів у кошику та списку бажань), MySQL.

Photoswipe – бібліотека для створення сучасних адаптивних галерей.

localStorage – це об'єкт який є властивістю об'єкту window який дозволяє зберігати дані на локальному сховищі браузера.
## **Надійність**
Надійність інтернет-магазину досягається за рахунок зберігання даних окремо від UI для запобігань поломок (таким чином втрат для бізнесу власника) та завантажень «легких» фотографій товарів для запобігання перевантаження серверів.
## **Продуктивність**
Після тривалого періоду часу сайт почне грузнути. Інтерфейсні файли можуть містити перебільшені блоки коду або блоковані, приховані біти. Найчастіше це відбувається з файлами JavaScript або зображення. Вони можуть бути важливими для створення приємного користувачам веб-сайту, але без оптимізації сайту цей дизайн може навіть не мати можливості повністю завантажитись для нетерплячих користувачів.

Для того, щоб інтернет-магазин був продуктивним треба почати з того, щоб використовувати «легкі» зображення для швидшої загрузки. Так як це інтернет-магазин одягу зображень має бути багато, тому треба думати про використання легких бібліотек.

У даному випадку має використовуватись photoswipe з файлами min.js які важать менше.
## **Експлуатаційна придатність**
У Brands Store використовуються сучасні технології тому особливих вимог для підтримки технологій немає, окрім того, щоб слідкувати за тим, щоб бібліотека photoswipe не припиняла обслуговуватись.

Основна вимога існує для адміністратора інтернет-магазину, бо для підтримки магазину потрібно: оновлювати інформацію про товар, для цього потрібно розбиратися у JS або у базах даних. 

**Висновки**

Вивчила вимоги до програмного проекту, структури документів та програмної системи, сформувала запит замовника.

2

