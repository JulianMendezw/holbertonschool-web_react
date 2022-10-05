import React, { PureComponent } from 'react';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;

    if (html === undefined) {
      return (
        <li data-notification-type={type} onClick={markAsRead}>
          {value}
        </li>
      );
    } else {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      )
    }
  }
}

export default NotificationItem;
