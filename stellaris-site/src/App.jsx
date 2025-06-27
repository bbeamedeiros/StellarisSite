import './App.css'
<<<<<<< HEAD
import Header from './Componentes padrão/Header'
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path='/produtos' element={<ListaProdutos />} />
        <Route path="/parcerias" element={<PaginaParceiros />} />
        <Route path="/eventos" element={<ListaEventos />} />
      </Routes>

    </BrowserRouter>
  )
=======
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
    </>
  );
>>>>>>> af1ca9f82515c6dc55ed8d7e84b18857b1594c50
}

export default App;
