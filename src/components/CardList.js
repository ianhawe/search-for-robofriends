import React from "react";
import Card from "./Card";
import { robots } from '../robots';


const CardList = ({ robots }) => {
  // if(true){
  //   throw new Error('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!');
  // }
  return robots.map((user, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
};

export default CardList;
