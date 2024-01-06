import React from "react";
import User from "./UserDetails";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  async componentDidMount() {
    const fetchData=await fetch("https://api.github.com/users/luckylab200903")
    const json=await fetchData.json()
    console.log(json);
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
