import React, { Component } from 'react';
import Header from './components/header/header';
import ReminderList from './components/reminders/reminder-list';
import Reminders from './reminders.json';
class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Header />
        <ReminderList reminders={Reminders}/>
      </div>
    );
  }
}

export default App;
