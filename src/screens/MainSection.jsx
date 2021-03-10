import React, {useState} from "react";
import styled from "styled-components";
import {ResultsFilter} from "../components/MainSectionComponents/ResultsFilter";
import {Card} from "../components/MainSectionComponents/Card";
import {MyModal} from "../components/Popup/MyModal";

const MainSectionFlex = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;`;

const MainSection = () => {

    const [isModalVisible, setModalVisible] = useState(true);
    const [shouldClose, setShouldClose] = useState(false);

    function switchModal(e) {
        setShouldClose(!shouldClose);
        setTimeout(() => {
            setModalVisible(!isModalVisible)
        }, 400);
    }

    // Todo: fetch from back-end
    let sectionsForFilter = ["section-1", "section-2", "section-3", "section-4"];
    let filmCards = [
        {name: "The Fight Club", release: "1999", jenre: "comedy, thriller"},
        {
            name: "Venom",
            release: "2018",
            jenre: "action, horror, science fiction",
        },
        {},
        {}
    ];

    return (
        <>
            <MyModal show={isModalVisible} closeModal={shouldClose} onClick={switchModal}/>
            <ResultsFilter sections={sectionsForFilter}/>
            <MainSectionFlex>
                {filmCards.map((card) => (
                    <Card name={card.name} release={card.release} jenre={card.jenre}
                          key={`${card.name} + ${Math.random()}`}/>
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
    let isDataInPlace = true;

    return isDataInPlace ? <MainSection/> : <OopsText/>;
};

export default ErrorBoundaryMainSection;
