import { ShoppingBasketIcon } from 'lucide-react';

export default function LoadingPage() {
	return (
		<main className="grid place-items-center fixed inset-0 bg-black/70">
			<div className="h-20 shadow-md bg-white text-bk-text flex items-center gap-3 rounded-full">
				<div className="size-16 shrink-0 flex items-center justify-center relative ml-2">
					<div className="absolute inset-0 border-[4px] border-zinc-100 border-t-violet-700 rounded-full animate-spin" />
					<ShoppingBasketIcon className="text-bk-link size-8 animate-pulse text-violet-700" />
				</div>

				<p className="mr-5 font-semibold">Page Loading...</p>
			</div>
		</main>
	);
}
