import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/clinton1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Bill Clinton:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Clinton was born William Jefferson Blythe III on August 19, 1946, at
          Julia Chester Hospital in Hope, Arkansas. He is the son of William
          Jefferson Blythe Jr., a traveling salesman who had died in an
          automobile accident three months before his birth, and Virginia Dell
          Cassidy (later Virginia Kelley). His parents had married on September
          4, 1943, but this union later proved to be bigamous, as Blythe was
          still married to his third wife. Virginia traveled to New Orleans to
          study nursing soon after Bill was born, leaving him in Hope with her
          parents Eldridge and Edith Cassidy, who owned and ran a small grocery
          store. At a time when the southern United States was racially
          segregated, Clinton's grandparents sold goods on credit to people of
          all races. In 1950, Bill's mother returned from nursing school and
          married Roger Clinton Sr., who co-owned an automobile dealership in
          Hot Springs, Arkansas with his brother and Earl T. Ricks. The family
          moved to Hot Springs in 1950. Although he immediately assumed use of
          his stepfather's surname, it was not until Clinton turned 15 that he
          formally adopted the surname Clinton as a gesture toward his
          stepfather. Clinton said that he remembered his stepfather as a
          gambler and an alcoholic who regularly abused his mother and
          half-brother, Roger Clinton Jr., to the point where he intervened
          multiple times with the threat of violence to protect them. In Hot
          Springs, Clinton attended St. John's Catholic Elementary School,
          Ramble Elementary School, and Hot Springs High School, where he was an
          active student leader, avid reader, and musician. Clinton was in the
          chorus and played the tenor saxophone, winning first chair in the
          state band's saxophone section. He briefly considered dedicating his
          life to music, but as he noted in his autobiography My Life: Sometime
          in my sixteenth year, I decided I wanted to be in public life as an
          elected official. I loved music and thought I could be very good, but
          I knew I would never be John Coltrane or Stan Getz. I was interested
          in medicine and thought I could be a fine doctor, but I knew I would
          never be Michael DeBakey. But I knew I could be great in public
          service. Clinton began an interest in law at Hot Springs High, when he
          took up the challenge to argue the defense of the ancient Roman
          Senator Catiline in a mock trial in his Latin class. After a vigorous
          defense that made use of his "budding rhetorical and political
          skills", he told the Latin teacher Elizabeth Buck that it "made him
          realize that someday he would study law". Clinton has identified two
          influential moments in his life, both occurring in 1963, that
          contributed to his decision to become a public figure. One was his
          visit as a Boys Nation senator to the White House to meet President
          John F. Kennedy. The other was watching Martin Luther King Jr.'s 1963
          I Have a Dream speech on TV, which impressed him enough that he later
          memorized it.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “We all do better when we work together. Our differences do matter,
          but our common humanity matters more.”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> August 19, 1946 (age 72) Hope, Arkansas, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1993 – January 20, 2001
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
