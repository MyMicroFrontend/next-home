import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'fakestoreapi.com' }]
	},
	async rewrites() {
		return [
			{ source: '/cart', destination: `${process.env.CART_DOMAIN}/cart` },
			{ source: '/cart/:path+', destination: `${process.env.CART_DOMAIN}/cart/:path+` }
		];
	},
	compress: true,
	poweredByHeader: false
};

export default nextConfig;
