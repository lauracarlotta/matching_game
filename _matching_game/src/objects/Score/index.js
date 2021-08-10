import './style.css';

import PlayerName from '../../components/PlayerName '

const Score = () => {
	return /* html */ `
		<header>
			${ PlayerName( 'Player1' ) }
			${ PlayerName( 'Player2' ) }
		</header>
	`;
}

export default Score;
