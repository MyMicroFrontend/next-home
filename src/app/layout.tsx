import { Header } from '@/components/layout/header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from './store-provider';
import { Toast } from '@/components/shared/toast/toast';

const geistSans = Poppins({
	subsets: ['latin-ext'],
	weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
	title: 'Shopping',
	description: 'Shopping app with micro-frontend'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>
				<StoreProvider>
					<Header />

					{children}

					<Toast position="bottom-right" />
				</StoreProvider>
			</body>
		</html>
	);
}
