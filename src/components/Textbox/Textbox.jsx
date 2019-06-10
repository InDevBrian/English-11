import React, { Component} from "react";
import { Container } from './styles.jss'
import styled from "@emotion/styled-base";

class Textbox extends Component{
  render(){
    return(
      <Container>
        <Container.Text>
          Text!
        </Container.Text>
      </Container>
    );
  }
}

export default Textbox;
