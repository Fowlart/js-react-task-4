import React from "react";
import styled from "styled-components";
import Input from "../Reusable/Input.styled";
import Button from "../HeadersComponents/InputWraperInputWraper.styled";
import {ExitButton} from "../Reusable/ExitButton.styled";

const CentredSection = styled.div`
  display: flex;
  height: 10%;
  justify-content: ${props => props.justify};
  flex-direction: ${(props) => (props.directionRow ? "row" : "column")};
`;

const H1 = styled.h1`
  color: red;
  font-size: xx-large;
`;

const ModalInput = styled(Input)`
  background-color: black;
  color: white;
  width: 75%;
  height: 40%;
  left: 20px;
  padding: 0px;
  border: solid gold 1px;
`;

const DatePicker = styled.input`
  background-color: white;
  color: black;
  width: 36%;
  height: 40%;
  left: 20px;
  padding: 0px;
  border: solid gold 1px;
`;

const Select = styled.select`
  width: 36%;
  height: 40%;
  color: red;
  background-color: black;
  border: solid gold 1px;
`;

const Label = styled.label`
  color: red;
`;

const ResetButton = styled(Button)`
  background-color: #232323;
  color: red;
  height: 50%;
  border: solid red 2px;
`;

const SubmitButton = styled(Button)`
  height: 50%;
  border: solid black 2px;
`;

export const AddMovieContent = (props) => {
    return (
        <>
            <CentredSection justify="flex-end" directionRow>
                <ExitButton type="submit" value="X" onClick={props.onClick}/>
            </CentredSection>
            <CentredSection justify="center">
                <H1>ADD MOVIE</H1>
            </CentredSection>
            <CentredSection justify="center">
                <Label>TITLE</Label><ModalInput type="text"/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>OVERVIEW</Label><ModalInput type="text"/>
            </CentredSection>
            <CentredSection>
                <Label>RUNTIME</Label><ModalInput type="text"/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>MOVIE URL</Label><ModalInput type="text"/>
            </CentredSection>
            <CentredSection justify="center">
                <Label for="date-picker">RELEASE DATE</Label><DatePicker type="date" id="date-picker"/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>GENRE</Label><Select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </Select>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <ResetButton type="submit" value="RESET"/>
                <SubmitButton type="submit" value="SUBMIT"/>
            </CentredSection>
        </>);
};