import "./styles.css";
import { Header } from "./Header";
import { SliderMain } from "./SliderMain";
import { Office } from "./Office";
import { Partners } from "./Partners";
import { StayUp } from "./StayUp";
import { WhyChoose } from "./WhyChoose";
import { GetConsult } from "./GetConsult";
import { Interesting } from "./Interesting";
import { Footer } from "./Footer";
import { Manager } from "./Manager";
import { Opens } from "./Opens";
import { Trusts } from "./Trusts";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function Main() {
  return (
    <div className="App">
      <Header />
      <SliderMain />
      <Office />
      <Partners />
      <Trusts />
      <Opens />
      <StayUp />
      <WhyChoose />
      <GetConsult />
      <Interesting />
      <Manager />
      <Footer />
    </div>
  );
}
export { Main };
