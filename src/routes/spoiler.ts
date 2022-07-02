import express from "express";
const controller = require("../controller/spoilers");


const router = express.Router();

router.get("/spoilers/:id", controller.getOne)
router.get('/spoilers', controller.getAll)
router.post('/spoilers', controller.create)
router.put('/spoilers/:id', controller.update)
router.delete('/spoilers/:id', controller.delete)

export default router;