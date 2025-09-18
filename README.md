# E-Shop - React E-commerce Application

A modern, responsive e-commerce web application built with React, featuring product browsing, search functionality, shopping cart, and contact form.

## Features

- **Product Catalog**: Browse products fetched from FakeStore API
- **Search & Filter**: Search products by name and filter by categories
- **Shopping Cart**: Add/remove items with real-time cart count
- **Product Details**: Detailed product pages with images and descriptions
- **Contact Form**: Contact page with form validation
- **Responsive Design**: Mobile-friendly interface using Ant Design
- **Navigation**: Smooth routing with React Router

## Tech Stack

- **Frontend**: React 19.1.1
- **UI Library**: Ant Design 5.27.3
- **Routing**: React Router DOM 7.9.1
- **HTTP Client**: Axios 1.12.1
- **Testing**: React Testing Library, Jest
- **API**: FakeStore API for product data

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with search and cart
│   └── ProductCard.jsx # Product display card component
├── pages/              # Page components
│   ├── Home.jsx        # Product listing with filters
│   ├── Product.jsx     # Individual product details
│   ├── Cart.jsx        # Shopping cart page
│   └── Contact.jsx     # Contact form page
├── api/                # API integration
│   └── api.js          # Axios configuration and API calls
├── App.js              # Main application component
└── index.js            # Application entry point
```

## Key Components

### Header
- Logo and navigation
- Search functionality
- Category filter dropdown
- Shopping cart badge
- User menu dropdown

### Home Page
- Product grid layout
- Search and category filtering
- Responsive design for all screen sizes

### Product Page
- Detailed product information
- Add to cart functionality
- Navigation back to product list

### Shopping Cart
- List of added items
- Remove items functionality
- Total price calculation

### Contact Page
- Contact form with validation
- Name, email, and message fields
- Form submission handling

## API Integration

The application uses the [FakeStore API](https://fakestoreapi.com/) for:
- Fetching product listings
- Getting individual product details
- Retrieving product categories

## Styling

- **Ant Design**: Primary UI component library
- **CSS**: Custom styles in App.css and index.css
- **Responsive**: Mobile-first design approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Future Enhancements

- User authentication and login
- Product reviews and ratings
- Wishlist functionality
- Payment integration
- Order history
- Admin panel for product management

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please use the contact form in the application or reach out through the project repository.