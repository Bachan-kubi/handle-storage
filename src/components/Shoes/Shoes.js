import React from 'react';
import { add, multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 10;
    const second = 10;
    const result = multiply(first, second);
    const sum = add(first, second)
    return (
        <div>
            <h1>this is Shoes</h1>
            <h1>Resutl: {result} and Total is : {sum}</h1>
        </div>
    );
};

export default Shoes;