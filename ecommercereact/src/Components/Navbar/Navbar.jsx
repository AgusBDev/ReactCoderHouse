import MenuButton from '../MenuButton/MenuButton'
import { HomeIcon, ArchiveIcon, InboxInIcon } from '@heroicons/react/outline'
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../Searchbar/SearchBar';


function Navbar() {   
    return (           
        <nav className="flex mt-4 items-center">
            <ul className="text-sm flex justify-start">
                <li className="py-1">                                    
                    <MenuButton icon={<HomeIcon className='w-5 mr-2'/>} name={"Inicio"}/>                                                      
                </li>
                <li className="py-1">
                    <MenuButton icon={<ArchiveIcon className='w-5 mr-2'/>} name={"Productos"}/>
                </li>
                <li className="py-1">
                    <MenuButton icon={<InboxInIcon className='w-5 mr-2'/>} name={"Contacto "}/>
                </li>
            </ul>
            <div className="flex justify-center items-center mr-auto ml-auto">
                <SearchBar/> 
            </div>          
            
            <CartWidget/>
        </nav>
    );
}
export default Navbar;
