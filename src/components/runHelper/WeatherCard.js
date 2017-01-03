import React from "react";
import {Card, CardHeader, CardText} from 'material-ui/Card';
import _ from "lodash"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GoogleMap from "../common/SimpleMap"

class WeatherCard extends React.Component {

  setMapDelay() {
    const that = this;
    setTimeout(function() {
    }, 400)
    return (
      <div>
        <GoogleMap lat={that.props.lat} lon={that.props.lon} />
    </div>
    )
  }

  test() {
    return "hi"
  }

  render() {
    return (
      <MuiThemeProvider>
          <Card>
            <CardHeader
              subtitle="Run Helper"
              actAsExpander={true}
              showExpandableButton={true}
            >
              <div className="weather-box">
                <h3>Current Temperature for</h3>
                <h3>{this.props.city}</h3>
                <h1 className="weather-text type-green">{this.props.temp ? this.props.temp : "..."}</h1>
                {temperatureStatus(this.props.temp)}
                <h5>See Recommended Clothing!</h5>
              </div>

            </CardHeader>
            <CardText expandable={true}>
              <h3>Here's a map of the area!</h3>
              <p>See if there are any parks around!</p>
              {/*renders google map with delay*/}
              {this.setMapDelay()}
              <div className="row text-center padded">
                <h3>Based on the current temperature of <strong>{this.props.temp}</strong>, we recommend this clothing:</h3>
              </div>
              {/*renders recommended clothing based on weather*/}
              {temperatureClothingChecker(this.props.temp)}

            </CardText>
          </Card>

      </MuiThemeProvider>
      )
  }
};

function temperatureStatus(temp){
  if(temp < 40) {
    return <h3>It's cold outside!</h3>
  } else if(temp < 50) {
    return <h3>It's chilly outside!</h3>
  } else if(temp < 60) {
    return <h3>It's nice out!side</h3>
  } else if (temp < 70) {
    return <h3>It's pretty nice outside!</h3>
  } else if (temp < 80) {
    return <h3>It's perfect outside!</h3>
  } else if (temp >= 80) {
    return <h3>It's pretty warm outside!</h3>
  }
}

function temperatureClothingChecker(temp) {
  //temperatures colder than 40 => lightcoat, pants, gloves, and hat
  if(temp < 40) {
    return (
      <div className="row">
        <div className="col-sm-4">
          <img src="http://images.linnlive.com/547b3d68c93e199cbd048cb886b17ccc/0d47194f-74e0-4364-b6a7-c2808038f170.jpg" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="http://www.dickssportinggoods.com/graphics/product_images/pDSP1-24977043v750.jpg" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="http://hunt4freebies.com/hotdeals/wp-content/uploads/2010/01/Cabelas-Polartec-200-Fleece-Hat-and-Glove-Gift-Set.jpg" className="img-responsive" role="presentation"/>
        </div>
      </div>
    )
    //temperatures colder than 50 => long sleeves, long pants, hat
  } else if (temp < 50) {
    return (
      <div className="row">
        <div className="col-sm-4">
          <img src="http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw106ff76f/images/ProductImages/210910/210910_404_mf_ZM.jpg?sw=1200" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="http://www.dickssportinggoods.com/graphics/product_images/pDSP1-24977043v750.jpg" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="http://hunt4freebies.com/hotdeals/wp-content/uploads/2010/01/Cabelas-Polartec-200-Fleece-Hat-and-Glove-Gift-Set.jpg" className="img-responsive" role="presentation"/>
        </div>
      </div>
    )
    //temperatures colder than 70 => long sleeves, shorts, hat (optional)
  } else if (temp < 70) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <img src="http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw106ff76f/images/ProductImages/210910/210910_404_mf_ZM.jpg?sw=1200" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-6">
          <img src="http://www.dickssportinggoods.com/graphics/product_images/pDSP1-24036896v750.jpg" className="img-responsive" role="presentation"/>
        </div>
      </div>
    )
    //temperatures 70 and above   => short t-shirt, shorts,
  } else if(temp >= 70) {
    return (
      <div className="row">
        <div className="col-sm-4">
          <img src="http://www.texspoclothing.com/images/16.jpg" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="http://www.dickssportinggoods.com/graphics/product_images/pDSP1-24036896v750.jpg" className="img-responsive" role="presentation"/>
        </div>
        <div className="col-sm-4">
          <img src="https://images-na.ssl-images-amazon.com/images/I/31c6rcGQ1oL._AC_UL320_SR248,320_.jpg" className="img-responsive" role="presentation"/>
        </div>
      </div>
    )
  }
}

export default WeatherCard;
