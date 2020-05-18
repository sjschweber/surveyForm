import { NAME_CHANGE, ERROR, EMAIL_CHANGE, EMAIL_ERROR } from '../actions';

const initialState = {
  name: "",
  email: "",
  errors: {
    name: false,
    email: false
  }
}

export function surveyForm(state = initialState, action){

  switch(action.type){
    case NAME_CHANGE:
      return Object.assign({}, state, {
        name: action.text,
        errors: {name: false}

      })
    case ERROR:
      return Object.assign({}, state, {
        errors: {name: true}
      })
    case EMAIL_CHANGE:
      return Object.assign({}, state, {
        email: action.text,
        errors: {email: false}
      })
    case EMAIL_ERROR:
      return Object.assign({}, state, {
        errors: {email: true}
      })
      default:
        return state
  }
}
