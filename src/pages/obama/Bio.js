import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/obama1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Barack Obama:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Obama was born on August 4, 1961, at Kapiolani Medical Center for
          Women and Children in Honolulu, Hawaii. He is the only president who
          was born in Hawaii and the only president who was born outside of the
          contiguous 48 states. He was born to a white mother and a black
          father. His mother, Ann Dunham (1942–1995), was born in Wichita,
          Kansas; she was mostly of English descent, with some German, Irish,
          Scottish, Swiss, and Welsh ancestry. His father, Barack Obama Sr.
          (1936–1982), was a married Luo Kenyan man from Nyang'oma Kogelo.
          Obama's parents met in 1960 in a Russian language class at the
          University of Hawaii at Manoa, where his father was a foreign student
          on a scholarship. The couple married in Wailuku, Hawaii on February 2,
          1961, six months before Obama was born. In late August 1961 (only a
          few weeks after he was born), Barack and his mother moved to the
          University of Washington in Seattle, where they lived for a year.
          During that time, the elder Obama completed his undergraduate degree
          in economics in Hawaii, graduating in June 1962. He then left to
          attend graduate school on a scholarship at Harvard University, where
          he earned an M.A. in economics. Obama's parents divorced in March
          1964. Obama Sr. returned to Kenya in 1964, where he married for a
          third time and worked for the Kenyan government as the Senior Economic
          Analyst in the Ministry of Finance. He visited his son in Hawaii only
          once, at Christmas time in 1971, before he was killed in an automobile
          accident in 1982, when Obama was 21 years old. Recalling his early
          childhood, Obama said, "That my father looked nothing like the people
          around me – that he was black as pitch, my mother white as milk –
          barely registered in my mind." He described his struggles as a young
          adult to reconcile social perceptions of his multiracial heritage. In
          1963, Dunham met Lolo Soetoro at the University of Hawaii; he was an
          Indonesian East–West Center graduate student in geography. The couple
          married on Molokai on March 15, 1965. After two one-year extensions of
          his J-1 visa, Lolo returned to Indonesia in 1966. His wife and stepson
          followed sixteen months later in 1967. The family initially lived in a
          Menteng Dalam neighborhood in the Tebet subdistrict of south Jakarta.
          From 1970, they lived in a wealthier neighborhood in the Menteng
          subdistrict of central Jakarta.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Change will not come if we wait for some other person, or if we wait
          for some other time. We are the ones we've been waiting for. We are
          the change that we seek.”
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> August 4, 1961 (age 57) Honolulu, Hawaii,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 2009 – January 20, 2017
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
