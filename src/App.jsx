import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Program/Programs";
import Title from "./Components/Title/Title";

export default function App() {

   return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title/>
       <Programs />
      </div> 
    </div>
   )
}