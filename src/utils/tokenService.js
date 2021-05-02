const setToken = (token) => {
    token
        ? localStorage.setItem('token', token)
        : localStorage.removeItem('token');
};

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('token', token);
        console.log('payload', payload);
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            return null;
        }
    }
    return token;
};

const getUserFromToken = () => {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
};

const removeToken = () => localStorage.removeItem('token');

export default {
    setToken,
    getToken,
    getUserFromToken,
    removeToken,
};
