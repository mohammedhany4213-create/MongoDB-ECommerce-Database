
const ecommerceDB = db.getSiblingDB("ecommerce");

const collections = [
    "users",
    "products",
    "categories",
    "orders",
    "reviews"
];

collections.forEach((collectionName) => {
    const exists = ecommerceDB
        .getCollectionNames()
        .includes(collectionName);

    if (!exists) {
        ecommerceDB.createCollection(collectionName);
        print(`Created collection: ${collectionName}`);
    } else {
        print(`Collection already exists: ${collectionName}`);
    }
});

print("Database setup completed successfully.");
