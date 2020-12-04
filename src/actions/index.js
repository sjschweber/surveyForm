export const NAME_CHANGE = "NAME_CHANGE";
export const ERROR = "ERROR";
export const EMAIL_CHANGE = "EMAIL_CHANGE"
export const EMAIL_ERROR = "EMAIL_ERROR"

export function setName(text){

 const validName = /^[a-zA-Z]+$/;
 const isValid = validName.test(text);

  if(isValid){
    return{
      type: NAME_CHANGE,
      text
    }
  }else{
    return{
      type: ERROR,
      text
    }
  }
}

export function setEmail(text){

  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = validEmail.test(text);

  if(isValid){
    return{
      type: EMAIL_CHANGE,
      text
    }
  }else{
    return{
      type: EMAIL_ERROR,
      text
    }
  }
}

export function getName(){
  return fetch('http://localhost:3002/name').then(response => response.text()).then(text => console.log(text));
}

export function postName(text){
  var name = {
    name: text
  };
  return fetch('http://localhost:3002/name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(name),
  })
  .then(response => response.text())
  .then(data => console.log(data))
}
