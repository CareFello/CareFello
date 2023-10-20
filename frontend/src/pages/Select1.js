import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Select1 = () => {
 const [people, setPeople] = useState([]);

 useEffect(() => {
   // Make the GET request using Axios to fetch data from the backend
   axios.get('http://localhost:8080/api/beds/request13')
     .then((response) => setPeople(response.data))
     .catch((error) => console.error(error));
 }, []);

 const handleDelete = async (bed_id) => {

   console.log(bed_id);
   try {
     await axios.put(`http://localhost:8080/api/beds/request14/${bed_id}`);
     axios.get('http://localhost:8080/api/beds/request13')
     .then((response) => setPeople(response.data))
     .catch((error) => console.error(error));
     
   } catch (error) {
     console.error('Error upadating beds:', error);
   }
 };

 return (
   <div>
     <h2>People List</h2>
     <ul>
       {people.map((person) => (
         <li key={person.id}>
           {person.elderName}: {person.occuStartDate}: {person.occuEndDate}
     
           <button onClick={() => handleDelete(person.bed_id)}>Delete</button>
         </li>
       ))}
     </ul>
   </div>
 );
};

export default Select1;