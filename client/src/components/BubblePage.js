import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
        console.log("FETCH", res);
        setColorList(res.data)
        console.log("HERE", colorList)
    })
    .catch(error => console.log(error.response));
  }

  React.useEffect(() => {
		getColors();
	}, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
