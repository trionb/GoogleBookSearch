const path = require("path");
const router = require("express").Router()
const bookController = require("../contollers/bookController");

router.route("/api/books")
    .get(bookController.findAll)
    .post(bookController.create);

router.route("/api/books/:id")
    .delete(bookController.remove);

router.use(function (req, res) {
     res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports=router;