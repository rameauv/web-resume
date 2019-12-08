export class JwtService {
    getToken() {
        return(
            new Promise((resolve, reject) => {
                var token = localStorage.getItem('token');
                resolve(token);
            })
        );
    }
    setToken(token) {
        return(
            new Promise((resolve, reject) => {
                localStorage.setItem('token',token);
                resolve();
            })
        );
    }
    clear(){
        return(
            new Promise((resolve, reject) => {
                localStorage.clear('token');
                resolve();
            })
        );
    }
}