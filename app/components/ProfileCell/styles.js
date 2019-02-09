import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ProfileCellWrapper = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 300px;
  height: 96px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const ProfileCellAva = styled.div`
  position: relative;
  border-radius: 100px;
  width: 66px;
`;

export const ProfileCellName = styled.div`
  font-size: 20px;
  color: #000000;
`;

export const ProfileCellColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 66px;
  width: 66px;
  border-radius: 100px;
  object-fit: cover;
`;

export const ProfileCellRep = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #4a4a4a;
`;

export const ProfileCellTextWrapper = styled.div``;
