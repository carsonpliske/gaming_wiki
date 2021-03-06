import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/johnson1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Lyndon Johnson:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Lyndon Baines Johnson was born on August 27, 1908, near Stonewall,
          Texas, in a small farmhouse on the Pedernales River. He was the oldest
          of five children born to Samuel Ealy Johnson Jr. and Rebekah Baines.
          Johnson had one brother, Sam Houston Johnson, and three sisters;
          Rebekah, Josefa, and Lucia. The nearby small town of Johnson City,
          Texas, was named after LBJ's cousin, James Polk Johnson, whose
          forebears had moved west from Georgia. Johnson had English, German,
          and Ulster Scots ancestry. His patrilineal descent traces back to John
          Johnson, born in Dumfriesshire, Scotland in 1590. He was maternally
          descended from pioneer Baptist clergyman George Washington Baines, who
          pastored eight churches in Texas, as well as others in Arkansas and
          Louisiana. Baines, the grandfather of Johnson's mother, was also the
          president of Baylor University during the American Civil War.
          Johnson's grandfather, Samuel Ealy Johnson Sr., was raised as a
          Baptist and for a time was a member of the Christian Church (Disciples
          of Christ). In his later years the grandfather became a
          Christadelphian; Johnson's father also joined the Christadelphian
          Church toward the end of his life. Later, as a politician, Johnson was
          influenced in his positive attitude toward Jews by the religious
          beliefs that his family, especially his grandfather, had shared with
          him. Johnson's favorite Bible verse came from the King James Version
          of Isaiah 1:18. "Come now, and let us reason together ..." In school,
          Johnson was an awkward, talkative youth who was elected president of
          his 11th-grade class. He graduated in 1924 from Johnson City High
          School, where he participated in public speaking, debate, and
          baseball. At age 15, Johnson was the youngest member of his class.
          Pressured by his parents to attend college, he enrolled at a
          "subcollege" of Southwest Texas State Teachers College (SWTSTC) in the
          summer of 1924, where students from unaccredited high schools could
          take the 12th-grade courses needed for admission to college. He left
          the school just weeks after his arrival and decided to move to
          southern California. He worked at his cousin's legal practice and in
          various odd jobs before returning to Texas, where he worked as a day
          laborer. In 1926, Johnson managed to enroll at SWTSTC (now Texas State
          University). He worked his way through school, participated in debate
          and campus politics, and edited the school newspaper, The College
          Star. The college years refined his skills of persuasion and political
          organization. For nine months, from 1928 to 1929, Johnson paused his
          studies to teach Mexican–American children at the segregated Welhausen
          School in Cotulla, some 90 miles (140 km) south of San Antonio in La
          Salle County. The job helped him to save money to complete his
          education and he graduated in 1930. He briefly taught at Pearsall High
          School before taking a position as teacher of public speaking at Sam
          Houston High School in Houston. When he returned to San Marcos in
          1965, after signing the Higher Education Act of 1965, Johnson
          reminisced: I shall never forget the faces of the boys and the girls
          in that little Welhausen Mexican School, and I remember even yet the
          pain of realizing and knowing then that college was closed to
          practically every one of those children because they were too poor.
          And I think it was then that I made up my mind that this nation could
          never rest while the door to knowledge remained closed to any
          American.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Yesterday is not ours to recover, but tomorrow is ours to win or
          lose.”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> August 27, 1908 Stonewall, Texas, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> January 22, 1973 (aged 64) Stonewall, Texas,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> November 22, 1963 – January 20, 1969
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
