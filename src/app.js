import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Container, HeaderContainer } from './styles.jss'
import Writeup from "./routes/Writeup/Writeup"
import Book from "./routes/Book/Book"
import Raw_Data from "./routes/Raw_Data/Raw_Data"
import Sources from "./routes/Sources/Sources"

const pages = [
  <Writeup />,
  <Book />,
  <Raw_Data />,
  <Sources />
]

const pageNames = [
  "Writeup",
  "Book",
  "Raw Data",
  "Sources"
]
class App extends Component{
  constructor() {
    super();
    this.state = {
      content: pages[0],
      pageName: pageNames[0]
    };
  }

  updateContent(num) {
    this.setState({ content: pages[num], pageName: pageNames[num] })
  }

  render(){
    return(
      <Container>
        <HeaderContainer>
          <HeaderContainer.Inner>
            <HeaderContainer.Inner.Title>
              Canadian Tuition Costs
            </HeaderContainer.Inner.Title>
            <HeaderContainer.Inner.SubTitle>
              {this.state.pageName}
            </HeaderContainer.Inner.SubTitle>
          </HeaderContainer.Inner>
          <HeaderContainer.Lower>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(0)}>
              Writeup
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(1)}>
              Book
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(2)}>
              Raw Data
            </HeaderContainer.Lower.Button>
            <HeaderContainer.Lower.Button onClick={() => this.updateContent(3)}>
              Sources
            </HeaderContainer.Lower.Button>
          </HeaderContainer.Lower>
        </HeaderContainer>
        {this.state.content}
      </Container>
    );
  }
}

export default hot(module)(App);
