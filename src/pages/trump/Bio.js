import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/trump1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Donald Trump:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Donald John Trump was born on June 14, 1946, at the Jamaica Hospital,
          Queens, New York City. His parents were Frederick Christ Trump, a real
          estate developer, and Mary Anne MacLeod. Trump grew up in Jamaica
          Estates, Queens, and attended the Kew-Forest School from kindergarten
          through seventh grade. At age 13, he was enrolled in the New York
          Military Academy, a private boarding school, after his parents
          discovered that he had made frequent trips into Manhattan without
          their permission. In 1964, Trump enrolled at Fordham University. After
          two years, he transferred to the Wharton School of the University of
          Pennsylvania. While at Wharton, he worked at the family business,
          Elizabeth Trump and Son. He graduated in May 1968 with a Bachelor of
          Science degree in economics. While in college from 1964 to 1968, Trump
          obtained four student deferments from serving in the military. In
          1966, he was deemed fit for service based upon a medical examination
          and in July 1968, after graduating from college, was briefly
          classified as eligible to serve by a local draft board. In October
          1968, he was given a medical deferment which he later attributed to
          spurs in both heels, and classified as 1-Y, "unqualified for duty
          except in the case of a national emergency." In the December 1969
          draft lottery, Trump's birthday, June 14, received a high number which
          would have given him a low probability to be called to military
          service even without the 1-Y. In 1972, he was reclassified as 4-F,
          disqualifying him for service.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> June 14, 1946 (age 72) Queens, New York City
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 2017 - Present
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
