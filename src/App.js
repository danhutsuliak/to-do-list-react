import ItemContainer from './components/item-container/item-container.component';
import './App.css';
import AddItemForm from './components/add-item-form/add-item-form.component';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>To Do List</h1>
        <ItemContainer />
        <AddItemForm />
      </div>
    );
  }
}

export default App;
