'use client';

import React, { FC } from 'react';
import { ToastItem } from './toast-item';
import { ToastProps } from '@/utils/types';

type Props = {
	position: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
	toasts: ToastProps[];
};

export const Toast: FC<Props> = ({ position, toasts }) => {
	return (
		<div
			className={'fixed z-[60] grid gap-y-3'.concat(
				position === 'top-left' ? 'top-4 left-4' : '',
				position === 'top' ? 'top-4 left-1/2 -translate-x-1/2' : '',
				position === 'top-right' ? 'top-4 right-4' : '',
				position === 'bottom-left' ? 'bottom-4 left-4' : '',
				position === 'bottom' ? 'bottom-4 left-1/2 -translate-x-1/2' : '',
				position === 'bottom-right' ? 'bottom-4 right-4' : ''
			)}>
			{toasts.map((_toast) => (
				<ToastItem key={_toast.id} {..._toast} />
			))}
		</div>
	);
};
