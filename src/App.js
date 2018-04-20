import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  //added code for event listener
  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    });
  }
  //

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>Click</button>
        <p>{this.props.store.getState().items.length}</p>
        App component
      </div>
    );
  }
};

export default App;
