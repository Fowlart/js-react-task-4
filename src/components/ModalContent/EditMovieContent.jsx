import React, {useRef} from "react";
import {ExitButton} from "../UI/ExitButton.styled";
import {
    CentredSection,
    MyDatePicker,
    H1,
    Label,
    ModalInput,
    ResetButton,
    Select,
    SubmitButton
} from "../Modals/ModalsComponents.styled";
import {filmsStore} from "../../store/FilmsStore";
import {Field, Form, Formik, useField, useFormikContext} from "formik";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyField = styled(Field)`
  background-color: black;
  color: white;
  width: 75%;
  height: 40%;
  left: 20px;
  padding: 5px;
  border: solid gold 1px;
`;

function validateTitle(value) {
    let error;
    if (!value) {
        error = 'Required!';
    }
    return error;
}

function validateReleaseDate(value) {
    console.log(value);
    let error;
    if (!value) {
        error = 'Required!';
    } else if (value>new Date().getFullYear()) {
        error = 'Invalid date!';
    }
    return error;
}

function validateRuntime(value) {
    console.log(value);
    let error;
    if (!value) {
        error = 'Required!';
    }
    return error;
}

export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker dateFormat="yyyy"
                    showMonthDropdown={false}
                    showYearDropdown={true}
                    showDayDropdown={false}

            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};


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

            <Formik initialValues={{date: '', title: 'title', runtime: "120min",}} onSubmit={values => {
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
                            <Label>RELEASE DATE</Label>
                            <DatePickerField name="date" validate={validateReleaseDate}/>
                            {errors.date && touched.date && <div>{errors.date}</div>}
                        </CentredSection>

                        <CentredSection justify="center">
                            <Label>RUNTIME</Label>
                            <MyField name="runtime" validate={validateRuntime}/>
                            {errors.runtime && touched.runtime && <div>{errors.runtime}</div>}
                        </CentredSection>

                        <CentredSection justify="center">
                            <Label>MOVIE URL</Label><ModalInput type="text" ref={movieUrl}/>
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
