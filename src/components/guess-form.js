import React from 'react';

import './guess-form.css';
import { connect } from 'react-redux';
import { updateGuess, makeGuess } from '../actions';

function GuessForm(props) {

	const onSubmit = (event) => {
		event.preventDefault();
		if (props.guess) {
			props.dispatch(makeGuess(props.guess));
		}
		props.dispatch(updateGuess(''));
	};

	return (
		<form onSubmit={e => onSubmit(e)}>
			<input
				type="number"
				name="userGuess"
				id="userGuess"
				className="text"
				min="1"
				max="100"
				autoComplete="off"
				aria-labelledby="feedback"
				onChange={e => props.dispatch(updateGuess(e.target.value))}
				value={props.guess}
				required
			/>
			<button
				type="submit"
				name="submit"
				id="guessButton"
				className="button"
			>
		Guess
			</button>
		</form>
	);
}

const mapStateToProps = state => ({
	guess: state.guess
});

export default connect(mapStateToProps)(GuessForm);
