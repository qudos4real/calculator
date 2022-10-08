import React from 'react';
import './Wrapper.css'

const Wrapper = ({Children}) => {
    return (
        <div className='wrapper'>
            {Children}
        </div>
    )
}
export default Wrapper
