import React, { PureComponent } from 'react';
import styled from 'styled-components';

const QuestionCellWrapper = styled.div`
  width: 100%;
  height: 20%;
  background: #ffffff;
  border-radius: 5px;
`;

class QuestionCell extends PureComponent {
  render() {
    return (
      <div>
        <QuestionCellWrapper />
      </div>
    );
  }
}

export default QuestionCell;
