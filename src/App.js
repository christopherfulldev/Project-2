import './App.css';
import Home from './Components/Home';
import Cards from '../src/Components/Cards/index'
import './App.css';
import NavBar from './Components/NavBar'
import React from 'react'


const App = (props) => {

 
 // componentDidMount (
  //  newRequest()
  //)
  
  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;