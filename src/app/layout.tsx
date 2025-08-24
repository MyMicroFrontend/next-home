import { Header } from '@/components/layout/header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from './store-provider';
import { Toast } from '@/components/shared/toast/toast';
import { fetchCart } from '@/utils/base-actions';

const geistSans = Poppins({
	subsets: ['latin-ext'],
	weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
	title: 'Shopping',
	description: 'Shopping app with micro-frontend'
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const carts = await fetchCart();

	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>
				<StoreProvider carts={carts || []}>
					<Header />

					{children}

					<Toast position="bottom-right" />
				</StoreProvider>
			</body>
		</html>
	);
}
