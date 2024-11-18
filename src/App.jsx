import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import './App.css'

function App() {

  return (
    <div className='contaiber-app'>
      <BrowserRouter>
        <CartProvider>
          
          <NavBar />
          
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a mi tienda!" } /> } />
            <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Bienvenidos a mi tienda!" } /> } />
            <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
            <Route path="/form" element={<Form />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
