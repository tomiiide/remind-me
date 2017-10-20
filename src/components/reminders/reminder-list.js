import React, { Component } from 'react';
import ReminderCard from './reminder-card';


class ReminderList extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  buildList(){
    return this.props.reminders.map( (reminder,index) => 
    {
      return <ReminderCard reminder={reminder} key={index} />
    }
  )
  }


  render(){
    return (
      <div className="reminder_list">
        {this.buildList()}
      </div>
    );
  }
}

export default ReminderList;