import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/layout";
import Partner from "@/components/Partner";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Services";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  return (
   <>
      <Layout>
        <Hero/>
        <About/>
        <Service/> 
        <Portfolio/>
        <Blog/> 
        <Partner/>
        <Subscribe/>
      </Layout>
      
   </>
  )
}
