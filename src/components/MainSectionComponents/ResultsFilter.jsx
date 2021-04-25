import React, {useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, fetchMoviesFiltered} from "../../api_client/apiClient";

const FilterContainer = styled.div`
  font-size: 15px;
  font-family: "Segoe UI", serif;
  background-color: #232323;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 10px;
  transition: all ease;
  color: white;

  :hover {
    color: gray;
  }
`;

const DivThinLine = styled.div`
  width: 100%;
  border: gray solid 1px;
  background-color: gray;
  height: 2%;
  transition: all ease;
`;

const StyledResultsFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #232323;
  border: solid 0px #232323;
`;

const grow_0 = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 0px;
  }
  100% {
    width: ${props => props.left};
  }
`;

const grow_1 = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: ${props => props.width};
  }
  0% {
    left: 1px;
  }
  100% {
    width: ${props => props.left};
  }
`;


const ThinLineInnerDiv = styled.div`
  width: ${props => props.width};
  left: ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  animation: ${props => (props.animation % 2 === 0) ? grow_0 : grow_1} 0.5s linear;
`;

const StyledSelect = styled.select`
  color: white;
  background-color: #232323;
  font-size: 15px;
  font-family: "Segoe UI", serif;
`;

const StyledSpan = styled.span`
  position: relative;
  font-size: 15px;
  font-family: "Segoe UI", serif;
  color: gray;
  margin-top: 4%;
  margin-right: 30px;
`;

const SortingOptionsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ResultsFilter = (props) => {

    const [sections,] = useState(props.sections);

    const refToContainer = useRef();
    const selectedSortOption = useRef();

    const [redLineWidth, setRedLineWidth] = useState("10px");
    const [redLineLeft, setRedLineLeft] = useState("10px");
    const [animation, setAnimation] = useState(0);

    const films = useSelector(state => state.films);
    const dispatch = useDispatch();

    function onFilterSectionClick(selectedGenre, event) {
        let currentSectionWidth = event.target.getBoundingClientRect().width;
        let currentSectionLeft = event.target.getBoundingClientRect().left-10;
        setRedLineWidth(currentSectionWidth+"px");
        setRedLineLeft(currentSectionLeft+"px");
        let counter = animation+1;
        setAnimation(counter);
        console.log(`current section width: ${currentSectionWidth}, current section left: ${currentSectionLeft}`);
        let selectedGenreString = selectedGenre.section.toLowerCase();
        const fetchFilms = fetchMovies();
        const fetchFilmsFiltered = fetchMoviesFiltered(selectedGenreString);
        if (selectedGenreString === "all") {
            dispatch(fetchFilms);
        } else {
            dispatch(fetchFilmsFiltered);
        }
    }

    let renderedSections = sections.map((section) => (
        <FilterSection onClick={(event) => {
            onFilterSectionClick({section},event)
        }} key={section} keyForSearch={section}>{section}</FilterSection>
    ));

    function styledSelectChangeHandler() {
        switch (selectedSortOption.current.value) {
            case 'RELEASE DATE':
                console.log('RELEASE DATE sorting...');
                let newFilms1 = films.sort((a,b)=> {
                    if (a.release < b.release) {
                        return 1;
                    }
                    if (a.release> b.release) {
                        return -1;
                    }
                    return 0;
                }).slice();
                dispatch({type:"ADD_INITIAL_DATA", payload: newFilms1, isDataInPlace: true})
                return;
            case 'ALPHABETICAL':
                console.log('ALPHABETICAL sorting...');
                let newFilms2 = films.sort((a,b)=> {
                    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    let nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).slice();
                dispatch({type:"ADD_INITIAL_DATA", payload: newFilms2, isDataInPlace: true})
                return;
        }
    }

    return (
        <>
            <StyledResultsFilterWrapper>
                <FilterContainer ref={refToContainer} children={renderedSections}/>
                <SortingOptionsHolder>
                    <StyledSpan>SORT BY</StyledSpan>
                    <StyledSelect id="language-selector" name="language" ref={selectedSortOption}
                                  onChange={styledSelectChangeHandler}>
                        <option value="RELEASE DATE">RELEASE DATE</option>
                        <option value="ALPHABETICAL">ALPHABETICAL</option>
                    </StyledSelect>
                </SortingOptionsHolder>
            </StyledResultsFilterWrapper>
            <DivThinLine><ThinLineInnerDiv width={redLineWidth} left={redLineLeft} animation={animation}/></DivThinLine>
        </>
    );
};
