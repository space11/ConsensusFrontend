export const required = value => (value ? undefined : 'Необходимое поле');
export const maxLength = max => value =>
  value && value.length > max
    ? `Значение не должно превышать ${max} знаков`
    : undefined;
export const maxLength15 = maxLength(15);
export const minValue = min => value =>
  value && value < min ? `Значение должно иметь ${min} знаков` : undefined;
export const minValue18 = minValue(18);
export const minValue8 = minValue(8);
export const minValue5 = minValue(5);
export const eMail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Неверный адрес'
    : undefined;
