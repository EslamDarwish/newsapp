import _ from 'lodash';

export const parseParams = (
  str: string,
  obj: {[key: string]: string},
): string => {
  const values = _.values(obj);
  _.keys(obj).forEach((key, index) => {
    // dynamic regex to match the key
    const regex = new RegExp(`%${key}`, 'g');
    str = str.replace(regex, values[index]);
  });
  return str;
};
