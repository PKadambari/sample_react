import React from 'react'

function Square(props){
    return(
        <button className="h-10 px-6 bg-black text-white font-semibold border rounded-md border-slate-50" type="button" 
         key={props.value} onClick = {props.onSqaureClick}>
            {props.value}
        </button>
    )
}

export default Square;