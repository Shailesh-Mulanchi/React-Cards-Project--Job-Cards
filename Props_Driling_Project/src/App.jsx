import React from 'react'
import {Bookmark} from 'lucide-react';
import Card from './componentProps/Card'


const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    position: "Sr. Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    position: "Jr. Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    position: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "3 days ago",
    position: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Chennai, India"
  }, {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Chennai, India"
  }
];

const App = () => {
return(

<div className="parent">

{jobs.map((el,index)=>(

 <Card  key={index} brandLogo={el.brandLogo} companyName={el.companyName} datePosted={el.datePosted} position={el.position} tag1={el.tag1} tag2={el.tag2} pay={el.pay} location={el.location}/>

))}
</div>
);
};

export default App
