import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import close from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape'
import NotificationItem from './NotificationItem';
import './Notifications.css';

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
        <div className='menuItem'> Your notifications</div>
        { this.props.displayDrawer && (
          <div className='Notifications'>
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
              <button className='close-b' aria-label="Close" onClick={ () => console.log('Close button has been clicked') }>
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

export default Notifications;
