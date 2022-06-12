

function Navbar() {   
    return (           
        <nav className="text-center flex mt-4 items-center">
            <ul className="text-sm flex justify-start ">
                <li className="py-1">
                    <a href="#" className=" px-4 flex justify-end border-r-4 border-white">
                        <svg className="w-5 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <span>Inicio</span>
                    </a>
                </li>
                <li className="py-1">
                    <a href="#" className=" px-4 flex justify-end border-r-4 border-white">
                        <svg className="w-5 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        <span>Productos</span>        
                    </a>
                </li>
                <li className="py-1">
                    <a href="#" className=" px-4 flex justify-end border-r-4 border-white">
                        <svg className="w-5 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span>Contacto</span>
                    </a>
                </li>
            </ul>
            <input type="search" placeholder="Busca en nuestros productos" className="border border-black h-7 w-72 justify-center">
            </input>      

        </nav>
    );
  }
export default Navbar;