import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"

class Book extends Component{
  render(){
    return(
      <Fragment>
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
      </Fragment>
    );
  }
}

export default Book;
