export const GAME_BUTTON_TYPES = Object.freeze({
	ROCK: 'rock',
	PAPER: 'paper',
	SCISSORS: 'scissors',
});

type GameButtomTypes = typeof GAME_BUTTON_TYPES;
export type GameButtonKeyType = keyof GameButtomTypes;
export type GameButtonValueType = GameButtomTypes[GameButtonKeyType];
