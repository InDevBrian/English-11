import React, { Component, Fragment, } from "react";
import styled from '@emotion/styled'

const List = styled.ul`
  margin-top: 12px;
  list-style-type: none;
  width: 100%;

  a {
    text-decoration: none;
    :nth-child(2n) {
      li { background-color: rgb(251, 188, 5); color: black; }
    }
  }

  li {
    margin: 6px 0;
    text-align: center;
    padding: 12px;
    background-color: rgb(0, 105, 237);
    border-radius: 8px;
    font-size: 16px;
    color: white;

    @media screen and (max-width: 520px) {
      font-size: 12px;
    }

    @media screen and (max-width: 400px) {
      font-size: 11px;
    }
  }
`

const questions = [
  <Fragment>Why do you teach? ( Just English or other courses too? )<br />I teach because I love working with kids and helping them discover their interests and passions in school.</Fragment>,
  <Fragment>What are you studying? Why?<br />I am currently studying Curriculum and Instruction at UVIC. The program is strong. Small classes with a mix of online and face to face sessions. The professors are incredibly supportive.</Fragment>,
  <Fragment>Where are you attending?<br />UVic</Fragment>,
  <Fragment>When did you first start your post-secondary education?<br />Originally I completed by BA and teaching certification from 1998-2004. I have been doing my graduate work since 2016 and will graduate this year.</Fragment>,
  <Fragment>Do you remember the cost of tuition and books at the time?<br />Back then it was approximately $1000 per course. Now it is approximately $1200.</Fragment>,
  <Fragment>Have you noticed the increasing prices?<br />No, I didn’t notice the increase at all. Also, services are much better. The campus has many new buildings. Any increase in my tuition I see as supporting these benefits.</Fragment>,
  <Fragment>Have the increasing costs affected you in any way?<br />No.</Fragment>,
  <Fragment>Do you think the prices for books and tuition is unreasonable?<br />I would love to see post secondary accessible to more people. If lowering the cost allows this to happen then yes, I think it should be changed.</Fragment>,
  <Fragment>Has the quality of the education increased? ( Better professors? )<br />It’s difficult to say. I don’t know other than what I have experienced and in that I have seen a consistency over my education, not a decline or increase.</Fragment>,
  <Fragment>Are you concerned about the prices rising further? Why?<br />Yes. I’d like my children to afford a good post secondary education. Privatization also present issues of inequity.</Fragment>,
  <Fragment>Do you think rising costs will affect the amount of people attending?<br />No. I think loans and foreign students will continue to allow universities to thrive.</Fragment>,
  <Fragment>Do you think rising costs has or is being affected by our economy?<br />No.</Fragment>,

]

class Interview extends Component{
  tableContents() {
    let data = [];
    for (let i = 0; i < questions.length; i++) {
      data[i] = <a key={i}><li>{questions[i]}</li></a>;
    }
    return data;
  }

  render(){
    return(
      <List cellSpacing={8}>
        {this.tableContents()}
      </List>
    );
  }
}

export default Interview;
