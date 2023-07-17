import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLogin from './components/Uitily/NavbarLogin'
import Footer from './components/Uitily/Footer'
import LoginPage from "./pages/Auth/LoginPage";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
