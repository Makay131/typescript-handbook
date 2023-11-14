import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import ReactChildren from './components/ReactChildren';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const personName = {
    first: 'Bryce',
    last: 'Wayne',
  }
  const nameList = [
    {
      first: 'Bryce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'John',
      last: 'Doe',
    }
  ]
  return (
    <div className="App">
      <Greet name="Marko" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='success' />
      <Heading>Placeholder Text</Heading>
      <ReactChildren>
        <Heading>A child heading</Heading>
      </ReactChildren>
      <Button onClick={(event, id) => console.log('Button clicked', event, id)} />
      <Input value="" onChange={e => console.log(e)} />
    </div>
  );
}

export default App;
