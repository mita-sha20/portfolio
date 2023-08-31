import Image from "next/image";
import icon1 from "../../src/images/icon1.png";
import icon2 from "../../src/images/icons2.png";
import icon3 from "../../src/images/icons3.png";
import icon4 from "../../src/images/icons4.png";

const Partner = [
    {
        image:<Image src={icon1} alt="1"/>,
        title:"Happy Mart",
    },
    {
        image:<Image src={icon2} alt="2"/>,
        title:"Lori Cracker",
    },
    {
        image:<Image src={icon3} alt="3"/>,
        title:"Emad Fashion",
    },
    {
        image:<Image src={icon4} alt="4"/>,
        title:"Docco Semims",
    },
]

export default Partner;