import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jefferson1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Thomas Jefferson:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Jefferson began his childhood education beside the Randolph children
          with tutors at Tuckahoe. Thomas' father, Peter, was self-taught, and
          regretting not having a formal education, he entered Thomas into an
          English school early, at age five. In 1752, at age nine, he began
          attending a local school run by a Scottish Presbyterian minister and
          also began studying the natural world, for which he grew to love. At
          this time he began studying Latin, Greek, and French, while also
          learning to ride horses. Thomas also read books from his father's
          modest library. He was taught from 1758 to 1760 by Reverend James
          Maury near Gordonsville, Virginia, where he studied history, science,
          and the classics while boarding with Maury's family. During this
          period Jefferson came to know and befriended various American Indians,
          including the famous Cherokee chief, Ontassete, who often stopped at
          Shadwell to visit, on their way to Williamsburg to trade. During the
          two years Jefferson was with the Maury family, he traveled to
          Williamsburg and was a guest of Colonel Dandridge, father of Martha
          Washington. In Williamsburg the young Jefferson met and came to admire
          Patrick Henry, who was eight years his senior, sharing a common
          interest of violin playing. Jefferson entered the College of William
          and Mary in Williamsburg, Virginia, at age 16 and studied mathematics,
          metaphysics, and philosophy under Professor William Small. Small
          introduced Jefferson to George Wythe and Francis Fauquier along with
          British Empiricists including John Locke, Francis Bacon, and Isaac
          Newton. Small, Wythe and Fauquier recognized Jefferson as a man of
          exceptional ability and included him in their inner circle where he
          became a regular member of their Friday dinner parties where politics
          and philosophy were discussed. Jefferson later wrote that he "heard
          more common good sense, more rational and philosophical conversations
          than in all the rest of my life". During his first year at the college
          he was given more to parties, dancing and was not very frugal with his
          expenditures; during his second year, regretting that he had
          squandered away much time and money, he applied himself to fifteen
          hours of study a day. Jefferson improved his French and Greek and his
          skill at the violin. He graduated two years after starting in 1762. He
          read the law under Professor Wythe's tutelage to obtain his law
          license, while working as a law clerk in his office. He also read a
          wide variety of English classics and political works. Jefferson was
          well read in a broad variety of subjects, which along with law and
          philosophy, included history, natural law, natural religion, ethics,
          and several areas in science, including agriculture. Overall, he drew
          very deeply on the philosophers. During the years of study under the
          watchful eye of Wythe, Jefferson authored a survey of his extensive
          readings in his Commonplace Book. So impressed with Jefferson, Wythe
          would later bequeath his entire library to him. 1765 was an eventful
          year in Jefferson's family. In July, his sister Martha married his
          close friend and college companion Dabney Carr, which greatly pleased
          Jefferson. In October, he mourned his sister Jane's unexpected death
          at age 25 and wrote a farewell epitaph in Latin. Jefferson treasured
          his books. In 1770, his Shadwell home was destroyed by fire, including
          a library of 200 volumes inherited from his father and those left to
          him by George Wythe. Nevertheless, he had replenished his library with
          1,250 titles by 1773, and his collection grew to almost 6,500 volumes
          in 1814. The British burned the Library of Congress that year; he then
          sold more than 6,000 books to the Library for $23,950. He had intended
          to pay off some of his large debt, but he resumed collecting for his
          personal library, writing to John Adams, "I cannot live without
          books."
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Do you want to know who you are? Don't ask. Act! Action will
          delineate and define you.”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> April 13, 1743 Shadwell, Colony of Virginia,
            British America
          </Item>

          <Item>
            <strong>Died:</strong> July 4, 1826 (aged 83) Charlottesville,
            Virginia, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic-Republican
          </Item>

          <Item>
            <strong>In Office:</strong> June 20, 1775 – September 26, 1776
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
