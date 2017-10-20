import React, { Component } from 'react';

class ReminderCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      dueTime : this.props.reminder.due || 30
    };
  }

  render(){
    return (
      <div className="reminder_card">
        <div className="details">{this.props.reminder.details}</div>
      </div>
    );
  }
}


export default ReminderCard;