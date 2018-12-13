import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/carter1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Jimmy Carter:</Headline>
        <Topic>Bio</Topic>
        <Text>
          James Earl Carter Jr. was born on October 1, 1924, at the Wise
          Sanitarium (now the Lillian G. Carter Nursing Center) in Plains,
          Georgia, a hospital where his mother was employed as a registered
          nurse. Carter was the first U.S. president to be born in a hospital.
          He was the eldest son of Bessie Lillian (née Gordy) and James Earl
          Carter Sr. Carter is a descendant of English immigrant Thomas Carter,
          who settled in Virginia in 1635. Numerous generations of Carters lived
          as cotton farmers in Georgia. Carter is also a descendant of Thomas
          Cornell, an ancestor of Cornell University's founder, and is distantly
          related to Richard Nixon and Bill Gates. Plains was a boomtown of 600
          people at the time of Carter's birth. Carter's father was a successful
          local businessman, who ran a general store, and was an investor in
          farmland. He previously served as a reserve second lieutenant in the
          U.S. Army's Quartermaster Corps during World War I. The family moved
          several times during Carter Jr.'s infancy. The Carters settled on a
          dirt road in nearby Archery, which was almost entirely populated by
          impoverished African American families. They eventually had three more
          children: Gloria, Ruth, and Billy. Carter got along well with his
          parents, although his mother worked long hours and was often absent in
          his childhood. Although Earl was staunchly pro-segregation, he allowed
          his son to befriend the black farmhands' children. Carter was an
          enterprising teenager who was given his own acre of Earl's farmland
          where he grew, packaged, and sold peanuts. He also rented out a
          section of tenant housing that he had purchased.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> October 1, 1924 (age 94) Plains, Georgia,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1977 – January 20, 1981
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
