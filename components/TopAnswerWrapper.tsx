import React from 'react';
import styled from 'styled-components';

type getWidthProp = {
  width: any;
};

const SectionWrapper = styled.div<getWidthProp>`
  height: 100%;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: width 0.2s ease-in;
  background-color: #a1f8f4;
  width: ${(props: any) => props.width}%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const AnswerText = styled.div`
  color: '#031530';
  font-size: 13px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 95%;
`;

const AnswerVotes = styled.div`
  color: '#031530';
  font-size: 13px;
  font-weight: bold;
`;

const checkWidth = (width: any) => {
  if (width > 100) {
    return;
  } else return width;
};

const showIcon = (value: string, compare: string) => {
  if (compare === value) {
    return true;
  } else return false;
};

export default function TopAnswerWrapper({
  width,
  ans,
  votes,
  selected,
  percentages,
}: any) {
  return (
    <SectionWrapper width={checkWidth(width)}>
      <AnswerText>
        <div>
          {ans}{' '}
          {showIcon(ans, selected) ? (
            <img
              src={require('../static/check-circle.svg')}
              width="15"
              height="15"
            />
          ) : null}
        </div>
        {'  '}
        {percentages ? <AnswerVotes>{votes}%</AnswerVotes> : null}
      </AnswerText>
    </SectionWrapper>
  );
}
