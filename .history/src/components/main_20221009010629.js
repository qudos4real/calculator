
import React from 'react'

function Main() {
    return (
        <>
            <div className="major-container">
                <h3>A calculator created with Flexbox</h3>
                <div className="container">
                    <div className="output"><h3>123</h3></div>
                    <div className="container-elements">
                        <div className="container2">
                            <button className="calc_btn number">1</button>
                            <button className="calc_btn number">2</button>
                            <button className="calc_btn number">3</button>
                            <button className="calc_btn operator">+</button>
                        </div>
                        <div className="container2">
                            <button className="calc_btn number">4</button>
                            <button className="calc_btn number">5</button>
                            <button className="calc_btn number">6</button>
                            <button className="calc_btn operator">-</button>
                        </div>
                        <div className="container2">
                            <button className="calc_btn number">7</button>
                            <button className="calc_btn number">8</button>
                            <button className="calc_btn number">9</button>
                            <button className="calc_btn operator">*</button>
                        </div>
                        <div className="container2">
                            <button className="calc_btn cancel">C</button>
                            <button className="calc_btn number">0</button>
                            <button className="calc_btn number">=</button>
                            <button className="calc_btn operator">/</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;