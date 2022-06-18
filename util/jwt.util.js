const jwt = require('jsonwebtoken');

exports.generateToken = async (payload) => {
    return await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '60000s' });
};

exports.decodedToken = async (token) => {
    const decodedToken = await jwt.decode(token);

    return decodedToken;
};