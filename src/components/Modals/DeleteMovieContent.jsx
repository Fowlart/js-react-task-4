import React from "react";
import styled from "styled-components";
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


const SubmitButton = styled(Button)`
  height: 50%;
  border: solid black 2px;
`;

export const DeleteMovieContent = (props) => {
    return (
        <>
            <CentredSection justify="flex-end" directionRow>
                <ExitButton type="submit" value="X" onClick={props.onClick}/>
            </CentredSection>
            <CentredSection justify="center">
                <H1>DELETE MOVIE</H1>
            </CentredSection>
            <CentredSection justify="center">
                <h3>Are you sure you want to delete this movie?</h3>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <SubmitButton type="submit" value="CONFIRM"/>
            </CentredSection>
        </>);
};