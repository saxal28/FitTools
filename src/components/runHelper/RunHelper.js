import React, { Component } from "react";
import Navbar from "../common/Navbar";
import DrawerNavbar from "../common/DrawerNavbar";

import GettingStartedGoogleMap from "../common/GettingStartedGoogleMap";
import Map from 'react-google-maps'

export default class RunHelper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: "",
      zipcode: ""
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
      that.renderWeather();
    }, 500)
  }

  renderWeather() {
    alert("weather rendered")
  }

  render(){
    return (
      <div>

      <div className="text-center">

      </div>

      <div className="container">


        <div className="row">
          <div className="col-xs-6">
            <h1>lat: {this.state.lat}</h1>
            <h1>lon: {this.state.lon}</h1>
          </div>
          <div className="col-xs-6">

          </div>
        </div>

      </div>
      </div>
    )
  }
}
