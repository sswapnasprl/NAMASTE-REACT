import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  render(){
    return (
      <div>
          <h1>About Us</h1>          
          <UserClass name={"First Class"} location={"Banglore Class"} contact={"0000000000 Class"}/>         
      </div>
    )
  }
}

// function About() {
//   return (
//     <div>
//         <h1>About Us</h1>
//         <User name={"Swapna Soprala"} location={"Banglore"} contact={"0000000000"}/>
//         <UserClass name={"Swapna Soprala Class"} location={"Banglore Class"} contact={"0000000000 Class"}/>
//     </div>
//   )
// }

export default About;
