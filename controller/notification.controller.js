const db = require('../models');
const Notif = db.notification;

exports.createNotif = (req, res) => {
    if (req.body === null) {
        res.status(400).json({ message: "Body can't be null" });
    }

    const notif = {
        id_user: req.body.id_user,
        notification: req.body.notification,
    };

    Notif.create(notif).then(data => {
        res.json(data);
    });
};

exports.findNotifById = (req, res) => {
    Notif.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({error: 'Data not found'});
        }
        res.json({data: result});
    });
};