let dom = document.querySelector("#root")
let element = React.createElement(
    "div",{},[
        React.createElement(
            "h2",{},"hello!"
        ),
        React.createElement(
            "h4",{className:"alert alert-primary"},"React sample page."
        ),
        React.createElement(
            "ul",{className:"list-group"},[
                React.createElement(
                    "li",{className:"list-group-item"},"First item"
                ),
                React.createElement(
                    "li",{className:"list-group-item"},"Second item"
                ),
                React.createElement(
                    "li",{className:"list-group-item"},"Third item."
                ),
            ]
        ),
    ]
)
ReactDOM.render(element,dom);