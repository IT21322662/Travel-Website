import React from "react";
import './App.css';
import Home from "./pages/Home";
import Cabins from "./pages/Cabins";
import GetInspired from "./pages/GetInspired";
import GiftAStay from "./pages/GiftAStay";
import AboutUs from "./pages/AboutUs";
import Videopg from "./pages/Videopg";
import AvailableCabins from "./pages/AvailableCabins";
import FAQSection from "./pages/Questions";
import Gateway from "./pages/Gateway";

function App() {
  return (
    <div className="App">
      <header>
        <h1>UNWIND<span><b>CABINS</b></span></h1>
        <nav>
          <ul>
            <li><a href="#cabins">Our Cabins</a></li>
            <li><a href="#get-inspired">Get Inspired</a></li>
            <li><a href="#gift-a-stay">Gift a Stay</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#account"><img src={require("./images/user.png")}></img></a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="cabins">
          <Cabins />
        </section>
        <section id="get-inspired">
          <GetInspired />
        </section>
        <section id="gift-a-stay">
          <GiftAStay />
        </section>
        <section id="video">
          <Videopg />
        </section>
        <section id="availablecabin">
          <AvailableCabins />
        </section>
        <section id="questions">
          <FAQSection />
        </section>
        <section id="Gateways">
          <Gateway />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
      </main>
    </div>
  );
}

export default App;
