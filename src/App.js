import React from 'react';
import './App.css';
import './css/style.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './components/Form'
import PlayerList from './components/PlayerList'
import TeamGenerator from './components/TeamGenerator';

function App() {
  return (
    <>
      <Header/>
      <Form/>
      <PlayerList/>
      <TeamGenerator/> 
      <Footer/>
    </>
  );
}

export default App;
