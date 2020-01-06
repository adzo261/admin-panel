import express from 'express';
import Tasks from '../controllers/task.controller';

const router = express.Router();

router.post('/create', Tasks.addTask);
router.get('/get/:email', Tasks.getTasks);
router.get('/get', Tasks.getAllTasks);
router.put('/update/:id', Tasks.updateTask);
router.delete('/remove/:id', Tasks.removeTask);

export default router;
