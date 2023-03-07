import React, { createContext, useState } from "react";
import { useEffect } from "react";
import Component2 from "./Component2";
import Component3 from "./Component3";
import axios from "axios";
import './context.css'
import Header from "../pages/Header";

export const data = createContext();

const Component1 = () => {
  const [apiData, setApiData] = useState([]);
  const [photo, setPhoto] = useState([]);

  const getData = async () => {
    await axios
      .get(`http://localhost:3500/product`)
      .then((res) => {
        setApiData(() => res.data);
        //console.log(apiData, "apidata");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const photos = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        setPhoto(() => res.data);
        //console.log(apiData, "apidata");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  useEffect(() => {
    getData();
    photos();
  }, []);
  const newData = apiData;
  const newphoto = photo;
  console.log(newData, "apidata out side");
  console.log(newphoto, "apidata out side");

  return (
    <>
    <Header />
    <br/><br/>
    <data.Provider value={{ newData, newphoto }}>
      <div className="container">
      <div className="float-child">
      <Component2 />
      </div>
       <div className="float-child">
      <Component3 />
      </div>
      </div>
    </data.Provider>
    </>
  );
};

export default Component1;
