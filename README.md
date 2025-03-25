# 🌍 Countries GraphQL - React + TypeScript + Vite

This project is a **React** application built with **TypeScript** and **Vite**, using **GraphQL** to fetch country data.  

## 🚀 Features
- Fetches country data using **GraphQL**
- Filters countries by continent  
- Infinite scrolling for smooth user experience  
- Modern **React Hooks** and **TypeScript** for better scalability  

## 📦 Installation

Clone the repository:  
```bash
git clone <repo-url>
```

Navigate to the project folder:  
```bash
cd countries-graphql
```

Install dependencies:  
```bash
npm install
```

Start the development server:  
```bash
npm run dev
```

Your application will be available at:  
🔗 `http://localhost:5173`

## 📦 Building for Production  

Generate a production build:  
```bash
npm run build
```

## ⚡ Technologies Used
- **React** + **Vite** for fast development  
- **TypeScript** for type safety  
- **GraphQL & Apollo Client** for efficient data fetching  
- **Tailwind CSS** for modern styling  


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
