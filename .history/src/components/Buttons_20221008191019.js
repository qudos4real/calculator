import React from 'react'


const numbers = [1, 2, 3, "+"]

function Buttons() {
    return (
        <div>
            {numbers.map((num) => {
                return (
                    <button key={num} className="num" value={num} onClick={(e) =>{

                        console.log({num})
                    }
                    } >{num}</button>
                )
            })}
        </div>
    )
}

export default Buttons
