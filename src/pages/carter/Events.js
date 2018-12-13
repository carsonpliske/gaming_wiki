import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/carter1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Jimmy Carter:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          <Date>03/17/1978: Potential Soviet threat</Date>Carter warns of the
          Soviet threat in a foreign policy address at Wake Forest University.
          <Date>Camp David Accords Signed</Date>On September 17, 1978, President
          Jimmy Carter oversaw an agreement between Israeli Prime Minister
          Menachem Begin and Egyptian President Anwar Sadat that called for
          Israel’s gradual withdrawal from the Sinai Peninsula and the
          establishment of diplomatic relations between the two countries. The
          Camp David Accords are often considered the most significant foreign
          policy achievement of Carter’s administration. Tension in the Middle
          East had continued unabated since the 1967 war between Israel and
          Egypt. In November 1967, the United Nations Security Council passed
          Resolution 242. The resolution called for the withdrawal of Israeli
          armed forces from territories acquired during the war and for
          termination of all claims or states of belligerency between all
          nations or states in the area. Recognition by Egypt of the right of
          Israel to peaceful existence and the return of lands acquired by the
          Six Days War remained preconditions for peace in the region. Following
          the Yom Kippur War of October 1973, the Security Council issued
          Resolution 338, calling on the parties to begin negotiations toward
          establishing a “just and durable peace.” President Carter decided to
          act after Egyptian President Anwar Sadat of Egypt had traveled to
          Jerusalem and Israeli Prime Minister Menachem Begin had returned from
          a reciprocal visit to Cairo. Carter invited the leaders to the United
          States to hammer out a peace treaty between the countries. They would
          also seek a framework for the resolution of the Palestinian crisis.
          The three met at Camp David, the presidential retreat in Maryland's
          Catoctin Mountains, from September 5 through September 17, 1978. The
          Camp David Accords, signed by Carter, Begin, and Sadat, called for
          recognition of UN Security Council Resolution 242 and established the
          fundamental framework for peace in the region. The agreement called
          for:  Mutual respect for the sovereignty, territorial integrity, and
          political independence of every state in the area and the right to
          live in peace within secure and recognized boundaries;  Negotiations
          between Egypt, Israel, Jordan, and Palestinian representatives for the
          establishment of arrangements leading to an autonomous and
          self-governing authority for the West Bank and Gaza within five years;
           The negotiation of a peace treaty between Egypt and Israel within
          three months that recognized the right of Israel to exist and the
          return of territory taken by Israel in previous conflicts. The peace
          treaty was officially signed in March 1979. It was a major
          breakthrough, perhaps the most significant by an American President
          dealing with Middle East affairs, and established a precedent for
          future high-level negotiations over these issues.
          <Date>12/15/1978: China granted diplomatic status</Date>
          The Carter administration grants full diplomatic status to the
          People's Republic of China.
          <Date>07/25/1980: Limiting nuclear war</Date>Carter signs Presidential
          Directive 59 advocating a strategy for fighting a “limited” nuclear
          war.
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
