import React, {Component} from 'react';
import TemperatureField from "./TemperatureField";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            temperature: 0,
            scale: 'c',
        }
    }

    toCelsius = (temperature) => {
        if(isNaN(temperature)) return;
        return (temperature - 32) * 5 / 9;
    };

    toFahrenheit = (temperature) => {
        if(isNaN(temperature)) return;
        return (temperature * 9 / 5) + 32;
    };

    toKelvin = (celsius) => {
        if(isNaN(celsius)) return;
        if(celsius === '') return 273.15;
        return parseFloat(celsius) + 273.15;
    };

    handleChange = (e) => {
        let {scale, temperature} = this.state;
        scale = e.target.name;
        temperature = e.target.value;
        this.setState({scale, temperature}, () => {console.log('complete')});
    };

    render() {
        const {scale, temperature} = this.state;
        const fahrenheit = scale === 'c' ? this.toFahrenheit(temperature) : temperature;
        const celsius = scale === 'f' ? this.toCelsius(temperature) : temperature;
        const kelvin = this.toKelvin(celsius);
        console.log('que es',celsius)
        return(
            <div>
                <h4>Calculadora de temperatura</h4>
                <div className='fields-container'>
                    <TemperatureField temp={celsius} scale='c' handleChange={this.handleChange} />
                    <TemperatureField temp={fahrenheit} scale='f' handleChange={this.handleChange} />
                    <TemperatureField temp={kelvin} scale='k' handleChange={this.handleChange} />
                </div>
            </div>
        )
    }
}

export default Home;