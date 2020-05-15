import React, { useState } from 'react';

import './AddPerson.css';

const AddPerson = (props) => {

  const [state, setState] = useState({
    name: 'Gaëtan',
    age: 0
  })

  const nameChangedHandler = event => {
    setState({name: event.target.value, age: state.age});
  }

  const ageChangedHandler = event => {
    setState({name: state.name, age: event.target.value});
  }

  return (
    <div className="AddPerson">
      <input type="text" placeholder="Name" onChange={nameChangedHandler} value={state.name} />
      <input type="number" placeholder="Age" onChange={ageChangedHandler} value={state.age}/>
      <button onClick={() => props.personAdded(state.name, state.age)}>Add Person</button>
    </div>
  );
};

export default AddPerson;
