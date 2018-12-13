import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/tyler1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Tyler:</Headline>
        <Topic>Accomplishments</Topic>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "I contend that the strongest of all governments is that which is most
          free. "
        </Subhead>
        <Text>
          <Date>04/12/1844: The Texas Annexation Treaty</Date>
          The Texas Annexation Treaty is signed by the United States and the
          Republic of Texas.
          <Date>
            03/01/1845: President Tyler Signs Joint Resolution for Texas
            Annexation
          </Date>
          On March 1, 1845, President John Tyler signed a joint resolution to
          annex Texas. The resolution called for Texas to enter the United
          States directly as a state, with its boundaries to be determined after
          annexation. Under the new resolution, the United States would not
          assume the Republic of Texas's sizable debt, but the new state would
          be allowed to keep its vast public lands (which could be used
          presumably to alleviate the debt). Texas could also consent to
          creating up to four more states out of the original area, with those
          above 30 degrees and 30 minutes created as free states, and those
          below the line formed as slave states. President Tyler had long
          championed bringing Texas into the Union, and he interpreted Democrat
          James K. Polk's 1844 election victory as a popular mandate for
          territorial expansion and the annexation of Texas. After the Senate
          had rejected a treaty with Texas in June 1844, President Tyler decided
          to pursue annexation through a different means. Instead of ratifying a
          treaty, which required approval from two-thirds of the Senate, Tyler
          decided to use a joint resolution to annex Texas; a resolution only
          required a simple majority in the House and Senate for approval.
          President Tyler concentrated his annual message in December almost
          entirely on the issue of Texas, and he quickly submitted to Congress a
          joint resolution to admit Texas into the Union. The House passed a
          compromise resolution in January 1845 but efforts in the Senate moved
          slowly until Polk arrived in Washington, D.C., in mid-February. The
          President-elect immediately began to exert pressure on the Senate,
          hinting that patronage appointments might hinge on the bill's passage,
          and the Senate finally passed an amended version of the bill. The
          revised bill approved the terms of the House version with the added
          stipulation that the President was to decide whether to annex Texas
          immediately or settle another annexation treaty with the Republic. The
          measure passed the Senate 27 to 25. Although Tyler signed the
          resolution on March 1, 1845, the presidential choice between immediate
          annexation and a new treaty was intended for Polk. Secretary of State
          John C. Calhoun, however, pushed Tyler to offer Texas annexation
          immediately, arguing that there was no reason for delay. Tyler,
          already eager for some credit in the annexation of Texas and wanting
          it as the crowning achievement of his administration, took little
          convincing. President Tyler officially dispatched word to Texas,
          offering immediate annexation if Texas approved, on his last full day
          in office, March 3, 1845. Texas joined the United States as the
          twenty-eighth state on December 29, 1845.
          <Date>3/03/1845: 03/03/1845: Florida becomes a state</Date>
        </Text>
        Florida is admitted as a slave state, making it the twenty-seventh state
        in the Union.
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

export default Accomplishments;
