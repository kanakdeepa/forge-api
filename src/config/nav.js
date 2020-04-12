import React from 'react';
import Documentation from '../components/Documentation/Documentation';
import Introduction from '../components/Introduction/Introduction';
import Guide from '../components/Guide/Guide';
import Reference from '../components/Reference/Reference';

export const navItems = [
  { url: '/developer/documentation', label: 'Documentation', component: <Documentation /> },
  { url: '/developer/en/api/dummy1/intro', label: 'Introduction', component: <Introduction /> },
  { url: '/developer/en/api/dummy1/guide', label: 'Guide', component: <Guide /> },
  { url: '/developer/en/api/dummy1/reference', label: 'Reference', component: <Reference /> },
];
