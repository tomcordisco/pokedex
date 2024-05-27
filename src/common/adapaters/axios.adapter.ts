import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/attp-adapter.interface';

export class AxiosAdapter implements HttpAdapter {
    get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>( URL );
            return data;
        }
    }
    
}