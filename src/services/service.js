const API_EMAIL = '/api/v1/auth/check-email';
const API_PASSWORD = ''

export default class Service {
    constructor() {
        this._apiBase = 'https://lumus.wistis.ru'
    }

    async getEmail(ref) {
        const url = new URL(
            "https://lumus.wistis.ru/api/v1/auth/check-email"
        );
        
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "email": `${ref}`
        };
        
        return await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
    }

    async getRegister(name, phone, email, password) {
        const url = new URL(
            "https://lumus.wistis.ru/api/v1/auth/register"
        );
        
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "name": `${name}`,
            "phone": `${phone}`,
            "email": `${email}`,
            "password": `${password}`,
        };
        
        return await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
        
    }

    async auth(email, password) {
        const url = new URL(
            "https://lumus.wistis.ru/api/v1/auth/login"
        );
        
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "email": `${email}`,
            "password": `${password}`
        };
        
        return await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
    }

     
}



