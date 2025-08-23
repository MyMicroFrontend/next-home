import { Rating as RatingType } from '@/utils/types';
import { StarIcon } from 'lucide-react';
import { FC } from 'react';

export const Rating: FC<{ rating: RatingType }> = ({ rating }) => {
	return (
		<div className="flex items-center">
			<StarIcon className="size-4 fill-yellow-400 text-yellow-400" />
			<p className="ms-2 text-sm font-bold">{rating.rate}</p>
			<span className="w-1 h-1 mx-1.5 bg-gray-400 rounded-full"></span>
			<span className="text-sm font-medium underline hover:no-underline">{rating.count} reviews</span>
		</div>
	);
};
