import Image from "next/image";
import firstimage from "../../src/images/first.png";
import secondimage from "../../src/images/second.png";
import thirdimage from "../../src/images/third.png";
import { MdDateRange } from 'react-icons/md';

const Blogdata = [
    {
        image:<Image src={firstimage} alt="firstimage"/>,
        icon:<MdDateRange/>,
        date:"10 January 2023",
        para:"Bitcoin and Economic Freedom",
        text:"Read More",
    },
    {
        image:<Image src={secondimage} alt="secondimage"/>,
        icon:<MdDateRange/>,
        date:"10 January 2023",
        para:"Permalink to New World Wide Payment",
        text:"Read More",
    },
    {
        image:<Image src={thirdimage} alt="thirdimage"/>,
        icon:<MdDateRange/>,
        date:"10 January 2023",
        para:"Exchange Rate ofBitcoin system",
        text:"Read More",
    },
   
];

export default Blogdata;