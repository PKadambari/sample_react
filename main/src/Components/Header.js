import React from 'react'
import Navigation from './Navigation'

function Header(){
    return(
        
        <header className = "border-b flex p-3 justify-between items-center"> 
            <span className="font-bold">
                AppHeader 
            </span> 
            <Navigation />
        </header>
    );
}

export default Header;