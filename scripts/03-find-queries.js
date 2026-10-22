const ecommerceDB = db.getSeblingDB("ecommerce");

//Get all users
print("ALl users");
ecommerceDB.users.find().limit(10).forEach(printjson);
/* 
limit() restricts the query result to a maximum of 10 documents
Without limit() the query returns all matching documents
*/


//Get all users from a specific state let it be sau paulo as an example 
print("All users from Sao Paulo");

ecommerceDB.users.find(
{
    customer_state: "SP"
}
).limit(10).forEach(printjson);

/*
Retrieving users that match the specified condition
in the find() query.
*/


// Find products weighing more than or equal to 1000g
print("Products weighing >= 1000g");

ecommerceDB.products.find({
    product_weight_g: { $gte: 1000 }
}).limit(10).forEach(printjson);

/*
$gte compares the field value with the specified condition
and returns documents where the value is greater than
or equal to the specified number.
*/

//Find products from a specific category
print("Products from perfumaria category");
ecommerceDB.products.find({
    product_category_name: "perfumaria"
}).limit(10).forEach(printjson);


//Find products with multiple photos

print("products with multiple photos");
ecommerceDB.products.find({
    product_photos_qty:{$gt:2}
}).limit(10).forEach(printjson);


// Find products with specific dimensions

print("Products with length greater than 30cm");
ecommerceDB.products.find({
    product_length_cm : {$gt:30}
}).limit(10).forEach(printjson);

//Sort products by weight

print("Heaviest products");
ecommerceDB.products.find()
    .sort({product_weight_g:-1})
    .limit(10)
    .forEach(printjson);

// Select specific fields
print("Product projection");
ecommerceDB.products.find(
    {},
    {
        _id: 0,
        product_id: 1,
        product_category_name: 1,
        product_weight_g: 1
    }
).limit(10).forEach(printjson);


