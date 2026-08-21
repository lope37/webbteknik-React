import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductGridPage from './pages/ProductGridPage';
import ProductsPage from './pages/ProductsPage';
import UnderConstructionPage from './pages/UnderConstructionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-oss" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/produkter" element={<ProductGridPage />} />
        <Route path="/produkt" element={<ProductsPage />} />
        <Route path="/under-konstruktion" element={<UnderConstructionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;