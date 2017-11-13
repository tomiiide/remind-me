import React, { Component } from 'react';
import moment from 'moment';

class ReminderCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      dueTime : moment(this.props.reminder.due).toNow(true)
    };
    this.count(this.props.reminder.due,this.props.reminder.details);
  }

  count(time,message){
    let rem = moment(time).diff(moment());
      setTimeout(function(){
          alert("time to "+message);
      },rem);
    
    }

  render(){
    return (
      <div className="reminder_card">
        <div className="details">{this.props.reminder.details}</div>
        <div className="timer">{this.state.dueTime}</div>
      </div>
    );
  }
}


export default ReminderCard;