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

export const AddMovieContent = (props) => {
    return (
        <>
            <CentredSection justify="flex-end" directionRow>
                <ExitButton type="submit" value="X" onClick={props.closeHandler}/>
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
                <Label>RELEASE DATE</Label><DatePicker type="date" id="date-picker"/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>GENRE</Label><Select name="genre">
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
            </Select>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <ResetButton type="submit" value="RESET"/>
                <SubmitButton type="submit" value="SUBMIT"/>
            </CentredSection>
        </>);
};
