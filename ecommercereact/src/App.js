//@ts-check
import './App.css';
import Navbar from './Components/Navbar';


function App() {
  return (
    <header>
      <div>
          <h1 className="font-bold uppercase p-4 border-b text-center border-gray-100">
            <a href="/" className="hover:text-gray-700">Tienda de cosas</a>
          </h1>
      </div>
      <Navbar/>
    </header>
  );
}

export default App;
