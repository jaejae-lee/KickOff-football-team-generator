import React from 'react';
import './App.css';
import './css/style.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './components/Form'
import PlayerList from './components/PlayerList'
import TeamGenerator from './components/TeamGenerator';

function App({ fullPlayer }) {
  return (
    <>
      <Header/>
      <Form/>
      {/* { fullPlayer ? <TeamGenerator/> : null } */}
      <PlayerList/>
      <Footer/>
    </>
  );
}

export default App;
