import styled from "styled-components";

export const FormInput = styled.input`
  border-radius: 10px;
  margin-left: 10px;
`;

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 20px;
`;

export const FormWrap = styled.form`
  display: flex;
  width: 600px;
  margin: auto;

`;

export const Label = styled.label`
  margin: 10px auto;
  
`;

export const Button = styled.button`
  margin: auto;
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