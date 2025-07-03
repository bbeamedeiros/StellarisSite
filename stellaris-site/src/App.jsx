import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './Pages/Home/Home';
import Eventos from './Pages/Eventos';
import Produtos from './Pages/Produtos';
import Parceiros from './Pages/Parceiros';
import Avaliar from './Pages/AvaliarEvento/avaliar';
import SaibaMaisPortal from './Pages/SaibaMaisPortal';
import SaibaMaisTardezinha from './Pages/SaibaMaisTardezinha';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route path="/avaliar" element={<Avaliar />} />
        <Route path="/saiba-mais-portal" element={<SaibaMaisPortal />} />
        <Route path="/saiba-mais-tardezinha" element={<SaibaMaisTardezinha />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;