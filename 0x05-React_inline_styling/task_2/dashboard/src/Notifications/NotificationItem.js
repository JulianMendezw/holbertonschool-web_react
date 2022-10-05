import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead }) => {
	return (
		<li className={type === 'default' ? css(styles.defaultNotificationStyle) : css(styles.urgentNotificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
	)
}

const styles = StyleSheet.create({
  defaultNotificationStyle: {
		color: 'blue',
	},

  urgentNotificationStyle: {
		color: 'red',
  },
});

export default NotificationItem;
