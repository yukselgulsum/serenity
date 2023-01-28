import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};


