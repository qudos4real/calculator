import React from 'react';
import './Wrapper.css'

const Wrapper = ({Children}) => {
    return (
        <div className='wrapper'>
            <h1>Hello</h1>
            {Children}
        </div>
    )
}
export default Wrapper
