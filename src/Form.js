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
  }

  onNameChange(event) {

    const validName = /([^0-9]+)$/
    const isValid = validName.test(event.target.value);

    if(isValid){
      this.setState({name: event.target.value, errors: {name: false}});
    }else{
      this.setState({name: event.target.value, errors: {name: true}});

    }

  }


  render(){

  //  const errors = this.state.errors.name;
    let msg;
    if(this.state.errors.name ){
      console.log('error');
      msg = <span className='error'>Error{this.state.errors.name}</span>
    }

    return(
      <div class="input-div">

        <label>Name:</label>
        <input id="name" type="text" placeholder="Enter your name" required onChange={this.onNameChange}></input>
        {msg}
        <label>Email:</label>
        <input id="email" type="email" placeholder="Enter your Email" required></input>
        <label>Age:</label>
        <input id="age" type="number" placeholder="Age" min="1" max="100"></input>

        <label>Please select an option:</label>

        <label for="option1">Option1</label>
        <input id="option1" value="option1" name="options" type="radio"></input>
        <label for="option2">Option2</label>
        <input id="option2" value="option2" name="options" type="radio"></input>
        <label for="option3">Option3</label>
        <input id="option3" value="option3" name="options" type="radio"></input>

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
