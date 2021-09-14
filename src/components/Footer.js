import React from 'react'
import validator from 'validator'

import '../stylesheets/Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      isSuccessfullySubmitted: false,
    }
  }

  async handleSubmit(e, email) {
    e.preventDefault()
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
          isSuccessfullySubmitted: true,
        })
        alert('Thank you for subscribing')
      }
    } catch (err) {
      console.log(err)
    }
  }

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  validateEmail = (e) => {
    const email = e.target.value
    if (validator.isEmail(email)) {
      this.setState({
        emailError: 'Valid email',
      })
    } else {
      this.setState({
        emailError: 'Please enter a valid email',
      })
    }
  }
  render() {
    return (
      <>
        <div style={{}}>
          <div className='newsletter'>
            <div className='newsletter-info'>
              <p>Sign up for our Newsletter</p>
              <form
                className='form'
                onSubmit={(e) => this.handleSubmit(e, this.state.email)}>
                <pre>
                  <span> </span>
                  <input
                    type='text'
                    id='userEmail'
                    className='userEmail'
                    placeholder='Email'
                    onChange={(e) => {
                      this.updateEmail(e)
                      this.validateEmail(e)
                    }}></input>{' '}
                  <br />
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: 'grey',
                      position: 'absolute',
                      margin: 'auto',
                      maxRight: '45%',
                      lineHeight: '2',
                    }}>
                    {this.state.emailError}
                  </span>
                </pre>
                <button type='submit' className='btn' id='btn'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <h6 className='newsletter-footer'>
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
