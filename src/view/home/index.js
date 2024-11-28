import React from "react";
import CardBaner from "../CardBaner";
import CardFeature from "../CardFeature";
import CardServices from "../CardServices";
import CardTeamMembers from "../CardTeamMembers";

const CardViewHomePage = () => {
  return (
    <>
      <CardBaner />
      <CardFeature />
      <CardServices/>
      <CardTeamMembers/>
    </>
  );
};

export default CardViewHomePage;
