const ecommerceDB = db.getSiblingDB("ecommerce");

// Update One Document using $set

ecommerceDB.users.updateOne(
    { customer_state: "SP" },
    {
        $set: {
            customer_city: "sao paulo"
        }
    }
);

print("Update One Customer:");
printjson(ecommerceDB.users.findOne({ customer_state: "SP" }));

//Set isActive = true for all customers from SP
ecommerceDB.users.updateMany(
    {customer_state: "SP"},
    {
        $set:{
            isActive:true
        }
    }
);

print("Update Multiple Customers:");
print(`Modified: ${ecommerceDB.users.countDocuments({
    customer_state: "SP",
    isActive: true
})}`);

//Increase product photos quantity by 1
ecommerceDB.products.updateOne(
    {},
    {
        $inc: {
            product_photos_qty: 1
        }
    }
);

print("Increment Product Photos:");
printjson(ecommerceDB.products.findOne());

// Decrease product weight by 100g
ecommerceDB.products.updateOne(
    {product_weight_g : {$gte: 100}},
    {
        $inc:{
            product_weight_g:-100
        }
    }

);

print("Decrement Product Weight:");
printjson(
    ecommerceDB.products.findOne({
        product_weight_g: { $gte: 0 }
    })
);

//Remove isActive from one customer

ecommerceDB.users.updateOne(
    {isActive:true},
    {
        $unset: {
            isActive: ""
        }
    }
);

print("Remove Field:");
printjson(ecommerceDB.users.findOne({ isActive: { $exists: false } }));

// Increase photos quantity by 1 for products
// that have more than 2 photos

ecommerceDB.products.updateMany(
    {product_photos_qty:{$gt : 2}},
    {
        $inc:{
            product_photos_qty:1
        }
    }
);

print("Update Multiple Products:");
print("Products with more than 2 photos were updated.");

// Change category name for one product
ecommerceDB.products.updateOne(
    { product_category_name: "perfumaria" },
    {
        $set: {
            product_category_name: "beauty"
        }
    }
);

print("Update Product Category:");
printjson(ecommerceDB.products.findOne({
    product_category_name: "beauty"
}));

