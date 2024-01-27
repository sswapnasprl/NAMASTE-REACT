import React from "react";
import ReactDOM from "react-dom/client";

/**
 * React way of writing code to create `h1` element
 * The code looks ugly right
 * and also its very difficult to create h1 tag compared to HTML h1 tag creation
 * Hence the concept of JSX comes into picture
 * JSX is JS extension for creating react element
 * JSX is diff and React is diff both are not same
 */

/**
 * Core React way of creating h1 element
 */
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React - Laying the foundation 🛴"
);
console.log("heading ---->", heading);
/**
 * JSX way of creating h1 element
 * JSX is transpiled before it reaches the JS engine
 * And Parcel does that for you
 * Parcel is like a manager so babel does this
 */
const jsxHeading = (
  <h1 className="head" tabIndex={2}>
    {" "}
    React JSX h1 element (●'◡'●)
  </h1>
);
console.log("jsxHeading", jsxHeading);

/**
 * shot hand syntax
 * const fn = () => {
 *  return true
 * }
 * OR
 * const fn = () => true
 * both are same.
 * @returns jsx
 */
//React Functional Component(Which is JS function that returns JSX)
//const HeadingComponent = () => <h1>H1 tag with react functional component</h1>;
//HeadingComponent, HeadingComponent2 and HeadingComponent3 all are same. 
//Lets stick to HeadingComponent3 syntax, since its popular and most of the ppl uses this type

// const HeadingComponent = () => {
//   return <h1 className="heading">H1 tag with react functional component</h1>;
// };

//const HeadingComponent2 = () => <h1 className="heading">H1 tag with react functional component</h1>;

const number = "10000";

const elem = <span>React Element</span>;

const Title = () => <h2>This is title</h2>;

const HeadingComponent4 = function() {
    return(
        <h1>This is h1 tag with JS functional style</h1>
    );
}

const title1 = (
    
    <h4>{elem}This is react title1 element</h4>
);

const HeadingComponent3 = () => (
    <div id="container">
        <Title />
        { number } <br></br>
        { 20 + 30 }
        { console.log('dfasdfasdfsafsdaf') }
        { title1 }
        { Title() }
        <HeadingComponent4 />
        <h1 className="heading">H1 tag with react functional component</h1>
    </div>   
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering react element
//root.render(jsxHeading);

//Component Composition -> Component inside another component


//Rendering React functional component
root.render(<HeadingComponent3 />);
