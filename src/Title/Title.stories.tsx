import { Meta } from '@storybook/react';
import React from 'react';

import { Title } from './Title';

export default {
  title: 'Components/Scaffolding/Title',
  component: Title,
} as Meta;

export const TITLE_DATA = [{ title: 'catégories' }];

export const base = (): JSX.Element => <Title title="exemple " />;
