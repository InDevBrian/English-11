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
      font-size: 8px;
    }
  }
`

const sources = [
  "https://archives.library.ubc.ca/general-history/a-brief-history-of-ubc/",
  "https://www.cnbc.com/2018/02/07/the-10-most-educated-countries-in-the-world.html",
  "https://www.universityaffairs.ca/opinion/margin-notes/a-glance-at-canadas-postsecondary-education-standings/",
  "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3710003601",
  "https://www.macleans.ca/education/the-cost-of-a-canadian-university-education-in-six-charts/",
  "https://www150.statcan.gc.ca/n1/daily-quotidien/180905/t001b-eng.htm",
  "https://www150.statcan.gc.ca/n1/daily-quotidien/180905/dq180905b-eng.htm",
  "https://www.topuniversities.com/student-info/student-finance/how-much-does-it-cost-study-canada",
  "https://www150.statcan.gc.ca/n1/pub/81-595-m/2014101/section04-eng.htm",
  "https://news.vice.com/en_ca/article/d3xmdm/the-state-of-student-debt-in-canada",
  "http://augustanafreepress.ca/2015/10/13/youth-underemployment-a-major-concern-f/",
  "http://www.rbc.com/economics/economic-reports/pdf/other-reports/Tuition_June2018.pdf",
  "https://library.queensu.ca/madgic/free/education_tables/Tuition-data_revised/historical/Table%208E_Combined.xlsx"
]

class Sources extends Component{
  tableContents() {
    let data = [];
    for (let i = 0; i < sources.length; i++) {
      data[i] = <a href={sources[i]} key={i}><li>{sources[i]}</li></a>;
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

export default Sources;
