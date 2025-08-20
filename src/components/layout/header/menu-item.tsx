'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type Props = {
	text: string;
	link: string;
};

export const MenuItem: FC<Props> = ({ link, text }) => {
	const pathname = usePathname();

	return (
		<li role="menuitem">
			<Link href={link} className={`h-8 px-5 inline-flex items-center justify-center hover:bg-violet-50 transition-colors rounded ${pathname === link ? ` bg-violet-100 hover:bg-violet-100 font-semibold text-violet-900` : ''}`}>
				{text}
			</Link>
		</li>
	);
};
