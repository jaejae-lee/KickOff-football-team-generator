import React from 'react';
import '../../App.css'
import '../../css/style.css';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Form from '../Form'
import PlayerList from '../PlayerList'
import TeamGenerator from '../TeamGenerator';
import ResetBtn from '../ResetBtn';

function App() {
  return (
    <>
      <Header/>
      <Form/>
      <TeamGenerator/> 
      <PlayerList/> 
      <ResetBtn/>
      <Footer/>
    </>
  );
}

export default App;
