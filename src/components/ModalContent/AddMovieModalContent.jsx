import React, {useRef} from "react";
import {ExitButton} from "../UI/ExitButton.styled";
import {
    CentredSection,
    H1,
    Label,
    ModalInput,
    ResetButton,
    Select,
    SubmitButton
} from "../Modals/ModalsComponents.styled";
import {filmsStore} from "../../store/FilmsStore";

export const AddMovieContent = (props) => {

    const movieOverview = useRef();
    const movieRuntime = useRef();
    const movieGenre = useRef();
    const movieTitle = useRef();
    const movieDate = useRef();
    const movieUrl = useRef();

    function submitHandler(e) {
        e.preventDefault();
        filmsStore.dispatch({
            type: "ADD_FILM", payload: {
                id: movieTitle.current.value,
                name: movieTitle.current.value,
                release: movieDate.current.value,
                genre: movieGenre.current.value,
                overview: movieOverview.current.value,
                runtime: movieRuntime.current.value,
                img: movieUrl.current.value
            }
        });
        props.closeHandler();
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
                <Label>RELEASE DATE</Label><DatePicker type="date" id="date-picker" ref={movieDate}/>
            </CentredSection>
            <CentredSection justify="center">
                <Label>GENRE</Label><Select name="genre" ref={movieGenre}>
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
