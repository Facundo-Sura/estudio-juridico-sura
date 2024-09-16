const { Router } = require("express");
const contactRouter = require("./contactRouter");

const mainRouter = Router();

mainRouter.use("/contact", contactRouter);

module.exports = mainRouter;
