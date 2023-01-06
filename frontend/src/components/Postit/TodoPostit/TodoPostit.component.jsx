import { useState } from 'react';
import { faChevronDown, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Checkmark from '../../Checkmark/Checkmark.component';
import ColourPicker from '../../ColourPicker/ColourPicker.component';
import colorWheel from '../../../images/color-wheel.png';
import axios from 'axios';
import toast from 'react-hot-toast';

import * as Styled from '../Postit.styles';

const TodoPostit = ({
  setPostitsArray,
  index,
  postitsArray,
  postitValue,
  colour,
  completed,
  isGuest,
  deleteTask,
}) => {
  const [isChevronClicked, setIsChevronClicked] = useState(false);
  const [isColourClicked, setIsColourClicked] = useState(false);
  const [postitColour, setPostitColour] = useState(colour);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleRemoveNote = () => {
    setPostitsArray(
      postitsArray.filter((postit, i) => i !== index),
      postitsArray.map((obj, ind) => {
        if (obj.id === index) {
          return { ...obj, id: ind - 2 };
        }
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

  const changeTaskColour = async (newColour) => {
    try {
      await axios.put(`/api/tasks/${index}`, {
        colour: newColour,
      });
      setPostitColour(newColour);
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const changeTaskCompletion = async () => {
    try {
      await axios.put(`/api/tasks/${index}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success('Task updated successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const colours = [
    { colour: 'yellow', hexCode: 'fff740' },
    { colour: 'pink', hexCode: 'ff65a3' },
    { colour: 'blue', hexCode: '7afcff' },
    { colour: 'orange', hexCode: 'ffa930' },
    { colour: 'green', hexCode: '74ed4b' },
  ];

  return (
    <Styled.TodoPostitWrapper colour={colours.find((o) => o.colour === postitColour).hexCode}>
      <Styled.DropdownWrapper>
        <Styled.ChevronWrapper clicked={isChevronClicked}>
          <Styled.Chevron onClick={handleChevronClick} icon={faChevronDown} />
        </Styled.ChevronWrapper>
        <Styled.DropdownContentsWrapper clicked={isChevronClicked}>
          <Styled.ColorWheelWrapper>
            <Styled.ColorWheel src={colorWheel} onClick={handleColourClick} />
          </Styled.ColorWheelWrapper>
          <ColourPicker
            handleColourChange={changeTaskColour}
            clicked={isColourClicked}
            colours={colours}
            isChevronClicked={isChevronClicked}
          />
        </Styled.DropdownContentsWrapper>
      </Styled.DropdownWrapper>
      <Styled.TodoPostitInput
        rows={10}
        placeholder="Add a task..."
        fontSize={23}
        maxLength={104}
        value={postitValue}
        alignText={'center'}
        maxRows={5}
        colour={colour}
        isPostitComplete={isCompleted}
        disabled={true}
      />
      <Styled.DeleteIcon onClick={() => (isGuest ? handleRemoveNote() : deleteTask(index))}>
        &#10006;
      </Styled.DeleteIcon>
      <Styled.DoneButtonWrapper>
        <Styled.DoneButton onClick={changeTaskCompletion}>
          {isCompleted ? <Styled.Refresh icon={faArrowsRotate}>X</Styled.Refresh> : <Checkmark />}
        </Styled.DoneButton>
      </Styled.DoneButtonWrapper>
    </Styled.TodoPostitWrapper>
  );
};

export default TodoPostit;
