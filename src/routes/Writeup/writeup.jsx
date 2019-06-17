import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"

const Intro = "Many of you will be going into some sort of post-secondary education in the coming years, and I'm sure many of you, as I have, have thought about how you are going to pay that tuition. Or, if you're planning to travel, or just move out of your parents house, how would you pay for housing, food, commodities, and school. But before going into that, here's something about Canadian education you can be proud of."
const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great for our economy. We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."
const Transition1 = "Isn't our education great? Well getting back into paying for everything just to go to school. You may have very supportive parents who will help sort out paying for things like housing, food, school, and what not, but not everyones parents are in the financial position to pay for that much stuff. So they're left with only being able to help out a little bit, or not at all, leaving the student with the only option of taking out some student loans. Unfortunatley, because of the extremely high, and ever rising costs of attending post-secondary schools, many Canadians have taken out very large loans, and gone very far into debt."
const ScriptBody2 = "So lots of people going to school is a good thing, but it's also raised the bar for entry, because the demand to get in is quite high, and it can be quite difficult to get into many schools across our country, especially some of the higher rated schools. In order to pay for these schools, and the costs associated with living in Canada, Canadians are taking out extremely large loans that compounds into debt that takes decades for the students to pay off. All this debt is damaging to the financial state of our younger workforce."

class Interview extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Introduction"} content={Intro} />
      <Textbox title={"Good Things About Canadian Education"} content={ScriptBody1} />
      <Textbox title={"Transition"} content={Transition1} />
      <Textbox title={"Bad Things About Canadian Education"} content={ScriptBody2} />
      </Fragment>
    );
  }
}

export default Interview;
