import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import {
  NotificationInvitationWrapper,
  NotificationInvitationDate,
  NotificationInvitationNickname,
  NotificationInvitationText,
  NotificationInvitationDatePlan,
  NotificationInvitationButtonWrapper,
} from '../styles';

export const InvitationBlock = ({ date, url, nickname, datePlan }) => (
  <NotificationInvitationWrapper>
    <NotificationInvitationDate>{date}</NotificationInvitationDate>
    <NotificationInvitationText>
      <NotificationInvitationNickname to={url}>
        {nickname}
      </NotificationInvitationNickname>{' '}
      приглашает Вас на дебаты, которые состоятся{' '}
      <NotificationInvitationDatePlan>
        {datePlan}
      </NotificationInvitationDatePlan>
    </NotificationInvitationText>
    <NotificationInvitationButtonWrapper>
      <Button text="Принять" h="27px" w="101px" right="15px" />
      <Button text="Отклонить" isRed isTransparent h="27px" w="101px" />
    </NotificationInvitationButtonWrapper>
  </NotificationInvitationWrapper>
);

export const InvitationBlockFinish = ({ date, nickname, url }) => (
  <NotificationInvitationWrapper>
    <NotificationInvitationDate>{date}</NotificationInvitationDate>
    <NotificationInvitationText>
      Вы приняли приглашение от{' '}
      <NotificationInvitationNickname to={url}>
        {nickname}
      </NotificationInvitationNickname>{' '}
    </NotificationInvitationText>
  </NotificationInvitationWrapper>
);

export const InvitationBlockSoon = ({ date }) => (
  <NotificationInvitationWrapper>
    <NotificationInvitationDate>{date}</NotificationInvitationDate>
    <NotificationInvitationText>
      Дебаты вот-вот начнутся. Подтвердите свою готовность
    </NotificationInvitationText>
    <NotificationInvitationButtonWrapper>
      <Button text="Готов" h="27px" w="101px" right="15px" />
    </NotificationInvitationButtonWrapper>
  </NotificationInvitationWrapper>
);

export const InvitationBlockNow = ({ date, url, nickname, datePlan }) => (
  <NotificationInvitationWrapper>
    <NotificationInvitationDate>{date}</NotificationInvitationDate>
    <NotificationInvitationText>
      Напоминаем, дебаты с{' '}
      <NotificationInvitationNickname to={url}>
        {nickname}
      </NotificationInvitationNickname>{' '}
      начнутся через{' '}
      <NotificationInvitationDatePlan>
        {datePlan}
      </NotificationInvitationDatePlan>
    </NotificationInvitationText>
  </NotificationInvitationWrapper>
);

InvitationBlock.propTypes = {
  url: PropTypes.string,
  nickname: PropTypes.string,
  date: PropTypes.string,
  datePlan: PropTypes.string,
};

InvitationBlockFinish.propTypes = {
  url: PropTypes.string,
  nickname: PropTypes.string,
  date: PropTypes.string,
};

InvitationBlockSoon.propTypes = {
  date: PropTypes.string,
};

InvitationBlockNow.propTypes = {
  url: PropTypes.string,
  nickname: PropTypes.string,
  date: PropTypes.string,
  datePlan: PropTypes.string,
};
