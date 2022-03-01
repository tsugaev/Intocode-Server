const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.get("/", notesController.getNotes);
router.get("/students/:id", notesController.getStudentNotes);
router.post("/students/:id", notesController.addNote);
router.delete("/:id", notesController.deleteNote);
router.patch("/:id", notesController.editNote);

module.exports = router;
