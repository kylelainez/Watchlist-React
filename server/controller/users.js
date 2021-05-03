const User = require('./../schema/User');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const signup = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        const token = createJWT(newUser);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);
    }
};

const login = (req, res) => {
    console.log(req.body);
};

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        SECRET,
        { expiresIn: '24h' }
    );
}

module.exports = {
    signup,
    login,
};
