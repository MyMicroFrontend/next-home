import axios, { Axios } from 'axios';
import { app } from './constants';

export class AxiosApi {
	private client: Axios;

	constructor(private baseUrl: string = app.apiUrl) {
		this.client = axios.create({ baseURL: this.baseUrl });
	}

	public async get<T>(url: string): Promise<T> {
		const response = await this.client.get<T>(url);

		return response.data;
	}
}
