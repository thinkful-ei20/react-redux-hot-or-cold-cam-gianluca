import {RESTART_GAME, MAKE_GUESS, UPDATE_GUESS, UPDATE_AURAL, UPDATE_FEEDBACK} from '../actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	auralStatus: '',
	guess:'',
	correctAnswer: Math.round(Math.random() * 100) + 1
};

export const hotColdReducer = (state=initialState, action) => {
	switch(action.type) {
	case RESTART_GAME:
		return Object.assign({}, {...initialState});

	case MAKE_GUESS:
		return Object.assign({}, state, {
			guesses: [...state.guesses, action.guess]
		});

	case UPDATE_GUESS:
		return Object.assign({}, state, {
			guess: action.guess
		});

	case UPDATE_FEEDBACK:
		return Object.assign({}, state, {
			feedback: action.feedback
		});

	case UPDATE_AURAL:
		return Object.assign({}, state, {
			auralStatus: action.auralStatus
		});

	default:
		return state;
	}
};