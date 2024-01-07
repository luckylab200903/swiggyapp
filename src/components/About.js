import React from "react";
import User from "./UserDetails";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
    
  }

  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About</h1>
        <h1>This is keshav kumar singh</h1>
        <UserClass
          name={"Keshav kuma r singh"}
          contact={"970090787"}
          email={"kumarkeshavsingh09@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
