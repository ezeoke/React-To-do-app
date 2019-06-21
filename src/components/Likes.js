import React from 'react';

class Likes extends React.Component{
 state = {
  likes: 10}
 

 render(){
  return(
   <div>
    <h1>Welcome to my likes app</h1>
    <h3>likes: {this.state.likes}</h3>
    <button>like</button>
    <button>unlike</button>
    <button>reset</button>
   </div>
  )
 }
}

export default Likes;