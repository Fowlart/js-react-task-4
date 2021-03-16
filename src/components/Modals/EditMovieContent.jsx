import React from "react";
import {ExitButton} from "../Reusable/ExitButton.styled";
import {
    CentredSection,
    DatePicker,
    H1,
    Label,
    ModalInput,
    ResetButton,
    Select,
    SubmitButton
} from "./ModalsComponents.styled";


export const EditMovieContent = (props) => {
    return (
        <>
            <CentredSection justify="flex-end" directionRow>
                <ExitButton type="submit" value="X" onClick={props.onClick}/>
            </CentredSection>
            <CentredSection justify="center">
                <H1>EDIT MOVIE</H1>
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
                <Label>GENRE</Label><Select name="genre" id="genre">
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
            </Select>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <ResetButton type="submit" value="RESET"/>
                <SubmitButton type="submit" value="SAVE"/>
            </CentredSection>
        </>);
};