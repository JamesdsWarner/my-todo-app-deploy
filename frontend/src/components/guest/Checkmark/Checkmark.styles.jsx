import styled from "styled-components";

export const CheckmarkWrapper = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
  scale: 2;
`;

export const CheckmarkStem = styled.div`
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: black;
  left: 11px;
  top: 6px;
`;

export const CheckmarkKick = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: black;
  left: 8px;
  top: 12px;
`;
