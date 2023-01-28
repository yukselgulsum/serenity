import { Meta } from '@storybook/react';
import React from 'react';

import { ContactForm } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as Meta;

export const base = (): JSX.Element => <ContactForm />;
