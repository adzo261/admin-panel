import express from 'express';
import Mentors from '../controllers/mentor.controller';

const router = express.Router();

router.post('/create', Mentors.addMentor);
router.get('/get/:id', Mentors.getMentor);
router.get('/get', Mentors.getMentors);
router.put('/update/:id', Mentors.updateMentor);
router.delete('/remove/:id', Mentors.removeMentor);

export default router;
