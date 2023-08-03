import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLogin from './components/Uitily/NavbarLogin'
import Footer from './components/Uitily/Footer'
import LoginPage from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";
import Categoryallpage from "./components/categorypage/Categoryallpage";
import AllBrandPage from "./pages/brands/AllBrandPage";
import ShopProducts from "./pages/Products/ShopProducts";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";




function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/allCategory" element={<Categoryallpage />} />
      <Route path="/allbrand" element={<AllBrandPage />} />
      <Route path="/products" element={<ShopProducts/>} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartPage /> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
