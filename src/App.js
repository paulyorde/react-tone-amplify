import logo from './logo.svg';
import './App.css';
import React from 'react';
import Track from './tone-components/track/track.component';

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const createTrack = () => {
    console.log('track')
    return (<Track />)
  }
 
  return (
    <>
    <div className="App">
    <NumberList numbers={numbers} />
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
