# eCommerce-v2

A full-stack, responsive, and dynamic eCommerce web application that offers users a seamless online shopping experience.  
This version builds upon the original static **[eCommerce](https://github.com/khangvu0/eCommerce)** by introducing a connected PostgreSQL database, React component architecture, filtering and navigation functionality, and a detailed product page for an enhanced shopping experience.

## Live Demo

Check out the live site here: **[eCommerce-v2 Live Demo](https://ecommerce-v2-q1i4.onrender.com)**

---

## Technologies Used

### **Frontend**

-   **React.js (Vite)** – Component-based architecture for fast, modular UI development
-   **JavaScript (ES6+)** – Dynamic rendering and event handling
-   **CSS3** – Reusable styles, responsive layouts, and smooth animations
-   **React Router** – Client-side routing for seamless navigation
-   **Fetch API** – Fetches data dynamically from backend endpoints

### **Backend**

-   **Node.js & Express.js** – RESTful API for serving product and category data
-   **PostgreSQL** – Relational database hosted on Render for scalability
-   **Render Hosting** – Backend and database hosting

---

## Features

### Home Page

-   **Hero Section** – Eye-catching header image with title and tagline
-   **Dynamic Product Rendering** – Fetches certain product data directly from the PostgreSQL database
-   **Best Sellers Slider** – Horizontally scrollable product showcase with smooth snapping and hover effects
-   **Clickable Product Cards** – Each best-seller card links directly to its product’s **Detail Page**
-   **Promo Banner** – “Shop Now” button automatically navigates and scrolls to the **Bottoms section** of the Products page

### Products Page

-   **Dynamic Product Rendering** – Fetches all product data directly from the PostgreSQL database
-   **Category & Price Filters** – Users can filter products by:
    -   Product Type (Tops, Bottoms, Shoes, Accessories)
    -   Price Ranges
-   **Auto-Hiding Sections** – Sections disappear dynamically when no items match the selected filters
-   **Clickable Product Cards** – Each product card links directly to its product’s **Detail Page**
-   **Responsive Grid Layout** – Products are displayed in an adaptive grid for all screen sizes

### Detail Page

-   **Product Details View** – Displays each item’s image, title, price, and description
-   **Add to Cart Button** – Displays a confirmation message (`"Added to cart"`) when clicked
-   **Navigation** – Includes a “Back to Products” link for easy user flow

### Contact Page

-   **Functional Contact Form** – Includes validation for:
    -   Name
    -   Email
    -   Message
    -   Country
-   **JavaScript-based form validation** ensures proper input before submission

### Global Components

-   **Reusable Navbar and Footer** – Rendered components appearing on every page
-   **Header Product Section Navigation** – Includes a dropdown that automatically navigates and scrolls to respective sections of the Products page
-   **Functional Footer Form** – Includes a form that mimics text sign-ups and has validation for phone numbers
-   **Social Media Links** – Footer includes clickable social icons for accessibility and branding
-   **Fully Responsive Design** – Optimized across desktop, tablet, and mobile viewports

---

## Project Structure

```
ecommerce-v2/
│
├── client/             # React frontend
│ ├── public/           # Images and icons
│ ├── src/
│ │ ├── assets/         # Product images
│ │ ├── components/     # Reusable UI components
│ │ ├── pages/          # Homepage, Products, Contact, etc.
│ │ ├── styles/         # CSS modules
│ │ └── App.jsx         # Main app component
│ │ └── main.jsx        # Entry point for React code
│ └── index.html        # Entry point for entire application
│ └── package.json
│
├── server/             # Node.js backend
│ ├── db.js             # Database connection
│ ├── server.js/        # Backend logic
│ └── package.json
│
└── .gitignore
└── README.md
```

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone git@github.com:khangvu0/eCommerce-v2.git
cd ecommerce-v2
```

### 2. Install Dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in your server folder:

```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_URL=your_postgres_connection_string
PORT=5000
```

### 4. Run the App

your_postgres_connection_string

```bash
# In two separate terminals
npm run dev         # inside client/
npm start           # inside server/
```

---

## Lessons Learned

Through eCommerce-v2, I gained experience with:

-   Full-stack architecture — Connecting a React frontend to a Node/Express backend with PostgreSQL
-   Hosting on Render — Deploying both client and server with persistent database hosting
-   Dynamic filtering — Implementing conditional rendering logic for category and price filters
-   Responsive UI design — Maintaining layout integrity across devices
-   Scroll snapping and hover animations — Creating a smooth best sellers slider experience

---

## Future Improvements

-   Implement full cart functionality (item storage, quantity updates, and checkout)
-   Search bar for real-time product lookup
-   User authentication and profiles

---

## Screenshots

![Homepage](/client/src/assets/screenshot1.png)
![Products Page](/client/src/assets/screenshot2.png)
![Contact Page](/client/src/assets/screenshot3.png)
