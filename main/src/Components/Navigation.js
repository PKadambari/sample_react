import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                        icon={faBars}
                        onClick= {() => setShowMenu(!showMenu)}
                    />    
                {
                    maskTransitions(( props, item, key ) =>
                    item && 
                    <animated.div 
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        key={key}
                        style={props}
                        onClick={()=> setShowMenu(false)}
                    >
                    </animated.div>
                )
                }

                {
                    menuTransitions(( props, item, key ) =>
                    item && 
                    <animated.div 
                    className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50"
                        key={key}
                        style={props}
                    >
                        <NavigationMenu closeMenu={()=>setShowMenu(false)}/>
                    </animated.div>
                )
                }
            </span>
        </nav>
    );
}

export default Navigation;