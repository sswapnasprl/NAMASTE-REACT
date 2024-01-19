/**
 * First parameter is the html tag
 * second parameter is the attributes to that tag
 * heading variable returns JS object in which "Hello world from react js!!!" is the child and {id : "heading", abc:"xyz"}, are the PROPS, console.log(heading)
 * render converts this object to html tag and put into root element
 * 
 */

/***
 * Nested HTML tag
 * You can create nested HTML tags by using createElement but the code looks ugly, and its very confusing
 *  Hence the JSX comes into picture
 */
const heading = React.createElement( "div", {id : "parent"}, [
    React.createElement("h1", {id:"heading"},"I'm h1 tag"),
    React.createElement("h2", {id:"heading"},"I'm h2 tag")],
    React.createElement( "div", {id : "parent"}, [
    React.createElement("h1", {id:"heading"},"I'm h1 tag"),
    React.createElement("h2", {id:"heading"},"I'm h2 tag")]
    ));

    
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);