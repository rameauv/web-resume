import * as ApiErrors from './ApiErrors'

function injectAuthHeader(header, token) {
    if (token) {
        header.Authorization = `Bearer ${token}`;
        return header;
    } else {
        return {};
    }
}

export class ApiService {
    _URL = "http://localhost:3000/api";
    /**
     * Get query string
     *
     * @param   {*}   query   query object (any object that Object.entries() can handle)
     * @returns {string}      query string
     */
    objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    getContact() {
        return fetch(`${this._URL}/contact`, {
            method: "GET",
        }).then(res => res.json()).catch((err) => { throw err });
    }

    getWorkingExperiences() {
        return new Promise((resolve, reject) => {
            fetch(`${this._URL}/workingExperiences`, {
                method: "GET",
            }).then(resJson => resJson.json().then((res) => {
                res.workingExperiences = res.workingExperiences.map((item) => {
                    item.startingDate = new Date(item.startingDate)
                    item.endingDate = new Date(item.endingDate)
                    return (item);
                });
                resolve(res);
            }).catch(res => reject(res))).catch(err => reject(err))
        });
    }

    getCompetences() {
        return fetch(`${this._URL}/competences`, {
            method: "GET",
        }).then(res => res.json()).catch((err) => { throw err });
    }

    getUserDatas(userid) {
        return new Promise((resolve, reject) => {
            const queryString = this.objToQueryString({userid: userid});
            return fetch(`${this._URL}/userDatas?${queryString}`, {
                method: "GET",
            }).then(res => {
                console.log(res);
                res.json().then(resobj => {
                    if (!res.ok) {
                        reject(new Error(resobj.message));
                    }
                    resolve(resobj);
                }).catch((err) => { throw err });
            }).catch((err) => { throw err });
        });
    }

    getMyUserDatas(token) {
        return new Promise(async (resolve, reject) => {
            let headers = {};
            injectAuthHeader(headers, token);
            return fetch(`${this._URL}/myUserDatas?`, {
                method: "GET",
                headers: headers,
            }).then(res => {
                res.json().then(resobj => {
                    if (!res.ok) {
                        if (resobj.error.type === "invalidToken")
                            reject(new ApiErrors.InvalidToken());
                        reject(new Error(resobj.error.message));
                    }
                    resolve(resobj);
                }).catch((err) => { throw err });
            }).catch((err) => { throw err });
        });
    }

    async login(username, password) {
        return fetch(`${this._URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userid: username, password: password })
        }).then(async rawResponse => {
            var rsp = await rawResponse.json();
            return rsp;
        });
    }
}