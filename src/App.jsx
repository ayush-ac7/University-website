import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Program/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

export default function App() {

   return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer"/>
        <Programs />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos"/>
        <Campus />
      </div> 
    </div>
   )
}