import * as Styled from './ColourPicker.styles';

const ColourPicker = ({ clicked, handleColourChange, colours, isChevronClicked }) => {
	const handleColourPick = colour => {
		handleColourChange(colour);
	};

	if (isChevronClicked) {
		return (
			<Styled.ColourPickerWrapper clicked={clicked}>
				{colours.map(colour => (
					<Styled.Colour onClick={() => handleColourPick(colour.colour)} colour={colour.hexCode} />
				))}
			</Styled.ColourPickerWrapper>
		);
	}
};

export default ColourPicker;
