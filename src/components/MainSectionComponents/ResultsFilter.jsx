import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";

const FilterContainer = styled.div`
  background-color: #232323;
  font-size: large;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;`;

//example: extending styles
const StyledResultsFilter = styled(FilterContainer)`
  font-weight: bold;
  color: green;`;

const FilterSection = styled(FilterContainer)`
  align-self: center;
  margin: 10px;
  transition: all ease;
  color: white;`;

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

const ThinLineInnerDiv = styled.div`
  width: ${props => props.width};
  left: ${props => props.left};
  position: relative;
  border: red solid 1px;
  background-color: red;
  height: 1%;
  transition: all ease;
`;

const grow_width = keyframes`
  0% {
    width: 1px;
  }
  100% {
    width: 1000px;
  }
`;

const hide = keyframes`

  0% {
    left: 1px;
  }
  100% {
    left: 1000px;
  }
`;

const StyledSelect = styled.select`
  color: white;
  background-color: #232323;
  font-size: 18px;
  font-family: "Times New Roman";
`;

const StyledSpan = styled.span`
  position: relative;
  font-size: 18px;
  font-family: "Times New Roman";
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
    const sectionWidths = useRef([]);

    const [redLineWidth, setRedLineWidth] = useState("10px");
    const [redLineLeft, setRedLineLeft] = useState("10px");

    // todo: this is a reference to a div which contains all section in the filter
    useEffect(() => {
        if (refToContainer.current) {
            refToContainer.current.childNodes.forEach((section) => {
                sectionWidths.current.push(window.getComputedStyle(section).getPropertyValue("width"));
            });
        }
    }, [refToContainer.current]);

    useEffect(() => {
        setRedLineWidth(sectionWidths.current[0]);
    }, []);

    function onchangeRedLine(e) {

        let deviation = 0;
        let width = "";

        refToContainer.current.childNodes.forEach((element) => {
            if (e.target === element) {
                deviation = element.offsetLeft - 6;
                width = window.getComputedStyle(element).width
            }
        });
        console.log(deviation);
        setRedLineLeft(deviation + "px");
        setRedLineWidth(width);
    }

    let renderedSections = sections.map((section) => (
        <FilterSection onClick={onchangeRedLine} key={section} keyForSerch={section}>{section}</FilterSection>
    ));

    return (
        <>
            <StyledResultsFilterWrapper>
                <StyledResultsFilter ref={refToContainer} children={renderedSections}/>
                <SortingOptionsHolder>
                    <StyledSpan>SORT BY</StyledSpan>
                    <StyledSelect id="language-selector" name="language">
                        <option value="RELEASE DATE">RELEASE DATE</option>
                        <option value="OPTION-1">OPTION-1</option>
                        <option value="OPTION-2">OPTION-2</option>
                    </StyledSelect>
                </SortingOptionsHolder>
            </StyledResultsFilterWrapper>
            <DivThinLine><ThinLineInnerDiv width={redLineWidth} left={redLineLeft}/></DivThinLine>
        </>
    );
};
