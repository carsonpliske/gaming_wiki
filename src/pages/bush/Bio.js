import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/bush1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George H.W. Bush:</Headline>
        <Topic>Bio</Topic>
        <Text>
          George Herbert Walker Bush was born at 173 Adams Street in Milton,
          Massachusetts on June 12, 1924 to Prescott Sheldon Bush and Dorothy
          (Walker) Bush. The Bush family moved from Milton to Greenwich,
          Connecticut shortly after his birth. Bush was named after his maternal
          grandfather George Herbert Walker, who was known as "Pop", and young
          Bush was called "Poppy" as a tribute to his namesake. Bush began his
          formal education at the Greenwich Country Day School, then attended
          Phillips Academy in Andover, Massachusetts beginning in 1938, where he
          held a number of leadership positions which included president of the
          senior class, secretary of the student council, president of the
          community fund-raising group, a member of the editorial board of the
          school newspaper, and captain of the varsity baseball and soccer
          teams.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "No problem of human making is too great to be overcome by human
          ingenuity, human energy, and the untiring hope of the human spirit."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> June 12, 1924 Milton, Massachusetts, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> November 30, 2018 (aged 94) Houston, Texas,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1989 – January 20, 1993
          </Item>
        </Text>
      </AboutWrapper>
    );
  }
}
const AboutWrapper = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;
const Headline = styled.h1`
  font-size: 50px;
  line-height: 30px;
`;
const Topic = styled.h1`
  font-size: 50px;
  color: #999;
  line-height: 40px;
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 19px;
`;

export default Bio;
