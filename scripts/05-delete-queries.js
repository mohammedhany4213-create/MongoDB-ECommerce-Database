const ecommerceDB = db.getSiblingDB("ecommerce");

// Delete one customer from a specific city

ecommerceDB.users.deleteOne(
    {
        customer_city:"test_city"
    }
);

// Delete products without a category
ecommerceDB.products.deleteMany(
    {
        product_category:null
    }
);

// Delete products weighing less than 10g
ecommerceDB.products.deleteMany({
    product_weight_g: { $lt: 10 }
});


// Delete products with no photos and no weight
ecommerceDB.products.deleteMany({
    product_photos_qty: 0,
    product_weight_g: 0
});


// Delete customers from selected states
ecommerceDB.users.deleteMany({
    customer_state: {
        $in: ["XX", "YY"]
    }
});

// WARNING: This removes all documents from reviews.
// The collection itself remains.
ecommerceDB.reviews.deleteMany({});

// WARNING: This removes the entire collection.
ecommerceDB.reviews.drop();