import { css } from 'styled-components';

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
