import styled from 'styled-components';

export const VoteBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #303565;
  border-radius: 5px;
  width: 388px;
  margin-top: 30px;
  padding: 20px;
`;

export const UpperLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 0.211704px;
  color: #ffffff;
  -webkit-user-select: none;
`;

export const VoteCount = styled.div`
  font-size: 13px;
  letter-spacing: 0.127023px;
  color: #9b9b9b;
  -webkit-user-select: none;
`;

export const DownLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const VoteLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const VoteLineText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

export const VoteGroup = styled.button`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

export const Count = styled.div`
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.0987954px;
  color: #9b9b9b;
  -webkit-user-select: none;
`;

export const Nickname = styled.div`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.141136px;
  color: #ffffff;
  margin-right: 10px;
  -webkit-user-select: none;
  color: ${props => (props.leading ? '#F7567C' : '#fff')};
`;

export const Percentage = styled.div`
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.127023px;
  color: #9b9b9b;
  -webkit-user-select: none;
  color: ${props => (props.leading ? '#F7567C' : '#fff')};
`;

export const Line = styled.div`
  width: 100%;
  height: 15px;
  background: #ffffff;
  border-radius: 5px;
`;

export const LineFuel = styled.div`
  position: absolute;
  height: 15px;
  top: 0;
  background: #f7567c;
  border-radius: 5px;
  width: ${props => props.width};
`;

export const VoteButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
