import React, {Component} from 'react';
import './App.css';
import {setName} from './actions/index.js'
import {setEmail} from './actions/index.js'

import { connect } from 'react-redux'
//console.log(this.props.store)
class Form extends Component{

  constructor(props){
    super(props);
    this.state = {
      age: 0,
      email: "",
      errors:
        {
        email: '',
        name: '',
        }

    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onNameChange(event) {

      this.props.setName(event.target.value);

  }

  onEmailChange(event){

    this.props.setEmail(event.target.value);

  }

  handleClick(e){

  }

  render(){

  //  const errors = this.state.errors.name;
  let x = false;
    let msg;
    let msg2;
    if(this.state.errors.name && this.state.name){
      console.log('error');
      msg = <span className='error'>Please enter a valid name</span>
    }

    if(this.state.errors.email && this.state.email){
      msg2 =<span className='error'>Please enter a valid email</span>;
    }

    return(
      <div class="input-div">

        {msg}
        <label>Name:</label>
        <input id="name"
          type="text"
          placeholder="Enter your name"
          required onChange={this.onNameChange}
          style= {this.props.errors.name ? {border: "3px solid #ff0000"}: null}>
        </input>
        {msg2}
        <label>Email:</label>
        <input id="email"
          style= {this.props.errors.email ? {border: "3px solid #ff0000"}: null}
          type="email"
          placeholder="Enter your Email"
          required onChange={this.onEmailChange}>
        </input>

        <label>Age:</label>
        <input id="age"
          type="number"
          placeholder="Age"
          min="1"
          max="100">
          </input>

        <label>Please select an option:</label>


{/*
        <div id="radioGroup">
          <input id="option1" value="Hello" name="options" type="radio"/>
          <label id="option12" for="Hello">Hello</label>
        </div>


          <input id="option2" value="Goodbye" name="options" type="radio"/>


          <input id="option3" value="Yo" name="options" type="radio"/>

        */}




        <select>
          <option value="student">Student</option>
          <option value="full-time">Full Time</option>
          <option value="no-say">Prefer Not to Say</option>
          <option value="other">Other</option>
        </select>

        <label id="text-label"> Any comments or suggestions?</label>
        <textarea id="paragraph-input" cols='10' rows='10'/>


        <input id="submit" type="submit"></input>


      </div>
    );
  }
}


const mapStateToProps = state => ({name: state.name, errors: state.errors, email: state.email});
const mapDispatchToProps = dispatch =>{
  return{
    setName: (name) => dispatch(setName(name)),
    setEmail: (email) => dispatch(setEmail(email))
  }
} //({setName: (name) => dispatch(setName(name)), setEmail: (email) => dispatch(setEmail(email))});


export default connect(mapStateToProps, mapDispatchToProps)(Form);
