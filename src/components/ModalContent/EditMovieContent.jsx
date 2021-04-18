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
import {filmsStore} from "../../store/FilmsStore";
import {Card} from "../MainSectionComponents/Card";


export const EditMovieContent = (props) => {

    const cardID=props.cardId;
    const movieOverview = useRef();
    const movieRuntime = useRef();
    const movieJenre = useRef();
    const movieTitle = useRef();
    const movieDate = useRef();
    const movieUrl = useRef();

    function submitHandler(){

        filmsStore.dispatch({
            type: "EDIT_FILM",
            deletedCardId: cardID,
            payload: {
                id: movieTitle.current.value,
                key:movieTitle.current.value,
                name: movieTitle.current.value,
                release: movieDate.current.value,
                jenre: movieJenre.current.value,
                overview: movieOverview.current.value,
                runtime: movieRuntime.current.value,
                url: movieUrl.current.value
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
                <H1>EDIT MOVIE</H1>
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
                <Label>GENRE</Label><Select name="genre" id="genre" ref={movieJenre}>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
            </Select>
            </CentredSection>
            <CentredSection justify="flex-end" directionRow>
                <ResetButton type="submit" value="RESET"/>
                <SubmitButton onClick={submitHandler} type="submit" value="SAVE"/>
            </CentredSection>
        </>);
};
