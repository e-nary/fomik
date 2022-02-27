import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: values =>{
      window.alert("Login Sucessful")
    },
    validate: values =>{
      let errors = {};
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField))
       errors.emailField = 'Username should be an email';
      if(!values.pswField) errors.pswField = 'Field Required';
      if(!values.emailField) errors.emailField = 'Field Required';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>email</div>
        <input name='emailField' id='emailfield' type='text' onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color:"red"}} id='emailError'>{formik.errors.emailField}</div>:null}
        <div>password</div>
        <input name='pswField' id='pswField' type='text' onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div style={{color:"red"}} id='pswError'>{formik.errors.pswField}</div>:null}
        <button type="submit" id='submitBtn'>Submit</button>
      </form>
    </div>
  );
}

export default App;