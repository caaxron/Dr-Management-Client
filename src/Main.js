import Nav from "./components/Nav";
import { Header } from "./main/header";
import { Section1 } from "./main/section1";
import { Section2 } from "./main/section2";
import { Section3 } from "./main/section3";
import { Section4 } from "./main/section4";
import Footer from "./components/Footer";

export const Main = () => {
  return (
    <>
      <div className="app">
        {/* <canvas class="background"></canvas> */}
        <Nav />
        <Header />
      </div>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Footer />
    </>
  );
};
