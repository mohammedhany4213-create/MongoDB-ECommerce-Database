const ecommerceDB = db.getSiblingDB("ecommerce");

// Create an index on customer_state
ecommerceDB.users.createIndex({
    customer_state: 1
});

// Create an index on product_weight_g
ecommerceDB.products.createIndex({
    product_weight_g: -1
});

// Index on customer_state and customer_city
ecommerceDB.users.createIndex({
    customer_state: 1,
    customer_city: 1
});

// customer_unique_id must be unique
ecommerceDB.users.createIndex(
    {
        customer_unique_id: 1
    },
    {
        unique: true
    }
);

//List All Indexes
ecommerceDB.users.getIndexes().forEach(printjson);

// Check how MongoDB executes a query
print("Query Execution Statistics:");

const explainResult = ecommerceDB.users.find({
    customer_state: "SP"
}).explain("executionStats");

printjson({
    executionStage: explainResult.executionStats.executionStages.stage,
    documentsExamined: explainResult.executionStats.totalDocsExamined,
    documentsReturned: explainResult.executionStats.nReturned
});

// Drop the descending product weight index
ecommerceDB.products.dropIndex({
    product_weight_g: -1
});

//List indexes for a specific collection

print("Products Collection Indexes:");

ecommerceDB.products.getIndexes().forEach(printjson);