//@ts-check
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <header className="g">
      <div>
          <h1 className="font-bold uppercase p-4 border-b text-center border-gray-100">
            <a href="/" className="hover:text-gray-700">Tienda de cosas</a>
          </h1>
      </div>
      <Navbar/>
      <ItemListContainer greeting={"Hola soy un greeting"}/>
    </header>
  );
}

export default App;
