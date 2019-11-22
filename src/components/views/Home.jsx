import React from "react";
import "../../style/view/home.css";
import CardFeature from "../components/CardFeature";
import CardComments from "../components/CardComments";
import CardBanner from "../components/CardBanner";


const Home = () => {
  return (
    <div>
      <title>Pagina de inicio</title>
      <CardBanner></CardBanner>
     <CardComments></CardComments>
     <CardFeature></CardFeature>
   </div>
  );
};

export default Home;
