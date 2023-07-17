import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLogin from './components/Uitily/NavbarLogin'
import Footer from './components/Uitily/Footer'

function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
