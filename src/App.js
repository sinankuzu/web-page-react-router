import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Logo from "./pages/Logo"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/html" element = {<Html/>}/>
          <Route path="/css" element = {<Css/>}/>
          <Route path="/graphic-design" element= {<Logo/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
