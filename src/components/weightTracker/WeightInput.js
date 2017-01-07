import React from "react";

const style = {
  border:"1px solid black",
  maxWidth:"60px",
  height:"40px"
}

const spanStyle = {
  background: "rgb(0, 188, 212)",
  padding:"9px",
  fontSize: "18px",
  color: "white",
  border:'1px solid #333',
  marginLeft:'10px'
}

function WeightInput(props) {
  return (
    <div className="">
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
