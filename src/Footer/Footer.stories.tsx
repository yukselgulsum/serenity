import { Meta } from '@storybook/react';
import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

export const base = (): JSX.Element => <Footer siteTitle="Auto-école Serenity"/>;
