import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/ford1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>General R. Ford:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Ford was born Leslie Lynch King Jr. on July 14, 1913, at 3202
          Woolworth Avenue in Omaha, Nebraska, where his parents lived with his
          paternal grandparents. He was the child of Dorothy Ayer Gardner and
          Leslie Lynch King Sr., a wool trader. His father was a son of
          prominent banker Charles Henry King and Martha Alicia King (née
          Porter). Gardner separated from King just sixteen days after her son's
          birth. She took her son with her to Oak Park, Illinois, home of her
          sister Tannisse and brother-in-law, Clarence Haskins James. From
          there, she moved to the home of her parents, Levi Addison Gardner and
          Adele Augusta Ayer, in Grand Rapids, Michigan. Gardner and King
          divorced in December 1913, and she gained full custody of her son.
          Ford's paternal grandfather Charles Henry King paid child support
          until shortly before his death in 1930. Ford later said that his
          biological father had a history of hitting his mother. In a biography
          of Ford, James M. Cannon, a member of the Ford administration, wrote
          that the separation and divorce of Ford's parents were sparked when, a
          few days after Ford's birth, Leslie King took a butcher knife and
          threatened to kill his wife, his infant son, and Ford's nursemaid.
          Ford later told confidants that his father had first hit his mother
          when she smiled at another man during their honeymoon. After living
          with her parents for two-and-a-half years, Gardner married Gerald
          Rudolff Ford on February 1, 1916. Gerald was a salesman in a
          family-owned paint and varnish company. They now called her son Gerald
          Rudolff Ford Jr. The future president was never formally adopted and
          did not legally change his name until December 3, 1935; he also used a
          more conventional spelling of his middle name. He was raised in Grand
          Rapids with his three half-brothers from his mother's second marriage:
          Thomas Gardner "Tom" Ford (1918–1995), Richard Addison "Dick" Ford
          (1924–2015), and James Francis "Jim" Ford (1927–2001). Ford also had
          three half-siblings from the second marriage of Leslie King Sr., his
          biological father: Marjorie King (1921–1993), Leslie Henry King
          (1923–1976), and Patricia Jane King (1925–1980). They never saw one
          another as children, and he did not know them at all until 1960. Ford
          was not aware of his biological father until he was 17, when his
          parents told him about the circumstances of his birth. That year his
          biological father, whom Ford described as a "carefree, well-to-do man
          who didn't really give a damn about the hopes and dreams of his
          firstborn son", approached Ford while he was waiting tables in a Grand
          Rapids restaurant. The two "maintained a sporadic contact" until
          Leslie King Sr.'s death in 1941. Ford said, "My stepfather was a
          magnificent person and my mother equally wonderful. So I couldn't have
          written a better prescription for a superb family upbringing."" Ford
          was involved in the Boy Scouts of America, and earned that program's
          highest rank, Eagle Scout. He is the only Eagle Scout to have ascended
          to the U.S. Presidency. Ford attended Grand Rapids South High School,
          where he was a star athlete and captain of the football team. In 1930,
          he was selected to the All-City team of the Grand Rapids City League.
          He also attracted the attention of college recruiters.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "Never be satisfied with less than your very best effort. If you
          strive for the top and miss, you'll still 'beat the pack.'"
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> July 14, 1913 Omaha, Nebraska, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> December 26, 2006 (aged 93) Rancho Mirage,
            California, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> August 9, 1974 – January 20, 1977
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
