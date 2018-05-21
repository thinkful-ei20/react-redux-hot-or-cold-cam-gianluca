
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
	type: RESTART_GAME
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = feedback => ({
	type: UPDATE_FEEDBACK,
	feedback
});

export const UPDATE_GUESS = 'UPDATE_GUESS';
export const updateGuess = guess => ({
	type: UPDATE_GUESS,
	guess
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
});

export const UPDATE_AURAL = 'UPDATE_AURAL';
export const generateAuralUpdate = auralState => ({
	type:UPDATE_AURAL,
	auralState
});
