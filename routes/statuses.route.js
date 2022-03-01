const { Router } = require("express");
const { statusController } = require("../controllers/statuses.controller");

const router = Router();

router.get("/", statusController.getStatuses);
router.get("/:id/students", statusController.getStudentByStatus);
router.post("/", statusController.addStatus);
router.delete("/:id", statusController.deleteStatus);
router.patch("/:id", statusController.editStatus);

module.exports = router;
