# bamazon
Online shopping

## Overview
   This is an Amazon-like storefront using MySQL.
   The app will take in orders from customers and deplete stock from the store's inventory.
   As a bonus task, you can program your app to track product sales across your store's departments
   and then provide a summary of the highest-grossing departments in the store.

### Prerequisites
   MySQL and Inquirer npm packages


#### Submission Guide
* Use GitHub.  Include screenshots, a gif, and/or a video showing the app works (no bugs).
  The screenshots or a link to a video can be included in the `README.md` file.

     * Include screenshots (or a video) of typical user flows through your application
       (for the customer and if the bonus was done, the manager/supervisor).
       This includes views of the prompts and the responses after their selection (for the different selection options).

     * Include any other screenshots you deem necessary to help someone who has never seen
       or used the application understand its purpose and function.
       This is how you will communicate to potential employers/other developers in the future
       what you built and why, and to show how it works.

* Screenshots (and well-written READMEs) will be part of the grading.

==========================================================================
##       Instructions
==========================================================================

111111                                      11111
1111      Challenge #1: Customer View        1111
1111         (Minimum Requirement)           1111
111111                                      11111

1. Create a MySQL Database called `bamazon`.

2. Create a Table in the database called `products`.

3. The products table should have columns for:
   * item_id            (unique for each product)
   * product_name       (Name of product)
   * department_name
   * price              (cost to customer)
   * stock_quantity     (how much is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows).

5. Create Node application `bamazonCustomer.js`.
   On execution, first display a list of all items available for sale.
   (Include the id, name, and price of each product)

6. Then prompt users with two messages.

   * First, ask the customer to enter the ID of the product they want to buy.
   * Second, ask how many units of the product the customer wants to buy.

7. Once the customer has placed the order, make sure there's enough of the product to fill the request.
   If not, log a phrase like `Insufficient quantity!`, then prevent the order from going through.

8. If the store does have enough quantity, fulfill the customer's order:
   * Update the SQL database to reflect the remaining quantity.
   * Once the update processes, show the customer the total cost of their purchase.



111111     O  P  T  I  O  N  A  L       11111
1111     Challenge #2: Manager View      1111
1111             ((Next Level)           1111
111111                                  11111

* Create a new Node application called `bamazonManager.js`.

 1. This application will:

  * Present menu options:
      * View Products for Sale
      * View Low Inventory
      * Add to Inventory
      * Add New Product

 2. Selecting `View Products for Sale`, list every available item:
      * item ID
      * name
      * price
      * quantity

 3. Selecting `View Low Inventory` will list all items with an inventory count lower than five.

 4. Selecting `Add to Inventory`  will prompt the manager to "add more" of any item currently in the store.

 5. Selecting `Add New Product` allows the manager to add a completely new product to the store.


111111     O  P  T  I  O  N  A  L       11111
1111    Challenge #3: Supervisor View    1111
1111            (Final Level)            1111
111111                                  11111

1. Create a new MySQL table called `departments` with the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column
   and modify the `bamazonCustomer.js` app so that this value is updated
   with each individual products total revenue from each sale.

3. Modify your `bamazonCustomer.js` app so that when a customer purchases anything
   from the store, the price of the product multiplied by the quantity purchased is added
   to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

4. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department

   * Create New Department

5. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

6. The `total_profit` column should be calculated on the fly
   using the difference between `over_head_costs` and `product_sales`.
   `total_profit` should not be stored in any database. You should use a custom alias.

7. If you can't get the table to display properly after a few hours,
   then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into aliases in MySQL.

   * Hint: You may need to look into GROUP BYs.

   * Hint: You may need to look into JOINS.

   * **HINT**: There may be an NPM package that can log the table to the console. What's is it? Good question :)

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions.  If unable to complete
certain portions, please pseudo-code these portions to describe what remains to be completed.
Adding a README.md as well as adding this homework to your portfolio are required as well
and more information can be found below.

- - -

### Create a README.md

### Add To Your Portfolio

   After completing the homework please add the piece to your portfolio.
   Make sure to add a link to your updated portfolio in the comments section of your
   homework so the TAs can easily ensure you completed this step when they are grading
   the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
