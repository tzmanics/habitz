import React, { Component } from 'react';
import { createStore } from 'redux';
import { GoalList } from './containers';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './App.css';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HABITZ</h1>
          <p className="App-tagline">
            Using iteration to make habitz to accomplish goals!
          </p>
        </header>
        <Provider store={ store }>
          <GoalList />
        </Provider>
      </div>
    );
  }
}

export default App;
