const db = require('../models');
const Product = db.Product;

//get all product
exports.getAllProduct = (req, res) => {
    Product.findAll().then(result => {
        res.json({data: result});
    })
};

exports.findProductById = (req, res) => {
    Product.findByPk(req.params.id).then(result => {
        if(result == null) {
            res.status(404).json({error: 'Data not found'});
        }
        res.json({data: result});
    });
};

exports.createProduct = (req, res) => {
    if (req.body === null) {
        res.status(400).json({ message: "Body can't be null" });
    }

    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images
    };

    Product.create(product).then(data => {
        res.json(data);
    });
};

exports.updateProduct = (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images
    };

    Product.findByPk(req.params.id)
        .then(data => {
            if (data) {
                Product.update(product, {
                    where: { id: req.params.id }
                });
                res.status(200).json({ message: 'Updated successfully' });
            } else {
                res.status(404).json({ message: `Product not found with id : ${req.params.id}` })
            }
        });
};

exports.deleteProduct = (req, res) => {
    Product.findByPk(req.params.id).then(result => {
        if (result != null) {
            result.destroy();

            res.status(204).json({ message: 'Delete Successfully' });
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    });

};