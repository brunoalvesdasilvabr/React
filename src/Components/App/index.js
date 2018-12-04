import React, { Component } from 'react';
import './App.css';
import Cart from '../Cart'
class App extends Component {
  state ={
    products:[
      {
      id:1,
      name: 'Produto 1',
      price: 10
      },
      {
        id:2,
        name: 'Produto 2',
        price: 35
        }
    ]
  
  };
  render() {
    return (
      <div className="App">
        <Cart products={this.state.products}/>
         
      </div>
    );
  }
}

export default App;
