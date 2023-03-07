import React, { useContext } from "react";
import { data } from "./Parent";

const SuperChild = () => {
  const { Mentor } = useContext(data);
  console.log(Mentor, "name");
  return (
    <>
      <h1> Mentor </h1>

      <div className="table-style">
        {Mentor.map((value) => {
          return (
            <>
              <h3>{value.id}</h3>
              <h2>{value.name}</h2>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SuperChild;
