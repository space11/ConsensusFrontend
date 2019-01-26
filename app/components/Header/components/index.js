import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import * as Styles from '../styles';

export const InvitationBlock = ({ date, url, nickname, datePlan }) => (
  <Styles.NotificationInvitationWrapper>
    <Styles.NotificationInvitationDate>
      {date}
    </Styles.NotificationInvitationDate>
    <Styles.NotificationInvitationText>
      <Styles.NotificationInvitationNickname to={url}>
        {nickname}
      </Styles.NotificationInvitationNickname>{' '}
      приглашает Вас на дебаты, которые состоятся{' '}
      <Styles.NotificationInvitationDatePlan>
        {datePlan}
      </Styles.NotificationInvitationDatePlan>
    </Styles.NotificationInvitationText>
    <Styles.NotificationInvitationButtonWrapper>
      <Button text="Принять" h="27px" w="101px" right="15px" />
      <Button text="Отклонить" isRed isTransparent h="27px" w="101px" />
    </Styles.NotificationInvitationButtonWrapper>
  </Styles.NotificationInvitationWrapper>
);

export const InvitationBlockFinish = ({ date, nickname, url }) => (
  <Styles.NotificationInvitationWrapper>
    <Styles.NotificationInvitationDate>
      {date}
    </Styles.NotificationInvitationDate>
    <Styles.NotificationInvitationText>
      Вы приняли приглашение от{' '}
      <Styles.NotificationInvitationNickname to={url}>
        {nickname}
      </Styles.NotificationInvitationNickname>{' '}
    </Styles.NotificationInvitationText>
  </Styles.NotificationInvitationWrapper>
);

export const InvitationBlockSoon = ({ date }) => (
  <Styles.NotificationInvitationWrapper>
    <Styles.NotificationInvitationDate>
      {date}
    </Styles.NotificationInvitationDate>
    <Styles.NotificationInvitationText>
      Дебаты вот-вот начнутся. Подтвердите свою готовность
    </Styles.NotificationInvitationText>
    <Styles.NotificationInvitationButtonWrapper>
      <Button text="Готов" h="27px" w="101px" right="15px" />
    </Styles.NotificationInvitationButtonWrapper>
  </Styles.NotificationInvitationWrapper>
);

export const InvitationBlockNow = ({ date, url, nickname, datePlan }) => (
  <Styles.NotificationInvitationWrapper>
    <Styles.NotificationInvitationDate>
      {date}
    </Styles.NotificationInvitationDate>
    <Styles.NotificationInvitationText>
      Напоминаем, дебаты с{' '}
      <Styles.NotificationInvitationNickname to={url}>
        {nickname}
      </Styles.NotificationInvitationNickname>{' '}
      начнутся через{' '}
      <Styles.NotificationInvitationDatePlan>
        {datePlan}
      </Styles.NotificationInvitationDatePlan>
    </Styles.NotificationInvitationText>
  </Styles.NotificationInvitationWrapper>
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
