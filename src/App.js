import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    highest: 0, // TODO create function, pass state to child
    score: 0, // TODO create function, pass state to child
    friends,
    clicked: 0,
    navMessageCustom: "Click an image to start!"
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // handleClick = event => {
  //  when card is clicked store in id array, loop through array to see if card has been clicked. Card clicked resetRound(). Else add + 1 to score
  // };


  handleClick = event => {
    this.setState({ clicked: this.state.clicked + 1 })
    console.log("THIS STATE: " + JSON.stringify(this.state))
    if (this.state.score < this.state.highest) {
      this.setState({ score: this.state.score + 1 });
      this.setState.friends = this.shuffleArray(this.state.friends);
      console.log(event);
    } else if (this.state.score >= this.state.highest) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ highest: this.state.highest + 1 });
      this.setState.friends = this.shuffleArray(this.state.friends);
      // console.log(event);
    }
  };

//   scoreChecker = id => {
//     let character = this.state.clickedCharacters
//     if(character.length !== 0 && character.includes(id)) {
//         this.setState({
//             clickedCharacters: [],
//             score: 0,
//             navMessage: "Incorrect guess!"
//         })
//     } else {
//         character.push(id)
//         this.setState({
//             score: this.state.score += 1,
//             navMessage: "Correct!",
//             clickedCharacters: character
//         })
//         if (this.state.score > this.state.topScore) {
//             this.setState({
//                 topScore: this.state.score
//             })
//         }
//     }
// }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav 
        highest={ this.state.highest }
        score={ this.state.score }
        navMessageCustom={ this.state.navMessageCustom }
      />
      {/* <Jumbotron></Jumbotron> */}
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={this.state.clicked}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
