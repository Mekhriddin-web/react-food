import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Category from '../pages/Category';
import NotFound from '../pages/NotFound';
import Recipe from '../pages/Recipe';

const Main = () => {
  return (
    <main className="content container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/meal/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
