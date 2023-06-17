import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { routes } from '@/shared/const/router';

import { SidebarItemProps } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemProps[] = [
    {
      path: routes.index,
      text: 'Main',
      Icon: MainIcon,
    },
    {
      path: routes.about,
      text: 'About',
      Icon: AboutIcon,
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: routes.profile.index(userData.id),
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: routes.articles.index,
        text: 'Articles',
        Icon: ArticleIcon,
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
});
