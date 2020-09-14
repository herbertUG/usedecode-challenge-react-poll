import React from 'react';
import styled from 'styled-components';
import { Answer } from '../types';
import TopAnswerWrapper from './TopAnswerWrapper';
import OtherAnswerWrapper from './OtherAnswerWrapper';

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 0px 0px;
  width: inherit;
  justify-content: center;
`;

const AnswerContainer = styled.div`
  height: 30px;
  width: 250px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  margin-bottom: 7px;
  position: relative;
`;

const AnwserWrapper = styled.div`
  height: 100%;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

const AnswerText = styled.div`
  color: '#031530';
  font-size: 13px;
  display: flex;
  font-weight: 500;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 95%;
`;

const AnswerVotes = styled.div`
  color: '#031530';
  font-size: 13px;
  font-weight: 500;
`;

export default function PollAnswerButton({
  questionAnswers,
  callback,
  percentages,
}: any) {
  const handleClick = (value: string) => {
    callback(value);
    setAnswerSelected(value);
    setShowAnswers(true);
    let getHighVote = questionAnswers.map((v: any) => {
      return v.votes;
    });
    const maxVote = Math.max(...getHighVote);
    setHighValue(maxVote);
  };

  const showIcon = (value: string) => {
    if (answerSelected === value) {
      return true;
    } else return false;
  };

  const [answerSelected, setAnswerSelected] = React.useState<string>('');
  const [highValue, setHighValue] = React.useState<number>();
  const [showAnswers, setShowAnswers] = React.useState<boolean>(false);

  return (
    <AnswerSection>
      {questionAnswers.map((ans: Answer) => (
        <AnswerContainer key={ans.text} onClick={() => handleClick(ans.text)}>
          {highValue === ans.votes ? (
            <TopAnswerWrapper
              width={highValue}
              ans={ans.text}
              votes={ans.votes}
              selected={answerSelected}
              percentages={percentages}
            />
          ) : showAnswers ? (
            <OtherAnswerWrapper
              width={ans.votes}
              ans={ans.text}
              votes={ans.votes}
              selected={answerSelected}
              percentages={percentages}
            />
          ) : (
            <AnwserWrapper>
              <AnswerText>
                <div>
                  {ans.text}{' '}
                  {showIcon(ans.text) ? (
                    <img
                      src={require('../static/check-circle.svg')}
                      width="20"
                      height="20"
                    />
                  ) : null}
                </div>
                {'  '}
                {percentages ? <AnswerVotes>{ans.votes}%</AnswerVotes> : null}
              </AnswerText>
            </AnwserWrapper>
          )}
        </AnswerContainer>
      ))}
    </AnswerSection>
  );
}
