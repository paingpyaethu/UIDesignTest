import React from 'react';
import {
  Categories,
  ImageCarousel,
  Tickets,
  UpcomingShows,
} from '@/components/molecules';
import {AnimatedListItemView} from '@/components/atoms';

const HomeScreenItemWrapper = () => {
  return (
    <AnimatedListItemView>
      <ImageCarousel />
      <Categories />
      <Tickets />
      <UpcomingShows />
    </AnimatedListItemView>
  );
};

export default HomeScreenItemWrapper;
