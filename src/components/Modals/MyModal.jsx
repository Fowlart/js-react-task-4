import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
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
  height: ${(props) => (props.visible ? "0%" : "90%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: ${(props) => (props.visible ? "" : "solid gold 1px")};
`;

export class ModalObj extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({visible: true})
        }, 40);
    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
    }

    render() {
        return (
            <ModalWrapper>
                <ModalContent id={1234} visible={!this.state.visible}>
                    {!this.state.visible ? null : this.props.content}
                </ModalContent>
            </ModalWrapper>
        );
    }
}