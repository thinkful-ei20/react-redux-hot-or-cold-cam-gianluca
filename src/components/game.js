import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
// import { connect } from 'react-redux';

export default function Game (props) {
	return (
		<div>
			<Header />
			<main role="main">
				<GuessSection/>
				<StatusSection/>
				<InfoSection/>
			</main>
		</div>
	);
}

// const mapStateToProps = state => {

// 	return {
// 		guess: state.guess,
// 		guesses: state.guesses,
// 		feedback: state.feedback,
// 		auralStatus: state.auralStatus,
// 		correctAnswer: state.correctAnswer,
// 	}
// };


// export default connect(mapStateToProps)(Game);
