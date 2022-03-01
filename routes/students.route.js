const { Router } = require("express");
const { studentsController } = require("../controllers/students.controller");

const router = Router();

router.get("/", studentsController.getStudents);
router.post("/", studentsController.addStudent);
router.delete("/:id", studentsController.deleteStudent);
router.patch("/:id", studentsController.editStudent);

module.exports = router;
