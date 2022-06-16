


function MenuButton({icon, name}) {
    return(
        <a href="#" className="px-4 flex justify-end border-r-4 border-white">       
            <span>{icon}</span>    
            <span>{name}</span>        
        </a>
    );
}

export default MenuButton;