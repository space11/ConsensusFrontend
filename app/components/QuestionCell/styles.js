import styled from 'styled-components';

export const QuestionCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background: #fafafa;
  border-radius: 6px;
  margin: 1vw;
  padding: 20px;
  transition: 0.3s;
  -webkit-user-select: none;

  &:hover {
    transform: scale(1.02);
  }
`;

export const QuestionCellTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #2b367e;
  float: left;
  margin-right: 6px;
`;

export const QuestionCellVisibleContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const QuestionCellInVisibleContentWrapper = styled.div`
  display: ${props => (props.isPopped ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const QuestionCellButton = styled.div``;

export const QuestionCellText = styled.div`
  color: #4a4a4a;
  margin-top: 1rem;
  font-size: 14px;
  letter-spacing: 0.78px;
`;
