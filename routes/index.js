const { Router } = require("express");

router = Router();

router.use("/students", require("./students.route"));
router.use("/groups", require("./groups.route"));
router.use("/notes", require("./notes.route"));
router.use("/statuses", require("./statuses.route"));
router.use("/paides", require("./paides.route"));

module.exports = router;
