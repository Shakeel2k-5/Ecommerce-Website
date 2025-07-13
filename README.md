# E-Commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **User Authentication**: Login and signup functionality
- **Product Catalog**: Browse products with search and filtering
- **Shopping Cart**: Add, remove, and manage cart items
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful design with custom color palette
- **TypeScript**: Full type safety and better development experience

## 🎨 Color Palette

- **Primary Accent**: Indigo (#4F46E5) - CTAs, buttons, highlights
- **Background Light**: Soft White (#F9FAFB) - Clean page background
- **Text Primary**: Charcoal Gray (#111827) - Strong contrast, easy to read
- **Text Secondary**: Cool Gray (#6B7280) - Subtext, placeholders
- **Borders/Lines**: Slate Gray (#E5E7EB) - Separators, input outlines
- **Success/Price**: Emerald Green (#10B981) - Discounts, positive messages
- **Error/Warning**: Rose Red (#F43F5E) - Out-of-stock, errors
- **Hover Accent**: Blue-600 (#2563EB) - Button hover state
- **Card Background**: White (#FFFFFF) - Product or info card base

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shakeel2k-5/Ecommerce-Website.git
   cd Ecommerce-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Connect your GitHub repository** to Vercel
2. **Vercel will automatically detect** the React app
3. **Deploy with one click**

The `vercel.json` file ensures proper routing for the single-page application.

## 📁 Project Structure

```
src/
├── auth/                 # Authentication components
│   ├── Login.tsx        # Login form
│   └── Signup.tsx       # Signup form
├── components/          # Main components
│   ├── ProductList.tsx  # Product catalog
│   └── Cart.tsx         # Shopping cart
├── context/            # React Context
│   └── CartContext.tsx # Cart state management
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 🎯 User Flow

1. **Login/Signup** → User authentication
2. **Product Catalog** → Browse and search products
3. **Add to Cart** → Add products to shopping cart
4. **Cart Management** → View, modify, or remove items
5. **Checkout** → Complete purchase (coming soon)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🌟 Features in Detail

### Authentication
- Clean login and signup forms
- Form validation
- Automatic redirects after authentication

### Product Catalog
- Responsive product grid
- Search functionality
- Category filtering
- Product images and descriptions
- Add to cart functionality

### Shopping Cart
- Real-time cart updates
- Quantity management
- Remove items
- Order summary
- Continue shopping

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shakeel Abdullah**
- GitHub: [@Shakeel2k-5](https://github.com/Shakeel2k-5)

---

Built with ❤️ using React and Tailwind CSS
