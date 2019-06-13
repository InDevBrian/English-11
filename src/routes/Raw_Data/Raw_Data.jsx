import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"

const ScriptIntro = "WOw intro"
const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great of our economy. (get some data in here). We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."

class Raw_Data extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Video Script Intro"} content={ScriptIntro} />
      <Textbox title={"Video Script Body 1"} content={ScriptBody1} />
      </Fragment>
    );
  }
}

export default Raw_Data;
