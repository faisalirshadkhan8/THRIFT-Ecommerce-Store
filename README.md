# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🛍️ THRIFT - E-commerce Store

A modern, responsive thrift e-commerce platform built with React, TypeScript, and Tailwind CSS. Features a curated selection of vintage and contemporary fashion items with a sleek, user-friendly interface.

![THRIFT Store](https://img.shields.io/badge/Status-In%20Development-orange)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-blue)

## ✨ Features

### 🏠 Homepage
- **Hero Section** with animated typography using GSAP
- **Popular Items** grid with interactive product cards
- **Brand Story** split-screen layout with compelling visuals
- **Latest Items** carousel with navigation controls
- **Sneaker Hero Section** with premium product showcase
- **Professional Footer** with newsletter signup and social links

### 🎨 Design Features
- **Responsive Design** - Works seamlessly on all devices
- **Smooth Animations** - GSAP-powered micro-interactions
- **Modern UI/UX** - Clean, minimalist aesthetic
- **Consistent Theming** - Black, white, and gray color palette
- **Typography** - Oswald font for headings, clean sans-serif for body text

### 🚀 Performance
- **Optimized Images** - Proper image optimization and lazy loading
- **Fast Loading** - Vite-powered development and build process
- **Smooth Transitions** - Hardware-accelerated CSS animations
- **SEO Ready** - Semantic HTML structure and meta tags

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** GSAP (GreenSock)
- **Build Tool:** Vite
- **Icons:** Custom SVG icons
- **Font:** Google Fonts (Oswald)

## 📂 Project Structure

```
src/
├── components/           # Reusable components
│   └── SneakerHeroSection.tsx
├── assets/              # Images and static files
│   ├── bg1.jpg         # Hero background
│   ├── bg2.jpg         # Section backgrounds
│   ├── logo.png        # Brand logo
│   └── products/       # Product images
├── App.tsx             # Main application component
├── animations.css      # Custom animations
├── index.css          # Global styles
└── main.tsx           # Application entry point
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/faisalirshadkhan8/THRIFT-Ecommerce-Store.git
cd THRIFT-Ecommerce-Store
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📋 Roadmap

### Phase 1 - Core Shopping (In Progress)
- [ ] Shop/Products Page with filtering
- [ ] Product Detail Page
- [ ] Shopping Cart
- [ ] Checkout Process

### Phase 2 - User System
- [ ] Authentication (Login/Register)
- [ ] User Dashboard
- [ ] Order Tracking
- [ ] Wishlist

### Phase 3 - Content Pages
- [ ] About Us
- [ ] Contact Page
- [ ] Customer Service Pages

### Phase 4 - Advanced Features
- [ ] Search & Filters
- [ ] Reviews System
- [ ] Mobile App (PWA)

## 🎨 Design System

### Colors
- **Primary:** `#000000` (Black)
- **Secondary:** `#FFFFFF` (White)  
- **Accent:** `#374151` (Gray-700)
- **Background:** `#F9FAFB` (Gray-50)

### Typography
- **Headings:** Oswald (Google Fonts)
- **Body:** System Sans-serif stack
- **Weights:** 400 (Regular), 700 (Bold), 900 (Black)

### Components
- Consistent spacing with Tailwind's spacing scale
- Smooth transitions (300ms ease)
- Subtle shadows and hover effects
- Mobile-first responsive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Faisal Irshad Khan**
- GitHub: [@faisalirshadkhan8](https://github.com/faisalirshadkhan8)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- GSAP for powerful animations
- Unsplash for placeholder images

---

⭐ Star this repository if you find it helpful!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
