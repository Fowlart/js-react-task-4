import React, {useRef} from "react";
import {ExitButton} from "../UI/ExitButton.styled";
import {
    CentredSection,
    DatePicker,
    H1,
    Label,
    ModalInput,
    ResetButton,
    Select,
    SubmitButton
} from "../Modals/ModalsComponents.styled";

export const AddMovieContent = (props) => {

    const movieOverview = useRef();
    const movieRuntime = useRef();
    const movieJenre = useRef();
    const movieTitle = useRef();
    const movieData = useRef();
    const movieUrl = useRef();

    function submitHandler(e){
        e.preventDefault();
        alert(movieOverview.current.value+"/"+movieRuntime.current.value+"/"+movieJenre.current.value+"/"+movieTitle.current.value+"/"+
        movieData.current.value+"/"+movieUrl.current.value);
    }

    return (
        <>
            <CentredSection justify="flex-end" directionRow>
                <ExitButton type="submit" value="X" onClick={props.closeHandler}/>
            </CentredSection>
            <CentredSection justify="center">
                <H1>ADD MOVIE</H1>
            </CentredSection>
            <CentredSection justify="center">
                <Label>TITLE</Label><ModalInput type="text" ref={movieTitle}/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>OVERVIEW</Label><ModalInput type="text" ref={movieOverview}/>
            </CentredSection>
            <CentredSection>
                <Label>RUNTIME</Label><ModalInput type="text" ref={movieRuntime}/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>MOVIE URL</Label><ModalInput type="text" ref={movieUrl}/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>RELEASE DATE</Label><DatePicker type="date" id="date-picker" ref={movieData}/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>GENRE</Label><Select name="genre" ref={movieJenre}>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
            </Select>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <ResetButton type="submit" value="RESET"/>
                <SubmitButton type="submit" value="SUBMIT" onClick={submitHandler}/>
            </CentredSection>
        </>);
};
