import React from 'react';
import PropTypes from 'prop-types'
import MessageList from './MessageList'
import SendMessage from './SendMessage'

const ChatWindow = props => {

	/**
	 * @param {string} message	- message text typed by the sender
	 */
	const send = message => {
		props.sendMessage(props.username, message);
	};

	return (
		<div className="chat-window">
			<h2>Super Awesome Chat</h2>
			<div className="name sender">{props.username}</div>
			<MessageList
				username = {props.username}
				messageHistory = {props.messageHistory}
			/>
			<SendMessage
				send = {send}
			/>
		</div>
	);
}

ChatWindow.propTypes = {
	username: PropTypes.string.isRequired,
	messageHistory: PropTypes.array.isRequired,
	sendMessage: PropTypes.func.isRequired
};

export default ChatWindow;