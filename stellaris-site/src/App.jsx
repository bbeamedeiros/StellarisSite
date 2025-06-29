import './App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Home from './Pages/Home/Home';
import Eventos from './Pages/Eventos';
import Produtos from './Pages/Produtos';
import Parceiros from './Pages/Parceiros';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
