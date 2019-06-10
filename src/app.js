import React, { Component} from "react";
import Textbox from "./components/Textbox/Textbox"
import Header from "./components/Header/Header"

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <h1>The App</h1>
        <Textbox />
      </div>
    );
  }
}

export default App;
