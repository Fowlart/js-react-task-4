import React from "react";
import styled from "styled-components";
import {ExitButton} from "../ui/ExitButton.styled";
import Button from "../ui/Button.styled";

const CentredSection = styled.div`
  display: flex;
  height: 10%;
  justify-content: ${props => props.justify};
  flex-direction: row;
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

    function deleteParentCard(){
        if (props.deleteCardHandler!=null){
            props.deleteCardHandler();
        }
    }

    return (
        <>
            <CentredSection justify="flex-end">
                <ExitButton type="submit" value="X" onClick={props.closeHandler}/>
            </CentredSection>
            <CentredSection justify="center">
                <H1>DELETE MOVIE</H1>
            </CentredSection>
            <CentredSection justify="center">
                <h3>Are you sure you want to delete this movie?</h3>
            </CentredSection>
            <CentredSection justify="center">
                <SubmitButton type="submit" value="CONFIRM" onClick={deleteParentCard}/>
            </CentredSection>
        </>);
};
