import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"
import Table from "../../components/Table/Table"

const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great of our economy. (get some data in here). We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."
const ScriptBody2 = "Because so many people are attending schools the demand is quite high, and it can be quite difficult to get into any schools across our country, especially some of the higher rated schools. In order to pay for these schools, and the costs associated with living in Canada. Canadians are taking out extremely large loans that compounds into debt that takes decades for the students to pay off. All this debt is hurting our economy and needs to be fixed sooner rather than later. (data to support this)"
const NotesParagraph1 = "in 1920, UBC introduced their first tuition fee, costing $40 per year. because of inflation that is $476.43 today. In 2018 the yearly tuition for undergraduate degrees is $5,646.40. That is an 1185% increase in tuition. On UBC’s website they only mention increasing the tuition fees twice, once in 1982, when they raised the tuition by an average of 32.8%, and once in 1984, raising the average tuition by another 33%. The first was because the government dropped $7.5 million in funding. And the other was blamed on financial constraints. Even with those large percent increases, the tuition would only be $841.48, meaning they have increased the tuition by 671% without any explanation."
const NotesParagraph2 = "Canadians have one the highest percentages of citizens with post secondary education (56%, even though in some other countries, tuition is free, or paid for by the government)"
const NotesParagraph3 = "That table data is showing us the average student loan debts at the time of graduation for different levels of studies, under that is the % of graduates with debt, that also have a debt of over $25,000. The percent on the bottom tells us the percentage of graduates that have fully paid off their student debt before their first interview. It shows all of this data over the course of 10 years, with 5 year intervals."
const NotesParagraph4 = "The particularly interesting part is how much it rose from 2005 to 2010. Although I don’t have any data to support my hypothesis at the moment, the first thing I can think that would cause this would be the housing crash in 2008. It would up the cost of living significantly and could very well be fully, or at least partially responsible for the large jump in debt."
const NotesParagraph5 = "Another interesting part is the difference between college and all the other levels, I can only imagine this is because of the trades positions, which will often get you working before you graduate which could help with lowering student loans, however there is still a fairly small percentage that have all loans paid off before their first interview, which I would interpret as showing us that many people graduate with small amounts left but get hired so quickly that they don’t have time to pay off their loans before an interview."
const NotesParagraph6 = "I don’t have any solid information yet, but a quick google search told me that the average cost for 1 year at Camosun college is $3,500 whereas the average cost for UVic is $5,761 for an undergrad. That’s getting close to double the tuition costs, and at most universities it is much higher. So that is a very good explanation as to why the debts for a bachelors graduate are almost twice as much as those of a college graduate. And it would be understandable that as you go up to masters, and doctorate, your debt would compound."
const NotesParagraph7 = "aaaaaaaaaaaaa"
const NotesParagraph8 = "aaaaaaaaaaaaa"
const NotesParagraph9 = "aaaaaaaaaaaaa"

const table1Headers = [
  "Level of Education",
  "College",
  "Bachelors",
  "Masters",
  "Doctorate",
  ""
]

const table1Data = [
  ["2000", "2005", "2010"],
  ["$12,700  12%  20%", "$13,600  14%  23%", "$14,900  16%  36%"],
  ["$20,500  33%  22%", "$22,800  37%  28%", "$26,300  41%  34%"],
  ["$20,300  30%  27%", "$22,800  35%  32%", "$26,600  41%  44%"],
  ["$23,900  35%  27%", "$25,600  39%  30%", "$41,100  49%  36%"],
  [
    "$ = Average Debt for those that haven’t paid off at time of graduation",
    "1st % = Percent of graduates with 25k+ at time of graduation",
    "2nd % = Percent who had paid off all student loans at time of interview"
  ]
]

class Raw_Data extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Research Paragraph 1"} content={NotesParagraph1} />
      <Textbox title={"Research Paragraph 2"} content={NotesParagraph2} />
      <Textbox title={"Research Paragraph 3"} content={NotesParagraph3} />
      <Textbox title={"Research Paragraph 4"} content={NotesParagraph4} />
      <Textbox title={"Research Paragraph 5"} content={NotesParagraph5} />
      <Textbox title={"Research Paragraph 6"} content={NotesParagraph6} />
      <Textbox title={"Video Script Body 1"} content={ScriptBody1} />
      <Textbox title={"Video Script Body 2"} content={ScriptBody2} />
      <Table title={"Title"} headers={table1Headers} data={table1Data} len={table1Data[0].length} />
      </Fragment>
    );
  }
}

export default Raw_Data;
