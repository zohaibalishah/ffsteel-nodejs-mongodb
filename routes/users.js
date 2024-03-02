const express = require('express');
const router = express.Router();
const userController=require("../controllers/users")

router.get("/",userController.getUser)
router.get("/search",userController.search)
router.post("/create",userController.createuser)
router.delete("/delete/:id",userController.deleteUser)
router.put("/update/:id",userController.updateUser)

module.exports = router;
