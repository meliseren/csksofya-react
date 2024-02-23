import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
import './App.scss';

// Component
import Header from './component/shared/header/Header';
import About from './view/About';
import Categories from './view/Categories';
import Gallery from './view/Gallery';
import Contact from './view/Contact';
import Footer from './component/shared/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header
          navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]}
        />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;