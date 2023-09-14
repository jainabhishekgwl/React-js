/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Nested Elements</h1>
 *      </div>
 * </div>
 */
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div", 
            {id:"child"}, 
            [
                React.createElement("h1", {}, "Nested Elements"),
                React.createElement("h1", {}, "Nested Elements2")
        ]),
        React.createElement(
            "div", 
            {id:"child"}, 
            [
                React.createElement("h1", {}, "Nested Elements"),
                React.createElement("h1", {}, "Nested Elements2")
        ])
    ]
)

const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!", "test");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);