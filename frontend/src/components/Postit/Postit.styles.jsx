import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, {keyframes} from 'styled-components';

export const TodoPostitWrapper = styled.div`
  background-color: #${(props) => props.colour};
  justify-content: end;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 300px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const DropdownWrapper = styled.div``;

export const DropdownContentsWrapper = styled.div`
  position: absolute;
  margin-left: 18px;
  transition: all 0.25s ease;
  margin-top: ${(props) => (props.clicked ? 40 : 20)}px;
  opacity: ${(props) => (props.clicked ? 1 : 0)};
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
  color: ${(props) =>
    props.colour === 'yellow' ||
    props.colour === 'blue' ||
    props.colour === 'green'
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
    transform: rotate(${(props) => (props.clicked ? 180 : 0)}deg);
  }
`;

export const Chevron = styled(FontAwesomeIcon)`
  transition: all 0.25s ease;

  cursor: pointer;
`;

export const TodoPostitInput = styled(TextareaAutosize)`
  background: none;
  border: none;
  text-align: ${(props) => props.alignText};
  font-size: ${(props) => props.fontSize}px;
  display: block;
  margin: auto;
  width: 100%;
  overflow: hidden;
  resize: none;

  text-decoration: ${(props) => (props.isPostitComplete ? 'line-through' : '')};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) =>
      props.colour === 'yellow' ||
      props.colour === 'blue' ||
      props.colour === 'green'
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
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
  }
`;

export const AddTaskButton = styled.button`
  background: none;
  border-radius: 50%;
  opacity: 0.8;
  border: 1.5px solid black;
  width: 100%;
  font-size: 43px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  display: flex;
  padding: 0px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
  }
`;

export const PlusSpan = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export const Refresh = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

const expandBounce = () =>
  keyframes`
   0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
  `

const shrink = () =>
keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const AddTextSpeechBubble = styled.div`
  height: 40px;
  position: absolute;
  opacity: ${props =>  props.isTypingStarted ? props.newTask.length > 0 ? 0 : 0 : 0.95};
  transform-origin: 0% 100%;
  text-align: center;
  background-color: #5a5a5a;
  color: white;
  border-radius: 10px;
  width: 80px;
  padding: 8px;
  right: -30px;
  top: 55px;
  transform: scale(1);
  animation-fill-mode: forwards;
  z-index: 999;
  font-size: 16px;
  transition: all 0.2s ease;
  font-weight: 900;


  ::before {
  content: "";
  display: block;
  width: 0;
  position: absolute;
  bottom: -25px;
  left: 5px;
  border-style: solid;
  border-width: 15px;
  border-color: #5a5a5a transparent transparent #5a5a5a;
  transform: rotate(10deg);
}


animation: ${props => props.newTask.length > 0 ? shrink : expandBounce} 0.3s ease;

`;

export const DeleteSpeechBubble = styled.div`
  height: 16px;
  position: absolute;
  opacity: ${props =>  props.isNoteTimeout && props.newTask  ? 0.95 : 0};
  transform-origin: 0% 100%;
  text-align: center;
  background-color: #5a5a5a;
  color: white;
  border-radius: 10px;
  width: 90px;
  padding: 8px;
  left: 33px;
  bottom: 80px;
  transform: scale(1);
  animation-fill-mode: forwards;
  z-index: 999;
  font-size: 13px;
  transition: all 0.2s ease;
  font-weight: 900;
  
    ::before {
  content: "";
  display: block;
  width: 0;
  position: absolute;
  bottom: -23px;
  right: 10px;
  border-style: solid;
  border-width: 15px;
  border-color:  #5a5a5a #5a5a5a transparent transparent;
  transform: rotate(-10deg);
}

animation: ${props => props.isNoteTimeout && props.newTask ? expandBounce  : shrink} 0.3s ease;

  `
