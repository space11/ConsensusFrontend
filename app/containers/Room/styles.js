import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 131px 59px;
`;

export const LeftBlock = styled.div`
  width: 902px;
  margin-right: 15px;
`;

export const RightBlock = styled.div`
  width: 388px;
  margin-top: 68px;
  margin-left: 15px;
`;

export const ContentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CategoryLabel = styled.div`
  font-size: 20px;
  margin-right: 5px;
`;

export const CategoryText = styled(CategoryLabel)`
  color: #474d90;
`;

export const CategoryWrap = styled.div`
  display: flex;
`;

export const RoomDescription = styled.div`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ViewersWrapper = styled.img`
  margin-right: 5px;
`;

export const Share = styled.button`
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #474d90;
  margin-bottom: 30px;
`;

export const ProfileBlock = styled.div`
  display: flex;
  width: 100%;
`;

export const ProfileBlockWrapper = styled(NavLink)`
  display: flex;
  width: 400px;
  height: 130px;
  background: #ffffff;
  border-radius: 5px;
`;

export const ProfileBlockImage = styled.img`
  width: 100px;
  height: 130px;
  border-radius: 5px 0 0 5px;
`;

export const ProfileBlockTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: #000;
`;

export const ProfileBlockContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ProfileBlockDescription = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #000;
`;

export const VsIconWrapper = styled.img`
  margin: 0 24px;
`;
