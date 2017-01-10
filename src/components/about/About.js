import React from "react";

export default function AboutPage(props) {
  const style = {
    color:'white',
    maxWidth:'800px',
    margin:'10px auto'
  }
  return (
    <div>
      <section className="section text-center">
        <h1 style={style}>Hello!</h1>
        <h1 style={style}>Welcome to Fit Tools</h1>
        <h2 style={style}>What Can I Do Here?</h2>
      </section>
      <section className="section text-center" style={{background:"rgb(121,162,234)"}}>
        <div className="row">
          <div className="col-sm-6">
            <h1 style={style}>Fit Tools Provides A Ton of Mini Apps for the Fitness/Health Enthusiast!</h1>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </section>

      <section className="section text-center" >
        <div className="row">
          <div className="col-sm-6">
            <h1 style={style}>Useful Health Tools</h1>
          </div>
          <div className="col-sm-6">
            <img src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/2015/10/desktop-app-desktop-computer.png" className="img-responsive"/>
          </div>
        </div>
      </section>

      <section className="section text-center" style={{background:"rgb(60,49,180)"}}>
        <h1 style={style}>Fun Tools for </h1>
      </section>
      <section className="section text-center" >
        <h1 style={style}>What Can I Do Here?</h1>
      </section>
      <section className="section text-center" style={{background:"#333"}}>
        <h1 style={style}>And There's More to Come!</h1>
        <h2 style={style}>I'm Working On New Mini Applications Every Day!</h2>
      </section>
    </div>
  )
}
