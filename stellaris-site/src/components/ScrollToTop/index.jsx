import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
// Quando o pathname (rota) mudar, rola a janela para o topo
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null; 
}

export default ScrollToTop;