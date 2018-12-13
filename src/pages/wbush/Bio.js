import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/wbush1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George W. Bush:</Headline>
        <Topic>Bio</Topic>
        <Text>
          George Walker Bush was born on July 6, 1946, at Yale–New Haven
          Hospital in New Haven, Connecticut, while his father was a student at
          Yale. He was the first child of George Herbert Walker Bush and his
          wife, Barbara Pierce. He was raised in Midland and Houston, Texas,
          with four siblings, Jeb, Neil, Marvin and Dorothy. Another younger
          sister, Robin, died from leukemia at the age of three in 1953. His
          grandfather, Prescott Bush, was a U.S. Senator from Connecticut. His
          father was Ronald Reagan's vice president from 1981 to 1989 and the
          41st U.S. president from 1989 to 1993. Bush has English and some
          German ancestry, along with more distant Dutch, Welsh, Irish, French,
          and Scottish roots. Bush attended public schools in Midland, Texas,
          until the family moved to Houston after he had completed seventh
          grade. He then spent two years at The Kinkaid School, a prep school in
          Piney Point Village in the Houston area. Bush attended high school at
          Phillips Academy, a boarding school in Andover, Massachusetts, where
          he played baseball and was the head cheerleader during his senior
          year. He attended Yale University (coincidentally located at his place
          of birth in New Haven, Connecticut) from 1964 to 1968, graduating with
          a Bachelor of Arts degree in history. During this time, he was a
          cheerleader and a member of the Delta Kappa Epsilon, serving as the
          president of the fraternity during his senior year. Bush became a
          member of the Skull and Bones society as a senior. Bush was a rugby
          union player and was on Yale's 1st XV. He characterized himself as an
          average student. His GPA during his first three years at Yale was 77,
          and he had a similar average under a nonnumeric rating system in his
          final year. In the fall of 1973, Bush entered Harvard Business School.
          He graduated in 1975 with an MBA degree. He is the only U.S. president
          to have earned an MBA. Bush was initially engaged to Cathryn Lee
          Wolfman in 1967, but the engagement eventually fizzled out. Bush and
          Wolfman remained on good terms after the end of the relationship.
          While Bush was at a backyard barbecue in 1977, friends introduced him
          to Laura Welch, a schoolteacher and librarian. After a three-month
          courtship, she accepted his marriage proposal and they wed on November
          5 of that year. The couple settled in Midland, Texas. Bush left his
          family's Episcopal Church to join his wife's United Methodist Church.
          On November 25, 1981, Laura Bush gave birth to fraternal twin
          daughters, Barbara and Jenna. Through his maternal side, he is a
          sixth-cousin four times removed of British Prime Minister Winston
          Churchill.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “I know the human being and fish can co-exist peacefully.”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> July 6, 1946 (age 72) New Haven, Connecticut,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 2001 – January 20, 2009
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
