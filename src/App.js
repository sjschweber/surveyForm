import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import Form from './Form.js'
import './App.css';

function App() {

  return(

    <div id="parent-div">

      <div id="title-div">
        <h1 id="title">Survey Form</h1>
        <p id="description">This is a short form created with React</p>
      </div>


        <Form/>

    </div>

  );
}

export default App;
