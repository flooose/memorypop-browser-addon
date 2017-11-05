import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './new_entry.css';

export default class NewEntry extends React.Component {
  render() {
    return (
      <form>
        <input name="new-word"></input>
        <input name="new-word-definition"></input>
        <button>Add new word</button>
      </form>
    );
  }
}

/* ReactDOM.render(
 *   <ShoppingList />,
 *   document.getElementById('root')
 * );*/
