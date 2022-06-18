const express = require('express');
const cors = require('cors');
const app = express();
const formidable = require('express-formidable');
const userRoutes = require('./routes/user.routes.js');
const PORT = process.env.PORT || 8001;

const productController = require('./controller/products.controller.js');
const userController = require('./controller/user.controller.js');
const notifController = require('./controller/notification.controller.js');
const categoryController = require('./controller/category.controllers.js');
const corsOptions = {
    origin: "*"
};


app.use(formidable());
// app.use(express.json());
app.use(userRoutes);

// CORS configuration
app.use(cors(corsOptions));

//Routing
app.get('/', (req, res) => {
    res.json({
        message: "Index API"
    });
});

//controller products
app.get('/products', productController.getAllProduct);
app.get('/products/:id', productController.findProductById);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

//controller user
app.post('/register', userController.createUser);
app.put('/user/:id', userController.updateUser);

//controller notif
app.post('/notif', notifController.createNotif);
app.put('/notif/:id', notifController.findNotifById);

//controller category
app.get('/categories', categoryController.findAllCategory);
app.get('/categories/:id', categoryController.findCategoryById);
app.post('/categories', categoryController.createCategory);
// User endpoints
// app.post('/auth/signup', userController.createNewUserApi);

app.listen(PORT, () => {
    console.log(`App listen to port: ${PORT}`)
});