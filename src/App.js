import './App.scss';

// Component
import Header from './component/shared/header/Header';
import Footer from './component/shared/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header
        navbarItems={["Anasayfa", "Hakkımızda", "Kategoriler", "Galeri", "İletişim"]}
      />
      <Footer />
    </div>
  );
}

export default App;