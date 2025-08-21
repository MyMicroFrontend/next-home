import Link from 'next/link';
import { Container } from '../../shared/container';
import { HeaderMenu } from './menu';
import { user } from '@/utils/constants';
import { Button } from '@/components/shared/button';
import { CartBtn } from './cart-btn';

export const Header = () => {
	return (
		<header className="shadow-sm sticky backdrop-blur-2xl">
			<Container className="h-14 flex items-center">
				<div>
					<Link href="/" className="text-lg cursor-pointer">
						Micro <span className="text-violet-700 font-semibold">Shop</span>
					</Link>
				</div>

				<nav className="mx-auto">
					<HeaderMenu />
				</nav>

				<div className="flex items-center justify-end gap-2">
					<CartBtn />
				</div>
			</Container>
		</header>
	);
};
