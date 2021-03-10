import React from "react";
import styled from "styled-components";
import Input from "../Reusable/Input.styled";
import Button from "../HeadersComponents/InputWraperInputWraper.styled";

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  margin: auto;
  left: 20px;
  right: 20px;
  bottom: 20px;
  position: fixed;
  width: ${(props) => (props.closeModal ? "0%" : "90%")};
  height: ${(props) => (props.closeModal ? "0%" : "90%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;

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

const ExitButton = styled(Button)`
  background-color: #232323;
  font-size: x-large;
  border: none;
  width: 5%;
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

const Content = (props) => {
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

export const MyModal = (props) => {
    return (
        <ModalWrapper show={props.show}>
            <ModalContent closeModal={props.closeModal}>
                {props.closeModal ? null : <Content onClick={props.onClick}/>}
            </ModalContent>
        </ModalWrapper>
    );
};