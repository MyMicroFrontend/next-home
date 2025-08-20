import type { Metadata } from 'next';
import { Geist, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';

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
				<Header />
				{children}
			</body>
		</html>
	);
}
