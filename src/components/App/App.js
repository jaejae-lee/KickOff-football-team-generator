import React from 'react';
import '../../App.css'
import '../../css/style.css';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Form from '../Form'
import PlayerList from '../PlayerList'
import TeamGenerator from '../TeamGenerator';

function App({ fullPlayer }) {
  return (
    <>
      <Header/>
      <Form/>
      {/* { fullPlayer ? <TeamGenerator/> : <PlayerList/> } */}
      <TeamGenerator/> 
      <PlayerList/> 
      <Footer/>
    </>
  );
}

export default App;
