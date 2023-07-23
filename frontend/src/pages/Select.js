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

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.id}: {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

