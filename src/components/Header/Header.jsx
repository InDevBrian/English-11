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
      </Container>
    );
  }
}

export default Header;
