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
          <Container.Lower.Link>
            One
          </Container.Lower.Link>
          <Container.Lower.Link>
            Two
          </Container.Lower.Link>
          <Container.Lower.Link>
            Three
          </Container.Lower.Link>
          <Container.Lower.Link>
            Four
          </Container.Lower.Link>
        </Container.Lower>
      </Container>
    );
  }
}

export default Header;
