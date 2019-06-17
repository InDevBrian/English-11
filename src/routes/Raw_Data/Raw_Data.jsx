import React, { Component, Fragment, } from "react";
import Textbox from "../../components/Textbox/Textbox"
import Table from "../../components/Table/Table"

const NotesParagraph1 = "in 1920, UBC introduced their first tuition fee, costing $40 per year. because of inflation that is $476.43 today. In 2018 the yearly tuition for undergraduate degrees is $5,646.40. That is an 1185% increase in tuition. On UBC’s website they only mention increasing the tuition fees twice, once in 1982, when they raised the tuition by an average of 32.8%, and once in 1984, raising the average tuition by another 33%. The first was because the government dropped $7.5 million in funding. And the other was blamed on financial constraints. Even with those large percent increases, the tuition would only be $841.48, meaning they have increased the tuition by 671% without any explanation."
const NotesParagraph2 = "Canadians have one the highest percentages of citizens with post secondary education (56%, even though in some other countries, tuition is free, or paid for by the government)"
const NotesParagraph3 = "That table data is showing us the average student loan debts at the time of graduation for different levels of studies, under that is the % of graduates with debt, that also have a debt of over $25,000. The percent on the bottom tells us the percentage of graduates that have fully paid off their student debt before their first interview. It shows all of this data over the course of 10 years, with 5 year intervals."
const NotesParagraph4 = "The particularly interesting part is how much it rose from 2005 to 2010. Although I don’t have any data to support my hypothesis at the moment, the first thing I can think that would cause this would be the housing crash in 2008. It would up the cost of living significantly and could very well be fully, or at least partially responsible for the large jump in debt."
const NotesParagraph5 = "Another interesting part is the difference between college and all the other levels, I can only imagine this is because of the trades positions, which will often get you working before you graduate which could help with lowering student loans, however there is still a fairly small percentage that have all loans paid off before their first interview, which I would interpret as showing us that many people graduate with small amounts left but get hired so quickly that they don’t have time to pay off their loans before an interview."
const NotesParagraph6 = "I don’t have any solid information yet, but a quick google search told me that the average cost for 1 year at Camosun college is $3,500 whereas the average cost for UVic is $5,761 for an undergrad. That’s getting close to double the tuition costs, and at most universities it is much higher. So that is a very good explanation as to why the debts for a bachelors graduate are almost twice as much as those of a college graduate. And it would be understandable that as you go up to masters, and doctorate, your debt would compound."
const NotesParagraph7 = "Canadians pay way too much for post secondary education. Why are Canadians paying so much for post-secondary education? How can we reduce these costs? This is meaningful to me because I am starting post-secondary education next year. I am fortunate enough that I have parents who are very supportive and already have money saved up for my education, however many people are not as lucky as I am and have to pay for their education from day one, often taking out student loans which grow very large very quickly, and take very long to pay off."
const NotesParagraph8 = "Although my presentation medium may change, currently I plan to make a video highlighting all my data, how I processed it, and what conclusions I pulled from the processed data. I would like to do a video because it may be easier to visualise the data in a meaningful way, and I could be more creative in the direction I take when compared to a presentation standing in front of the class, or a slideshow presentation."
const NotesParagraph9 = "I will be doing research on the tuition history for many different areas of schooling as far back as I can find, and figure out how much more we are paying today when compared to the past. I will try to figure out how to lower prices in all areas, and interview people in my family about their experiences with post-secondary institutions. I will try to find a book written about this topic, and contrast their ideas with mine."
const NotesParagraph10 = "My goal from this project is to present the data in an unbiased way, and explain many different ways that the data could be interpreted. I want to find an answer for the following questions. Exactly how much has tuition fees have risen over the past decades for universities across the country? Why have tuition fees rose, and why so much? Why does Canada have the highest rate for post-secondary educated citizens (52% over 25)? Why is it higher than other places with free post-secondary education? Has this affected the economy? I will also try to explain the points of view from professors, universities, and students."
const NotesParagraph11 = "I will be taking notes anything related to tuition fees I can find, make some charts that show how they changed over the years as well as how much change is from inflation, or any other event that would have a major impact on the economy. Record any interviews I have, take notes on any books I read, what their message is and how in contrasts against mine, also when the book was written. Use all of what I gathered to relate it to how I present my project, whatever that may be."

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

