import { Meta } from '@storybook/react';
import React from 'react';

import { ContactInfo } from './ContactInfo';

export default {
  name: 'Components/ContactInfo',
  component: ContactInfo,
} as Meta;

export const base = (): JSX.Element => <ContactInfo name="Serenity" phone="02929929" mail="a@a.fr" />;
