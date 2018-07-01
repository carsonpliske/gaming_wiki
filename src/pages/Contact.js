import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <p> This is the contact page </p>
      </ContactWrapper>
    );
  }
}

const ContactWrapper = styled.div`
  padding: 50px;
`;

export default Contact;
