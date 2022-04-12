import logo from './logo.svg';
import './App.css';
import React from 'react';
import Track from './tone-components/track/track.component';

const App = () => {

  const createTrack = () => {
    console.log('track')
    return (<Track />)
  }
 
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id='wrapper'>
         {/* <div><button id='button' onClick={createTrack}>create track</button></div> */}
         <Track />
         <Track />
         <Track />
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
