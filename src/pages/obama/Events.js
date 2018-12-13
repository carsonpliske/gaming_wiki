import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/obama1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Barack Obama:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Change will not come if we wait for some other person, or if we wait
          for some other time. We are the ones we've been waiting for. We are
          the change that we seek.”
        </Subhead>
        <Text>
          <Date>01/22/2009: Executive order to close Guantánamo Bay</Date>Obama
          signs an executive order to close the U.S. military prison at
          Guantánamo Bay, Cuba, within one year. Guantánamo Bay is a detention
          center where individuals considered to be a national threat to the
          United States are detained and questioned in controversial conditions.
          His executive order encountered strong Congressional resistance, and
          the prison remained open after he left office.
          <Date>04/08/2010: Reduction of nuclear arms</Date>
          President Obama and President Dmitry Medvedev of Russia sign the
          Strategic Arms Reduction Treaty (START). This is an agreement to
          reduce the stockpile of nuclear weapons by the United States and
          Russia.
          <Date>05/01/2011: Osama Bin Laden killed</Date>
          Obama announces the death of Osama Bin Laden, who was the leader of
          Al-Qaeda, the terrorist group that claimed responsibility for the U.S.
          terrorist attacks on September 11, 2001. (Bin Laden was killed on May
          2, 2011, in Pakistan but it was still May 1 in the United States when
          the president announced his death.)
          <Date>10/21/2011: End of Iraq War</Date>
          President Obama announces that U.S. troops will be home from Iraq by
          December and that the U.S. role in the war is over.
          <Date>02/05/2012: Iranian sanctions</Date>
          Obama signs an executive order that freezes the assets of the Iranian
          government held within the United States due to Iran engaging in what
          Obama called, “deceptive practices.
          <Date>09/10/2013: Chemical weapons in Syria</Date>President Obama
          gives a speech about the war in Syria and President Bashar al-Assad’s
          use of chemical weapons against his own people.
          <Date>03/06/2014: Russian sanctions</Date>Obama calls for economic
          sanctions against those responsible for the Russian intervention in
          Crimea and the stealing of assets of the Ukrainian people.
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

export default Events;
