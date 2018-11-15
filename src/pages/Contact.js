import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { valueName: "", valueEmail: "" };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ valueEmail: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <ContactWrapper>
        <Headline>Contact</Headline>
        <p> This is the contact page </p>
        <Form
          action="https://formspree.io/carsonpliske@gmail.com"
          method="POST"
        >
          <Label>
            name:
            <Input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChangeName}
            />
          </Label>

          <Label>
            email:
            <Input
              type="email"
              name="name"
              value={this.state.value}
              onChange={this.handleChangeEmail}
            />
          </Label>
          <Submit type="submit" value="Submit" />
        </Form>
      </ContactWrapper>
    );
  }
}

const ContactWrapper = styled.div`
  padding: 50px;
  text-align: center;
`;
const Headline = styled.h1`
  font-size: 75px;
`;

const Form = styled.form`
  font-size: 18px;
`;

const Label = styled.label`
  font-size: 18px;
  display: block;
  margin: 5px 0;
`;

const Input = styled.input`
  font-size: 18px;
  display: inline-block;
  margin-left: 8px;
`;

const Submit = styled.input`
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
`;

export default Contact;
