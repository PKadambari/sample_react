import React from 'react'
import {useAxiosGet} from '../Hooks/HttpRequests'
import Loader from '../Components/Loader'

function Product(){
    const url = 'https://dog.ceo/api/breeds/list/all'
    
    let content = null

    let products = useAxiosGet(url)

    if(products.data){
        content = 
        products.data.message.terrier.map((product, key) => 
            <div> {product} </div>
        )
    }

    if(products.error){
        content = <p className="text-red-400 font-bold">Error: the page you requested cannot be found</p>
    }

    if( products.loading){
        content = <Loader/>
    }
    return(<div>
        {content}
    </div>);
}

export default Product;