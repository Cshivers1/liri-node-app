DROP database IF EXISTS bamazon_db;
CREATE database bamazon_db;
USE bamazon_db;
CREATE TABLE inventory(
item_id INTEGER auto_increment not null,
product_name varchar(30) not null,
department_name varchar(30),
price double(10,4),
stock_quantity int,
primary key (item_id) 
);

INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('router','accessory',240,50);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('external battery','accessory',300,200);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('external drive','weapons',500,400);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('headphones','ingredients',200,300);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('cat5 cable','ingredients',120,1000);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('external processor','ingredients',1200,100);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('hub adapter','ingredients',150,1000);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('tech tool set','tattoos',100,500);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('iphone case','weapons',80,300);
INSERT INTO inventory(product_name,department_name,price,stock_quantity)
Values('graphics card','weapons',350,250);