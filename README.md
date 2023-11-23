
# MERN Ecommerce

## Demo Link
https://elegance-united.onrender.com

## Table of Content:
1. [Description](https://github.com/JakubGaszczak/MERN-Ecommerce#description)
2. [Technologies Used](https://github.com/JakubGaszczak/MERN-Ecommerce#technologies-used)
3. [ScreenShots](https://github.com/JakubGaszczak/MERN-Ecommerce#screenshots)
4. [Setup](https://github.com/JakubGaszczak/MERN-Ecommerce#setup)

## Description

Welcome to my MERN Ecommerce Store project! This elegant online store is designed to showcase and sell a variety of products, with a focus on men's accessories such as watches, belts, and sunglasses.

Features:

- Sleek Design: Our store features a modern and elegant design to provide users with a visually appealing and user-friendly shopping experience,

- Product Categories: Explore a curated collection of high-quality men's products, including watches, belts, and sunglasses, all conveniently categorized for easy navigation,

- Customer Reviews: Share your thoughts by adding reviews to your favorite products. The review feature allows users to provide feedback and rate products based on their experiences,

- Shopping Cart: Seamlessly add products to your cart, review your selections,

- User Authentication: Secure user authentication ensures a personalized experience, allowing users to create accounts, log in, and manage their profiles,

- Admin Panel: The admin panel allows administrators to update product listings, manage existing products, and perform operations on user accounts for efficient store management,

- Responsive Design: Whether you're browsing on a computer, tablet, or smartphone, our store is designed to provide a seamless experience across all devices

## Technologies Used

- MongoDB: A NoSQL database for storing product information, user data, and customer reviews,

- Node.js: A server-side JavaScript runtime for executing code on the server,

- Express.js: A backend framework for building a robust and scalable server,

- React.js: A frontend library for creating dynamic and interactive user interfaces,

- Redux: State management is handled with Redux to efficiently manage the application's state,

- TypeScript: The project is developed using TypeScript to enhance code maintainability and provide static typing for a more robust development experience

## Screenshots
### HomeScreen
<img width="100%" alt="ProductPanel" src="https://github.com/JakubGaszczak/MERN-Ecommerce/assets/106550766/dda6f863-6612-477a-8a6a-35374dc17f67">

### Dashboard
<img width="100%" height="100%" alt="ProductPanel" src="https://github.com/JakubGaszczak/MERN-Ecommerce/assets/106550766/08d990ba-c426-40a7-89ab-aaaa74aa8685">

### UserPanel
<img width="100%" alt="ProductPanel" src="https://github.com/JakubGaszczak/MERN-Ecommerce/assets/106550766/6fbb4d7f-265f-406d-aac7-41eb984d5faa">

### ProductPanel
<img width="100%" alt="ProductPanel" src="https://github.com/JakubGaszczak/MERN-Ecommerce/assets/106550766/50c9a35d-870b-4d90-9902-5a0367ce601c">

## Setup
Create a MongoDB database and obtain your MongoDB URI - https://www.mongodb.com

### Env Variables
add .env file 

```
NODE_ENV = development
PORT = 3001
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:3001)
npm run dev

# Run backend only
npm run server
```

```
Sample User Logins

admin@gmail.com (Admin)
12345678

customer@gmail.com (Customer)
12345678
```


