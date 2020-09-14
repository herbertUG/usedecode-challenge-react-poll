import * as React from 'react';
import styled from 'styled-components';
import { QandAsDocument, QandA, Answer } from '../types';
import PollAnswerButton from './PollAnswerButton';
import { randomObject } from '../utlis';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const PollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 300px;
  border: 1px solid #c8c8c8;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: auto;
`;

const PollContent = styled.div`
  margin-left: 25px;
  align-items: center;
  margin-top: 20px;
  height: auto;
`;

const PollHeader = styled.header`
  font-weight: bold;
  color: '#031530';
  font-size: 19px;
  width: 250px;
`;

const Counter = styled.h4`
  color: #c8c8c8;
`;

export default function Poll({ qandas }: Props) {
  console.log(randomObject(qandas.questions));

  React.useEffect(() => {
    const QuestionArray = qandas.questions;

    const randomQuestion = randomObject(QuestionArray);

    setUserQuestion(randomQuestion.question.text);
    setUserAnswer(randomQuestion.answers);
  }, []);

  const [userQuestion, setUserQuestion] = React.useState<QandA[]>([]);
  const [userAnswer, setUserAnswer] = React.useState<Answer[]>([]);
  const [votes, setVotes] = React.useState(75);
  const [showPercentages, setShowPercentages] = React.useState(false);
  const [userSelected, setUserSelected] = React.useState('');

  const checkAnswer = () => {
    setUserSelected(userSelected);
    setShowPercentages(true);
    if (showPercentages) {
      setVotes(votes);
    } else setVotes(votes + 1);
  };

  return (
    <PollWrapper>
      <PollContent>
        <PollHeader>{userQuestion}</PollHeader>
        <PollAnswerButton
          questionAnswers={userAnswer}
          callback={checkAnswer}
          percentages={showPercentages}
          selected={userSelected}
        />
        <Counter>{votes} Votes</Counter>
      </PollContent>
    </PollWrapper>
  );
}
