import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

export default class RunHelper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: "",
      zipcode: "",
      temp: "",
      city: ""
    }
  }
  componentWillMount() {
    const that = this
    navigator.geolocation.getCurrentPosition(function(position) {

    that.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });

    });
  }

  componentDidMount() {
    var that=this
    setTimeout(function() {
      that.getWeatherData();
    }, 400)
  }

  getWeatherData() {
    const that = this;
    const lat = this.state.lat ? this.state.lat.toString() : "32";
    const lon = this.state.lon ? this.state.lon.toString() : "34";
    const apiKey = "b699364186b2a6bb52a189466dd68ed0"
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+"&appid="+apiKey;

    axios.get(url)
    .then(function(response) {
    let city = response.data.name;
    response = response.data.main;
    // cityResponse =
    console.log(city)
      let temp = Math.floor(response.temp * 9 / 5 - 459.67);
      that.setState({
        temp,
        city
      })
    })
    .catch(function(err) {
      console.log(url)
    })
  }

  render(){
    return (
      <div className="container">
        <WeatherCard temp={this.state.temp} city={this.state.city}/>
      </div>
    )
  }
}
