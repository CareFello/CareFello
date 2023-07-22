import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Select() {
  
  const [id, setId] = useState("");
  const [name1, setName] = useState("");
 


  async function add(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8085/api/persons", {
        name: name1,
        id: id,
        
        });
        alert("Person Registation Successfully");

      } catch (err) {
        alert(err);
      }
    }
  }



const Select = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Make the GET request using Axios to fetch data from the backend
    axios.get('http://localhost:8085/api/persons')
      .then((response) => setPeople(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <form>
        <div class="form-group">
          <label>Id</label>
          <input type="text"  class="form-control" id="id" placeholder="id"
          
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>name</label>
          <input type="email"  class="form-control" id="name" placeholder="name"
          
          value={name1}
          onChange={(event) => {
            setName(event.target.value);
          }}
          
          />
 
        </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={add} >ADD</button>
      </form>  

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

