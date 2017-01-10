import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from "material-ui/Paper";
import { Card, CardHeader, CardText } from "material-ui/Card";
import { Link } from "react-router";

export default function MenuPage() {
  return (
    <MuiThemeProvider>
      <section>

      <div className="home-banner">
        <div className="home-title" style={{padding:'40px'}}>
          <h1>Tools</h1>
          <h2 style={{color:"white"}}>To Get Started....Select a Tool Below</h2>
        </div>
      </div>

      <div className="container">

            <Card zDepth={2} style={{maxWidth:'500px', margin:"0 auto"}} initiallyExpanded={true}>
              <CardHeader
                className="tools"
                title="Health Apps"
                subtitle="Calculators, Meal and Macro Planning..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"https://media3.giphy.com/media/gYZ7qO81g4dt6/giphy.gif"}
                >
              </CardHeader>
              <CardText expandable={true}>
                <div className="text-center">
                  <Link to="tools/health-status"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Health Status</h5></Link>
                  <Link to="tools/meal-planner"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Meal Planner</h5></Link>
                  <Link to="tools/meal-stats"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Meal Stats</h5></Link>
                  <Link to="tools/macro-planner"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Macro Planner</h5></Link>
                  <Link to="tools/weight-tracker"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Weight Tracker</h5></Link>
                </div>
              </CardText>
            </Card>

            <Card zDepth={2} style={{maxWidth:'500px', margin:"0 auto"}} initiallyExpanded={true}>
              <CardHeader
                className="tools"
                title="Active Apps"
                subtitle="Running, Maps, Weather Conditions..."
                avatar={"https://i.imgur.com/qqmOy.gif"}
                actAsExpander={true}
                showExpandableButton={true}
                >
              </CardHeader>
              <CardText expandable={true}>
                <Link to="tools/run-helper"><h5 style={{maxWidth:"150px", margin:"3px auto"}} className="sub-heading blue-2">Run Helper</h5></Link>
              </CardText>
            </Card>

            <Card zDepth={2} style={{maxWidth:'500px', margin:"0 auto"}}>
              <CardHeader
                className="tools"
                title="Community Resources"
                subtitle="Running, Maps, Weather Conditions..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"https://media3.giphy.com/media/HzSK6zrsNl3UY/giphy.gif"}
                >
              </CardHeader>
              <CardText expandable={true}>
                <h1>hiihhiih</h1>
              </CardText>
            </Card>

            <Card zDepth={2} style={{maxWidth:'500px', margin:"0 auto"}}>
              <CardHeader
                className="tools"
                title="Community Resources"
                subtitle="Running, Maps, Weather Conditions..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"https://i.imgur.com/HJTAE.gif"}
                >
              </CardHeader>
              <CardText expandable={true}>
                <h1>hiihhiih</h1>
              </CardText>
            </Card>

        </div>
      </section>
    </MuiThemeProvider>
  )
}

// https://image.slidesharecdn.com/anabolicdietbymaurodipasquale-140318084625-phpapp01/95/anabolic-diet-by-mauro-di-pasquale-1-638.jpg?cb=1395132521
