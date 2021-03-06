const db = require('../models');
const Category = db.category;

exports.findAllCategory = (request, response) => {
    Category.findAll().then(result => {
        response.json({ data: result });
    });
};

exports.findCategoryById = (req, res) => {
    Category.findByPk(req.params.id).then(result => {
        if (result == null) {
            res.status(404).json({ error: "Data not found" });
        }

        res.json({ data: result });
    });
};

exports.createCategory = (req, res) => {
    if (req.body === null) {
        res.status(400).json({ message: "Body can't be null" });
    }

    const category = {
        category: req.body.category,
    };

    Category.create(category).then(data => {
        res.json(data);
    });
};
 