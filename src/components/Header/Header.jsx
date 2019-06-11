import React, { Component} from "react";
import { Container } from './styles.jss'

class Header extends Component{
  render(){
    return(
      <Container>
        <Container.Header>
          <h1>
            Header xt!
          </h1>
        </Container.Header>
      </Container>
    );
  }
}

export default Header;
