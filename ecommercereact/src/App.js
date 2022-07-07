//@ts-check
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Api from './Components/componente/Api'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import CartContext from './Context/CartContext';


function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <div>
              <h1 className="font-bold uppercase p-4 border-b text-center border-gray-100">
                <a href="/" className="hover:text-gray-700">Tienda de cosas</a>
              </h1>
          </div>
          <Navbar/>        
          <div className='container m-auto'>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Hola soy un greeting"}/>}/>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>            
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
