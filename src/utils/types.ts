export type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
};

export type Rating = {
	rate: number;
	count: number;
};

export type Cart = {
	productId: number;
	count: number;
};

export type CookieStorageKeys = 'cart';

export type CookieServiceBaseOptions = {
	name: CookieStorageKeys;
};

export type CookieServiceSetGetOptions<T> = CookieServiceBaseOptions & {
	value: T;
	expires?: Date;
};
