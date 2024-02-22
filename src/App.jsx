import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import "./App.css"
import Companies from "./Component/Companies/Companies"
import Residencies from "./Component/Residencies/Residencies"
import Value from "./Component/Value/Value";
import Contact from "./Component/Contact/Contact";
import GetStarted from "./Component/GetStarted/GetStarted"
import Footer from "./Component/Footer/Footer";
 

function App() {
  return (
    <div className="App">
    <div>
    <div className="white-gold"/>
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <div><Residencies/>
    </div>

    <div>
     <Value/> 
     </div>

     <div><Contact/></div>
     <div><GetStarted/></div>
     <div><Footer/></div>
    </div>
  );
}

export default App;
