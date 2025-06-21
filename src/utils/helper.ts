import {scaledSize} from '@/theme';

const scaled = (value: number) => {
  return {
    height: scaledSize(value),
    width: scaledSize(value),
  };
};

export {scaled};
