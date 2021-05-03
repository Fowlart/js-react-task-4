import React from "react";
import styled from "styled-components";
import Input from "../UI/Input.styled";
import Button from "../UI/Button.styled";

export const CentredSection = styled.div`
  display: flex;
  height: 10%;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: ${props => props.justify};
  flex-direction: ${(props) => (props.directionRow ? "row" : "column")};
`;

export const H1 = styled.h1`
  color: red;
  font-size: xx-large;
`;

export const ModalInput = styled(Input)`
  background-color: black;
  color: white;
  width: 75%;
  height: 40%;
  left: 20px;
  padding: 0px;
  border: solid gold 1px;
`;

export const MyDatePicker = styled.input`
  background-color: white;
  color: black;
  width: 36%;
  height: 40%;
  left: 20px;
  padding: 0px;
  border: solid gold 1px;
`;

export const Select = styled.select`
  width: 36%;
  height: 40%;
  color: red;
  background-color: black;
  border: solid gold 1px;
`;

export const Label = styled.label`
  color: red;
`;

export const ResetButton = styled(Button)`
  background-color: #232323;
  color: red;
  border: solid red 2px;
`;

export const SubmitButton = styled(Button)`
  border: solid black 2px;
`;
