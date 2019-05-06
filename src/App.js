import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component{
render(){
    return(
        <div><p>React Using Webpack is Successfully Loaded.</p></div>
    )
}
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));