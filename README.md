PlantPort - Plant E-commerce Platform
PlantPort is a simple yet powerful e-commerce platform specialized in selling plants and gardening products with same-day delivery service. Built using vanilla JavaScript, HTML, CSS, Node.js, and SQLite.
Features

🌱 Product Catalog: Browse through various plants and gardening products
🚚 Same-Day Delivery: Available for orders placed before 2 PM
🛒 Shopping Cart: Add/remove items, view total
💳 Checkout System: Secure form for delivery details
📱 Responsive Design: Works on both mobile and desktop
🔍 Search Functionality: Easy product search
👤 Admin Panel: Manage inventory and products

Technology Stack

Frontend: HTML5, CSS3, Vanilla JavaScript
Backend: Node.js, Express.js
Database: SQLite3
No external frameworks used (No React, Angular, or Vue)

Project Structure
Copyplantport/
├── public/
│   ├── index.html          # Homepage
│   ├── products.html       # Product details page
│   ├── cart.html          # Shopping cart page
│   ├── styles.css         # All CSS styles
│   └── js/
│       ├── home.js        # Homepage functionality
│       ├── products.js    # Product page functionality
│       └── cart.js        # Cart functionality
├── package.json
├── README.md
└── server.js              # Backend server
Setup Instructions

Prerequisites

Node.js installed (v14 or higher)
NPM (Node Package Manager)


Installation
bashCopy# Clone the repository (if using git)
git clone https://github.com/Rehanali9044/Plantport-MicroSaas-.git

# Navigate to project directory
cd plantport

# Install dependencies
npm init -y
npm install express sqlite3

Database Setup

SQLite database will be automatically created when server starts
Initial sample data will be populated


Running the Application
bashCopy# Start the server
node server.js

Access the Application

Open browser and visit: http://localhost:3000
Admin panel: http://localhost:3000/admin (if implemented)



API Endpoints

GET /api/products - Get all products
GET /api/products/:id - Get specific product
POST /api/orders - Create new order
POST /api/admin/products - Add new product (admin only)

Features Implementation

Homepage

Banner highlighting same-day delivery
Featured products display
Search functionality


Product Page

Detailed product information
Add to cart functionality
Buy now option


Cart Page

List of selected items
Quantity adjustment
Total price calculation
Checkout button


Checkout Page

Delivery details form
Order summary
Order confirmation

Testing

Frontend Testing

Verify all pages load correctly
Test responsive design on different screen sizes
Ensure cart functionality works
Validate form submissions


Backend Testing

Test all API endpoints
Verify database operations
Check error handling



Future Improvements

User authentication system
Payment gateway integration
Order tracking system
Product reviews and ratings
Advanced search filters
Image upload functionality
Order history
Wishlist feature

Contributing

Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a new Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
Author
Rehan Ali
Acknowledgments
