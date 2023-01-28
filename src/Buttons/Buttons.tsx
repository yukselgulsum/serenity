import { SerializedStyles } from '@emotion/react';
import cn from 'classnames';
import React from 'react';

import { StyledDynamicComponent, TextPart } from './styled';

interface IOptionalProps {
	as?: any;
	href?: string;
	target?: string;
	to?: string;
	rel?: string;
	onClick?: () => void;
}

export interface IButtonProps {
	children: any;
	className?: string;
	href?: string;
	to?: string;
	as?: string;
	onClick?: () => void;
	autoWidth?: boolean;
	uppercase?: boolean;
	type?: 'button' | 'submit';
	external?: boolean;
	customStyles?: SerializedStyles;
}

export const Button: React.FC<IButtonProps> = ({
	href,
	to,
	className,
	onClick,
	autoWidth = false,
	uppercase = false,
	type = 'button',
	children,
}: IButtonProps) => {
	const buttonProps: IOptionalProps = {};

	if (href) {
		buttonProps.as = 'a';
		buttonProps.href = href;
	} else if (to) {
		buttonProps.to = to;
	}
	if (onClick) {
		buttonProps.onClick = onClick;
	}

	return (
		<StyledDynamicComponent
			{...buttonProps}
			type={type}
			className={cn({
				uppercase,
				autoWidth: autoWidth,
				...(className ? { [className]: true } : {}),
			})}
		>
			<TextPart>{children}</TextPart>
		</StyledDynamicComponent>
	);
};
