import React, { Component} from "react";
import { Container } from './styles.jss'

class Table extends Component{
  getHeaders() {
    let d = [];
    for (let i = 0; i < this.props.headers.length; i++) {
      d[i] = <th key={i}>{this.props.headers[i]}</th>;
    }

    return d;
  }

  getData() {
    let d = [];
    for (let i = 0; i < this.props.len; i++) {
      let c = [];
      for (let j = 0; j < this.props.data.length; j++) {
        c[j] = <td key={j}>{this.props.data[j][i]}</td>;
      }
      d[i] = <tr key={i}>{c}</tr>;
    }
    return d;
  }

  render(){
    return(
      <Container>
        <Container.Title>
          {this.props.title}
        </Container.Title>
        <Container.Table>
          <tbody>
            <tr>
              {this.getHeaders()}
            </tr>
            {this.getData()}
          </tbody>          
        </Container.Table>
      </Container>
    );
  }
}

export default Table;
