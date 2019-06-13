import React, { Component} from "react";
import { Container } from './styles.jss'

class Table extends Component{
  render(){
    return(
      <Container>
        <Container.Title>
          {this.props.title}
        </Container.Title>
        <Container.Text>
          {this.props.data}
        </Container.Text>
      </Container>
    );
  }
}

export default Table;
