import React from 'react'
import { Field, reduxForm } from 'redux-form'
import page1fields from './page1fields'

let formparts = () => {
  let parts = []
  // let fieldnames = ["firstName","lastName","email"]
  // fieldnames.forEach( fn => {
  //   parts.push(
  //     <div key={fn}> <label  htmlFor={fn}>{fn} </label>
  //       <Field  name={fn} component="input" type="text" />
  //     </div> )
  // })
  let fields = page1fields()
  fields.forEach( fld => {
  //  console.log("loading field ", fld)
    parts.push(
      <div key={fld.id}>
        <Field
          name={fld.name}
          component="input"
          type={fld.type}
          tabIndex={fld.tabindex}
          id={fld.id}
          value={fld.value}
          pdffieldname={fld.pdffieldname}  //not pdfFieldName
          label={fld.pdffieldname}
        />
      </div>
    )
  })

  parts.push(
    <button key="submitbtn" type="submit">Submit</button>
  )
  return parts
}

const renderField = ({ input, label, type, meta: {touched,error, warning}}) => {
  console.log('renderfield')
  console.log('input',input)
  console.log('label',label)
  console.log('type', type)
  console.log('touched', touched)
  console.log('error',error)
  console.log('warning',warning)
  return (
    <div>
      <label>{label}</label>
      <span>{error}</span>
      <span>{warning}</span>
    </div>
  )
}





let ContactForm = props => {
  const { handleSubmit,pristine,reset, submitting } = props
  return (
    <div>
      <Field name="messages" component={renderField} label="Notification:" />
      <form onSubmit={handleSubmit}>
        {formparts()}
      </form>
    </div> )
}

const validate = values => {
  console.log('values',values)
  console.log(values['02-EntityName'])

  const errors = {}
  if (!values['02-EntityName'] || values['02-EntityName'].length < 4){
    errors['messages'] = '02-EntityName Required name of at least 4 characters'
    console.log('02-entityname error')
  }
  if (Object.keys(values).length < 3){
    errors['messages'] = "Not enough fields have been completed"
    console.log('errors[messages]', Object.keys(values).length)
  }

  return errors;
}

const warning = values => {
  const warnings = {}
  if(!values['01-CR']){
    warning['01-CR'] = 'Missing 01-CR, Must be New or Update'
    console.log('warning')
  }
  return warnings
}



ContactForm = reduxForm({
  form: 'contact',
  validate,
  warning
})(ContactForm)
// when appropriate, reduxForm will call our ContactForm method

export default ContactForm
