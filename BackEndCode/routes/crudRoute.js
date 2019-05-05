const router = require('express').Router();

const school_controller = require('../controllers/crud')

router.get('/getStudentData', school_controller.getStudentData)
router.post('/deleteStudent/', school_controller.deleteStudent)
router.post('/addStudent', school_controller.addStudent)
router.post('/updateStudent', school_controller.updateStudent)

module.exports = router;
