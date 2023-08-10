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
import CheckoutMethodPage from "./pages/CheckoutMethodPage/CheckoutMethodPage";
import AdminAllProductPage from "./pages/Admin/AdminAllProductPage";
import AdminAllProducts from "./components/Admin/AdminAllProducts";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";




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
      <Route path="/order/paymethoud" element={<CheckoutMethodPage />} />
      <Route path="/admin/addproduct" element={<AdminAllProductPage />} />
      <Route path="/admin/allproducts" element={<AdminAllProducts />} />
      <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
      <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
      <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
      <Route path="/admin/addcategory" element={<AdminAddCategoryPage />}  />
      <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
      <Route path="/admin/addproducts" element={<AdminAddProductsPage />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
