import Home from './pages/Home';
import About from './pages/About';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Promo from './pages/Promo';
import Products from './pages/Products';
import NavigationBar from './components/NavigationBar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/promotion" element={<Promo />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
