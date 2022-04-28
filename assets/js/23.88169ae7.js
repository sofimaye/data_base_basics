(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{693:function(v,_,r){"use strict";r.r(_);var e=r(47),p=Object(e.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("p",[v._v("МІНІСТЕРСТВО ОСВІТИ І НАУКИ УКРАЇНИ")]),v._v(" "),r("p",[v._v("Національний Технічний Університет України")]),v._v(" "),r("p",[v._v("«Київський Політехнічний Інститут»")]),v._v(" "),r("p",[v._v("Факультет інформатики та обчислювальної техніки")]),v._v(" "),r("p",[v._v("Кафедра обчислювальної техніки")]),v._v(" "),r("p",[r("strong",[v._v("Лабораторна робота №5")])]),v._v(" "),r("p",[v._v("з дисципліни «Організація баз даних»")]),v._v(" "),r("p",[r("strong",[v._v("на тему: «Реалізація бази даних засобами MySQL»")])]),v._v(" "),r("p",[r("strong",[v._v("Виконала:")])]),v._v(" "),r("p",[v._v("студентка 2-го курсу ФІОТ")]),v._v(" "),r("p",[v._v("групи ІО-з01")]),v._v(" "),r("p",[v._v("Манзенко С.С.")]),v._v(" "),r("p",[v._v("Залікова книжка №0111")]),v._v(" "),r("p",[r("strong",[v._v("Перевірив:")])]),v._v(" "),r("p",[v._v("Доцент")]),v._v(" "),r("p",[v._v("Кандидат технічних наук")]),v._v(" "),r("p",[v._v("Болдак О.А")]),v._v(" "),r("p",[r("strong",[v._v("Київ – 2022")])]),v._v(" "),r("p",[r("strong",[v._v("МЕТА:")]),v._v(" навчитися встановлювати та налаштовувати системи розробки баз даних MySQL та Oracle SQL Developer.")]),v._v(" "),r("p",[r("strong",[v._v("ДОВІДКА")])]),v._v(" "),r("p",[r("strong",[v._v("Встановлення та налаштування серверу баз даних")])]),v._v(" "),r("p",[v._v("Сервер БД обслуговує базу даних і відповідає за цілісність і збереження даних, а також забезпечує операції введення-виведення при доступі клієнта до інформації.")]),v._v(" "),r("p",[v._v("Архітектура клієнт-сервера складається з клієнтів і серверів. Основна ідея полягає в тому, щоб розміщувати сервери на потужних машинах, а додаткам, що використовують мовні компоненти СУБД, забезпечити доступ до них з менш потужних машин-клієнтів за допомогою зовнішніх інтерфейсів.")]),v._v(" "),r("p",[v._v("Більшість СУБД використовують мову SQL (Structured Query Language - мова структурованих запитів), так як вона зручна для опису логічних підмножин БД.")]),v._v(" "),r("p",[v._v("Призначення SQL:")]),v._v(" "),r("ul",[r("li",[v._v("Створення БД і таблиці з повним описом їх структури;")]),v._v(" "),r("li",[v._v("Виконання основних операцій маніпулювання даними (такі як вставка, модифікація і видалення даних з таблиць);")]),v._v(" "),r("li",[v._v("Виконання простих і складних запитів.")])]),v._v(" "),r("p",[v._v("Одна з ключових особливостей мови SQL полягає в тому, що з її допомогою формуються запити, що описують яку інформацію з бази даних необхідно отримати, а шляхи вирішення цього завдання програма визначає сама.")]),v._v(" "),r("p",[r("strong",[v._v("MySQL")])]),v._v(" "),r("p",[v._v("MySQL - вільна система управління базами даних (СКБД). MySQL є власністю компанії Oracle Corporation, що отримала її разом з поглинанням Sun Microsystems, що здійснює розробку і підтримку програми. Розповсюджується під GNU General Public License або під власною комерційною ліцензією.")]),v._v(" "),r("p",[v._v("Гнучкість СУБД MySQL забезпечується підтримкою великої кількості типів таблиць: користувачі можуть вибрати як таблиці типу MyISAM, що підтримують повнотекстовий пошук, так і таблиці InnoDB, що підтримують транзакції на рівні окремих записів. Більш того, СУБД MySQL поставляється із спеціальним типом таблиць EXAMPLE, що демонструє принципи створення нових типів таблиць. Завдяки відкритій архітектурі і GPL-ліцензуванню, в СУБД MySQL постійно з'являються нові типи таблиць.")]),v._v(" "),r("p",[v._v("MySQL портована на велику кількість платформ: AIX, BSDi, FreeBSD, HP-UX, Linux, Mac OS X, NetBSD, OpenBSD, OS / 2 Warp, SGI IRIX, Solaris, SunOS, SCO OpenServer, SCO UnixWare, Tru64, Windows 95, Windows 98, Windows NT, Windows 2000, Windows XP, Windows Server 2003, WinCE, Windows Vista і Windows 7.")]),v._v(" "),r("p",[v._v("MySQL має API для мов Delphi, C, C + +, Ейфель, Java, Лісп, Perl, PHP, PureBasic, Python, Ruby, Smalltalk, Компонентний Паскаль і Tcl бібліотеки для мов платформи. NET")]),v._v(" "),r("p",[r("strong",[v._v("Завдання")])]),v._v(" "),r("p",[v._v("Вивчити основи мови структурних запитів SQL, недоліки та переваги мови, цілі створення, стандарт-ревізії, сумісність мови.")]),v._v(" "),r("p",[v._v("Детально вивчити основні команди SQL та їх особливості. Вільно володіти такими командами Select, Insert, Update.")]),v._v(" "),r("p",[v._v("Створити базу даних. Виконати зміну бази по варіанту.")]),v._v(" "),r("p",[r("strong",[v._v("ВИКОНАННЯ ЗАВДАНЬ")])]),v._v(" "),r("p",[r("strong",[v._v("База даних для інтернет-магазину")])]),v._v(" "),r("p",[v._v("create database internetshop1;")]),v._v(" "),r("p",[v._v("-- userAccount")]),v._v(" "),r("p",[v._v("create table internetshop1.userAccount(")]),v._v(" "),r("p",[v._v("userId int primary key,")]),v._v(" "),r("p",[v._v("name varchar(50),")]),v._v(" "),r("p",[v._v("phone varchar(50),")]),v._v(" "),r("p",[v._v("email varchar(50)")]),v._v(" "),r("p",[v._v(");")]),v._v(" "),r("p",[v._v("-- one order")]),v._v(" "),r("p",[v._v("create table internetshop1.orders(")]),v._v(" "),r("p",[v._v("orderId int primary key,")]),v._v(" "),r("p",[v._v("userAccountId int,")]),v._v(" "),r("p",[v._v("foreign key (userAccountId) references userAccount(userId)")]),v._v(" "),r("p",[v._v(");")]),v._v(" "),r("p",[v._v("-- a product")]),v._v(" "),r("p",[v._v("create table internetshop1.products(")]),v._v(" "),r("p",[v._v("productId int primary key,")]),v._v(" "),r("p",[v._v("categoryId int,")]),v._v(" "),r("p",[v._v("brand varchar(50),")]),v._v(" "),r("p",[v._v("size varchar(50),")]),v._v(" "),r("p",[v._v("shortDescription varchar(255),")]),v._v(" "),r("p",[v._v("discount varchar(50),")]),v._v(" "),r("p",[v._v("previousPrice varchar(50),")]),v._v(" "),r("p",[v._v("actualPrice varchar(50)")]),v._v(" "),r("p",[v._v(");")]),v._v(" "),r("p",[v._v("create table internetshop1.orderItems(")]),v._v(" "),r("p",[v._v("orderItemsId int primary key,")]),v._v(" "),r("p",[v._v("productId int,")]),v._v(" "),r("p",[v._v("size varchar(50),")]),v._v(" "),r("p",[v._v("price varchar(50),")]),v._v(" "),r("p",[v._v("orderId int,")]),v._v(" "),r("p",[v._v("foreign key (productId) references products(productId),")]),v._v(" "),r("p",[v._v("foreign key (orderId) references orders(orderId)")]),v._v(" "),r("p",[v._v(");")]),v._v(" "),r("p",[v._v("-- change a datatype of the table`s column")]),v._v(" "),r("p",[v._v("USE internetshop1;")]),v._v(" "),r("p",[v._v("ALTER TABLE products MODIFY previousPrice INTEGER;")]),v._v(" "),r("p",[v._v("ALTER TABLE products MODIFY actualPrice INTEGER;")]),v._v(" "),r("p",[v._v("ALTER TABLE orderItems MODIFY price INTEGER;")]),v._v(" "),r("p",[v._v("-- how to delete the table")]),v._v(" "),r("p",[v._v("DROP table sys.Categories;")]),v._v(" "),r("p",[v._v("DROP table sys.userAccount;")]),v._v(" "),r("p",[v._v("DROP table internetshop1.userAccount;")]),v._v(" "),r("p",[v._v("DROP table internetshop1.orders;")]),v._v(" "),r("p",[v._v("DROP table internetshop1.Product;")]),v._v(" "),r("p",[v._v("-- to insert multiple values into the table")]),v._v(" "),r("p",[v._v("INSERT INTO internetshop1.userAccount(userId, name, phone, email)")]),v._v(" "),r("p",[v._v("values(1, 'Sofi', '5554477', 'sofi.mann99@gmail.com'),")]),v._v(" "),r("p",[v._v("(2, 'Mark', '88999777', 'mark@gmail.com'),")]),v._v(" "),r("p",[v._v("(3, 'Adrew', '8855666', 'andrew@gmail.com');")]),v._v(" "),r("p",[v._v("INSERT INTO internetshop1.orders(orderId, userAccountId)")]),v._v(" "),r("p",[v._v("values (1, 1), (2, 2), (3,3);")]),v._v(" "),r("p",[v._v("INSERT INTO internetshop1.products(productId, categoryId, brand, size, shortDescription,")]),v._v(" "),r("p",[v._v("discount, previousPrice, actualPrice)")]),v._v(" "),r("p",[v._v("values(1, 4, 'gucci', 'small','saffiano marmount leather light-pink bag', '-50%', 1000, 2000),")]),v._v(" "),r("p",[v._v("(2, 5,'faithfull', 'xs', 'short black linen dress', '-50%', 1000, 500),")]),v._v(" "),r("p",[v._v("(3, 4, 'gucci', 'large', 'brown leather bag', '-50%', 2000, 1000),")]),v._v(" "),r("p",[v._v("(4, 5, 'selfportrait', 's', 'short dress', '-50%', 600, 300),")]),v._v(" "),r("p",[v._v("(5, 5, 'parosh', 'xs', 'short dress', '-50%', 600, 300);")]),v._v(" "),r("p",[v._v("-- to update data in the table column")]),v._v(" "),r("p",[v._v("SELECT *")]),v._v(" "),r("p",[v._v("FROM products")]),v._v(" "),r("p",[v._v("WHERE productId=1;")]),v._v(" "),r("p",[v._v("UPDATE products")]),v._v(" "),r("p",[v._v("SET previousPrice = 2000, actualPrice = 1000")]),v._v(" "),r("p",[v._v("WHERE productId=1;")]),v._v(" "),r("p",[v._v("-- orders")]),v._v(" "),r("p",[v._v("INSERT INTO internetshop1.orderItems(orderItemsId, productId, size, price, orderId)")]),v._v(" "),r("p",[v._v("values(1, 1, 'small', 1000, 1),")]),v._v(" "),r("p",[v._v("(2, 2, 'xs', 500, 2),")]),v._v(" "),r("p",[v._v("(3, 3, 'large', 1000, 3);")]),v._v(" "),r("p",[v._v("-- to show orders of every user in database (if every user made only one order)")]),v._v(" "),r("p",[v._v("use internetshop1;")]),v._v(" "),r("p",[v._v("SELECT *")]),v._v(" "),r("p",[v._v("FROM orders o")]),v._v(" "),r("p",[v._v("JOIN userAccount ua")]),v._v(" "),r("p",[v._v("ON o.userAccountId = ua.userId")]),v._v(" "),r("p",[v._v("JOIN orderItems oi")]),v._v(" "),r("p",[v._v("ON oi.orderId = o.orderId")]),v._v(" "),r("p",[v._v("JOIN products p")]),v._v(" "),r("p",[v._v("ON p.productId = oi.productId;")]),v._v(" "),r("p",[v._v("-- user made two or more orders")]),v._v(" "),r("p",[v._v("INSERT INTO internetshop1.orderItems(orderItemsId, productId, size, price, orderId)")]),v._v(" "),r("p",[v._v("values(4, 4, 's', 300, 3),")]),v._v(" "),r("p",[v._v("(5, 5, 'xs', 300, 3),")]),v._v(" "),r("p",[v._v("(6, 5, 'xs', 300, 3);")]),v._v(" "),r("p",[v._v("use internetshop1;")]),v._v(" "),r("p",[v._v("SELECT")]),v._v(" "),r("p",[v._v("p.shortDescription,")]),v._v(" "),r("p",[v._v("p.discount,")]),v._v(" "),r("p",[v._v("p.previousPrice,")]),v._v(" "),r("p",[v._v("ua.name,")]),v._v(" "),r("p",[v._v("o.orderId,")]),v._v(" "),r("p",[v._v("oi.size,")]),v._v(" "),r("p",[v._v("oi.price")]),v._v(" "),r("p",[v._v("FROM products p")]),v._v(" "),r("p",[v._v("JOIN orderItems oi")]),v._v(" "),r("p",[v._v("ON p.productId = oi.productId")]),v._v(" "),r("p",[v._v("JOIN orders o")]),v._v(" "),r("p",[v._v("ON o.orderId = oi.orderId")]),v._v(" "),r("p",[v._v("JOIN userAccount ua")]),v._v(" "),r("p",[v._v("ON o.userAccountId = ua.userId;")]),v._v(" "),r("p",[r("img",{attrs:{src:"lab5.jpeg",alt:""}})]),v._v(" "),r("p",[r("strong",[v._v("Результат")])]),v._v(" "),r("p",[r("img",{attrs:{src:"lab5.002.jpeg",alt:""}})]),v._v(" "),r("p",[r("strong",[v._v("ВИСНОВКИ")])]),v._v(" "),r("p",[v._v("Навчилася встановлювати та налаштовувати системи розробки баз даних MySQL та Oracle SQL Developer а також створювати бази даних.")])])}),[],!1,null,null,null);_.default=p.exports}}]);