import React from 'react'


const numbers = [[1, 2, 3, "+"], [4,5,6,"-"]]

function Buttons() {
    return (
        <div>
          
          {numbers.flat().map((num) => {
                return (
                    <button key={num} className="num" value={num} onClick={() => {
                        console.log(`${num} clicked`)
                    }
                    } >{num}</button>
                )
            })}

            {numbers.map((num) => {
                return (
                    <button key={num} className="num" value={num} onClick={() => {
                        console.log(`${num} clicked`)
                    }
                    } >{num}</button>
                )
            })}
        </div>
    )
}

export default Buttons
