import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {ResultsFilter} from "../../components/MainSectionComponents/ResultsFilter";
import {Card} from "../../components/MainSectionComponents/Card";
import {useDispatch, useSelector} from "react-redux";

const MainSectionFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const fetchFilms = (dispatch, getState) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch("http://localhost:8000/api/films", requestOptions)
        .then(body => body.json())
        .then(films => {
            dispatch({type: 'ADD_INITIAL_DATA', payload: films, isDataInPlace: true})
            // Check the updated store state after dispatching
            const allFilms = getState().films;
            console.log(allFilms);
        });
};

const MainSection = () => {

    //example: the way to retrieve data from redux store
    const films = useSelector(state => state.films);
    //example: the way to get dispatcher for redux
    const dispatch = useDispatch()
    let sectionsForFilter = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    function deleteCard(cardId) {
        dispatch({type: "REMOVE_FILM", filmId: cardId});
    }

    return (
        <>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {films.map(card => (
                    <Card deleteCardHandler={deleteCard}
                          name={card.name}
                          release={card.release}
                          jenre={card.jenre}
                          key={card.id}
                          id={card.id} img={card.img} textColor={card.textColor}/>
                ))}
            </MainSectionFlex>
        </>
    );
};

const OopsDiv = styled.div`
  background-color: black;
  color: red;
  text-align: center;`;


const OopsText = () => {
    return (
        <OopsDiv>
            < h2> Oops, something went wrong ... We are doing our best to fix the issue ! < /h2>
        </OopsDiv>
    );
};


const ErrorBoundaryMainSection = () => {
    const dispatch = useDispatch();
    const isDataInPlace = useSelector(state => state.isDataInPlace);

    useEffect(() => {
        dispatch(fetchFilms);
    },[]);

    return isDataInPlace ?
        <MainSection/> : <OopsText/>;
};

export default ErrorBoundaryMainSection;
