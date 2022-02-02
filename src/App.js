import logo from './logo.svg';
import './App.css';
import React from 'react'
import Parent from './Parent';
import Card from './Card';
import DontChange from './Dontchange';
import ChangeWithState from './ChangeWithState';
import ConditionalRendering from './ConditionalRendering';
import RenderingList from './RenderingList';

function App() {
  const clickFunction = (event) =>{
    console.log(event)
  }
  return (
    <div className={'App'} >
      <Card>
        <ul >
          <li>primer elemento</li>
          <li>segundo elemento</li>
        </ul>
        <input></input>
        <button onClick={
          clickFunction
        }>Presioname</button>
      </Card>
      <Parent parentName="Padre 2"/>
      <Card>
        <DontChange/>
        <ChangeWithState/>
        <ConditionalRendering/>
      </Card>
      <RenderingList/>
    </div>
  );
}

export default App;

