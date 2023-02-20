import React from "react";

function NewHome(props) {
  return (
    <div className="container" style={{ margin: "7vh auto" }}>
      <img
        className="main-image"
        alt="asdf"
        src={require("../images/ira-win.jpg")}
        style={{
          width: "100%",
          margin: "0",
          padding: "0",
          border: "1px solid black",
        }}
      />
    </div>
  );
}

export default NewHome;
