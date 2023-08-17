import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return(
        <div>
            <HelloWorld name="Bannu" />
            <h1 className="font-bold text-2xl">This is the home page</h1>
        </div>
    )
}

export default Home;