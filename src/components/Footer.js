import React from 'react'
import validator from 'validator'

import '../stylesheets/Footer.css'

class Footer extends React.Component {
  state = {
    email: '',
    emailError: '',
  }

  async handleSubmit(e, email) {
    e.preventDefault()
    if (!this.validateEmail(email)) {
      return false
    }
    try {
      const response = await fetch(
        `https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        }
      )
      console.log(response)
      if (!response.ok) {
        throw new Error('Could not save email')
      } else {
        this.setState({
          emailError: 'Thank you for subscribing',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  updateEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }

  validateEmail = email => {
    // const email = e.target.value
    if (validator.isEmail(email)) {
      this.setState({
        emailError: 'Valid email',
      })
      return true
    } else {
      this.setState({
        emailError: 'Please enter a valid email',
      })
      return false
    }
  }
  render() {
    return (
      <>
        <div className='newsletter'>
          <div className='newsletter-info'>
            <p>Sign up for our Newsletter</p>
            <form
              className='form'
              onSubmit={e => this.handleSubmit(e, this.state.email)}>
              <pre>
                <span> </span>
                <input
                  type='text'
                  id='userEmail'
                  className='userEmail'
                  placeholder='Email'
                  onChange={e => {
                    this.updateEmail(e)
                    this.validateEmail(e.target.value)
                  }}></input>{' '}
                <br />
                <span className='validate'>{this.state.emailError}</span>
              </pre>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>
        </div>

        <h6 className='newsletter-footer '>
          <span id='footer-span'>
            <a>@2021 — SPARTA PLAESENT</a>
          </span>
          - <a href='#'>INSTAGRAM</a> - <a href='#'>FACEBOOK</a> -
          <a href='#'>TWITTER</a>
        </h6>
      </>
    )
  }
}
export default Footer
