import React from 'react';
import {View, StyleSheet} from 'react-native';
import {categories} from '@/constants/dummy';
import {colors, config} from '@/theme';
import AnimatedCategoryItem from './AnimatedCategoryItem/AnimatedCategoryItem';

const Categories = () => {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <AnimatedCategoryItem key={index} item={item} index={index} />
      ))}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: config.spacing[18],
    paddingHorizontal: config.spacing[16],
  },
  categoryItem: {
    width: '24%',
    alignItems: 'center',
    marginBottom: config.spacing[10],
  },
  categoryImageContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 999,
    padding: config.spacing[10],
    marginBottom: config.spacing[3],
  },
});
