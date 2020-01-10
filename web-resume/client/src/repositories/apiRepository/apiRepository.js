import * as ApiErrors from './ApiErrors';

function injectAuthHeader(header, token) {
  if (token) {
    header.Authorization = `Bearer ${token}`;
    return header;
  }
  return {};
}

/**
* Get query string
*
* @param   {*}   query   query object (any object that Object.entries() can handle)
* @returns {string}      query string
*/
function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
}

const initRepository = (url) => {
  const getUserDataAsync = async (userid) => {
    return new Promise((resolve, reject) => {
      const queryString = objToQueryString({ userid });
      return fetch(`${url}/userDatas?${queryString}`, {
        method: 'GET',
      }).then((res) => {
        res.json().then((resobj) => {
          if (!res.ok) {
            reject(new Error(resobj.message));
          }
          resolve(resobj);
        }).catch((err) => { throw err; });
      }).catch((err) => { throw err; });
    });
  };

  const getMyUserDataAsync = async (token) => {
    return new Promise((resolve, reject) => {
      const headers = {};
      injectAuthHeader(headers, token);
      return fetch(`${url}/myUserDatas?`, {
        method: 'GET',
        headers,
      }).then((res) => {
        res.json().then((resobj) => {
          if (!res.ok) {
            if (resobj.error.type === 'invalidToken') {
              reject(new ApiErrors.InvalidToken());
            }
            reject(new Error(resobj.error.message));
          }
          resolve(resobj);
        }).catch((err) => { throw err; });
      }).catch((err) => { throw err; });
    });
  };

  const loginAsync = async (credentials) => {
    const { username } = credentials;
    const { password } = credentials;
    return fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid: username, password }),
    }).then(async (rawResponse) => {
      const rsp = await rawResponse.json();
      return rsp;
    });
  };
  return {
    getUserDataAsync,
    getMyUserDataAsync,
    loginAsync,
  };
};

export default initRepository;
