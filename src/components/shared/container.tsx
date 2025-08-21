import { ComponentPropsWithoutRef, ElementType } from 'react';

type PolymorphicProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export const Container = <T extends ElementType = 'div'>({ as, className, ...props }: PolymorphicProps<T>) => {
	const Component = as || 'div';

	return <Component {...props} className={`max-w-7xl px-2 md:px-3 lg:px-4 mx-auto ${className ? ` ${className}` : ''}`} />;
};
