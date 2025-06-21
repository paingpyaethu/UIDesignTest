import {Images} from '@/theme';
import {ImageSourcePropType} from 'react-native';

export type CategoryType = {
  id: string;
  label: string;
  image: ImageSourcePropType | undefined;
};

const categories: CategoryType[] = [
  {id: '1', label: 'Map', image: Images.MAP},
  {id: '2', label: 'Inhabitants', image: Images.INHABITANTS},
  {id: '3', label: 'Shows', image: Images.SHOWS},
  {id: '4', label: 'Shopping', image: Images.SHOPPING},
  {id: '5', label: 'Dine', image: Images.DINE},
  {id: '6', label: 'Meet & Greets', image: Images.MEET_AND_GREETS},
];

export {categories};
