'use client';

import { useToasts } from '@/stores/toast/hooks';
import { FC } from 'react';
import { ToastItem } from './toast-item';

type Props = {
	position: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
};

export const Toast: FC<Props> = ({ position }) => {
	const toasts = useToasts();

	return (
		<div
			className={'fixed z-[60] grid gap-y-3'.concat(
				position === 'top-left' ? ' top-2 sm:top-4 left-2 sm:left-4' : '',
				position === 'top' ? ' top-2 sm:top-4 left-1/2 -translate-x-1/2' : '',
				position === 'top-right' ? ' top-2 sm:top-4 right-2 sm:right-4' : '',
				position === 'bottom-left' ? ' bottom-2 sm:bottom-4 left-2 sm:left-4' : '',
				position === 'bottom' ? ' bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2' : '',
				position === 'bottom-right' ? ' bottom-2 sm:bottom-4 right-2 sm:right-4' : ''
			)}>
			{toasts.map((_toast) => (
				<ToastItem key={_toast.id} {..._toast} />
			))}
		</div>
	);
};
