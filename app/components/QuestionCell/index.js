import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plus from 'images/question/plus';
import Cross from 'images/question/cross';
import {
  QuestionCellWrapper,
  QuestionCellTitle,
  QuestionCellVisibleContentWrapper,
  QuestionCellInVisibleContentWrapper,
  QuestionCellButton,
  QuestionCellText,
} from './styles';

class QuestionCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopped: props.isPopped || false,
    };
    this.buttonPop = this.buttonPop.bind(this);
  }

  buttonPop() {
    if (this.state.isPopped) {
      this.setState({ isPopped: false });
    } else {
      this.setState({ isPopped: true });
    }
  }

  render() {
    const { isPopped } = this.state;
    const { description, title } = this.props;
    return (
      <QuestionCellWrapper onClick={this.buttonPop} isPopped={isPopped}>
        <QuestionCellVisibleContentWrapper>
          <QuestionCellTitle>{title}</QuestionCellTitle>
          <QuestionCellButton onClick={this.buttonPop}>
            {isPopped ? <Cross /> : <Plus />}
          </QuestionCellButton>
        </QuestionCellVisibleContentWrapper>
        <QuestionCellInVisibleContentWrapper isPopped={isPopped}>
          <QuestionCellText>{description}</QuestionCellText>
        </QuestionCellInVisibleContentWrapper>
      </QuestionCellWrapper>
    );
  }
}

QuestionCell.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isPopped: PropTypes.bool,
};

export default QuestionCell;
