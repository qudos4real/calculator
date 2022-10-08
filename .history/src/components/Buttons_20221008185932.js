import React from 'react'


const numbers = [1,2,3,"+"]

function Buttons() {
    return (
        <div>
         {numbers.map((number) => { return (
            <button></button>
   )})}
        </div>
    )
}

export default Buttons
