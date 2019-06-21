import React from 'react';

class Likes extends React.Component{
 state = {
  likes: this.state.likes
 }

 render(){
  return(
   <div>
    <h1>Welcome to my likes app</h1>
    <h3>likes: 0</h3>
    <button>like</button>
    <button>unlike</button>
    <button>reset</button>
   </div>
  )
 }
}

export default Likes;