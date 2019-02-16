import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    highest: 6, // TODO create function, pass state to child
    score: 2 // TODO create function, pass state to child
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav 
        highest={ this.state.highest }
        score={ this.state.score }
      />
      <Jumbotron></Jumbotron>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
