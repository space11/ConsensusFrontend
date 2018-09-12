import React, { PureComponent } from 'react';
import styled from 'styled-components';

const QuestionCellWrapper = styled.div`
  width: 400px;
  height: 60px;
  background: #ffffff;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vw 2vw;
`;

const QuestionCellTitle = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  color: #2b367e;
  align-self: center;
`;

class QuestionCell extends PureComponent {
  render() {
    return (
      <div>
        <QuestionCellWrapper>
          <QuestionCellTitle>Как запустить стрим?</QuestionCellTitle>
        </QuestionCellWrapper>
      </div>
    );
  }
}

export default QuestionCell;
