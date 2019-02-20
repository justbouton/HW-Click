import React from "react";
import "./style.css";

function FriendCard(props) {
  return (


// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
    
    // 


    <div className="card-custom">
        <img className="img" clicked={props.clicked} onClick={() => props.handleClick()} alt={props.name} src={props.image} />
    </div>
  );
}

export default FriendCard;
