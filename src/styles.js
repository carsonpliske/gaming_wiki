import styled from "styled-components";

export const Date = styled.span`
  font-weight: bold;
  display: block;
`;
export const Subhead = styled.h3`
  font-size: 24px;
  border-bottom: 1px solid;
`;

export const Item = styled.p`
  position: relative;
  padding: 10px 0;
  border-top: #ccc 1px solid;
  margin: 0;
  &:first-of-type {
    border-top: none;
  }
`;
