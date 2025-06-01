# GlowMart Beauty - HeroUI Hackathon Project

A modern beauty and cosmetics e-commerce platform built with React, TypeScript, and HeroUI components. This project was developed as part of the HeroUI Hackathon, showcasing the power and flexibility of the HeroUI library.


![GlowMart Preview](/preview.png)

## 🌐 Live Preview

Check out the live demo: [GlowMart Beauty](https://glowmart-heroui.vercel.app/)

## 🎯 Development Journey

This project has an interesting development story:
- Initially developed using HeroUI Chat, following the hackathon's guidelines
- Due to technical constraints with HeroUI Chat, development was seamlessly transitioned to a local IDE
- The project maintains complete compatibility with HeroUI's design system and components
- All features and functionality were preserved during the transition

## 🚀 Features

- Modern and responsive UI built with HeroUI components
- Smooth animations using Framer Motion
- Type-safe development with TypeScript
- Tailwind CSS for custom styling
- React Router for seamless navigation
- Admin Dashboard for product and order management

## 🛠️ Tech Stack

- React 18
- TypeScript
- HeroUI (@heroui/react)
- Tailwind CSS
- Framer Motion
- Vite
- React Router DOM

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React context providers
├── pages/         # Page components
│   ├── admin/     # Admin dashboard pages
│   └── /    # Client-facing pages
├── routes/        # Route configurations
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jyothismariyaa/glowmart-heroui.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🎨 HeroUI Integration

This project extensively uses HeroUI components and utilities:
- `@heroui/react` for UI components
- `@heroui/use-theme` for theme management
- Custom components built on top of HeroUI's design system
- Maintains HeroUI's design principles despite the development environment change

## 📝 Development Notes

- The project was initially built using HeroUI Chat during the hackathon
- Development was continued in a local IDE due to technical constraints with HeroUI Chat
- The transition was smooth and maintained all project requirements
- All HeroUI components and design principles were preserved
- The project successfully demonstrates the flexibility of HeroUI's ecosystem
- Admin dashboard is accessible at `/admin` route with secure authentication

## 🔐 Admin Dashboard

The project includes a comprehensive admin dashboard accessible at `/admin` route:

To access the admin dashboard:
1. Visit the application
2. Navigate to `/admin` route

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
