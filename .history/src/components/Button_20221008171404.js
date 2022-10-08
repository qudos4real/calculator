import React from 'react'
import './Button.css'

function Button({className, value, onClick}) {
    return (
        <div>
            <button className='{className}' onClick={onClick}>
                {value}
            </button>
        </div>
    )
}

export default Button
