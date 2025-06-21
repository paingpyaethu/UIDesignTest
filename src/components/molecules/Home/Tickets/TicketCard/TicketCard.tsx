import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {ThemedCard, ThemedText} from '@/components/atoms';
import {config} from '@/theme';
import {scaled} from '@/utils/helper';

type TicketCardProps = {
  title: string;
  image: ImageSourcePropType | undefined;
  date: string;
  linkText: string;
  hasOpacity?: boolean;
};
const TicketCard = ({
  title,
  image,
  date,
  linkText,
  hasOpacity,
}: TicketCardProps) => {
  return (
    <ThemedCard cardContainerStyle={styles.cardContainerStyle}>
      <View style={styles.titleRow}>
        <ThemedText>{title}</ThemedText>
        <Image source={image} style={{...scaled(24)}} resizeMode="contain" />
      </View>
      <ThemedText
        size="fs_16"
        weight="Poppins_medium"
        opacity={hasOpacity ? 0.5 : 1}>
        {date}
      </ThemedText>
      <ThemedText color="primary" marginTop={config.spacing[6]}>
        {linkText}
      </ThemedText>
    </ThemedCard>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: '48%',
    padding: config.spacing[16],
    borderRadius: config.spacing[16],
    ...config.shadows.dark,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: config.spacing[16],
  },
});
