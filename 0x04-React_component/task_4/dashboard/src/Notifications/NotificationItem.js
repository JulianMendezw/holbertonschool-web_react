import React from 'react';

function NotificationItem({ type, html, value, markAsRead }) {
  if (html === undefined) {
    return (
      <li data-notification-type={ type } onClick={markAsRead}> 
        { value }
      </li>
    );
  } else {
    return (
      <li data-notification-type={ type } dangerouslySetInnerHTML={ html }></li>
    )
  }
}

export default NotificationItem;
