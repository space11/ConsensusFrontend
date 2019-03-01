import styled from 'styled-components';

/* eslint-disable */

export const ButtonWrapper = styled.button`
  display: flex;
  font-size: ${props => (props.h === '27px' ? '10px' : '20px')};
  font-weight: 500;
  color: ${props => (props.isRed ? '#f7567c' : '#fff')};
  border-radius: 25px;
  max-width: ${props => (props.isTransparent ? '245px' : '268px')};
  padding: ${props => (props.h === '27px' ? '0 25px' : '0 20px')};
  height: ${props => (props.isTransparent ? '45px' : '54px')};
  background: ${props =>
    props.isValid
      ? '#e87891'
      : props.isTransparent
        ? 'transparent'
        : '#f7567c'};
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(247, 86, 124, 0.4);
  border: ${props => (props.isTransparent ? '2px solid #f7567c' : '')};
  transition: 0.3s;
  margin-right: ${props => props.right};
  -webkit-user-select: none;
  cursor: pointer;
  width: ${props => props.w};
`;

