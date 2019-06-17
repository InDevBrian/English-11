import React, { Component, Fragment } from "react";
import Textbox from "../../components/Textbox/Textbox"

const Intro = "Many of you will be going into some sort of post-secondary education in the coming years, and I'm sure many of you, as I have, have thought about how you are going to pay that tuition. Or, if you're planning to travel, or just move out of your parents house, how would you pay for housing, food, commodities, and school. But before going into that, here's something about Canadian education you can be proud of."
const ScriptBody1 = "56% of Canadians between 25 and 64 have completed some kind of tertiary education in the form of a two-year degree, four-year degree or vocational program That’s the highest percentage in the world and something all Canadians should be proud of. Lots of people going to school and getting higher education, lots of people specializing in their fields should be great for our economy. We have some amazing schools such as UBC, UoT, Waterloo, Queens and more. We are known globally for our education and are highly sought after by international students from all over the planet."
const Transition1 = <Fragment>Isn't our education great? Well getting back into paying for everything just to go to school. You may have very supportive parents who will help sort out paying for things like housing, food, school, and what not, but not everyones parents are in the financial position to pay for that much stuff. So they're left with only being able to help out a little bit, or not at all, leaving the student with the only option of taking out some student loans. Unfortunatley, because of the extremely high, and ever rising costs of attending post-secondary schools, many Canadians have taken out very large loans, and gone very far into debt.<img src="https://drive.google.com/uc?id=13DLrIw6TbEuVNjIrJTeCxcuXnnk3ZUNt" /></Fragment>
const ScriptBody2 = <Fragment>So lots of people going to school is a good thing, but it's also raised the bar for entry, because the demand to get in is quite high, and it can be quite difficult to get into many schools across our country, especially some of the higher rated schools. In order to pay for these schools, and the costs associated with living in Canada, Canadians are taking out extremely large loans that compounds into debt that takes decades for the students to pay off. All this debt is damaging to the financial state of our younger workforce.<img src="https://drive.google.com/uc?id=112GkdC4c7SHB48gLhUJ52VhoLTm8YKJK" /></Fragment>
const changes = "As seen in the two graphs above, tuition is rising, and it's rising quickly. You can see the increase in tuition compared to inflation of the Canadian Dollar. Tuition right now is increasing by about 1 to 2 percent more each year. And in the 1990's it was about 5 - 10 percent each year. All that added up which is why the costs are so high right now, and why they're increasing at about $200 per year."
const laons = <Fragment>As of right now, the main ways to pay for education is through loans, and co-op programs. So what are loans, well when you need a large amount of money now, but don't have it, you can enter a contract saying you'll pay back that money. However most loans come with interest, interest is how much the amount you need to pay back increases per period of time. So with 5% interest per year, whatever you haven't paid off at the end of the year will increase by 5%. The Canadian government recently added interest free loans for students, which is a step in the right direction, but banks still use interest, and make a lot of money off of it.<img src="https://drive.google.com/uc?id=11-zvCvB1Z92URnrVfvk_KH92PW_PD1Fg" /></Fragment>
const coop = <Fragment>Mentioned in the loans paragraphs was co-op programs. Co-op is basically like a summer job, but they're specefied to be in the field you're studying. Businesses local and remote will sign up with your education institution to provide these employment opportunities to give current students experiece within their field, and to help them pay off their loans. However the students also must pay Co-op fees. These are very helpful in keeping the students busy in the summer, while also helping with a source of income so they can minimize their loan size when they graduate<img src="https://drive.google.com/uc?id=1wZ9MBgfqo5hx7GfAR5hAuIxSHIZBSbpd" /></Fragment>

class Writeup extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Introduction"} content={Intro} />
      <Textbox title={"Good Things About Canadian Education"} content={ScriptBody1} />
      <Textbox title={"Transition"} content={Transition1} />
      <Textbox title={"Bad Things About Canadian Education"} content={ScriptBody2} />
      <div><img src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRM_l_dwTWxB9EKcyAaiW6Qlv3WGcXf8YzZcpA28F3nJ2YJhjRwaWyVfAiofcETAvc2v87zBjvWn0DY/pubchart?oid=1727562768&amp;format=image" /></div>
      <div><img src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRM_l_dwTWxB9EKcyAaiW6Qlv3WGcXf8YzZcpA28F3nJ2YJhjRwaWyVfAiofcETAvc2v87zBjvWn0DY/pubchart?oid=1396548718&amp;format=image" /></div>
      <Textbox title={"The Current Changes"} content={changes} />
      <Textbox title={"Loans"} content={laons} />
      <Textbox title={"Co-op"} content={coop} />
      </Fragment>
    );
  }
}

export default Writeup;
