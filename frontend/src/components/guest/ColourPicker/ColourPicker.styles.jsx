import styled from "styled-components";

export const ColourPickerWrapper = styled.div`
  width: 120px;
  height: 20px;
  position: absolute;
  margin-left: ${(props) => (props.clicked ? 35 : 0)}px;
  margin-top: -26px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2px;
  padding-bottom: 2px;
  gap: 3px;
  z-index: 9;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.clicked ? 1 : 0)};
  cursor: pointer;
  pointer-events: ${(props) => (props.clicked ? "" : "none")}; ;
`;

export const Colour = styled.div`
  height: 20px;
  width: 20px;
  background-color: #${(props) => props.colour};
  border: 0.1px solid black;
`;
