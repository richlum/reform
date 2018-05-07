import {createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import showstore from './action_showstore'

const rootReducer = combineReducers ({
  // insert other custom reducers here as well
  showstore: showstore,
  form: formReducer
})


let store = createStore (rootReducer)


// for console access to dump/alter store directly
window.store = store;

export default store;
