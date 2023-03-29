import React from "react";
import { useSelector } from "react-redux";

const Test = ({data}) => {
const state = useSelector(state => state)
const user = useSelector((state) => state.user);
console.log(11111, state);
    
  return <div>_test</div>;
};

export default Test;
