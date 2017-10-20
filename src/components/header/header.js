import React, { Component } from 'react';

class Header extends Component{

  constructor(props){
    super(props)
    this.state = {};
  }

submitForm(e){
  e.preventDefault();
  console.log("form Submitted");
}

  render(){
    return (
      <div className="Header">
        <p>Remind Me</p>
        <form action="" onSubmit={this.submitForm}>
          <input type="text" placeholder="to call mom this evening" name="remind"/>
          <button type="submit" className="btn btn-white">Go!</button>
          </form>
      </div>
    );
  };
}

export default Header;