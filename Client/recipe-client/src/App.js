import './App.css';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipesList from './components/recipesList';
import RecipeDetails from './components/recipeDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<RecipesList />} exact />
          <Route path='/recipes/:recipeId' element={<RecipeDetails />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
