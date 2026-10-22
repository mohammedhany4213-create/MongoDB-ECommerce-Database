# MongoDB E-Commerce Database

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-Scripting-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Python-Data_Conversion-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB_Atlas-Cloud-00A35C?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Project-Educational-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Collections-5-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Documents-331K-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square" />
</p>

<p align="center">
  A hands-on MongoDB project built with the Brazilian E-Commerce Public Dataset by Olist.
  <br />
  Exploring database management, CRUD operations, aggregation pipelines, and indexing.
</p>

---

## Overview

This project demonstrates practical MongoDB database operations using real-world e-commerce data.

The database is organized into five collections containing customer, product, category, order, and review information.

### Highlights

- Database and collection creation.
- JSON data importing.
- CRUD operations.
- Advanced filtering and query operators.
- Aggregation pipelines for data analysis.
- Index creation and query performance analysis.

## Tech Stack

| Technology | Purpose |
|---|---|
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) | Database |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | MongoDB scripts |
| ![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white) | CSV to JSON conversion |
| ![MongoDB Atlas](https://img.shields.io/badge/Atlas-00A35C?logo=mongodb&logoColor=white) | Cloud database |
| ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) | Version control |

## Database Structure

**Database:** `ecommerce`

| Collection | Description | Documents |
|---|---|---:|
| `users` | Customer information | 99,441 |
| `products` | Product information | 32,951 |
| `categories` | Category translations | 71 |
| `orders` | Customer orders | 99,441 |
| `reviews` | Customer reviews | 99,224 |
| **Total** | **5 Collections** | **331,128** |

## Project Structure

```text
MongoDB-ECommerce-Database/
│
├── data/
│   ├── olist_customers_dataset.json
│   ├── olist_order_reviews_dataset.json
│   ├── olist_orders_dataset.json
│   ├── olist_products_dataset.json
│   └── product_category_name_translation.json
│
├── docs/
│
├── scripts/
│   ├── 01-database-setup.js
│   ├── 02-insert-data.js
│   ├── 03-find-queries.js
│   ├── 04-update-queries.js
│   ├── 05-delete-queries.js
│   ├── 06-aggregation.js
│   └── 07-indexes.js
│
├── .gitignore
└── README.md
```

## Features & Implementation

### 01. Database Setup

- Create the `ecommerce` database.
- Create collections if they do not already exist.
- Keep setup scripts reusable.

### 02. Data Import

- Load JSON datasets into MongoDB.
- Organize data into five collections.
- Work with real-world e-commerce records.

### 03. CRUD Operations

| Operation | MongoDB Methods |
|---|---|
| Create | `insertOne()`, `insertMany()` |
| Read | `find()`, `findOne()` |
| Update | `updateOne()`, `updateMany()` |
| Delete | `deleteOne()`, `deleteMany()` |

### 04. Aggregation Pipeline

Practice data analysis using:

`$match` · `$group` · `$sort` · `$project` · `$limit` · `$count` · `$sum` · `$avg` · `$min` · `$max` · `$unwind`

### 05. Indexing

- Single Field Indexes.
- Compound Indexes.
- Unique Indexes.
- Ascending and Descending Indexes.
- Query execution analysis using `explain()`.

## Getting Started

### Prerequisites

- MongoDB Atlas account or local MongoDB server.
- MongoDB Shell (`mongosh`).
- Git.

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedhany4213-create/MongoDB-ECommerce-Database.git
cd MongoDB-ECommerce-Database
```

### 2. Connect to MongoDB

```bash
mongosh "YOUR_MONGODB_CONNECTION_STRING"
```

### 3. Setup the Database

```javascript
load("scripts/01-database-setup.js")
```

### 4. Import the Data

```javascript
load("scripts/02-insert-data.js")
```

> [!IMPORTANT]
> Run the insertion script only once on an empty database to avoid duplicate documents.

### 5. Run the Scripts

Execute the scripts individually inside `mongosh`:

```javascript
load("scripts/03-find-queries.js")
load("scripts/04-update-queries.js")
load("scripts/05-delete-queries.js")
load("scripts/06-aggregation.js")
load("scripts/07-indexes.js")
```

> [!WARNING]
> Update and Delete scripts modify or remove actual documents. Use a test database if you want to preserve the original dataset.

## Dataset

This project uses the **Brazilian E-Commerce Public Dataset by Olist**.

[![Dataset](https://img.shields.io/badge/Dataset-Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce)

The dataset contains information about customers, orders, products, reviews, and product categories.

## Learning Objectives

- Understand MongoDB database and collection management.
- Import and manage JSON documents.
- Practice CRUD operations.
- Use query and comparison operators.
- Build aggregation pipelines.
- Create and manage indexes.
- Analyze query execution performance.

## Author

**Mohamed Hany**

<p>
  <a href="https://github.com/mohammedhany4213-create">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/mohamed-hany-a9b61741a/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>

---

<p align="center">
  <i>Built to practice MongoDB database management and e-commerce data analysis.</i>
</p>