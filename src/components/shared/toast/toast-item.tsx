'use client';

import { removeToast } from '@/stores/toast/actions';
import { ToastProps } from '@/utils/types';
import { BadgeInfoIcon, CheckIcon, InfoIcon } from 'lucide-react';
import { FC, useEffect } from 'react';

export const ToastItem: FC<ToastProps> = ({ id, message, variant, title }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(id);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div
			className={'rounded flex min-w-full sm:min-w-72 items-start max-w-full px-2 sm:px-4 py-3 z-[60] text-white'.concat(
				variant === 'success' ? ' bg-green-700' : '',
				variant === 'error' ? ' bg-red-700' : '',
				variant === 'warning' ? ' bg-amber-600' : '',
				variant === 'info' ? ' bg-sky-600' : ''
			)}>
			{variant === 'success' ? <CheckIcon className="mr-2 size-4 sm:size-6" /> : null}
			{variant === 'error' ? <BadgeInfoIcon className="mr-2 size-4 sm:size-6" /> : null}
			{variant === 'warning' ? <InfoIcon className="mr-2 size-4 sm:size-6" /> : null}
			{variant === 'info' ? <InfoIcon className="mr-2 size-4 sm:size-6" /> : null}

			<div className="flex flex-col">
				<span className="font-semibold">{title?.toLocaleUpperCase() || variant.toLocaleUpperCase()}</span>
				<span dangerouslySetInnerHTML={{ __html: message }} className="whitespace-pre-line" />
			</div>
		</div>
	);
};
