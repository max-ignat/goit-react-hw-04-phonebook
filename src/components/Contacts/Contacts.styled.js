import styled from "styled-components";

export const ContactList = styled.ul`
  margin: 10px auto;
  width: 600px;
`;

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 60px;
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

export const Contact = styled.li`
  border: 1px solid black;
  display: flex;
  margin-bottom: 10px;
  background-color: inherit;
  color: #000;
  border-radius: 5px;
  padding-left: 20px;
`;

export const ContactData = styled.p`
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
 `;

export const ListTitle = styled.h2`
font-weight: 700;
text-align: center;
margin: 20px;
`