import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jfk1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John F. Kennedy:</Headline>
        <Topic>Bio</Topic>
        <Text>
          John Fitzgerald Kennedy was born on May 29, 1917, at 83 Beals Street
          in suburban Brookline, Massachusetts, to businessman/politician Joseph
          Patrick "Joe" Kennedy and philanthropist/socialite Rose Elizabeth
          Fitzgerald Kennedy. His paternal grandfather P. J. Kennedy was a
          member of the Massachusetts state legislature. His maternal
          grandfather and namesake John F. Fitzgerald served as a U.S.
          Congressman and was elected to two terms as Mayor of Boston. All four
          of his grandparents were children of Irish immigrants. Kennedy had an
          elder brother, Joseph Jr., and seven younger siblings: Rosemary,
          Kathleen "Kick", Eunice, Patricia, Robert "Bobby", Jean, and Edward
          "Ted". Kennedy lived in Brookline for the first ten years of his life
          and attended the local St. Aidan's Church, where he was baptized on
          June 19, 1917. He was educated at the Edward Devotion School in
          Brookline, the Noble and Greenough Lower School in nearby Dedham,
          Massachusetts, and the Dexter School (also in Brookline) through the
          4th grade. His father's business had kept him away from the family for
          long stretches of time, and his ventures were concentrated on Wall
          Street and Hollywood. In September 1927, the family moved from
          Brookline to Riverdale, Bronx, New York. Young John attended the lower
          campus of Riverdale Country School, a private school for boys, from
          5th to 7th grade. Two years later, the family moved to suburban
          Bronxville, New York, where Kennedy was a member of Boy Scout Troop 2
          and attended St. Joseph's Church. The Kennedy family spent summers and
          early autumns at their home (rented in 1926, then purchased in 1929)
          in Hyannis Port, Massachusetts, and Christmas and Easter holidays at
          their winter retreat in Palm Beach, Florida, later purchased in 1933.
          In September 1930, Kennedy—then 13 years old—attended the Canterbury
          School in New Milford, Connecticut, for 8th grade. In April 1931, he
          had an appendectomy, after which he withdrew from Canterbury and
          recuperated at home. In September 1931, Kennedy started attending
          Choate, a prestigious boarding school in Wallingford, Connecticut, for
          9th through 12th grade. His older brother Joe Jr. had already been at
          Choate for two years and was a football player and leading student. He
          spent his first years at Choate in his older brother's shadow, and
          compensated with rebellious behavior that attracted a coterie. They
          carried out their most notorious stunt by exploding a toilet seat with
          a powerful firecracker. In the ensuing chapel assembly, the strict
          headmaster, George St. John, brandished the toilet seat and spoke of
          certain "muckers" who would "spit in our sea". The defiant Kennedy
          took the cue and named his group "The Muckers Club", which included
          roommate and lifelong friend Kirk LeMoyne "Lem" Billings. During his
          years at Choate, Kennedy was beset by health problems that culminated
          with his emergency hospitalization in 1934 at New Haven Hospital,
          where doctors thought he might have had leukemia. In June 1934, he was
          admitted to the Mayo Clinic in Rochester, Minnesota; the ultimate
          diagnosis there was colitis. Kennedy graduated from Choate in June of
          the following year, finishing 64th in a class of 112 students. He had
          been the business manager of the school yearbook and was voted the
          "most likely to succeed".In September 1935, Kennedy made his first
          trip abroad when he traveled to London with his parents and his sister
          Kathleen. He intended to study under Harold Laski at the London School
          of Economics (LSE), as his older brother had done. Ill-health forced
          his return to the United States in October of that year, when he
          enrolled late and attended Princeton University but had to leave after
          two months due to a gastrointestinal illness. He was then hospitalized
          for observation at Peter Bent Brigham Hospital in Boston. He
          convalesced further at the family winter home in Palm Beach, then
          spent the spring of 1936 working as a ranch hand on the 40,000-acre
          Jay Six cattle ranch outside Benson, Arizona. It is reported that
          ranchman Jack Speiden worked both brothers "very hard". In September
          1936, Kennedy enrolled at Harvard College and his application essay
          stated: "The reasons that I have for wishing to go to Harvard are
          several. I feel that Harvard can give me a better background and a
          better liberal education than any other university. I have always
          wanted to go there, as I have felt that it is not just another
          college, but is a university with something definite to offer. Then
          too, I would like to go to the same college as my father. To be a
          'Harvard man' is an enviable distinction, and one that I sincerely
          hope I shall attain." He produced that year's annual "Freshman
          Smoker", called by a reviewer "an elaborate entertainment, which
          included in its cast outstanding personalities of the radio, screen
          and sports world." He tried out for the football, golf, and swimming
          teams and earned a spot on the varsity swimming team. Kennedy also
          sailed in the Star class and won the 1936 Nantucket Sound Star
          Championship. In July 1937, Kennedy sailed to France—taking his
          convertible—and spent ten weeks driving through Europe with Billings.
          In June 1938, Kennedy sailed overseas with his father and older
          brother to work at the American embassy in London, where his father
          was President Franklin D. Roosevelt's U.S. Ambassador to the Court of
          St. James's. In 1939, Kennedy toured Europe, the Soviet Union, the
          Balkans, and the Middle East in preparation for his Harvard senior
          honors thesis. He then went to Czechoslovakia and Germany before
          returning to London on September 1, 1939, the day that Germany invaded
          Poland to mark the beginning of World War II. Two days later, the
          family was in the House of Commons for speeches endorsing the United
          Kingdom's declaration of war on Germany. Kennedy was sent as his
          father's representative to help with arrangements for American
          survivors of the SS Athenia before flying back to the U.S. from
          Foynes, Ireland, to Port Washington, New York, on his first
          transatlantic flight. When Kennedy was an upperclassman at Harvard, he
          began to take his studies more seriously and developed an interest in
          political philosophy. He made the Dean's List in his junior year. In
          1940, Kennedy completed his thesis, "Appeasement in Munich", about
          British participation in the Munich Agreement. The thesis eventually
          became a bestseller under the title Why England Slept. In addition to
          addressing Britain's failure to strengthen its military in the lead-up
          to World War II, the book also called for an Anglo-American alliance
          against the rising totalitarian powers. While Kennedy became
          increasingly supportive of U.S. intervention in World War II, his
          father's isolationist beliefs resulted in the latter's dismissal as
          ambassador to the United Kingdom, creating a split between the Kennedy
          and Roosevelt families. In 1940, Kennedy graduated cum laude from
          Harvard College with a Bachelor of Arts in government, concentrating
          on international affairs. That fall, he enrolled at the Stanford
          Graduate School of Business and audited classes there. In early 1941,
          Kennedy left and helped his father write a memoir of his time as an
          American ambassador. He then traveled throughout South America; his
          itinerary included Colombia, Ecuador and Peru.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "Ask not what your country can do for you, but what you can do for
          your country."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> May 29, 1917 Brookline, Massachusetts, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> November 22, 1963 (aged 46) Dallas, Texas,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1961 – November 22, 1963
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
