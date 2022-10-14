import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import './Footer.css';

function Footer() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <footer className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          {
            value.user.isLoggedIn && (
              <p><a>Contact us</a></p>
            )
          }
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
