const User = require('./../schema/User');

const signup = (req, res) => {
    console.log(req.body);
};

const login = (req, res) => {
    console.log(req.body);
};

module.exports = {
    signup,
    login,
};
