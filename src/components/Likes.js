import React from "react";
import Header from "./Header";
import likesStyles from '../styles/likes.module.css';

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
        likes: prevState.likes >= 1 ? prevState.likes - 1 : prevState.likes
      };
    });
  };

  resetLikes = () => {
    this.setState(prevState => {
      return {
        likes: 0
      };
    });
  };

  render() {
    return (
      <div className={likesStyles.likes}>
        <Header title="My Likes App" />
       <div className={likesStyles.welcome}>
       <h1>Welcome to my likes app</h1>
        <h3>likes: {this.state.likes}</h3>
        <button onClick={this.increaseLikes}>like</button>
        <button onClick={this.decreaseLikes}>unlike</button>
        <button onClick={this.resetLikes}>reset</button>
       </div>
      </div>
    );
  }
}

export default Likes;
