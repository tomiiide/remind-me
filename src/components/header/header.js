import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <div className="Header">
        <p>Remind Me</p>
        <form action="" onSubmit="">
          <input type="text" placeholder="to call mom this evening" name="remind"/>
          <button type="submit" className="btn btn-white">Remind Me</button>
          </form>
      </div>
    );
  };
}

export default Header;