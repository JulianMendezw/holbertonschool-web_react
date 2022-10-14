import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  render() {
    let value = this.context;
    return (
      <React.Fragment>
        <header className={css(style.AppHeader)}>
          <img src={logo} className={css(style.AppLogo)} alt="logo" />
          <h1 className={css(style.AppHeaderh1)}>School dashboard</h1>
        </header>
        {value.user.isLogin && (
          <section>
            <h1>Welcome {value.user.email} <a className={css(style.italic)} onClick={value.logOut}>(logout)</a> </h1>
          </section>
        )}
      </React.Fragment>
    );
  }
}

Header.contextType = AppContext;

const style = StyleSheet.create({
  AppLogo: {
    height: '30vmin'
  },

  AppHeader: {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: '#d73953',
    borderBottom: '3px solid',
    borderColor: '#d73953'
  },

  AppHeaderh1: {
    marginTop: '70px'
  },

  italic: {
    fontStyle: 'italic'
  }
});

export default Header;
