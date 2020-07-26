import React from "react";

function Cards(props) {


  return (
    <div className="card" style={{ width: "18rem", margin: "50px" }}>
      <img src={props.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}.</p>
        <a href={"/"} className="btn btn-primary">Explore</a>
      </div>
    </div>
  );

}

export default Cards;