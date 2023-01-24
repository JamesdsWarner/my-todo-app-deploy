import { useState } from 'react';
import Checkmark from '../Checkmark/Checkmark.component';
import ColourPicker from '../ColourPicker/ColourPicker.component';
import { faChevronDown, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import colorWheel from './color-wheel.png';

import * as Styled from './TodoPostit.styles';

const TodoPostit = ({ setPostitsArray, index, postitsArray, rotateDeg, colour }) => {
	const [todoNote, setTodoNote] = useState({});
	const [isChevronClicked, setIsChevronClicked] = useState(false);
	const [isColourClicked, setIsColourClicked] = useState(false);
	const [isPostitComplete, setIsPostitComplete] = useState(false);

	const handleChange = e => {
		setTodoNote({ ...todoNote, note: e.target.value });

		setPostitsArray(
			postitsArray.map((obj, ind) => {
				if (ind === index) {
					return { ...obj, note: e.target.value };
				}

				return obj;
			})
		);
	};

	const handleRemoveNote = () => {
		setPostitsArray(
			postitsArray.filter((postit, i) => i !== index),
			postitsArray.map((obj, ind) => {
				if (obj.id === index) {
					return { ...obj, id: ind - 2 };
				}
			})
		);

		setTodoNote('');
	};

	const handleClearButtonClick = () => {
		setTodoNote('');
		setPostitsArray(
			postitsArray.map((obj, ind) => {
				if (ind === index) {
					return { ...obj, note: '' };
				}
				return obj;
			})
		);
	};

	const handleChevronClick = () => {
		if (isChevronClicked === false) {
			setIsColourClicked(false);
		}
		setIsChevronClicked(!isChevronClicked);
	};

	const handleColourClick = () => {
		setIsColourClicked(!isColourClicked);
	};

	const handleColourChange = newColour => {
		setPostitsArray(
			postitsArray.map((obj, ind) => {
				if (ind === index) {
					return { ...obj, colour: newColour };
				}
				return obj;
			})
		);
	};

	const handleFinishedPostit = () => {
		setIsPostitComplete(!isPostitComplete);
	};

	const colours = [
		{ colour: 'yellow', hexCode: 'fff740' },
		{ colour: 'pink', hexCode: 'ff65a3' },
		{ colour: 'blue', hexCode: '7afcff' },
		{ colour: 'orange', hexCode: 'ffa930' },
		{ colour: 'green', hexCode: '74ed4b' },
	];

	return (
		<Styled.TodoPostitWrapper
			rotateDeg={rotateDeg}
			colour={colours.find(o => o.colour === colour).hexCode}
		>
			<Styled.PinImg src="https://res.cloudinary.com/dbq4xtolf/image/upload/v1674602359/portfolio/Drawing-Pin_bzusi5.png" />

			<Styled.DropdownWrapper>
				<Styled.ChevronWrapper clicked={isChevronClicked}>
					<Styled.Chevron onClick={handleChevronClick} icon={faChevronDown} />
				</Styled.ChevronWrapper>
				<Styled.DropdownContentsWrapper clicked={isChevronClicked}>
					<Styled.ColorWheelWrapper>
						<Styled.ColorWheel src={colorWheel} onClick={handleColourClick} />
					</Styled.ColorWheelWrapper>
					<ColourPicker
						handleColourChange={handleColourChange}
						clicked={isColourClicked}
						colours={colours}
						isChevronClicked={isChevronClicked}
					/>
					<Styled.ClearText colour={colour} onClick={handleClearButtonClick}>
						Clear
					</Styled.ClearText>
				</Styled.DropdownContentsWrapper>
			</Styled.DropdownWrapper>
			<Styled.TodoPostitInput
				rows={10}
				placeholder="Add a task..."
				onChange={e => handleChange(e)}
				fontSize={23}
				maxLength={104}
				value={postitsArray[index].note}
				alignText={'center'}
				maxRows={5}
				colour={colour}
				isPostitComplete={isPostitComplete}
				disabled={isPostitComplete}
			/>

			<Styled.DeleteIcon onClick={handleRemoveNote}>&#10006;</Styled.DeleteIcon>

			<Styled.DoneButtonWrapper>
				<Styled.DoneButton onClick={handleFinishedPostit}>
					{isPostitComplete ? (
						<Styled.Refresh icon={faArrowsRotate}>X</Styled.Refresh>
					) : (
						<Checkmark />
					)}
				</Styled.DoneButton>
			</Styled.DoneButtonWrapper>
		</Styled.TodoPostitWrapper>
	);
};

export default TodoPostit;
