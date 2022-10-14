import React from 'react';
import App from '../App/App';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', enableSubmit: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }


  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value}, () => {
      if (this.state.email !== '') {
        this.setState({enableSubmit: true});
      }
    });
  }

  handleChangePassword(event) {
    this.setState({password: event.value}, () => {
      if (this.state.password !== '') {
        this.setState({enableSubmit: true});
      }
    });
  }
 
  render() {
    return (
      <body className={css(style.AppBody)}>
        <p className={css(style.login)}>Login to access the full dashboard</p>
        <div className={css(style.login)}>
          <form onSubmit={this.handleLoginSubmit}>
            <label className={css(style.smallLabel)} htmlFor="username">
              Email:
              <input
                type='text'
                value={this.state.email}
                onChange={this.handleChangeEmail}
                ></input>
            </label>
            <label htmlFor="password">
              Password:
              <input
                type='text'
                value={this.state.password}
                onChange={this.handleChangePassword}
                ></input>
            </label>
            <input type='submit' text='Submit' disabled={!this.state.enableSubmit} className={css(style.AppBodyButton)}></input>
          </form>
        </div>
      </body>
    );
  }
}

const style = StyleSheet.create({
  AppBody: {
    paddingBottom: '275px',
    textAlign: 'left',
    borderBottom: '3px solid',
    borderColor: '#d73953',
    '@media (max-width: 900px)': {
      minHeight: 0,
      margin: 0,
    }
  },

  AppBodyButton: {
    textAlign: 'center',
    height: '22px',
    width: '55px',
    '@media (max-width: 900px)': {
      display: 'block'
    }
  },

  login: {
    marginTop: '30px',
    marginLeft: '30px',
    '@media (max-width: 900px)': {
      marginTop: 0,
    }
  },

  smallLabel: {
    '@media (max-width: 900px)': {
      display: 'block',
    }
  }
});

export default Login;
