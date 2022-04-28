(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{694:function(v,e,_){"use strict";_.r(e);var r=_(47),o=Object(r.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("МІНІСТЕРСТВО ОСВІТИ І НАУКИ УКРАЇНИ")]),v._v(" "),_("p",[v._v("Національний Технічний Університет України")]),v._v(" "),_("p",[v._v("«Київський Політехнічний Інститут»")]),v._v(" "),_("p",[v._v("Факультет інформатики та обчислювальної техніки")]),v._v(" "),_("p",[v._v("Кафедра обчислювальної техніки")]),v._v(" "),_("p",[_("strong",[v._v("Лабораторна робота №6")])]),v._v(" "),_("p",[v._v("з дисципліни «Організація баз даних»")]),v._v(" "),_("p",[_("strong",[v._v("на тему: «Реалізація об’єктно-реляційного відображення»")])]),v._v(" "),_("p",[_("strong",[v._v("Виконала:")])]),v._v(" "),_("p",[v._v("студентка 2-го курсу ФІОТ")]),v._v(" "),_("p",[v._v("групи ІО-з01")]),v._v(" "),_("p",[v._v("Манзенко С.С.")]),v._v(" "),_("p",[v._v("Залікова книжка №0111")]),v._v(" "),_("p",[_("strong",[v._v("Перевірив:")])]),v._v(" "),_("p",[v._v("Доцент")]),v._v(" "),_("p",[v._v("Кандидат технічних наук")]),v._v(" "),_("p",[v._v("Болдак О.А")]),v._v(" "),_("p",[_("strong",[v._v("Київ – 2022")])]),v._v(" "),_("p",[_("strong",[v._v("МЕТА:")]),v._v(" Отримання навичок зі створення DAO-інфраструктури для доступу до MySQL баз даних.")]),v._v(" "),_("p",[_("strong",[v._v("ДОВІДКА")])]),v._v(" "),_("p",[_("em",[_("strong",[v._v("DAO")])]),v._v(" - об'єкт що надає абстрактний інтерфейс до деяких видів баз даних чи механізмів персистентності реалізуючи певні операції без розкриття деталей бази даних. Він надає відображення від програмних викликів до рівня персистентності. Така ізоляція розділює запити до даних в термінах предметної області та їх реалізацію засобами СКБД.")]),v._v(" "),_("p",[v._v("Персистентність - здатність стану існувати довше, ніж процес, що створив його. Без цієї можливості, стан може існувати лише в оперативній пам'яті і втрачається, коли оперативна пам'ять вимикається, наприклад, при вимкненні комп'ютера.")]),v._v(" "),_("p",[_("img",{attrs:{src:"lab6.001.png",alt:"uml"}})]),v._v(" "),_("p",[_("em",[_("strong",[v._v("Active Record")])]),v._v(" - це шаблон проектування, що використовується при реалізації доступу до реляційних баз даних. Вперше згадується Мартіном Фаулером в книжці Patterns of Enterprise Application Architecture. Цей шаблон є підвидом DAO, але навідміну від нього, він надає CRUD API кожному окремому об'єкту, який репрезентує окремий запис в таблиці БД.")]),v._v(" "),_("p",[_("strong",[v._v("Завдання")])]),v._v(" "),_("ol",[_("li",[v._v("Ознайомитись з призначенням шаблону Data Access Object")]),v._v(" "),_("li",[v._v("Створити базу даних у MySQL")]),v._v(" "),_("li",[v._v("Створити bean-класи по одному для кожної таблиці, які складаються з опису одного рядка таблиці.")]),v._v(" "),_("li",[v._v("Розробити DAO-інфраструктуру для роботи з базою даних.")]),v._v(" "),_("li",[v._v("Розробити програму для тестування можливостей DAO, яка створює деякі об’єкти в кожній таблиці та шукає існуючи їх по деяким ознакам.")]),v._v(" "),_("li",[v._v("Запустити програму та продивитись результати її роботи у MySQL.")])]),v._v(" "),_("p",[v._v("ВИКОНАННЯ ЗАВДАНЬ")]),v._v(" "),_("p",[v._v("Створена база у MySQL")]),v._v(" "),_("p",[v._v("create database internetshop1;")]),v._v(" "),_("p",[v._v("-- userAccount")]),v._v(" "),_("p",[v._v("create table internetshop1.userAccount(")]),v._v(" "),_("p",[v._v("userId int primary key,")]),v._v(" "),_("p",[v._v("name varchar(50),")]),v._v(" "),_("p",[v._v("phone varchar(50),")]),v._v(" "),_("p",[v._v("email varchar(50)")]),v._v(" "),_("p",[v._v(");")]),v._v(" "),_("p",[v._v("-- one order")]),v._v(" "),_("p",[v._v("create table internetshop1.orders(")]),v._v(" "),_("p",[v._v("orderId int primary key,")]),v._v(" "),_("p",[v._v("userAccountId int,")]),v._v(" "),_("p",[v._v("foreign key (userAccountId) references userAccount(userId)")]),v._v(" "),_("p",[v._v(");")]),v._v(" "),_("p",[v._v("-- a product")]),v._v(" "),_("p",[v._v("create table internetshop1.products(")]),v._v(" "),_("p",[v._v("productId int primary key,")]),v._v(" "),_("p",[v._v("categoryId int,")]),v._v(" "),_("p",[v._v("brand varchar(50),")]),v._v(" "),_("p",[v._v("size varchar(50),")]),v._v(" "),_("p",[v._v("shortDescription varchar(255),")]),v._v(" "),_("p",[v._v("discount varchar(50),")]),v._v(" "),_("p",[v._v("previousPrice varchar(50),")]),v._v(" "),_("p",[v._v("actualPrice varchar(50)")]),v._v(" "),_("p",[v._v(");")]),v._v(" "),_("p",[v._v("create table internetshop1.orderItems(")]),v._v(" "),_("p",[v._v("orderItemsId int primary key,")]),v._v(" "),_("p",[v._v("productId int,")]),v._v(" "),_("p",[v._v("size varchar(50),")]),v._v(" "),_("p",[v._v("price varchar(50),")]),v._v(" "),_("p",[v._v("orderId int,")]),v._v(" "),_("p",[v._v("foreign key (productId) references products(productId),")]),v._v(" "),_("p",[v._v("foreign key (orderId) references orders(orderId)")]),v._v(" "),_("p",[v._v(");")]),v._v(" "),_("p",[v._v("-- change a datatype of the table`s column")]),v._v(" "),_("p",[v._v("USE internetshop1;")]),v._v(" "),_("p",[v._v("ALTER TABLE products MODIFY previousPrice INTEGER;")]),v._v(" "),_("p",[v._v("ALTER TABLE products MODIFY actualPrice INTEGER;")]),v._v(" "),_("p",[v._v("ALTER TABLE orderItems MODIFY price INTEGER;")]),v._v(" "),_("p",[v._v("-- how to delete the table")]),v._v(" "),_("p",[v._v("DROP table sys.Categories;")]),v._v(" "),_("p",[v._v("DROP table sys.userAccount;")]),v._v(" "),_("p",[v._v("DROP table internetshop1.userAccount;")]),v._v(" "),_("p",[v._v("DROP table internetshop1.orders;")]),v._v(" "),_("p",[v._v("DROP table internetshop1.Product;")]),v._v(" "),_("p",[v._v("-- to insert multiple values into the table")]),v._v(" "),_("p",[v._v("INSERT INTO internetshop1.userAccount(userId, name, phone, email)")]),v._v(" "),_("p",[v._v("values(1, 'Sofi', '5554477', 'sofi.mann99@gmail.com'),")]),v._v(" "),_("p",[v._v("(2, 'Mark', '88999777', 'mark@gmail.com'),")]),v._v(" "),_("p",[v._v("(3, 'Adrew', '8855666', 'andrew@gmail.com');")]),v._v(" "),_("p",[v._v("INSERT INTO internetshop1.orders(orderId, userAccountId)")]),v._v(" "),_("p",[v._v("values (1, 1), (2, 2), (3,3);")]),v._v(" "),_("p",[v._v("INSERT INTO internetshop1.products(productId, categoryId, brand, size, shortDescription,")]),v._v(" "),_("p",[v._v("discount, previousPrice, actualPrice)")]),v._v(" "),_("p",[v._v("values(1, 4, 'gucci', 'small','saffiano marmount leather light-pink bag', '-50%', 1000, 2000),")]),v._v(" "),_("p",[v._v("(2, 5,'faithfull', 'xs', 'short black linen dress', '-50%', 1000, 500),")]),v._v(" "),_("p",[v._v("(3, 4, 'gucci', 'large', 'brown leather bag', '-50%', 2000, 1000),")]),v._v(" "),_("p",[v._v("(4, 5, 'selfportrait', 's', 'short dress', '-50%', 600, 300),")]),v._v(" "),_("p",[v._v("(5, 5, 'parosh', 'xs', 'short dress', '-50%', 600, 300);")]),v._v(" "),_("p",[v._v("-- to update data in the table column")]),v._v(" "),_("p",[v._v("SELECT *")]),v._v(" "),_("p",[v._v("FROM products")]),v._v(" "),_("p",[v._v("WHERE productId=1;")]),v._v(" "),_("p",[v._v("UPDATE products")]),v._v(" "),_("p",[v._v("SET previousPrice = 2000, actualPrice = 1000")]),v._v(" "),_("p",[v._v("WHERE productId=1;")]),v._v(" "),_("p",[v._v("-- orders")]),v._v(" "),_("p",[v._v("INSERT INTO internetshop1.orderItems(orderItemsId, productId, size, price, orderId)")]),v._v(" "),_("p",[v._v("values(1, 1, 'small', 1000, 1),")]),v._v(" "),_("p",[v._v("(2, 2, 'xs', 500, 2),")]),v._v(" "),_("p",[v._v("(3, 3, 'large', 1000, 3);")]),v._v(" "),_("p",[v._v("-- to show orders of every user in database (if every user made only one order)")]),v._v(" "),_("p",[v._v("use internetshop1;")]),v._v(" "),_("p",[v._v("SELECT *")]),v._v(" "),_("p",[v._v("FROM orders o")]),v._v(" "),_("p",[v._v("JOIN userAccount ua")]),v._v(" "),_("p",[v._v("ON o.userAccountId = ua.userId")]),v._v(" "),_("p",[v._v("JOIN orderItems oi")]),v._v(" "),_("p",[v._v("ON oi.orderId = o.orderId")]),v._v(" "),_("p",[v._v("JOIN products p")]),v._v(" "),_("p",[v._v("ON p.productId = oi.productId;")]),v._v(" "),_("p",[v._v("-- user made two or more orders")]),v._v(" "),_("p",[v._v("INSERT INTO internetshop1.orderItems(orderItemsId, productId, size, price, orderId)")]),v._v(" "),_("p",[v._v("values(4, 4, 's', 300, 3),")]),v._v(" "),_("p",[v._v("(5, 5, 'xs', 300, 3),")]),v._v(" "),_("p",[v._v("(6, 5, 'xs', 300, 3);")]),v._v(" "),_("p",[v._v("use internetshop1;")]),v._v(" "),_("p",[v._v("SELECT")]),v._v(" "),_("p",[v._v("p.shortDescription,")]),v._v(" "),_("p",[v._v("p.discount,")]),v._v(" "),_("p",[v._v("p.previousPrice,")]),v._v(" "),_("p",[v._v("ua.name,")]),v._v(" "),_("p",[v._v("o.orderId,")]),v._v(" "),_("p",[v._v("oi.size,")]),v._v(" "),_("p",[v._v("oi.price")]),v._v(" "),_("p",[v._v("FROM products p")]),v._v(" "),_("p",[v._v("JOIN orderItems oi")]),v._v(" "),_("p",[v._v("ON p.productId = oi.productId")]),v._v(" "),_("p",[v._v("JOIN orders o")]),v._v(" "),_("p",[v._v("ON o.orderId = oi.orderId")]),v._v(" "),_("p",[v._v("JOIN userAccount ua")]),v._v(" "),_("p",[v._v("ON o.userAccountId = ua.userId;")]),v._v(" "),_("p",[_("strong",[v._v("РЕЗУЛЬТАТ У ВИГЛЯДІ ТОВАРІВ ПРЕДСТАВЛЕНИХ НА ДАНИЙ МОМЕНТ У БАЗІ ДАННИХ")])]),v._v(" "),_("p",[_("img",{attrs:{src:"lab6.002.jpeg",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("DAO у цьому випадку грає роль сервер Node.js")])]),v._v(" "),_("p",[_("strong",[v._v("Запит у базу даних код продемонстрований нижче")])]),v._v(" "),_("p",[v._v("// rewriting the code to support connection pooling")]),v._v(" "),_("p",[v._v('const express = require("express");')]),v._v(" "),_("p",[v._v("const app = express();")]),v._v(" "),_("p",[v._v("const mysql = require('mysql');")]),v._v(" "),_("p",[v._v("const pool = mysql.createPool({")]),v._v(" "),_("p",[_("code"),v._v("host     : 'localhost',")]),v._v(" "),_("p",[_("code"),v._v("user     : 'sofi',")]),v._v(" "),_("p",[_("code"),v._v("password : 'Password123#@!',")]),v._v(" "),_("p",[_("code"),v._v("database : 'internetshop1'")]),v._v(" "),_("p",[v._v("});")]),v._v(" "),_("p",[v._v('app.get("/",(req,res) => {')]),v._v(" "),_("p",[_("code"),v._v("pool.getConnection((err, connection) => {")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("console.log('connected as id ' + connection.threadId);")]),v._v(" "),_("p",[_("code"),v._v("connection.query('SELECT * from internetshop1.products LIMIT 1', (err, rows) => {")]),v._v(" "),_("p",[_("code"),v._v("connection.release(); // return the connection to pool")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("console.log('The data from products table are: \\n', rows);")]),v._v(" "),_("p",[_("code"),v._v("res.send(rows)")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[v._v("});")]),v._v(" "),_("p",[v._v('app.get("/products/:id", (req, res) => {')]),v._v(" "),_("p",[_("code"),v._v("pool.getConnection((err, connection) => {")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("connection.query(SELECT * from internetshop1.products WHERE productId = ${req.params.id}, (err, rows) => {")]),v._v(" "),_("p",[_("code"),v._v("connection.release(); // return the connection to pool")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("res.send(rows[0])")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[v._v("})")]),v._v(" "),_("p",[v._v('app.get("/products", (req, res) => {')]),v._v(" "),_("p",[_("code"),v._v("pool.getConnection((err, connection) => {")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("connection.query(SELECT * from internetshop1.products, (err, rows) => {")]),v._v(" "),_("p",[_("code"),v._v("connection.release(); // return the connection to pool")]),v._v(" "),_("p",[_("code"),v._v("if(err) throw err;")]),v._v(" "),_("p",[_("code"),v._v("res.send(rows)")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[_("code"),v._v("});")]),v._v(" "),_("p",[v._v("})")]),v._v(" "),_("p",[v._v("app.listen(3000, () => {")]),v._v(" "),_("p",[_("code"),v._v("console.log('Server is running at port 3000');")]),v._v(" "),_("p",[v._v("});")]),v._v(" "),_("p",[_("img",{attrs:{src:"lab6.003.jpeg",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("Результат у браузері")])]),v._v(" "),_("p",[v._v("Якщо треба відобразити один товар")]),v._v(" "),_("p",[_("img",{attrs:{src:"lab6.004.jpeg",alt:""}})]),v._v(" "),_("p",[v._v("Якщо потрібно багато товарів")]),v._v(" "),_("p",[_("img",{attrs:{src:"lab6.005.jpeg",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("ВИСНОВКИ")])]),v._v(" "),_("p",[v._v("Отримала навички зі створення DAO-інфраструктури для доступу до MySQL баз даних.")])])}),[],!1,null,null,null);e.default=o.exports}}]);