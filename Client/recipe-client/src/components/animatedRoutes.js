import { Routes, Route, useLocation } from 'react-router-dom';
import RecipesList from './recipesList';
import RecipeDetails from './recipeDetails';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<RecipesList />} exact />
                <Route path='/recipes/:recipeId' element={<RecipeDetails />} exact />
                <Route path="/search/:keyword" element={<RecipesList />} exact />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes