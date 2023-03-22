import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/PageHome';
import PageLogin from '../pages/PageLogin';
import PageProdutos from '../pages/PageProdutos';
import PageAdmin from '../pages/PageAdmin';
import PageCadastro from '../pages/PageCadastro';
import PageDetalhes from '../pages/PageDetalhes';



export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>      

        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<PageProdutos />} />        
        <Route path="/login" element={<PageLogin />} />
        <Route path='/' element={<PageAdmin />} />
        <Route path='/admin' element={<PageAdmin />} />
        <Route path='/cadastro' element={<PageCadastro />} />
        <Route path='/detalhes' element={<PageDetalhes />} />
        
      </WrapperRoutes>
    </BrowserRouter>
  )
}

