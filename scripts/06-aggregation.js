const ecommerceDB = db.getSiblingDB("ecommerce");

// Find products weighing more than 1000g
print("Products weighing more than 1000g");

ecommerceDB.products.aggregate([
    {
        $match: {
            product_weight_g: { $gt: 1000 }
        }
    },
    {
        $limit: 10
    }
]).forEach(printjson);

// Count customers in each state
print("Customers Count By State");

ecommerceDB.users.aggregate([
    {
        $group: {
            _id: "$customer_state",
            totalCustomers: { $sum: 1 }
        }
    }
]).forEach(printjson);


// Sort states by customer count
print("States Sorted By Customers");

ecommerceDB.users.aggregate([
    {
        $group: {
            _id: "$customer_state",
            totalCustomers: { $sum: 1 }
        }
    },
    {
        $sort: {
            totalCustomers: -1
        }
    }
]).forEach(printjson);


// Calculate average product weight
print("Average Product Weight");

ecommerceDB.products.aggregate([
    {
        $group: {
            _id: null,
            averageWeight: { $avg: "$product_weight_g" }
        }
    }
]).forEach(printjson);

// Find minimum and maximum product weight
print("Min And Max Product Weight");

ecommerceDB.products.aggregate([
    {
        $group: {
            _id: null,
            minWeight: { $min: "$product_weight_g" },
            maxWeight: { $max: "$product_weight_g" }
        }
    }
]).forEach(printjson);


// Display only selected product fields
print("Product Projection");

ecommerceDB.products.aggregate([
    {
        $project: {
            _id: 0,
            product_id: 1,
            product_category_name: 1,
            product_weight_g: 1
        }
    },
    {
        $limit: 10
    }
]).forEach(printjson);



//Count products in the perfumaria category
print("Perfumaria Products Count");

ecommerceDB.products.aggregate([
    {
        $match: {
            product_category_name: "perfumaria"
        }
    },
    {
        $count: "totalProducts"
    }
]).forEach(printjson);

// Calculate statistics for each category
print("Product Statistics By Category");

ecommerceDB.products.aggregate([
    {
        $group: {
            _id: "$product_category_name",
            totalProducts: { $sum: 1 },
            averageWeight: { $avg: "$product_weight_g" },
            maxWeight: { $max: "$product_weight_g" },
            minWeight: { $min: "$product_weight_g" }
        }
    },
    {
        $sort: {
            totalProducts: -1
        }
    },
    {
        $limit: 10
    }
]).forEach(printjson);

// Example using an array of order items
ecommerceDB.orders.aggregate([
    {
        $project: {
            order_id: 1,
            order_status: 1
        }
    },
    {
        $limit: 10
    }
]).forEach(printjson);
