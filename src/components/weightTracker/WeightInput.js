import React from "react";

const style = {
  maxWidth:"60px",
  height:"40px"
}

const spanStyle = {
  padding:"9px",
  fontSize: "18px",
  color: "white",
  marginLeft:'10px'
}

function WeightInput(props) {
  return (
    <div style={{background:'rgb(0, 188, 212)', marginBottom:"5px"}}>
          <span style={spanStyle}>{props.title}</span>
          <input
            type="text"
            className="macros-input"
            style={style}
            defaultValue={0}
            onChange={props.onChange}
            id={props.index}/>
    </div>
  )
}

export default WeightInput
