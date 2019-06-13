import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styled from '@emotion/styled'
import Header from "./components/Header/Header"
import Writeup from "./routes/Writeup/Writeup"
import Interview from "./routes/Interview/Interview"

const Container = styled.div`
  margin: 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

const pages = [
  <Writeup />,
  <Interview />
]
class App extends Component{
  constructor() {
    super();
    this.state = {
      content: pages[0]
    };
  }

  updateContent() {
    this.setState({ content: pages[1] })
  }

  render(){
    return(
      <Container>
        <Header updateContent={this.updateContent.bind(this)} />
        {this.state.content}
      </Container>
    );
  }
}

export default hot(module)(App);
