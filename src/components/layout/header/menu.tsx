import React from 'react';
import { MenuItem } from './menu-item';

export const HeaderMenu = () => {
	return (
		<ul role="menu" className="flex items-center gap-0.5">
			<MenuItem link="/products" text="All Products" />
		</ul>
	);
};
