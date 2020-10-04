import React from 'react';
import './App.css';
import Heading from './components/heading'
import Body from './components/body'
import Process from './components/process'
import Footer from './components/footer'
import NavBar from './components/navigation'


const style = {
  position: 'sticky',
  top: 0,
  width: '100%',
  backgroundColor: 'white',
  zindex: 1
}



function App() {

  return (
    <div>
      <div style ={style}>
      <NavBar/>
      </div>
      <Heading/>
      <Body/>
      <Process/>
      <Footer
 
      />

    </div>
  );
}

export default App;
