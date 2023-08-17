import React from 'react'
import Square from './Sqaure'

function Calculator(){
    const listOfValues = [7,8,9,4,5,6,1,2,3,0]
    const operators = ['/','*','-','+','cl','=']
    function handleClick(i) {
        return(<></>)
    }
    return(<>
        <div className="board-row">
        <Square value={listOfValues[0]} onSquareClick={() => handleClick(0)} />
        <Square value={listOfValues[1]} onSquareClick={() => handleClick(1)} />
        <Square value={listOfValues[2]} onSquareClick={() => handleClick(2)} />
        <Square value={operators[0]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={listOfValues[3]} onSquareClick={() => handleClick(3)} />
        <Square value={listOfValues[4]} onSquareClick={() => handleClick(4)} />
        <Square value={listOfValues[5]} onSquareClick={() => handleClick(5)} />
        <Square value={operators[1]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={listOfValues[6]} onSquareClick={() => handleClick(6)} />
        <Square value={listOfValues[7]} onSquareClick={() => handleClick(7)} />
        <Square value={listOfValues[8]} onSquareClick={() => handleClick(8)} />
        <Square value={operators[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={listOfValues[9]} onSquareClick={() => handleClick(6)} />
        <Square value={operators[3]} onSquareClick={() => handleClick(7)} />
        <Square value={operators[4]} onSquareClick={() => handleClick(8)} />
        <Square value={operators[5]} onSquareClick={() => handleClick(2)} />
      </div>
    </>)
}

export default Calculator;