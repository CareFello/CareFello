import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Select = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get('http://localhost:8085/api/persons/get')
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {

    console.log(id);
    try {
      await axios.delete(`http://localhost:8085/api/persons/delete/${id}`);
      axios.get('http://localhost:8085/api/persons/get')
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
      
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.id}: {person.name}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

