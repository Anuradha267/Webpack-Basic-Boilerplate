import React from 'react';
import './BasicInput.css';
import blue from '../../assets/blue-blob.svg';

const BasicInput = () => {
    return (
        <div className='app-input'>
            <label>Boilerplate Component</label>
            <input type="text" />
            <img src={blue} alt="blue" />
        </div>
    );
}

export default BasicInput;
