
const ecommerceDB = db.getSiblingDB("ecommerce");

const fs = require("fs");
const path = require("path");
const dataDir = path.resolve("data");

const datasets = [
    {
        file: "olist_customers_dataset.json",
        collection: "users"
    },
    {
        file: "olist_products_dataset.json",
        collection: "products"
    },
    {
        file: "product_category_name_translation.json",
        collection: "categories"
    },
    {
        file: "olist_orders_dataset.json",
        collection: "orders"
    },
    {
        file: "olist_order_reviews_dataset.json",
        collection: "reviews"
    }
];

datasets.forEach(({ file, collection }) => {
    const filePath = path.join(dataDir, file);

    if (!fs.existsSync(filePath)) {
        print(`File not found: ${file}`);
        return;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (data.length === 0) {
        print(`No data found: ${file}`);
        return;
    }

    const result = ecommerceDB
        .getCollection(collection)
        .insertMany(data);

    print(`${collection}: ${result.insertedIds.length} documents inserted`);
});

print("Data import completed.");
