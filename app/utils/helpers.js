import { css } from 'styled-components';

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minLength8 = minLength(8);
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue13 = minValue(13);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;
export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

export const media = {
  small: (...args) => css`
    @media (max-width: 39.999em) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: 40em) and (max-width: 63.999em) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)};
    }
  `,
};

export const hideOn = css`
  ${props => props.noAll && 'display: none'};
  ${media.small`
     ${props => props.noSmall && 'display: none'};
  `}
  ${media.medium`
     ${props => props.noMedium && 'display: none'};
  `}
  ${media.large`
     ${props => props.noLarge && 'display: none'};
  `}
`;

export function formatDateWithMonth(date) {
  if (!date) {
    return null;
  }
  const d = new Date();
  d.setTime(Date.parse(date));
  const month = [];

  month[0] = 'Января';
  month[1] = 'Февраля';
  month[2] = 'Марта';
  month[3] = 'Апреля';
  month[4] = 'Мая';
  month[5] = 'Июня';
  month[6] = 'Июля';
  month[7] = 'Августа';
  month[8] = 'Сентября';
  month[9] = 'Октября';
  month[10] = 'Ноября';
  month[11] = 'Декабря';

  return {
    day: d.getDate(),
    month: month[d.getMonth()],
    year: d.getFullYear(),
    old: d.getTime() < new Date().getTime(),
  };
}
