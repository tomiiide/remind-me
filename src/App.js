import React, { Component } from 'react';
import Header from './components/header/header';
import ReminderList from './components/reminders/reminder-list';
import Reminders from './reminders.json';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      reminders : Reminders
    };
    this.processReminder = this.processReminder.bind(this);
  }

  
  processReminder(reminder){
    var processed = {
      details : reminder,
      due : ''
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
