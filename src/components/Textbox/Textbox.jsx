import React, { Component} from "react";
import { Container } from './styles.jss'

class Textbox extends Component{
  render(){
    return(
      <Container>
        <Container.Title>
          Text Box Title
        </Container.Title>
        <Container.Text>
          Text!
          <br />
          More Text!
        </Container.Text>
      </Container>
    );
  }
}

export default Textbox;
