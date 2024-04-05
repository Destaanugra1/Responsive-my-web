import NavComp from "./components/NavComp";
import ServiceComp from "./components/ServiceComp";
import HeroComp from "./components/HeroComp";
import GaleryComp from "./components/GaleryComp";
import FooterComp from "./components/FooterComp";
import FaqComp from "./components/FaqComp";

function App() {
  return (
    <div>
      <HeroComp />
      {/*content*/}
       <NavComp />
       <GaleryComp />
      <ServiceComp />
      <FaqComp /> 
      {/*content*/}
      <FooterComp />
    </div>
  )
}
export default App;
