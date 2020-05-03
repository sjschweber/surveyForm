import React, {Component} from 'react';
import './App.css';

class Form extends Component{

  constructor(props){
    super(props);
    this.state = {
      age: 0,
      email: "",
      name: "",
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

    const validName = /^[a-zA-Z]+$/;
    const isValid = validName.test(event.target.value);

    if(isValid){
      this.setState({name: event.target.value, errors: {name: false}});
    }else{
      this.setState({name: event.target.value, errors: {name: true}});

    }
  }

  onEmailChange(event){

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = validEmail.test(event.target.value);

    if(isValid){
      this.setState({email: event.target.value, errors: {email: false}});
    }else{
      this.setState({email: event.target.value, errors: {email: true}});
    }
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
          style= {this.state.errors.name && this.state.name ? {border: "3px solid #ff0000"}: null}>
        </input>
        {msg2}
        <label>Email:</label>
        <input id="email"
          style= {this.state.errors.email && this.state.email ? {border: "3px solid #ff0000"}: null}
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


export default Form;
