import React from 'react';
import PropTypes from 'prop-types'

const Message = props => {

	const className = props.username === props.message.username
		? 'message sender'
		: 'message recipient';

	return (
		<li className={className}>
			<p>{props.message.text}</p>
		</li>
	);
};

Message.propTypes = {
	username: PropTypes.string.isRequired,
	message: PropTypes.object.isRequired,
};

export default Message;