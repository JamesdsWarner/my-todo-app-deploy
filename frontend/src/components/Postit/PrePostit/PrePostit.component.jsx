import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ColourPicker from '../../ColourPicker/ColourPicker.component';
import colorWheel from '../../../images/color-wheel.png';
import { useState } from 'react';
import * as Styled from '../Postit.styles';

const PrePostit = ({
  addNewTask,
  setNewTask,
  newTask,
  addNewButtonClick,
  newTaskColour,
  setNewTaskColour,
}) => {
  const [isChevronClicked, setIsChevronClicked] = useState(false);
  const [isColourClicked, setIsColourClicked] = useState(false);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleClearButtonClick = () => {
    setNewTask('');
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

  const handleColourChange = (newColour) => {
    setNewTaskColour(newColour);
  };

  const handleFinishedPostit = () => {
    addNewTask(newTask);
  };

  const colours = [
    { colour: 'yellow', hexCode: 'fff740' },
    { colour: 'pink', hexCode: 'ff65a3' },
    { colour: 'blue', hexCode: '7afcff' },
    { colour: 'orange', hexCode: 'ffa930' },
    { colour: 'green', hexCode: '74ed4b' },
  ];

  return (
    <Styled.TodoPostitWrapper colour={colours.find((o) => o.colour === newTaskColour).hexCode}>
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
          <Styled.ClearText colour={newTaskColour} onClick={handleClearButtonClick}>
            Clear
          </Styled.ClearText>
        </Styled.DropdownContentsWrapper>
      </Styled.DropdownWrapper>
      <Styled.TodoPostitInput
        rows={10}
        placeholder="Add a task..."
        onChange={(e) => handleChange(e)}
        fontSize={23}
        maxLength={104}
        value={newTask}
        alignText={'center'}
        maxRows={5}
        colour={newTaskColour}
        disabled={false}
      />
      <Styled.DeleteIcon onClick={addNewButtonClick}>&#10006;</Styled.DeleteIcon>
      <Styled.DoneButtonWrapper>
        <Styled.AddTaskButton onClick={handleFinishedPostit}><Styled.PlusSpan>+</Styled.PlusSpan></Styled.AddTaskButton>
      </Styled.DoneButtonWrapper>
    </Styled.TodoPostitWrapper>
  );
};

export default PrePostit;
