import React from 'react';
import Header from './Header';

class Likes extends React.Component {
	state = {
		likes: 0,
		grace: true
	};

<<<<<<< HEAD
decreaseLikes = () => { 
  if (this.state.likes){
  this.setState((prevState)=>{
 return {
  likes: prevState.likes - 1 
 }
})
} 
}

resetLikes = () => { this.setState((prevState)=>{
 return {
  likes: 0
 }
})
}

 render(){
  return(
   <div>
     <Header text = 'My Likes Page'/>
    <h1>Welcome to my likes app</h1>
    <h3>likes: {this.state.likes}</h3>
    <button onClick ={this.increaseLikes}>like</button>
    <button onClick ={this.decreaseLikes}>unlike</button>
    <button onClick ={this.resetLikes}>reset</button>
   </div>
  )
 }
=======
	increaseLikes = () => {
		this.setState((prevState) => {
			return {
				likes: prevState.likes + 1,
				grace: (prevState.grace = false)
			};
		});
	};

	decreaseLikes = () => {
		this.setState((prevState) => {
			return {
				likes: prevState.likes - 1
			};
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
				<button>reset</button>
			</div>
		);
	}
>>>>>>> 10c5cf5a7e502f0c94dc76fbd0143b073bc66808
}

export default Likes;
