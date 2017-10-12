import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <div className="Header">
        Reminder
        <div>
          <input type="text" placeholder="Remind me to call mom"/>
        </div>       
      </div>
    );
  };
}

export default Header;