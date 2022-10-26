import React from "react";

let dialogStyles = {
  width: "650px",
  maxWidth: "100%",
  margin: "10px 10px 10px 10px",
  position: "fixed",
  left: "35%",
  top: "24%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#aaa",
  padding: "10px 10px 10px 10px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export default function OnHoverInfo(props) {
  //LES ELEMENTS DU PROPS : text

  return (
    <div className="onHoverInfoContainer" style={dialogStyles}>
      {props.text}
    </div>
  );
}
