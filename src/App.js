import React from 'react';
import './App.css';
import Heading from './components/heading'
import Body from './components/body'
import Process from './components/process'
import Footer from './components/footer'
import Modal from './components/modal'

function App() {
  return (
    <div>
      <Heading/>
      <Modal/>
      <Body/>
      <Process/>
      <Footer/>
    </div>
  );
}

export default App;
