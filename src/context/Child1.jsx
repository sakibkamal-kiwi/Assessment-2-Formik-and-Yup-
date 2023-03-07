import React, { useContext } from "react";
import { data } from "./Parent";
import SuperChild from "./SuperChild";

const Child1 = () => {
  const { batch7 } = useContext(data);
  console.log(batch7, "name");
  return (
<>
<div>
  <SuperChild/>
</div>
    <h1> Batch 7 data </h1>

    <div className="table-style">
      {batch7.map((value) => {
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

export default Child1;
