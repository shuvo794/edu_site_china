import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Counter from "../Counter/Counter";
import Instractor from "../Instractor/Instractor";
import Footer from "../Shared/Footer/Footer";
import Add from "../Add/Add";
import Contuct from "../Contuct/Contuct";
import Visa from "../Visa/Visa";
import Fly from "../Fly/Fly";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Fly />
      <Visa />
      <Blog />
      <Counter />
      <Instractor />
      <Add />
      <Contuct />
      <Footer />
    </div>
  );
};

export default Home;
