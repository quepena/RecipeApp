import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import RecipesList from './components/recipesList';
import RecipeDetails from './components/recipeDetails';
import RecipePage from './components/recipePage';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/animatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
