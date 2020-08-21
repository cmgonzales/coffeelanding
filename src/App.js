import React from 'react';
import './App.css';
import Heading from './components/heading'
import Body from './components/body'
import Process from './components/process'
import Footer from './footer'
import NavBar from './components/navbar'


function App() {

  return (
    <div>
      <NavBar/>
      <Heading/>
      <Body/>
      <Process/>
      <Footer/>

    </div>
  );
}

export default App;
