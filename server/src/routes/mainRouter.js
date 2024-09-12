const {Router} = require("express")

const mainRouter = Router()
mainRouter.get("/", (req, res) => {
    res.status(200).send('estas en el home')
})

module.exports = mainRouter;