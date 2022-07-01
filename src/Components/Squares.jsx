import React from "react";
import ReactDOM from "react-dom";
import "../App.css";

//Use the props here do use those properties in the squares function 

  function Squares(props) {
    const {value, clickOnSquare, index} = props;
    
    return (
    <div className="square" onClick={() => clickOnSquare(index)}>
      {value}
    </div>
  );
}
  
export default Squares;
