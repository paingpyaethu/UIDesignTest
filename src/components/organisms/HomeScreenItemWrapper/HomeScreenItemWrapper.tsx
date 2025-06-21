import React from 'react';
import {
  Categories,
  ImageCarousel,
  Tickets,
  UpcomingShows,
  HomeHeader,
} from '@/components/molecules';
import {AnimatedListItemView} from '@/components/atoms';

const HomeScreenItemWrapper = () => {
  return (
    <AnimatedListItemView>
      <HomeHeader />
      <ImageCarousel />
      <Categories />
      <Tickets />
      <UpcomingShows />
    </AnimatedListItemView>
  );
};

export default HomeScreenItemWrapper;
