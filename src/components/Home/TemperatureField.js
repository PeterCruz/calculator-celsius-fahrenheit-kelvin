import React from 'react';

const TemperatureField = ({scale, handleChange, temp}) => (
    <div>
        <label htmlFor="">
            Ingresa la temperatura en {scale === 'c' ? 'Celsius' : scale === 'f' ? 'Fahrenheit' : 'Kelvin' }
            <input type="text" name={scale} onChange={handleChange} value={temp}/>
        </label>
    </div>
);

export default TemperatureField;