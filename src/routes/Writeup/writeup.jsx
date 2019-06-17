import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"

const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great of our economy. (get some data in here). We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."
const ScriptBody2 = "Because so many people are attending schools the demand is quite high, and it can be quite difficult to get into any schools across our country, especially some of the higher rated schools. In order to pay for these schools, and the costs associated with living in Canada. Canadians are taking out extremely large loans that compounds into debt that takes decades for the students to pay off. All this debt is hurting our economy and needs to be fixed sooner rather than later. (data to support this)"

class Interview extends Component{
  render(){
    return(
      <Fragment>
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
      <Textbox />
      </Fragment>
    );
  }
}

export default Interview;
