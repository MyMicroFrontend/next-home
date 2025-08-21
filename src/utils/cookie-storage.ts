import { cookies } from 'next/headers';
import { CookieServiceBaseOptions, CookieServiceSetGetOptions, CookieStorageKeys } from './types';

namespace CookieService {
	export async function set<T>(options: CookieServiceSetGetOptions<T>) {
		if (!options.value) return;

		const cookieStorage = await cookies();

		const stringValue = typeof options.value === 'string' ? options.value : JSON.stringify(options.value);

		cookieStorage.set(options.name, stringValue, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires: options.expires });
	}

	export async function get(options: CookieServiceBaseOptions): Promise<string | null> {
		const cookieStorage = await cookies();
		const data = cookieStorage.get(options.name);

		return data?.value || null;
	}

	export async function getAndParse<T>(options: CookieServiceBaseOptions): Promise<T | null> {
		const value = await get(options);
		if (!value) return null;

		try {
			return JSON.parse(value);
		} catch {
			return null;
		}
	}

	export async function remove(name: CookieStorageKeys) {
		const cookieStorage = await cookies();

		cookieStorage.delete(name);
	}
}

export { CookieService };
