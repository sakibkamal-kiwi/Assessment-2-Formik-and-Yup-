// import * as React from 'react';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// export default function BasicDateTimePicker() {
//   const [value, setValue] = React.useState(dayjs(''));

//   const handlechange = (newValue) => {
//     setValue(newValue);
//    console.log('changes');
//   }
//   const handleBlur = (newValue) => {;
//    console.log('new value' , newValue);
//   }

//   return (

//     <>

//     <h1>  date time picker</h1>

//     <br/><br/><br/>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateTimePicker
//         renderInput={(props) => <TextField {...props} />}
//         label="DateTimePicker"
//         value={value}
//         //onChange={handlechange}
//         onBlur={handleBlur}
//       />
//     </LocalizationProvider>
//     </>
//   );
// };

import react, { useState } from "react";
const Datepicker = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "sakib", age: 22 },
    { id: 2, name: "shakshi", age: 20 },
    { id: 3, name: "chaman", age: 22 },
    { id: 4, name: "surya", age: 21 },
  ]);

  const updatePersonName = (id, name, age) => {
    setPeople((prevPeople) => {
      const updatedPeople = [...prevPeople];
      const personIndex = updatedPeople.findIndex((person) => person.id === id);
      const updatedPerson = {
        ...updatedPeople[personIndex],
        name: name,
        age: age,
      };
      updatedPeople[personIndex] = updatedPerson;
      return updatedPeople;
    });
  };
  updatePersonName(1, "Neha", 22);
  updatePersonName(4, "surya", 40);
  console.log(people);

  return (
    <div>
      <h1> {people}</h1>
    </div>
  );
};
export default Datepicker;
