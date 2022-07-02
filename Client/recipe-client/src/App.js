import './App.css';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
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
