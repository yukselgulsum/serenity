import { Meta } from '@storybook/react';
import React from 'react';

import { InputGroup } from './InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
} as Meta;

export const base = (): JSX.Element => (
  <InputGroup id="name" error="Ce champ n'est pas bon" placeholder="Nom" label="Nom" />
);
