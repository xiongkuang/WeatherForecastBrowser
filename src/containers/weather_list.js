import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component{
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);


        return(
            <tr key={cityName}>
                <td>{cityName}</td>
                <td> <Chart data={temperatures} color="orange" units="K" /> </td>
                <td> <Chart data={pressures} color="green" units="hPa" /> </td>
                <td> <Chart data={humidities} color="blue" units="%"/> </td>
            </tr>
        );
    }


    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps({weather}) {
    //const weather = state.weather;
    return { weather }; //{ weather} === {weather : weather}
}

export default connect(mapStateToProps)(WeatherList);
