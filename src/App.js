import React from 'react';
import './App.css';

import Card from '../src/components/books.component.js'
import {BookComponent} from '../src/components/books.component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="cardList">
         {/* <BookComponent></BookComponent> */}
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
