const { Router } = require("express");
const { paidesController } = require("../controllers/paides.controller");

const router = Router();

router.get("/", paidesController.getPaides);
router.get("/:id/full-pay/students", paidesController.getPayingStudents);
router.get("/:id/not-pay/students", paidesController.getNotPayingStudents);
router.get("/:id/half-pay/students", paidesController.getPayingHalfStudents);
router.post("/", paidesController.addPaid);
router.delete("/:id", paidesController.deletePaid);
router.patch("/:id", paidesController.editPaid);

module.exports = router;
