import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MessageWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  min-height: 48px;
`;

export const Nickname = styled(NavLink)`
  color: #474d90;
  text-decoration: none;
  font-weight: 300;
  font-size: 24px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 300;
`;
