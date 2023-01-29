import styled from "styled-components"

export const BackdropDiv = styled.div`
position:fixed;
top:0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0, 0.5);
`

export const ContentDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background-color: azure;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba (0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
export const ModalButton = styled.button`
  /* position: absolute; */
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  outline: none;
  padding: 0 10px;
  width: 99px;
  height: 20px;
  color: #221212;
  background-color: lightgray;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: inherit;
  }
`;