const table2Headers = [
  "Province",
  "Undergraduate",
  "Graduate"  
]

const table2Data = [
  ["Canada", "Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia", "New Brunswick", "Quebec", "Ontario", "Manitoba", "Saskatchewan", "Alberta", "British Columbia"],
  ["3.3", "2.3", "2.0", "5.6", "2.9", "2.8", "3.7", "6.5", "3.7", "0.1", "2.0"],
  ["2.4", "0.0", "-0.8", "3.2", "2.3", "2.8", "2.5", "6.5", "5.6", "0.0", "2.0"]
]

const table3Headers = ["Year", "AVG", "NL", "PEI", "NS", "NB", "QB", "ON", "MN", "SK", "AB", "BC"]

const table3Data = [
  [
    "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988",
    "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004",
    "2005", "2006", "2007", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"
  ],
  [
    "534", "534", "547", "551", "564", "617", "627", "642", "702", "763", "863", "908", "977", "1019", "1063", "1137", "1185", "1271",
    "1464", "1706", "1872", "2023", "2221", "2384", "2648", "2869", "3064", "3328", "3447", "3577", "3711", "3975", "4141", "4211",
    "4400", "4347", "4558", "4747", "4942", "5146", "5313", "5586", "5767", "5998", "6191"
  ],
  [
    "500", "500", "500", "500", "500", "607", "636", "635", "639", "699", "850", "892", "936", "1006", "1056", "1108", "1164", "1280",
    "1344", "1544", "1700", "2000", "2150", "2312", "2702", "3211", "3216", "3373", "3373", "3036", "2729", "2606", "2606", "2606",
    "2633", "2606", "2632", "2619", "2624", "2649", "2649", "2644", "2631", "2660", "2660"
  ],
  [
    "550", "550", "600", ".", ".", "692", "765", "807", "876", "961", "1134", "1220", "1288", "1371", "1497", "1582", "1663", "1744",
    "1874", "2141", "2298", "2509", "2647", "2846", "2948", "3162", "3327", "3499", "3499", "3710", "3891", "4132", "4374", "4645",
    "4920", "4947", "4440", "4530", "4969", "5131", "5258", "5474", "5688", "5849", "6119"
  ],
  [
    "663", "664", "667", "689", "714", "731", "777", "843", "907", "994", "1147", "1326", "1428", "1486", "1549", "1622", "1699",
    "1804", "1941", "2232", "2446", "2701", "2975", "3249", "3597", "3892", "4074", "4262", "4631", "4855", "5214", "5556", "6003",
    "6323", "6422", "6571", "6110", "5877", "5752", "5497", "5722", "5977", "6215", "6483", "6817"
  ],
  [
    "601", "581", "590", "653", "723", "709", "746", "777", "830", "935", "1102", "1196", "1283", "1375", "1507", "1600", "1712",
    "1804", "1925", "2046", "2265", "2385", "2390", "2534", "2795", "3026", "3225", "3350", "3585", "3863", "4186", "4457", "4719",
    "5037", "5470", "5328", "5590", "5479", "5516", "5647", "5728", "5940", "6112", "6298", "6353"
  ],
  [
    "508", "519", "544", "532", "511", "514", "508", "491", "503", "512", "504", "503", "503", "503", "506", "505", "519", "519",
    "904", "1311", "1458", "1550", "1704", "1703", "1705", "1804", "1804", "1813", "1819", "1843", "1852", "1865", "1888", "1900",
    "1932", "1916", "2056", "2180", "2309", "2411", "2520", "2565", "2657", "2740", "2799"
  ],
  [
    "592", "595", "605", "610", "602", "700", "702", "740", "832", "926", "1068", "1111", "1176", "1235", "1296", "1372", "1443",
    "1561", "1680", "1818", "1942", "2076", "2286", "2518", "2992", "3293", "3640", "4084", "4256", "4492", "4572", "4808", "4831",
    "4933", "5155", "5110", "5388", "5667", "5985", "6316", "6815", "6975", "7257", "7562", "7868"
  ],
  [
    "434", "434", "435", "435", "463", "471", "573", "609", "660", "715", "712", "827", "907", "978", "1068", "1176", "1272", "1394",
    "1512", "1848", "2160", "2272", "2393", "2520", "2689", "2921", "3149", "3488", "3219", "3243", "3144", "3155", "3235", "3333",
    "3319", "3338", "3271", "3238", "3408", "3593", "3638", "3720", "3790", "3857", "3930"
  ],
  [
    "427", "479", "480", "479", "533", "587", "641", "673", "713", "768", "841", "899", "982", "1062", "1123", "1238", "1334", "1405",
    "1545", "1859", "2129", "2341", "2544", "2680", "2726", "3074", "3279", "3367", "3668", "3879", "4287", "4645", "5063", "5063",
    "4774", "5063", "5015", "5064", "5173", "5431", "5734", "6106", "6402", "6693", "6885"
  ],
  [
    "415", "415", "415", "415", "519", "521", "574", "576", "635", "635", "759", "802", "856", "885", "909", "1019", "1049", "1127",
    "1286", "1544", "1831", "2209", "2475", "2744", "2975", "3241", "3519", "3723", "3907", "4030", "4165", "4512", "4953", "4838",
    "4763", "4828", "5122", "5308", "5240", "5505", "5663", "5670", "5675", "5738", "5738"
  ],
  [
    "465", "442", "441", "442", "442", "520", "561", "545", "617", "704", "909", "989", "1297", "1431", "1488", "1647", "1610",
    "1724", "1808", "1970", "2128", "2240", "2434", "2563", "2577", "2518", "2525", "2568", "2592", "2527", "3176", "4084", "4735",
    "4867", "4740", "4950", "4922", "4746", "4706", "4758", "4919", "4931", "5018", "5201", "5305"
  ]
]

