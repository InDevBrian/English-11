import React, { Component} from "react";
import { Container } from './styles.jss'

class Header extends Component{
  render(){
    return(
      <Container>
        <Container.Inner>
          <Container.Inner.Title>
            Canadian Tuition Costs
          </Container.Inner.Title>
        </Container.Inner>
        <Container.Lower>
          <Container.Lower.Button onClick={this.props.updateContent}>
            Writeup
          </Container.Lower.Button>
          <Container.Lower.Button>
            Interview
          </Container.Lower.Button>
          <Container.Lower.Button>
            Book
          </Container.Lower.Button>
          <Container.Lower.Button>
            Raw Data
          </Container.Lower.Button>
        </Container.Lower>
      </Container>
    );
  }
}

export default Header;
