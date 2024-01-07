import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo:{
        name:"keshav",
        location:"haridwar",
        avatar_url:"default"
      }
     }
  }
  async componentDidMount() {
    const fetchData = await fetch(
      "https://api.github.com/users/luckylab200903"
    );
    const json = await fetchData.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  render() {
    const {name,login,location,url,bio,avatar_url}=this.state.userInfo
    return (
      <div>
      <img src={avatar_url} height={"100px"} width={"100px"}/>
        <h1>Name:{name}</h1>
        <h2>location:{location}</h2>
        <h2>Username:{login}</h2>
        <h2>Github url:{url}</h2>
        <h2>Bio:{bio}</h2>
      </div>
    );
  }
}

export default UserClass;
