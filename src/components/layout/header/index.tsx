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

				<form action="" className="ml-auto relative w-md">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#888888" className="absolute top-1/2 -translate-1/2 left-6">
						<path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
					</svg>

					<input placeholder="Search products.." className="h-10 text-sm w-full bg-zinc-100 pl-12 rounded-md pr-4 outline-0 border transition-colors border-zinc-300 focus:border-zinc-500" />
				</form>

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
