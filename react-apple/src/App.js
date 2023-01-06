import Header from "./Components/Header/Header.jsx";
// import {  Header} from "./Components/Header/Header.jsx";// named export syntax
import Footer from "./Components/Footer/Footer"
import "./commonResource/css/styles.css"
import "./commonResource/css/bootstrap.css"
import Alert from "./Components/Main/Alert/Alert.jsx";
import SectionOne from "./Components/Main/SectionOne/SectionOne.jsx";
import SectionTwo from "./Components/Main/SectionTwo/SectionTwo.jsx";
import SectionThree from "./Components/Main/SectionThree/SectionThree.jsx";
import SectionFour from "./Components/Main/SectionFour/SectionFour.jsx";
import SectionFive from "./Components/Main/SectionFive/SectionFive.jsx";
import SectionSix from "./Components/Main/SectionSix/SectionSix.jsx";

function App() {
  return (
    <div>
   <Alert/>   
   <Header /> 
   <SectionOne/>   
   <SectionTwo/>   
   <SectionThree/>   
   <SectionFour/>   
   <SectionFive/>   
   <SectionSix/>   
   <Footer/>   
    </div>
  );
}

export default App;
