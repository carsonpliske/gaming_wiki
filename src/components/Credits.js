import React, { Component } from "react";
import styled from "styled-components";

class Credits extends Component {
  render() {
    return (
      <Wrapper>
        <Text>
          <strong>Source: </strong>Wikipedia, UVA \ Miller Center
        </Text>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  text-align: center;
  font-size: 15px;
`;

export default Credits;
