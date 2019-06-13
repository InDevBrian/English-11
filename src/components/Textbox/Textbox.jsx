import React, { Component} from "react";
import { Container } from './styles.jss'

class Textbox extends Component{
  render(){
    return(
      <Container>
        <Container.Title>
          {this.props.title}
        </Container.Title>
        <Container.Text>
          {this.props.content}
        </Container.Text>
      </Container>
    );
  }
}

export default Textbox;
