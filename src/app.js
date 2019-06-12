import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styled from '@emotion/styled'
import Textbox from "./components/Textbox/Textbox"
import Header from "./components/Header/Header"

const Container = styled.div`
  margin: 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

class App extends Component{
  render(){
    return(
      <Container>
        <Header />
        <Textbox />
        <Textbox />
        <Textbox />
        <Textbox />
        <Textbox />
        <Textbox />
      </Container>
    );
  }
}

export default hot(module)(App);
