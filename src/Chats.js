import React from 'react';
import PropTypes from 'prop-types'
import ChatWindow from './ChatWindow'

class Chats extends React.Component {

	/**
	 * @typedef  {Object} MessageEntry
	 * @property {string} username	- sender username
	 * @property {string} text		- message text typed by the sender
	 */

	 /**
	  * @member   {Object} state
	  * @property {Array.<MessageEntry>} state.messageHistory	- list of message entries
	  */
	state = {
		messageHistory: []
	};


	/**
	 * @param {string} username	- sender username
	 * @param {string} text 	- message text typed by the sender
	 * @returns {MessageEntry}
	 */
	createMessage(username, text) {
		return {
			username: username,
			text: text
		};
	}

	sendMessage = (username, text) => {
		this.setState(state => {
			return {
				messageHistory: [...state.messageHistory, this.createMessage(username, text)]
			}
		})
	};

	render() {
		return (
			<div className="container">
				{this.props.usernames.map( (username, index) => (
					<ChatWindow
						key = {index}
						username = {username}
						messageHistory = {this.state.messageHistory}
						sendMessage = {this.sendMessage}
					/>
				))}
			</div>
		);
	}
}

Chats.propTypes = {
	usernames: PropTypes.array.isRequired
};

export default Chats;