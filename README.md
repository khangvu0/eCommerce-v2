# eCommerce-v2

A full-stack, responsive, and dynamic eCommerce web application that offers users a seamless online shopping experience. This version builds on the original static eCommerce-v1 by introducing database integration, filtering functionality, and React-based component architecture for scalability and interactivity.

## Live Demo

Check out the live site here: **[eCommerce-v2 Live Demo](https://ecommerce-v2-q1i4.onrender.com)**

---

## Technologies Used

### **Frontend**

-   **React.js (Vite)** – Component-based architecture for fast, modular UI development
-   **JavaScript (ES6+)** – Dynamic rendering and event handling
-   **SCSS / CSS3** – Reusable styles, responsive layouts, and smooth animations
-   **React Router** – Client-side routing for seamless navigation
-   **Fetch API** – Fetches data dynamically from backend endpoints

### **Backend**

-   **Node.js & Express.js** – RESTful API for serving product and category data
-   **PostgreSQL** – Relational database hosted on Render for scalability
-   **Render Hosting** – Backend and database hosting

---

## Features

-   **Dynamic Product Rendering** – Fetches live data from the PostgreSQL database
-   **Filtering System** – Users can filter by:
    -   Product Type (Tops, Bottoms, Shoes, Accessories)
    -   Price Ranges
-   **Auto-Hiding Sections** – Categories disappear dynamically when no products match the selected filter
-   **Responsive Design** – Fully optimized for mobile, tablet, and desktop
-   **Reusable Components** – Modular React structure for Product Cards, Filters, and Sections
-   **Best Sellers Slider** – Horizontally scrollable product showcase using scroll snapping
-   **Clean UI/UX** – Consistent design and interactive hover effects

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

-   Shopping cart and checkout functionality
-   Search bar for real-time product lookup
-   User authentication and profiles

---

## Screenshots

![Homepage](/client/src/assets/screenshot1.png)
![Products Page](/client/src/assets/screenshot2.png)
![Contact Page](/client/src/assets/screenshot3.png)
