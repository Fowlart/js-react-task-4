import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232323;
  margin: auto;
  left: 20px;
  right: 20px;
  bottom: 20px;
  position: fixed;
  width: ${(props) => (props.closeModal ? "0%" : "90%")};
  height: ${(props) => (props.closeModal ? "0%" : "90%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;

export class ModalObj extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <ModalWrapper>
                <ModalContent closeModal={!this.props.visible}>
                    {!this.props.visible ? null : this.props.content}
                </ModalContent>
            </ModalWrapper>
        );
    }
}