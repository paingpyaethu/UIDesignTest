import React from 'react';
import {
  Categories,
  ImageCarousel,
  Tickets,
  UpcomingShows,
  HomeHeader,
} from '@/components/molecules';
import {AnimatedListItemView} from '@/components/atoms';
import {BANNER_IMAGES} from '@/constants/dummy';

const HomeScreenItemWrapper = () => {
  return (
    <AnimatedListItemView>
      <HomeHeader />
      <ImageCarousel data={BANNER_IMAGES} />
      <Categories />
      <Tickets />
      <UpcomingShows />
    </AnimatedListItemView>
  );
};

export default HomeScreenItemWrapper;
