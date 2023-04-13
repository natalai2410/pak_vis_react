class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _returnResult(result) {
        if (result.ok) {
            return result.json();
        }
        return Promise.reject(`Упс... Что-то пошло не так: ${result.statusText}`);
    }


    authorize() {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(result => {
            return this._returnResult(result)});
    }



}

const mainApi = new MainApi({
    //baseUrl: 'http://localhost:3000',
    baseUrl: 'https://api.kryukova.nomoredomains.icu',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default mainApi;


