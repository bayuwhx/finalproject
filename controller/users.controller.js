const userService = require('../service/user.service.js');
const jwtUtil = require('../util/jwt.util.js');

exports.createNewUserApi = async (req, res) => {
    const user = await userService.createUser(req);

    res.status(201).json({ data: user });
}