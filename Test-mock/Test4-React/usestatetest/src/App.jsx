import React from 'react'
import Counter from './components/Counter'
import LiveValue from './components/LiveValue'
import Mode from './components/Mode';
import Login from './components/Login';
import UpdateName from './components/UpdateName';
import UpdateAge from './components/UpdateAge';
import UpdateCity from './components/UpdateCity';
import Skills from './components/Skills';
import RemoveItem from './components/RemoveItem';
import StudentResult from './components/StudentResult';
import EvenOdd from './components/EvenOdd';
import Form from './components/Form';
import Product from './components/Product';
import AddNumbers from './components/AddNumbers';
import Promote from './components/Promote';

const App = () => {
  return (
    <>
      <Counter />
      <LiveValue />
      <Mode/>
      <Login/>
      <UpdateName/>
      <UpdateAge/>
      <UpdateCity/>
      <Skills/>
      <RemoveItem/>
      <StudentResult/>
      <EvenOdd/>
      <Form/>
      <Product/>
      <AddNumbers/>
      <Promote/>
    </>
  );
}

export default App