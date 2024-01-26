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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
