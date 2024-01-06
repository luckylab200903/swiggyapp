import React from "react";
class UserClass extends React.Component {
  constructor(props) {
   super(props)
   this.state={
    userInfo:{
      name:"keshav",
      
    }
   }
  }
  componentDidMount() {
    
  }
  render() {
    
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h2>Contact user:{this.props.contact}</h2>
        <h2>email:{this.props.email}</h2>
      </div>
    );
  }
}

export default UserClass;
