import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT'
    })
  }


  render() {
    console.log(this.props.store.getState());
    return (
      <div className="App">
       <button onClick={(event) => this.handleOnClick(event)} >
         Click
       </button>
       <p>{this.props.store.getState().items.length}</p>
     </div>
    );
  }
};

export default App;
