import React from 'react';
import PropTypes from 'prop-types'

class SendMessage extends React.Component {

	/**
	 * @member	 {Object} state
	 * @property {string} state.message		- message text typed by the sender
	 */
	state = {
		message: ''
	};

	onUserTyping = event => {
		this.setState({
			message: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.send(this.state.message);
		this.setState({
			message: ''
		});
	};

	/**
	 * Returns true if the user did not type anything
	 * @returns {boolean}
	 */
	isSendBtnDisabled() {
		return this.state.message.length === 0;
	}

	render() {
		return (
			<div>
				<form
				  className = "input-group"
				  onSubmit = {this.onSubmit}
				>
					<input
						type = "text"
						name = "message"
						className = "form-control"
						placeholder = "Enter your message..."
						value = {this.state.message}
						onChange = {this.onUserTyping}
					/>
					<div className = "input-group-append">
						<button
						  className = "btn submit-button"
						  disabled = {this.isSendBtnDisabled()}
						>
							SEND
						</button>
					</div>
				</form>
			</div>
		);
	}
};

SendMessage.propTypes = {
	send: PropTypes.func.isRequired
};

export default SendMessage;