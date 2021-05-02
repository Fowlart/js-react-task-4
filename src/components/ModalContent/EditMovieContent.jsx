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
import {Field, Form, Formik} from "formik";
import styled from "styled-components";

const MyField = styled(Field)`
  background-color: black;
  color: white;
  width: 75%;
  height: 40%;
  left: 20px;
  padding: 0px;
  border: solid gold 1px;
`;


function validateTitle(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid title';
    }
    return error;
}

function validateUsername(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;
}


export const EditMovieContent = (props) => {

    const cardID = props.cardId;
    const movieOverview = useRef();
    const movieRuntime = useRef();
    const movieGenre = useRef();
    const movieTitle = useRef();
    const movieDate = useRef();
    const movieUrl = useRef();

    function submitHandler() {

        filmsStore.dispatch({
            type: "EDIT_FILM",
            deletedCardId: cardID,
            payload: {
                id: movieTitle.current.value,
                key: movieTitle.current.value,
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
                <H1>EDIT MOVIE</H1>
            </CentredSection>

            <Formik initialValues={{username: 'username', title: 'title',}} onSubmit={values => {
                console.log(values);
            }}>
                {({errors, touched, isValidating}) => (
                    <Form>

                        <CentredSection justify="center">
                            <Label>TITLE</Label>
                            <MyField name="title" validate={validateTitle}/>
                            {errors.title && touched.title && <div>{errors.title}</div>}
                        </CentredSection>

                        <CentredSection justify="center">
                            <Label>TITLE</Label>
                            <MyField name="username" validate={validateUsername}/>
                            {errors.username && touched.username && <div>{errors.username}</div>}
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
                            <Label>GENRE</Label><Select name="genre" id="genre" ref={movieGenre}>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                        </Select>
                        </CentredSection>
                        <CentredSection justify="flex-end" directionRow>
                            <ResetButton type="submit" value="RESET"/>
                            <SubmitButton onClick={submitHandler} type="submit" value="SAVE"/>
                        </CentredSection>
                    </Form>
                )}
            </Formik>
        </>);
};
