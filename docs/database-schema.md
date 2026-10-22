
# Database Schema

## Database Name
ecommerce

## Collections

### 1. users
Stores customer information.

Main fields:
- customer_id
- customer_unique_id
- customer_zip_code_prefix
- customer_city
- customer_state

### 2. products
Stores product information.

Main fields:
- product_id
- product_category_name
- product_weight_g
- product_length_cm
- product_height_cm
- product_width_cm

### 3. categories
Stores product category translations.

Main fields:
- product_category_name
- product_category_name_english

### 4. orders
Stores customer order information.

Main fields:
- order_id
- customer_id
- order_status
- order_purchase_timestamp
- order_delivered_customer_date

### 5. reviews
Stores customer reviews.

Main fields:
- review_id
- order_id
- review_score
- review_comment_title
- review_comment_message
- review_creation_date
