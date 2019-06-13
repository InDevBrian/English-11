import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Container, HeaderContainer } from './styles.jss'
import Writeup from "./routes/Writeup/Writeup"
import Interview from "./routes/Interview/Interview"
import Book from "./routes/Book/Book"
import Raw_Data from "./routes/Raw_Data/Raw_Data"

const pages = [
  <Writeup />,
  <Interview />,
  <Book />,
  <Raw_Data />
]
class App extends Component{
  constructor() {
    super();
    this.state = {
      content: pages[0]
    };
  }

  updateContent(num) {
    this.setState({ content: pages[num] })
  }

  render(){
    return(
      <Container>
        <HeaderContainer>
          <HeaderContainer.Inner>
            <HeaderContainer.Inner.Title>
              Canadian Tuition Costs
            </HeaderContainer.Inner.Title>
          </HeaderContainer.Inner>
          <HeaderContainer.Lower>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(0)}>
              Writeup
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(1)}>
              Interview
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(2)}>
              Book
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(3)}>
              Raw Data
            </HeaderContainer.Lower.Button>
          </HeaderContainer.Lower>
        </HeaderContainer>
        {this.state.content}
      </Container>
    );
  }
}

export default hot(module)(App);
