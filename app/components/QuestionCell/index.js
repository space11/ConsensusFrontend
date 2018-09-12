import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Plus from '../../images/Controls/plus';
import Cross from '../../images/Controls/cross';

const QuestionCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  background: #fff;
  border-radius: 5px;
  margin: 1vw;
  padding: 1vw 2vw;
  transition: 0.3s;
`;

const QuestionCellTitle = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  color: #2b367e;
  float: left;
  margin-right: 1rem;
`;

const QuestionCellVisibleContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const QuestionCellInVisibleContentWrapper = styled.div`
  display: ${props => (props.isPopped ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const QuestionCellButton = styled.button``;

const QuestionCellText = styled.div`
  color: #4a4a4a;
  margin-top: 1rem;
`;

class QuestionCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPopped: props.isPopped || false,
    };
    this.buttonPop = this.buttonPop.bind(this);
  }

  buttonPop() {
    this.state.isPopped
      ? this.setState({ isPopped: false })
      : this.setState({ isPopped: true });
  }

  render() {
    return (
      <div>
        <QuestionCellWrapper isPopped={this.state.isPopped}>
          <QuestionCellVisibleContentWrapper>
            <QuestionCellTitle>
              Как добавить оппонента, который незарегистрирован?
            </QuestionCellTitle>
            <QuestionCellButton onClick={this.buttonPop}>
              {this.state.isPopped ? <Cross /> : <Plus />}
            </QuestionCellButton>
          </QuestionCellVisibleContentWrapper>
          <QuestionCellInVisibleContentWrapper isPopped={this.state.isPopped}>
            <QuestionCellText>
              В момент создания комнаты дайте ссылку оппоненту. После
              регистрации он автоматически попадет в комнату.
            </QuestionCellText>
          </QuestionCellInVisibleContentWrapper>
        </QuestionCellWrapper>
      </div>
    );
  }
}

export default QuestionCell;
