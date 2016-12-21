import React, { Component } from "react";
import Navbar from "../common/Navbar";

export default class TestPage extends Component {
  render() {
   return (
     <div>
       <Navbar />
       <div className="container">
         <h1>This is the test page</h1>
         <h4>Lets do some tests for redux here</h4>
       </div>
     </div>
   )
  }
}
