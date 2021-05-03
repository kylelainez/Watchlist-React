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

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ err: 'Email not found' });
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                res.status(404).json({ err: 'Bad credentials' });
            }
        });
    } catch (err) {
        res.status(400).json(err);
    }
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
