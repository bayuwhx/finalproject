const db = require('../models');
const User = db.user;

exports.createUser = (req, res) => {
    if (req.body === null) {
        res.status(400).json({ message: "Body can't be null" });
    }

    const user = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    };

    User.create(user).then(data => {
        res.json(data);
    });
};

exports.updateUser = (req, res) => {
    const user = {
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        phone: req.body.phone,
        images: req.body.images
    };

    User.findByPk(req.params.id)
        .then(data => {
            if (data) {
                User.update(user, {
                    where: { id: req.params.id }
                });
                res.status(200).json({ message: 'Updated successfully' });
            } else {
                res.status(404).json({ message: `User not found with id : ${req.params.id}` })
            }
        });
};