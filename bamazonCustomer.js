// require("dot-env").load;
var mysql = require("mysql");
var inquirer = require("inquirer");

      //  loading a variable needed to complete connection to MYSQL database bamazonDB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "mickeymouse",                                                //"process.env.DATABASE.PASSWORD",
    database: "bamazondb"
});

     //  CONNECTION REQUESTED
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    listAllProds();
});


    //===========================
    //  BEGIN LOGIC
    //===========================

var prodAry = [];

function listAllProds() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        
        for (var i = 0; i < res.length; i++) {
            prodAry.push(res[i]);
        }
        console.log(prodAry);
        return prodAry;

     });
    shopForProds();
}  //  END LIST ALL PRODUCTS


function shopForProds() {

    inquirer.prompt([
    {
       name: "pid",
       type: "input",
       message: "What is the Item ID of the product you want to buy?"
    },
    {
       name: "qToBuy",
       type: "input",
       message: "How many would you like to buy?"
    }
    ]).then(function(answer)
    {
//                DETERMINE WHICH PRODUCT THE CUSTOMER IS BUYING
         var buyProd;
         for (var i = 0; i < res.length; i++) {
            if (res[i].itemid ===  parseInt(answer.pid)) {
                 buyProd = res[i];
            }
         }

                // STORE INVENTORY FOR THIS PRODUCT IS TOO SMALL TO FILL THE ORDER
         if (buyProd.qty < parseInt(answer.qToBuy)) {
             console.log("Insufficient stock available to fill your order");
             listAllProds();
         }

         //             UPDATE QTY FOR THE SELECTED PRODUCT

         var updQuery = "UPDATE products SET qty = qty - parseInt(answer.qToBuy) WHERE ?";
         connection.query(updQuery, { itemid: buyProd.itemid }, function(err, res) {

              if (!err) {

                    // CALCULATE PRICE and INFORM THE CUSTOMER WHAT's OWED
                  //
                  var cprice = buyProd.qty * res.price;
                  console.log("Please pay: " + cprice);
                  listAllProds();

              }else throw err;

         });  //  END UPDATE QUERY
    });   //  END FUNCTION - ANSWER
}  //  END FUNCTION SHOP FOR PRODS


