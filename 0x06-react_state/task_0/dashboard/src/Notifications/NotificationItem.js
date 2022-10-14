import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead }) => {
	return (
		<li className={type === 'default' ? css(styles.defaultNotificationStyle, styles.smallNotification) : css(styles.urgentNotificationStyle, styles.smallNotification)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
	)
}

const styles = StyleSheet.create({
  defaultNotificationStyle: {
		color: 'blue',
	},

  urgentNotificationStyle: {
		color: 'red',
  },

  smallNotification: {
    '@media (max-width: 900px)': {
			borderBottom: '1px solid black',
			padding: '10px 8px 10px',
      listStyleType: 'none'
    }
  }
});

export default NotificationItem;
