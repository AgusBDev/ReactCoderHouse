//@ts-check
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Api from './Components/componente/Api'


function App() {
  return (
    <header className="">
      <div>
          <h1 className="font-bold uppercase p-4 border-b text-center border-gray-100">
            <a href="/" className="hover:text-gray-700">Tienda de cosas</a>
          </h1>
      </div>
      <Navbar/>
      <div className='container'>
        <ItemListContainer greeting={"Hola soy un greeting"}/>
      </div>
      {/* <Api/> */}
    </header>
  );
}

export default App;
