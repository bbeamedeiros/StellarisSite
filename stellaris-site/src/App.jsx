import './App.css'
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
}

export default App
