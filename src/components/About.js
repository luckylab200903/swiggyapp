import React from "react";
import User from "./UserDetails";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor called");
  }

  render() {
    //console.log("parent render called");
    return (
      <div>
      
        <div className="text-center font-bold">
          <UserContext.Consumer>
            {(data) => {
              return <h1>This is {data.LogggedInUser}</h1>
            }}
          </UserContext.Consumer>
        </div>
        <UserClass
      
          name={"Keshav kuma r singh"}
          contact={"970090787"}
          email={"kumarkeshavsingh09@gmail.com"}
        />
         <UserClass
      
      name={"Mansi Thakur"}
      contact={"970090787"}
      email={"Mansisingh09@gmail.com"}
    />
     <UserClass
      
      name={"Keshav kuma r singh"}
      contact={"970090787"}
      email={"VarshaSingh09@gmail.com"}
    />
      </div>
    );
  }
}

export default About;
