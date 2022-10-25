import React from "react";

let dialogStyles = {
  width: "500px",
  maxWidth: "100%",
  margin: "10px 10px 10px 10px",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "#ddd",
  padding: "10px 10px 10px 10px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

let dialogCloseButtonStyles = {
  backgroundColor: "rgb(86, 151, 235)",
  transitionDuration: "0.5s",
  border: "1px solid rgb(201, 201, 201)",
  color: "black",
  borderRadius: "20px",
  width: "100px",
  minWidth: "max-content",
  alignSelf: "flex-end",
  fontWeight: "bold",
};

export default function DialogBox(props) {
  let dialog = (
    <div style={dialogStyles}>
      <button style={dialogCloseButtonStyles} onClick={props.onClose}>
        Envoyer
      </button>

      <div>{props.children}</div>
    </div>
  );
  if (!props.isOpen) {
    dialog = null;
  }
  return <div>{dialog}</div>;
}
