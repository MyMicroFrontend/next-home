import React, { ComponentPropsWithRef, FC } from 'react';

type Props = ComponentPropsWithRef<'button'> & Partial<{ variant: 'primary' | 'secondary'; size: 'icon' | 'small' | 'normal' | 'large' }>;

export const Button: FC<Props> = ({ className, size = 'normal', variant = 'primary', ...props }) => {
	return (
		<button
			{...props}
			className={'border cursor-pointer transition-colors [&>svg]:size-5 flex items-center justify-center'.concat(
				className ? ` ${className}` : '',

				size === 'icon' ? ' size-8 rounded-full' : '',
				size === 'small' ? ' h-8 px-4 rounded' : '',
				size === 'normal' ? ' h-10 px-4 rounded-md font-semibold' : '',
				size === 'large' ? ' h-11 px-6 rounded-lg font-bold' : '',

				variant === 'primary' ? ' bg-violet-700 text-white border-violet-700 hover:bg-violet-800' : '',
				variant === 'secondary' ? ' bg-zinc-50 text-zinc-950 border-zinc-400 hover:bg-violet-50' : ''
			)}
		/>
	);
};
