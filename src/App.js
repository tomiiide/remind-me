import React, { Component } from 'react';
import Header from './components/header/header';
import ReminderList from './components/reminders/reminder-list';
import Reminders from './reminders.json';
import date from 'date.js';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      reminders : Reminders
    };
    this.processReminder = this.processReminder.bind(this);
  }

  
  processReminder(reminder){
    if(!reminder) return;
    let getDate = date(reminder);
    let now = new Date();
    
    if(getDate <= now){
      console.log("invalid");
      return;
    }
    
    var processed = {
      details : reminder,
      due : getDate
    };
    let current_reminders = this.state.reminders;
    current_reminders.push(processed);
    this.setState({reminders : current_reminders});
  }

  render() {
    
    return (
      <div className="App">
        <Header onNewReminder={reminder => this.processReminder(reminder)} />
        <ReminderList reminders={this.state.reminders}/>
      </div>
    );
  }
}

export default App;
