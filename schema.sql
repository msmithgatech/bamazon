DROP database if exists bamazonDB;
create database bamazonDB;

Use bamazonDB;

CREATE TABLE products (
itemid integer(100),
proddesc varchar (100) not null,
dept varchar(200) not null,
price decimal(5, 2),
qty integer(10),

primary key (itemid),
unique key(proddesc)
);


insert into products(itemid, proddesc, dept, price, qty)
values
    (6254, "Blue Lake Green Beans 32oz", "Canned Vegetables", 1.79, 180),
    (0301, "Canned Pears", "Canned Fruit", 3.49, 240),
    (1008, "Blue Bell Homemade Vanilla", "Ice Cream", 1.89, 720),
    (2453, "Camelia Brand Red Beans", "Dry Beans", 1.59, 1440),
    (0500, "Mayfield Whole Milk - HalfGallon", "Dairy Milk", 2.49, 480),
    (0067, "Domino Cane Sugar - 2Lbs", "Sugar", 2.19, 376),
    (3131, "Grown in GA Pecans - Halves", "Nuts", 8.99, 840),
    (9094, "Sargento Sliced Cheese - Provolone", "Dairy Cheese", 2.69, 1080),
    (1111, "Great Value Frozen Mango Chunks", "Frozen Fruits", 2.97, 480),
    (2123, "Picking Cucumbers", "Fresh Vegetables", .59, 2600)