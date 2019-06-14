import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"
import Table from "../../components/Table/Table"

const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great of our economy. (get some data in here). We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."
const ScriptBody2 = "Because so many people are attending schools the demand is quite high, and it can be quite difficult to get into any schools across our country, especially some of the higher rated schools. In order to pay for these schools, and the costs associated with living in Canada. Canadians are taking out extremely large loans that compounds into debt that takes decades for the students to pay off. All this debt is hurting our economy and needs to be fixed sooner rather than later. (data to support this)"
const NotesParagraph1 = "in 1920, UBC introduced their first tuition fee, costing $40 per year. because of inflation that is $476.43 today. In 2018 the yearly tuition for undergraduate degrees is $5,646.40. That is an 1185% increase in tuition. On UBC’s website they only mention increasing the tuition fees twice, once in 1982, when they raised the tuition by an average of 32.8%, and once in 1984, raising the average tuition by another 33%. The first was because the government dropped $7.5 million in funding. And the other was blamed on financial constraints. Even with those large percent increases, the tuition would only be $841.48, meaning they have increased the tuition by 671% without any explanation."
const NotesParagraph2 = "Canadians have one the highest percentages of citizens with post secondary education (56%, even though in some other countries, tuition is free, or paid for by the government)"

class Raw_Data extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Research Paragraph 1"} content={NotesParagraph1} />
      <Textbox title={"Research Paragraph 2"} content={NotesParagraph2} />
      <Textbox title={"Video Script Body 1"} content={ScriptBody1} />
      <Textbox title={"Video Script Body 2"} content={ScriptBody2} />
      <Table title={"Title"} data={"uh oh"} />
      </Fragment>
    );
  }
}

export default Raw_Data;
