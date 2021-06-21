import React from 'react';

const CustomForm = () => {
  return (
    <div className='App container'>
      <h1>Welcome to our first app</h1>
      <div className='row justify-content-center'>
        <form className='col-md-6'>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail'>Email Address</label>
            <input 
              type='email'
              className='form-control'
              id='exampleInputEmail'
              aria-describedby='emailHelp'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input 
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>

          <div className='form-group form-check'>
            <input 
              type='checkbox'
              className='form-check-input'
              id='exampleCheck'
            />
            <label className='form-check-label'>
              Check me out
            </label>
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CustomForm;