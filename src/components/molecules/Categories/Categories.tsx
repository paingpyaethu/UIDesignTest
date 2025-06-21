import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ThemedText} from '@/components/atoms';
import {categories} from '@/constants/dummy';
import {colors, config} from '@/theme';
import {scaled} from '@/utils/helper';

const Categories = () => {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <View key={index} style={styles.categoryItem}>
          <View style={styles.categoryImageContainer}>
            <Image
              source={item.image}
              style={{...scaled(24)}}
              resizeMode="contain"
            />
          </View>
          <ThemedText>{item.label}</ThemedText>
        </View>
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
