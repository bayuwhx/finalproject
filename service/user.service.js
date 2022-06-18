const bcrypt = require('bcrypt');
const jwtUtil = require('../util/jwt.util.js');
const userRepository = require('../repository/users.repository.js');

exports.createUser = async (payload) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(payload.fields.password, salt);

    const user = {
        name: payload.fields.name,
        email: payload.fields.email,
        password: encryptedPassword
    };

    if (user != null) {
        return await userRepository.save(user);
    } else {
        return null;
    }

};