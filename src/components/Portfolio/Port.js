import Portfoliobottom from '@/data/Portfoliobottom';
import React from 'react';
import { Grechen_Fuemen } from "next/font/google";
import { DM_Sans } from "next/font/google";
import CountUp from 'react-countup';
 
const DmSans = DM_Sans(
    {
      subsets:["latin"],
      weight:"500",
    }
  );

const GrechenFuemen = Grechen_Fuemen(
    {
      subsets:["latin"],
      weight:"400",
    }
  );


const Port = () => {
  return (
    <>
    {/* <div className='port-main'>
        {
            Portfoliobottom.map((item,i)=>(
                <>
                <div className='port-item'>
                    <div className='port-1'>
                    <h1 className={GrechenFuemen.className}>{item.number}</h1>
                    </div>
                    <div className='port-2'>
                    <p className={DmSans.className}>{item.text}</p>
                    </div>  
                </div>
                </>
            ))
        }
    </div> */}
    <div className='row'>
      <div className='col-lg-12'>
        <div className='portfolio-main'>
        <div className='port-main'>
          <h4 className={GrechenFuemen.className}>
          <CountUp
  start={30}
  end={10000}
  duration={10}
  suffix="+"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div className='port-item'>
      <span ref={countUpRef} />
      <div className='port-2'>
      <p className={DmSans.className} onClick={start}>Team member</p>
      </div>   
    </div>
  )}
</CountUp>
          </h4>
        </div>
        <div className='port-main'>
          <h4 className={GrechenFuemen.className}>
          <CountUp
  start={150}
  end={10000}
  duration={10}
  suffix="+"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div className='port-item'>
      <span ref={countUpRef} />
      <div className='port-2'>
      <p className={DmSans.className} onClick={start}>Completed Projects</p>
      </div>   
    </div>
  )}
</CountUp>
          </h4>
        </div>
        <div className='port-main'>
          <h4 className={GrechenFuemen.className}>
          <CountUp
  start={50}
  end={10000}
  duration={10}
  suffix="+"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div className='port-item'>
      <span ref={countUpRef} />
      <div className='port-2'>
      <p className={DmSans.className} onClick={start}>Satisfied Clients</p>
      </div>   
    </div>
  )}
</CountUp>
          </h4>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Port;



// import MyCountUp from "../components/MyCountUp";
// import Link from "next/link";

// const containerStyles = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   background: "#ddd",
//   width: "80%",
//   height: "calc(100vh - 1rem)",
//   margin: "0 auto"
// };

// const counterStyles = {
//   background: "#fff",
//   boxShadow: "1px 2px 8px 1px rgba(30,30,30,0.4)",
//   fontSize: "32px",
//   fontWeight: "bold",
//   lineHeight: 1,
//   padding: "1rem 0",
//   textAlign: "center",
//   width: "200px",
//   margin: "0 0 1rem"
// };

// export default function AboutPage() {
//   return (
//     <div style={containerStyles}>
//       <h2>Custom Wrapper Version</h2>
//       <p>(my own custom React wrapper, using hooks)</p>

//       <Link href="/">{`< Go Back`}</Link>

//       <h3>Counters</h3>
//       <MyCountUp
//         startVal={0}
//         endVal={85000000}
//         duration={7}
//         delay={1}
//         // smartEasingAmount={400}
//         styles={counterStyles}
//       />
//       <MyCountUp
//         startVal={0}
//         endVal={125000000}
//         duration={8}
//         delay={9}
//         // smartEasingAmount={1000}
//         styles={counterStyles}
//       />
//       <MyCountUp
//         startVal={0}
//         endVal={11000000}
//         duration={9}
//         delay={17}
//         // smartEasingAmount={100}
//         styles={counterStyles}
//       />
//     </div>
//   );
// }

