import React from "react";
import ToolsCard from "../common/ToolsCard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from "material-ui/Paper";
import { Card, CardActions, CardHeader, CardText, CardMedia } from "material-ui/Card";

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

            <Card zDepth={2}>
              <CardHeader
                title="Health Apps"
                subtitle="Calculators, Meal and Macro Planning..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"http://www.crwflags.com/fotw/images/i/icrc.gif"}
                >
              </CardHeader>
              <CardText expandable={true}>
                <h1>hiihhiih</h1>
              </CardText>
            </Card>

            <Card zDepth={2}>
              <CardHeader
                title="Active Apps"
                subtitle="Running, Maps, Weather Conditions..."
                avatar={"http://i.imgur.com/qqmOy.gif"}
                actAsExpander={true}
                showExpandableButton={true}
                >
              </CardHeader>
              <CardText expandable={true}>
                <h1>hiihhiih</h1>
              </CardText>
            </Card>

            <Card zDepth={2}>
              <CardHeader
                title="Community Resources"
                subtitle="Running, Maps, Weather Conditions..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"http://media3.giphy.com/media/HzSK6zrsNl3UY/giphy.gif"}
                >
              </CardHeader>
              <CardText expandable={true}>
                <h1>hiihhiih</h1>
              </CardText>
            </Card>

            <Card zDepth={2}>
              <CardHeader
                title="Community Resources"
                subtitle="Running, Maps, Weather Conditions..."
                actAsExpander={true}
                showExpandableButton={true}
                avatar={"http://i.imgur.com/HJTAE.gif"}
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
