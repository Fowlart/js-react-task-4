import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
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
  height: ${(props) => ((props.visible && !props.hideContent) ? "90%" : "0%")};
  z-index: 1;
  transition: width 0.5s, height 0.5s;
  border: solid gold 1px;
`;

export class ModalObj extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        //todo: add fetch
        console.log("component mounted!!!");
        setTimeout(() => {
            this.setState({visible: true})
        }, 40);
    }


    componentWillUnmount() {
        console.log("component unmounted!");
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps);
    }

    render() {
        return (
            <ModalWrapper>
                <ModalContent visible={this.state.visible} hideContent={this.props.hideContent}>
                    {this.props.content}
                </ModalContent>
            </ModalWrapper>
        );
    }
}