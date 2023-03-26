import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardList from './CardList/CardList';
import CardDetails from './CardDetails/CardDetails';
import CardForm from './CardForm/CardForm';
import CardItem from './CardItem/CardItem';


const App = () => {
  return(
  <>
  <CardForm />
  <CardDetails />
  <CardList />
  <CardItem />
  <div className='App'>
    <card
    title='JavaScript'
    imageUrl='https://pluspng.com/img-png/javascript-vector-png-javascript-vector-logo-600.png'
    LinkBtn='<a href="#" class="btn btn-primary">Click Here</a>'
    
    />

  </div>
  

  </>
  )
}
export default App;