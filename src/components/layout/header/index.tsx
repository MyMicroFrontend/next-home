import { Container } from '../../shared/container';
import { CartBtn } from './cart-btn';
import { HeaderMenu } from './menu';

export const Header = () => {
	return (
		<header className="shadow-sm sticky backdrop-blur-2xl">
			<Container className="h-14 flex items-center">
				<div>
					<a href="/" className="text-lg cursor-pointer">
						Micro <span className="text-violet-700 font-semibold">Shop</span>
					</a>
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
