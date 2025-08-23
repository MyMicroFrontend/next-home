import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'fakestoreapi.com' }]
	},
	async rewrites() {
		return [
			{
				source: '/cart',
				destination: `${process.env.CART_DOMAIN}/cart`,
				headers: [{ key: 'x-forwarded-host', value: 'main-app.com' }]
			},
			{
				source: '/cart/:path+',
				destination: `${process.env.CART_DOMAIN}/cart/:path+`,
				headers: [{ key: 'x-forwarded-host', value: 'main-app.com' }]
			}
		];
	}
};

export default nextConfig;
