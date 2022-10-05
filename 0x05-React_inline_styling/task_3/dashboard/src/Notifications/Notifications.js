import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import close from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape'
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  };
  
  static defaultProps = {
    displayDrawer: false,
    listNotifications: []
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <Fragment>
        <div className={css(styles.menuItem)}> Your notifications</div>
        { this.props.displayDrawer && (
          <div className={css(styles.Notifications)}>
            {this.props.listNotifications.length > 0 ? (
              <Fragment>
              <p>Here is the list of notifications</p>
              <ul>
                {this.props.listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={() => {this.markAsRead(notification.id)}}
                  />
                ))}
              </ul>
              <button className={css(styles.closeB)} aria-label="Close" onClick={ () => console.log('Close button has been clicked') }>
                <img
                src={close} alt="close-icon"
                style={{ height: '10px', width: '10px' }}
                />
              </button>
              </Fragment>
            ) : (<p>No new notification for now</p>)}
          </div>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dashed #e1354b',
    padding: '1rem',
    width: '30%',
    float: 'right',
    '@media (max-width: 900px)': {
      border: 'none',
      height: '100vh',
      width: '100vw',
      float: 'none',
      padding: 0,
      fontSize: 20,
    }
  },

  closeB: {
    position: 'absolute',
    top: '40px',
    right: '20px'
  },
  
  menuItem: {
    textAlign: 'end',
    '@media (max-width: 900px)': {
      display: 'none',
    }
  }
});

export default Notifications;
