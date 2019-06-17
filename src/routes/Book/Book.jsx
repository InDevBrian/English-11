import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"

const book1 = <div><img src="./bookCover.jpg" /><br />Michelle Rhee's book, Radical: Fighting to Put Students First, is about rebuilding the education system so that students will have better teachers, and will be better educated. In the book she goes into detail about some of the students she had taught and some of the things they went through.</div>
const author = "Michelle Rhee is an American Educator, she advocates strongly for a reform of public education. She was born in Michigan in 1969, the second of three children of South Korean descent. She was raised in Ohio, and kept in public schools until grade 6 when she was sent to Korea for a year of study. When she came back she was put into private school by her parents because they believed that the public education was lacking. She graduated in 1988, then went to Cornell Universtiy for her B.A. in government in 1992. Later Michelle went ot Harvard University for her Master of Public Policy."
const newteacher = "In 1997 Michelle Rhee founded The New Teacher Project, and started as the CEO. It is a non-profit that trained and supplied urban school districts with 23,000 mid-carreer proffesionals wanting to become classroom teachers in only 10 years. It was primarily based in New York, Chicago, Miani, and Philidelphia. Starting in 2000 the project started to redesign D.C. schools' recruitment and hiring processes."
const studentsfirst = "In 2010 Michelle Rhee founded StudentsFirst, it is a political lobbying organization that was founded to focus on helping reform public education in America. They want to evaluate teachers based on students achievments, and end teacher tenure and seniority preferences."

class Book extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Radical: Fighting to Put Students First"} content={book1} />
      <Textbox title={"About Michelle Rhee"} content={author} />
      <Textbox title={"The New Teacher Project"} content={newteacher} />
      <Textbox title={"StudentsFirst"} content={studentsfirst} />
      </Fragment>
    );
  }
}

export default Book;
