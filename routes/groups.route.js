const { Router } = require("express");
const { groupsController } = require("../controllers/groups.controller");

const router = Router();

router.get("/", groupsController.getGroups);
router.get("/:id/students", groupsController.getGroupStudents);
router.get("/:id/offer/students", groupsController.getPercentOffersOfGroup);
router.get("/week/show", groupsController.getGroupsByWeek);
router.post("/", groupsController.addGroup);
router.delete("/:id", groupsController.deleteGroup);
router.patch("/:id", groupsController.editGroup);

module.exports = router;
