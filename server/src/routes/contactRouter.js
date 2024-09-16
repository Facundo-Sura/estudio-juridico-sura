const { Router } = require("express");
const contactHandler = require("../handler/contactHandler");

const contactRouter = Router()

contactRouter.post("/",contactHandler)

module.exports = contactRouter