class Raw_Data extends Component{
  render(){
    return(
      <Fragment>
      <Textbox title={"Research Paragraph 1"} content={NotesParagraph1} />
      <Textbox title={"Research Paragraph 2"} content={NotesParagraph2} />
      <Table title={"Education Debt Over 15 Years"} headers={table1Headers} data={table1Data} len={table1Data[0].length} />
      <Textbox title={"Research Paragraph 3"} content={NotesParagraph3} />
      <Textbox title={"Research Paragraph 4"} content={NotesParagraph4} />
      <Textbox title={"Research Paragraph 5"} content={NotesParagraph5} />
      <Textbox title={"Research Paragraph 6"} content={NotesParagraph6} />
      <Table title={"Tuition Increase by Percent from 2018 to 2019"} headers={table2Headers} data={table2Data} len={table2Data[0].length} />
      <Table title={"Average Tuition Costs By Province"} headers={table3Headers} data={table3Data} len={table3Data[0].length} />
      <Textbox title={"Dragons Den Pitch Paragraph 1"} content={NotesParagraph7} />
      <Textbox title={"Dragons Den Pitch Paragraph 2"} content={NotesParagraph8} />
      <Textbox title={"Dragons Den Pitch Paragraph 3"} content={NotesParagraph9} />
      <Textbox title={"Dragons Den Pitch Paragraph 4"} content={NotesParagraph10} />
      <Textbox title={"Dragons Den Pitch Paragraph 5"} content={NotesParagraph11} />
      </Fragment>
    );
  }
}

export default Raw_Data;
