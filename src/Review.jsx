import "./index.scss";
import { Header } from "./Header";
import { Partners } from "./Partners";
import { StayUp } from "./StayUp";
import { Interesting } from "./Interesting";
import { Footer } from "./Footer";
import { Manager } from "./Manager";
import { Opens } from "./Opens";
import { History } from "./History";
import { Reviews } from "./Reviwes";
import { Slider2 } from "./Slider2";
function Review() {
  return (
    <div className="App">
      <Header />
      <History />
      <Reviews />
      <Slider2 />
      <Opens />
      <Partners />
      <StayUp />
      <Interesting />
      <Manager />
      <Footer />
    </div>
  );
}
export { Review };
