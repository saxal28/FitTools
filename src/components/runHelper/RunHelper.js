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
    const lat = this.state.lat ? this.state.lat.toString() : "38.6270";
    const lon = this.state.lon ? this.state.lon.toString() : "-90.1994";

    const apiKey = "90b8d5cdb71ec358"
    //use this one for production
    let url = 'https://api.wunderground.com/api/'+apiKey+'/conditions/q/'+lat+','+lon+'.json';
    //use this one for localhose
    // let url = 'http://api.wunderground.com/api/'+apiKey+'/conditions/q/'+lat+','+lon+'.json';

    axios.get(url)
    .then(function(response) {
    let data = response.data.current_observation;
    let city = data.display_location.full;

    console.log(data)
      let temp = Math.floor(data.temp_f);
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
      <section>

        <div className="home-banner">
          <div className="home-title" style={{padding:'40px'}}>
            <h1>Run Helper</h1>
            <h2 style={{color:"white"}}>Get the Current Weather, A Map of Your Location, and a Clothing Guide!</h2>
          </div>
        </div>

        <div className="container">
          <WeatherCard temp={this.state.temp} city={this.state.city} lat={this.state.lat} lon={this.state.lon}/>
        </div>
      </section>
    )
  }
}
