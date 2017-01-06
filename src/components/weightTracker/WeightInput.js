import React from "react";

const style = {
  border:"1px solid black",
  maxWidth:"100px"
}

function WeightInput(props) {
  return (
    <div>
          <span>{props.title}</span>
          <input
            type="text"
            className="macros-input"
            style={style}
            defaultValue={0}
            id={props.index}/>
    </div>
  )
}

export default WeightInput
