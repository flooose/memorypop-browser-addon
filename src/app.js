import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import NewEntry from './new_entry.js';

export default class App extends React.Component {
  render() {
    return (
      <NewEntry></NewEntry>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
