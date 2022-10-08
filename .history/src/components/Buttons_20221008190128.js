import React from 'react'


const numbers = [1, 2, 3, "+"]

function Buttons() {
    return (
        <div>
            {numbers.map((num) => {
                return (
                    <button key={num} className="number" value={num} onClick={
                        console.log({num})
                    } ></button>
                )
            })}
        </div>
    )
}

export default Buttons
