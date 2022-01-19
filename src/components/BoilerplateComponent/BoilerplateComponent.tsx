import React from 'react';
import './BoilerplateComponent.css';
import yellow from '../../assets/yellow-blob.png';

const BoilerplateComponent = () => {
    return (
        <div className='app'>
            <label>Boilerplate Component</label>
            <input type="text" />
            <img src={yellow} alt='yellow' />
        </div>
    );
}

export default BoilerplateComponent;



