import React from 'react';
import './App.css';

import Card from '../src/components/books.component.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="cardList">
       <Card ></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       </div>
      </header>
    </div>
  );
}

export default App;
