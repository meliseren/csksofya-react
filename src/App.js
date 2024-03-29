import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
import './App.scss';

// Component
import Header from './component/shared/header/Header';
import HomePage from './view/HomePage';
import About from './view/About';
import Categories from './view/Categories';
import Gallery from './view/Gallery';
import Contact from './view/Contact';
import Footer from './component/shared/footer/Footer';
import LoginView from "./view/auth/login/LoginView";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]} /><HomePage /><Footer /></>} />
          <Route path="/About" element={<><Header navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]} /><About /><Footer /></>} />
          <Route path="/Categories" element={<><Header navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]} /><Categories /><Footer /></>} />
          <Route path="/Gallery" element={<><Header navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]} /><Gallery /><Footer /></>} />
          <Route path="/Contact" element={<><Header navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]} /><Contact /><Footer /></>} />
          <Route path="/LoginView" element={<LoginView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
