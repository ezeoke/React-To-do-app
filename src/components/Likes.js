import React from "react";
import Header from "./Header";

class Likes extends React.Component {
  state = {
    likes: 0
  };

  increaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  };

  decreaseLikes = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes >= 0 && prevState.likes - 1
      };
    });
  };

  resetLikes = () => {
    this.setState({
		likes : 0
	});
  };

  render() {
    return (
      <div>
        <Header title="Likes App" />
        <h1>Welcome to my likes app</h1>
        <h3>likes: {this.state.likes}</h3>
        <button onClick={this.increaseLikes}>like</button>
        <button onClick={this.decreaseLikes}>unlike</button>
        <button onClick={this.resetLikes}>reset</button>
      </div>
    );
  }
}

export default Likes;
