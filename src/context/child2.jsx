import React, { useContext } from "react";
import { data } from "./Parent";

const Child2 = () => {
  const { batch8 } = useContext(data);
  console.log(batch8, "name");
  return (
<>
    <h1> Batch 8 data </h1>
    <div className="table-style">
      {batch8.map((value) => {
        return (
          <>
            <h6>{value.id}</h6>
            <h2>{value.name}</h2>
            <h3>{value.age}</h3>
          </>
        );
      })}
    </div>
    </>
  );
};

export default Child2;
