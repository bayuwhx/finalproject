const express = require('express');
const cors = require('cors');
const router = express.Router();
const userController = require('../controller/users.controller.js');

// Create a new user
router.post('/auth/signup', userController.createNewUserApi);
// Retrieve all user
// router.get("/", user.findAll);
// Retrieve all published user
// router.get("/published", user.findAllPublished);
// Retrieve a single Tutorial with id
// router.get("/:id", user.findOne);
// Update a Tutorial with id
// router.put("/:id", user.update);
// Delete a Tutorial with id
// router.delete("/:id", user.delete);
// Create a new Tutorial
// router.delete("/", user.deleteAll);
// router.use('/api/user', router);

module.exports = router;