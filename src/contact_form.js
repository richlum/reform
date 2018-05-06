import React from 'react'
import { Field, reduxForm } from 'redux-form'


let formparts = () => {
  let parts = []
  let fieldnames = ["firstName","lastName","email"]
  fieldnames.forEach( fn => {
    parts.push(
      <div key={fn}> <label  htmlFor={fn}>{fn} </label>
        <Field  name={fn} component="input" type="text" />
      </div> )
  })

  parts.push(
    <button key="submitbtn" type="submit">Submit</button>
  )
  return parts
}


let ContactForm = props => {
  const { handleSubmit } = props

//  console.log(handleSubmit)
  let fields = handleSubmit
  console.log(fields);
  let cnt = 0;
  for( let {k,v} in fields){
    console.log(cnt,k,v)
  }


  return <form onSubmit={handleSubmit}>
    {formparts()}
  </form>
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)
// when appropriate, reduxForm will call our ContactForm method

export default ContactForm
