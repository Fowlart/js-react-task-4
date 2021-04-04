import React, {useEffect, useRef, useState} from "react";
import styled, {keyframes} from "styled-components";
import {wrapMapToPropsConstant} from "react-redux/lib/connect/wrapMapToProps";

const FilterContainer = styled.div`
  font-size: 15px;
  font-family: "Segoe UI",serif;
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
  animation: ${props => (props.animation%2===0)?grow_0:grow_1} 0.5s linear;
`;

const StyledSelect = styled.select`
  color: white;
  background-color: #232323;
  font-size: 15px;
  font-family: "Segoe UI",serif;
`;

const StyledSpan = styled.span`
  position: relative;
  font-size: 15px;
  font-family: "Segoe UI",serif;
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
    const [animation, setAnimation] = useState(0);

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

    const refToSelectedSection = useRef();

    function onchangeRedLine(e) {
        let deviation = 0;
        let width = "";

        refToSelectedSection.current = e.target;

        refToContainer.current.childNodes.forEach((element) => {
            if (e.target === element) {
                deviation = element.offsetLeft;
                width = window.getComputedStyle(element).width
            }
        });
        setRedLineLeft(deviation + "px");
        setRedLineWidth(width);
        let newNum = animation+1;
        console.log(newNum);
        setAnimation(newNum);
    }

    let renderedSections = sections.map((section) => (
        <FilterSection onClick={onchangeRedLine} key={section} keyForSerch={section}>{section}</FilterSection>
    ));

    window.addEventListener('resize', (e)=>{onchangeRedLine({target: refToSelectedSection.current})});

    return (
        <>
            <StyledResultsFilterWrapper>
                <FilterContainer ref={refToContainer} children={renderedSections}/>
                <SortingOptionsHolder>
                    <StyledSpan>SORT BY</StyledSpan>
                    <StyledSelect id="language-selector" name="language">
                        <option value="RELEASE DATE">RELEASE DATE</option>
                        <option value="OPTION-1">OPTION-1</option>
                        <option value="OPTION-2">OPTION-2</option>
                    </StyledSelect>
                </SortingOptionsHolder>
            </StyledResultsFilterWrapper>
            <DivThinLine><ThinLineInnerDiv width={redLineWidth} left={redLineLeft} animation={animation}/></DivThinLine>
        </>
    );
};
