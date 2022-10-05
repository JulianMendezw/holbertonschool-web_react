import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(style.AppHeader)}>
      <img src={logo} className={css(style.AppLogo)} alt="logo" />
      <h1 className={css(style.AppHeaderh1)}>School dashboard</h1>
    </header>
  );
}

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
  }
  
});

export default Header;
