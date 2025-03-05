
import React, { useState } from 'react';

function SumCalculator() {
    const [number1, setNumber1] = useState('');
    //number1 is the state variable
    //setNumber1 will be a function that you can call
    const [number2, setNumber2] = useState('');
    const [sum, setSum] = useState('');

    const calculateSum = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        if(!isNaN(num1) && !isNaN(num2)) {
            setSum(num1 + num2);
        } else {
            setSum('Invalid Input');
        }
    }

    return(
        <div>
            <h2>Sum Calculator</h2>
            <div>
            <label>
                Number1:
                <input type="text" 
                value={number1} 
                onChange={(e) => setNumber1(e.target.value)}/>
            </label>
            </div>
                <div>
                    <label>
                    Number2:
                    <input type="text"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}/>
                    </label>
                </div>
            <button onClick={calculateSum}>Calculate Sum</button>
            <div>
                <strong>Sum:</strong> {sum}
            </div>
        </div>
    );
}   

export default SumCalculator;