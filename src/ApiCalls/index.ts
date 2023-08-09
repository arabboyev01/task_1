import axios from 'axios'

export class ApiCaller {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    static async makeGetRequest(endpoint: string): Promise<any> {
        // @ts-ignore
        const url = `${this.baseUrl}/${endpoint}`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Request failed with status: ${response.status}`)
            return await response.json()

        } catch (error) {
            console.error('Error making GET request:', error);
            throw error;
        }
    }

     makeSignupReq = async (endpoint: string, name: string, email: string, password: string): Promise<any> => {
        // @ts-ignore
        const url = `${this.baseUrl}/${endpoint}`;
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        }

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) throw new Error(`Request failed with status: ${response.status}`);
            return await response.json();

        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}



