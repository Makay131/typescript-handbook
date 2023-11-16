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
import Styles from './components/Styles';
import Box from './components/context/Box';
import ThemeProvider from './components/context/ThemeContext';
import UserProvider from './components/context/UserContext';
import User from './components/state/User';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import {List} from './components/generics/List';
import RandomNumber from './components/restriction/RandomNumber';
import Toast from './components/templateLiterals/Toast';
import BaseButton from './components/baseComponents/BaseButton';
import Text from './components/polymorphic/Text';

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
      <Styles styles={{border: '1px solid grey', padding: '1rem'}} />
      <ThemeProvider>
        <Box />
      </ThemeProvider>
      <UserProvider>
        <User />
      </UserProvider>
      <Private isLoggedIn={true} component={Profile} />
      <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item: any) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item: any) => console.log(item)} />
      <RandomNumber value={10} isPositive={true} />
      <Toast position="center-left" />
      <BaseButton variant="primary" onClick={() => {}}>BaseButton - Primary</BaseButton>
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someID" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
