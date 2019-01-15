import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileCellWrapper = styled(NavLink)`
  display: flex;
  position: relative;
  text-decoration: none;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  color: ${props => (props.white ? '#fff' : '#000')};
  background: #fafafa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  padding: 10px;
  min-width: 220px;
  text-align: center;
`;

export const ProfileCellAva = styled.div`
  position: relative;
  border-radius: 100px;
  margin: 1rem;
`;

export const ProfileCellName = styled.div`
  font-size: 1.5em;
  font-weight: 400;
`;

export const ProfileCellColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileCellRep = styled.div`
  font-weight: 300;
  color: #9b9b9b;
  font-size: 0.9em;
`;

export const ProfileCellTextWrapper = styled.div`
  display: flex;
  margin-left: 0.7rem;
  flex-direction: column;
  justify-content: space-between;
`;
