import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const TodoPostitWrapper = styled.div`
	background-color: #${props => props.colour};
	rotate: calc(${props => props.rotateDeg}deg);
	justify-content: end;
	display: flex;
	flex-direction: column;
	min-height: 300px;
	min-width: 300px;
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const PinImg = styled.img`
	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	height: 40px;
	top: 4px;
`;

export const DropdownWrapper = styled.div``;

export const DropdownContentsWrapper = styled.div`
	position: absolute;
	margin-left: 18px;
	transition: all 0.25s ease;
	margin-top: ${props => (props.clicked ? 40 : 20)}px;
	opacity: ${props => (props.clicked ? 1 : 0)};
`;

export const ColorWheelWrapper = styled.div``;

export const ColorWheel = styled.img`
	width: 20px;
	cursor: pointer;
`;

export const ClearText = styled.p`
	text-align: center;
	margin-left: -8px;
	margin-top: 4px;
	transition: all 0.25s ease;
	color: ${props =>
		props.colour === 'yellow' || props.colour === 'blue' || props.colour === 'green'
			? 'black'
			: 'white'};
	cursor: pointer;
`;

export const ChevronWrapper = styled.div`
	z-index: 9999;
	position: absolute;
	margin-left: 20px;
	top: 0;
	padding-top: 14px;

	> * {
		color: black;
		transform: rotate(${props => (props.clicked ? 180 : 0)}deg);
	}
`;

export const Chevron = styled(FontAwesomeIcon)`
	transition: all 0.25s ease;

	cursor: pointer;
`;

export const TodoPostitInput = styled(TextareaAutosize)`
	background: none;
	border: none;
	text-align: ${props => props.alignText};
	font-size: ${props => props.fontSize}px;
	display: block;
	margin: auto;
	width: 100%;
	overflow: hidden;
	resize: none;
	color: ${props =>
		props.colour === 'yellow' || props.colour === 'blue' || props.colour === 'green'
			? 'black'
			: 'white'};
	text-decoration: ${props => (props.isPostitComplete ? 'line-through' : '')};

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${props =>
			props.colour === 'yellow' || props.colour === 'blue' || props.colour === 'green'
				? ''
				: 'white'};
	}
`;

export const DeleteIcon = styled.span`
	position: absolute;
	top: 20px;
	right: 1%;
	transform: translate(-50%, -50%);
	font-size: 25px;
	cursor: pointer;
	opacity: 0.8;
	transition: all 0.2s ease;
	&:hover {
		color: red;
	}
`;

export const DoneButtonWrapper = styled.div`
	position: absolute;
	bottom: -10px;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all 0.2s ease;

	display: flex;
	padding: 0;
	overflow: hidden;
	justify-content: center;
	width: 50px;
	height: 50px;

	background: none;
`;

export const DoneButton = styled.button`
	background: none;
	border-radius: 50%;
	opacity: 0.8;
	border: 1.5px solid black;
	width: 90%;
	padding: 0;
	font-size: 15px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: white;
	}
`;

export const Refresh = styled(FontAwesomeIcon)`
	font-size: 20px;
`;
