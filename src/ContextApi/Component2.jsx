import React, { useContext, useState } from "react";
import { data } from "./Component1";
import Table from "react-bootstrap/Table";

const Component2 = () => {
  const { newData } = useContext(data);
  const [term, setTerm] = useState("");
  console.log(newData, "apidata");


const filterData = newData.filter(({name}) => {
  return name.indexOf(term) >= 0;
}).map((value) => {
  return (
    <tbody>
      <tr>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <img src={value.photo} alt="api image" />
        <td>{value.price}</td>
      </tr>
    </tbody>
  );
})


  return (
    <div>
      <h1> Data from Component 2 </h1>

      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <Table striped borderd hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        {filterData}
      </Table>
    </div>
  );
};

export default Component2;
