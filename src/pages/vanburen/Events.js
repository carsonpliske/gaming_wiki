import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/vanburen1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Martin van Buren:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The less government interferes with private pursuits, the better for
          general prosperity."
        </Subhead>
        <Text>
          <Date>05/10/1837: The Panic of 1837</Date>
          The Panic of 1837 begins in New York when banks first suspend payments
          of specie. Following the collapse of credit facility, banks can no
          longer redeem currency notes in gold and silver. Compounding the
          problem, a depression in England causes the price of cotton to drop
          and ends British loans to the United States. An already unstable
          economy now suffers from additional debts and unemployment.
          <Date>11/1837: Rebellion against British</Date> A rebellion erupts in
          Lower and Upper Canada against the British. Sympathetic volunteers in
          Maine and New York rally in support with promises of various bounties
          and land allotments. The American volunteers cross the Niagara River
          into Canada and occupy Navy Island. After a series of events, Van
          Buren instructs General Winfield Scott to persuade the American
          citizens to restrain themselves from further incursions violating
          national law and neutrality.
          <Date>“Aroostook War” Ends</Date>On March 25, 1839, Governor John
          Fairfield of Maine agreed to terms that ended the so-called Aroostook
          War. The issue at hand was the border between the American state of
          Maine and British Canadian province of New Brunswick. The border was a
          long-standing controversy which almost boiled over in 1839 when the
          Governor Fairfield sent militia to occupy the Aroostook River Valley.
          President Martin Van Buren deftly defused the crisis and paved the way
          for the final settlement of the boundary question, which came in 1842.
          The boundary line between Maine and New Brunswick had been a matter of
          controversy between Britain and the United States since the end of the
          American Revolution. The 1783 Treaty of Paris drew the boundary with
          maps that were both incomplete and incorrect in regards to the region
          of northern Maine. Since the rivers and mountains described in the
          1783 treaty were unclear, the British and American governments each
          had their own ideas of the border boundaries. The situation grew more
          serious in 1838, when both the British and the Americans began
          surveying roads through the Maine lands. Additionally, lumberjacks
          from both countries traversed the Maine backcountry at will, angering
          both sides. William Harvey, the governor of New Brunswick, arrested a
          Maine census taker who was surveying the settlements along the
          Madawaska River. Finally, in January 1839, Governor Fairfield of Maine
          mobilized a militia and sent it to the Aroostook River Valley to expel
          timber cutters from New Brunswick. In response, Governor Harvey
          claimed that the Maine men were in New Brunswick territory and that he
          had the right to expel them by force. President Van Buren turned to
          diplomacy to defuse the crisis. On February 26, 1839, he delivered a
          special message to Congress, which put forward a program of action.
          Van Buren both praised and criticized Governor Fairfield. Fairfield
          was right to expel trespassers onto Maine's territory, but he should
          have communicated with the governor of New Brunswick as he mobilized
          the militia. Van Buren said he would support Maine if it was attacked,
          but that Fairfield's occupation of the Aroostook was a provocation,
          and it had to be discontinued. At the same time as the President
          addressed Congress and Maine, he negotiated with the British minister
          in Washington. They agreed that New Brunswick would not attack, Maine
          would withdraw, and both sides would agree to a joint solution to deal
          with incidents of trespass. The joint memorandum was controversial in
          Maine, but supported almost everywhere else in the United States. Van
          Buren sent General Winfield Scott to negotiate on the ground in Maine,
          and Scott negotiated a truce between Governors Harvey and Fairfield.
          Maine and New Brunswick tacitly agreed to divide the disputed area
          into spheres of interest, with Maine controlling the Aroostook River
          Valley and New Brunswick controlling the Madawaska River Valley. The
          “Aroostook War” never actually became a real war. Although President
          Van Buren ended the crisis, a permanent settlement was not immediate.
          The United States and Britain did not formally resolve the boundary
          dispute until the Webster-Ashburton Treaty of 1842.
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
