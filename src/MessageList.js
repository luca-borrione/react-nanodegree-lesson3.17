import React from 'react';
import PropTypes from 'prop-types'
import Message from './Message'

const MessageList = props => {

	return (
		<ul className="message-list">
			{props.messageHistory.map((message, index) => (
				<Message
					key = {index}
					username = {props.username}
					message = {message}
				/>
			))}
		</ul>
	);

};

MessageList.propTypes = {
	username: PropTypes.string.isRequired,
	messageHistory: PropTypes.array.isRequired
};

export default MessageList;