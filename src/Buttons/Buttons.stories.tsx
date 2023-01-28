import { Meta } from '@storybook/react';
import React from 'react';

import { Button } from './Buttons';

export default {
	button: 'Components/Button',
	component: Button,
} as Meta;


export const base = (): JSX.Element => <Button children={"button"}  />;
