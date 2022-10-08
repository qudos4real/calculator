import React from 'react'

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
