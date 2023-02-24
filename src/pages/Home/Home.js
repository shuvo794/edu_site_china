import React from "react";
import Header from "../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Counter from "../Counter/Counter";
import Instractor from "../Instractor/Instractor";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Service />
      <Blog />
      <Counter />
      <Instractor />
    </div>
  );
};

export default Home;
