import MenuButton from '../MenuButton/MenuButton'
import { HomeIcon, ArchiveIcon, InboxInIcon } from '@heroicons/react/outline'
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../Searchbar/SearchBar';


function Navbar() {   
    return (           
        <nav className="flex mt-4 items-center w-full">
            <ul className="text-sm flex justify-start w-1/3">
                <li className="py-1">                                    
                    <MenuButton icon={<HomeIcon className='w-5 mr-2'/>} name={"Inicio"} href="/"/>                                                      
                </li>
                <li className="py-1">
                    <MenuButton icon={<ArchiveIcon className='w-5 mr-2'/>} name={"Productos"} href="/"/>
                </li>
                <li className="py-1">
                    <MenuButton icon={<InboxInIcon className='w-5 mr-2'/>} name={"Contacto"} href="#"/>
                </li>
            </ul>
            <div className="flex justify-center items-center mx-auto w-1/3">
                <SearchBar/> 
            </div>          
            

            <div className=' flex w-1/3 justify-end'>
                <CartWidget
                    className="mr-3"
                />
            </div>
        </nav>
    );
}
export default Navbar;
